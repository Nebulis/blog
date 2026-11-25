const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const PHOTOS_DIR = '/home/nebounet/blog/Photos';
const UPLOAD_DIR = path.join(PHOTOS_DIR, 'upload');
const LOCALES_DIR = '/home/nebounet/blog/src/locales';

// Configuration for each source folder
const FOLDER_CONFIG = {
  w: {
    breakpoints: [1800, 1200, 600],
    suffixes: { 1800: 'xl', 1200: 'lg', 600: 'md' },
    orientation: 'landscape',
  },
  h: {
    breakpoints: [1200, 600],
    suffixes: { 1200: 'lg', 600: 'md' },
    orientation: 'portrait',
  },
  pano: {
    breakpoints: [2400, 1800, 1200, 600],
    suffixes: { 2400: 'xxl', 1800: 'xl', 1200: 'lg', 600: 'md' },
    orientation: 'panorama',
  },
};

// Shared helper: resolve breakpoints and suffixes for a given image width and folder config
function resolveBreakpoints(width, config, label) {
  const sortedConfig = [...config.breakpoints].sort((a, b) => b - a);
  const secondLargest = sortedConfig[1];

  // Throw if image is smaller than the second-largest breakpoint (bypasses 2+ breakpoints)
  if (width < secondLargest) {
    throw new Error(
      `❌ ${label}: ${width}px wide is below ${secondLargest}px (bypasses 2+ breakpoints from [${sortedConfig.join(', ')}]). Fix or remove this image.`
    );
  }

  // Always return standard breakpoints and suffixes (with withoutEnlargement: true keeping native width)
  return {
    breakpoints: [...config.breakpoints].sort((a, b) => b - a),
    suffixMap: { ...config.suffixes },
  };
}

const QUALITY = 75;
const THUMBNAIL_WIDTH = 600;
const THUMBNAIL_QUALITY = 70;
const BATCH_SIZE = 10;
const BATCH_DELAY_MS = 4000;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Parse CLI args
const args = process.argv.slice(2);
const CLI_CONTEXT = args.find(a => !a.startsWith('--')) || '';
const RETRY_FAILED = args.includes('--retry-failed');

const LOCALE_PATH_ARG = args.find(a => a.startsWith('--locale-path='));
const rawLocalePath = LOCALE_PATH_ARG ? LOCALE_PATH_ARG.split('=')[1] : null;
const LOCALE_PATH = rawLocalePath ? rawLocalePath.replace(/^\/+|\/+$/g, '') : null;

// Validate required args
if (!LOCALE_PATH && !RETRY_FAILED) {
  console.error('❌ --locale-path is required (unless using --retry-failed)');
  console.error('');
  console.error('Usage:');
  console.error('  node transform-image.js "Location context" --locale-path=<path>');
  console.error('  node transform-image.js --retry-failed');
  console.error('');
  console.error('Arguments:');
  console.error('  "Location context"     Context for Gemini (e.g., "Angkor Wat, Cambodia")');
  console.error('  --locale-path           Path for locale files (src/locales/en/{path}.json)');
  console.error('                          Also used as R2 URL prefix for snippets.txt');
  console.error('  --retry-failed          Retry only images that failed in previous run');
  console.error('');
  console.error('Example:');
  console.error('  node transform-image.js "Angkor Wat, Cambodia" \\');
  console.error('    --locale-path=asia/cambodia/angkor-wat');
  console.error('  node transform-image.js --retry-failed');
  process.exit(1);
}

// Initialize Gemini client if API key available
let genai = null;
if (GEMINI_API_KEY) {
  genai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
} else {
  console.log('⚠️  GEMINI_API_KEY not found in .env — skipping AI naming, using original filenames');
}

function simplifyRatio(width, height) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(width, height);
  const exact = `${width / divisor}/${height / divisor}`;
  
  // Common aspect ratios with tolerance for 1-2 pixel rounding errors
  const commonRatios = [
    { ratio: 16/9, label: '16/9' },
    { ratio: 3/2, label: '3/2' },
    { ratio: 4/3, label: '4/3' },
    { ratio: 1/1, label: '1/1' },
    { ratio: 5/4, label: '5/4' },
    { ratio: 2/3, label: '2/3' },
    { ratio: 9/16, label: '9/16' },
    { ratio: 3/4, label: '3/4' },
  ];
  
  const actual = width / height;
  const tolerance = 0.005; // 0.5% tolerance for near-miss detection
  
  for (const { ratio, label } of commonRatios) {
    if (Math.abs(actual - ratio) / ratio < tolerance) {
      return label;
    }
  }
  
  return exact;
}

function sanitizeSlug(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function deduplicateSlugs(results, existingManifest = []) {
  const seen = new Map();

  // Pre-populate with slugs from existing manifest to prevent collisions across runs
  for (const entry of existingManifest) {
    if (entry.slug) {
      seen.set(entry.slug, 1);
    }
  }

  return results.map(r => {
    let slug = r.slug;
    if (seen.has(slug)) {
      let count = 2;
      while (seen.has(`${slug}-${count}`)) {
        count++;
      }
      slug = `${slug}-${count}`;
    }
    seen.set(slug, 1);
    return { ...r, slug };
  });
}

// Model fallback order (try newest first)
const MODELS = [
  // 'gemini-3.8-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash-lite',
];

// Gemini response schema
const GEMINI_SCHEMA = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      originalFile: { type: 'string' },
      slug: { type: 'string' },
      alt_en: { type: 'string' },
      alt_fr: { type: 'string' },
    },
    required: ['originalFile', 'slug', 'alt_en', 'alt_fr'],
  },
};

const GEMINI_TIMEOUT_MS = 60000; // 60 second timeout per request

function withTimeout(promise, ms, label) {
  let timer;
  const timeoutPromise = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(`${label} timeout after ${ms}ms`)), ms);
  });

  return Promise.race([promise, timeoutPromise]).finally(() => {
    clearTimeout(timer);
  });
}

async function generateWithFallback(genai, contentParts, config) {
  for (const model of MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return await withTimeout(
          genai.models.generateContent({
            model,
            contents: contentParts,
            config,
          }),
          GEMINI_TIMEOUT_MS,
          `Gemini ${model}`
        );
      } catch (err) {
        const isTransient =
          err.status === 503 ||
          err.status === 429 ||
          /503|429|UNAVAILABLE|high demand|RESOURCE_EXHAUSTED|timeout/i.test(err.message);
        const isNotFound = err.status === 404 || /404|NOT_FOUND/i.test(err.message);

        if (isNotFound) {
          console.warn(`  ⚠️  ${model} not available, trying next model...`);
          break; // skip retries for this model and move to next in MODELS
        }
        if (!isTransient) throw err;

        console.warn(`  ⚠️  ${model} busy (attempt ${attempt}), retrying in ${10 * attempt}s...`);
        await new Promise((r) => setTimeout(r, 10000 * attempt));
      }
    }
  }
  throw new Error('All Gemini models temporarily unavailable');
}

const SYSTEM_INSTRUCTION = `You are an SEO and travel photography assistant generating filenames and bilingual alt text for a French/English travel blog.

For each image provided (preceded by its "Filename: ..."), return a JSON object with:
1. "originalFile": Exact filename provided.
2. "slug": 3 to 5 lowercase English words separated by hyphens, ordered landmark-subject-detail (e.g., "angkor-wat-apsara-carvings-towers"). No filler words (the, of, in, photo), no accents, no numbers.
3. "alt_en": Natural, descriptive English alt text (10 to 18 words) describing what is visually in the frame and its location. Never start with "Photo of" or "Image of".
4. "alt_fr": Natural, idiomatic French alt text (12 to 22 words) written natively in French—do NOT translate word-for-word from English.
   - MUST include all proper French accents and apostrophes (é, è, ê, à, ç, î, ô, û, ').
   - Use natural French articles (un, une, des, le, la, les) and French geographical/temple names when applicable (e.g., "Cambodge", "Angkor Vat", "Mebon oriental", "douves", "nénuphars").
   - Never start with "Photo de" or "Image de".`;

async function callGeminiBatch(batch, context) {
  if (!genai) return batch.map(b => ({
    originalFile: b.originalFile,
    slug: sanitizeSlug(path.parse(b.originalFile).name),
    alt_en: '',
    alt_fr: '',
  }));

  const prompt = SYSTEM_INSTRUCTION + `

Context: ${context || 'Travel photography, location unknown'}

Return ONLY the JSON array matching the schema.`;

  // Interleave filename label + image buffer for each item so Gemini knows which is which
  const contentParts = [{ text: prompt }];
  for (const item of batch) {
    contentParts.push({ text: `Filename: ${item.originalFile}` });
    contentParts.push({
      inlineData: {
        mimeType: 'image/webp',
        data: item.thumbnailBuffer.toString('base64'),
      },
    });
  }

  try {
    const response = await generateWithFallback(genai, contentParts, {
      responseMimeType: 'application/json',
      responseSchema: GEMINI_SCHEMA,
      temperature: 0.3,
    });

    const parsed = JSON.parse(response.text || '[]');
    return parsed;
  } catch (err) {
    console.error(`  ❌ Gemini batch failed: ${err.message}`);
    // Re-throw with batch info so caller can handle failed images
    throw new Error(`GEMINI_BATCH_FAILED:${JSON.stringify(batch.map(b => b.originalFile))}:${err.message}`);
  }
}

async function processImages() {
  console.log('\n=== PASS 1: Local Sharp Prep ===');
  
  const allImages = [];
  
  for (const folderName of Object.keys(FOLDER_CONFIG)) {
    const inputDir = path.join(PHOTOS_DIR, folderName);
    const config = FOLDER_CONFIG[folderName];
    
    if (!fs.existsSync(inputDir)) {
      console.log(`Input directory not found: ${inputDir}`);
      continue;
    }
    
    const files = fs.readdirSync(inputDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
    if (files.length === 0) continue;
    
    console.log(`\nProcessing ${folderName}/ (${files.length} images)...`);
    
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const inputStats = fs.statSync(inputPath);
      
      // Materialize EXIF rotation
      const rotatedBuffer = await sharp(inputPath).rotate().toBuffer();
      const metadata = await sharp(rotatedBuffer).metadata();
      
      // Generate 600px thumbnail for Gemini
      const thumbnailBuffer = await sharp(rotatedBuffer)
        .resize({ width: THUMBNAIL_WIDTH, withoutEnlargement: true })
        .webp({ quality: THUMBNAIL_QUALITY })
        .toBuffer();
      
      const ratio = metadata.width / metadata.height;
      const simpleRatio = simplifyRatio(metadata.width, metadata.height);
      
      // Early validation using shared helper
      const { breakpoints: validBreakpoints } = resolveBreakpoints(metadata.width, config, file);
      
      // Generate fallback slug early for consistent dedup
      const fallbackSlug = sanitizeSlug(path.parse(file).name);
      
      allImages.push({
        originalFile: file,
        folderName,
        config,
        rotatedBuffer,
        thumbnailBuffer,
        metadata,
        inputStats,
        simpleRatio,
        inputPath,
        slug: fallbackSlug,  // Store fallback slug for consistent dedup
      });
      
      console.log(`  ${file}: ${metadata.width}x${metadata.height} (ratio: ${ratio.toFixed(3)} ≈ ${simpleRatio})`);
    }
  }
  
  return allImages;
}

async function processGeminiBatches(images, existingManifest = []) {
  console.log('\n=== PASS 2: Batched Gemini API Calls ===');
  
  if (!genai) {
    console.log('  Skipping Gemini (no API key) — using original filenames');
    return images.map(img => ({
      ...img,
      slug: sanitizeSlug(path.parse(img.originalFile).name),
      alt_en: '',
      alt_fr: '',
    }));
  }
  
  const results = [];
  const failedFiles = []; // Track all failed files across batches
  const batches = [];
  
  for (let i = 0; i < images.length; i += BATCH_SIZE) {
    batches.push(images.slice(i, i + BATCH_SIZE));
  }
  
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`  Batch ${i + 1}/${batches.length} (${batch.length} images)...`);
    
    const geminiBatch = batch.map(img => ({
      originalFile: img.originalFile,
      thumbnailBuffer: img.thumbnailBuffer,
    }));
    
    let geminiResults;
    try {
      geminiResults = await callGeminiBatch(geminiBatch, CLI_CONTEXT);
    } catch (err) {
      // Batch failed - mark all images in this batch as failed, do NOT add to results
      const batchFailedFiles = batch.map(b => b.originalFile);
      console.error(`  ❌ Batch failed, marking ${batchFailedFiles.length} images as failed`);
      
      // Add to failed files array
      failedFiles.push(...batchFailedFiles);
      
      // Write failed files to failed.json for retry
      const failedPath = path.join(UPLOAD_DIR, 'failed.json');
      let existingFailed = [];
      if (fs.existsSync(failedPath)) {
        try {
          existingFailed = JSON.parse(fs.readFileSync(failedPath, 'utf-8'));
        } catch {}
      }
      const updatedFailed = [...new Set([...existingFailed, ...failedFiles])];
      fs.writeFileSync(path.join(UPLOAD_DIR, 'failed.json'), JSON.stringify(updatedFailed, null, 2));
      console.log(`  📝 Added ${batchFailedFiles.length} images to failed.json`);
      
      // DO NOT add failed images to results - they should not be processed further
      continue;
    }
    
    // Map Gemini response items back to each image in the batch
    // Reject images with missing or empty AI slug instead of using fallback
    const batchMissing = [];
    for (let idx = 0; idx < batch.length; idx++) {
      const img = batch[idx];
      const item =
        geminiResults.find((p) => p.originalFile === img.originalFile) ||
        geminiResults[idx];

      const cleanSlug = item && item.slug ? sanitizeSlug(item.slug) : '';

      // Reject missing or empty AI entries instead of using fallbackSlug
      if (!item || !cleanSlug) {
        console.log(`  ⚠️  Missing AI metadata for ${img.originalFile}, marking as failed`);
        batchMissing.push(img.originalFile);
        continue;
      }

      results.push({
        ...img,
        slug: cleanSlug,
        alt_en: (item.alt_en || '').trim(),
        alt_fr: (item.alt_fr || '').trim(),
      });
    }

    if (batchMissing.length > 0) {
      failedFiles.push(...batchMissing);
      const failedPath = path.join(UPLOAD_DIR, 'failed.json');
      let existingFailed = [];
      if (fs.existsSync(failedPath)) {
        try {
          existingFailed = JSON.parse(fs.readFileSync(failedPath, 'utf-8'));
        } catch {}
      }
      const updatedFailed = [...new Set([...existingFailed, ...batchMissing])];
      fs.writeFileSync(path.join(UPLOAD_DIR, 'failed.json'), JSON.stringify(updatedFailed, null, 2));
      console.log(`  📝 Added ${batchMissing.length} missing-metadata image(s) to failed.json`);
    }
    
    // Delay between batches to avoid rate limits
    if (i < batches.length - 1) {
      console.log(`    Waiting ${BATCH_DELAY_MS}ms...`);
      await new Promise(resolve => setTimeout(resolve, BATCH_DELAY_MS));
    }
  }
  
  // Deduplicate slugs (including against existing manifest)
  return deduplicateSlugs(results, existingManifest);
}

async function writeOutputs(results, existingManifest = []) {
  console.log('\n=== PASS 3: Write Outputs ===');
  console.log(`  📝 Processing ${results.length} images...`);
  
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
  
  // Load existing snippets for merging
  const snippetsPath = path.join(UPLOAD_DIR, 'snippets.txt');
  let existingSnippets = [];
  if (fs.existsSync(snippetsPath)) {
    existingSnippets = fs.readFileSync(snippetsPath, 'utf-8').split('\n\n').filter(Boolean);
  }
  // Fix: snippets use image="..." not name="..."
  const existingSnippetSlugs = new Set(existingSnippets.map(s => {
    const match = s.match(/image="([^"]+)"/);
    return match ? match[1] : null;
  }).filter(Boolean));
  
  console.log(`  📂 Existing manifest: ${existingManifest.length} entries`);
  console.log(`  📄 Existing snippets: ${existingSnippetSlugs.size} entries`);
  
  const newManifest = [];
  const newSnippets = [];
  const localeData = { en: {}, fr: {} };
  
  console.log(`  🔄 Generating WebP variants for ${results.length} images...`);
  
  for (let i = 0; i < results.length; i++) {
    const img = results[i];
    const { slug, folderName, config, rotatedBuffer, metadata, simpleRatio, alt_en, alt_fr, originalFile } = img;
    const orientation = config.orientation;
    
    // Resolve breakpoints and suffixes using shared helper
    const { breakpoints: validBreakpoints, suffixMap: effectiveSuffixes } = resolveBreakpoints(metadata.width, config, slug);
    
    // Generate WebP variants
    console.log(`  🖼️  [${i+1}/${results.length}] ${slug}: Generating ${validBreakpoints.length} WebP variants (${validBreakpoints.join(', ')}px)...`);
    for (const width of validBreakpoints) {
      const suffix = effectiveSuffixes[width];
      const outputPath = path.join(UPLOAD_DIR, `${slug}-${suffix}.webp`);
      
      await sharp(rotatedBuffer)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);
    }
    console.log(`  ✅ [${i+1}/${results.length}] ${slug}: WebP variants generated`);
    
    // Manifest entry
    const aspectRatio = metadata.width / metadata.height;
    const needsAspectRatio = Math.abs(aspectRatio - (orientation === 'landscape' ? 1.5 : 2/3)) > 0.02;
    
    const manifestEntry = {
      slug,
      originalFile,
      orientation,
      width: metadata.width,
      height: metadata.height,
      aspectRatio: aspectRatio.toFixed(3),
      simpleRatio,
      breakpoints: validBreakpoints,
      suffixes: validBreakpoints.map(w => effectiveSuffixes[w]),
      alt_en,
      alt_fr,
      needsAspectRatio,
    };
    newManifest.push(manifestEntry);
    
    // Generate R2Image snippet (only if new)
    const imagePath = LOCALE_PATH ? `${LOCALE_PATH}/${slug}` : slug;
    if (!existingSnippetSlugs.has(imagePath)) {
      const props = [];
      props.push(`image="${imagePath}"`);
      props.push(`alt={t("photos.${slug}")}`); // Use translation key
      props.push(`orientation="${orientation}"`);
      if (needsAspectRatio) props.push(`aspectRatio=${aspectRatio.toFixed(3)}`);
      
      newSnippets.push(`<R2Image\n  ${props.join('\n  ')}\n/>`);
    }
    
    // Locale data for translation files
    if (LOCALE_PATH) {
      localeData.en[slug] = alt_en;
      localeData.fr[slug] = alt_fr;
    }
  }
  
  // Merge manifests (dedupe by slug)
  const allManifest = [...existingManifest, ...newManifest];
  const dedupedManifest = [];
  const seenSlugs = new Set();
  for (const entry of allManifest) {
    if (!seenSlugs.has(entry.slug)) {
      dedupedManifest.push(entry);
      seenSlugs.add(entry.slug);
    }
  }
  
  // Merge snippets
  const allSnippets = [...existingSnippets, ...newSnippets];
  
  // Write manifest.json
  console.log(`  💾 Writing manifest.json (${dedupedManifest.length} entries)...`);
  fs.writeFileSync(
    path.join(UPLOAD_DIR, 'manifest.json'),
    JSON.stringify(dedupedManifest, null, 2)
  );
  console.log(`  ✅ manifest.json written (${dedupedManifest.length} entries)`);
  
  // Write snippets.txt
  console.log(`  💾 Writing snippets.txt (${allSnippets.length} entries)...`);
  fs.writeFileSync(
    path.join(UPLOAD_DIR, 'snippets.txt'),
    allSnippets.join('\n\n')
  );
  console.log(`  ✅ snippets.txt written (${allSnippets.length} entries)`);
  
  // Write locale JSON files - merge into main page JSON (e.g., angkor-wat.json) under "photos" key
  if (LOCALE_PATH && (Object.keys(localeData.en).length > 0 || Object.keys(localeData.fr).length > 0)) {
    const localeOutputDir = path.join(LOCALES_DIR);
    const pathParts = LOCALE_PATH.split('/');
    const pageFileName = pathParts[pathParts.length - 1] + '.json'; // e.g., angkor-wat.json
    const pageDir = pathParts.slice(0, -1).join('/'); // e.g., asia/cambodia
    
    for (const lang of ['en', 'fr']) {
      const langDir = path.join(localeOutputDir, lang, pageDir);
      fs.mkdirSync(langDir, { recursive: true });
      
      const localeFile = path.join(langDir, pageFileName);
      let existing = {};
      if (fs.existsSync(localeFile)) {
        try {
          existing = JSON.parse(fs.readFileSync(localeFile, 'utf-8'));
        } catch {}
      }
      
      // Sort photos keys alphabetically for consistent ordering
      function sortObjectKeys(obj) {
        return Object.keys(obj).sort().reduce((acc, key) => {
          acc[key] = obj[key];
          return acc;
        }, {});
      }
      
      // Merge photos into existing page JSON under "photos" key
      const mergedPhotos = { ...(existing.photos || {}), ...localeData[lang] };
      const merged = { 
        ...existing, 
        photos: sortObjectKeys(mergedPhotos) 
      };
      console.log(`  💾 Writing ${lang}/${pageDir}/${pageFileName}...`);
      fs.writeFileSync(localeFile, JSON.stringify(merged, null, 2));
      console.log(`  ✅ ${lang}/${pageDir}/${pageFileName} updated with photos`);
    }
  }
  
  return dedupedManifest;
}

async function main() {
  // Create upload directory if not exists (don't clean)
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }
  
  console.log('🚀 Transform + AI Naming Pipeline');
  if (CLI_CONTEXT) console.log(`📍 Context: ${CLI_CONTEXT}`);
  if (LOCALE_PATH) console.log(`📝 Locale path (also R2 prefix): ${LOCALE_PATH}`);
  if (RETRY_FAILED) console.log(`🔁 Retry mode: processing failed images only`);
  
  // Load existing manifest to skip already processed
  const manifestPath = path.join(UPLOAD_DIR, 'manifest.json');
  let existingManifest = [];
  if (fs.existsSync(manifestPath)) {
    try {
      existingManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    } catch {}
  }
  // Map originalFile -> slug from existing manifest for accurate dedup
  const existingFileToSlug = new Map(existingManifest.map(m => [m.originalFile, m.slug]));
  
  // Load failed.json for retry mode
  const failedPath = path.join(UPLOAD_DIR, 'failed.json');
  let failedImages = [];
  if (RETRY_FAILED && fs.existsSync(failedPath)) {
    try {
      failedImages = JSON.parse(fs.readFileSync(failedPath, 'utf-8'));
      console.log(`🔁 Retry mode: ${failedImages.length} failed images to retry`);
    } catch {}
  }
  
  const images = await processImages();
  
  // Filter images based on mode
  let imagesToProcess = images;
  if (RETRY_FAILED) {
    // Only process images that failed previously
    imagesToProcess = images.filter(img => failedImages.includes(img.originalFile));
    if (imagesToProcess.length === 0) {
      console.log('✅ No failed images to retry');
      process.exit(0);
    }
  } else {
    // Skip already processed using originalFile -> slug mapping from manifest
    imagesToProcess = images.filter(img => !existingFileToSlug.has(img.originalFile));
    const skipped = images.length - imagesToProcess.length;
    if (skipped > 0) console.log(`⏭️  Skipped ${skipped} already processed images`);
  }
  
  if (imagesToProcess.length === 0) {
    console.log('✅ Nothing to process');
    process.exit(0);
  }
  
  try {
    const results = await processGeminiBatches(imagesToProcess, existingManifest);
    const manifest = await writeOutputs(results, existingManifest);
    
    // Update failed.json - track which files actually got AI results
    // Reload failed.json to include any newly failed images from this run
    let currentFailed = [];
    if (fs.existsSync(failedPath)) {
      try {
        currentFailed = JSON.parse(fs.readFileSync(failedPath, 'utf-8'));
      } catch {}
    }
    
    // Track which files got actual AI results (have alt_en or alt_fr)
    const succeededFiles = new Set(results.filter(r => r.alt_en || r.alt_fr).map(r => r.originalFile));
    const currentFailedFiltered = currentFailed.filter(f => !succeededFiles.has(f));
    
    // Also add any newly failed files from this run (those without AI results)
    const newlyFailed = results
      .filter(r => !r.alt_en && !r.alt_fr)
      .map(r => r.originalFile);
    const allFailed = [...new Set([...currentFailedFiltered, ...newlyFailed])];
    
    if (allFailed.length > 0) {
      fs.writeFileSync(path.join(UPLOAD_DIR, 'failed.json'), JSON.stringify(allFailed, null, 2));
      console.log(`⚠️  ${allFailed.length} images failed (saved to failed.json)`);
    } else if (fs.existsSync(failedPath)) {
      fs.rmSync(failedPath);
    }
    
    console.log('\n✅ All images processed successfully!');
    console.log(`   📁 Output: ${UPLOAD_DIR}`);
    console.log(`   📋 Manifest: ${manifest.length} entries`);
    console.log(`   🖼️  Images with AI alt texts: ${manifest.filter(m => m.alt_en && m.alt_fr).length}`);
    console.log(`   ⚠️  Failed images: ${allFailed.length} (see failed.json)`);
    process.exit(0);
  } catch (err) {
    console.error('\n❌ Fatal error:', err.message);
    process.exit(1);
  }
}

main().catch(console.error);
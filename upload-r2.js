const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// === CONFIG ===
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET = process.env.R2_BUCKET;
const UPLOAD_DIR = '/home/nebounet/blog/Photos/upload';

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY || !R2_SECRET_KEY || !R2_BUCKET) {
  console.error('Missing required env vars: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET');
  console.error('Add them to .env file (see .env.example)');
  process.exit(1);
}

// Path prefix argument (e.g., "blog/angkor")
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const rawPrefix = args.find(a => !a.startsWith('--'));
const PREFIX = rawPrefix ? rawPrefix.replace(/^\/+|\/+$/g, '') : '';

if (!PREFIX) {
  console.error('Usage: node upload-r2.js <prefix> [--force]');
  console.error('Example: node upload-r2.js blog/angkor');
  console.error('  --force  Overwrite existing objects');
  process.exit(1);
}

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY,
    secretAccessKey: R2_SECRET_KEY,
  },
});

async function uploadFile(localPath, key, force = false) {
  const file = fs.readFileSync(localPath);
  const contentType = 'image/webp';
  
  await client.send(new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: file,
    ContentType: contentType,
    CacheControl: 'public, max-age=31536000, immutable',
    IfNoneMatch: force ? undefined : '*', // Fail if object already exists (unless --force)
  }));
  
  return key;
}

async function main() {
  if (!fs.existsSync(UPLOAD_DIR)) {
    console.error('Upload directory not found:', UPLOAD_DIR);
    console.error('Run transform-image.js first.');
    process.exit(1);
  }

  // Flat output: all .webp files directly in UPLOAD_DIR
  const files = fs.readdirSync(UPLOAD_DIR).filter(f => f.endsWith('.webp'));
  let totalFiles = 0;
  let uploaded = 0;

  console.log(`\n=== Uploading ${files.length} files ===`);
  
  for (const file of files) {
    const localPath = path.join(UPLOAD_DIR, file);
    const key = `${PREFIX}/${file}`;
    
    try {
      await uploadFile(localPath, key, FORCE);
      console.log(`  ✅ ${file} → ${key}`);
      uploaded++;
    } catch (err) {
      if (err.name === 'PreconditionFailed' || err.$metadata?.httpStatusCode === 412) {
        console.log(`  ⏭️  ${file} → ${key} (already exists, skipped)`);
      } else {
        console.error(`  ❌ ${file}: ${err.message}`);
      }
    }
    totalFiles++;
  }

  console.log(`\n✅ Uploaded ${uploaded}/${totalFiles} files to ${R2_BUCKET}/${PREFIX}/`);
}

main().catch(err => {
  console.error('Upload failed:', err);
  process.exit(1);
});
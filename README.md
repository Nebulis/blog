[![CircleCI](https://circleci.com/gh/Nebulis/blog.svg?style=svg)](https://circleci.com/gh/Nebulis/blog)

# Magic of Travels - Image Processing Scripts

Three scripts for processing, uploading, and managing travel blog images.

## Scripts Overview

| Script | Purpose | Input | Output |
|--------|---------|-------|--------|
| `transform-image.js` | Convert, resize, AI-naming | `Photos/w/`, `Photos/h/`, `Photos/pano/` | `Photos/upload/` + manifest |
| `upload-r2.js` | Upload to Cloudflare R2 | `Photos/upload/` | R2 bucket |
| `clean-upload.js` | Clean upload directory | — | Empties `Photos/upload/` |

---

## 1. transform-image.js

Convert source images to WebP at multiple breakpoints, generate SEO slugs and alt texts via Gemini AI.

### Prerequisites
```bash
# .env file with:
GEMINI_API_KEY=your-gemini-key          # Optional: enables AI naming
GATSBY_R2_PUBLIC_BASE=https://img.magicoftravels.com  # R2 public URL
```

### Usage

```bash
# First run (new images)
node clean-upload.js                          # Optional: clean upload dir
node transform-image.js "Singapore during Christmas" --locale-path=asia/singapore/christmas-in-singapore

# Subsequent runs (add new images, skip existing)
node transform-image.js "New Location" --locale-path=asia/new/location

# Retry failed images from previous run
node transform-image.js --retry-failed
```

### Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| `"Location context"` | Yes* | Context for Gemini (e.g., "Angkor Wat, Cambodia") |
| `--locale-path=` | Yes* | Path for locale files: `asia/cambodia/angkor-wat` |
| `--retry-failed` | No | Retry only images that failed in previous run |

*Not required with `--retry-failed`

### Source Folders

| Folder | Orientation | Breakpoints | Suffixes |
|--------|-------------|-------------|----------|
| `Photos/w/` | Landscape | 1800, 1200, 600 | xl, lg, md |
| `Photos/h/` | Portrait | 1200, 600 | lg, md |
| `Photos/pano/` | Panorama | 2400, 1800, 1200, 600 | xxl, xl, lg, md |

### Outputs (to `Photos/upload/`)

| File | Description |
|------|-------------|
| `manifest.json` | All processed images with metadata |
| `snippets.txt` | Ready-to-paste `<R2Image />` components |
| `failed.json` | Images that failed (for `--retry-failed`) |
| `*.webp` | WebP variants at each breakpoint |

### Smart Features

- **Auto-breakpoints**: Images smaller than max breakpoint get custom breakpoint at source width (e.g., 1080px → `lg`)
- **Skip existing**: Re-runs skip images already in `manifest.json`
- **Resume failed**: `--retry-failed` processes only `failed.json` entries
- **Merge manifest**: Re-runs append to existing `manifest.json` and `snippets.txt`
- **AI naming**: Generates SEO slugs + bilingual alt texts (en/fr)
- **Fallback**: Works without Gemini API key (uses filenames)

---

## 2. upload-r2.js

Upload `Photos/upload/` to Cloudflare R2.

### Prerequisites
```bash
# .env file with:
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_BUCKET=your-bucket-name
```

### Usage

```bash
# Upload all files in Photos/upload/ to R2 bucket/path/
node upload-r2.js asia/cambodia/angkor-wat

# Force overwrite existing files
node upload-r2.js asia/cambodia/angkor-wat --force
```

### Behavior

- **Skips existing**: Uses `IfNoneMatch: *` to avoid overwrites
- **Flat structure**: Uploads directly to prefix (no w/h subfolders)
- **Cache headers**: Sets `Cache-Control: public, max-age=31536000, immutable`
- **Idempotent**: Safe to re-run; only uploads new files

---

## 3. clean-upload.js

Empty the `Photos/upload/` directory.

### Usage

```bash
node clean-upload.js
```

**Warning**: Deletes all files in `Photos/upload/`. Use before first transform run if you want a clean slate.

---

## Typical Workflow

```bash
# 1. Add source images to Photos/w/, Photos/h/, Photos/pano/
# 2. (Optional) Clean upload
node clean-upload.js

# 3. Transform with AI naming
node transform-image.js "Angkor Wat, Cambodia" --locale-path=asia/cambodia/angkor-wat

# 3b. If some failed, retry
node transform-image.js --retry-failed

# 4. Upload to R2
node upload-r2.js asia/cambodia/angkor-wat

# 5. Use generated snippets in your pages
# See Photos/upload/snippets.txt for <R2Image /> components
```

---

## R2Image Component Usage

```tsx
import { R2Image } from "components/images/layout";

// Basic (landscape default)
<R2Image
  namespace="asia/cambodia/angkor-wat"
  name="angkor-wat-spires"
  orientation="landscape"
/>

// Portrait with custom aspect ratio
<R2Image
  namespace="asia/cambodia/angkor-wat"
  name="pre-rup-brick-towers"
  orientation="portrait"
  aspectRatio={9/16}
/>

// Custom breakpoints for small images
<R2Image
  namespace="asia/cambodia/angkor-wat"
  name="small-image"
  orientation="portrait"
  breakpoints={[1080, 600]}
/>

// Panorama (auto-injects orientation="panorama")
<Panorama>
  <R2Image namespace="asia/cambodia/angkor-wat" name="panorama-view" />
</Panorama>
```

---

## Environment Variables Summary

| Variable | Script | Required |
|----------|--------|----------|
| `GEMINI_API_KEY` | transform-image.js | No (fallback to filenames) |
| `GATSBY_R2_PUBLIC_BASE` | transform-image.js | No (default: https://img.magicoftravels.com) |
| `R2_ACCOUNT_ID` | upload-r2.js | Yes |
| `R2_ACCESS_KEY_ID` | upload-r2.js | Yes |
| `R2_SECRET_ACCESS_KEY` | upload-r2.js | Yes |
| `R2_BUCKET` | upload-r2.js | Yes |

---

## Legacy Scripts (Do Not Use)

- `node reset` — **Dangerous**: deletes `src/pages/asia/**/*.tsx`
- `node resize` — Manual pre-processing, not needed

---

## Generated Files Structure

```
Photos/
├── w/              # Landscape sources
├── h/              # Portrait sources
├── pano/           # Panorama sources
├── upload/         # Generated WebP variants
│   ├── *.webp      # WebP variants (xxl/xl/lg/md)
│   ├── manifest.json
│   ├── snippets.txt
│   └── failed.json (if any failures)
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Gemini timeout | Reduce `BATCH_SIZE` in script, or use `--retry-failed` |
| "Model not found" | Update `MODELS` array in script to available models |
| Upload skips files | Use `--force` to overwrite |
| Missing alt texts | Check `failed.json`, run `--retry-failed` |
| Duplicate slugs | Script auto-deduplicates; check `manifest.json` |
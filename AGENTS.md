# AGENTS.md

Guidance for agents and contributors working in this repository.

## What this project is

A statically generated, bilingual travel blog built with **Gatsby 4 + React 17 + TypeScript**.

- French pages live at the root (`/asia/japan/...`).
- English pages are generated under `/en/...`.
- Article copy lives in JSON translation files; there is one React page per article.
- Comments/likes use Firebase Realtime Database; newsletter/contact use Firebase Functions + Mailgun.
- Deployed with Netlify-style `_headers` / `_redirects`.

Repository scale: ~90 page files, ~178 locale files, ~1,500 images (~407 MB).
Treat the image pipeline as expensive.

## Commands

Run everything from the repository root.

| Task                         | Command                                     | Notes                            |
| ---------------------------- | ------------------------------------------- | -------------------------------- |
| Install                      | `npm ci`                                    | Node 20, see `.nvmrc`            |
| Dev server                   | `npm run develop`                           | `DEV_SSR=false`                  |
| Build                        | `npm run build`                             | Heavy: ~180 pages + Sharp        |
| Unit tests                   | `npm run test -- --runInBand`               | Jest, includes snapshots         |
| Integration tests            | `npm run build && npm run test:integration` | Reads `public/**/*.html`         |
| Update integration snapshots | `npm run test:integration -- -u`            | Run after adding a page          |
| Lint                         | `npm run lint`                              | ESLint, `--max-warnings 0`       |
| Types                        | `npx tsc --noEmit`                          | `npm run type-check` is the same |
| Format                       | `npm run format`                            | Prettier                         |

Verification before claiming work is done: `npm run lint && npx tsc --noEmit && npm run test -- --runInBand`.
Add `npm run build && npm run test:integration` when routes, SEO/meta, or page rendering changed.

## GitHub CLI

`gh` is installed and authenticated. Use it for PR operations:

```sh
# Open a PR for current branch
gh pr create --title "feat: description" --body "..."

# Or push and create in one step
git push origin HEAD && gh pr create --fill
```

Do not claim you cannot open PRs — `gh` is available.

## Branching Strategy

**Always start new work from the latest `master` branch.** Create a new feature branch for each task:

```sh
git checkout master
git pull origin master
git checkout -b feat/your-feature-name
```

- Do **not** carry commits from other branches unless explicitly requested
- Each PR should contain only the changes for one logical feature/fix
- If you need changes from another branch, rebase onto master or cherry-pick specific commits
- Keep branches focused and small for easier review

## Architecture map

```text
src/pages/**.tsx                      File-based French pages
src/locales/{fr,en}/**.json           Article copy, one pair per page
src/components/core/<continent>/<country>/<country>.tsx   Country layout + headline
src/components/core/<continent>/<country>/<country>.links.tsx   Link registry entry per country
src/components/core/links/links.configuration.ts          Builds the cachedLinks map
src/components/images/**.tsx          GraphQL image selectors for "extra" article images
src/images/**.jpg|png                 Source images, mirrored on the page path
src/components/firebase.ts            Firebase client (comments/likes)
firebase/functions/src/**             contact / newsletter / comment emails
gatsby-node.js                        Duplicates every page under /en
gatsby-config.js                      Plugins; robots allow/disallow list
```

Key pieces:

- **Link registry** (`src/components/core/links/`) is the source of truth for navigation, labels, publication dates, tags, seasons, and cards. `getLink(id)` **throws** `No link for <id>` when an ID is missing.
- **Publication** is controlled by `published: boolean | Date` on link entries. `isPublished()` treats a `Date` as "published once now >= date".
- **Content rendering** uses a custom mini-markdown processor (`src/mdx-pseudo-processor.tsx`) supporting `#bold#`, `_italic_`, links, and affiliate builders (`gyg:`, `booking-hotel:`, `maps:`, ...).

## Routing and languages

- **Never hand-create `/en` pages.** `gatsby-node.js#onCreatePage` calls `createPage()` twice: once at the original path, once with `en` prepended. Adding a file under `src/pages/` is enough to get both languages.
- The language is derived from the URL at runtime. Keep French text as the fallback, but always fill both locale files.
- There is no route-level i18n config to update when adding a page.

## Publishing rules

- An unpublished page (`published: false` or a future `Date`) is **still built and reachable by direct URL**. It is only hidden by a client-side redirect to `/404` in `src/components/layout/layout.tsx`.
- Do not rely on that redirect for confidentiality.
- `gatsby-plugin-robots-txt` allow/disallow entries in `gatsby-config.js` are maintained by hand, one entry per locale.

## Creating a new article

The generator creates four files. Run it with the page path **without** a leading slash:

```sh
npx plop page -- --pagePath asia/philippines/palawan/my-new-article
```

`npm run plop` starts the same generator interactively.

That produces:

| File                                                                | Purpose                                 |
| ------------------------------------------------------------------- | --------------------------------------- |
| `src/pages/asia/philippines/palawan/my-new-article.tsx`             | French page (English is auto-generated) |
| `src/locales/fr/asia/philippines/palawan/my-new-article.json`       | French copy                             |
| `src/locales/en/asia/philippines/palawan/my-new-article.json`       | English copy                            |
| `src/components/images/asia/philippines/palawan/my-new-article.tsx` | Image selector                          |

Template source: `plopfile.ts`, `templates/page.hbs`, `templates/translation.hbs`, `templates/image.hbs`.

## Creating a French region overview page (e.g., Grand Est, Centre-Val de Loire)

Region pages are **not created via plop** — they are manually created following the country page pattern. A region page acts like a mini-country page under France.

### Files to create/modify

| File                                                           | Purpose                                      |
| -------------------------------------------------------------- | -------------------------------------------- |
| `src/pages/europe/france/<region-id>/index.tsx`                | Region page component                        |
| `src/locales/fr/europe/france/<region-id>/index.json`          | French copy                                  |
| `src/locales/en/europe/france/<region-id>/index.json`          | English copy                                 |
| `src/components/core/europe/france/france.links.tsx`           | Add region to `cities` array                 |
| `src/components/core/europe/france/france.tsx`                 | Add weather entry in `franceWeatherEntries`  |
| `src/components/images/europe/france/shared-europe-images.tsx` | Add GraphQL query for home image             |
| `src/images/europe/france/home-<region-id>.jpg`                | Home image (required)                        |
| `src/components/core/links/links.configuration.test.ts`        | Add link assertion                           |
| `src/pages/europe/france/index.tsx`                            | Update to filter weather entries (if needed) |

### Steps

1. **Create the page component** at `src/pages/europe/france/<region-id>/index.tsx` modeled after `grand-est/index.tsx`:

   - Import locale files and register with i18n
   - Use `FranceBlogLayout`, `FranceImageAsMedallion`, `SharedFranceImages`
   - Include `PointOfInterestSection`, `WeatherForHomePage`
   - Set `currentPageId = "<region-id>"`

2. **Create locale files** with these required keys:

   ```json
   {
     "introduction": {
       "section1": "...",
       "section2": "..."
     },
     "meta-description": "...",
     "social-network-description": "...",
     "full-title": "<Region> | Guide de Voyage",
     "tour": { "title": "Parcourir", "subtitle": "La région d'un département à l'autre ..." },
     "inform": { "title": "S'informer", "subtitle": "À travers nos astuces, nos coups de cœur ..." },
     "weather": "Quand partir dans le",
     "weather-country": "<Region> ?",
     "section1": "POINTS D'INTÉRÊTS À VOIR",
     "section2": "NOTRE RÉCIT DE VOYAGE",
     "section3": "NOS VISITES DÉTAILLÉES",
     "section4": "QUAND PARTIR DANS LE <REGION> ?",
     "section5": "DÉCOUVRE LA FRANCE",
     "map": "Notre carte du",
     "title": "<Region>",
     "country": "<Region>"
   }
   ```

   Duplicate for English with translated values.

   **Note:** The `introduction` object should have both `section1` (general description) and `section2` (call-to-action like "Join us to discover..."). The page component renders both.

3. **Add link entry** in `france.links.tsx` under `cities`:

   ```ts
   {
     id: "<region-id>",
     label: { fr: "<Region>", en: "<Region>" },
     pointOfInterest: ["nature", "monument", "city"],
     imageProps: { image: "home<RegionPascalCase>" },
     highlights: [
       // Optional: add sub-regions/departments as highlights
       // { id: "sub-region-id", label: { fr: "...", en: "..." }, published: false, imageProps: { image: "homeSubRegion" } }
     ],
   }
   ```

   Use PascalCase for the image key (e.g., `homeCentreValDeLoire`).

   **Note:** Ask the user if they want to define Points of Interest (POI) / sub-regions as `highlights` now, or leave empty (`[]`) to add later. Each highlight needs an `id`, `label`, `published` status, and optional `imageProps` for medallion display.

4. **Add weather entry** in `france.tsx` in `franceWeatherEntries`:

   ```ts
   {
     id: "<region-id>",
     label: t("common:link.<region-id>"), // or hardcoded { fr: "...", en: "..." }
     data: [ /* 12 months of { type, icon, temp, alt? } */ ],
   }
   ```

5. **Add GraphQL query** in `shared-europe-images.tsx`:

   ```graphql
   home<RegionPascalCase>: file(relativePath: { eq: "europe/france/home-<region-id>.jpg" }) {
     childImageSharp {
       fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
         ...GatsbyImageSharpFluid
       }
     }
   }
   ```

   Add to `alt` object: `home<RegionPascalCase>: "Home Image for <Region> Region"`

6. **Add home image** at `src/images/europe/france/home-<region-id>.jpg`

7. **Add test assertion** in `links.configuration.test.ts`:

   ```ts
   expect(getLink("<region-id>")).toMatchObject({ label: { fr: "<Region>", en: "<Region>" }, published: false })
   ```

8. **Update main France page** (`src/pages/europe/france/index.tsx`) to filter weather entries if you want to exclude the new region from the national weather widget.

9. **Verify:**

   ```sh
   npm run lint && npx tsc --noEmit && npm run test -- --runInBand
   ```

10. **Update integration snapshots:**

    ```sh
    CONTEXT=production npm run build && npm run test:integration -- -u
    ```

    It should ONLY be run once the content is ready to commit and once ordered to do so. Never run this on your own.

11. **Add to robots.txt** in `gatsby-config.js` if public.

### Key differences from articles

- No plop generator — manual creation
- Uses `FranceBlogLayout` not generated layout
- No `Title` component with `linkId` — uses `MainTitleSection` directly
- Weather data required (12 months)
- Sub-regions/departments added as `highlights` later (optional)
- Labels in `france.links.tsx` are hardcoded (not from common.json currently)

### Steps after generation

1. **Add the link entry.** Register the article in the country's registry, under `others` or a city's `highlights`, in `src/components/core/<country>/<country>.links.tsx` (Philippines: `src/components/core/asia/philippines/philippines.links.tsx`; Japan: `src/components/core/japan/japan.links.tsx`).

   ```ts
   {
     id: "my-new-article",
     label: { fr: commonFr.country.philippines.card["my-new-article"], en: commonEn.country.philippines.card["my-new-article"] },
     published: new Date("2026-01-01T17:00:00.000+08:00"), // or false
     card: MyNewArticleCard,
   }
   ```

   If no card component is ready, omit `card` — cards are optional.

2. **Add the card label** to `src/locales/fr/common.json` and `src/locales/en/common.json`:

   ```json
   "country": { "philippines": { "card": { "my-new-article": "Article title" } } }
   ```

   The generated page reads `t("common:country.<country>.card.<id>")`, so a missing key yields an empty title.

3. **Add an image folder** at `src/images/<pagePath>/` containing at minimum:

   - `name.jpg` — required by the generated image selector
   - `card-fr1.jpg`, `card-fr2.jpg`, `card-en1.jpg`, `card-en2.jpg` — Pinterest cards

   Missing files make the GraphQL query return `null` and the selector crash at render. Article body images go in the same folder.

4. **Fix the generated imports** if needed (see gotchas below).

5. **Write both locale files.** Keep the key structure identical; French is the fallback, so missing English keys silently render French.

6. **Add the link assertion** in `src/components/core/links/links.configuration.test.ts`:

   ```ts
   expect(getLink("my-new-article")).toMatchObject({ label: { fr: "...", en: "..." }, published: true })
   ```

   The test ends with `expect.assertions(getCacheSize())`, so a new link without an assertion fails.

7. **Verify:**

   ```sh
   npm run lint && npx tsc --noEmit && npm run test -- --runInBand
   ```

8. **Update integration snapshots** (required for new pages):

   ```sh
   CONTEXT=production npm run build && npm run test:integration -- -u
   ```

   **Important:** The build **must** run with `CONTEXT=production` (matches CI) for correct i18n rendering. Without it, English pages may render French content, causing snapshot mismatches.

   This records the new page's meta tags (title, description, social tags) for CI validation.

   It should ONLY be run once the content is ready to commit and once ordered to do so. Never run this on your own.

9. **If the page is public**, add the route to the robots allow list in `gatsby-config.js` (both locales):

   ```js
   // gatsby-config.js - in the robots.txt plugin options
   allow: [
     ...pages("/your-new-page/"),  // adds both /your-new-page/ and /en/your-new-page/
     // ...existing entries
   ],
   ```

   If it is a draft, add it to `disallow` instead:

   ```js
   disallow: [
     ...pages("/your-new-page/"),
     // ...existing entries
   ],
   ```

   The `pages()` helper automatically adds both French and English variants.

### Template gotchas

- **Country module location** is `components/core/<continent>/<country>/<country>.tsx`. Every country follows this, including Japan. Do not create a country folder directly under `components/core/`.
- **Home image** is `images/<continent>/<country>/home-<country>.jpg`.
- Default generated imports assume the rich article layout (`When`, `How`, `HowLong`, `WhatTimeOfYear`, `HowMuch`, `WhereToStay`, `Visit`). Simple articles usually delete most of these and keep `Title`, `Introduction`, `Conclusion`, `Comments`.
- The generated page renders `<Title linkId={id} />`, so step 1 must be done or the page throws at runtime.

### Do not run these casually

- `node reset.js` **deletes every file under `src/pages/asia/**/\*.tsx`\*\* if more than 10 exist. It is a legacy scaffolding helper, not a cleanup task.
- `node resize.js` expects local `Photos/h`, `Photos/w`, `Photos/p` folders that are not in the repository. It is a manual pre-processing step for new photography.

## Locales

- One JSON file per page in `src/locales/{fr,en}/`, mirroring the page path.
- Shared strings (country names, card titles, UI labels) live in `src/locales/{fr,en}/common.json`.
- Both files must have identical key sets. Current drift: five English files are missing keys (see `ANALYSIS.md`).
- A key named `visit2.title:` (with a colon) or `question 1` (with a space) is a typo, not a nested key.

## Images

- Global image root is `src/images/` (`gatsby-source-filesystem`).
- Article images live under the page path, e.g. `src/images/asia/japan/kyoto/arashiyama/`.
- Country home images are `src/images/<continent>/<country>/home-<country>.jpg`.
- Existing images are already resized (~1.86 MP average, max 4000 px). Do not commit multi-megapixel originals.
- `src/components/images/**` holds per-article Gatsby `useStaticQuery` selectors; shared card images live in `src/components/images/<continent>/<country>/`.

## Testing

- `npm run test` — Jest unit tests and the link-registry assertions.
- `npm run test:integration` — parses built HTML in `public/`, compares meta tags against snapshots. Requires a successful `npm run build` first; new pages require `-u` to record snapshots.
- CI (`.github/workflows/build.yml`) runs build, SSR build, lint, `tsc --noEmit`, unit tests, and integration tests. It does **not** cover `firebase/functions`, which is excluded from the root `tsconfig` and has its own `package.json`.

## Known traps

- `gatsby-node.js` aliases Node's `path` to `path-browserify` for the browser bundle. Shared code (e.g. `links.configuration.ts`) imports `path`; do not remove the alias without removing those imports.
- The font loader is patched by string-comparing a webpack rule's `test` regex. Framework upgrades can silently break it.
- Unpublished pages ship to production. See "Publishing rules".
- `gatsby-plugin-manifest` still reports the app name as `gatsby-starter-default`; `package.json` still carries starter metadata.
- Firebase Functions use old SDKs (`firebase-functions ^3.11.0`, `firebase-admin ^8.13.0`) and interpolate user input into HTML email bodies.
- `_headers` only configures caching — no security headers.

## Reference

`ANALYSIS.md` contains the full project audit, prioritized risks, and a remediation roadmap.

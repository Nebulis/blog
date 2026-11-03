import * as fs from "fs"
import * as path from "path"

/**
 * Locale parity test - ensures French and English translation files have identical key structures.
 * This prevents the silent fallback to French when English keys are missing.
 */

const LOCALES_DIR = path.join(__dirname, "..", "locales")
const FR_DIR = path.join(LOCALES_DIR, "fr")
const EN_DIR = path.join(LOCALES_DIR, "en")

function getAllJsonFiles(dir: string): string[] {
  const files: string[] = []
  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (entry.name.endsWith(".json")) {
        files.push(fullPath)
      }
    }
  }
  walk(dir)
  return files
}

function flattenKeys(obj: any, prefix = ""): Set<string> {
  const keys = new Set<string>()
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    keys.add(fullKey)
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const nestedKeys = flattenKeys(value, fullKey)
      for (const k of nestedKeys) keys.add(k)
    }
  }
  return keys
}

function readJsonFile(filePath: string): any {
  const content = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(content)
}

describe("locale parity - FR/EN key structure", () => {
  const frFiles = getAllJsonFiles(FR_DIR)
  const enFiles = getAllJsonFiles(EN_DIR)

  const frRelativePaths = frFiles.map((f) => path.relative(FR_DIR, f))
  const enRelativePaths = enFiles.map((f) => path.relative(EN_DIR, f))

  it("every French locale file has an English counterpart", () => {
    for (const frRel of frRelativePaths) {
      expect(enRelativePaths).toContain(frRel)
    }
  })

  it("every English locale file has a French counterpart", () => {
    for (const enRel of enRelativePaths) {
      expect(frRelativePaths).toContain(enRel)
    }
  })

  for (const relPath of frRelativePaths) {
    it(`keys match: ${relPath}`, () => {
      const frFile = path.join(FR_DIR, relPath)
      const enFile = path.join(EN_DIR, relPath)

      const frData = readJsonFile(frFile)
      const enData = readJsonFile(enFile)

      const frKeys = flattenKeys(frData)
      const enKeys = flattenKeys(enData)

      // Find missing keys in English
      const missingInEn = [...frKeys].filter((k) => !enKeys.has(k))
      // Find extra keys in English (not in French)
      const extraInEn = [...enKeys].filter((k) => !frKeys.has(k))

      if (missingInEn.length > 0) {
        console.error(`\nMissing in English (${relPath}):`, missingInEn)
      }
      if (extraInEn.length > 0) {
        console.error(`\nExtra in English (${relPath}):`, extraInEn)
      }

      expect(missingInEn).toStrictEqual([])
      expect(extraInEn).toStrictEqual([])
    })
  }
})

#!/usr/bin/env node
/**
 * Generate link-map.json for gatsby-node.js
 * Run at build time: node scripts/generate-link-map.js
 * Uses URL hierarchy to propagate active status from children to parents.
 */

const fs = require("fs")
const path = require("path")

const linkData = require("../src/lib/link-data.json")

function isPublished(element) {
  if (typeof element.published === "boolean") return element.published
  if (element.publishedDate) {
    return new Date().getTime() >= new Date(element.publishedDate).getTime()
  }
  return false
}

function isWithinWeek(element) {
  if (!element.publishedDate) return false
  const weekFromNow = Date.now() + 7 * 24 * 60 * 60 * 1000
  return new Date(element.publishedDate).getTime() <= weekFromNow
}

function generateLinkMap() {
  const active = new Set()

  // Build URL -> link map
  const urlMap = new Map()
  for (const link of linkData.links) {
    urlMap.set(link.url, link)
  }

  // Step 1: mark initially active (published=true OR publishedDate within 7 days)
  for (const link of linkData.links) {
    if (isPublished(link) || isWithinWeek(link)) {
      active.add(link.url)
    }
  }

  // Step 2: propagate up via URL hierarchy
  let changed = true
  while (changed) {
    changed = false
    for (const link of linkData.links) {
      if (!active.has(link.url)) {
        const parts = link.url.replace(/^\//, "").replace(/\/$/, "").split("/")
        if (parts.length > 1) {
          parts.pop()
          const parentUrl = "/" + parts.join("/") + "/"
          if (active.has(parentUrl)) {
            active.add(link.url)
            changed = true
          }
        }
      }
    }
  }

  // Write output
  const output = { active: [...active].sort() }
  const outputPath = path.join(__dirname, "..", "src", "lib", "link-map.json")
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2))

  console.log(`[generate-link-map] Generated with ${active.size} active links`)
}

generateLinkMap()
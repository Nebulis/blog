import fs from "fs"
import path from "path"
import { parse } from "node-html-parser"

import glob from "glob"

describe("english pages", () => {
  const files: string[] = glob.sync("public/en/**/*.html")
  console.log(`Found ${files.length} english pages`)
  it.each(files)("exports meta for %s correctly", (filePath) => {
    const file = fs.readFileSync(path.resolve(filePath), { encoding: "utf8" })
    const root = parse(file)
    const description = root.querySelector('meta[name="twitter:description"]')
    expect(description?.getAttribute("content")).toMatchSnapshot("social-network")
    const title = root.querySelector("title")
    expect(title?.text).toMatchSnapshot("title")
    const googleDescription = root.querySelector('meta[name="description"]')
    expect(googleDescription?.getAttribute("content")).toMatchSnapshot("meta-description")
  })
})

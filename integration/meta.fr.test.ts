/* eslint-disable jest/prefer-inline-snapshots */
import fs from "fs"
import path from "path"
import { parse } from "node-html-parser"

import glob from "glob"

describe("french pages", () => {
  const files: string[] = glob.sync("public/**/*.html", {
    ignore: ["public/en/**/*.html", "public/page-data/**/*.html"],
  })
  console.log(`Found ${files.length} french pages`)
  it.each(files)("exports meta for %s correctly", (filePath) => {
    const file = fs.readFileSync(path.resolve(filePath), { encoding: "utf8" })
    const root = parse(file)
    const description = root.querySelector('meta[name="twitter:description"]')
    expect(description.getAttribute("content")).toMatchSnapshot()
    const title = root.querySelector("title")
    expect(title.text).toMatchSnapshot()
  })
})
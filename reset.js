/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")
const glob = require("glob")

const files = glob.sync("src/pages/asia/**/*.tsx")

if (files.length < 10) {
  console.log(" security - ask tit cheri")
  process.exit(12)
}

files.map((file) => fs.unlinkSync(file))
console.log("cleaned")

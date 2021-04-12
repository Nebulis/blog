/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require("sharp")
const glob = require("glob")

// const matches = glob.sync(`src/images/asia/vietnam/**/*.{png,jpg,jpeg}`)
// const matches = glob.sync(`src/images/asia/philippines/el-nido/*.{png,jpg,jpeg}`)
const matches1 = glob.sync(`Photos/h/*.{png,jpg,jpeg}`)
const matches2 = glob.sync(`Photos/w/*.{png,jpg,jpeg}`)
// const MAX_WIDTH = 1200 // portrait
// const MAX_WIDTH = 1800
const QUALITY = 60

Promise.all(
  matches1.map(async (match) => {
    console.log(match)
    const stream = sharp(match)
    const info = await stream.metadata()

    const width = Math.min(1200, info.width)

    const optimizedName1 = match.replace(/(\..+)$/, (match, ext) => `-optimized-${width}-60${ext}`)
    const optimizedName2 = match.replace(/(\..+)$/, (match, ext) => `-optimized-${width}-80${ext}`)
    const method = info.format === "png" ? "png" : "jpeg"

    await stream.resize(width)[method]({ quality: 60, mozjpeg: true }).toFile(optimizedName1)
    await stream.resize(width)[method]({ quality: 80, mozjpeg: true }).toFile(optimizedName2)

    // return fs.rename(optimizedName, match)
  })
)
Promise.all(
  matches2.map(async (match) => {
    console.log(match)
    const stream = sharp(match)
    const info = await stream.metadata()

    const width = Math.min(1800, info.width)

    const optimizedName1 = match.replace(/(\..+)$/, (match, ext) => `-optimized-${width}-60${ext}`)
    const optimizedName2 = match.replace(/(\..+)$/, (match, ext) => `-optimized-${width}-80${ext}`)
    const method = info.format === "png" ? "png" : "jpeg"

    await stream.resize(width)[method]({ quality: 60, mozjpeg: true }).toFile(optimizedName1)
    await stream.resize(width)[method]({ quality: 80, mozjpeg: true }).toFile(optimizedName2)

    // return fs.rename(optimizedName, match)
  })
)

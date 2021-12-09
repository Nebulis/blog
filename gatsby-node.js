/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  const newPage = Object.assign({}, page)
  // Duplicate page for english
  // if (page.path === "/asia/" || page.path === "/asia/vietnam/southern-vietnam/discover/") {
  newPage.path = "en" + page.path
  createPage(page)
  createPage(newPage)
  // }
}
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, plugins }) => {
  const PATTERN = /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/

  const config = getConfig()
  if (stage === "build-javascript" && process.env.CIRCLECI === "true") {
    // setting manually the number of parallel in circle ci, because sometimes out of memory happens
    // https://github.com/facebook/create-react-app/issues/8320
    // https://github.com/webpack-contrib/terser-webpack-plugin/issues/143
    // https://github.com/webpack-contrib/terser-webpack-plugin/issues/202#issuecomment-580704210
    // https://webpack.js.org/plugins/terser-webpack-plugin/#parallel
    console.log("DETECTED CIRCLE-CI - SETTING TERSER PARALLEL TO 8")
    config.optimization.minimizer[0].options.parallel = 8
  } else {
    console.log(`DID NOT DETECT CIRCLE-CI => process.env.CIRCLECI=${process.env.CIRCLECI}`)
  }

  // migration v2 to v3
  if (stage === "build-javascript" || stage === "develop") {
    config.plugins.push(plugins.provide({ process: "process/browser" }))
  }

  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        path: require.resolve("path-browserify"),
      },
    },
    module: {
      // Manually swap out the rule who's test matches PATTERN
      rules: config.module.rules.map((rule) => {
        if (rule.test && rule.test.toString() === PATTERN.toString()) {
          rule.use[0].options.limit = 1
          rule.use[0].options.name = `static/fonts/[name]-[hash].[ext]`
        }
        return rule
      }),
    },
  }

  actions.replaceWebpackConfig(newConfig)
}

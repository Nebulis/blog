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
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const PATTERN = /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/

  const config = getConfig()
  const newConfig = {
    ...config,
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

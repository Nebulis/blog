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

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  const urlLoader = loaders.url()
  urlLoader.options.name = `static/fonts/[name]-[hash].[ext]`
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          use: [urlLoader],
          test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/,
        },
      ],
    },
  })
}

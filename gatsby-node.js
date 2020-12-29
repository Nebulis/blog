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
  newPage.path = "en" + page.path
  createPage(page)
  createPage(newPage)
}

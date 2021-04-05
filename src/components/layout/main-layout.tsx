import { drawEarth } from "./console-draw-earth"
import { BlogLayout, IndexBlogLayout, withDraw } from "./layout"
import { primaryColor, primaryDarkColor } from "../core/variables"
import styled from "@emotion/styled"

const drawer = withDraw(drawEarth)
export const IndexBlogLayoutWithDrawer = drawer(IndexBlogLayout)
export const BlogLayoutWithDrawer = drawer(BlogLayout)
export const PrimaryBlogLayoutWithDrawer = styled(drawer(BlogLayout))`
  .card .tags a {
    color: ${primaryColor};
  }
  .card .tags a:hover {
    border-bottom: 1px solid ${primaryDarkColor};
  }
`

// layout to apply on articles
export const HomeBlogLayout = styled(drawer(IndexBlogLayout))`
  .card .tags a {
    color: ${primaryColor};
  }
  .card .tags a:hover {
    border-bottom: 1px solid ${primaryDarkColor};
  }
`

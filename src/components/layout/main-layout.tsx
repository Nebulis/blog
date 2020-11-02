import { drawEarth } from "./console-draw-earth"
import { IndexBlogLayout, withDraw } from "./layout"

const drawer = withDraw(drawEarth)
export const IndexBlogLayoutWithDrawer = drawer(IndexBlogLayout)

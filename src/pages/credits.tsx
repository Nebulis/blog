import React from "react"
import SEO from "../components/layout/seo"
import { PageProps } from "gatsby"
import { BlogLayoutWithDrawer } from "../components/layout/main-layout"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="main" location={location} />
      {/* TODO CHANGED TO CREDITS*/}
      <BlogLayoutWithDrawer page="articles">
        <ul>
          <li>Flaticon</li>
          <li>Simplemaps</li>
        </ul>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

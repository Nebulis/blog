import React from "react"
import SEO from "../components/layout/seo"
import { PageProps } from "gatsby"
import { PrimaryBlogLayoutWithDrawer } from "../components/layout/main-layout"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="main" location={location} />
      {/* TODO CHANGED TO CREDITS*/}
      <PrimaryBlogLayoutWithDrawer page="articles" location={location}>
        <ul>
          <li>Flaticon</li>
          <li>Simplemaps</li>
        </ul>
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

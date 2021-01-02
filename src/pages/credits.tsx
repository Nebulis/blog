import React from "react"
import SEO from "../components/layout/seo"
import { BlogLayout } from "../components/layout/layout"
import { PageProps } from "gatsby"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="main" location={location} />
      {/* TODO CHANGED TO CREDITS*/}
      <BlogLayout page="articles">
        <ul>
          <li>Flaticon</li>
          <li>Simplemaps</li>
        </ul>
      </BlogLayout>
    </>
  )
}

export default IndexPage

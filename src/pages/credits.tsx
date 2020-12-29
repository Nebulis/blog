import React from "react"
import SEO from "../components/layout/seo"
import { BlogLayout } from "../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
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

import React from "react"
import SEO from "../../components/layout/seo"
import { JapanLink } from "../../components/core/links/link"
import { BlogLayout } from "../../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="asia">
        Asia page
        <JapanLink to="japan">Japon</JapanLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

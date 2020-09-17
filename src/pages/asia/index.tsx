import React from "react"
import SEO from "../../components/layout/seo"
import { BlogLayout } from "../../components/layout/layout"
import { JapanLink } from "../../components/core/japan/japan"
import { ApplicationLink } from "../../components/core/links/link"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="asia">
        Asia page
        <JapanLink to="japan">Japon</JapanLink>
        <ApplicationLink to="vietnam">Vietnam</ApplicationLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import SEO from "../../../../components/layout/seo"
import { ApplicationLink } from "../../../../components/core/links/link"
import { BlogLayout } from "../../../../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="himeji">
        Himeji page
        <ApplicationLink to="japan">Japon</ApplicationLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

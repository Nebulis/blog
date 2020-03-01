import React from "react"
import SEO from "../../components/layout/seo"
import { BlogLayout } from "../../components/layout/layout"
import { ApplicationLink } from "../../components/core/links/link"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="who">
        <ApplicationLink to="who">goto who</ApplicationLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

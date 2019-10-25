import React from "react"
import SEO from "../../../components/layout/seo"
import { JapanLink } from "../../../components/core/links/link"
import { BlogLayout } from "../../../components/layout/blog"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="transports-in-japan">
        Transport page
        <JapanLink to="japan">Japon</JapanLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

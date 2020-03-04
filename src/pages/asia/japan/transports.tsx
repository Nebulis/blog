import React from "react"
import SEO from "../../../components/layout/seo"
import { BlogLayout } from "../../../components/layout/layout"
import { JapanLink } from "../../../components/core/japan/japan"

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

import React from "react"
import SEO from "../../../components/layout/seo"
import { BlogLayout } from "../../../components/layout/layout"
import { VietnamLink } from "../../../components/core/asia/vietnam/vietnam"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="transports-in-vietnam">
        Transport page
        <VietnamLink to="vietnam">Vietnam</VietnamLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

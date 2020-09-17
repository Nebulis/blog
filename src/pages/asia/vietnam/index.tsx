import React from "react"
import SEO from "../../../components/layout/seo"
import { BlogLayout } from "../../../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="asia">Vietnam Page</BlogLayout>
    </>
  )
}

export default IndexPage

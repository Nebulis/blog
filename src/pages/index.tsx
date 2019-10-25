import React from "react"
import SEO from "../components/layout/seo"
import { BlogLayout } from "../components/layout/blog"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="home">Hello</BlogLayout>
    </>
  )
}

export default IndexPage

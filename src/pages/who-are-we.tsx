import React from "react"
import SEO from "../components/layout/seo"
import { BlogLayout } from "../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="about-who">Qui sommes nous?</BlogLayout>
    </>
  )
}

export default IndexPage

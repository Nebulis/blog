import React from "react"
import SEO from "../../../components/layout/seo"
import { BlogLayout } from "../../../components/layout/layout"
import { JapanLink } from "../../../components/core/japan/japan"
import { PageProps } from "gatsby"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="main" location={location} />
      <BlogLayout page="transport-japan" location={location}>
        Transport page
        <JapanLink to="japan">Japon</JapanLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import SEO from "../../../components/layout/seo"
import { BlogLayout } from "../../../components/layout/layout"
import { VietnamLink } from "../../../components/core/asia/vietnam/vietnam"
import { PageProps } from "gatsby"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="main" location={location} />
      <BlogLayout page="transports-in-vietnam">
        Transport page
        <VietnamLink to="vietnam">Vietnam</VietnamLink>
      </BlogLayout>
    </>
  )
}

export default IndexPage

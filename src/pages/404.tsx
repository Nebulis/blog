import React from "react"
import SEO from "../components/layout/seo"
import { PageProps } from "gatsby"

const NotFoundPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="404: Not found" location={location} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default NotFoundPage

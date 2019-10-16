import React from "react"
import { Header } from "../../components/layout/header"
import { Maintenance } from "../../components/layout/maintenance"
import SEO from "../../components/layout/seo"
import { JapanLink } from "../../components/core/link"
import { getLinkUrl } from "../../utils/links"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <Maintenance>{typeof window !== `undefined` ? <Content /> : null}</Maintenance>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Header />
      Asia page
      <JapanLink to={getLinkUrl("japan")}>Japon</JapanLink>
    </>
  )
}

export default IndexPage

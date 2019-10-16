import React from "react"
import { Link } from "gatsby"
import { Header } from "../../../components/layout/header"
import { Maintenance } from "../../../components/layout/maintenance"
import SEO from "../../../components/layout/seo"
import { getLinkUrl } from "../../../utils/links"

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
      Fuji page
      <Link to={getLinkUrl("japan")}>Japon</Link>
    </>
  )
}

export default IndexPage

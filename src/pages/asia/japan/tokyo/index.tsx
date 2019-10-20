import React from "react"
import { Header } from "../../../../components/layout/header"
import { Maintenance } from "../../../../components/layout/maintenance"
import SEO from "../../../../components/layout/seo"
import { ApplicationLink } from "../../../../components/core/links/link"

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
      Tokyo page
      <ApplicationLink to="japan">Japon</ApplicationLink>
    </>
  )
}

export default IndexPage

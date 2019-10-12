import React from "react"
import { Header } from "../components/layout/header"
import { Maintenance } from "../components/layout/maintenance"
import SEO from "../components/layout/seo"
import { Menu } from "../components/layout/menu"

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
      <Menu />
      <div className="center blog-container" />
    </>
  )
}

export default IndexPage

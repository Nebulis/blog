import SEO from "./seo"
import { Scooter } from "./scooter"
import { World } from "./world"
import Layout from "./layout"
import React, { FunctionComponent, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ApplicationContext } from "../applications"

export const Maintenance: FunctionComponent = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            config {
              context
            }
          }
        }
      }
    `
  )
  const [development, setDevelopment] = useState(site.siteMetadata.config.context !== "production")
  const mapSize = 80
  if (site.siteMetadata.config.context !== "production") {
    return (
      <ApplicationContext.Provider
        value={{
          initialDevelopmentValue: site.siteMetadata.config.context !== "production",
          development,
          toggle: () => setDevelopment(!development),
        }}
      >
        {children}
      </ApplicationContext.Provider>
    )
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h3
        style={{
          textAlign: "center",
          fontFamily: "'Ami R Regular'",
          marginTop: "1.45rem",
        }}
        className="title-temp-page"
      >
        En voyage actuellement, les articles arrivent prochainement
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          position: "relative",
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            zIndex: 10,
            width: `${(100 - mapSize) / 2}%`,
          }}
        />
        <div
          style={{
            width: `${mapSize}%`,
          }}
        >
          <Scooter />
          <World />
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: `${(100 - mapSize) / 2}%`,
            zIndex: 10,
          }}
        />
      </div>
    </Layout>
  )
}

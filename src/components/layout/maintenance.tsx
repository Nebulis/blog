import SEO from "./seo"
import { Scooter } from "./scooter"
import { World } from "./world"
import Layout from "./layout"
import React, { FunctionComponent, useContext } from "react"
import { ApplicationContext } from "../applications"

export const Maintenance: FunctionComponent = ({ children }) => {
  const context = useContext(ApplicationContext)
  const mapSize = 80
  if (context.initialDevelopmentValue) {
    return <>{children}</>
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

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { World } from "../components/world"
import { Scooter } from "../components/scooter"

const IndexPage = () => {
  const mapSize = 80

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

export default IndexPage

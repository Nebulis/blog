import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent, useState } from "react"
import { ApplicationContext } from "./applications"

export const Application: FunctionComponent = ({ children }) => {
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

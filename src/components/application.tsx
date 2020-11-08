import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent, useState } from "react"

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
        displayAllArticles: development,
        toggle: () => setDevelopment(!development),
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export const ApplicationContext = React.createContext<{
  development: boolean
  displayAllArticles: boolean
  /**
   * Property to keep track of the initial value of development when the page started
   * This property is useful because development property can be changed over the time by calling the toggle function
   * Some features need to be always enable or disable and must not change over the time
   */
  initialDevelopmentValue?: boolean
  toggle?: () => void
}>({
  development: false,
  displayAllArticles: false,
  initialDevelopmentValue: false,
})

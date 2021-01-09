import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { configureI18n, useCustomTranslation } from "../i18n"
import { isEnglishPage } from "../utils"

configureI18n()
export const Application: React.FunctionComponent<PageProps> = ({ children, location }) => {
  const { i18n } = useCustomTranslation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            config {
              context
              comments
            }
          }
        }
      }
    `
  )
  const [development, setDevelopment] = useState(site.siteMetadata.config.context !== "production")

  // if the URL starts with /en, then we really want to display the page in english
  if (isEnglishPage(location) && i18n.languageCode !== "en") {
    i18n.changeLanguage("en")
  } else if (!isEnglishPage(location) && i18n.languageCode !== "fr") {
    i18n.changeLanguage("fr")
  }

  return (
    <ApplicationContext.Provider
      value={{
        initialDevelopmentValue: site.siteMetadata.config.context !== "production",
        development,
        displayAllArticles: development,
        displayComments: site.siteMetadata.config.comments === "enabled",
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
  displayComments: boolean
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
  displayComments: false,
  initialDevelopmentValue: false,
})

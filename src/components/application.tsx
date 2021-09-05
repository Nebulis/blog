import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { configureI18n } from "../i18n"
import { isEnglishPage } from "../utils"
import { useCustomTranslation } from "../i18n-hook"

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
              ssrBuild
            }
          }
        }
      }
    `
  )
  const initialDevelopmentValue = site.siteMetadata.config.context !== "production"
  const [development, setDevelopment] = useState(initialDevelopmentValue)

  if (!initialDevelopmentValue) {
    // if the URL starts with /en, then we really want to display the page in english
    if (isEnglishPage(location) && i18n.languageCode !== "en") {
      i18n.changeLanguage("en")
    } else if (!isEnglishPage(location) && i18n.languageCode !== "fr") {
      i18n.changeLanguage("fr")
    }
  }

  return (
    <ApplicationContext.Provider
      value={{
        initialDevelopmentValue,
        development,
        displayComments: site.siteMetadata.config.comments === "enabled",
        ssrBuild: site.siteMetadata.config.ssrBuild === "enabled",
        toggle: () => setDevelopment(!development),
        covid: true,
        instagramInAppBrowser:
          typeof window !== "undefined" ? navigator.userAgent.toLowerCase().indexOf("instagram") !== -1 : false,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export const ApplicationContext = React.createContext<{
  development: boolean
  displayComments: boolean
  ssrBuild: boolean
  /**
   * Property to keep track of the initial value of development when the page started
   * This property is useful because development property can be changed over the time by calling the toggle function
   * Some features need to be always enable or disable and must not change over the time
   */
  initialDevelopmentValue?: boolean
  toggle?: () => void
  covid: boolean
  /**
   * There is a problem with instagram in-app browser. the browser menu and footer bar change the height of viewport,
   * which in turn change the maximum height of images, and triggers a very annoying layout shift
   * we use this boolean to detect whether we are inside instagram in-app browser. If that's the case, we will set the maximum-height
   * with the current viewport height, so that it doesn't update when the browser bars appear or disappear. Fixed elements
   * - images (mainly portrait)
   * - header (computed using 100vh)
   * - carousel (computed using header)
   */
  instagramInAppBrowser: boolean
}>({
  development: false,
  displayComments: false,
  ssrBuild: false,
  initialDevelopmentValue: false,
  covid: true,
  instagramInAppBrowser: false,
})

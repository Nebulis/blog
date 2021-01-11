/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, PageProps } from "gatsby"
import FreestyleFont from "../../fonts/Freestyle-Script.ttf"
import CourgetteFont from "../../fonts/Courgette-Regular.ttf"
import PlayfairFont from "../../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"
import { useCustomTranslation } from "../../i18n"
import DefaultImgUrl from "../../images/SocialNetworkDefault.jpg"
import { getHostname, getPathForEnglish, getPathForFrench } from "../../utils"

interface SEOProps {
  description?: string
  googleDescription?: string
  lang?: string
  meta?: any
  title?: string
  image?: string
  location: PageProps["location"]
}
const SEO: FunctionComponent<SEOProps> = ({
  description,
  googleDescription,
  lang,
  meta = [],
  title,
  image,
  location,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  const { t, i18n } = useCustomTranslation("common")

  const metaDescription = description || t("description")
  const metaGoogleDescription = googleDescription || metaDescription
  const metaTitle = title || site.siteMetadata.title
  const metaImage = `${getHostname(location)}${image || DefaultImgUrl}`
  const metaLang = lang || i18n.languageCode
  return (
    // @ts-ignore hreflang :(
    <Helmet
      htmlAttributes={{
        lang: metaLang,
      }}
      link={[
        {
          rel: "alternate",
          href: `${getHostname(location)}${getPathForFrench(location)}`,
          hreflang: "fr-fr",
        },
        {
          rel: "alternate",
          href: `${getHostname(location)}${getPathForEnglish(location)}`,
          hreflang: "en-us",
        },
        {
          rel: "preload",
          as: "font",
          href: FreestyleFont,
          type: "font/ttf",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: CourgetteFont,
          type: "font/ttf",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: PlayfairFont,
          type: "font/ttf",
          crossOrigin: "anonymous",
        },
      ]}
      title={metaTitle}
      titleTemplate={`${metaTitle} | ${t("head")}`}
      meta={[
        {
          name: `description`,
          content: metaGoogleDescription,
        },
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1.0",
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        { property: "og:image", content: `${metaImage}` },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        { name: "twitter:image", content: `${metaImage}` },
        { name: "twitter:card", content: "summary_large_image" },
      ].concat(meta)}
    />
  )
}

export default SEO

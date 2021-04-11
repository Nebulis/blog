/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery, PageProps } from "gatsby"
import FreestyleFont from "../../fonts/Freestyle-Script.woff2"
import CourgetteFont from "../../fonts/Courgette-Regular.woff2"
import PlayfairFont from "../../fonts/PlayfairDisplay-Italic.woff2"
import RobotoFont from "../../fonts/Roboto.woff2"
import RobotoFontBolder from "../../fonts/RobotoBolder.woff2"
import { useCustomTranslation } from "../../i18n-hook"
import DefaultImgUrl from "../../images/SocialNetworkDefault.jpg"
import { getHostname, getPathForEnglish, getPathForFrench } from "../../utils"

interface SEOProps {
  socialNetworkDescription?: string
  googleDescription?: string
  lang?: string
  meta?: any
  title?: string
  image?: string
  fullTitle?: string
  location: PageProps["location"]
}
const SEO: FunctionComponent<SEOProps> = ({
  socialNetworkDescription,
  googleDescription,
  lang,
  meta = [],
  title,
  image,
  location,
  fullTitle,
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

  const metaSocialNetworkDescription = socialNetworkDescription || t("description")
  const metaDescription = googleDescription || metaSocialNetworkDescription
  const metaTitle = title || site.siteMetadata.title
  const metaImage = `${getHostname(location)}${image || DefaultImgUrl}`
  const metaLang = lang || i18n.languageCode
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
          href: RobotoFont,
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: RobotoFontBolder,
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: FreestyleFont,
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: CourgetteFont,
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: PlayfairFont,
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
      ]}
      title={fullTitle || `${metaTitle} | ${t("head")}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1.0",
        },
        {
          property: `og:title`,
          content: fullTitle || metaTitle,
        },
        {
          property: `og:description`,
          content: metaSocialNetworkDescription,
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
          content: fullTitle || metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaSocialNetworkDescription,
        },
        { name: "twitter:image", content: `${metaImage}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "p:domain_verify", content: "107b7224979c7f379a91649fdca0813b" },
      ].concat(meta)}
    />
  )
}

export default SEO

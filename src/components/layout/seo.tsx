/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import FontUrl1 from "../../fonts/Freestyle-Script.ttf"
import FontUrl2 from "../../fonts/Courgette-Regular.ttf"

interface SEOProps {
  description?: string
  lang?: string
  meta?: any
  title?: string
}
const SEO: FunctionComponent<SEOProps> = ({ description = "", lang = "en", meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          rel: "preload",
          as: "font",
          href: FontUrl1,
          type: "font/ttf",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          href: FontUrl2,
          type: "font/ttf",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Playfair+Display:400i&display=swap",
        },
      ]}
      title={metaTitle}
      titleTemplate={`${metaTitle} | Blog Voyage`}
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
        {
          name: `twitter:card`,
          content: `summary`,
        },
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
      ].concat(meta)}
    />
  )
}

export default SEO

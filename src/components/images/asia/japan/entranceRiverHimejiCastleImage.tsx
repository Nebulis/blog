import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { css } from "@emotion/core"
export const EntranceRiverHimejiCastleImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/himeji-castle-entrance-river.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      css={css`
        max-width: 600px;
      `}
      fluid={data.file.childImageSharp.fluid}
      alt="Himeji castle entrance river"
    />
  )
}

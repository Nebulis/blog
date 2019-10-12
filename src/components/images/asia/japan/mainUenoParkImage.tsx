import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { css } from "@emotion/core"
export const MainUenoParkImage = ({ className = "" }: { className?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/ueno-park-main.jpg" }) {
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
      fluid={data.file.childImageSharp.fluid}
      alt="Ueno Park"
      css={css`
        &.gatsby-image-wrapper {
          max-height: 495px;
        }
      `}
      className={className}
    />
  )
}

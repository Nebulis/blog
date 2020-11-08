import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { css } from "@emotion/core"
import { ExtraImageProps } from "../../../../../../types/shared"
export const MainToganjiImage: React.FunctionComponent<ExtraImageProps> = ({ className = "", fluidObject = {} }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-main.jpg" }) {
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
      fluid={{ ...data.file.childImageSharp.fluid, ...fluidObject }}
      alt="Toganji Temple"
      css={css`
        &.gatsby-image-wrapper {
          max-height: 495px;
        }
      `}
      className={className}
    />
  )
}

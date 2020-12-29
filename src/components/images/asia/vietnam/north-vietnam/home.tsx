import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"

export const HomeNorthVietnamImage: React.FunctionComponent<ExtraImageProps> = ({
  className = "",
  fluidObject = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/vietnam/north-vietnam/home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img fluid={{ ...data.file.childImageSharp.fluid, ...fluidObject }} alt="North Vietnam" className={className} />
  )
}

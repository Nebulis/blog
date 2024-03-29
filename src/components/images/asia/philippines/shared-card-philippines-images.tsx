import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

export const alt = {
  elNido: "Philippines / El Nido",
  tourA: "El Nido Tour A",
  tourB: "El Nido Tour B",
}

export const SharedCardPhilippinesImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      elNido: file(relativePath: { eq: "asia/philippines/home-philippines.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tourA: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-a/tour-a-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tourB: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

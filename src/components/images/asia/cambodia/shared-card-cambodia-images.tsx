import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  discoverCambodia: "Angkor Wat",
  angkorWat: "Angkor Thom",
  kampongPhluk: "Floating Village of Kampong Phluk",
  tuolSleng: "Prison S-21 Tuol Sleng Genocide Museum",
}

export const SharedCardCambodiaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      discoverCambodia: file(relativePath: { eq: "asia/cambodia/discover-cambodia/discover-cambodia-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      angkorWat: file(relativePath: { eq: "asia/cambodia/angkor-wat/angkor-wat-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kampongPhluk: file(relativePath: { eq: "asia/cambodia/kampong-phluk/kampong-phluk-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tuolSleng: file(
        relativePath: { eq: "asia/cambodia/tuol-sleng-genocide-museum/tuol-sleng-genocide-museum-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
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

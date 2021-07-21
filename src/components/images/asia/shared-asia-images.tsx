import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../types/shared"

const alt = {
  homeVietnam: "Vietnam",
  homePhilippines: "Philippines",
  homeJapan: "Japan",
  homeMalaysia: "Malaysia",
  homeIndonesia: "Indonesia",
  homeCambodia: "Cambodia",
  homeSingapore: "Singapore",
  homeTaiwan: "Taiwan",
}

export const SharedAsiaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      homeVietnam: file(relativePath: { eq: "asia/vietnam/home-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homePhilippines: file(relativePath: { eq: "asia/philippines/carousel-philippines-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeJapan: file(relativePath: { eq: "asia/japan/home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeMalaysia: file(relativePath: { eq: "asia/malaysia/home-malaysia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeIndonesia: file(relativePath: { eq: "asia/indonesia/home-indonesia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeSingapore: file(relativePath: { eq: "asia/singapore/home-singapore.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeCambodia: file(relativePath: { eq: "asia/cambodia/home-cambodia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeTaiwan: file(relativePath: { eq: "asia/taiwan/home-taiwan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60, srcSetBreakpoints: [400]) {
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

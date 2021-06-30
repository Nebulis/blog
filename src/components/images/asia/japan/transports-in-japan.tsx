import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  plane: "Transports In Japan - Plane",
  bike: "Transports In Japan - Bike",
  boat: "Transports In Japan - Boat",
  train: "Transports In Japan - Train",
  trainSunriseSeto: "Transports In Japan - Train Sunrise Seto",
  taxi: "Transports In Japan - Taxi",
  rickshaw: "Transports In Japan - Rickshaw",
  mrt: "Transports In Japan - Metro",
  bus: "Transports In Japan - Bus",
  busComodo: "Transports In Japan - Willer Express Bus Comodo",
  busRelax: "Transports In Japan - Willer Express Bus Relax",
  busReborn: "Transports In Japan - Willer Express Bus Reborn",
  busLuxia: "Transports In Japan - Willer Express Bus Luxia",
}

export const TransportsInJapanImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      taxi: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-taxi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plane: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-plane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rickshaw: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-rickshaw.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      train: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-train.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trainSunriseSeto: file(
        relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-train-sunrise-seto.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mrt: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-mrt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bike: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-bike.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bus: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-bus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      busComodo: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-bus-comodo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      busRelax: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-bus-relax.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      busReborn: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-bus-reborn.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      busLuxia: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-bus-luxia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  useEffect(() => {
    if (onLoad) onLoad(data[image].childImageSharp.fluid.src)
  }, [data, image, onLoad])

  return (
    <Img
      fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

export const alt = {
  semenggohNatureReserve: "Semenggoh Nature Reserve",
  kubahNightFrogsTour: "Kubah Night Frogs Tour",
  bakoNationalPark: "Bako National Park",
}
export const SharedCardMalaysiaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      semenggohNatureReserve: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kubahNightFrogsTour: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bakoNationalPark: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-main.jpg" }
      ) {
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

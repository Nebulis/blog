import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  hotel: "Langkawi Dream Hotel Hotel",
  food: "Langkawi Dream Hotel Food",
  food2: "Langkawi Dream Hotel Food",
  food3: "Langkawi Dream Hotel Food",
  food4: "Langkawi Dream Hotel Food",
  room: "Langkawi Dream Hotel Room",
  room2: "Langkawi Dream Hotel Room",
  room3: "Langkawi Dream Hotel Room",
  room4: "Langkawi Dream Hotel Room",
  room5: "Langkawi Dream Hotel Room",
  room6: "Langkawi Dream Hotel Room",
  spa: "Langkawi Dream Hotel Spa",
  spa2: "Langkawi Dream Hotel Spa",
  beach: "Langkawi Dream Hotel Beach",
  beach2: "Langkawi Dream Hotel Beach",
  beach3: "Langkawi Dream Hotel Beach",
  beach4: "Langkawi Dream Hotel Beach",
  beach5: "Langkawi Dream Hotel Beach",
  beach6: "Langkawi Dream Hotel Beach",
  beach7: "Langkawi Dream Hotel Beach",
  beach8: "Langkawi Dream Hotel Beach",
  beach9: "Langkawi Dream Hotel Beach",
  island: "Langkawi Dream Hotel Island",
  island2: "Langkawi Dream Hotel Island",
  island3: "Langkawi Dream Hotel Island",
  island4: "Langkawi Dream Hotel Island",
  island5: "Langkawi Dream Hotel Island",
  island6: "Langkawi Dream Hotel Island",
  island7: "Langkawi Dream Hotel Island",
  panorama: "Langkawi Dream Hotel Panorama",
  cardFr1: "Langkawi Dream Hotel Pinterest card",
  cardFr2: "Langkawi Dream Hotel Pinterest card",
  cardEn1: "Langkawi Dream Hotel Pinterest card",
  cardEn2: "Langkawi Dream Hotel Pinterest card",
}

export const LangkawiDreamHotelImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      hotel: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-hotel.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-food.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food2: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-food2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food3: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-food3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food4: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-food4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      room: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-room.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      room2: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-room2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      room3: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-room3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      room4: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-room4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      room5: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-room5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      room6: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-room6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spa: file(relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-spa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      spa2: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-spa2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach2: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach3: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach4: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach5: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach6: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach7: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach8: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach9: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-beach9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island2: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island3: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island4: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island5: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island6: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      island7: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-island7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      panorama: file(
        relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-panorama.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/malaysia/west-malaysia/langkawi-dream-hotel/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
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

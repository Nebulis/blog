import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  boat: "El Nido Which Tour Boat",
  speedboat: "El Nido Which Tour SpeedBoat",
  secretLagoon2: "El Nido Which Tour Secret Lagoon",
  commandoBeach2: "El Nido Which Tour Commando Beach",
  entalulaBeach: "El Nido Which Tour Entalula Beach",
  snakeIsland1: "El Nido Which Tour Snake Island",
  snakeIsland2: "El Nido Which Tour Snake Island",
  yumyumIsland: "El Nido Which Tour YumYum Island",
  pinagbuyutanIsland: "El Nido Which Tour Pinagbuyutan Island",
  cudugnonCave: "El Nido Which Tour Cudugnon Cave",
  helicopterIsland: "El Nido Which Tour Helicopter Island",
  matinlocShrine: "El Nido Which Tour Matinloc Shrine",
  secretBeach: "El Nido Which Tour Secret Beach",
  starBeach: "El Nido Which Tour Star Beach",
  hiddenBeach: "El Nido Which Tour Hidden Beach",
  ipilBeach: "El Nido Which Tour Ipil Beach",
  cadlaoIsland: "El Nido Which Tour Cadlao Island",
  natNatBeach: "El Nido Which Tour Nat-Nat Beach",
  paradiseBeach: "El Nido Which Tour Paradise Beach",
  pasandiganCove: "El Nido Which Tour Pasandigan Cove",
  smallLagoon: "El Nido Which Tour Small Lagoon",
  cardFr1: "El Nido Which Tour Pinterest card",
  cardFr2: "El Nido Which Tour Pinterest card",
  cardEn1: "El Nido Which Tour Pinterest card",
  cardEn2: "El Nido Which Tour Pinterest card",
}

export const ElNidoWhichTourImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      boat: file(relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      speedboat: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-speedboat.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secretLagoon2: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-secret-lagoon2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      commandoBeach2: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-commando-beach2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-entalula-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland1: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-snake-island1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland2: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-snake-island2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-pinagbuyutan-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyumIsland: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-yumyum-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-cudugnon-cave.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      helicopterIsland: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-helicopter-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matinlocShrine: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-matinloc-shrine.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secretBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-secret-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      starBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-star-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hiddenBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-hidden-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ipilBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-ipil-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cadlaoIsland: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-cadlao-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      natNatBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-nat-nat-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradiseBeach: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-paradise-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pasandiganCove: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-pasandigan-cove.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smallLagoon: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-small-lagoon.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-which-tour/card-en2.jpg" }) {
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
      fluid={{
        ...data[image].childImageSharp.fluid,
        ...fluidObject,
      }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

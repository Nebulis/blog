import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  boat: "El Nido Which Tour Boat",
  speedboat: "El Nido Which Tour SpeedBoat",
  bigLagoon: "El Nido Which Tour Big Lagoon",
  secretLagoon1: "El Nido Which Tour Secret Lagoon",
  secretLagoon2: "El Nido Which Tour Secret Lagoon",
  shimizuIsland: "El Nido Which Tour Shimizu Island",
  commandoBeach1: "El Nido Which Tour Commando Beach",
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
      boat: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      speedboat: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-speedboat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigLagoon: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-big-lagoon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon1: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-secret-lagoon1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon2: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-secret-lagoon2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shimizuIsland: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-shimizu-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      commandoBeach1: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-commando-beach1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      commandoBeach2: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-commando-beach2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      entalulaBeach: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-entalula-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snakeIsland1: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-snake-island1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snakeIsland2: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-snake-island2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pinagbuyutanIsland: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-pinagbuyutan-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      yumyumIsland: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-yumyum-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cudugnonCave: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-cudugnon-cave.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      helicopterIsland: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-helicopter-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      matinlocShrine: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-matinloc-shrine.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretBeach: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-secret-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      starBeach: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-star-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hiddenBeach: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-hidden-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ipilBeach: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-ipil-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cadlaoIsland: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-cadlao-island.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      natNatBeach: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-nat-nat-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradiseBeach: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-paradise-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pasandiganCove: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-pasandigan-cove.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      smallLagoon: file(
        relativePath: { eq: "asia/philippines/el-nido/which-tour/el-nido-which-tour-small-lagoon.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/philippines/el-nido/which-tour/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid_withWebp
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

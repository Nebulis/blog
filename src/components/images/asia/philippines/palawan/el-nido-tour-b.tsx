import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  entalulaBeach: "El Nido Tour B Entalula Beach",
  entalulaBeach2: "El Nido Tour B Entalula Beach",
  entalulaBeach3: "El Nido Tour B Entalula Beach",
  entalulaBeach4: "El Nido Tour B Entalula Beach",
  entalulaBeach5: "El Nido Tour B Entalula Beach",
  entalulaBeach6: "El Nido Tour B Entalula Beach",
  entalulaBeach7: "El Nido Tour B Entalula Beach",
  entalulaBeach8: "El Nido Tour B Entalula Beach",
  snakeIsland: "El Nido Tour B Snake Island",
  snakeIsland2: "El Nido Tour B Snake Island",
  snakeIsland3: "El Nido Tour B Snake Island",
  snakeIsland4: "El Nido Tour B Snake Island",
  snakeIsland5: "El Nido Tour B Snake Island",
  snakeIsland6: "El Nido Tour B Snake Island",
  snakeIsland7: "El Nido Tour B Snake Island",
  snakeIsland8: "El Nido Tour B Snake Island",
  snakeIsland9: "El Nido Tour B Snake Island",
  pinagbuyutanIsland2: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland3: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland4: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland5: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland6: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland7: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland8: "El Nido Tour B Pinagbuyutan Island",
  pinagbuyutanIsland9: "El Nido Tour B Pinagbuyutan Island",
  yumyumIsland: "El Nido Tour B Yum-Yum Island",
  yumyumIsland2: "El Nido Tour B Yum-Yum Island",
  yumyumIsland3: "El Nido Tour B Yum-Yum Island",
  yumyumIsland4: "El Nido Tour B Yum-Yum Island",
  cudugnonCave: "El Nido Tour B Cudugnon Cave",
  cudugnonCave2: "El Nido Tour B Cudugnon Cave",
  cudugnonCave3: "El Nido Tour B Cudugnon Cave",
  cudugnonCave4: "El Nido Tour B Cudugnon Cave",
  cudugnonCave5: "El Nido Tour B Cudugnon Cave",
  cudugnonCave6: "El Nido Tour B Cudugnon Cave",
  snorkeling: "El Nido Tour B Snorkeling",
  snorkeling2: "El Nido Tour B Snorkeling",
  snorkeling3: "El Nido Tour B Snorkeling",
  snorkeling4: "El Nido Tour B Snorkeling",
  snorkeling5: "El Nido Tour B Snorkeling",
  snorkeling6: "El Nido Tour B Snorkeling",
  cardFr1: "El Nido Tour B Pinterest card",
  cardFr2: "El Nido Tour B Pinterest card",
  cardEn1: "El Nido Tour B Pinterest card",
  cardEn2: "El Nido Tour B Pinterest card",
}

export const TourBImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      entalulaBeach: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach3: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach4: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach5: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach6: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach7: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entalulaBeach8: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-entalula-beach8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland3: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland4: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland5: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland6: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland7: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland8: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snakeIsland9: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snake-island9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland2: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland3: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland4: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland5: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland6: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland7: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland8: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pinagbuyutanIsland9: file(
        relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-pinagbuyutan-island9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyumIsland: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-yum-yum-island.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyumIsland2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-yum-yum-island2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyumIsland3: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-yum-yum-island3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yumyumIsland4: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-yum-yum-island4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-cudugnon-cave.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-cudugnon-cave2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave3: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-cudugnon-cave3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave4: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-cudugnon-cave4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave5: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-cudugnon-cave5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cudugnonCave6: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-cudugnon-cave6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snorkeling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snorkeling2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling3: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snorkeling3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling4: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snorkeling4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling5: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snorkeling5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling6: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/tour-b-snorkeling6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/philippines/palawan/el-nido-tour-b/card-en2.jpg" }) {
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

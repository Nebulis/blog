import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  bonus: "Semenggoh Nature Reserve Bonus",
  bonus2: "Semenggoh Nature Reserve Bonus",
  family: "Semenggoh Nature Reserve Family",
  family2: "Semenggoh Nature Reserve Family",
  family3: "Semenggoh Nature Reserve Family",
  feeding: "Semenggoh Nature Reserve Feeding",
  feeding2: "Semenggoh Nature Reserve Feeding",
  feeding3: "Semenggoh Nature Reserve Feeding",
  feeding4: "Semenggoh Nature Reserve Feeding",
  feeding5: "Semenggoh Nature Reserve Feeding",
  feeding6: "Semenggoh Nature Reserve Feeding",
  feeding7: "Semenggoh Nature Reserve Feeding",
  feeding8: "Semenggoh Nature Reserve Feeding",
  feeding9: "Semenggoh Nature Reserve Feeding",
  feeding10: "Semenggoh Nature Reserve Feeding",
  feeding11: "Semenggoh Nature Reserve Feeding",
  feeding12: "Semenggoh Nature Reserve Feeding",
  feeding13: "Semenggoh Nature Reserve Feeding",
  feeding14: "Semenggoh Nature Reserve Feeding",
  feeding15: "Semenggoh Nature Reserve Feeding",
  feeding16: "Semenggoh Nature Reserve Feeding",
  feeding17: "Semenggoh Nature Reserve Feeding",
  feeding18: "Semenggoh Nature Reserve Feeding",
  feeding19: "Semenggoh Nature Reserve Feeding",
  feeding20: "Semenggoh Nature Reserve Feeding",
  feeding21: "Semenggoh Nature Reserve Feeding",
  history: "Semenggoh Nature Reserve History",
  history2: "Semenggoh Nature Reserve History",
  briefing: "Semenggoh Nature Reserve Briefing",
  briefing2: "Semenggoh Nature Reserve Briefing",
  briefing3: "Semenggoh Nature Reserve Briefing",
  briefing4: "Semenggoh Nature Reserve Briefing",
  briefing5: "Semenggoh Nature Reserve Briefing",
  briefing6: "Semenggoh Nature Reserve Briefing",
  briefing7: "Semenggoh Nature Reserve Briefing",
  briefing8: "Semenggoh Nature Reserve Briefing",
  briefing9: "Semenggoh Nature Reserve Briefing",
  briefing10: "Semenggoh Nature Reserve Briefing",
  briefing11: "Semenggoh Nature Reserve Briefing",
  briefing12: "Semenggoh Nature Reserve Briefing",
  briefing13: "Semenggoh Nature Reserve Briefing",
  briefing14: "Semenggoh Nature Reserve Briefing",
  cardFr1: "Semenggoh Nature Reserve Pinterest card",
  cardFr2: "Semenggoh Nature Reserve Pinterest card",
  cardEn1: "Semenggoh Nature Reserve Pinterest card",
  cardEn2: "Semenggoh Nature Reserve Pinterest card",
}

export const SemenggohNatureReserveImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      bonus: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-bonus.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bonus2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-bonus2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      family: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-family.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      family2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-family2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      family3: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-family3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding3: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding4: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding5: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding6: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding6.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding7: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding7.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding8: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding8.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding9: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding9.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding10: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding10.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding11: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding11.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding12: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding12.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding13: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding13.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding14: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding14.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding15: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding15.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding16: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding16.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding17: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding17.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding18: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding18.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding19: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding19.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding20: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding20.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feeding21: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-feeding21.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-history.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-history2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing3: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing4: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing5: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing5.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing6: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing6.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing7: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing7.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing8: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing8.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing9: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing9.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing10: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing10.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing11: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing11.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing12: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing12.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing13: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing13.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      briefing14: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-briefing14.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-en2.jpg" }) {
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

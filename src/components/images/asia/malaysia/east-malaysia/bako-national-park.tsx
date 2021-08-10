import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  squirrel: "Bako National Park Squirrel",
  colugo: "Bako National Park Colugo",
  colugo2: "Bako National Park Colugo",
  crab: "Bako National Park Fiddler Crab",
  crab2: "Bako National Park Fiddler Crab",
  snake: "Bako National Park Snake",
  boar: "Bako National Park Bornean Bearded Pig",
  boar2: "Bako National Park Bornean Bearded Pig",
  boar3: "Bako National Park Bornean Bearded Pig",
  crabEatingMacaque: "Bako National Park Crab-Eating Macaque",
  crabEatingMacaque2: "Bako National Park Crab-Eating Macaque",
  crabEatingMacaque3: "Bako National Park Crab-Eating Macaque",
  crabEatingMacaque4: "Bako National Park Crab-Eating Macaque",
  proboscisMonkey: "Bako National Park Proboscis Monkey",
  proboscisMonkey2: "Bako National Park Proboscis Monkey",
  proboscisMonkey3: "Bako National Park Proboscis Monkey",
  proboscisMonkey4: "Bako National Park Proboscis Monkey",
  beach: "Bako National Park Beach",
  beach2: "Bako National Park Beach",
  beach3: "Bako National Park Beach",
  beach4: "Bako National Park Beach",
  beach5: "Bako National Park Beach",
  beach6: "Bako National Park Beach",
  beach7: "Bako National Park Beach",
  beach8: "Bako National Park Beach",
  beach9: "Bako National Park Beach",
  beach10: "Bako National Park Beach",
  beach11: "Bako National Park Beach",
  beach12: "Bako National Park Beach",
  beach13: "Bako National Park Beach",
  flora: "Bako National Park Bridge",
  flora2: "Bako National Park Bridge",
  flora3: "Bako National Park Jungle",
  flora4: "Bako National Park Jungle",
  flora5: "Bako National Park Jungle",
  flora6: "Bako National Park Jungle",
  flora7: "Bako National Park Jungle",
  flora8: "Bako National Park Jungle",
  flora9: "Bako National Park Jungle",
  flora10: "Bako National Park Jungle",
  flora11: "Bako National Park Jungle",
  flora12: "Bako National Park Jungle",
  flora13: "Bako National Park Jungle",
  flora14: "Bako National Park Jungle",
  flora15: "Bako National Park Jungle",
  flora16: "Bako National Park Jungle",
  flora17: "Bako National Park Jungle",
  flora18: "Bako National Park Jungle",
  flora19: "Bako National Park Jungle",
  flora20: "Bako National Park Jungle",
  flora21: "Bako National Park Jungle",
  flora22: "Bako National Park Jungle",
  trek: "Bako National Park Map",
  trek2: "Bako National Park Map",
  trek3: "Bako National Park Signs",
  welcome: "Bako National Park Welcome Sign",
  jetty: "Bako National Park Cat",
  jetty2: "Bako National Park Bako Village",
  jetty3: "Bako National Park Bako Village",
  jetty4: "Bako National Park Boat Ride",
  jetty5: "Bako National Park Boat Ride",
  jetty6: "Bako National Park Boat Ride",
  jetty7: "Bako National Park Boat Ride",
  jetty8: "Bako National Park Boat Ride",
  jetty9: "Bako National Park Cliffs",
  jetty10: "Bako National Park Entrance",
  cardFr1: "Bako National Park Pinterest card",
  cardFr2: "Bako National Park Pinterest card",
  cardEn1: "Bako National Park Pinterest card",
  cardEn2: "Bako National Park Pinterest card",
}

export const BakoNationalParkImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      squirrel: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-squirrel.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colugo: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-colugo.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      colugo2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-colugo2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crab: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-crab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crab2: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-crab2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snake: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-snake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boar: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-boar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boar2: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-boar2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boar3: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-boar3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crabEatingMacaque: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-crab-eating-macaque.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crabEatingMacaque2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-crab-eating-macaque2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crabEatingMacaque3: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-crab-eating-macaque3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crabEatingMacaque4: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-crab-eating-macaque4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proboscisMonkey: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-proboscis-monkey.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proboscisMonkey2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-proboscis-monkey2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proboscisMonkey3: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-proboscis-monkey3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proboscisMonkey4: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-proboscis-monkey4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach3: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach4: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach5: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach6: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach7: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach8: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach9: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach10: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach11: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach12: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      beach13: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-beach13.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora3: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora4: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora5: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora6: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora7: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora8: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora9: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora10: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora11: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora12: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora13: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora13.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora14: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora14.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora15: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora15.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora16: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora16.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora17: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora17.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora18: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora18.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora19: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora19.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora20: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora20.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora21: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora21.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flora22: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-flora22.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trek: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-trek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trek2: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-trek2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trek3: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-trek3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      welcome: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-welcome.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty3: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty4: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty5: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty6: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty7: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty8: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty9: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jetty10: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/bako-national-park-jetty10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/malaysia/east-malaysia/bako-national-park/card-en2.jpg" }) {
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

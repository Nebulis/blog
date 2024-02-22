import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  orientExpress: "Orient Express",
  orientExpress2: "Orient Express",
  orientExpress3: "Orient Express",
  orientExpress4: "Orient Express",
  orientExpress5: "Orient Express",
  orientExpress6: "Orient Express",
  orientExpress7: "Orient Express",
  orientExpress8: "Orient Express",
  orientExpress9: "Orient Express",
  snow: "Snow Dome",
  snow2: "Snow Dome",
  meal: "Christmas Decorations",
  meal2: "Christmas Plush",
  meal3: "Christmas Decorations",
  meal4: "Christmas Decorations",
  meal5: "Christmas Table",
  jewel: "Jewel Christmas Tree",
  jewel2: "Jewel Christmas Decorations",
  jewel3: "Jewel Christmas Decorations",
  jewel4: "Jewel Christmas Decorations",
  jewel5: "Jewel Christmas Tree",
  jewel6: "Jewel Waterfall & Christmas Tree",
  jewel7: "Jewel Waterfall & Christmas Tree",
  jewel8: "Jewel Christmas Decorations",
  jewel9: "Jewel Christmas Decorations",
  jewel10: "Jewel Christmas Decorations",
  jewel11: "Jewel Christmas Tree",
  jewel12: "Jewel Christmas Decorations",
  jewel13: "Jewel Christmas Decorations",
  jewel14: "Jewel Christmas Decorations",
  jewel15: "Jewel Waterfall Light Show",
  jewel16: "Jewel Waterfall Light Show",
  jewel17: "Jewel Waterfall Light Show",
  garden: "Garden By The Bay Supertree",
  garden2: "Garden By The Bay Christmas Wonderland By Day",
  garden3: "Garden By The Bay Christmas Wonderland By Day",
  garden4: "Garden By The Bay Christmas Wonderland By Day",
  garden5: "Garden By The Bay Christmas Wonderland By Day",
  garden6: "Garden By The Bay Christmas Wonderland By Day",
  garden7: "Garden By The Bay Christmas Wonderland By Night",
  garden8: "Garden By The Bay Christmas Wonderland Market By Night",
  garden9: "Garden By The Bay Christmas Wonderland Market By Night",
  garden10: "Garden By The Bay Christmas Wonderland By Night",
  garden11: "Garden By The Bay Christmas Wonderland By Night",
  garden12: "Garden By The Bay Christmas Wonderland By Night",
  garden13: "Garden By The Bay Christmas Wonderland By Night",
  garden14: "Garden By The Bay Christmas Wonderland By Night",
  garden15: "Flower Dome Recipe Book Decoration",
  garden16: "Flower Dome Decoration By Day",
  garden17: "Flower Dome Decoration By Day",
  garden18: "Flower Dome Decoration By Day",
  garden19: "Flower Dome Decoration By Day",
  garden20: "Flower Dome Decoration By Day",
  garden21: "Flower Dome Decoration By Day",
  garden22: "Flower Dome Decoration By Day",
  garden23: "Flower Dome Decoration By Day",
  garden24: "Flower Dome Decoration By Day",
  garden25: "Flower Dome Decoration By Day",
  garden26: "Flower Dome Decoration By Day",
  garden27: "Flower Dome Decoration By Day",
  garden28: "Flower Dome Decoration By Day",
  garden29: "Flower Dome Decoration By Day",
  garden30: "Flower Dome Decoration By Day",
  garden31: "Flower Dome Decoration By Day",
  garden32: "Flower Dome Decoration By Night",
  garden33: "Flower Dome Decoration By Night",
  garden34: "Flower Dome Decoration By Night",
  garden35: "Flower Dome Decoration By Night",
  garden36: "Flower Dome Decoration By Night",
  mbs: "Marina Bay Sands in Christmas",
  tradition: "Christmas Socks and Hot Chocolate",
  singapore: "Christmas Decorations",
  singapore2: "Christmas Tree",
  singapore3: "Christmas Decorations",
  cardFr1: "Christmas In Singapore Pinterest card",
  cardFr2: "Christmas In Singapore Pinterest card",
  cardEn1: "Christmas In Singapore Pinterest card",
  cardEn2: "Christmas In Singapore Pinterest card",
}

export const ChristmasInSingaporeImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      orientExpress: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress2: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress3: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress4: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress5: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress6: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress7: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress8: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orientExpress9: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-orient-express9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snow: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-snow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snow2: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-snow2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meal: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-meal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meal2: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-meal2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meal3: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-meal3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meal4: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-meal4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meal5: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-meal5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel2: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel3: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel4: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel5: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel6: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel7: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel8: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel9: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel10: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel11: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel12: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel13: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel14: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel15: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel16: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jewel17: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-jewel17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden2: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden3: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden4: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden5: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden6: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden7: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden8: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden9: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden10: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden11: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden12: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden13: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden13.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden14: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden14.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden15: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden15.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden16: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden16.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden17: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden17.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden18: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden18.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden19: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden19.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden20: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden20.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden21: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden21.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden22: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden22.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden23: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden23.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden24: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden24.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden25: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden25.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden26: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden26.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden27: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden27.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden28: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden28.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden29: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden29.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden30: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden30.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden31: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden31.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden32: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden32.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden33: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden33.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden34: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden34.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden35: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden35.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden36: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-garden36.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mbs: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-mbs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-singapore.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore2: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-singapore2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore3: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-singapore3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tradition: file(
        relativePath: { eq: "asia/singapore/christmas-in-singapore/christmas-in-singapore-tradition.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/singapore/christmas-in-singapore/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
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

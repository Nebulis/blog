import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  crossing: "Shibuya Crossing",
  crossing2: "Shibuya Crossing",
  crossing3: "Shibuya Crossing",
  crossing4: "Shibuya Crossing",
  hachiko: "Shibuya District Hachiko Statue",
  mall: "Shibuya District Mall",
  takeshitaStreet: "Shibuya District Takeshita Street",
  takeshitaStreet2: "Shibuya District Takeshita Street",
  takeshitaStreet3: "Shibuya District Takeshita Street",
  takeshitaStreet4: "Shibuya District Takeshita Street",
  takeshitaStreet5: "Shibuya District Takeshita Street",
  takeshitaStreet6: "Shibuya District Takeshita Street",
  takeshitaStreet7: "Shibuya District Takeshita Street",
  takeshitaStreet8: "Shibuya District Takeshita Street",
  takeshitaStreet9: "Shibuya District Takeshita Street",
  takeshitaStreet10: "Shibuya District Takeshita Street",
  takeshitaStreet11: "Shibuya District Takeshita Street",
  takeshitaStreet12: "Shibuya District Takeshita Street",
  takeshitaStreet13: "Shibuya District Takeshita Street",
  takeshitaStreet14: "Shibuya District Takeshita Street",
  takeshitaStreet15: "Shibuya District Takeshita Street",
  takeshitaStreet16: "Shibuya District Takeshita Street",
  takeshitaStreet17: "Shibuya District Takeshita Street",
  takeshitaStreet18: "Shibuya District Takeshita Street",
  takeshitaStreet19: "Shibuya District Takeshita Street",
  takeshitaStreet20: "Shibuya District Takeshita Street",
  cardFr1: "Pinterest Shibuya District Card",
  cardFr2: "Pinterest Shibuya District Card",
  cardEn1: "Pinterest Shibuya District Card",
  cardEn2: "Pinterest Shibuya District Card",
}

export const ShibuyaDistrictImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      crossing: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-crossing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crossing2: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-crossing2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crossing3: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-crossing3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crossing4: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-crossing4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hachiko: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-hachiko.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mall: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-mall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet2: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet3: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet4: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet5: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet6: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet7: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet8: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet9: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet10: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet11: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet12: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet13: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street13.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet14: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street14.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet15: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street15.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet16: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street16.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet17: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street17.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet18: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street18.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet19: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street19.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      takeshitaStreet20: file(
        relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-takeshita-street20.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/card-en2.jpg" }) {
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

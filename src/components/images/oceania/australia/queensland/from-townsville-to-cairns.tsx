import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  townsville4: "View from the ocean from Townsville beach",
  townsville: "View from the ocean from Townsville beach",
  townsville2: "View from the ocean from Townsville beach",
  townsville3: "Sunset view from the ocean from Townsville beach",
  missionBeach: "Mission Beach",
  cardFr1: "From Townsville to Cairns Pinterest card",
  cardFr2: "From Townsville to Cairns Pinterest card",
  cardEn1: "From Townsville to Cairns Pinterest card",
  cardEn2: "From Townsville to Cairns Pinterest card",
}

export const FromTownsvilleToCairnsImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      townsville4: file(
        relativePath: {
          eq: "oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-townsville4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      townsville: file(
        relativePath: {
          eq: "oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-townsville.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      townsville2: file(
        relativePath: {
          eq: "oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-townsville2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      townsville3: file(
        relativePath: {
          eq: "oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-townsville3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      missionBeach: file(
        relativePath: {
          eq: "oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-mission-beach.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "oceania/australia/queensland/from-townsville-to-cairns/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "oceania/australia/queensland/from-townsville-to-cairns/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "oceania/australia/queensland/from-townsville-to-cairns/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "oceania/australia/queensland/from-townsville-to-cairns/card-en2.jpg" }) {
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

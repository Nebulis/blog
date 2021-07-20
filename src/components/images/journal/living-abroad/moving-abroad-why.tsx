import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  movingAbroad: "Moving Abroad",
  movingAbroad2: "Moving Abroad",
  movingAbroad3: "Moving Abroad",
  movingAbroad4: "Moving Abroad",
  cardFr1: "Moving Abroad Why Pinterest card",
  cardEn1: "Moving Abroad Why Pinterest card",
}

export const MovingAbroadWhyImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      movingAbroad: file(relativePath: { eq: "journal/living-abroad/moving-abroad-why/moving-abroad-why.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      movingAbroad2: file(relativePath: { eq: "journal/living-abroad/moving-abroad-why/moving-abroad-why2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      movingAbroad3: file(relativePath: { eq: "journal/living-abroad/moving-abroad-why/moving-abroad-why3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      movingAbroad4: file(relativePath: { eq: "journal/living-abroad/moving-abroad-why/moving-abroad-why4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "journal/living-abroad/moving-abroad-why/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "journal/living-abroad/moving-abroad-why/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [1200]) {
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

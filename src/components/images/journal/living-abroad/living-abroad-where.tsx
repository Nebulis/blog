import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  livingAbroadWhere: "Living Abroad",
  livingAbroadWhere2: "Living Abroad",
  livingAbroadWhere3: "Living Abroad",
  livingAbroadWhere4: "Living Abroad",
  livingAbroadWhere5: "Living Abroad",
  livingAbroadWhere6: "Living Abroad",
  livingAbroadWhere7: "Living Abroad",
  livingAbroadWhere8: "Living Abroad",
}

export const LivingAbroadWhereImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      livingAbroadWhere: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere2: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere3: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere4: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere5: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere6: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere7: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livingAbroadWhere8: file(
        relativePath: { eq: "journal/living-abroad/living-abroad-where/living-abroad-where8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
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

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../types/shared"

const alt = {
  movingAbroadWhy: "Living Abroad",
}

export const SharedJournalImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      movingAbroadWhy: file(
        relativePath: { eq: "journal/living-abroad/moving-abroad-why/moving-abroad-why-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 80, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

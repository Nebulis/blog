import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../types/shared"

const alt = {
  homeVietnam: "Vietnam",
  homePhilippines: "Philippines",
  homeJapan: "Japan",
}

export const SharedAsiaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      homeVietnam: file(relativePath: { eq: "asia/vietnam/home-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homePhilippines: file(relativePath: { eq: "asia/philippines/carousel-philippines-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homeJapan: file(relativePath: { eq: "asia/japan/home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 60) {
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

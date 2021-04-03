import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  homeSouthernVietnam: "Southern Vietnam",
  homeCentralVietnam: "Central Vietnam",
  homeNorthernImage: "Northern Vietnam",
}

export const SharedVietnamImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      homeSouthernVietnam: file(relativePath: { eq: "asia/vietnam/southern-vietnam/home-southern-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      homeCentralVietnam: file(relativePath: { eq: "asia/vietnam/central-vietnam/home-central-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      homeNorthernImage: file(relativePath: { eq: "asia/vietnam/northern-vietnam/home-northern-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 75, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
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

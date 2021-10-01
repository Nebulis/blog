import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

export const alt = {
  fromTownsvilleToCairns: "Koala sleeping in a tree",
  greenIsland: "Boat in front of Green Island",
  kurandaVillage: "Boat in front of Green Island",
  magneticIsland: "Bay Overview From Magnetic Island",
}
export const SharedCardAustraliaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      fromTownsvilleToCairns: file(
        relativePath: {
          eq: "oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-main.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kurandaVillage: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      magneticIsland: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-main.jpg" }
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

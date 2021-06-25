import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  name: "TODO",
}

export const TransportsInJapanImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      name: file(relativePath: { eq: "asia/japan/transports-in-japan/name.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
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

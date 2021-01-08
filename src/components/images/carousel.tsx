import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../types/shared"
export const CarouselImageQuery: React.FunctionComponent<ExtraImageProps & { image: string }> = ({
  className = "",
  image,
}) => {
  const data = useStaticQuery(graphql`
    query {
      vietnam1: file(relativePath: { eq: "asia/vietnam/carousel-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vietnam2: file(relativePath: { eq: "asia/vietnam/carousel-2-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      philippines1: file(relativePath: { eq: "asia/philippines/carousel-philippines.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={data[image].childImageSharp.fluid} alt="Landscape" className={className} />
}
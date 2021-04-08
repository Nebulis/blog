import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../types/shared"
export const CarouselImageQuery: React.FunctionComponent<ExtraImageProps & { image: string }> = ({
  className = "",
  image,
  fluidObject = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      vietnam1: file(relativePath: { eq: "asia/vietnam/carousel-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vietnam2: file(relativePath: { eq: "asia/vietnam/carousel-2-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      philippines1: file(relativePath: { eq: "asia/philippines/carousel-philippines.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [1800]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      philippines2: file(relativePath: { eq: "asia/philippines/carousel-philippines-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      japan1: file(relativePath: { eq: "asia/japan/carousel-japan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      japan2: file(relativePath: { eq: "asia/japan/carousel-japan-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      malaysia1: file(relativePath: { eq: "asia/malaysia/carousel-malaysia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      malaysia2: file(relativePath: { eq: "asia/malaysia/carousel-malaysia2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      indonesia1: file(relativePath: { eq: "asia/indonesia/carousel-indonesia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      indonesia2: file(relativePath: { eq: "asia/indonesia/carousel-indonesia2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      australia1: file(relativePath: { eq: "oceania/australia/carousel-australia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      australia2: file(relativePath: { eq: "oceania/australia/carousel-australia2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }} alt="Landscape" className={className} />
}

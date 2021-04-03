import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"
export const SouthernVietnam: React.FunctionComponent<ExtraImageProps & { image: string }> = ({
  className = "",
  image,
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      calao1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-calao1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      calao2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-calao2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dragon: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-dragon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-market1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scarecrow: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-scarecrow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruits: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-fruits.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  React.useEffect(() => {
    if (onLoad) onLoad(data[image].childImageSharp.fluid.src)
  }, [data, image, onLoad])
  return <Img fluid={data[image].childImageSharp.fluid} alt="Calao" className={className} />
}

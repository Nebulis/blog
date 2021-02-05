import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"
export const SouthernVietnam: React.FunctionComponent<ExtraImageProps & { image: string }> = ({
  className = "",
  image,
}) => {
  const data = useStaticQuery(graphql`
    query {
      calao1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-calao1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      calao2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-calao2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dragon: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-dragon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-market1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      scarecrow: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-scarecrow.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruits: file(relativePath: { eq: "asia/vietnam/southern-vietnam/ho-chi-minh/ho-chi-minh-fruits.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={data[image].childImageSharp.fluid} alt="Calao" className={className} />
}

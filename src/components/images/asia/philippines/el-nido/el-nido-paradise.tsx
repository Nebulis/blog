import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"

export const ElNidoParadise: React.FunctionComponent<ExtraImageProps & { image: string }> = ({
  className = "",
  image,
  fluidObject = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      departure1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-departure-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      departure2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-departure-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-fruit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jellyfish: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-jellyfish.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise3: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise4: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise5: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise6: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise7: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise8: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      paradise9: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-snorkeling-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-snorkeling-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling3: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-snorkeling-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tuktuk: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-tuktuk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      city1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      city2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      city3: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      city4: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      city5: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }} alt="El Nido" className={className} />
}

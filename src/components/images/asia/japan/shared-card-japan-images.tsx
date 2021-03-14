import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  arashiyama: "Arashiyama Bamboo Forest",
  himejiCastle: "Himeji Castle",
  nagoyaCastle: "Nagoya Castle",
  mountFuji: "Mount Fuji",
  aDayInTokyo: "A Day In Tokyo",
  daigoji: "Daigoji Temple",
  kinkakuji: "Kinkaku-ji Temple",
  fushimi: "Fushimi Inari Taisha",
  sensoji: "Sensoji",
  hamarikyuGarden: "Hamarikyu Garden",
  springInJapan: "Japan In Spring",
}

export const SharedCardJapanImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      arashiyama: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      himejiCastle: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nagoyaCastle: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mountFuji: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko/fuji-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aDayInTokyo: file(relativePath: { eq: "asia/japan/tokyo/adayintokyo/tokyo-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      daigoji: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kinkakuji: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fushimi: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensoji: file(relativePath: { eq: "asia/japan/tokyo/sensoji/main-sensoji.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu/hamarikyu-garden-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      springInJapan: file(relativePath: { eq: "asia/japan/japan-in-spring-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
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

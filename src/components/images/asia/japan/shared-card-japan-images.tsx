import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  arashiyama: "Arashiyama Bamboo Forest",
  himejiCastle: "Himeji Castle",
  nagoyaCastle: "Nagoya Castle",
  mountFuji: "Mount Fuji",
  twoDaysInTokyo: "Two Days In Tokyo",
  daigoji: "Daigoji Temple",
  kinkakuji: "Kinkaku-ji Temple",
  fushimi: "Fushimi Inari Taisha",
  sensoji: "Sensoji",
  hamarikyuGarden: "Hamarikyu Garden",
  springInJapan: "Japan In Spring",
  prepareJapan: "Prepare Your Travel To Japan",
  customsInJapan: "Customs In Japan",
  transportsInJapan: "Transports In Japan",
  foodInJapan: "Food In Japan",
  toganji: "Toganji",
  uenoPark: "Ueno Park",
  shibuyaDistrict: "Shibuya District",
  yasukuniDori: "Yasukuni Dori",
}

export const SharedCardJapanImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      arashiyama: file(relativePath: { eq: "asia/japan/carousel-japan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      himejiCastle: file(relativePath: { eq: "asia/japan/carousel-japan-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nagoyaCastle: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mountFuji: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
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
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
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
      sensoji: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      springInJapan: file(relativePath: { eq: "asia/japan/spring-in-japan/spring-in-japan-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prepareJapan: file(relativePath: { eq: "asia/japan/prepare-japan/prepare-japan-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      customsInJapan: file(relativePath: { eq: "asia/japan/home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      transportsInJapan: file(relativePath: { eq: "asia/japan/transports-in-japan/transports-in-japan-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foodInJapan: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foodInJapanFr: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-main-fr.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toganji: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      uenoPark: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twoDaysInTokyo: file(relativePath: { eq: "asia/japan/tokyo/two-days-in-tokyo/two-days-in-tokyo-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shibuyaDistrict: file(relativePath: { eq: "asia/japan/tokyo/shibuya-district/shibuya-district-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDori: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
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

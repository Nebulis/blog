import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  history: "Arashiyama History",
  temple: "Arashiyama Temple",
  temple2: "Arashiyama Temple",
  temple3: "Arashiyama Temple",
  temple4: "Arashiyama Temple",
  temple5: "Arashiyama Temple",
  temple6: "Arashiyama Temple",
  temple7: "Arashiyama Temple",
  temple8: "Arashiyama Temple",
  temple9: "Arashiyama Temple",
  garden: "Arashiyama Garden",
  garden2: "Arashiyama Garden",
  garden3: "Arashiyama Garden",
  garden4: "Arashiyama Garden",
  garden5: "Arashiyama Garden",
  garden6: "Arashiyama Garden",
  garden7: "Arashiyama Garden",
  garden8: "Arashiyama Garden",
  garden9: "Arashiyama Garden",
  garden10: "Arashiyama Garden",
  garden11: "Arashiyama Garden",
  garden12: "Arashiyama Garden",
  garden13: "Arashiyama Garden",
  garden14: "Arashiyama Garden",
  garden15: "Arashiyama Garden",
  garden16: "Arashiyama Garden",
  garden17: "Arashiyama Garden",
  garden18: "Arashiyama Garden",
  garden19: "Arashiyama Garden",
  visit: "Arashiyama Visit",
  visit2: "Arashiyama Visit",
  visit3: "Arashiyama Visit",
  visit4: "Arashiyama Visit",
  visit5: "Arashiyama Visit",
  visit6: "Arashiyama Visit",
  cardFr1: "Kinkaku-ji Pinterest card",
  cardFr2: "Kinkaku-ji Pinterest card",
  cardEn1: "Kinkaku-ji Pinterest card",
  cardEn2: "Kinkaku-ji Pinterest card",
}

export const KinkakujiImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      history: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-history.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden2: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden3: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden4: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden5: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden6: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden7: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden8: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden9: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden10: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden11: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden12: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden13: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden14: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden15: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden16: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden17: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden18: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden19: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-garden19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple2: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple3: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple4: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple5: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple6: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple7: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple8: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      temple9: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-temple9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit2: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-visit2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit3: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-visit3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit4: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-visit4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit5: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-visit5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit6: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/kinkakuji-visit6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cardFr1: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/kyoto/kinkakuji/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
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

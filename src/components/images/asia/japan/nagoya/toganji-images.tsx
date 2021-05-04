import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  visit: "Toganji Visit",
  visit2: "Toganji Visit",
  visit3: "Toganji Visit",
  garden: "Toganji Garden",
  garden2: "Toganji Garden",
  garden3: "Toganji Garden",
  garden4: "Toganji Garden",
  garden5: "Toganji Garden",
  garden6: "Toganji Garden",
  garden7: "Toganji Garden",
  garden8: "Toganji Garden",
  garden9: "Toganji Garden",
  garden10: "Toganji Garden",
  garden11: "Toganji Garden",
  garden12: "Toganji Garden",
  garden13: "Toganji Garden",
  garden14: "Toganji Garden",
  garden15: "Toganji Garden",
  garden16: "Toganji Garden",
  buddha: "Toganji Buddha",
  buddha2: "Toganji Buddha",
  buddha3: "Toganji Buddha",
  buddha4: "Toganji Buddha",
  buddha5: "Toganji Buddha",
  buddha6: "Toganji Buddha",
  cardFr1: "Toganji Pinterest card",
  cardFr2: "Toganji Pinterest card",
  cardEn1: "Toganji Pinterest card",
  cardEn2: "Toganji Pinterest card",
}

export const ToganjiImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      visit: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit2: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-visit2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit3: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-visit3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden2: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden3: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden4: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden5: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden6: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden7: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden8: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden9: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden10: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden11: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden12: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden13: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden14: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden15: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden16: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-garden16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddha: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-buddha.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddha2: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-buddha2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddha3: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-buddha3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddha4: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-buddha4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddha5: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-buddha5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddha6: file(relativePath: { eq: "asia/japan/nagoya/toganji/toganji-buddha6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/nagoya/toganji/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/nagoya/toganji/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/nagoya/toganji/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/nagoya/toganji/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
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

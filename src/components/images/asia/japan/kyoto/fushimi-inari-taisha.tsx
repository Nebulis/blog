import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  discovery: "Fushimi Inari Taisha Discovery",
  discovery2: "Fushimi Inari Taisha Discovery",
  discovery3: "Fushimi Inari Taisha Discovery",
  discovery4: "Fushimi Inari Taisha Discovery",
  discovery5: "Fushimi Inari Taisha Discovery",
  discovery7: "Fushimi Inari Taisha Discovery",
  discovery8: "Fushimi Inari Taisha Discovery",
  discovery9: "Fushimi Inari Taisha Discovery",
  discovery10: "Fushimi Inari Taisha Discovery",
  discovery11: "Fushimi Inari Taisha Discovery",
  discovery12: "Fushimi Inari Taisha Discovery",
  discovery13: "Fushimi Inari Taisha Discovery",
  toriis: "Fushimi Inari Taisha Torii",
  toriis2: "Fushimi Inari Taisha Torii",
  toriis3: "Fushimi Inari Taisha Torii",
  history2: "Fushimi Inari Taisha History",
  history3: "Fushimi Inari Taisha History",
  history4: "Fushimi Inari Taisha History",
  history5: "Fushimi Inari Taisha History",
  visit: "Fushimi Inari Taisha Visit",
  visit2: "Fushimi Inari Taisha Visit",
  visit3: "Fushimi Inari Taisha Visit",
  visit4: "Fushimi Inari Taisha Visit",
  visit5: "Fushimi Inari Taisha Visit",
  visit6: "Fushimi Inari Taisha Visit",
  visit7: "Fushimi Inari Taisha Visit",
  cardFr1: "Fushimi Inari Taisha Pinterest card",
  cardFr2: "Fushimi Inari Taisha Pinterest card",
  cardEn1: "Fushimi Inari Taisha Pinterest card",
  cardEn2: "Fushimi Inari Taisha Pinterest card",
}

export const FushimiInariTaishaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      discovery: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery2: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery3: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery4: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery5: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery7: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery8: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery9: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery10: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery11: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery12: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      discovery13: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-discovery13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toriis: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-toriis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toriis2: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-toriis2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      toriis3: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-toriis3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history2: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-history2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history3: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-history3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history4: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-history4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history5: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-history5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit2: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit3: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit4: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit5: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit6: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit7: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-inari-taisha-visit7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/kyoto/fushimi/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/kyoto/fushimi/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/kyoto/fushimi/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/kyoto/fushimi/card-en2.jpg" }) {
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

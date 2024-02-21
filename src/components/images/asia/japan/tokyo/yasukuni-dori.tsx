import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  yasukuniDoriNight: "Yasukuni-Dori At Night",
  yasukuniDoriNight2: "Yasukuni-Dori At Night",
  yasukuniDoriNight3: "Yasukuni-Dori At Night",
  yasukuniDoriNight4: "Yasukuni-Dori At Night",
  yasukuniDoriDay: "Yasukuni-Dori At Day",
  yasukuniDoriDay2: "Yasukuni-Dori At Day",
  yasukuniDoriDay3: "Yasukuni-Dori At Day",
  yasukuniDoriDay4: "Yasukuni-Dori At Day",
  yasukuniDoriDay5: "Yasukuni-Dori At Day",
  yasukuniDoriDay6: "Yasukuni-Dori At Day",
  yasukuniDoriDay7: "Yasukuni-Dori At Day",
  yasukuniDoriDay8: "Yasukuni-Dori At Day",
  yasukuniDoriDay9: "Yasukuni-Dori At Day",
  yasukuniDoriDay10: "Yasukuni-Dori At Day",
  yasukuniDoriDay11: "Yasukuni-Dori At Day",
  yasukuniDoriDay12: "Yasukuni-Dori At Day",
  yasukuniDoriDay13: "Yasukuni-Dori At Day",
  yasukuniDoriDay14: "Yasukuni-Dori At Day",
  yasukuniDoriDay15: "Yasukuni-Dori At Day",
  yasukuniDoriDay16: "Yasukuni-Dori At Day",
  cardFr1: "Yasukuni-Dori Pinterest card",
  cardFr2: "Yasukuni-Dori Pinterest card",
  cardEn1: "Yasukuni-Dori Pinterest card",
  cardEn2: "Yasukuni-Dori Pinterest card",
}

export const YasukuniDoriImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      yasukuniDoriNight: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-night.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriNight2: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-night2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriNight3: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-night3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriNight4: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-night4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay2: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay3: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay4: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay5: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay6: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay7: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay8: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay9: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay10: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay11: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay12: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay13: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay14: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay15: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yasukuniDoriDay16: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/yasukuni-dori-day16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/tokyo/yasukuni-dori/card-en2.jpg" }) {
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

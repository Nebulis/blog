import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  memorial: "Memorial Monument",
  u17: "U17 Plane",
  a1: "A-1 Skyraider",
  f5a: "F-5A Jet Fighter",
  m48: "M48 Tank",
  ch47: "CH-47 Chinook",
  helicopter: "Helicopter",
  guillotine: "Guillotine",
  jail: "Jail",
  tigerCage: "Tiger Cage",
  panelTigerCage: "Panel Tiger Cage",
  museum1: "Soldier with weapon",
  museum2: "Weapons",
  museum3: "Gas masks",
  soldierHelmet: "Solider Helmet Peace",
  youngChild: "Young child with weapon",
  cardFr1: "Pinterest Card War Remnants Museum",
  cardFr2: "Pinterest Card War Remnants Museum",
  cardEn1: "Pinterest Card War Remnants Museum",
  cardEn2: "Pinterest Card War Remnants Museum",
}

export const HoChiMinWarMuseum: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      memorial: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/memorial.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      u17: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/u17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      a1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/a1-skyraider.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      f5a: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/f5a-jet-fighter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      m48: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/m48.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ch47: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/ch47-chinook.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      helicopter: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/helicopter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      guillotine: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/guillotine.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jail: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/jail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tigerCage: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/tiger-cage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      panelTigerCage: file(
        relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/panel-tiger-cage.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/museum1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/museum2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      museum3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/museum3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soldierHelmet: file(
        relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/soldier-helmet.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youngChild: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/young-child.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/card-en2.jpg" }) {
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
  return (
    <Img
      fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

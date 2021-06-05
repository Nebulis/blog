import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  hamarikyuGarden: "Hamarikyu Gardens",
  hamarikyuGarden2: "Hamarikyu Gardens",
  hamarikyuGarden3: "Hamarikyu Gardens",
  hamarikyuGarden4: "Hamarikyu Gardens",
  hamarikyuGarden5: "Hamarikyu Gardens",
  hamarikyuGarden6: "Hamarikyu Gardens",
  hamarikyuGarden7: "Hamarikyu Gardens",
  hamarikyuGarden8: "Hamarikyu Gardens",
  hamarikyuGarden9: "Hamarikyu Gardens",
  hamarikyuGarden10: "Hamarikyu Gardens",
  hamarikyuGarden11: "Hamarikyu Gardens",
  hamarikyuGarden12: "Hamarikyu Gardens",
  hamarikyuGarden13: "Hamarikyu Gardens",
  hamarikyuGarden14: "Hamarikyu Gardens",
  hamarikyuGarden15: "Hamarikyu Gardens",
  hamarikyuGarden16: "Hamarikyu Gardens",
  hamarikyuGarden17: "Hamarikyu Gardens",
  hamarikyuGarden18: "Hamarikyu Gardens",
  hamarikyuGarden19: "Hamarikyu Gardens",
  hamarikyuGarden20: "Hamarikyu Gardens",
  hamarikyuGarden21: "Hamarikyu Gardens",
  hamarikyuGarden22: "Hamarikyu Gardens",
  hamarikyuGarden23: "Hamarikyu Gardens",
  hamarikyuGarden24: "Hamarikyu Gardens",
  hamarikyuGarden25: "Hamarikyu Gardens",
  hamarikyuGarden26: "Hamarikyu Gardens",
  hamarikyuGarden27: "Hamarikyu Gardens",
  hamarikyuGarden28: "Hamarikyu Gardens",
  hamarikyuGarden29: "Hamarikyu Gardens",
  cardFr1: "Hamarikyu Gardens Pinterest card",
  cardFr2: "Hamarikyu Gardens Pinterest card",
  cardEn1: "Hamarikyu Gardens Pinterest card",
  cardEn2: "Hamarikyu Gardens Pinterest card",
}

export const HamarikyuGardensImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      hamarikyuGarden: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden2: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden3: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden4: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden5: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden6: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden7: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden8: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden9: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden10: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden11: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden12: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden13: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden14: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden15: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden16: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden17: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden18: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden19: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden20: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden20.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden21: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden21.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden22: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden22.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden23: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden23.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden24: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden24.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden25: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden25.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden26: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden26.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamarikyuGarden27: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden27.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu-garden/card-en2.jpg" }) {
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

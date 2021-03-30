import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  castle: "Nagoya Castle",
  castle2: "Nagoya Castle",
  food: "Nagoya Castle Food",
  history: "Nagoya Castle History",
  honmaru: "Nagoya Castle Honmaru",
  honmaru2: "Nagoya Castle Honmaru",
  honmaru3: "Nagoya Castle Honmaru",
  entrance: "Nagoya Castle Entrance",
  entrance2: "Nagoya Castle Entrance",
  entrance3: "Nagoya Castle Entrance",
  entrance4: "Nagoya Castle Entrance",
  entrance5: "Nagoya Castle Entrance",
  entrance6: "Nagoya Castle Entrance",
  entrance7: "Nagoya Castle Entrance",
  entrance8: "Nagoya Castle Entrance",
  entrance9: "Nagoya Castle Entrance",
  garden: "Nagoya Castle Garden",
  garden2: "Nagoya Castle Garden",
  garden3: "Nagoya Castle Garden",
  garden4: "Nagoya Castle Garden",
  garden5: "Nagoya Castle Garden",
  garden6: "Nagoya Castle Garden",
  garden7: "Nagoya Castle Garden",
  garden8: "Nagoya Castle Garden",
  garden9: "Nagoya Castle Garden",
  garden10: "Nagoya Castle Garden",
  garden11: "Nagoya Castle Garden",
  garden12: "Nagoya Castle Garden",
  garden13: "Nagoya Castle Garden",
  garden14: "Nagoya Castle Garden",
  garden15: "Nagoya Castle Garden",
  garden16: "Nagoya Castle Garden",
  garden17: "Nagoya Castle Garden",
  garden18: "Nagoya Castle Garden",
  garden19: "Nagoya Castle Garden",
  garden20: "Nagoya Castle Garden",
  cardFr1: "Nagoya Castle Pinterest card",
  cardFr2: "Nagoya Castle Pinterest card",
  cardEn1: "Nagoya Castle Pinterest card",
  cardEn2: "Nagoya Castle Pinterest card",
}

export const NagoyaCastleImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      castle: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-castle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      castle2: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-castle2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      honmaru: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-honmaru.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      honmaru2: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-honmaru2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      honmaru3: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-honmaru3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance2: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance3: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance4: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance5: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance6: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance7: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance8: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      entrance9: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-entrance9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-history.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-food.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden2: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden3: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden4: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden5: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden6: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden7: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden8: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden9: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden10: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden11: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden12: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 60, srcSetBreakpoints: [400]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden13: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden14: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden15: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden16: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden17: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden18: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden19: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden20: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-garden20.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/nagoya/castle/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/nagoya/castle/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/nagoya/castle/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/nagoya/castle/card-en2.jpg" }) {
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

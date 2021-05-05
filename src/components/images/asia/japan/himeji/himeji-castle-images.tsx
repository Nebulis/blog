import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  gyuKaku: "Himeji Castle Gyu Kaku",
  visit: "Himeji Castle",
  garden: "Himeji Castle Garden",
  garden2: "Himeji Castle Garden",
  garden3: "Himeji Castle Garden",
  garden4: "Himeji Castle Garden",
  garden5: "Himeji Castle Garden",
  garden6: "Himeji Castle Garden",
  garden7: "Himeji Castle Garden",
  maze: "Himeji Castle Maze",
  maze2: "Himeji Castle Maze",
  maze3: "Himeji Castle Maze",
  maze4: "Himeji Castle Maze",
  maze5: "Himeji Castle Maze",
  maze6: "Himeji Castle Maze",
  maze7: "Himeji Castle Maze",
  maze8: "Himeji Castle Maze",
  maze9: "Himeji Castle Maze",
  maze10: "Himeji Castle Maze",
  maze11: "Himeji Castle Maze",
  maze12: "Himeji Castle Maze",
  inside: "Himeji Castle Inside",
  inside2: "Himeji Castle Inside",
  inside3: "Himeji Castle Inside",
  inside4: "Himeji Castle Inside",
  inside5: "Himeji Castle Inside",
  inside6: "Himeji Castle Inside",
  inside7: "Himeji Castle Inside",
  inside8: "Himeji Castle Inside",
  inside9: "Himeji Castle Inside",
  inside10: "Himeji Castle Inside",
  inside11: "Himeji Castle Inside",
  history: "Himeji Castle",
  bonus: "Himeji Castle",
  bonus2: "Himeji Castle",
  bonus3: "Himeji Castle",
  bonus4: "Himeji Castle",
  kokoEn: "Himeji Castle Koko-En Garden",
  cardFr1: "Himeji Castle Pinterest card",
  cardFr2: "Himeji Castle Pinterest card",
  cardEn1: "Himeji Castle Pinterest card",
  cardEn2: "Himeji Castle Pinterest card",
}

export const HimejiCastleImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      gyuKaku: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-gyu-kaku.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      history: file(relativePath: { eq: "asia/japan/home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden2: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden3: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden4: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden5: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden6: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      garden7: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze2: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze3: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze4: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze5: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze6: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze7: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze8: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze9: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze10: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze11: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maze12: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-maze12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside2: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside3: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside4: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside5: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside6: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside7: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside8: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside9: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside10: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside11: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-inside11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bonus: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-bonus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bonus2: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-bonus2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bonus3: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-bonus3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bonus4: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-bonus4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 90, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kokoEn: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-koko-en.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/himeji/castle/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/himeji/castle/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/himeji/castle/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/himeji/castle/card-en2.jpg" }) {
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

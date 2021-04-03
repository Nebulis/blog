import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"

export const ElNidoParadiseImages: React.FunctionComponent<ExtraImageProps & { image: string }> = ({
  className = "",
  image,
  fluidObject = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      departure1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-departure-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      departure2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-departure-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruit: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-fruit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jellyfish: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-jellyfish.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise3: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise4: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise5: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise6: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise7: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise8: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      paradise9: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-paradise-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-snorkeling-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-snorkeling-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snorkeling3: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-snorkeling-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tuktuk: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-tuktuk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city3: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city4: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      city5: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/el-nido-city5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/philippines/el-nido/el-nido-paradise/card-en2.jpg" }) {
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
  return <Img fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }} alt="El Nido" className={className} />
}

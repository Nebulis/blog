import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  visit: "Arashiyama Visit",
  visit2: "Arashiyama Visit",
  visit3: "Arashiyama Visit",
  street: "Arashiyama Street",
  street2: "Arashiyama Street",
  street3: "Arashiyama Street",
  street4: "Arashiyama Street",
  street5: "Arashiyama Street",
  street6: "Arashiyama Street",
  street7: "Arashiyama Street",
  street8: "Arashiyama Street",
  street9: "Arashiyama Street",
  street10: "Arashiyama Street",
  street11: "Arashiyama Street",
  bamboo: "Arashiyama Bamboo Forest",
  bamboo2: "Arashiyama Bamboo Forest",
  bamboo3: "Arashiyama Bamboo Forest",
  bamboo4: "Arashiyama Bamboo Forest",
  bamboo5: "Arashiyama Bamboo Forest",
  bamboo6: "Arashiyama Bamboo Forest",
  bamboo7: "Arashiyama Bamboo Forest",
  bamboo8: "Arashiyama Bamboo Forest",
  bamboo9: "Arashiyama Bamboo Forest",
  bamboo10: "Arashiyama Bamboo Forest",
  bamboo11: "Arashiyama Bamboo Forest",
  bamboo12: "Arashiyama Bamboo Forest",
  bamboo13: "Arashiyama Bamboo Forest",
  bamboo14: "Arashiyama Bamboo Forest",
  bamboo15: "Arashiyama Bamboo Forest",
  monkey: "Arashiyama Monkey",
  kimono: "Arashiyama Kimono Forest",
  cardFr1: "Arashiyama Pinterest card",
  cardFr2: "Arashiyama Pinterest card",
  cardEn1: "Arashiyama Pinterest card",
  cardEn2: "Arashiyama Pinterest card",
}

export const ArashiyamaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      visit: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-visit.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit2: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-visit2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 50, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visit3: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-visit3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street2: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street3: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street4: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street5: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street6: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street7: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street8: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street9: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street10: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      street11: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-street11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo2: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo3: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo4: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo5: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo6: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo7: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo8: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo9: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo10: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo11: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo12: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo13: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo14: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bamboo15: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-bamboo15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monkey: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-monkey.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kimono: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-kimono.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/card-en2.jpg" }) {
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

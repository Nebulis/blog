import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  sensojiGarden: "Senso-Ji Garden",
  sensojiGarden2: "Senso-Ji Garden",
  sensojiGarden3: "Senso-Ji Garden",
  sensojiGarden4: "Senso-Ji Garden",
  sensojiGarden5: "Senso-Ji Garden",
  sensojiGarden6: "Senso-Ji Garden",
  sensojiGarden7: "Senso-Ji Garden",
  sensojiComplex: "Senso-Ji Complex",
  sensojiComplex2: "Senso-Ji Complex",
  sensojiComplex3: "Senso-Ji Complex",
  sensojiComplex4: "Senso-Ji Complex",
  sensojiComplex5: "Senso-Ji Complex",
  sensojiComplex6: "Senso-Ji Complex",
  sensojiComplex7: "Senso-Ji Complex",
  sensojiComplex8: "Senso-Ji Complex",
  sensojiComplex9: "Senso-Ji Complex",
  sensojiComplex10: "Senso-Ji Complex",
  sensojiComplex11: "Senso-Ji Complex",
  sensojiComplex12: "Senso-Ji Complex",
  sensojiComplex13: "Senso-Ji Complex",
  sensojiComplex14: "Senso-Ji Complex",
  sensojiComplex15: "Senso-Ji Complex",
  sensojiComplex16: "Senso-Ji Complex",
  sensojiComplex17: "Senso-Ji Complex",
  sensojiComplex18: "Senso-Ji Complex",
  sensojiComplex19: "Senso-Ji Complex",
  cardFr1: "Senso-Ji Temple Pinterest card",
  cardFr2: "Senso-Ji Temple Pinterest card",
  cardEn1: "Senso-Ji Temple Pinterest card",
  cardEn2: "Senso-Ji Temple Pinterest card",
}

export const SensojiImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      sensojiGarden: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiGarden2: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiGarden3: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiGarden4: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiGarden5: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiGarden6: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiGarden7: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-garden7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex2: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex3: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex4: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex5: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex6: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex7: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex8: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex9: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex10: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex11: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex12: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex13: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex14: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex15: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex16: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex17: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex18: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sensojiComplex19: file(relativePath: { eq: "asia/japan/tokyo/sensoji/sensoji-complex19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/tokyo/sensoji/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/tokyo/sensoji/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/tokyo/sensoji/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/tokyo/sensoji/card-en2.jpg" }) {
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

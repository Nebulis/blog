import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  restaurant: "Ueno Park Restaurant",
  park: "Ueno Park",
  park2: "Ueno Park",
  park3: "Ueno Park",
  park4: "Ueno Park",
  park5: "Ueno Park",
  park6: "Ueno Park",
  park7: "Ueno Park",
  park8: "Ueno Park",
  park9: "Ueno Park",
  park10: "Ueno Park",
  park11: "Ueno Park",
  park12: "Ueno Park",
  park14: "Ueno Park",
  park15: "Ueno Park",
  park16: "Ueno Park",
  park17: "Ueno Park",
  park18: "Ueno Park",
  cardFr1: "Pinterest Ueno Park Card",
  cardFr2: "Pinterest Ueno Park Card",
  cardEn1: "Pinterest Ueno Park Card",
  cardEn2: "Pinterest Ueno Park Card",
}

export const UenoParkImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      restaurant: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park-restaurant.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park2: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park3: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park4: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park5: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park6: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park7: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park8: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park9: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park10: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park11: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park12: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park14: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park15: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park16: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park17: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      park18: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/ueno-park18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 70, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 70, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 70, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/tokyo/ueno-park/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 70, srcSetBreakpoints: [1000]) {
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

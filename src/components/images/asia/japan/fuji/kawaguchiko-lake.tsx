import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  when: "Kawaguchiko Lake",
  plane: "Kawaguchiko Lake - View From Plane",
  plane2: "Kawaguchiko Lake - View From Plane",
  train: "Kawaguchiko Lake - View From Train",
  train2: "Kawaguchiko Lake - View From Train",
  train3: "Kawaguchiko Lake - View From Train",
  lake: "Kawaguchiko Lake",
  lake2: "Kawaguchiko Lake",
  lake3: "Kawaguchiko Lake",
  lake4: "Kawaguchiko Lake",
  lake5: "Kawaguchiko Lake",
  lake6: "Kawaguchiko Lake",
  lake7: "Kawaguchiko Lake",
  lake8: "Kawaguchiko Lake",
  lake9: "Kawaguchiko Lake",
  lake10: "Kawaguchiko Lake",
  lake11: "Kawaguchiko Lake",
  lake12: "Kawaguchiko Lake",
  lake13: "Kawaguchiko Lake",
  lake14: "Kawaguchiko Lake",
  lake15: "Kawaguchiko Lake",
  lake16: "Kawaguchiko Lake",
  chureitoPagoda: "Kawaguchiko Lake Chureito Pagoda",
  cardFr1: "Kawaguchiko Lake Pinterest card",
  cardFr2: "Kawaguchiko Lake Pinterest card",
  cardEn1: "Kawaguchiko Lake Pinterest card",
  cardEn2: "Kawaguchiko Lake Pinterest card",
}

export const KawaguchikoLakeImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      lake: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake2: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake3: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake4: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake5: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake6: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake7: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake8: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake9: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake10: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake11: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake12: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake13: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake14: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake15: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lake16: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      train: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-train.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      train2: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-train2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      train3: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-train3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plane: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-plane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plane2: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-plane2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chureitoPagoda: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/chureito-pagoda.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      when: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-when.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko-lake/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
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

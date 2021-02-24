import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  hotel1: "Green Village Mekong Hotel",
  hotel2: "Green Village Mekong Hotel",
  hotel3: "Green Village Mekong Hotel",
  floatingMarket1: "Can Tho Floating Market Boat Ride",
  floatingMarket2: "Can Tho Floating Market House Shore",
  floatingMarket3: "Can Tho Floating Market House Shore",
  floatingMarket4: "Can Tho Floating Market Boat Merchants",
  floatingMarket5: "Can Tho Floating Market Boat Merchants",
  floatingMarket6: "Can Tho Floating Market Boat Merchants",
  floatingMarket7: "Can Tho Floating Market Boat Merchants",
  floatingMarket8: "Can Tho Floating Market Boat Merchants",
  floatingMarket9: "Can Tho Floating Market Boat Merchants",
  floatingMarket10: "Can Tho Floating Market Boat Merchants",
  floatingMarket11: "Can Tho Floating Market Boat Merchants",
  floatingMarket12: "Can Tho Floating Market Boat Merchants",
  market1: "Can Tho Wet Market",
  market2: "Can Tho Wet Market",
  market3: "Can Tho Wet Market",
  market4: "Can Tho Wet Market",
  market5: "Can Tho Wet Market",
  market6: "Can Tho Wet Market",
  market7: "Can Tho Wet Market",
  rice1: "Can Tho Rice Paper Factory",
  rice2: "Can Tho Rice Paper Factory",
  rice3: "Can Tho Rice Paper Factory",
  rice4: "Can Tho Rice Paper Factory",
  rice5: "Can Tho Rice Paper Factory",
  rice6: "Can Tho Rice Paper Factory",
  rice7: "Can Tho Rice Paper Factory",
  ride1: "Can Tho Ride",
  ride2: "Can Tho Ride",
  pineapple: "Can Tho Pineapple",
  cardFr1: "Can Tho Pinterest card",
  cardFr2: "Can Tho Pinterest card",
  cardEn1: "Can Tho Pinterest card",
  cardEn2: "Can Tho Pinterest card",
}

export const CanThoImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      hotel1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/hotel1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hotel2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/hotel2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hotel3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/hotel3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket8: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket9: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket10: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket11: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      floatingMarket12: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      market7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rice7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ride1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/ride1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ride2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/ride2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pineapple: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/pineapple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
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

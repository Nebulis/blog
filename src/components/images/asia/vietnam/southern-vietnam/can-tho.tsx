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
  floatingMarket13: "Can Tho Floating Market Boat Merchants",
  floatingMarket14: "Can Tho Floating Market Boat Merchants",
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
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hotel2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/hotel2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hotel3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/hotel3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket8: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket9: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket10: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket11: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket12: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket13: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      floatingMarket14: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/floating-market14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/market7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rice7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/rice7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ride1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/ride1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ride2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/ride2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pineapple: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/pineapple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
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

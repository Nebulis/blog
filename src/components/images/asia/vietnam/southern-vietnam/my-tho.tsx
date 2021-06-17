import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../..//types/shared"
import { useEffect } from "react"

const alt = {
  vinhTrang1: "Vinh Trang Pagoda",
  vinhTrang2: "Vinh Trang Pagoda",
  vinhTrang3: "Vinh Trang Pagoda",
  vinhTrang4: "Vinh Trang Pagoda",
  vinhTrang5: "Vinh Trang Pagoda",
  vinhTrang6: "Vinh Trang Pagoda",
  boat1: "Mekong River Delta Boat",
  boat2: "Mekong River Delta Boat",
  boat3: "Mekong River Delta Boat",
  boat4: "Mekong River Delta Boat",
  mekong1: "Mekong River Delta",
  mekong2: "Mekong River Delta",
  mekong3: "Mekong River Delta",
  mekong4: "Mekong River Delta",
  mekong5: "Mekong River Delta",
  fruit1: "Mekong River Delta Pomelo",
  fruit2: "Mekong River Delta Banana",
  fruit3: "Mekong River Delta Palm Tree",
  fruit4: "Mekong River Delta Pomelo",
  fruit5: "Mekong River Delta Pomelo",
  coconut1: "Mekong River Delta Under Palm Tree",
  coconut2: "Mekong River Delta Under Palm Tree",
  coconut3: "Mekong River Delta Under Palm Tree",
  coconut4: "Mekong River Delta Under Palm Tree",
  coconut5: "Mekong River Delta Under Palm Tree",
  coconut6: "Mekong River Delta Under Palm Tree",
  coconut7: "Mekong River Delta Under Palm Tree",
  coconut8: "Mekong River Delta Under Palm Tree",
  sweets1: "Coconut Candy",
  sweets2: "Coconut Candy",
  sweets3: "Coconut Candy",
  sweets4: "Coconut Candy",
  sculpture1: "Monkey Sculpture",
  sculpture2: "Elephant Sculpture",
  sugarcane: "Sugarcane Juice",
  sugarcane2: "Sugarcane Juice",
  sugarcane3: "Sugarcane Juice",
  bees: "My Tho Bees",
  song1: "My Tho Song",
  song2: "My Tho Song",
  cardFr1: "My Tho Pinterest card",
  cardFr2: "My Tho Pinterest card",
  cardEn1: "My Tho Pinterest card",
  cardEn2: "My Tho Pinterest card",
}

export const MyThoImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      vinhTrang1: file(relativePath: { eq: "asia/vietnam/carousel-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vinhTrang2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vinhTrang3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vinhTrang4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/home-southern-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vinhTrang5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vinhTrang6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mekong1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mekong2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mekong3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mekong4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mekong5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruit1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruit2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruit3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruit4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fruit5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut1: file(relativePath: { eq: "asia/vietnam/carousel-2-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coconut8: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sweets1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sweets2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sweets3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sweets4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sculpture1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sculpture1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sculpture2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sculpture2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sugarcane: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sugarcane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sugarcane2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sugarcane2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sugarcane3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sugarcane3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bees: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/bees.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      song1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/song1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      song2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/song2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/card-en2.jpg" }) {
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

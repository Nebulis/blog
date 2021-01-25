import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../..//types/shared"

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
  sculpture1: "Monkey Sculpture",
  sculpture2: "Elephant Sculpture",
  sugarcane: "Sugarcane Juice",
}

export const MyThoImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      vinhTrang1: file(relativePath: { eq: "asia/vietnam/carousel-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vinhTrang2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vinhTrang3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vinhTrang4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/home-southern-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vinhTrang5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vinhTrang6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/vinh-trang6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      boat1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      boat2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      boat3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      boat4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/boat4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mekong1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mekong2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mekong3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mekong4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mekong5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/mekong5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      fruit5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/fruit5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut1: file(relativePath: { eq: "asia/vietnam/carousel-2-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut7: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      coconut8: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/coconut8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sweets1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sweets2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sweets3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sweets3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sculpture1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sculpture1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sculpture2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sculpture2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sugarcane: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/sugarcane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

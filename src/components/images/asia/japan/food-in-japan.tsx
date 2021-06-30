import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  soup: "Food In Japan Soup",
  teppanyaki: "Food In Japan Teppanyaki",
  onigirazu: "Food In Japan Onigirazu",
  onigirazu2: "Food In Japan Onigirazu",
  onigiri: "Food In Japan Onigiri",
  onigiri2: "Food In Japan Onigiri",
  yakitori: "Food In Japan Yakitori",
  yakitori2: "Food In Japan Yakitori",
  udon: "Food In Japan Udon",
  udon2: "Food In Japan Udon",
  udon3: "Food In Japan Udon",
  fakeFood: "Food In Japan Fake Food",
  fakeFood2: "Food In Japan Fake Food",
  fakeFood3: "Food In Japan Fake Food",
  fakeFood4: "Food In Japan Fake Food",
  curry: "Food In Japan Curry",
  curry2: "Food In Japan Curry",
  curry3: "Food In Japan Curry",
  curry4: "Food In Japan Curry",
  curry5: "Food In Japan Curry",
  tempura: "Food In Japan Tempura",
  tempura2: "Food In Japan Tempura",
  sushis: "Food In Japan Sushis",
  sushis2: "Food In Japan Sushis",
  sushis3: "Food In Japan Sushis",
  sushis4: "Food In Japan Sushis",
  sushis5: "Food In Japan Sushis",
  sushis6: "Food In Japan Sushis",
  sushis7: "Food In Japan Sushis",
  sushis8: "Food In Japan Sushis",
  barbecue: "Food In Japan Barbecue",
  barbecue2: "Food In Japan Barbecue",
  barbecue3: "Food In Japan Barbecue",
  barbecue4: "Food In Japan Barbecue",
  soba: "Food In Japan Soba",
  soba2: "Food In Japan Soba",
  soba3: "Food In Japan Soba",
  soba4: "Food In Japan Soba",
  gyozas: "Food In Japan Gyozas",
  gyozas2: "Food In Japan Gyozas",
  gyozas3: "Food In Japan Gyozas",
  gyozas4: "Food In Japan Gyozas",
  gyozas5: "Food In Japan Gyozas",
  ramen: "Food In Japan Ramen",
  ramen2: "Food In Japan Ramen",
  ramen3: "Food In Japan Ramen",
  ramen4: "Food In Japan Ramen",
  ramen5: "Food In Japan Ramen",
  donburi: "Food In Japan Donburi",
  donburi2: "Food In Japan Donburi",
  donburi3: "Food In Japan Donburi",
  donburi4: "Food In Japan Donburi",
  donburi5: "Food In Japan Donburi",
  donburi6: "Food In Japan Donburi",
  donburi7: "Food In Japan Donburi",
}

export const FoodInJapanImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      soup: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-soup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teppanyaki: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-teppanyaki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onigirazu: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-onigirazu.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onigirazu2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-onigirazu2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onigiri: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-onigiri.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onigiri2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-onigiri2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yakitori: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-yakitori.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yakitori2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-yakitori2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      udon: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-udon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      udon2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-udon2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      udon3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-udon3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-tempura.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tempura2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-tempura2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fakeFood: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-fake-food.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fakeFood2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-fake-food2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fakeFood3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-fake-food3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fakeFood4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-fake-food4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-curry.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-curry2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-curry3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-curry4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      curry5: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-curry5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis5: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis6: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis7: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sushis8: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-sushis8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soba: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-soba.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soba2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-soba2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soba3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-soba3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      soba4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-soba4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ramen: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-ramen.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ramen2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-ramen2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ramen3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-ramen3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ramen4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-ramen4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ramen5: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-ramen5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gyozas: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-gyozas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gyozas2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-gyozas2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gyozas3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-gyozas3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gyozas4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-gyozas4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gyozas5: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-gyozas5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barbecue: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-barbecue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barbecue2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-barbecue2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barbecue3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-barbecue3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barbecue4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-barbecue4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi2: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi3: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi4: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi5: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi6: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      donburi7: file(relativePath: { eq: "asia/japan/food-in-japan/food-in-japan-donburi7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
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

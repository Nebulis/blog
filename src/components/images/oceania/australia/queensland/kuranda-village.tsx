import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  overview: "Overview from the mountains",
  overview2: "Overview from the mountains",
  overview3: "Overview from the mountains",
  animal: "Crocodile in Koala Gardens at Kuranda Village",
  animal2: "Crocodile in Koala Gardens at Kuranda Village",
  animal3: "Australian Water Dragon in Koala Gardens at Kuranda Village",
  animal4: "Lizard in Koala Gardens at Kuranda Village",
  animal5: "Turtle in Koala Gardens at Kuranda Village",
  animal6: "Koala in Koala Gardens at Kuranda Village",
  animal7: "Quokka in Koala Gardens at Kuranda Village",
  animal8: "Wombat in Koala Gardens at Kuranda Village",
  animal9: "Wombat in Koala Gardens at Kuranda Village",
  animal10: "Wallaby in Koala Gardens at Kuranda Village",
  bird: "Bird in Birdworld at Kuranda Village",
  bird2: "Bird in Birdworld at Kuranda Village",
  bird3: "Bird in Birdworld at Kuranda Village",
  bird4: "Bird in Birdworld at Kuranda Village",
  bird5: "Bird in Birdworld at Kuranda Village",
  bird6: "Bird in Birdworld at Kuranda Village",
  bird7: "Bird in Birdworld at Kuranda Village",
  bird8: "Bird in Birdworld at Kuranda Village",
  bird9: "Bird in Birdworld at Kuranda Village",
  bird10: "Bird in Birdworld at Kuranda Village",
  bird11: "Bird in Birdworld at Kuranda Village",
  bird12: "Bird in Birdworld at Kuranda Village",
  bird13: "Bird in Birdworld at Kuranda Village",
  bird14: "Bird in Birdworld at Kuranda Village",
  bird15: "Bird in Birdworld at Kuranda Village",
  bird16: "Bird in Birdworld at Kuranda Village",
  bird17: "Bird in Birdworld at Kuranda Village",
  bird18: "Bird in Birdworld at Kuranda Village",
  bird19: "Bird in Birdworld at Kuranda Village",
  butterfly: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly2: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly3: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly4: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly5: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly6: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly7: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly8: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly9: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly10: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly11: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  butterfly12: "Butterfly in Butterfly Sanctuary at Kuranda Village",
  restaurant: "French Restaurant Name Sign in Kuranda Village",
  railway: "Railway View in the Mountain near Kuranda",
  skyrail: "Skyrail View near Kuranda",
  cardFr1: "Kuranda Village Pinterest card",
  cardFr2: "Kuranda Village Pinterest card",
  cardEn1: "Kuranda Village Pinterest card",
  cardEn2: "Kuranda Village Pinterest card",
}

export const KurandaVillageImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      overview: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-overview.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      overview2: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-overview2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      overview3: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-overview3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal2: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal3: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal4: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal5: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal6: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal7: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal8: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal9: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      animal10: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-animal10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird2: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird3: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird4: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird5: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird6: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird7: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird8: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird9: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird10: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird11: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird12: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird13: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird14: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird15: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird16: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird17: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird18: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bird19: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-bird19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly2: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly3: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly4: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly5: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly6: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly7: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly8: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly9: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly10: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly11: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterfly12: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-butterfly12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skyrail: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-skyrail.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      railway: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-railway.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      restaurant: file(
        relativePath: { eq: "oceania/australia/queensland/kuranda-village/kuranda-village-restaurant.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "oceania/australia/queensland/kuranda-village/card-en2.jpg" }) {
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

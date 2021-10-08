import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  glassBoat: "Turtle From a Glass Boat in Green Island Beach",
  glassBoat2: "Turtle From a Glass Boat in Green Island Beach",
  glassBoat3: "Fish From a Glass Boat in Green Island Beach",
  glassBoat4: "Fish From a Glass Boat in Green Island Beach",
  glassBoat5: "Fish From a Glass Boat in Green Island Beach",
  glassBoat6: "Fish From a Glass Boat in Green Island Beach",
  glassBoat7: "Fish From a Glass Boat in Green Island Beach",
  greenIslandBeach: "Green Island Beach",
  greenIslandBeach2: "Green Island Beach",
  greenIslandBeach3: "Green Island Beach",
  greenIsland: "Green Island",
  greenIsland2: "Green Island",
  greenIsland3: "Green Island",
  greenIsland4: "Green Island",
  greenIsland5: "Birds on Green Island",
  greenIsland6: "Birds on Green Island",
  greenIsland7: "Green Island",
  booking: "Helicopter Landing on Green Island",
  booking2: "Helicopter Landing on Green Island",
  booking3: "Helicopter Landing on Green Island",
  booking4: "Helicopter Landing on Green Island",
  howMuch: "Price Board on Green Island",
  cardFr1: "Green Island Pinterest card",
  cardFr2: "Green Island Pinterest card",
  cardEn1: "Green Island Pinterest card",
  cardEn2: "Green Island Pinterest card",
}

export const GreenIslandImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      glassBoat: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassBoat2: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassBoat3: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassBoat4: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassBoat5: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassBoat6: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassBoat7: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-glass-boat7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIslandBeach: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIslandBeach2: file(
        relativePath: { eq: "oceania/australia/queensland/green-island/green-island-beach2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIslandBeach3: file(
        relativePath: { eq: "oceania/australia/queensland/green-island/green-island-beach3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland2: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland3: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland4: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland5: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland6: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      greenIsland7: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      howMuch: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-how-much.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      booking: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-booking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      booking2: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-booking2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      booking3: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-booking3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      booking4: file(relativePath: { eq: "oceania/australia/queensland/green-island/green-island-booking4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "oceania/australia/queensland/green-island/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "oceania/australia/queensland/green-island/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "oceania/australia/queensland/green-island/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "oceania/australia/queensland/green-island/card-en2.jpg" }) {
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

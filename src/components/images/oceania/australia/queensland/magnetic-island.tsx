import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  wallaby: "Black-flanked rock-wallaby In Magnetic Island",
  lizard: "Lizard In Magnetic Island",
  snake: "Collared Whip Snake In Magnetic Island",
  snake2: "Collared Whip Snake In Magnetic Island",
  rainbowLorikeet: "Rainbow Lorikeet In Magnetic Island",
  rainbowLorikeet2: "Rainbow Lorikeet In Magnetic Island",
  rainbowLorikeet3: "Rainbow Lorikeet In Magnetic Island",
  koala: "Koala In Magnetic Island",
  baldingBay: "Balding Bay Trail Panel In Magnetic Island",
  baldingBay2: "Balding Bay Trail In Magnetic Island",
  baldingBay3: "Balding Bay Trail In Magnetic Island",
  baldingBay4: "Balding Bay Trail In Magnetic Island",
  baldingBay5: "Balding Bay Trail In Magnetic Island",
  baldingBay6: "Balding Bay Trail In Magnetic Island",
  baldingBay7: "Balding Bay Trail In Magnetic Island",
  baldingBay8: "Wallaby In Balding Bay Trail In Magnetic Island",
  baldingBay9: "Wallaby In Balding Bay Trail In Magnetic Island",
  baldingBay10: "Balding Bay In Magnetic Island",
  baldingBay11: " Balding Bay In Magnetic Island",
  horseshoeBay: "Horseshoe Bay Beach In Magnetic Island",
  horseshoeBay2: "Dog In A Boat In Horseshoe Bay In Magnetic Island",
  horseshoeBay3: "Horseshoe Bay Beach In Magnetic Island",
  horseshoeBay4: "Horseshoe Bay Beach In Magnetic Island",
  fortsWalk: "View Of Magnetic Island From The Top Of A Hill Near Forts Walk",
  fortsWalk2: "View Of Magnetic Island From The Top Of A Hill Near Forts Walk",
  fortsWalk3: "View Of Magnetic Island From The Top Of A Hill Near Forts Walk",
  fortsWalk4: "View Of Magnetic Island From The Top Of A Hill Near Forts Walk",
  fortsWalk5: "Forts Walk Trail In Magnetic Island",
  fortsWalk6: "Rose Apple Near Forts Walk In Magnetic Island",
  fortsWalk7: "Flowers Near Forts Walk In Magnetic Island",
  fortsWalk8: "Flowers Near Forts Walk In Magnetic Island",
  fortsWalk9: "Koala Sleeping In A Tree Near Forts Walk In Magnetic Island",
  fortsWalk10: "Koala Sleeping In A Tree Near Forts Walk In Magnetic Island",
  fortsWalk11: "Koala Sleeping In A Tree Near Forts Walk In Magnetic Island",
  fortsWalk12: "Koala Sleeping In A Tree Near Forts Walk In Magnetic Island",
  almaBay: "Alma Bay View From the Beach In Magnetic Island",
  almaBay2: "Alma Bay View From the Beach In Magnetic Island",
  almaBay3: "Alma Bay View From the Beach In Magnetic Island",
  almaBay4: "Alma Bay View From the Beach In Magnetic Island",
  almaBay5: "Alma Bay View From the Beach In Magnetic Island",
  geoffreyBay: "Geoffrey Bay Panel In Magnetic Island",
  nellyBay: "Nelly Bay View From A Boat To Magnetic Island",
  nellyBay2: "Nelly Bay View From A Boat To Magnetic Island",
  nellyBay3: "Nelly Bay View From A Boat To Magnetic Island",
  nellyBay4: "Nelly Bay View From A Boat To Magnetic Island",
  stinger: "Stinger Warning in Magnetic Island",
  stinger2: "Stinger Warning in Magnetic Island",
  stinger3: "Information Panel About Stingers in Magnetic Island",
  magneticIsland: "Magnetic Island Name On A Rock",
  magneticIsland2: "Magnetic Island View From The Boat",
  magneticIsland3: "Magnetic Island View From The Boat",
  magneticIsland4: "Magnetic Island View From The Boat",
  magneticIsland5: "Townsville View From The Boat",
  cardFr1: "Magnetic Island Pinterest card",
  cardFr2: "Magnetic Island Pinterest card",
  cardEn1: "Magnetic Island Pinterest card",
  cardEn2: "Magnetic Island Pinterest card",
}

export const MagneticIslandImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      wallaby: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-wallaby.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snake: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-snake.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snake2: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-snake2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lizard: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-lizard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rainbowLorikeet: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-rainbow-lorikeet.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rainbowLorikeet2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-rainbow-lorikeet2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rainbowLorikeet3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-rainbow-lorikeet3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      koala: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-koala.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay4: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay5: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay6: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay7: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay8: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay9: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay10: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baldingBay11: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-balding-bay11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      horseshoeBay: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-horseshoe-bay.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      horseshoeBay2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-horseshoe-bay2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      horseshoeBay3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-horseshoe-bay3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      horseshoeBay4: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-horseshoe-bay4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk4: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk5: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk6: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk7: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk8: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk9: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk10: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk11: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fortsWalk12: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-forts-walk12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      almaBay: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-alma-bay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      almaBay2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-alma-bay2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      almaBay3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-alma-bay3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      almaBay4: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-alma-bay4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      almaBay5: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-alma-bay5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geoffreyBay: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-geoffrey-bay.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nellyBay: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-nelly-bay.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nellyBay2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-nelly-bay2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nellyBay3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-nelly-bay3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nellyBay4: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-nelly-bay4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stinger: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-stinger.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stinger2: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-stinger2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stinger3: file(
        relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island-stinger3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      magneticIsland: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      magneticIsland2: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      magneticIsland3: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      magneticIsland4: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      magneticIsland5: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/magnetic-island5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "oceania/australia/queensland/magnetic-island/card-en2.jpg" }) {
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

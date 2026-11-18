import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  elephantStatue: "Elephant Statue in Siem Reap",
  buddhaStatue: "Buddha Statue in Siem Reap",
  pubStreet1: "Pub Street in Siem Reap",
  pubStreet2: "Pub Street in Siem Reap",
  pubStreet3: "Pub Street in Siem Reap",
  pubStreet4: "Pub Street in Siem Reap",
  pubStreet5: "Pub Street in Siem Reap",
  pubStreet6: "Pub Street in Siem Reap",
  pubStreet7: "Pub Street in Siem Reap",
  nationalMuseum1: "National Museum Of Cambodia in Phnom Penh",
  nationalMuseum2: "National Museum Of Cambodia in Phnom Penh",
  nationalMuseum3: "National Museum Of Cambodia in Phnom Penh",
  royalPalace1: "Royal Palace in Phnom Penh",
  royalPalace2: "Royal Palace in Phnom Penh",
  royalPalace3: "Royal Palace in Phnom Penh",
  royalPalace4: "Royal Palace in Phnom Penh",
  royalPalace5: "Royal Palace in Phnom Penh",
  royalPalace6: "Royal Palace in Phnom Penh",
  royalPalace7: "Royal Palace in Phnom Penh",
  royalPalace8: "Royal Palace in Phnom Penh",
  royalPalace9: "Royal Palace in Phnom Penh",
  royalPalace10: "Royal Palace in Phnom Penh",
  royalPalace11: "Royal Palace in Phnom Penh",
  kampongPhluk1: "Road to Kampong Phluk With Red Sand",
  kampongPhluk2: "Road to Kampong Phluk With Red Sand",
  kampongPhluk3: "Foor Stand On The Road to Kampong Phluk",
  kampongPhluk4: "Road to Kampong Phluk With Ducks Crossing",
  kampongPhluk5: "Road to Kampong Phluk With Ducks Crossing",
  lokLak: "Lok Lak",
  redCurry: "Khmer Red Curry",
  amokTrei: "Amok Trei",
  mondulkiri: "Mondulkiri",
  cardFr1: "Discover Cambodia Pinterest card",
  cardFr2: "Discover Cambodia Pinterest card",
  cardEn1: "Discover Cambodia Pinterest card",
  cardEn2: "Discover Cambodia Pinterest card",
}

export const DiscoverCambodiaImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      mondulkiri: file(relativePath: { eq: "asia/cambodia/discover-cambodia/mondulkiri.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      elephantStatue: file(relativePath: { eq: "asia/cambodia/discover-cambodia/elephant-statue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      buddhaStatue: file(relativePath: { eq: "asia/cambodia/discover-cambodia/buddha-statue.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kampongPhluk1: file(relativePath: { eq: "asia/cambodia/discover-cambodia/kampong-phluk1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kampongPhluk2: file(relativePath: { eq: "asia/cambodia/discover-cambodia/kampong-phluk2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kampongPhluk3: file(relativePath: { eq: "asia/cambodia/discover-cambodia/kampong-phluk3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kampongPhluk4: file(relativePath: { eq: "asia/cambodia/discover-cambodia/kampong-phluk4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kampongPhluk5: file(relativePath: { eq: "asia/cambodia/discover-cambodia/kampong-phluk5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet1: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet2: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet3: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet4: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet5: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet6: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pubStreet7: file(relativePath: { eq: "asia/cambodia/discover-cambodia/pub-street7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nationalMuseum1: file(relativePath: { eq: "asia/cambodia/discover-cambodia/national-museum1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nationalMuseum2: file(relativePath: { eq: "asia/cambodia/discover-cambodia/national-museum2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nationalMuseum3: file(relativePath: { eq: "asia/cambodia/discover-cambodia/national-museum3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nationalMuseum4: file(relativePath: { eq: "asia/cambodia/discover-cambodia/national-museum4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nationalMuseum5: file(relativePath: { eq: "asia/cambodia/discover-cambodia/national-museum5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace1: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace2: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace3: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace4: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace5: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace6: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace7: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace8: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace9: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace10: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      royalPalace11: file(relativePath: { eq: "asia/cambodia/discover-cambodia/royal-palace11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      redCurry: file(relativePath: { eq: "asia/cambodia/discover-cambodia/khmer-red-curry.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lokLak: file(relativePath: { eq: "asia/cambodia/discover-cambodia/lok-lak.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 60, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amokTrei: file(relativePath: { eq: "asia/cambodia/discover-cambodia/amok-trei.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/cambodia/discover-cambodia/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/cambodia/discover-cambodia/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/cambodia/discover-cambodia/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/cambodia/discover-cambodia/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
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

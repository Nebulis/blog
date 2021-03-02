import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  bigLagoon: "El Nido Tour A Big Lagoon",
  bigLagoon2: "El Nido Tour A Big Lagoon",
  bigLagoon3: "El Nido Tour A Big Lagoon",
  bigLagoon4: "El Nido Tour A Big Lagoon",
  bigLagoon5: "El Nido Tour A Big Lagoon",
  bigLagoon6: "El Nido Tour A Big Lagoon",
  secretLagoon: "El Nido Tour A Secret Lagoon",
  secretLagoon2: "El Nido Tour A Secret Lagoon",
  secretLagoon3: "El Nido Tour A Secret Lagoon",
  secretLagoon4: "El Nido Tour A Secret Lagoon",
  secretLagoon5: "El Nido Tour A Secret Lagoon",
  secretLagoon6: "El Nido Tour A Secret Lagoon",
  secretLagoon7: "El Nido Tour A Secret Lagoon",
  secretLagoon8: "El Nido Tour A Secret Lagoon",
  secretLagoon9: "El Nido Tour A Secret Lagoon",
  shimizuIsland: "El Nido Tour A Shimizu Island",
  shimizuIsland2: "El Nido Tour A Shimizu Island",
  shimizuIsland3: "El Nido Tour A Shimizu Island",
  shimizuIsland4: "El Nido Tour A Shimizu Island",
  payongBeach: "El Nido Tour A Payong Beach",
  payongBeach2: "El Nido Tour A Payong Beach",
  payongBeach3: "El Nido Tour A Payong Beach",
  payongBeach4: "El Nido Tour A Payong Beach",
  payongBeach5: "El Nido Tour A Payong Beach",
  sevenCommandoBeach: "El Nido Tour A 7 Commando Beach",
  sevenCommandoBeach2: "El Nido Tour A 7 Commando Beach",
  sevenCommandoBeach3: "El Nido Tour A 7 Commando Beach",
  sevenCommandoBeach4: "El Nido Tour A 7 Commando Beach",
  sevenCommandoBeach5: "El Nido Tour A 7 Commando Beach",
  sevenCommandoBeach6: "El Nido Tour A 7 Commando Beach",
  snorkeling: "El Nido Tour A Snorkeling",
  snorkeling2: "El Nido Tour A Snorkeling",
  snorkeling3: "El Nido Tour A Snorkeling",
  snorkeling4: "El Nido Tour A Snorkeling",
  snorkeling5: "El Nido Tour A Snorkeling",
  snorkeling6: "El Nido Tour A Snorkeling",
  snorkeling7: "El Nido Tour A Snorkeling",
  snorkeling8: "El Nido Tour A Snorkeling",
  snorkeling9: "El Nido Tour A Snorkeling",
  cardFr1: "El Nido Tour A Pinterest card",
  cardFr2: "El Nido Tour A Pinterest card",
  cardEn1: "El Nido Tour A Pinterest card",
  cardEn2: "El Nido Tour A Pinterest card",
}

export const TourAImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      bigLagoon: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-big-lagoon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigLagoon2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-big-lagoon2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigLagoon3: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-big-lagoon3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigLagoon4: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-big-lagoon4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigLagoon5: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-big-lagoon5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bigLagoon6: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-big-lagoon6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon3: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon4: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon5: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon6: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon7: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon8: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      secretLagoon9: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-secret-lagoon9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shimizuIsland: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-shimizu-island.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shimizuIsland2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-shimizu-island2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shimizuIsland3: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-shimizu-island3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      shimizuIsland4: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-shimizu-island4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      payongBeach: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-payong-beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      payongBeach2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-payong-beach2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      payongBeach3: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-payong-beach3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      payongBeach4: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-payong-beach4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      payongBeach5: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-payong-beach5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sevenCommandoBeach: file(
        relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-seven-commando-beach.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sevenCommandoBeach2: file(
        relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-seven-commando-beach2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sevenCommandoBeach3: file(
        relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-seven-commando-beach3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sevenCommandoBeach4: file(
        relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-seven-commando-beach4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sevenCommandoBeach5: file(
        relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-seven-commando-beach5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sevenCommandoBeach6: file(
        relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-seven-commando-beach6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 80, srcSetBreakpoints: [600, 1200]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling3: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling4: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling5: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling6: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling7: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling8: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snorkeling9: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/tour-a-snorkeling9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/philippines/el-nido/tour-a/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
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

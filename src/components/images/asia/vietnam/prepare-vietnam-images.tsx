import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  visa: "Prepare Vietnam Visa",
  hammock: "Prepare Vietnam Sleeping Hammock",
  baggage: "Prepare Vietnam Cat Baggage",
  landscape: "Prepare Vietnam Landscape Paddy Field",
  laughing: "Prepare Vietnam Laughing Women",
  scooter: "Prepare Vietnam Scooter Traffic Jam",
  currency: "Prepare Vietnam Currency",
  currency2: "Prepare Vietnam Currency",
  health: "Prepare Vietnam Health",
  duration: "Prepare Vietnam Duration",
  activities: "Prepare Vietnam Activities",
  currencyApplication: "Prepare Vietnam Currency Application",
  cardFr1: "Prepare Vietnam Pinterest card",
  cardFr2: "Prepare Vietnam Pinterest card",
  cardEn1: "Prepare Vietnam Pinterest card",
  cardEn2: "Prepare Vietnam Pinterest card",
}
export const PrepareVietnamImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  imgStyle,
}) => {
  const data = useStaticQuery(graphql`
    query {
      visa: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-visa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hammock: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-hammock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      baggage: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-baggage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      landscape: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-landscape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      laughing: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-laughing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      scooter: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-scooter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      currency: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-currency.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      currency2: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-currency2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      health: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-health.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      duration: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-duration.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      activities: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-activities.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      currencyApplication: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-currency-application.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/prepare/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/prepare/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/prepare/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/prepare/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={data[image].childImageSharp.fluid} alt={alt[image]} imgStyle={imgStyle} className={className} />
}

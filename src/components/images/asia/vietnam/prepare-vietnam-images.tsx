import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  visa: "Prepare Vietnam Visa",
  hammock: "Prepare Vietnam Sleeping Hammock",
  baggage: "Prepare Vietnam Cat Baggage",
  landscape: "Prepare Vietnam Landscape Paddy Field",
  people: "Prepare Vietnam Vietnamese People",
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
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      visa: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-visa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hammock: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-hammock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      baggage: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-baggage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      landscape: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-landscape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      people: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-people.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scooter: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-scooter.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      currency: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-currency.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      currency2: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-currency2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      health: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-health.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      duration: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-duration.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      activities: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-activities.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      currencyApplication: file(relativePath: { eq: "asia/vietnam/prepare/prepare-vietnam-currency-application.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/prepare/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/prepare/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/prepare/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/prepare/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  React.useEffect(() => {
    if (onLoad) onLoad(data[image].childImageSharp.fluid.src)
  }, [data, image, onLoad])
  return <Img fluid={data[image].childImageSharp.fluid} alt={alt[image]} imgStyle={imgStyle} className={className} />
}

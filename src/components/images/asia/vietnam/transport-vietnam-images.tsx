import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  plane: "Transport Vietnam Plane",
  boat: "Transport Vietnam Boat",
  boat2: "Transport Vietnam Boat",
  boat3: "Transport Vietnam Boat",
  boat4: "Transport Vietnam Boat",
  seaterBus: "Transport Vietnam Seater Bus",
  seaterSleeperBus: "Transport Vietnam Seater Sleeper Bus",
  berthsSleeperBus: "Transport Vietnam Berths Sleeper Bus",
  nightSleeperBus: "Transport Vietnam Night Sleeper Bus",
  rickshaw: "Transport Vietnam Rickshaw",
  train: "Transport Vietnam Train",
  moto: "Transport Vietnam Moto",
  bicycle: "Transport Vietnam Bicycle",
  hardSeatTrain: "Transport Vietnam Train Hard Seat",
  softSeatTrain: "Transport Vietnam Train Soft Seat",
  hardSleeperTrain: "Transport Vietnam Train Hard Sleeper",
  softSleeperTrain: "Transport Vietnam Train Soft Sleeper",
  grabApplication: "Transport Vietnam Grab Application",
  cardFr1: "Transport Vietnam Pinterest card",
  cardFr2: "Transport Vietnam Pinterest card",
  cardEn1: "Transport Vietnam Pinterest card",
  cardEn2: "Transport Vietnam Pinterest card",
}
export const TransportVietnamImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  imgStyle,
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      plane: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-plane.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat2: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-boat2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat3: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-boat3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat4: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-boat4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seaterBus: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-seater-bus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seaterSleeperBus: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-seater-sleeper-bus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      berthsSleeperBus: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-berths-sleeper-bus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nightSleeperBus: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-night-sleeper-bus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rickshaw: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-rickshaw.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      moto: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-moto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bicycle: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-bicycle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      train: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-train.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hardSeatTrain: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-train-hard-seat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      softSeatTrain: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-train-soft-seat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hardSleeperTrain: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-train-hard-sleeper.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      softSleeperTrain: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-train-soft-sleeper.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grabApplication: file(relativePath: { eq: "asia/vietnam/transport/transport-vietnam-grab-application.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/vietnam/transport/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/vietnam/transport/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/vietnam/transport/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/vietnam/transport/card-en2.jpg" }) {
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

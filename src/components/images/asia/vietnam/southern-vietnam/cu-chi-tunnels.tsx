import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  entrance1: "Cu Chi Tunnels Plane",
  entrance2: "Cu Chi Tunnels Helicopter",
  expo1: "Cu Chi Tunnels Expo",
  expo2: "Cu Chi Tunnels Expo",
  expo3: "Cu Chi Tunnels Expo",
  expo4: "Cu Chi Tunnels Expo",
  expo5: "Cu Chi Tunnels Expo",
  expo6: "Cu Chi Tunnels Expo",
  tunnels1: "Cu Chi Tunnels",
  tunnels2: "Cu Chi Tunnels",
  tunnels3: "Cu Chi Tunnels",
  inside1: "Cu Chi Tunnels",
  inside2: "Cu Chi Tunnels",
  inside3: "Cu Chi Tunnels",
  inside4: "Cu Chi Tunnels",
  trap1: "Cu Chi Tunnels Trap",
  trap2: "Cu Chi Tunnels Trap",
  trap3: "Cu Chi Tunnels Trap",
  trap4: "Cu Chi Tunnels Trap",
  rest1: "Cu Chi Tunnels Coconut Rest",
  rest2: "Cu Chi Tunnels Coconut Rest",
  bonus1: "Cu Chi Tunnels",
  bonus2: "Cu Chi Tunnels",
}

export const CuChiTunnelsImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      entrance1: file(
        relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-entrance1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      entrance2: file(
        relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-entrance2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      expo1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-expo1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      expo2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-expo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      expo3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-expo3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      expo4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-expo4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      expo5: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-expo5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      expo6: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-expo6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tunnels1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-tunnels1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tunnels2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-tunnels2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tunnels3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-tunnels3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inside1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-inside1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inside2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-inside2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inside3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-inside3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      inside4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-inside4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trap1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-trap1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trap2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-trap2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trap3: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-trap3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trap4: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-trap4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rest1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-rest1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      rest2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-rest2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bonus1: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-bonus1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bonus2: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-bonus2.jpg" }) {
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

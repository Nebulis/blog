import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

export const alt = {
  discoverSouthernVietnam: "Discover Southern Vietnam",
  cuChiTunnelsMain: "Cu Chi Tunnels",
  myThoMain: "My Tho Palm Tree",
  canThoMain: "Can Tho Floating Market",
  warMuseumMain: "War Remnants Museum Tank",
}
export const SharedCardVietnamImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      discoverSouthernVietnam: file(relativePath: { eq: "asia/vietnam/home-vietnam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      cuChiTunnelsMain: file(
        relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      myThoMain: file(relativePath: { eq: "asia/vietnam/southern-vietnam/my-tho/my-tho-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      canThoMain: file(relativePath: { eq: "asia/vietnam/southern-vietnam/can-tho/can-tho-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      warMuseumMain: file(
        relativePath: { eq: "asia/vietnam/southern-vietnam/war-remnants-museum/war-museum-main.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
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
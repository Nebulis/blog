import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

const alt = {
  mainArashiyama: "Arashiyama Bamboo Forest",
  mainHimeji: "Himeji",
  mainNagoya: "Nagoya",
  mainFuji: "Mount Fuji",
  mainTokyo: "Tokyo",
}

export const SharedJapanImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      mainArashiyama: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainHimeji: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainNagoya: file(relativePath: { eq: "asia/japan/nagoya/castle/nagoya-castle-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainFuji: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko/fuji-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainTokyo: file(relativePath: { eq: "asia/japan/tokyo/adayintokyo/tokyo-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
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

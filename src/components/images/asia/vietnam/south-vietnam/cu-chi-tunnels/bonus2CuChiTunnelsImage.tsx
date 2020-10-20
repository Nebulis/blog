import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
export const Bonus2CuChiTunnelsImage: React.FunctionComponent<{ className?: string }> = ({ className = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/vietnam/south-vietnam/cu-chi-tunnels/cu-chi-tunnels-bonus-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 3 / 4 }}
      alt="Cu Chi Tunnels Expo"
      className={className}
    />
  )
}
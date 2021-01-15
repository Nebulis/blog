import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../../types/shared"

export const CuChiTunnelsMain: React.FunctionComponent<ExtraImageProps> = ({ className = "", fluidObject = {} }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Img fluid={{ ...data.file.childImageSharp.fluid, ...fluidObject }} alt="Cu Chi Tunnels" className={className} />
  )
}

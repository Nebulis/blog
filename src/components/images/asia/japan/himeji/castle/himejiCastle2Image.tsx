import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"

export const HimejiCastle2Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/himeji/castle/himeji-castle-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Himeji castle" />
}

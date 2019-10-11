import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"

export const ArashiyamaTuktukImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-tuktuk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Arashiyama Tuktuk" />
}

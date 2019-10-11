import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"

export const ArashiyamaSkyBamboo3Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/kyoto/arashiyama/arashiyama-sky-bamboo-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Arashiyama Sky Bamboo 3" />
}

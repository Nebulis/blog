import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
export const HamarikyuGardenJungleImage = ({ className = "" }: { className?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/tokyo/hamarikyu/hamarikyu-garden-jungle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Hamarikyu Garden Jungle" className={className} />
}

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
export const KawaguchikoLake2Image = ({ className = "" }: { className?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko/kawaguchiko-lake-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Kawaguchiko Lake 2" className={className} />
}

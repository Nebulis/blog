import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
export const KawaguchikoFuji1Image = ({ className = "" }: { className?: string }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/fuji/kawaguchiko/kawaguchiko-fuji-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="Kawaguchiko Fuji 1" className={className} />
}

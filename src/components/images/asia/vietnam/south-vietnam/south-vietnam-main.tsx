import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const MainSouthVietnamImage: React.FunctionComponent<{ className?: string; lol?: boolean }> = ({
  className = "",
}) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/vietnam/south-vietnam/south-vietnam-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="South Vietnam" className={className} />
}

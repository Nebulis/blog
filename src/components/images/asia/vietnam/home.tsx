import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"
export const HomeVietnamImage: React.FunctionComponent<ExtraImageProps> = ({ className = "", fluidObject = {} }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/vietnam/home.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data.file.childImageSharp.fluid, ...fluidObject }} alt="Vietnam" className={className} />
}

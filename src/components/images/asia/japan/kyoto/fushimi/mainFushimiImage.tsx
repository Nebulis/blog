import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../../../types/shared"
export const MainFushimiImage: React.FunctionComponent<ExtraImageProps> = ({ className = "", fluidObject = {} }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/japan/kyoto/fushimi/fushimi-main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data.file.childImageSharp.fluid, ...fluidObject }} alt="Fushimi Main" className={className} />
}

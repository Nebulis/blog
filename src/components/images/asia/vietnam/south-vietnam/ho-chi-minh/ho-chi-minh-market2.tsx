import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
export const HoChiMinhMarket2Image: React.FunctionComponent<{ className?: string }> = ({ className = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-market2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data.file.childImageSharp.fluid, aspectRatio: 3 / 4 }} alt="Market" className={className} />
}

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import { ExtraImageProps } from "../../../../types/shared"

export const CarouselAndOrganisationPhilippines2: React.FunctionComponent<ExtraImageProps> = ({
  className = "",
  fluidObject = {},
}) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "asia/philippines/carousel-philippines-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, webpQuality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return <Img fluid={{ ...data.file.childImageSharp.fluid, ...fluidObject }} alt="Philippines" className={className} />
}
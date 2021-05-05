import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  kamiDaigo2: "Daigoji Kami Daigo",
  kamiDaigo3: "Daigoji Kami Daigo",
  kamiDaigo4: "Daigoji Kami Daigo",
  kamiDaigo5: "Daigoji Kami Daigo",
  kamiDaigo6: "Daigoji Kami Daigo",
  samboin: "Daigoji Sambo-In",
  samboin2: "Daigoji Sambo-In",
  samboin3: "Daigoji Sambo-In",
  samboin4: "Daigoji Sambo-In",
  samboin5: "Daigoji Sambo-In",
  samboin6: "Daigoji Sambo-In",
  samboin7: "Daigoji Sambo-In",
  samboin8: "Daigoji Sambo-In",
  samboin9: "Daigoji Sambo-In",
  samboin10: "Daigoji Sambo-In",
  samboin11: "Daigoji Sambo-In",
  samboin12: "Daigoji Sambo-In",
  samboin13: "Daigoji Sambo-In",
  samboin14: "Daigoji Sambo-In",
  samboin15: "Daigoji Sambo-In",
  samboin16: "Daigoji Sambo-In",
  samboin17: "Daigoji Sambo-In",
  samboin18: "Daigoji Sambo-In",
  shimoDaiho: "Daigoji Shimo Daiho",
  shimoDaiho2: "Daigoji Shimo Daiho",
  shimoDaiho3: "Daigoji Shimo Daiho",
  shimoDaiho4: "Daigoji Shimo Daiho",
  shimoDaiho5: "Daigoji Shimo Daiho",
  shimoDaiho6: "Daigoji Shimo Daiho",
  shimoDaiho7: "Daigoji Shimo Daiho",
  shimoDaiho8: "Daigoji Shimo Daiho",
  shimoDaiho9: "Daigoji Shimo Daiho",
  shimoDaiho10: "Daigoji Shimo Daiho",
  shimoDaiho11: "Daigoji Shimo Daiho",
  shimoDaiho12: "Daigoji Shimo Daiho",
  cardFr1: "Daigoji Pinterest card",
  cardFr2: "Daigoji Pinterest card",
  cardEn1: "Daigoji Pinterest card",
  cardEn2: "Daigoji Pinterest card",
}

export const DaigojiImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      kamiDaigo2: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-kami-daigo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamiDaigo3: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-kami-daigo3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamiDaigo4: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-kami-daigo4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamiDaigo5: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-kami-daigo5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kamiDaigo6: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-kami-daigo6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho2: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho3: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho4: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho5: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho6: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho7: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho8: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho9: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho10: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho11: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shimoDaiho12: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-shimo-daiho12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin2: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin3: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin4: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin5: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin6: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin7: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin8: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin9: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin10: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin11: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin12: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin13: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin14: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin15: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin15.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin16: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin16.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin17: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin17.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      samboin18: file(relativePath: { eq: "asia/japan/kyoto/daigoji/daigoji-samboin18.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/japan/kyoto/daigoji/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/japan/kyoto/daigoji/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/japan/kyoto/daigoji/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/japan/kyoto/daigoji/card-en2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  useEffect(() => {
    if (onLoad) onLoad(data[image].childImageSharp.fluid.src)
  }, [data, image, onLoad])

  return (
    <Img
      fluid={{ ...data[image].childImageSharp.fluid, ...fluidObject }}
      alt={alt[image]}
      className={className}
      imgStyle={imgStyle}
    />
  )
}

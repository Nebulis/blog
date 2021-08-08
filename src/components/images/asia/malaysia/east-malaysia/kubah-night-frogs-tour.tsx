import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect } from "react"
import { ExtraImageProps } from "../../../../../types/shared"

const alt = {
  map: "Kubah Park Map",
  frog: "Kubah Night Frogs Tour Frog",
  frog2: "Kubah Night Frogs Tour Frog",
  frog3: "Kubah Night Frogs Tour Frog",
  frog4: "Kubah Night Frogs Tour Frog",
  frog5: "Kubah Night Frogs Tour Frog",
  frog6: "Kubah Night Frogs Tour Frog",
  frog7: "Kubah Night Frogs Tour Frog",
  frog8: "Kubah Night Frogs Tour Frog",
  frog9: "Kubah Night Frogs Tour Frog",
  frog10: "Kubah Night Frogs Tour Frog",
  frog11: "Kubah Night Frogs Tour Frog",
  frog12: "Kubah Night Frogs Tour Frog",
  frog13: "Kubah Night Frogs Tour Frog",
  frog14: "Kubah Night Frogs Tour Frog",
  frog15: "Kubah Night Frogs Tour Frog",
  mahoganyFrog: "Kubah Night Frogs Tour Mahogany Frog",
  mahoganyFrog2: "Kubah Night Frogs Tour Mahogany Frog",
  longNosedHornedFrog: "Kubah Night Frogs Tour Long-Nosed Horned Frog",
  longNosedHornedFrog2: "Kubah Night Frogs Tour Long-Nosed Horned Frog",
  longNosedHornedFrog3: "Kubah Night Frogs Tour Long-Nosed Horned Frog",
  longNosedHornedFrog4: "Kubah Night Frogs Tour Long-Nosed Horned Frog",
  fileEaredTreeFrog: "Kubah Night Frogs Tour File-Eared Tree Frog",
  fileEaredTreeFrog2: "Kubah Night Frogs Tour File-Eared Tree Frog",
  peatSwampFrog: "Kubah Night Frogs Tour Peat Swamp Frog",
  peatSwampFrog2: "Kubah Night Frogs Tour Peat Swamp Frog",
  eggs: "Kubah Night Frogs Tour Eggs",
  eggs2: "Kubah Night Frogs Tour Eggs",
  microhyla: "Kubah Night Frogs Tour Mycrophyla",
  microhyla2: "Kubah Night Frogs Tour Mycrophyla",
  microhyla3: "Kubah Night Frogs Tour Mycrophyla",
  cardFr1: "Kubah Night Frogs Tour Pinterest card",
  cardFr2: "Kubah Night Frogs Tour Pinterest card",
  cardEn1: "Kubah Night Frogs Tour Pinterest card",
  cardEn2: "Kubah Night Frogs Tour Pinterest card",
}

export const KubahNightFrogsTourImages: React.FunctionComponent<ExtraImageProps & { image: keyof typeof alt }> = ({
  className = "",
  image,
  fluidObject = {},
  imgStyle = {},
  onLoad,
}) => {
  const data = useStaticQuery(graphql`
    query {
      frog: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog3: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog4: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog4.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog5: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog5.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog6: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog6.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog7: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog7.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog8: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog8.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog9: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog9.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog10: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog10.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog11: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog11.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog12: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog12.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog13: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog13.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog14: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog14.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      frog15: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-frog15.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mahoganyFrog: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-mahogany-frog.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mahoganyFrog2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-mahogany-frog2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      longNosedHornedFrog: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-long-nosed-horned-frog.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      longNosedHornedFrog2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-long-nosed-horned-frog2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      longNosedHornedFrog3: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-long-nosed-horned-frog3.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      longNosedHornedFrog4: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-long-nosed-horned-frog4.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fileEaredTreeFrog: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-file-eared-tree-frog.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fileEaredTreeFrog2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-file-eared-tree-frog2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peatSwampFrog: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-peat-swamp-frog.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peatSwampFrog2: file(
        relativePath: {
          eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-peat-swamp-frog2.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eggs: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-eggs.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eggs2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-eggs2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      microhyla: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-microhyla.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      microhyla2: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-microhyla2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      microhyla3: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-microhyla3.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 80, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      map: file(
        relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-map.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 60, srcSetBreakpoints: [600]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr1: file(relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/card-fr1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardFr2: file(relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/card-fr2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn1: file(relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/card-en1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 60, srcSetBreakpoints: [1000]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardEn2: file(relativePath: { eq: "asia/malaysia/east-malaysia/kubah-night-frogs-tour/card-en2.jpg" }) {
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

import { CountryLink } from "../../links/links.types"
// import { HomeVietnamImage } from "../../../images/asia/vietnam/home"
import React, { useState, useEffect } from "react"
// import { HomeVietnamImage } from "../../../images/asia/vietnam/home"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { ExtraCardProps } from "../../../../types/shared"
import { murmurhash } from "babel-plugin-remove-graphql-queries/murmur"
import { stripIgnoredCharacters } from "graphql/utilities/stripIgnoredCharacters"
import { query } from "../../../images/asia/vietnam/home"

console.log({ murmurhash, stripIgnoredCharacters })
// import { HomeCentralVietnamImage } from "../../../images/asia/vietnam/central-vietnam/home"
// import { HomeSouthVietnamImage } from "../../../images/asia/vietnam/south-vietnam/home"
// import { HomeNorthVietnamImage } from "../../../images/asia/vietnam/north-vietnam/home"
// import { CanThoCard, CuChiTunnelsCard, MyThoCard } from "./vietnam.cards"
// import loadable from "@loadable/component"
// const X = loadable(async () => {
//   const { HomeCentralVietnamImage } = await import("../../../images/asia/vietnam/central-vietnam/home")
//   return HomeCentralVietnamImage
// })
// const ClientSideOnlyLazy = React.lazy(async () => {
//   const { HomeVietnamImage } = await import("../../../images/asia/vietnam/home")
//   return { default: HomeVietnamImage }
// })

const Component: React.FunctionComponent<ExtraCardProps> = () => {
  // TODO how to automate this ?? https://coreyward.svbtle.com/exporting-an-embeddable-react-component-from-a-gatsby-app
  // returned by /page-data/sq/d/2474012006.json

  // const data = {
  //   file: {
  //     childImageSharp: {
  //       fluid: {
  //         base64:
  //           "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHnzrII6ko//8QAGhAAAgMBAQAAAAAAAAAAAAAAAAIBAxESFP/aAAgBAQABBQKUflKLN89hhmkqf//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/Aar/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEYH/2gAIAQIBAT8BrX//xAAbEAABBAMAAAAAAAAAAAAAAAAAARARMSEy8P/aAAgBAQAGPwLsk0U+yn//xAAdEAACAgIDAQAAAAAAAAAAAAAAARExIUFhgZGh/9oACAEBAAE/IWGS1oUHDMN3wSX9ISQRlfpI8J7P/9oADAMBAAIAAwAAABBf/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEVH/2gAIAQMBAT8Qpcv/xAAYEQEBAAMAAAAAAAAAAAAAAAABABEh0f/aAAgBAgEBPxAS4YNcX//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExUWFx0f/aAAgBAQABPxAtjiJS6HJNc1agMeEV2A9P2i00+rjupvWqR1Q+jM//2Q==",
  //         aspectRatio: 1.5,
  //         src: "/static/c114559066dd7cc916ff7fab02184b5d/47498/home.jpg",
  //         srcSet:
  //           "/static/c114559066dd7cc916ff7fab02184b5d/9dc27/home.jpg 300w,\n/static/c114559066dd7cc916ff7fab02184b5d/4fe8c/home.jpg 600w,\n/static/c114559066dd7cc916ff7fab02184b5d/47498/home.jpg 1200w,\n/static/c114559066dd7cc916ff7fab02184b5d/52258/home.jpg 1800w,\n/static/c114559066dd7cc916ff7fab02184b5d/50587/home.jpg 2400w,\n/static/c114559066dd7cc916ff7fab02184b5d/e3785/home.jpg 2449w",
  //         srcWebp: "/static/c114559066dd7cc916ff7fab02184b5d/99238/home.webp",
  //         srcSetWebp:
  //           "/static/c114559066dd7cc916ff7fab02184b5d/403a4/home.webp 300w,\n/static/c114559066dd7cc916ff7fab02184b5d/ad85c/home.webp 600w,\n/static/c114559066dd7cc916ff7fab02184b5d/99238/home.webp 1200w,\n/static/c114559066dd7cc916ff7fab02184b5d/685a2/home.webp 1800w,\n/static/c114559066dd7cc916ff7fab02184b5d/f1e40/home.webp 2400w,\n/static/c114559066dd7cc916ff7fab02184b5d/7f5c4/home.webp 2449w",
  //         sizes: "(max-width: 1200px) 100vw, 1200px",
  //       },
  //     },
  //   },
  // }
  const GATSBY_HASH_SEED = "abc"
  // loading the query here doesnt solve the problem :)
  const hash = murmurhash(stripIgnoredCharacters(query), GATSBY_HASH_SEED).toString()
  console.log(hash)
  const [data, setData] = useState<any>()
  useEffect(() => {
    fetch(`/page-data/sq/d/${hash}.json`)
      .then((res) => res.json())
      .then(({ data }) => setData(data))
  }, [])
  if (!data) return null // return a blurry image
  return <Img fluid={{ ...data.file.childImageSharp.fluid }} alt="Vietnam" />
}
export const vietnamLinks: CountryLink = {
  id: "vietnam",
  label: "Vietnam",
  // image: () => {
  //   const isSSR = typeof window === "undefined"
  //   return (
  //     <>
  //       {!isSSR && (
  //         <React.Suspense fallback={<div />}>
  //           <ClientSideOnlyLazy />
  //         </React.Suspense>
  //       )}
  //     </>
  //   )
  // },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  image: styled(Component)`
    img {
      object-position: -90px -10px !important;
    }
  `,
  cities: [
    {
      id: "south-vietnam",
      label: "Sud",
      // this style is for the image in the asia page (medallion)
      // image: styled(HomeSouthVietnamImage)`
      //   img {
      //     object-position: -30px -10px !important;
      //   }
      // `,
      highlights: [
        {
          id: "cu-chi-tunnels",
          label: "Tunnels de Cu-Chi",
          published: new Date("2020-01-01"),
          // card: CuChiTunnelsCard,
        },
        {
          id: "my-tho",
          label: "My Tho",
          published: new Date("2020-01-01"),
          // card: MyThoCard,
        },
        {
          id: "can-tho",
          label: "Can Tho",
          published: new Date("2020-01-01"),
          // card: CanThoCard,
        },
        {
          id: "ho-chi-minh-war-museum",
          label: "Le Musée des Vestiges de Guerre",
          published: new Date("2021-01-01"),
        },
      ],
    },
    {
      id: "central-vietnam",
      label: "Centre",
      // this style is for the image in the asia page (medallion)
      // IMPORTANT
      // dont use more than -65px otherwise the picture goes out of the medallion in small device
      // image: styled(HomeCentralVietnamImage)`
      //   img {
      //     object-position: 0px -65px !important;
      //   }
      // `,
      highlights: [],
    },
    {
      id: "north-vietnam",
      label: "Nord",
      // image: HomeNorthVietnamImage,
      highlights: [],
    },
  ],
  others: [
    {
      id: "transports-in-vietnam",
      label: "Transports in Vietnam",
      url: "transports",
      published: false,
    },
    {
      id: "discover-south-vietnam",
      label: "Découverte du Vietnam du Sud",
      published: false,
    },
  ],
}

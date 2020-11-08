import { CountryLink } from "../../links/links.types"
// import { HomeVietnamImage } from "../../../images/asia/vietnam/home"
import React from "react"
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
  // image: styled(HomeVietnamImage)`
  //   img {
  //     object-position: -90px -10px !important;
  //   }
  // `,
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

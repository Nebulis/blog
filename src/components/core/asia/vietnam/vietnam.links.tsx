import { CountryLink } from "../../links/links.types"
import {
  CanThoCard,
  CuChiTunnelsCard,
  MyThoCard,
  PrepareVietnamCard,
  SouthVietnamCard,
  TransportVietnamCard,
  WarMuseumCard,
} from "./vietnam.cards"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { css } from "@emotion/react"

export const vietnamLinks: CountryLink = {
  id: "vietnam",
  label: { fr: commonFr.country.vietnam.title, en: commonEn.country.vietnam.title },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  imageProps: {
    image: "homeVietnam",
    css: css`
      img {
        object-position: -90px -10px !important;
      }
    `,
  },
  cities: [
    {
      id: "southern-vietnam",
      label: { fr: commonFr.link.south, en: commonEn.link.south },
      // this style is for the image in the asia page (medallion)
      imageProps: {
        image: "homeSouthernVietnam",
        css: css`
          img {
            object-position: -35px -12px !important;
          }
        `,
      },
      highlights: [
        {
          id: "cu-chi-tunnels",
          label: {
            fr: commonFr.country.vietnam.card["cu-chi-tunnels"],
            en: commonEn.country.vietnam.card["cu-chi-tunnels"],
          },
          published: new Date("2021-01-23T17:00:00.000+08:00"),
          card: CuChiTunnelsCard,
        },
        {
          id: "my-tho",
          label: { fr: "Mỹ Tho", en: "Mỹ Tho" },
          published: new Date("2021-01-30T17:00:00.000+08:00"),
          card: MyThoCard,
        },
        {
          id: "can-tho",
          label: { fr: "Cân Thơ", en: "Cân Thơ" },
          published: new Date("2021-02-06T17:00:00.000+08:00"),
          card: CanThoCard,
        },
        {
          id: "ho-chi-minh-war-museum",
          label: {
            fr: commonFr.country.vietnam.card["ho-chi-minh-war-museum"],
            en: commonEn.country.vietnam.card["ho-chi-minh-war-museum"],
          },
          url: "war-remnants-museum",
          card: WarMuseumCard,
          published: new Date("2021-01-16T17:00:00.000+08:00"),
        },
        {
          id: "discover-southern-vietnam",
          url: "discover",
          label: {
            fr: commonFr.country.vietnam.card["discover-southern-vietnam"],
            en: commonEn.country.vietnam.card["discover-southern-vietnam"],
          },
          published: new Date("2021-01-02"),
          card: SouthVietnamCard,
        },
      ],
    },
    {
      id: "central-vietnam",
      label: { fr: commonFr.link.central, en: commonEn.link.central },
      // this style is for the image in the asia page (medallion)
      // IMPORTANT
      // dont use more than -65px otherwise the picture goes out of the medallion in small device
      imageProps: {
        image: "homeCentralVietnam",
        css: css`
          img {
            object-position: 0px -65px !important;
          }
        `,
      },
      highlights: [
        {
          id: "hoi-an",
          label: {
            fr: "Hoi An",
            en: "Hoi An",
          },
          published: false,
        },
      ],
    },
    {
      id: "northern-vietnam",
      label: { fr: commonFr.link.north, en: commonEn.link.north },
      imageProps: { image: "homeNorthernImage" },
      highlights: [
        {
          id: "halong-bay",
          label: {
            fr: "Baie de Halong",
            en: "Halong Bay",
          },
          published: false,
        },
      ],
    },
  ],
  others: [
    {
      id: "transport-vietnam",
      label: {
        fr: commonFr.country.vietnam.card.transport,
        en: commonEn.country.vietnam.card.transport,
      },
      card: TransportVietnamCard,
      url: "transport",
      published: new Date("2021-02-20T17:00:00.000+08:00"),
    },
    {
      id: "food-vietnam",
      label: {
        fr: commonFr.country.vietnam.card.food,
        en: commonEn.country.vietnam.card.food,
      },
      url: "food",
      published: false,
    },
    {
      id: "prepare-vietnam",
      label: { fr: commonFr.country.vietnam.card.prepare, en: commonEn.country.vietnam.card.prepare },
      card: PrepareVietnamCard,
      url: "prepare",
      published: new Date("2021-02-13T17:00:00.000+08:00"),
      additionalTags: ["prepare"],
    },
  ],
}

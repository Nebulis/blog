import { CountryLink } from "../../links/links.types"
import { HomeVietnamImage } from "../../../images/asia/vietnam/home-vietnam"
import styled from "@emotion/styled"
import { HomeCentralVietnamImage } from "../../../images/asia/vietnam/central-vietnam/home-central-vietnam"
import { HomeSouthernVietnamImage } from "../../../images/asia/vietnam/southern-vietnam/home-southern-vietnam"
import { HomeNorthernVietnamImage } from "../../../images/asia/vietnam/northern-vietnam/home-northern-vietnam"
import { CanThoCard, CuChiTunnelsCard, MyThoCard, SouthVietnamCard } from "./vietnam.cards"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const vietnamLinks: CountryLink = {
  id: "vietnam",
  label: { fr: commonFr.country.vietnam, en: commonEn.country.vietnam },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  image: styled(HomeVietnamImage)`
    img {
      object-position: -90px -10px !important;
    }
  `,
  cities: [
    {
      id: "southern-vietnam",
      label: { fr: commonFr.link.south, en: commonEn.link.south },
      // this style is for the image in the asia page (medallion)
      image: styled(HomeSouthernVietnamImage)`
        img {
          object-position: -35px -12px !important;
        }
      `,
      highlights: [
        {
          id: "cu-chi-tunnels",
          label: { fr: commonFr.card.vietnam["cu-chi-tunnels"], en: commonEn.card.vietnam["cu-chi-tunnels"] },
          published: new Date("2022-01-02"),
          card: CuChiTunnelsCard,
        },
        {
          id: "my-tho",
          label: { fr: "Mỹ Tho", en: "Mỹ Tho" },
          published: new Date("2022-01-01"),
          card: MyThoCard,
        },
        {
          id: "can-tho",
          label: { fr: "Cân Thơ", en: "Cân Thơ" },
          published: new Date("2022-03-01"),
          card: CanThoCard,
        },
        {
          id: "ho-chi-minh-war-museum",
          label: {
            fr: commonFr.card.vietnam["ho-chi-minh-war-museum"],
            en: commonEn.card.vietnam["ho-chi-minh-war-museum"],
          },
          published: new Date("2022-01-01"),
        },
        {
          id: "discover-southern-vietnam",
          url: "discover",
          label: {
            fr: commonFr.card.vietnam["discover-southern-vietnam"],
            en: commonEn.card.vietnam["discover-southern-vietnam"],
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
      image: styled(HomeCentralVietnamImage)`
        img {
          object-position: 0px -65px !important;
        }
      `,
      highlights: [],
    },
    {
      id: "northern-vietnam",
      label: { fr: commonFr.link.north, en: commonEn.link.north },
      image: HomeNorthernVietnamImage,
      highlights: [],
    },
  ],
  others: [
    {
      id: "transports-in-vietnam",
      label: { fr: commonFr.link.transports, en: commonEn.link.transports },
      url: "transports",
      published: false,
    },
  ],
}

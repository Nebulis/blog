import { CountryLink } from "../links/links.types"
import {
  TwoDaysInTokyoCard,
  ArashiyamaCard,
  DaigojiCard,
  FushimiInariTaishaCard,
  HamarikyuGardenCard,
  HimejiCastleCard,
  KawaguchikoLakeCard,
  KinkakujiCard,
  NagoyaCastleCard,
  SensojiCard,
  SpringInJapanCard,
  ToganjiCard,
} from "./japan.cards"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import { css } from "@emotion/react"

export const japanLinks: CountryLink = {
  id: "japan",
  label: { fr: commonFr.country.japan.title, en: commonEn.country.japan.title },
  // this style is for the image in the asia page (medallion) to have the geisha centered
  imageProps: {
    image: "homeJapan",
    css: css`
      img {
        object-position: -30px 0px !important;
      }
    `,
  },
  others: [
    {
      id: "spring-in-japan",
      label: { fr: commonFr.country.japan.card["spring-in-japan"], en: commonEn.country.japan.card["spring-in-japan"] },
      published: new Date("2021-03-20T17:00:00.000+08:00"),
      card: SpringInJapanCard,
      kind: "highlight",
    },
    {
      id: "transport-japan",
      label: { fr: "Transports", en: "Transports" },
      url: "transports",
      published: false,
    },
    {
      id: "nijo-castle",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "kiyomizu-dera",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "tokugawaen-garden",
      label: { fr: "", en: "" },
      published: false,
    },
  ],
  cities: [
    {
      id: "kyoto",
      label: { fr: "Kyoto", en: "Kyoto" },
      imageProps: { image: "mainArashiyama" },
      highlights: [
        {
          id: "arashiyama",
          label: { fr: commonFr.country.japan.card.arashiyama, en: commonEn.country.japan.card.arashiyama },
          card: ArashiyamaCard,
          published: false,
        },
        {
          id: "daigoji",
          label: { fr: commonFr.country.japan.card.daigoji, en: commonEn.country.japan.card.daigoji },
          published: false,
          card: DaigojiCard,
        },
        {
          id: "kinkakuji",
          label: { fr: commonFr.country.japan.card.kinkakuji, en: commonEn.country.japan.card.kinkakuji },
          published: false,
          card: KinkakujiCard,
        },
        {
          id: "fushimi-inari-taisha",
          label: {
            fr: commonFr.country.japan.card["fushimi-inari-taisha"],
            en: commonEn.country.japan.card["fushimi-inari-taisha"],
          },
          published: false,
          card: FushimiInariTaishaCard,
        },
      ],
    },
    {
      id: "himeji",
      label: { fr: "Himeji", en: "Himeji" },
      imageProps: {
        image: "mainHimeji",
      },
      highlights: [
        {
          id: "himeji-castle",
          label: { fr: commonFr.country.japan.card["himeji-castle"], en: commonEn.country.japan.card["himeji-castle"] },
          published: false,
          card: HimejiCastleCard,
        },
      ],
    },
    {
      id: "nagoya",
      label: { fr: "Nagoya", en: "Nagoya" },
      imageProps: {
        image: "mainNagoya",
      },
      highlights: [
        {
          id: "nagoya-castle",
          label: { fr: commonFr.country.japan.card["nagoya-castle"], en: commonEn.country.japan.card["nagoya-castle"] },
          published: false,
          card: NagoyaCastleCard,
        },
        {
          id: "toganji",
          label: { fr: commonFr.country.japan.card.toganji, en: commonEn.country.japan.card.toganji },
          published: false,
          card: ToganjiCard,
        },
      ],
    },
    {
      id: "fuji",
      label: { fr: "Mt. Fuji", en: "Mt. Fuji" },
      imageProps: {
        image: "mainFuji",
      },
      highlights: [
        {
          id: "kawaguchiko-lake",
          label: {
            fr: commonFr.country.japan.card["kawaguchiko-lake"],
            en: commonEn.country.japan.card["kawaguchiko-lake"],
          },
          published: false,
          card: KawaguchikoLakeCard,
        },
      ],
    },
    {
      id: "tokyo",
      label: { fr: "Tokyo", en: "Tokyo" },
      imageProps: {
        image: "mainTokyo",
      },
      highlights: [
        {
          id: "two-days-in-tokyo",
          label: {
            fr: commonFr.country.japan.card["two-days-in-tokyo"],
            en: commonEn.country.japan.card["two-days-in-tokyo"],
          },
          published: false,
          card: TwoDaysInTokyoCard,
        },
        {
          id: "sensoji",
          label: {
            fr: commonFr.country.japan.card.sensoji,
            en: commonEn.country.japan.card.sensoji,
          },
          published: false,
          card: SensojiCard,
        },
        {
          id: "hamarikyu-garden",
          label: {
            fr: commonFr.country.japan.card["hamarikyu-garden"],
            en: commonEn.country.japan.card["hamarikyu-garden"],
          },
          published: false,
          card: HamarikyuGardenCard,
        },
        {
          id: "shibuya-district",
          label: {
            fr: commonFr.country.japan.card["shibuya-district"],
            en: commonEn.country.japan.card["shibuya-district"],
          },
          published: false,
        },
        {
          id: "ueno-park",
          label: {
            fr: commonFr.country.japan.card["ueno-park"],
            en: commonEn.country.japan.card["ueno-park"],
          },
          published: false,
        },
        {
          id: "yasukuni-dori",
          label: {
            fr: commonFr.country.japan.card["yasukuni-dori"],
            en: commonEn.country.japan.card["yasukuni-dori"],
          },
          published: false,
        },
      ],
    },
  ],
}

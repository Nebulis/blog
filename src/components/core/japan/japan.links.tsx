import { CountryLink } from "../links/links.types"
import {
  ADayInTokyoCard,
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
      id: "transports-in-japan",
      label: { fr: "Transports", en: "Transports" },
      url: "transports",
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
          url: "castle",
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
          url: "castle",
          published: false,
          card: NagoyaCastleCard,
        },
        {
          id: "toganji",
          label: { fr: "Togan-ji", en: "Togan-ji" },
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
          id: "lake-kawaguchiko",
          label: { fr: "Lac Kawaguchiko", en: "Kawaguchiko Lake" },
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
          id: "a-day-in-tokyo",
          label: { fr: "Un jour à Tokyo", en: "A day in Tokyo" },
          published: false,
          card: ADayInTokyoCard,
        },
        {
          id: "sensoji",
          label: { fr: "Senso-ji", en: "Senso-ji" },
          published: false,
          card: SensojiCard,
        },
        {
          id: "hamarikyu-garden",
          label: { fr: "Jardins de Hamarikyu", en: "Hamarikyu Garden" },
          published: false,
          card: HamarikyuGardenCard,
        },
      ],
    },
  ],
}

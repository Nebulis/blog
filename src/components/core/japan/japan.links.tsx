import { CountryLink } from "../links/links.types"
import { MainArashiyamaImage } from "../../images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { MainHimejiCastleImage } from "../../images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainNagoyaCastleImage } from "../../images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
import { MainFujiImage } from "../../images/asia/japan/fuji/kawaguchiko/mainFujiImage"
import { MainTokyoImage } from "../../images/asia/japan/tokyo/adayintokyo/mainTokyoImage"
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
  ToganjiCard,
} from "./japan.cards"
import { HomeJapanImage } from "../../images/asia/japan/home"
import styled from "@emotion/styled"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"

export const japanLinks: CountryLink = {
  id: "japan",
  label: { fr: commonFr.country.japan, en: commonEn.country.japan },
  // this style is for the image in the asia page (medallion) to have the geisha centered
  image: styled(HomeJapanImage)`
    img {
      object-position: -30px 0px !important;
    }
  `,
  others: [
    {
      id: "spring-in-japan",
      label: { fr: "Le Japon au printemps", en: "Spring in Japan" },
      published: false,
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
      image: MainArashiyamaImage,
      highlights: [
        {
          id: "arashiyama",
          label: { fr: "Arashiyama", en: "Arashiyama" },
          card: ArashiyamaCard,
          published: new Date("2022-09-09"),
        },
        {
          id: "daigoji",
          label: { fr: "Daigo-ji", en: "Daigo-ji" },
          published: false,
          card: DaigojiCard,
        },
        {
          id: "kinkakuji",
          label: { fr: "Kinkaku-ji", en: "Kinkaku-ji" },
          published: false,
          card: KinkakujiCard,
        },
        {
          id: "fushimi-inari-taisha",
          label: { fr: "Fushimi Inari-taisha", en: "Fushimi Inari-taisha" },
          published: false,
          card: FushimiInariTaishaCard,
        },
      ],
    },
    {
      id: "himeji",
      label: { fr: "Himeji", en: "Himeji" },
      image: MainHimejiCastleImage,
      highlights: [
        {
          id: "himeji-castle",
          label: { fr: "Château de Himeji", en: "Himeji Castle" },
          url: "castle",
          published: false,
          card: HimejiCastleCard,
        },
      ],
    },
    {
      id: "nagoya",
      label: { fr: "Nagoya", en: "Nagoya" },
      image: MainNagoyaCastleImage,
      highlights: [
        {
          id: "nagoya-castle",
          label: { fr: "Château de Nagoya", en: "Nagoya Castle" },
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
      image: MainFujiImage,
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
      image: MainTokyoImage,
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

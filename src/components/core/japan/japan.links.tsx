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

export const japanLinks: CountryLink = {
  id: "japan",
  label: "Japon",
  others: [
    {
      id: "spring-in-japan",
      label: "Le Japon au printemps",
      published: false,
    },
    {
      id: "transports-in-japan",
      label: "Transports in Japan",
      url: "transports",
      published: false,
    },
  ],
  cities: [
    {
      id: "kyoto",
      label: "Kyoto",
      image: MainArashiyamaImage,
      highlights: [
        {
          id: "arashiyama",
          label: "Arashiyama",
          published: new Date("2019-10-12"),
          card: ArashiyamaCard,
        },
        {
          id: "daigoji",
          label: "Daigo-ji",
          published: new Date("2019-10-13"),
          card: DaigojiCard,
        },
        {
          id: "kinkakuji",
          label: "Kinkakuji",
          published: new Date("2019-10-14"),
          card: KinkakujiCard,
        },
        {
          id: "fushimi-inari-taisha",
          label: "Fushimi Inari Taisha",
          published: false,
          card: FushimiInariTaishaCard,
        },
      ],
    },
    {
      id: "himeji",
      label: "Himeji",
      image: MainHimejiCastleImage,
      highlights: [
        {
          id: "himeji-castle",
          label: "Himeji Castle",
          url: "castle",
          published: false,
          card: HimejiCastleCard,
        },
      ],
    },
    {
      id: "nagoya",
      label: "Nagoya",
      image: MainNagoyaCastleImage,
      highlights: [
        {
          id: "nagoya-castle",
          label: "Nagoya Castle",
          url: "castle",
          published: false,
          card: NagoyaCastleCard,
        },
        {
          id: "toganji",
          label: "Togan-ji",
          published: false,
          card: ToganjiCard,
        },
      ],
    },
    {
      id: "fuji",
      label: "Mt. Fuji",
      image: MainFujiImage,
      highlights: [
        {
          id: "lake-kawaguchiko",
          label: "Lac Kawaguchiko",
          published: false,
          card: KawaguchikoLakeCard,
        },
      ],
    },
    {
      id: "tokyo",
      label: "Tokyo",
      image: MainTokyoImage,
      highlights: [
        {
          id: "a-day-in-tokyo",
          label: "Un jour à Tokyo",
          published: false,
          card: ADayInTokyoCard,
        },
        {
          id: "sensoji",
          label: "Senso-ji",
          published: false,
          card: SensojiCard,
        },
        {
          id: "hamarikyu-garden",
          label: "Hamarikyu Garden",
          published: false,
          card: HamarikyuGardenCard,
        },
      ],
    },
  ],
}

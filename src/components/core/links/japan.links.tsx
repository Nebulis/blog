import { CountryLink } from "./links.types"
import { MainArashiyamaImage } from "../../images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { MainHimejiCastleImage } from "../../images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainNagoyaCastleImage } from "../../images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
import { MainFujiImage } from "../../images/asia/japan/fuji/kawaguchiko/mainFujiImage"
import { MainTokyoImage } from "../../images/asia/japan/tokyo/adayintokyo/mainTokyoImage"

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
          published: false,
        },
        {
          id: "daigoji",
          label: "Daigo-ji",
          published: false,
        },
        {
          id: "kinkakuji",
          label: "Kinkakuji",
          published: false,
        },
        {
          id: "fushimi-inari-taisha",
          label: "Fushimi Inari Taisha",
          published: false,
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
        },
        {
          id: "toganji",
          label: "Togan-ji",
          published: false,
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
        },
        {
          id: "sensoji",
          label: "Senso-ji",
          published: false,
        },
        {
          id: "hamarikyu-garden",
          label: "Hamarikyu Garden",
          published: false,
        },
      ],
    },
  ],
}

import { CountryLink } from "./links.types"
import { MainArashiyamaImage } from "../../images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { MainHimejiCastleImage } from "../../images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainNagoyaCastleImage } from "../../images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
import { MainFujiImage } from "../../images/asia/japan/mainFujiImage"
import { MainTokyoImage } from "../../images/asia/japan/mainTokyoImage"

export const japanLinks: CountryLink = {
  id: "japan",
  label: "Japon",
  published: true,
  others: [
    {
      id: "spring-in-japan",
      label: "Le japon au printemps",
      published: true,
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
      published: true,
      image: MainArashiyamaImage,
      highlights: [
        {
          id: "arashiyama",
          label: "Arashiyama",
          published: true,
        },
        {
          id: "daigo-ji",
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
      published: true,
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
      published: false,
      image: MainNagoyaCastleImage,
      highlights: [
        {
          id: "nagoya-castle",
          label: "Nagoya Castle",
          url: "castle",
          published: false,
        },
        {
          id: "togan-ji",
          label: "Togan-ji",
          published: false,
        },
      ],
    },
    {
      id: "fuji",
      label: "Mt. Fuji",
      published: false,
      image: MainFujiImage,
      highlights: [],
    },
    {
      id: "tokyo",
      label: "Tokyo",
      published: false,
      image: MainTokyoImage,
      highlights: [
        {
          id: "ueno-park",
          label: "Parc Ueno",
          published: false,
        },
        {
          id: "senso-ji",
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

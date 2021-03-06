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
  UenoParkCard,
  ShibuyaDistrictCard,
  YasukuniDoriCard,
  PrepareJapanCard,
  CustomsInJapanCard,
  TransportsJapanCard,
  FoodJapanCard,
} from "./japan.cards"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"

export const japanLinks: CountryLink = {
  id: "japan",
  label: { fr: commonFr.country.japan.title, en: commonEn.country.japan.title },
  pointOfInterest: ["nature", "monument", "city", "winter-activities"],
  seasons: ["autumn", "winter", "spring"],
  // this style is for the image in the asia page (medallion) to have the geisha centered
  imageProps: {
    image: "homeJapan",
    imgStyle: { objectPosition: "-30px 0px" },
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
      label: { fr: commonFr.country.japan.card.transports, en: commonEn.country.japan.card.transports },
      published: new Date("2021-07-17T17:00:00.000+08:00"),
      card: TransportsJapanCard,
    },
    {
      id: "prepare-japan",
      label: { fr: commonFr.country.japan.card.prepare, en: commonEn.country.japan.card.prepare },
      card: PrepareJapanCard,
      published: new Date("2021-07-10T17:00:00.000+08:00"),
      additionalTags: ["prepare"],
    },
    {
      id: "customs-in-japan",
      label: {
        fr: commonFr.country.japan.card["customs-in-japan"],
        en: commonEn.country.japan.card["customs-in-japan"],
      },
      card: CustomsInJapanCard,
      published: new Date("2021-07-03T17:00:00.000+08:00"),
    },
    {
      id: "food-in-japan",
      label: { fr: commonFr.country.japan.card.food, en: commonEn.country.japan.card.food },
      published: new Date("2021-07-24T17:00:00.000+08:00"),
      card: FoodJapanCard,
    },
    {
      id: "osaka-castle",
      label: { fr: "", en: "" },
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
    {
      id: "koko-en-garden",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "winter-in-japan",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "autumn-in-japan",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "tenryuji",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "hogonin",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "arashiyama-monkey-park",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "arashiyama-kimono-forest",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "arashiyama-katsura-river",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "togetsukyo-bridge",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "kameyama-park",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "jojakkoji",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "ginkakuji",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "mount-fuji-ascent",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "aokigahara-forest",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "chureito-pagoda",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "okinawa",
      label: { fr: "Okinawa", en: "Okinawa" },
      published: false,
    },
    {
      id: "biwa-lake",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "towada-lake",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "ashinoko-lake",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "ogasawara",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "hokkaido",
      label: { fr: "", en: "" },
      published: false,
    },
    {
      id: "kyushu",
      label: { fr: "", en: "" },
      published: false,
    },
  ],
  cities: [
    {
      id: "kyoto",
      label: { fr: "Kyoto", en: "Kyoto" },
      pointOfInterest: ["monument", "city"],
      imageProps: { image: "mainArashiyama" },
      highlights: [
        {
          id: "arashiyama",
          label: { fr: commonFr.country.japan.card.arashiyama, en: commonEn.country.japan.card.arashiyama },
          card: ArashiyamaCard,
          published: new Date("2021-04-03T17:00:00.000+08:00"),
        },
        {
          id: "daigoji",
          label: { fr: commonFr.country.japan.card.daigoji, en: commonEn.country.japan.card.daigoji },
          published: new Date("2021-04-17T17:00:00.000+08:00"),
          card: DaigojiCard,
        },
        {
          id: "kinkakuji",
          label: { fr: commonFr.country.japan.card.kinkakuji, en: commonEn.country.japan.card.kinkakuji },
          published: new Date("2021-04-10T17:00:00.000+08:00"),
          card: KinkakujiCard,
        },
        {
          id: "fushimi-inari-taisha",
          label: {
            fr: commonFr.country.japan.card["fushimi-inari-taisha"],
            en: commonEn.country.japan.card["fushimi-inari-taisha"],
          },
          published: new Date("2021-04-24T17:00:00.000+08:00"),
          card: FushimiInariTaishaCard,
        },
      ],
    },
    {
      id: "himeji",
      pointOfInterest: ["monument", "city"],
      label: { fr: "Himeji", en: "Himeji" },
      imageProps: {
        image: "mainHimeji",
      },
      highlights: [
        {
          id: "himeji-castle",
          label: { fr: commonFr.country.japan.card["himeji-castle"], en: commonEn.country.japan.card["himeji-castle"] },
          published: new Date("2021-03-27T17:00:00.000+08:00"),
          card: HimejiCastleCard,
        },
      ],
    },
    {
      id: "nagoya",
      label: { fr: "Nagoya", en: "Nagoya" },
      pointOfInterest: ["monument", "city"],
      imageProps: {
        image: "mainNagoya",
      },
      highlights: [
        {
          id: "nagoya-castle",
          label: { fr: commonFr.country.japan.card["nagoya-castle"], en: commonEn.country.japan.card["nagoya-castle"] },
          card: NagoyaCastleCard,
          published: new Date("2021-05-01T17:00:00.000+08:00"),
        },
        {
          id: "toganji",
          label: { fr: commonFr.country.japan.card.toganji, en: commonEn.country.japan.card.toganji },
          published: new Date("2021-05-08T17:00:00.000+08:00"),
          card: ToganjiCard,
        },
      ],
    },
    {
      id: "fuji",
      label: { fr: "Mt. Fuji", en: "Mt. Fuji" },
      pointOfInterest: ["nature", "winter-activities"],
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
          published: new Date("2021-06-19T17:00:00.000+08:00"),
          card: KawaguchikoLakeCard,
        },
      ],
    },
    {
      id: "tokyo",
      label: { fr: "Tokyo", en: "Tokyo" },
      pointOfInterest: ["monument", "city"],
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
          published: new Date("2021-05-15T17:00:00.000+08:00"),
          card: TwoDaysInTokyoCard,
        },
        {
          id: "sensoji",
          label: {
            fr: commonFr.country.japan.card.sensoji,
            en: commonEn.country.japan.card.sensoji,
          },
          published: new Date("2021-06-05T17:00:00.000+08:00"),
          card: SensojiCard,
        },
        {
          id: "hamarikyu-garden",
          label: {
            fr: commonFr.country.japan.card["hamarikyu-garden"],
            en: commonEn.country.japan.card["hamarikyu-garden"],
          },
          published: new Date("2021-06-26T17:00:00.000+08:00"),
          card: HamarikyuGardenCard,
        },
        {
          id: "shibuya-district",
          label: {
            fr: commonFr.country.japan.card["shibuya-district"],
            en: commonEn.country.japan.card["shibuya-district"],
          },
          published: new Date("2021-05-22T17:00:00.000+08:00"),
          card: ShibuyaDistrictCard,
        },
        {
          id: "ueno-park",
          label: {
            fr: commonFr.country.japan.card["ueno-park"],
            en: commonEn.country.japan.card["ueno-park"],
          },
          published: new Date("2021-05-29T17:00:00.000+08:00"),
          card: UenoParkCard,
        },
        {
          id: "yasukuni-dori",
          label: {
            fr: commonFr.country.japan.card["yasukuni-dori"],
            en: commonEn.country.japan.card["yasukuni-dori"],
          },
          published: new Date("2021-06-12T17:00:00.000+08:00"),
          card: YasukuniDoriCard,
        },
        {
          id: "shinjuku-gyoen-national-garden",
          label: {
            fr: "",
            en: "",
          },
          published: false,
        },
      ],
    },
    { id: "osaka", highlights: [], label: { en: "Osaka", fr: "Osaka" } },
    { id: "nara", highlights: [], label: { en: "Nara", fr: "Nara" } },
  ],
}

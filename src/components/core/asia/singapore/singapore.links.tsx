import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { ChritmasInSingaporeCard } from "./singapore.cards"

export const singaporeLinks: CountryLink = {
  id: "singapore",
  pointOfInterest: ["city", "nature"],
  imageProps: {
    image: "homeSingapore",
  },
  cities: [],
  others: [
    {
      id: "christmas-in-singapore",
      label: {
        fr: commonFr.country.singapore.card["christmas-in-singapore"],
        en: commonEn.country.singapore.card["christmas-in-singapore"],
      },
      card: ChritmasInSingaporeCard,
      published: false,
      // published: new Date("2021-12-25T17:00:00.000+08:00"),
    },
    {
      id: "marina-bays-sands",
      label: {
        fr: "",
        en: "",
      },
      published: false,
    },
    {
      id: "singapore-chinese-new-year",
      label: {
        fr: "",
        en: "",
      },
      url: "chinese-new-year",
      published: false,
    },
  ],
  label: { en: commonEn.country.singapore.title, fr: commonFr.country.singapore.title },
}

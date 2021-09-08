import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const singaporeLinks: CountryLink = {
  id: "singapore",
  pointOfInterest: ["city", "nature"],
  imageProps: {
    image: "homeSingapore",
  },
  cities: [],
  others: [],
  label: { en: commonEn.country.singapore.title, fr: commonFr.country.singapore.title },
}

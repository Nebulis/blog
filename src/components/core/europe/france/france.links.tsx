import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const franceLinks: CountryLink = {
  id: "france",
  label: { fr: commonFr.country.france.title, en: commonEn.country.france.title },
  pointOfInterest: ["nature", "monument", "city", "lazy", "winter-activities"],
  seasons: ["spring", "summer", "autumn", "winter"],
  imageProps: {
    image: "homeFrance",
  },
  others: [
    {
      id: "paris",
      label: { fr: "Paris", en: "Paris" },
      pointOfInterest: ["monument", "city"],
      highlights: [],
      published: false,
    },
  ],
  cities: [
    {
      id: "grand-est",
      label: { fr: "Grand Est", en: "Grand Est" },
      pointOfInterest: ["nature", "monument", "city"],
      imageProps: {
        image: "homeGrandEst",
      },
      highlights: [],
    },
  ],
}

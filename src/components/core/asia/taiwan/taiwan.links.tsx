import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const taiwanLinks: CountryLink = {
  id: "taiwan",
  label: { en: commonEn.country.taiwan.title, fr: commonFr.country.taiwan.title },
  pointOfInterest: ["nature", "monument", "city"],
  imageProps: {
    image: "homeTaiwan",
    imgStyle: {
      objectPosition: "-35px center",
    },
  },
  cities: [],
  others: [],
}

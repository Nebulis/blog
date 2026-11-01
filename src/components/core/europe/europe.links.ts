import { ContinentLink } from "../links/links.types"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"

export const europeLinks: ContinentLink = {
  id: "europe",
  label: { fr: commonFr.continent.europe, en: commonEn.continent.europe },
  countries: [
    {
      id: "france",
      cities: [],
      others: [],
      label: { en: commonEn.country.france.title, fr: commonFr.country.france.title },
      imageProps: { image: "homeFrance" },
    },
  ],
}
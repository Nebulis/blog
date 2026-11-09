import { ContinentLink } from "../links/links.types"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import { franceLinks } from "./france/france.links"

export const europeLinks: ContinentLink = {
  id: "europe",
  label: {
    fr: commonFr.continent.europe,
    en: commonEn.continent.europe,
  },
  countries: [
    franceLinks,
    {
      id: "azores",
      cities: [],
      others: [],
      label: { fr: "Acores", en: "Azores" },
    },
    {
      id: "iceland",
      cities: [],
      others: [],
      label: { fr: commonFr.country.iceland.title, en: commonEn.country.iceland.title },
    },
    {
      id: "russia",
      cities: [],
      others: [],
      label: { fr: commonFr.country.russia.title, en: commonEn.country.russia.title },
    },
  ],
}

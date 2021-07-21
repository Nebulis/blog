import { ContinentLink } from "../links/links.types"
import { japanLinks } from "../japan/japan.links"
import { vietnamLinks } from "./vietnam/vietnam.links"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import { philippinesLinks } from "./philippines/philippines.links"
import { malaysiaLinks } from "./malaysia/malaysia.links"
import { indonesiaLinks } from "./indonesia/indonesia.links"
import { singaporeLinks } from "./singapore/singapore.links"
import { cambodiaLinks } from "./cambodia/cambodia.links"
import { taiwanLinks } from "./taiwan/taiwan.links"

export const asiaLinks: ContinentLink = {
  id: "asia",
  label: { fr: commonFr.continent.asia, en: commonEn.continent.asia },
  countries: [
    japanLinks,
    vietnamLinks,
    philippinesLinks,
    malaysiaLinks,
    indonesiaLinks,
    singaporeLinks,
    cambodiaLinks,
    taiwanLinks,
    {
      id: "china",
      cities: [],
      others: [],
      label: { en: commonEn.country.china.title, fr: commonFr.country.china.title },
    },
    {
      id: "myanmar",
      cities: [],
      others: [],
      label: { en: commonEn.country.myanmar.title, fr: commonFr.country.myanmar.title },
    },
    {
      id: "thailand",
      cities: [],
      others: [],
      label: { en: commonEn.country.thailand.title, fr: commonFr.country.thailand.title },
    },
    {
      id: "laos",
      cities: [],
      others: [],
      label: { en: commonEn.country.laos.title, fr: commonFr.country.laos.title },
    },
    {
      id: "india",
      cities: [],
      others: [],
      label: { en: commonEn.country.india.title, fr: commonFr.country.india.title },
    },
  ],
}

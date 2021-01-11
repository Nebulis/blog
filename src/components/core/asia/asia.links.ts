import { ContinentLink } from "../links/links.types"
import { japanLinks } from "../japan/japan.links"
import { vietnamLinks } from "./vietnam/vietnam.links"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import { philippinesLinks } from "./philippines/philippines.links"

// TODO OMG WE ARE DEAD
// ALL QUERIES OF ALL IMAGES ARE ADDED ON EVERY PAGES
// NOOO
export const asiaLinks: ContinentLink = {
  id: "asia",
  label: { fr: commonFr.continent.asia, en: commonEn.continent.asia },
  countries: [
    japanLinks,
    vietnamLinks,
    philippinesLinks,
    {
      id: "cambodia",
      cities: [],
      others: [
        {
          id: "s-21-prison",
          label: {
            en: commonEn.country.cambodia.card["s-21-prison"],
            fr: commonFr.country.cambodia.card["s-21-prison"],
          },
          published: false,
        },
        {
          id: "kampong-phluk",
          label: {
            en: commonEn.country.cambodia.card["kampong-phluk"],
            fr: commonFr.country.cambodia.card["kampong-phluk"],
          },
          published: false,
        },
      ],
      label: { en: commonEn.country.cambodia.title, fr: commonFr.country.cambodia.title },
    },
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
      id: "indonesia",
      cities: [
        {
          id: "bali",
          label: {
            en: "Bali",
            fr: "Bali",
          },
          highlights: [],
        },
      ],
      others: [],
      label: { en: commonEn.country.indonesia.title, fr: commonFr.country.indonesia.title },
    },
  ],
}

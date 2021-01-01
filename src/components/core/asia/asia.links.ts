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
  countries: [japanLinks, vietnamLinks, philippinesLinks],
}

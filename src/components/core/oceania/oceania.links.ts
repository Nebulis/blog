import { ContinentLink } from "../links/links.types"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import { australiaLinks } from "./australia/australia.links"

export const oceaniaLinks: ContinentLink = {
  id: "oceania",
  label: { fr: commonFr.continent.oceania, en: commonEn.continent.oceania },
  countries: [australiaLinks],
}

import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const malaysiaLinks: CountryLink = {
  id: "malaysia",
  label: { fr: commonFr.country.malaysia.title, en: commonEn.country.malaysia.title },
  imageProps: {
    image: "homeMalaysia",
  },
  cities: [],
  others: [],
}

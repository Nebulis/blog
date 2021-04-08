import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { css } from "@emotion/react"

export const australiaLinks: CountryLink = {
  id: "australia",
  label: { fr: commonFr.country.australia.title, en: commonEn.country.australia.title },
  imageProps: {
    image: "homeAustralia",
    css: css`
      img {
        object-position: -60px -12px !important;
      }
    `,
  },
  cities: [],
  others: [],
}

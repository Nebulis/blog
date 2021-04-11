import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const indonesiaLinks: CountryLink = {
  id: "indonesia",
  imageProps: {
    image: "homeIndonesia",
    imgStyle: {
      transform: "scale(1.1)",
    },
  },
  cities: [
    {
      id: "bali",
      label: {
        en: "Bali",
        fr: "Bali",
      },
      highlights: [
        {
          id: "ubud-monkey-park",
          label: {
            en: "",
            fr: "",
          },
          published: false,
        },
      ],
    },
  ],
  others: [],
  label: { en: commonEn.country.indonesia.title, fr: commonFr.country.indonesia.title },
}

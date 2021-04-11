import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const malaysiaLinks: CountryLink = {
  id: "malaysia",
  label: { fr: commonFr.country.malaysia.title, en: commonEn.country.malaysia.title },
  pointOfInterest: ["lazy", "monument", "nature", "animals", "city", "water-activities"],
  imageProps: {
    image: "homeMalaysia",
  },
  cities: [
    {
      id: "west-malaysia",
      label: {
        fr: commonFr.country.malaysia.city["west-malaysia"],
        en: commonEn.country.malaysia.city["west-malaysia"],
      },
      pointOfInterest: ["lazy", "monument", "nature", "city", "water-activities"],
      imageProps: {
        image: "westMalaysia",
      },
      highlights: [],
    },
    {
      id: "east-malaysia",
      label: {
        fr: commonFr.country.malaysia.city["east-malaysia"],
        en: commonEn.country.malaysia.city["east-malaysia"],
      },
      pointOfInterest: ["animals", "nature"],
      imageProps: {
        image: "eastMalaysia",
      },
      highlights: [],
    },
  ],
  others: [],
}

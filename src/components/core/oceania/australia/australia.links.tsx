import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const australiaLinks: CountryLink = {
  id: "australia",
  label: { fr: commonFr.country.australia.title, en: commonEn.country.australia.title },
  pointOfInterest: ["animals", "city", "water-activities", "nature", "lazy"],
  imageProps: {
    image: "homeAustralia",
    imgStyle: { objectPosition: "-60px -12px" },
  },
  cities: [
    {
      id: "outback",
      label: { en: "Outback", fr: "Outback" },
      pointOfInterest: ["animals", "city", "nature"],
      imageProps: { image: "outback", imgStyle: { objectPosition: "-60px center" } },
      highlights: [],
    },
    {
      id: "queensland",
      label: { en: "Queensland", fr: "Queensland" },
      pointOfInterest: ["animals", "city", "nature", "lazy", "water-activities"],
      imageProps: { image: "queensland", imgStyle: { objectPosition: "-120px -10px" } },
      highlights: [],
    },
    {
      id: "northern-territory",
      label: { en: "Northern Territory", fr: "Territoire du Nord" },
      pointOfInterest: ["animals", "city", "nature"],
      imageProps: { image: "northernTerritory" },
      highlights: [],
    },
  ],
  others: [{ id: "kuranda", label: { fr: "", en: "" }, published: false }],
}

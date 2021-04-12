import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const cambodiaLinks: CountryLink = {
  id: "cambodia",
  label: { en: commonEn.country.cambodia.title, fr: commonFr.country.cambodia.title },
  pointOfInterest: ["monument", "nature"],
  imageProps: {
    image: "homeCambodia",
    imgStyle: {
      objectPosition: "center -14px",
    },
  },
  cities: [
    {
      id: "siem-reap",
      imageProps: {
        image: "siemReap",
        imgStyle: {
          objectPosition: "-83px -10px",
        },
      },
      label: { en: "Siem Reap", fr: "Siem Reap" },
      pointOfInterest: ["monument", "nature"],
      highlights: [],
    },
    {
      id: "phnom-penh",
      imageProps: {
        image: "phnomPenh",
        imgStyle: {
          objectPosition: "center -14px",
        },
      },
      label: { en: "Phnom Penh", fr: "Phnom Penh" },
      pointOfInterest: ["monument", "city"],
      highlights: [],
    },
  ],
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
    {
      id: "angkor-wat",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
  ],
}

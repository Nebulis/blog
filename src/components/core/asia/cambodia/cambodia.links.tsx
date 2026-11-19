import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { DiscoverCambodiaCard } from "./cambodia.cards"

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
      id: "discover-cambodia",
      label: {
        en: commonEn.country.cambodia.card["discover-cambodia"],
        fr: commonFr.country.cambodia.card["discover-cambodia"],
      },
      published: new Date("2027-01-02T17:00:00.000+07:00"),
      card: DiscoverCambodiaCard,
    },
    {
      id: "prepare-cambodia",
      label: { fr: commonFr.country.cambodia.card.prepare, en: commonEn.country.cambodia.card.prepare },
      published: false,
      additionalTags: ["prepare"],
    },
    {
      id: "tuol-sleng-genocide-museum",
      label: {
        en: commonEn.country.cambodia.card["tuol-sleng-genocide-museum"],
        fr: commonFr.country.cambodia.card["tuol-sleng-genocide-museum"],
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
    {
      id: "khmer-red-curry",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
    {
      id: "lok-lak",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
    {
      id: "amok-trei",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
  ],
}

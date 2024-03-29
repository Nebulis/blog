import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const indonesiaLinks: CountryLink = {
  id: "indonesia",
  pointOfInterest: ["lazy", "monument", "nature", "water-activities", "city", "animals"],
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
      pointOfInterest: ["lazy", "monument", "nature", "water-activities", "city"],
      imageProps: {
        image: "bali",
        imgStyle: {
          transform: "scale(1.3)",
          objectPosition: "-10px 20px",
        },
      },
      highlights: [
        {
          id: "ubud-monkey-forest",
          label: {
            en: "",
            fr: "",
          },
          published: false,
        },
      ],
    },
    {
      id: "komodo-island",
      label: {
        en: "Komodo",
        fr: "Komodo",
      },
      pointOfInterest: ["lazy", "animals", "nature", "water-activities"],
      imageProps: {
        image: "komodoIsland",
      },
      highlights: [],
    },
  ],
  others: [
    {
      id: "sumatra",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
    {
      id: "tapanuli",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
    {
      id: "gunung-leuser-national-park",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
    {
      id: "tanjung-puting-national-park",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
    {
      id: "bukit-baka-bukit-raya-national-park",
      label: {
        en: "",
        fr: "",
      },
      published: false,
    },
  ],
  label: { en: commonEn.country.indonesia.title, fr: commonFr.country.indonesia.title },
}

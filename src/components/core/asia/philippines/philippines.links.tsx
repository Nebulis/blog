import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { ElNidoParadiseCard, ElNidoTourACard, ElNidoTourBCard, ElNidoWhichTourCard } from "./philippines.card"

export const philippinesLinks: CountryLink = {
  id: "philippines",
  label: { fr: commonFr.country.philippines.title, en: commonEn.country.philippines.title },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  pointOfInterest: ["lazy", "nature", "animals", "water-activities"],
  seasons: ["winter", "spring"],
  imageProps: {
    image: "homePhilippines",
  },
  cities: [
    {
      id: "el-nido",
      label: { fr: commonFr.country.philippines.city["el-nido"], en: commonEn.country.philippines.city["el-nido"] },
      pointOfInterest: ["lazy", "nature", "animals", "water-activities"],
      imageProps: {
        image: "homeElNido",
        imgStyle: {
          objectPosition: "-35px -12px",
        },
      },
      highlights: [
        {
          id: "el-nido-paradise",
          card: ElNidoParadiseCard,
          label: {
            fr: commonFr.country.philippines.card["el-nido-paradise"],
            en: commonEn.country.philippines.card["el-nido-paradise"],
          },
          published: new Date("2021-01-09T17:00:00.000+08:00"),
        },
        {
          id: "el-nido-which-tour",
          url: "which-tour",
          card: ElNidoWhichTourCard,
          label: {
            fr: commonFr.country.philippines.card["which-tour"],
            en: commonEn.country.philippines.card["which-tour"],
          },
          published: new Date("2021-02-27T17:00:00.000+08:00"),
        },
        {
          id: "el-nido-tour-a",
          url: "tour-a",
          published: new Date("2021-03-06T17:00:00.000+08:00"),
          card: ElNidoTourACard,
          label: {
            fr: commonFr.country.philippines.card["el-nido-tour-a"],
            en: commonEn.country.philippines.card["el-nido-tour-a"],
          },
        },
        {
          id: "el-nido-tour-b",
          url: "tour-b",
          published: new Date("2021-03-13T17:00:00.000+08:00"),
          card: ElNidoTourBCard,
          label: {
            fr: commonFr.country.philippines.card["el-nido-tour-b"],
            en: commonEn.country.philippines.card["el-nido-tour-b"],
          },
        },
      ],
    },
  ],
  others: [
    {
      id: "boracay",
      published: false,
      label: { fr: "Boracay", en: "Boracay" },
    },
    {
      id: "coron-island",
      published: false,
      label: { fr: "Coron Island", en: "Coron Island" },
    },
    {
      id: "manilla",
      published: false,
      label: { fr: "", en: "" },
    },
    {
      id: "el-nido-tour-c",
      published: false,
      label: { fr: "Tour C", en: "Tour C" },
    },
    {
      id: "el-nido-tour-d",
      published: false,
      label: { fr: "Tour D", en: "Tour D" },
    },
  ],
}

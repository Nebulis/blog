import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { FromTownsvilleToCairnsCard, GreenIslandCard, KurandaVillageCard, MagneticIslandCard } from "./australia.cards"

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
      highlights: [
        {
          id: "from-townsville-to-cairns",
          label: {
            fr: commonFr.country.australia.card["from-townsville-to-cairns"],
            en: commonEn.country.australia.card["from-townsville-to-cairns"],
          },
          card: FromTownsvilleToCairnsCard,
          published: new Date("2021-10-02T17:00:00.000+08:00"),
        },
        {
          id: "green-island",
          label: {
            fr: commonFr.country.australia.card["green-island"],
            en: commonEn.country.australia.card["green-island"],
          },
          card: GreenIslandCard,
          published: new Date("2021-10-09T17:00:00.000+08:00"),
        },
        {
          id: "kuranda-village",
          label: {
            fr: commonFr.country.australia.card["kuranda-village"],
            en: commonEn.country.australia.card["kuranda-village"],
          },
          card: KurandaVillageCard,
          published: new Date("2021-10-16T17:00:00.000+08:00"),
        },
        {
          id: "magnetic-island",
          label: {
            fr: commonFr.country.australia.card["magnetic-island"],
            en: commonEn.country.australia.card["magnetic-island"],
          },
          card: MagneticIslandCard,
          published: new Date("2021-10-23T17:00:00.000+08:00"),
        },
      ],
    },
    {
      id: "northern-territory",
      label: { en: "Northern Territory", fr: "Territoire du Nord" },
      pointOfInterest: ["animals", "city", "nature"],
      imageProps: { image: "northernTerritory" },
      highlights: [],
    },
  ],
  others: [{ id: "three-weeks-road-trip-in-australia", label: { fr: "", en: "" }, published: false }],
}

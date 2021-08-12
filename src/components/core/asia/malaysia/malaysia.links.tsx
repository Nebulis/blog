import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import {
  BakoNationalParkCard,
  KubahNightFrogsTourCard,
  SemenggohNatureReserveCard,
  WeekendKuchingCard,
} from "./malaysia.cards"

export const malaysiaLinks: CountryLink = {
  id: "malaysia",
  label: { fr: commonFr.country.malaysia.title, en: commonEn.country.malaysia.title },
  pointOfInterest: ["lazy", "monument", "nature", "animals", "city", "water-activities"],
  seasons: ["summer", "spring"],
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
      highlights: [
        {
          id: "semenggoh-nature-reserve",
          label: {
            fr: commonFr.country.malaysia.card["semenggoh-nature-reserve"],
            en: commonEn.country.malaysia.card["semenggoh-nature-reserve"],
          },
          card: SemenggohNatureReserveCard,
          published: new Date("2021-08-21T17:00:00.000+08:00"),
        },
        {
          id: "kubah-night-frogs-tour",
          label: {
            fr: commonFr.country.malaysia.card["kubah-night-frogs-tour"],
            en: commonEn.country.malaysia.card["kubah-night-frogs-tour"],
          },
          card: KubahNightFrogsTourCard,
          published: new Date("2021-08-28T17:00:00.000+08:00"),
        },
        {
          id: "bako-national-park",
          label: {
            fr: commonFr.country.malaysia.card["bako-national-park"],
            en: commonEn.country.malaysia.card["bako-national-park"],
          },
          card: BakoNationalParkCard,
          published: new Date("2021-09-04T17:00:00.000+08:00"),
        },
        {
          id: "weekend-in-kuching",
          label: {
            fr: commonFr.country.malaysia.card["weekend-in-kuching"],
            en: commonEn.country.malaysia.card["weekend-in-kuching"],
          },
          card: WeekendKuchingCard,
          published: new Date("2021-08-14T17:00:00.000+08:00"),
        },
      ],
    },
  ],
  others: [
    {
      id: "kuching",
      label: { en: "", fr: "" },
      published: false,
    },
    {
      id: "sepilok",
      label: { en: "", fr: "" },
      published: false,
    },
    {
      id: "labuk-kay",
      label: { en: "", fr: "" },
      published: false,
    },
  ],
}

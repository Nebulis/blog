import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { ElNidoParadiseCard } from "./philippines.card"
import { css } from "@emotion/core"

export const philippinesLinks: CountryLink = {
  id: "philippines",
  label: { fr: commonFr.country.philippines.title, en: commonEn.country.philippines.title },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  imageProps: {
    image: "homePhilippines",
  },
  cities: [
    {
      id: "el-nido",
      label: { fr: commonFr.country.philippines.city["el-nido"], en: commonEn.country.philippines.city["el-nido"] },
      imageProps: {
        image: "homeElNido",
        css: css`
          img {
            object-position: -35px -12px !important;
          }
        `,
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
          label: {
            fr: commonFr.country.philippines.card["which-tour"],
            en: commonEn.country.philippines.card["which-tour"],
          },
          published: new Date("2022-01-02"),
        },
      ],
    },
  ],
  others: [],
}

import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import styled from "@emotion/styled"
import { HomePhilippinesImage } from "../../../images/asia/philippines/home"
import { HomeElNidoImage } from "../../../images/asia/philippines/el-nido/home"

export const philippinesLinks: CountryLink = {
  id: "philippines",
  label: { fr: commonFr.country.philippines, en: commonEn.country.philippines },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  image: styled(HomePhilippinesImage)`
    img {
      object-position: -50px 0px !important;
      transform: scale(1.3);
    }
  `,
  cities: [
    {
      id: "el-nido",
      label: { fr: commonFr.city.philippines["el-nido"], en: commonEn.city.philippines["el-nido"] },
      image: styled(HomeElNidoImage)`
        img {
          object-position: -35px -12px !important;
        }
      `,
      highlights: [
        {
          id: "el-nido-paradise",
          label: {
            fr: commonFr.card.philippines["el-nido-paradise"],
            en: commonEn.card.philippines["el-nido-paradise"],
          },
          published: new Date("2022-01-02"),
        },
      ],
    },
  ],
  others: [],
}

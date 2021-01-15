import { CountryLink } from "../../links/links.types"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import styled from "@emotion/styled"
import { HomeElNidoImage } from "../../../images/asia/philippines/el-nido/home-el-nido"
import { CarouselAndOrganisationPhilippines2 } from "../../../images/asia/philippines/carousel-and-organisation-philippines2"
import { ElNidoParadiseCard } from "./philippines.card"

export const philippinesLinks: CountryLink = {
  id: "philippines",
  label: { fr: commonFr.country.philippines.title, en: commonEn.country.philippines.title },
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  image: styled(CarouselAndOrganisationPhilippines2)`
    img {
      object-position: -100px 30px !important;
      transform: scale(1.6);
    }
  `,
  cities: [
    {
      id: "el-nido",
      label: { fr: commonFr.country.philippines.city["el-nido"], en: commonEn.country.philippines.city["el-nido"] },
      image: styled(HomeElNidoImage)`
        img {
          object-position: -35px -12px !important;
        }
      `,
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

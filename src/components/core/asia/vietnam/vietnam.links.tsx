import { CountryLink } from "../../links/links.types"
import { HomeVietnamImage } from "../../../images/asia/vietnam/home"
import styled from "@emotion/styled"

export const vietnamLinks: CountryLink = {
  id: "vietnam",
  label: "Vietnam",
  // this style is for the image in the asia page (medallion) to have the fisherman centered
  image: styled(HomeVietnamImage)`
    img {
      object-position: -90px -10px !important;
    }
  `,
  cities: [
    {
      id: "south-vietnam",
      label: "Vietnam du Sud",
      highlights: [
        {
          id: "cu-chi-tunnels",
          label: "Tunnels de Cu-Chi",
          published: new Date("2021-01-01"),
        },
      ],
    },
  ],
  others: [],
}

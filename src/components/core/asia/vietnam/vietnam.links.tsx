import { CountryLink } from "../../links/links.types"
import { HomeVietnamImage } from "../../../images/asia/vietnam/home"
import styled from "@emotion/styled"
import { HomeCentralVietnamImage } from "../../../images/asia/vietnam/central-vietnam/home"
import { HomeSouthVietnamImage } from "../../../images/asia/vietnam/south-vietnam/home"
import { HomeNorthVietnamImage } from "../../../images/asia/vietnam/north-vietnam/home"

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
      label: "Sud",
      // this style is for the image in the asia page (medallion)
      image: styled(HomeSouthVietnamImage)`
        img {
          object-position: -30px -10px !important;
        }
      `,
      highlights: [
        {
          id: "cu-chi-tunnels",
          label: "Tunnels de Cu-Chi",
          published: new Date("2021-01-01"),
        },
      ],
    },
    {
      id: "central-vietnam",
      label: "Centre",
      // this style is for the image in the asia page (medallion)
      // IMPORTANT
      // dont use more than -65px otherwise the picture goes out of the medallion in small device
      image: styled(HomeCentralVietnamImage)`
        img {
          object-position: 0px -65px !important;
        }
      `,
      highlights: [],
    },
    {
      id: "north-vietnam",
      label: "Nord",
      image: HomeNorthVietnamImage,
      highlights: [],
    },
  ],
  others: [],
}

import { CountryLink } from "../links/links.types"

export const vietnamLinks: CountryLink = {
  id: "vietnam",
  label: "Vietnam",
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

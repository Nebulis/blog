import { ContinentLink } from "../links/links.types"
import { japanLinks } from "../japan/japan.links"
import { vietnamLinks } from "../asia/vietnam/vietnam.links"

export const asiaLinks: ContinentLink = {
  id: "asia",
  label: "Asie",
  countries: [japanLinks, vietnamLinks],
}

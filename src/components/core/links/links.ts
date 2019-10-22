import * as path from "path"
import { japanLinks } from "./japan.links"
import { CityLink, ContinentLink, CountryLink, HighlightLink } from "./links.types"
import { isPublished } from "./links.utils"

export const continentLinks: ContinentLink[] = [
  {
    id: "asia",
    label: "Asie",
    countries: [japanLinks],
  },
]

const getUrl = (object: { url?: string; id: string }): string => object.url || object.id

interface CachedLinksMap {
  label: string
  url: string
  published: boolean | Date
}
const cachedLinks = new Map<string, CachedLinksMap>()
continentLinks.forEach(continent => {
  cachedLinks.set(continent.id, { label: continent.label, url: path.resolve(getUrl(continent)), published: true })
  continent.countries.forEach(country => {
    country.others.forEach(other => {
      cachedLinks.set(other.id, {
        label: other.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(other)),
        published: isPublished(other),
      })
    })
    country.cities.forEach(city => {
      cachedLinks.set(city.id, {
        label: city.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(city)),
        published: city.highlights.some(isPublished),
      })
      city.highlights.forEach(highlight => {
        cachedLinks.set(highlight.id, {
          label: highlight.label,
          url: path.resolve(getUrl(continent), getUrl(country), getUrl(city), getUrl(highlight)),
          published: isPublished(highlight),
        })
      })
    })

    cachedLinks.set(country.id, {
      label: country.label,
      url: path.resolve(getUrl(continent), getUrl(country)),
      published:
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        country.others.some(o => cachedLinks.get(o.id)!.published) ||
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        country.cities.some(c => cachedLinks.get(c.id)!.published),
    })
  })
})

export const getLink = (linkId: string): CachedLinksMap => {
  const link = cachedLinks.get(linkId)
  if (!link) {
    throw new Error(`No link for ${linkId}`)
  }
  return link
}

export const getLinkUrl = (linkId: string): string => {
  return getLink(linkId).url
}
export const getLinkLabel = (linkId: string): string => {
  return getLink(linkId).label
}
export const isLinkPublished = (element: CountryLink | CityLink | HighlightLink) => {
  const link = cachedLinks.get(element.id)
  if (!link) {
    throw new Error(`No link for ${element.id}`)
  }
  return !!link.published
}

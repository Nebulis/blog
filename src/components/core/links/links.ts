import * as path from "path"
import { japanLinks } from "./japan.links"
import { CityLink, ContinentLink, CountryLink, HighlightLink } from "./links.types"
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

export const cachedLinks = new Map<string, CachedLinksMap>()
continentLinks.forEach(continent => {
  cachedLinks.set(continent.id, { label: continent.label, url: path.resolve(getUrl(continent)), published: true })
  continent.countries.forEach(country => {
    country.others.forEach(other => {
      cachedLinks.set(other.id, {
        label: other.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(other)),
        published: other.published,
      })
    })
    country.cities.forEach(city => {
      cachedLinks.set(city.id, {
        label: city.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(city)),
        published: city.highlights.some(h => h.published),
      })
      city.highlights.forEach(highlight => {
        cachedLinks.set(highlight.id, {
          label: highlight.label,
          url: path.resolve(getUrl(continent), getUrl(country), getUrl(city), getUrl(highlight)),
          published: highlight.published,
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

const getLink = (linkId: string): { label: string; url: string } => {
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
export const isPublished = (element: CountryLink | CityLink | HighlightLink) => {
  const link = cachedLinks.get(element.id)
  if (!link) {
    throw new Error(`No link for ${element.id}`)
  }
  return !!link.published
}

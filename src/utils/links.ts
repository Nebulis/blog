import * as path from "path"

interface Continent {
  id: string
  label: string
  url?: string
  countries: Country[]
}
interface Country {
  id: string
  label: string
  url?: string
  cities: City[]
}
interface City {
  id: string
  label: string
  url?: string
  highlights: Highlight[]
}

interface Highlight {
  id: string
  label: string
  url?: string
}

export const continentLinks: Continent[] = [
  {
    id: "asia",
    label: "Asie",
    countries: [
      {
        id: "japan",
        label: "Japon",
        cities: [
          {
            id: "kyoto",
            label: "Kyoto",
            highlights: [
              {
                id: "arashiyama",
                label: "Arashiyama",
              },
              {
                id: "daigo-ji",
                label: "Daigo-ji",
              },
              {
                id: "kinkakuji",
                label: "Kinkakuji",
              },
              {
                id: "fushimi-inari-taisha",
                label: "Fushimi Inari Taisha",
              },
            ],
          },
          {
            id: "himeji",
            label: "Himeji",
            highlights: [
              {
                id: "himeji-castle",
                label: "Himeji Castle",
                url: "castle",
              },
            ],
          },
          {
            id: "nagoya",
            label: "Nagoya",
            highlights: [
              {
                id: "nagoya-castle",
                label: "Nagoya Castle",
                url: "castle",
              },
              {
                id: "togan-ji",
                label: "Togan-ji",
              },
            ],
          },
          {
            id: "fuji",
            label: "Mt. Fuji",
            highlights: [],
          },
          {
            id: "tokyo",
            label: "Tokyo",
            highlights: [
              {
                id: "ueno-park",
                label: "Parc Ueno",
              },
            ],
          },
        ],
      },
    ],
  },
]

const getUrl = (object: { url?: string; id: string }): string => object.url || object.id

const cache = new Map<string, { label: string; url: string }>()
continentLinks.forEach(continent => {
  cache.set(continent.id, { label: continent.label, url: path.resolve(getUrl(continent)) })
  continent.countries.forEach(country => {
    cache.set(country.id, { label: country.label, url: path.resolve(getUrl(continent), getUrl(country)) })
    country.cities.forEach(city => {
      cache.set(city.id, { label: city.label, url: path.resolve(getUrl(continent), getUrl(country), getUrl(city)) })
      city.highlights.forEach(highlight => {
        cache.set(highlight.id, {
          label: highlight.label,
          url: path.resolve(getUrl(continent), getUrl(country), getUrl(city), getUrl(highlight)),
        })
      })
    })
  })
})

export const getLink = (linkId: string): { label: string; url: string } => {
  const link = cache.get(linkId)
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

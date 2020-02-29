import * as path from "path"
import { japanLinks } from "./japan.links"
import { CityLink, ContinentLink, CountryLink, HighlightLink, NavigationLink } from "./links.types"
import { isPublished } from "./links.utils"
import React from "react"

export const continentLinks: ContinentLink[] = [
  {
    id: "asia",
    label: "Asie",
    countries: [japanLinks],
  },
  {
    id: "africa",
    label: "Afrique",
    countries: [],
  },
  {
    id: "south-america",
    label: "Amérique du Sud",
    countries: [],
  },
  {
    id: "north-america",
    label: "Amérique du Nord",
    countries: [],
  },
  {
    id: "europe",
    label: "Europe",
    countries: [],
  },
  {
    id: "middle-east",
    label: "Moyen-Orient",
    countries: [],
  },
  {
    id: "oceania",
    label: "Océanie",
    countries: [],
  },
]

export const menuLinks: NavigationLink[] = [
  {
    id: "organisation",
    label: "Organisation",
    sections: [
      {
        id: "organisation-by-country",
        label: "Par pays",
        sections: [],
      },
      {
        id: "organisation-health",
        label: "Santé",
        sections: [],
      },
      {
        id: "organisation-money",
        label: "Argent",
        sections: [],
      },
      {
        id: "organisation-security",
        label: "Sécurité",
        sections: [],
      },
      {
        id: "organisation-transport",
        label: "Transport",
        sections: [],
      },
      {
        id: "organisation-devices",
        label: "Matériel",
        sections: [],
      },
      {
        id: "organisation-when-to-go",
        label: "Quand Partir",
        sections: [
          {
            id: "organisation-when-to-go-spring",
            label: "Printemps",
            sections: [],
          },
          {
            id: "organisation-when-to-go-summer",
            label: "Eté",
            sections: [],
          },
          {
            id: "organisation-when-to-go-autumn",
            label: "Automne",
            sections: [],
          },
          {
            id: "organisation-when-to-go-winter",
            label: "Hiver",
            sections: [],
          },
        ],
      },
    ],
  },
  {
    id: "discovery",
    label: "Découverte",
    sections: [
      {
        id: "discovery-monument",
        label: "Monuments",
        sections: [],
      },
      {
        id: "discovery-nature",
        label: "Nature",
        sections: [],
      },
      {
        id: "discovery-city",
        label: "Ville",
        sections: [],
      },
      {
        id: "discovery-templs",
        label: "Temples",
        sections: [],
      },
    ],
  },
  {
    id: "lifestyle",
    label: "Lifestyle",
    sections: [
      {
        id: "lifestyle-new-life",
        label: "Nouvelle vie",
        sections: [],
      },
    ],
  },
  {
    id: "about",
    label: "À propos",
    sections: [
      {
        id: "about-who",
        label: "Qui sommes nous ?",
        sections: [],
      },
      {
        id: "about-contact",
        label: "Contact",
        sections: [],
      },
      {
        id: "about-devices",
        label: "Notre matériel",
        sections: [],
      },
    ],
  },
]

export const otherLinks: NavigationLink[] = [
  {
    id: "home",
    label: "home",
    url: "/",
    sections: [],
  },
  {
    id: "articles",
    label: "articles",
    sections: [],
  },
]

const getUrl = (object: { url?: string; id: string }): string => object.url || object.id

interface CachedLinksMap {
  label: string
  url: string
  published: boolean
  publishedDate?: Date
  card?: React.ComponentType
}
const cachedLinks = new Map<string, CachedLinksMap>()
continentLinks.forEach(continent => {
  continent.countries.forEach(country => {
    country.others.forEach(other => {
      cachedLinks.set(other.id, {
        label: other.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(other)),
        published: isPublished(other),
        publishedDate: other.published instanceof Date ? other.published : undefined,
        card: other.card,
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
          publishedDate: highlight.published instanceof Date ? highlight.published : undefined,
          card: highlight.card,
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
  cachedLinks.set(continent.id, {
    label: continent.label,
    url: path.resolve(getUrl(continent)),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    published: continent.countries.some(country => cachedLinks.get(country.id)!.published),
  })
})

menuLinks.forEach(menu => {
  menu.sections.forEach(submenu => {
    submenu.sections.forEach(subsubmenu => {
      cachedLinks.set(subsubmenu.id, {
        label: subsubmenu.label,
        url: path.resolve(getUrl(subsubmenu)),
        published: !!subsubmenu.published,
      })
    })

    cachedLinks.set(submenu.id, {
      label: submenu.label,
      url: path.resolve(getUrl(submenu)),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      published: submenu.sections.some(subsubmenu => cachedLinks.get(subsubmenu.id)!.published) || !!submenu.published,
    })
  })
  cachedLinks.set(menu.id, {
    label: menu.label,
    url: path.resolve(getUrl(menu)),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    published: menu.sections.some(submenu => cachedLinks.get(submenu.id)!.published) || !!menu.published,
  })
})

otherLinks.forEach(link => {
  cachedLinks.set(link.id, {
    label: link.label,
    url: path.resolve(getUrl(link)),
    published: true,
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
export const isLinkPublished = (element: CountryLink | CityLink | HighlightLink | ContinentLink | NavigationLink) => {
  const link = cachedLinks.get(element.id)
  if (!link) {
    throw new Error(`No link for ${element.id}`)
  }
  return link.published
}

const filterNull = (value: any): value is Required<Pick<CachedLinksMap, "card" | "publishedDate">> => {
  return value
}
export const getThreeMoreRecentArticles = () => {
  return Array.from(cachedLinks.values())
    .map(link => {
      if (link.published && link.publishedDate && link.card) {
        return { publishedDate: link.publishedDate, card: link.card }
      }
      return null
    })
    .filter(filterNull)
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
    .slice(0, 3)
    .map(value => value.card)
}

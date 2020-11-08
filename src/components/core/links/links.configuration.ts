import * as path from "path"
import { CityLink, ContinentLink, CountryLink, HighlightLink, NavigationLink } from "./links.types"
import { isPublished } from "./links.utils"
import React from "react"
import { asiaLinks } from "../asia/asia.links"
import { ExtraCardProps } from "../../../types/shared"

export const continentLinks: ContinentLink[] = [
  asiaLinks,
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
].sort((obj1: { label: string }, obj2: { label: string }) => obj1.label.localeCompare(obj2.label))

export const menuLinks: NavigationLink[] = [
  {
    id: "organisation",
    label: "Organisation",
    sections: [
      // {
      //   id: "by-country",
      //   label: "Par pays",
      //   sections: [],
      // },
      // {
      //   id: "health",
      //   label: "Santé",
      //   sections: [],
      // },
      // {
      //   id: "money",
      //   label: "Argent",
      //   sections: [],
      // },
      // {
      //   id: "security",
      //   label: "Sécurité",
      //   sections: [],
      // },
      // {
      //   id: "transport",
      //   label: "Transport",
      //   sections: [],
      // },
      // {
      //   id: "devices",
      //   label: "Matériel",
      //   sections: [],
      // },
      {
        id: "when-to-go",
        label: "Quand Partir",
        sections: [
          {
            id: "spring",
            label: "Printemps",
            sections: [],
          },
          {
            id: "summer",
            label: "Été",
            sections: [],
          },
          {
            id: "autumn",
            label: "Automne",
            sections: [],
          },
          {
            id: "winter",
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
        id: "monuments",
        label: "Monuments",
        sections: [],
      },
      {
        id: "nature",
        label: "Nature",
        sections: [],
      },
      {
        id: "city",
        label: "Ville",
        sections: [],
      },
      {
        id: "temples",
        label: "Temples",
        sections: [],
      },
    ],
  },
  {
    id: "journal",
    label: "Journal",
    sections: [
      {
        id: "travelling",
        label: "Voyage",
        sections: [],
      },
      {
        id: "living-foreign-country",
        label: "Vivre à l'étranger",
        sections: [],
      },
      {
        id: "living-singapore",
        label: "Vivre à Singapour",
        sections: [],
      },
    ],
  },
  {
    id: "about",
    label: "À propos",
    sections: [
      {
        id: "who",
        label: "Qui sommes nous ?",
        published: true,
        sections: [],
      },
      {
        id: "contact",
        label: "Contact",
        published: true,
        sections: [],
      },
      {
        id: "devices",
        label: "Notre matériel",
        published: false,
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
  country?: string
  label: string
  url: string
  published: boolean
  publishedDate?: Date
  tags: string[]
  card?: React.ComponentType<ExtraCardProps>
}
const cachedLinks = new Map<string, CachedLinksMap>()
continentLinks.forEach((continent) => {
  continent.countries.forEach((country) => {
    country.others.forEach((other) => {
      cachedLinks.set(other.id, {
        label: other.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(other)),
        published: isPublished(other),
        publishedDate: other.published instanceof Date ? other.published : undefined,
        card: other.card,
        tags: [continent.id, country.id],
        country: country.id,
      })
    })
    country.cities.forEach((city) => {
      cachedLinks.set(city.id, {
        label: city.label,
        url: path.resolve(getUrl(continent), getUrl(country), getUrl(city)),
        published: city.highlights.some(isPublished),
        tags: [continent.id, country.id],
        country: country.id,
      })
      city.highlights.forEach((highlight) => {
        cachedLinks.set(highlight.id, {
          label: highlight.label,
          url: path.resolve(getUrl(continent), getUrl(country), getUrl(city), getUrl(highlight)),
          published: isPublished(highlight),
          publishedDate: highlight.published instanceof Date ? highlight.published : undefined,
          card: highlight.card,
          tags: [continent.id, country.id, city.id],
          country: country.id,
        })
      })
    })

    cachedLinks.set(country.id, {
      label: country.label,
      url: path.resolve(getUrl(continent), getUrl(country)),
      published:
        country.others.some((o) => cachedLinks.get(o.id)?.published) ||
        country.cities.some((c) => cachedLinks.get(c.id)?.published),
      tags: [continent.id],
      country: country.id,
    })
  })
  cachedLinks.set(continent.id, {
    label: continent.label,
    url: path.resolve(getUrl(continent)),
    published: continent.countries.some((country) => cachedLinks.get(country.id)?.published),
    tags: [],
  })
})

menuLinks.forEach((menu) => {
  menu.sections.forEach((submenu) => {
    submenu.sections.forEach((subsubmenu) => {
      cachedLinks.set(subsubmenu.id, {
        label: subsubmenu.label,
        url: path.resolve(getUrl(menu), getUrl(submenu), getUrl(subsubmenu)),
        published: !!subsubmenu.published,
        tags: [],
      })
    })

    cachedLinks.set(submenu.id, {
      label: submenu.label,
      url: path.resolve(getUrl(menu), getUrl(submenu)),
      published:
        submenu.sections.some((subsubmenu) => cachedLinks.get(subsubmenu.id)?.published) || !!submenu.published,
      tags: [],
    })
  })
  cachedLinks.set(menu.id, {
    label: menu.label,
    url: path.resolve(getUrl(menu)),
    published: menu.sections.some((submenu) => cachedLinks.get(submenu.id)?.published) || !!menu.published,
    tags: [],
  })
})

otherLinks.forEach((link) => {
  cachedLinks.set(link.id, {
    label: link.label,
    url: path.resolve(getUrl(link)),
    published: true,
    tags: [],
  })
})

export const getLink = (linkId: string): CachedLinksMap => {
  const link = cachedLinks.get(linkId)
  if (!link) {
    throw new Error(`No link for ${linkId}`)
  }
  return link
}

export const getCacheSize = () => {
  return cachedLinks.size
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

export const sortByLabel = (obj1: { label: string }, obj2: { label: string }) => obj1.label.localeCompare(obj2.label)

type LinkMapped = Required<Pick<CachedLinksMap, "card" | "publishedDate" | "country">>
const filterNull = (value: any): value is LinkMapped => {
  return value
}
interface Options {
  customFilter?: (link: LinkMapped) => boolean
  limit?: number
}
export const getMostRecentArticles = ({ customFilter = () => true, limit = 3 }: Options | undefined = {}) => {
  return Array.from(cachedLinks.values())
    .map((link) => {
      if (link.published && link.publishedDate && link.card) {
        // for some reason, typescript going nuts if country is made optional in LinkMapped ...
        return { publishedDate: link.publishedDate, card: link.card, country: link.country ?? "" }
      }
      return null
    })
    .filter(filterNull)
    .filter(customFilter)
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
    .slice(0, limit)
    .map((value) => value.card)
}

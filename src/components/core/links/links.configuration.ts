import * as path from "path"
import { CachedLinksMap, ContinentLink, NavigationLink } from "./links.types"
import { asiaLinks } from "../asia/asia.links"
import commonEn from "../../../locales/en/common.json"
import commonFr from "../../../locales/fr/common.json"

export const isPublished = (element: { published: boolean | Date }) => {
  if (typeof element.published === "boolean") {
    return element.published
  }
  return new Date().getTime() >= element.published.getTime()
}

const getUrl = (object: { url?: string; id: string }): string => object.url || object.id

export const continentLinks: ContinentLink[] = [
  asiaLinks,
  {
    id: "africa",
    label: {
      fr: "Afrique",
      en: "Africa",
    },
    countries: [],
  },
  {
    id: "south-america",
    label: {
      fr: "Amérique du Sud",
      en: "South America",
    },
    countries: [],
  },
  {
    id: "north-america",
    label: {
      fr: "Amérique du Nord",
      en: "North America",
    },
    countries: [],
  },
  {
    id: "europe",
    label: {
      fr: "Europe",
      en: "Europe",
    },
    countries: [],
  },
  {
    id: "middle-east",
    label: {
      fr: "Moyen-Orient",
      en: "Middle-East",
    },
    countries: [],
  },
  {
    id: "oceania",
    label: {
      fr: "Océanie",
      en: "Oceania",
    },
    countries: [],
  },
]

export const menuLinks: NavigationLink[] = [
  {
    id: "organisation",
    label: { fr: "Organisation", en: "Organisation" },
    sections: [
      {
        id: "when-to-go",
        label: { fr: "Quand Partir", en: "When to go" },
        sections: [
          {
            id: "spring",
            label: { fr: "Printemps", en: "Spring" },
            published: true,
            sections: [],
          },
          {
            id: "summer",
            label: { fr: "Été", en: "Summer" },
            sections: [],
          },
          {
            id: "autumn",
            label: { fr: "Automne", en: "Autumn" },
            sections: [],
          },
          {
            id: "winter",
            label: { fr: "Hiver", en: "Winter" },
            published: true,
            sections: [],
          },
        ],
      },
    ],
  },
  {
    id: "discovery",
    label: { fr: "Découverte", en: "Discovery" },
    sections: [
      {
        id: "monuments",
        label: { fr: "Monuments", en: "Monuments" },
        sections: [],
      },
      {
        id: "nature",
        label: { fr: "Nature", en: "Nature" },
        sections: [],
      },
      {
        id: "city",
        label: { fr: "Ville", en: "City" },
        sections: [],
      },
      {
        id: "temples",
        label: { fr: "Temples", en: "Temples" },
        sections: [],
      },
    ],
  },
  {
    id: "journal",
    label: { fr: "Journal", en: "Journal" },
    sections: [
      {
        id: "travelling",
        label: { fr: "Voyage", en: "Travelling" },
        sections: [],
      },
      {
        id: "living-foreign-country",
        label: { fr: "Vivre à l'étranger", en: "Living abroad" },
        sections: [],
      },
      {
        id: "living-singapore",
        label: { fr: "Vivre à Singapour", en: "Living in Singapore" },
        sections: [],
      },
    ],
  },
  {
    id: "about",
    label: { fr: "À propos", en: "About" },
    sections: [
      {
        id: "who",
        label: { fr: commonFr.link.who, en: commonEn.link.who },
        published: true,
        sections: [],
      },
      {
        id: "contact",
        label: { fr: commonFr.link.contact, en: commonEn.link.contact },
        published: true,
        sections: [],
      },
      {
        id: "devices",
        label: { fr: "Notre matériel", en: "Our devices" },
        published: false,
        sections: [],
      },
    ],
  },
]

export const otherLinks: NavigationLink[] = [
  {
    id: "home",
    label: { fr: "Accueil", en: "Home" },
    url: "/",
    sections: [],
  },
  {
    id: "articles",
    label: { fr: "Articles", en: "Articles" },
    sections: [],
  },
]

export const cachedLinks = new Map<string, CachedLinksMap>()
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

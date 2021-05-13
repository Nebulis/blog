import * as path from "path"
import { CachedLinksMap, ContinentLink, NavigationLink, OtherLink } from "./links.types"
import { asiaLinks } from "../asia/asia.links"
import commonEn from "../../../locales/en/common.json"
import commonFr from "../../../locales/fr/common.json"
import { oceaniaLinks } from "../oceania/oceania.links"

export const isPublished = (element: { published: boolean | Date }) => {
  if (typeof element.published === "boolean") {
    return element.published
  }
  return new Date().getTime() >= element.published.getTime()
}

const getUrl = (object: { url?: string; id: string }): string => object.url || object.id

export const continentLinks: ContinentLink[] = [
  asiaLinks,
  oceaniaLinks,
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
    countries: [
      {
        id: "caribbean",
        cities: [],
        others: [],
        label: { fr: "Caraibes", en: "Caraibes" },
      },
    ],
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
    countries: [
      {
        id: "azores",
        cities: [],
        others: [],
        label: { fr: "Acores", en: "Azores" },
      },
    ],
  },
  {
    id: "middle-east",
    label: {
      fr: "Moyen-Orient",
      en: "Middle-East",
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
            published: true,
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
      { id: "prepare", label: { fr: "Prepare", en: "Prepare" }, sections: [] },
    ],
  },
  {
    id: "discovery",
    label: { fr: "Découverte", en: "Discovery" },
    sections: [
      {
        id: "monuments",
        label: { fr: commonFr.link.discovery.monuments, en: commonEn.link.discovery.monuments },
        pointOfInterest: ["monument"],
        published: true,
        sections: [],
      },
      {
        id: "nature",
        label: { fr: commonFr.link.discovery.nature, en: commonEn.link.discovery.nature },
        pointOfInterest: ["nature"],
        published: true,
        sections: [],
      },
      {
        id: "cities",
        label: { fr: commonFr.link.discovery.city, en: commonEn.link.discovery.city },
        pointOfInterest: ["city"],
        published: true,
        sections: [],
      },
      {
        id: "animals",
        label: { fr: commonFr.link.discovery.animals, en: commonEn.link.discovery.animals },
        pointOfInterest: ["animals"],
        published: false,
        sections: [],
      },
      {
        id: "water-activities",
        label: { fr: commonFr.link.discovery["water-activities"], en: commonEn.link.discovery["water-activities"] },
        pointOfInterest: ["water-activities"],
        published: true,
        sections: [],
      },
      {
        id: "winter-activities",
        label: { fr: commonFr.link.discovery["winter-activities"], en: commonEn.link.discovery["winter-activities"] },
        pointOfInterest: ["winter-activities"],
        published: true,
        sections: [],
      },
      {
        id: "beach-holidays",
        label: { fr: "Vacances farniente", en: commonEn.link.discovery.lazy },
        pointOfInterest: ["lazy"],
        published: true,
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

export const fruitLinks: OtherLink[] = [
  {
    id: "green-pomelo",
    label: { fr: "Green pomelo", en: "Green pomelo" },
    published: false,
  },
]

export const noIdeaLinks: NavigationLink[] = [
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
  {
    id: "404",
    label: { fr: "404", en: "404" },
    sections: [],
  },
]

export const cachedLinks = new Map<string, CachedLinksMap>()
continentLinks.forEach((continent) => {
  continent.countries.forEach((country) => {
    country.others.forEach((other) => {
      cachedLinks.set(other.id, {
        id: other.id,
        label: other.label,
        url: path.join("/", getUrl(continent), getUrl(country), getUrl(other)),
        published: isPublished(other),
        publishedDate: other.published instanceof Date ? other.published : undefined,
        card: other.card,
        tags: [continent.id, country.id, ...(other.additionalTags ?? [])],
        pointOfInterest: [],
        seasons: [],
        country: country.id,
        kind: other.kind ?? "other",
      })
    })
    country.cities.forEach((city) => {
      cachedLinks.set(city.id, {
        id: city.id,
        label: city.label,
        url: path.join("/", getUrl(continent), getUrl(country), getUrl(city)),
        published: city.highlights.some(isPublished),
        tags: [continent.id, country.id],
        pointOfInterest: city.pointOfInterest || [],
        seasons: [],
        country: country.id,
        kind: "city",
      })
      city.highlights.forEach((highlight) => {
        cachedLinks.set(highlight.id, {
          id: highlight.id,
          label: highlight.label,
          url: path.join("/", getUrl(continent), getUrl(country), getUrl(city), getUrl(highlight)),
          published: isPublished(highlight),
          publishedDate: highlight.published instanceof Date ? highlight.published : undefined,
          card: highlight.card,
          tags: [continent.id, country.id, city.id],
          seasons: [],
          pointOfInterest: [],
          country: country.id,
          kind: "highlight",
        })
      })
    })

    cachedLinks.set(country.id, {
      id: country.id,
      label: country.label,
      url: path.join("/", getUrl(continent), getUrl(country)),
      published:
        country.others.some((o) => cachedLinks.get(o.id)?.published) ||
        country.cities.some((c) => cachedLinks.get(c.id)?.published),
      tags: [continent.id],
      pointOfInterest: country.pointOfInterest || [],
      seasons: country.seasons || [],
      country: country.id,
      imageProps: country.imageProps,
      kind: "country",
    })
  })
  cachedLinks.set(continent.id, {
    id: continent.id,
    label: continent.label,
    url: path.join("/", getUrl(continent)),
    published: continent.countries.some((country) => cachedLinks.get(country.id)?.published),
    tags: [],
    pointOfInterest: [],
    seasons: [],
    kind: "continent",
  })
})

menuLinks.forEach((menu) => {
  menu.sections.forEach((submenu) => {
    submenu.sections.forEach((subsubmenu) => {
      cachedLinks.set(subsubmenu.id, {
        id: subsubmenu.id,
        label: subsubmenu.label,
        url: path.join("/", getUrl(menu), getUrl(submenu), getUrl(subsubmenu)),
        published: !!subsubmenu.published,
        tags: [],
        pointOfInterest: [],
        seasons: [],
        kind: "menu",
      })
    })

    cachedLinks.set(submenu.id, {
      id: submenu.id,
      label: submenu.label,
      url: path.join("/", getUrl(menu), getUrl(submenu)),
      published:
        submenu.sections.some((subsubmenu) => cachedLinks.get(subsubmenu.id)?.published) || !!submenu.published,
      tags: [],
      pointOfInterest: submenu.pointOfInterest ?? [],
      seasons: [],
      kind: "menu",
    })
  })
  cachedLinks.set(menu.id, {
    id: menu.id,
    label: menu.label,
    url: path.join("/", getUrl(menu)),
    published: menu.sections.some((submenu) => cachedLinks.get(submenu.id)?.published) || !!menu.published,
    tags: [],
    pointOfInterest: [],
    seasons: [],
    kind: "menu",
  })
})

noIdeaLinks.forEach((link) => {
  cachedLinks.set(link.id, {
    id: link.id,
    label: link.label,
    url: path.join("/", getUrl(link)),
    published: true,
    tags: [],
    pointOfInterest: [],
    seasons: [],
    kind: "noIdea",
  })
})

fruitLinks.forEach((link) => {
  cachedLinks.set(link.id, {
    id: link.id,
    label: link.label,
    url: path.join("/", getUrl(link)),
    published: isPublished(link),
    tags: [],
    pointOfInterest: [],
    seasons: [],
    kind: "fruit",
  })
})

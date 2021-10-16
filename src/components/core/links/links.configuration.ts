import * as path from "path"
import { CachedLinksMap, ContinentLink, NavigationLink, OtherLink } from "./links.types"
import { asiaLinks } from "../asia/asia.links"
import commonEn from "../../../locales/en/common.json"
import commonFr from "../../../locales/fr/common.json"
import { oceaniaLinks } from "../oceania/oceania.links"
import { LivingAbroadWhereCard, MovingAbroadWhyCard } from "../journal/journal.cards"
import { OrangutanCard } from "../animals/animals.cards"

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
      fr: commonFr.continent.africa,
      en: commonEn.continent.africa,
    },
    countries: [],
  },
  {
    id: "south-america",
    label: {
      fr: commonFr.continent["south-america"],
      en: commonEn.continent["south-america"],
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
      fr: commonFr.continent["north-america"],
      en: commonEn.continent["north-america"],
    },
    countries: [
      {
        id: "united-states",
        others: [
          {
            id: "times-square",
            label: { fr: "Times Square", en: "Times Square" },
            published: false,
          },
        ],
        label: { fr: commonFr.country["united-states"].title, en: commonEn.country["united-states"].title },
        cities: [],
      },
      {
        id: "canada",
        label: { fr: "", en: "" },
        cities: [],
        others: [],
      },
    ],
  },
  {
    id: "europe",
    label: {
      fr: commonFr.continent.europe,
      en: commonEn.continent.europe,
    },
    countries: [
      {
        id: "azores",
        cities: [],
        others: [],
        label: { fr: "Acores", en: "Azores" },
      },
      {
        id: "iceland",
        cities: [],
        others: [],
        label: { fr: "", en: "" },
      },
      {
        id: "russia",
        cities: [],
        others: [],
        label: { fr: "", en: "" },
      },
      {
        id: "france",
        cities: [
          {
            id: "paris",
            highlights: [],
            label: { fr: "", en: "" },
          },
        ],
        others: [],
        label: { fr: "", en: "" },
      },
    ],
  },
  {
    id: "middle-east",
    label: {
      fr: commonFr.continent["middle-east"],
      en: commonEn.continent["middle-east"],
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
            published: true,
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
        published: false,
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
        id: "living-abroad",
        label: { fr: commonFr.link.journal["living-abroad"], en: commonEn.link.journal["living-abroad"] },
        sections: [],
        articles: [
          {
            id: "moving-abroad-why",
            label: {
              fr: commonFr.journal["living-abroad"].card["moving-abroad-why"],
              en: commonEn.journal["living-abroad"].card["moving-abroad-why"],
            },
            published: new Date("2021-07-31T17:00:00.000+08:00"),
            card: MovingAbroadWhyCard,
          },
          {
            id: "living-abroad-where",
            label: {
              fr: commonFr.journal["living-abroad"].card["living-abroad-where"],
              en: commonEn.journal["living-abroad"].card["living-abroad-where"],
            },
            published: new Date("2021-08-07T17:00:00.000+08:00"),
            card: LivingAbroadWhereCard,
          },
        ],
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
  {
    id: "durian",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "rambutan",
    label: { fr: "", en: "" },
    published: false,
  },
  // TODO to move :)
  {
    id: "beef-rendang",
    label: { fr: "", en: "" },
    published: false,
  },
]
export const animalsLinks: OtherLink[] = [
  {
    id: "orangutan",
    label: { fr: commonFr.animals.orangutan, en: commonEn.animals.orangutan },
    card: OrangutanCard,
    additionalTags: ["asia", "malaysia", "indonesia"],
    published: new Date("2021-09-18T17:00:00.000+08:00"),
  },
  {
    id: "proboscis-monkey",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "colugo",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "crab-eating-macaque",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "cassowary",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "koala",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "black-flanked-rock-wallaby",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "quokka",
    label: { fr: "", en: "" },
    published: false,
  },
  {
    id: "wombat",
    label: { fr: "", en: "" },
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
    submenu.articles?.forEach((article) => {
      cachedLinks.set(article.id, {
        id: article.id,
        label: article.label,
        url: path.join("/", getUrl(menu), getUrl(submenu), getUrl(article)),
        published: isPublished(article),
        publishedDate: article.published instanceof Date ? article.published : undefined,
        card: article.card,
        // as of today, I didn't add menu.id for articles in living-abroad. Indeed I don't want the journal ta to be displayed
        // if it needs to be changed, be careful on the living abroad articles
        tags: [submenu.id],
        pointOfInterest: [],
        seasons: [],
        kind: "other",
      })
    })

    cachedLinks.set(submenu.id, {
      id: submenu.id,
      label: submenu.label,
      url: path.join("/", getUrl(menu), getUrl(submenu)),
      published:
        submenu.sections.some((subsubmenu) => cachedLinks.get(subsubmenu.id)?.published) ||
        submenu.articles?.some((article) => cachedLinks.get(article.id)?.published) ||
        !!submenu.published,
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
    publishedDate: link.published instanceof Date ? link.published : undefined,
    card: link.card,
    tags: [...(link.additionalTags || [])],
    pointOfInterest: [],
    seasons: [],
    kind: "fruit",
  })
})

animalsLinks.forEach((link) => {
  cachedLinks.set(link.id, {
    id: link.id,
    label: link.label,
    url: path.join("/animals", getUrl(link)),
    published: isPublished(link),
    publishedDate: link.published instanceof Date ? link.published : undefined,
    card: link.card,
    tags: [...(link.additionalTags || [])],
    pointOfInterest: [],
    seasons: [],
    kind: "animal",
  })
})

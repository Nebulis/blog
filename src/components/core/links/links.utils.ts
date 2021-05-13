import {
  CachedLinksMap,
  CityLink,
  ContinentLink,
  CountryLink,
  HighlightLink,
  Kind,
  Label,
  Lang,
  NavigationLink,
} from "./links.types"
import { cachedLinks, isPublished, continentLinks } from "./links.configuration"
import { PointOfInterest, Season } from "../../../types/shared"

type Day =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
type Month =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december"
const convertMonth = (month: Month): number => {
  switch (month) {
    case "january":
      return 0
    case "february":
      return 1
    case "march":
      return 2
    case "april":
      return 3
    case "may":
      return 4
    case "june":
      return 5
    case "july":
      return 6
    case "august":
      return 7
    case "september":
      return 8
    case "october":
      return 9
    case "november":
      return 10
    case "december":
      return 11
  }
}
export const createDate = (day: Day, month: Month, year: number, hours = 0, minuts = 0, seconds = 0): Date => {
  return new Date(Date.UTC(year, convertMonth(month), day, hours, minuts, seconds))
}

export function sortByField<T extends string>(field: T) {
  return (obj1: { [key in T]: string }, obj2: { [key in T]: string }) => obj1[field].localeCompare(obj2[field])
}
// TODO is this still needed ?
export const sortByLabel = (lang: Lang) => (obj1: { label: Label }, obj2: { label: Label }) =>
  obj1.label[lang].localeCompare(obj2.label[lang])
export const sortByPublishedDate = (obj1: { publishedDate?: Date }, obj2: { publishedDate?: Date }) => {
  const time1 = obj1.publishedDate?.getTime() ?? 0
  const time2 = obj2.publishedDate?.getTime() ?? 0
  return time2 - time1
}

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

export const getLinkUrl = (lang: Lang) => (linkId: string): string => {
  const url = getLink(linkId).url
  return lang === "fr" ? url : `/en${url}`
}
export const getLinkLabel = (lang: Lang) => (linkId: string): string => {
  return getLink(linkId).label[lang]
}
export const isLinkPublished = (
  element: CountryLink | CityLink | HighlightLink | ContinentLink | NavigationLink | string
) => {
  const id = typeof element === "string" ? element : element.id
  return isPublished(getLink(id))
}
export const getPublishedCountries = ({ development }: { development: boolean }) => {
  const countries = Array.from(cachedLinks.values())
    .filter(({ country }) => development || (country && isLinkPublished(country)))
    .map(({ country }) => country)
  return [...new Set(countries)] as string[]
}

export const getContinentsFromCountries = (links: CachedLinksMap[]) => {
  const continentsIds = continentLinks.map((continent) => continent.id)
  const tags = links
    .map((country) => country.tags)
    .flat()
    .filter((tag) => continentsIds.includes(tag))
  return [...new Set(tags)]
}

export const getCities = ({
  links,
  development,
  currentPageId = "",
  lang,
}: {
  links: CountryLink
  development: boolean
  currentPageId?: string
  lang: Lang
}) => {
  return development
    ? links.cities.filter((city) => city.id !== currentPageId).sort(sortByLabel(lang))
    : links.cities
        .filter(isLinkPublished)
        .filter((city) => city.id !== currentPageId)
        .sort(sortByLabel(lang))
}

const returnTrue = () => true
export const getArticles = ({
  published = true,
  development,
  card = true,
  kind = "none",
  tags = [],
  pointOfInterests = [],
  seasons = [],
  filter = returnTrue,
  sort = sortByPublishedDate,
  limit = Number.POSITIVE_INFINITY,
}: {
  card?: boolean
  kind?: Kind | "none"
  filter?: (cachedLink: CachedLinksMap) => boolean
  published?: boolean
  development: boolean
  tags?: string[]
  pointOfInterests?: PointOfInterest[]
  seasons?: Season[]
  sort?: (cacheLink: CachedLinksMap, cacheLink2: CachedLinksMap) => number
  limit?: number
}) => {
  return Array.from(cachedLinks.values())
    .filter((cachedLink) => (card ? cachedLink.card : true))
    .filter((cachedLink) => (published && !development ? cachedLink.published : true))
    .filter((cachedLink) => (kind !== "none" ? cachedLink.kind === kind : true))
    .filter((cachedLink) => (tags.length > 0 ? tags.some((t) => cachedLink.tags.includes(t)) : true))
    .filter((cachedLink) =>
      pointOfInterests.length > 0 ? pointOfInterests.some((p) => cachedLink.pointOfInterest.includes(p)) : true
    )
    .filter((cachedLink) => (seasons.length > 0 ? seasons.some((s) => cachedLink.seasons.includes(s)) : true))
    .filter(filter)
    .sort(sort)
    .slice(0, limit)
}

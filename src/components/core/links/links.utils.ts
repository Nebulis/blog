import {
  CachedLinksMap,
  CityLink,
  ContinentLink,
  CountryLink,
  HighlightLink,
  HighlightWithCard,
  Label,
  Lang,
  NavigationLink,
} from "./links.types"
import { filteredId } from "../asia/vietnam/vietnam.utils"
import { cachedLinks, isPublished } from "./links.configuration"

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
export const sortByPublishedDate = (obj1: { published?: Date | boolean }, obj2: { published?: Date | boolean }) => {
  const time1 = obj1.published instanceof Date ? obj1.published.getTime() : 0
  const time2 = obj2.published instanceof Date ? obj2.published.getTime() : 0
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

type LinkMapped = Required<Pick<CachedLinksMap, "card" | "publishedDate" | "country" | "url">>
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
        return { publishedDate: link.publishedDate, card: link.card, country: link.country ?? "", url: link.url }
      }
      return null
    })
    .filter(filterNull)
    .filter(customFilter)
    .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
    .slice(0, limit)
    .map((value) => value.card)
}

export const isHighlighWithCard = (highlight: HighlightLink): highlight is HighlightWithCard => !!highlight.card
export const getHighlightsFromCity = (cities: CityLink[]) => ({
  id,
  development,
}: {
  id: string
  development: boolean
}): HighlightWithCard[] => {
  const city = cities.find((city) => city.id === id)
  if (!city) return []
  const highlights = development ? city.highlights : city.highlights.filter(isLinkPublished)
  return highlights.filter(isHighlighWithCard).filter((link) => !filteredId.includes(link.id))
}

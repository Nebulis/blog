import { HighlightLink, OtherLink } from "./links.types"

export const isPublished = (element: OtherLink | HighlightLink) => {
  if (typeof element.published === "boolean") {
    return element.published
  }
  return new Date().getTime() >= element.published.getTime()
}
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

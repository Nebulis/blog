import { PageProps } from "gatsby"
import { Lang } from "./components/core/links/links.types"

export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const defaultHostname = "https://magicoftravels.com"
export const getHostname = (location: PageProps["location"]) => location.origin || defaultHostname
export const isEnglishPage = ({ pathname }: { pathname: string }) => pathname.startsWith("/en/") || pathname === "/en"
export const getPathForFrench = ({ pathname }: { pathname: string }) => {
  return pathname.replace("/en", "")
}
export const getPathForEnglish = ({ pathname }: { pathname: string }) => {
  return isEnglishPage({ pathname }) ? pathname : `/en${pathname}`
}
export const twitter = "_magicoftravels"
export const instagram = "magic_of_travels"
export const facebook = "magicoftravels"
export const pinterest = "MagicOfTravels"

export const buildBaolauUrl = (lang: Lang) => `https://www.baolau.com/${lang}`

export const buildPinterestUrl = ({
  url,
  description,
  media,
}: {
  url: string
  description: string
  media?: string
}) => {
  return `https://pinterest.com/pin/create/bookmarklet/?url=${url}&description=${description}${
    media ? `&media=${media}` : ""
  }&isVideo=false`
}

export const buildSharedUrl = (location: PageProps["location"], path = "") => {
  const url = `${getHostname(location)}${path}`
  return encodeURI(url)
}
export const buildCurrentSharedUrl = (location: PageProps["location"]) => {
  return buildSharedUrl(location, location.pathname)
}

export const buildPixabayUrl =
  (lang: Lang) =>
  (slug = "") =>
    `https://pixabay.com/${lang}/${slug}`

export const priceFactorEur = 1
export const priceFactorUsd = 1.21
export const price = (value: number, lang: Lang) =>
  (value * (lang === "fr" ? priceFactorEur : priceFactorUsd)).toLocaleString(undefined, {
    style: "currency",
    currency: lang === "fr" ? "EUR" : "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

export const convertTime = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutes = Math.round((time / 60 - hours) * 60)
  if (hours > 0 && minutes > 0) {
    return `${hours}h${minutes.toString(10).padStart(2, "0")}`
  } else if (hours > 0) {
    return `${hours}h`
  } else {
    return `${minutes}min`
  }
}

export type DurationUnit = "day" | "hour" | "minute"

export const transformDurationUnit = (value: number, unit: DurationUnit, lang: Lang) => {
  let duration = ""
  if (unit === "day") {
    duration = lang === "fr" ? "Jour" : "Day"
  }
  if (unit === "hour") {
    duration = lang === "fr" ? "Heure" : "Hour"
  }
  if (unit === "minute") {
    duration = "Minute"
  }
  if (value > 1) duration += "s"
  return duration
}

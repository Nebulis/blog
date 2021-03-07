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

export const buildPixabayUrl = (lang: Lang) => (slug = "") => `https://pixabay.com/${lang}/${slug}`

export const priceFactorEur = 1
export const priceFactorUsd = 1.21

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

export const buildBookingUrl = (lang: Lang) => (hotel: string) => `https://www.booking.com/hotel/${hotel}.${lang}.html`
export const buildBookingSearchUrl = (lang: Lang) => (slug: string) =>
  `https://www.booking.com/searchresults.${lang}.html?ss=${slug}`
export const buildAgodaSearchUrl = (lang: Lang) => (searchterm?: string) =>
  `https://www.agoda.com${lang === "fr" ? "/fr-fr" : ""}/search?searchterm=${searchterm}`
export const buildAirBnbSearchUrl = (lang: Lang) => (searchterm?: string) =>
  `https://www.airbnb.${lang === "fr" ? "fr" : "com"}/s/${searchterm}/homes`
export const buildHostelWorldSearchUrl = (lang: Lang) => (searchterm?: string) =>
  `https://www.${lang === "fr" ? "french." : ""}hostelworld.com/${
    lang === "fr" ? "logement" : "accommodation"
  }/${searchterm}`

const regexReplaceSpace = / /g
export const buildBaolauLink = (lang: Lang) => ({ destination, origin }: { destination: string; origin: string }) =>
  `https://www.baolau.com/${lang}/results/?origin=${origin.replace(
    regexReplaceSpace,
    "+"
  )}&destination=${destination.replace(regexReplaceSpace, "+")}`
export const buildGetYourGuideLink = (lang: Lang) => (slug = "") =>
  `https://www.getyourguide.${lang === "fr" ? "fr" : "com"}/${slug}`
export const buildTripAdvisorLink = (lang: Lang) => (slug = "") =>
  `https://www.tripadvisor.${lang === "fr" ? "fr" : "com"}/${slug}`
export const buildCivivatisLink = (lang: Lang) => (slug = "") =>
  `https://www.civitatis.com${lang === "fr" ? "/fr" : ""}/${slug}`
export const buildExpediaUrl = (lang: Lang) => (slug: string) => {
  const date = new Date()
  date.setDate(date.getDate() + 15)
  return `https://www.expedia.${lang === "fr" ? "fr" : "com"}/Flights-Search?leg1=${slug}%29%2Cdeparture%3A${
    lang === "fr" ? date.getDate() : date.getMonth() + 1
  }%2F${
    lang === "fr" ? date.getMonth() + 1 : date.getDate()
  }%2F${date.getFullYear()}TANYT&mode=search&options=carrier%3A%2A%2Ccabinclass%3A%2Cmaxhops%3A1%2Cnopenalty%3AN&pageId=0&passengers=adults%3A1%2Cchildren%3A0%2Cinfantinlap%3AN&trip=oneway`
}

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
export const buildAllianzUrl = (lang: Lang) =>
  lang === "fr" ? "https://www.allianz-voyage.fr/" : "https://www.allianztravelinsurance.com/"

export const buildSharedUrl = (location: PageProps["location"], path = "") => {
  const url = `${getHostname(location)}${path}`
  return encodeURI(url)
}
export const buildCurrentSharedUrl = (location: PageProps["location"]) => {
  return buildSharedUrl(location, location.pathname)
}

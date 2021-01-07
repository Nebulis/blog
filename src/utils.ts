import { PageProps } from "gatsby"

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

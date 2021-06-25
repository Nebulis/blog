import { css } from "@emotion/react"
import React from "react"
import { ApplicationLink, ExternalLink } from "./components/core/links/link"
import { Lang } from "./components/core/links/links.types"

const regexReplaceSpace = / /g
const buildBaolauUrl = ({ lang, destination, origin }: { lang: Lang; destination?: string; origin?: string }) => {
  const baseUrl = `https://www.baolau.com/${lang}`
  if (!destination || !origin) {
    return baseUrl
  }
  return `${baseUrl}/results/?origin=${origin.replace(regexReplaceSpace, "+")}&destination=${destination.replace(
    regexReplaceSpace,
    "+"
  )}`
}

export const buildExpediaUrl = ({ lang, slug = "" }: { lang: Lang; slug?: string }) => {
  const baseUrl = `https://www.expedia.${lang === "fr" ? "fr" : "com"}`
  if (!slug) return baseUrl
  const date = new Date()
  date.setDate(date.getDate() + 15)
  return `https://www.expedia.${lang === "fr" ? "fr" : "com"}/Flights-Search?leg1=${slug}%29%2Cdeparture%3A${
    lang === "fr" ? date.getDate() : date.getMonth() + 1
  }%2F${
    lang === "fr" ? date.getMonth() + 1 : date.getDate()
  }%2F${date.getFullYear()}TANYT&mode=search&options=carrier%3A%2A%2Ccabinclass%3A%2Cmaxhops%3A1%2Cnopenalty%3AN&pageId=0&passengers=adults%3A1%2Cchildren%3A0%2Cinfantinlap%3AN&trip=oneway`
}

const buildGetYourGuideUrl = ({ lang, slug = "" }: { lang: Lang; slug: string }) =>
  `https://www.getyourguide.${lang === "fr" ? "fr" : "com"}/${slug}`
const buildTripadvisorUrl = ({ lang, slug = "" }: { lang: Lang; slug: string }) =>
  `https://www.tripadvisor.${lang === "fr" ? "fr" : "com"}/${slug}`
const buildBookingHotelUrl = ({ lang, hotel = "" }: { lang: Lang; hotel: string }) =>
  `https://www.booking.com/hotel/${hotel}.${lang}.html`
const buildBookingSearchUrl = ({ lang, slug = "" }: { lang: Lang; slug?: string }) =>
  `https://www.booking.com/searchresults.${lang}.html?ss=${slug}`
export const buildCivivatisUrl = ({ lang, slug = "" }: { lang: Lang; slug?: string }) =>
  `https://www.civitatis.com${lang === "fr" ? "/fr" : "/en"}/${slug}`
export const buildAgodaUrl = ({ lang }: { lang: Lang }) => `https://www.agoda.com${lang === "fr" ? "/fr-fr" : ""}`
export const buildAirBnbUrl = ({ lang, slug = "" }: { lang: Lang; slug?: string }) =>
  `https://www.airbnb.${lang === "fr" ? "fr" : "com"}/s/${slug}/homes`
export const buildHostelWorldUrl = ({ lang, slug = "" }: { lang: Lang; slug?: string }) =>
  `https://www.${lang === "fr" ? "french." : ""}hostelworld.com/${lang === "fr" ? "logement" : "accommodation"}/${slug}`
export const buildGoogleMapsUrl = ({ lang, slug = "" }: { lang: Lang; slug?: string }) =>
  `https://www.google.${lang === "fr" ? "fr" : "com"}/maps/${slug}`

const buildLink = ({ lang, url, text }: { lang: Lang; url: string; text: string }): JSX.Element => {
  const elements = url.split(":")
  if (elements[0] === "baolau") {
    return (
      <ExternalLink
        href={buildBaolauUrl({ lang, origin: elements[1], destination: elements[2] })}
        className="mdx-pseudo-processor-link"
      >
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "gyg") {
    return (
      <ExternalLink href={buildGetYourGuideUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "tripadvisor") {
    return (
      <ExternalLink href={buildTripadvisorUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "booking-hotel") {
    return (
      <ExternalLink href={buildBookingHotelUrl({ lang, hotel: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "booking-search") {
    return (
      <ExternalLink href={buildBookingSearchUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "expedia") {
    return (
      <ExternalLink href={buildExpediaUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "civivatis") {
    return (
      <ExternalLink href={buildCivivatisUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "agoda") {
    return (
      <ExternalLink href={buildAgodaUrl({ lang })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "airbnb") {
    return (
      <ExternalLink href={buildAirBnbUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "hostel-world") {
    return (
      <ExternalLink href={buildHostelWorldUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "maps") {
    return (
      <ExternalLink href={buildGoogleMapsUrl({ lang, slug: elements[1] })} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "japan-line") {
    return (
      <ExternalLink
        href={elements.slice(3).join(":")}
        css={css`
          padding-right: 0.25rem; //p1
          padding-left: 0.25rem; //p1
          color: ${elements[1]} !important;
          background-color: ${elements[2]} !important;
          &:visited {
            color: ${elements[1]} !important;
            background-color: ${elements[2]} !important;
          }
        `}
        className="mdx-pseudo-processor-link japan-line"
      >
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "http" || elements[0] === "https") {
    return (
      <ExternalLink href={elements.join(":")} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  } else if (elements[0] === "todo") {
    return <span className="bg-dark-pink yellow bold dib">{text}</span>
  } else if (elements[0].startsWith("#")) {
    return (
      <a href={elements[0]} className="mdx-pseudo-processor-link">
        {text}
      </a>
    )
  }
  return (
    <ApplicationLink to={url} className="mdx-pseudo-processor-link">
      {text}
    </ApplicationLink>
  )
}

const parseUntil = (value: string, language: Lang, from = 0, stopChar = "") => {
  const elements: React.ReactNode[] = []
  let currentString = ""
  let index = from
  const push = () => currentString && elements.push(currentString)
  const back = () => {
    const children =
      elements.length <= 1 ? (
        elements[0]
      ) : (
        <>
          {elements.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
        </>
      )
    return {
      index,
      children,
    }
  }
  for (; index < value.length; index++) {
    const currentChar = value[index]
    if (currentChar === stopChar) {
      break
    }
    // link mode => collect only
    if (stopChar === ")" || stopChar === "]") {
      currentString += currentChar
    } else if (currentChar === "#") {
      push()
      currentString = ""
      const { index: nextIndex, children } = parseUntil(value, language, index + 1, "#")
      elements.push(<span className="b">{children}</span>)
      index = nextIndex
    } else if (currentChar === "_") {
      push()
      currentString = ""
      const { index: nextIndex, children } = parseUntil(value, language, index + 1, "_")
      elements.push(<span className="i">{children}</span>)
      index = nextIndex
    } else if (currentChar === "[") {
      push()
      currentString = ""
      const { index: nextIndex, children: linkText } = parseUntil(value, language, index + 1, "]")
      // nextIndex +2 because of ]( notation
      const { index: nextNextIndex, children: linkUrl } = parseUntil(value, language, nextIndex + 2, ")")
      elements.push(buildLink({ lang: language, url: linkUrl as string, text: linkText as string }))

      index = nextNextIndex
    } else {
      currentString += currentChar
    }
  }

  push()
  return back()
}

export const mdxPseudoProcessor = (value: string, _key: string, _options: any, translator: { language: Lang }) => {
  const { children } = parseUntil(value, translator.language, 0, "")
  return children
}

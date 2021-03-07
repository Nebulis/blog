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

// TODO check if the build will fail if link is missing
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
  } else if (elements[0] === "http" || elements[0] === "https") {
    return (
      <ExternalLink href={elements.join(":")} className="mdx-pseudo-processor-link">
        {text}
      </ExternalLink>
    )
  }
  return (
    <ApplicationLink to={url} className="mdx-pseudo-processor-link">
      {text}
    </ApplicationLink>
  )
}

export const mdxPseudoProcessor = (value: string, _key: string, _options: any, translator: { language: Lang }) => {
  let mode: "normal" | "bold" | "italic" | "link_text" | "link" = "normal"
  const elements: React.ReactNode[] = []
  let linkText = ""
  let currentString = ""
  const push = () => currentString && elements.push(currentString)
  if (value.includes("#") || value.includes("_") || value.includes("[")) {
    ;[...value].forEach((v) => {
      if (v === "#" && mode === "normal") {
        push()
        currentString = ""
        mode = "bold"
      } else if (v === "_" && mode === "normal") {
        push()
        currentString = ""
        mode = "italic"
      } else if (v === "[" && mode === "normal") {
        push()
        currentString = ""
        mode = "link_text"
      } else if (v === "]" && mode === "link_text") {
        linkText = currentString
        currentString = ""
        mode = "link"
      } else if (v === "(" && mode === "link") {
        // nothing to do
      } else if (v === ")" && mode === "link") {
        elements.push(buildLink({ lang: translator.language, url: currentString, text: linkText }))
        currentString = ""
        mode = "normal"
      } else if (v === "#" && mode === "bold") {
        elements.push(<span className="b">{currentString}</span>)
        currentString = ""
        mode = "normal"
      } else if (v === "_" && mode === "italic") {
        elements.push(<span className="i">{currentString}</span>)
        currentString = ""
        mode = "normal"
      } else {
        currentString += v
      }
    })
    push()
    return elements.length === 1 ? (
      elements[0]
    ) : (
      <>
        {elements.map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </>
    )
  }
  return value
}

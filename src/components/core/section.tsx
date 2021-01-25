import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"
import {
  FaBed,
  FaBusAlt,
  FaCalendarAlt,
  FaClock,
  FaCloudSun,
  FaDollarSign,
  FaEuroSign,
  FaLightbulb,
  FaMapMarkedAlt,
  FaUtensils,
  FaWalking,
} from "react-icons/all"
import { maxWidth, mediumEnd, mobileEnd } from "./variables"
import { useCustomTranslation } from "../../i18n"
import { Lang } from "./links/links.types"

export const SectionTitle: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <div className={`mb1 flex section-title ${className}`}>{children}</div>
)
const sectionContentStyle = css`
  &.content div:last-child .gatsby-image-wrapper {
    margin-bottom: 0;
  }
  line-height: 1.5em;
  margin-bottom: 1.45rem;
`
export const SectionContent: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  const size = React.Children.count(children)
  return (
    <div className={`${className} f5 content tj`} css={sectionContentStyle}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child
        if ((child.type === "p" || child.type === "ul") && index < size - 1) {
          return React.cloneElement(child, { className: `mb2 ${child.props.className || ""}` })
        }
        return React.cloneElement(child)
      })}
    </div>
  )
}

const introductionStyle = css`
  text-align: center;
`
export const Introduction: React.FunctionComponent = ({ children }) => {
  return (
    <SectionContent className="b" css={introductionStyle}>
      {children}
    </SectionContent>
  )
}

interface TitleProps {
  title?: string
  className?: string
}

type IconBuilder = { build: (lang: Lang) => React.ComponentType }
interface TitleOptions {
  translationKey: string
  icon: React.ComponentType | IconBuilder
}
const isIconBuilder = (obj: unknown): obj is IconBuilder => {
  return obj && typeof obj === "object" && "build" in obj
}
export const titleBuilder = ({ translationKey, icon }: TitleOptions): React.FunctionComponent<TitleProps> =>
  function Title({ children, title }) {
    const { t, i18n } = useCustomTranslation("common")
    const Icon = isIconBuilder(icon) ? icon.build(i18n.languageCode) : icon
    return (
      <>
        <SectionTitle>
          <Icon />
          &nbsp;{title || t(translationKey)}
        </SectionTitle>
        <SectionContent>{children}</SectionContent>
      </>
    )
  }

export const Where = titleBuilder({ icon: FaMapMarkedAlt, translationKey: "section.where" })
export const When = titleBuilder({ icon: FaCalendarAlt, translationKey: "section.when" })
export const How = titleBuilder({ icon: FaBusAlt, translationKey: "section.how-to-get-there" })
export const HowLong = titleBuilder({ icon: FaClock, translationKey: "section.how-long" })
export const HowMuch = titleBuilder({
  icon: { build: (lang) => (lang === "fr" ? FaEuroSign : FaDollarSign) },
  translationKey: "section.how-much",
})
export const WhereToStay = titleBuilder({ icon: FaBed, translationKey: "section.where-to-stay" })
export const WhatTimeOfYear = titleBuilder({ icon: FaCloudSun, translationKey: "section.what-time-of-year" })
export const WhereToHave = titleBuilder({ icon: FaUtensils, translationKey: "todo" })
export const Visit = titleBuilder({ icon: FaWalking, translationKey: "section.visits" })
export const Bonus = titleBuilder({ icon: FaLightbulb, translationKey: "todo" })

export const GoodToKnow: FunctionComponent<TitleProps> = ({ children }) => (
  <>
    <SectionTitle>Bon à savoir</SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

const homeSectionStyle = css`
  letter-spacing: 5px;
  font-family: auto;
  @media (max-width: ${mediumEnd}) {
    margin-bottom: 1rem;
  }
`
export const HomeSection: FunctionComponent = ({ children }) => (
  <h2 className="tc ttu mb4-l" css={homeSectionStyle}>
    {children}
  </h2>
)
export const CityHomeSection: FunctionComponent = ({ children }) => (
  <h2 className="tc ttu mb3" css={homeSectionStyle}>
    {children}
  </h2>
)

export const MainTitleSection: FunctionComponent = ({ children }) => {
  return <h1 className="tc ttu flex items-center justify-center">{children}</h1>
}

export const ImageDescription: FunctionComponent = ({ children }) => {
  return <p className="tc i">{children}</p>
}

const homeSubSectionStyle = css`
  padding-left: 200px;
  max-width: calc(${maxWidth}px - 2rem);
  border-bottom: 1px solid black;
  font-family: "Freestyle Script";
  font-size: 1.8rem;

  @media (max-width: ${mediumEnd}) {
    padding-left: 100px;
  }
  @media (max-width: ${mobileEnd}) {
    padding-left: 2rem;
  }
`
export const HomeSubSection: FunctionComponent = ({ children }) => (
  <h3 className="tl normal center pb2 mb0" css={homeSubSectionStyle}>
    {children}
  </h3>
)

import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/react"
import {
  FaBed,
  FaBiohazard,
  FaBusAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardList,
  FaClock,
  FaCloudSun,
  FaCommentDots,
  FaComments,
  FaCopyright,
  FaDollarSign,
  FaEuroSign,
  FaHeartbeat,
  FaInfoCircle,
  FaLightbulb,
  FaMapMarkedAlt,
  FaMeteor,
  FaMobileAlt,
  FaMoneyBill,
  FaPassport,
  FaShip,
  FaTrain,
  FaCog,
  FaSuitcaseRolling,
  FaUtensils,
  FaWalking,
} from "react-icons/fa"
import { maxWidth, mediumEnd, mediumStart, mobileEnd, primaryDarkColor, primaryLightColor, smallEnd } from "./variables"
import { useCustomTranslation } from "../../i18n-hook"
import { Lang } from "./links/links.types"
import styled from "@emotion/styled"
import { Anchor } from "../images/layout"

const SpeechBubble: React.FunctionComponent = () => (
  <svg viewBox="0 -26 512 512" height="2em" width="2em">
    <path
      d="m463.988281 240.589844c23.710938-24.417969 38.011719-56.039063 38.011719-90.589844 0-77.320312-77.628906-140-166-140s-160 62.679688-160 140l160 140c23.609375 0 52.03125-4.480469 72.210938-12.511719 18.277343 19.980469 44.570312 32.511719 73.789062 32.511719-18.789062-18.789062-24.800781-45.539062-18.011719-69.410156zm0 0"
      fill="#e87288"
    />
    <path
      d="m258.449219 170c46.472656 24.5 77.550781 69.070312 77.550781 120 0 77.320312-71.628906 140-160 140-23.609375 0-52.03125-4.480469-72.210938-12.511719-18.277343 19.980469-44.570312 32.511719-73.789062 32.511719 18.789062-18.789062 24.800781-45.539062 18.011719-69.410156-23.710938-24.417969-38.011719-56.039063-38.011719-90.589844 0-77.320312 77.628906-140 166-140 30.160156 0 58.378906 7.300781 82.449219 20zm0 0"
      fill="#cae9fc"
    />
    <path d="m256 100c-5.519531 0-10 4.480469-10 10s4.480469 10 10 10 10-4.480469 10-10-4.480469-10-10-10zm0 0" />
    <path d="m90 280c5.519531 0 10-4.480469 10-10s-4.480469-10-10-10-10 4.480469-10 10 4.480469 10 10 10zm0 0" />
    <path d="m336 0c-90.027344 0-163.917969 62.070312-169.632812 140.253906-85.738282 4.300782-166.367188 66.125-166.367188 149.746094 0 34.945312 13.828125 68.804688 39 95.632812 4.980469 20.53125-1.066406 42.292969-16.070312 57.296876-2.859376 2.859374-3.714844 7.160156-2.167969 10.898437 1.546875 3.734375 5.191406 6.171875 9.238281 6.171875 28.519531 0 56.003906-11.183594 76.425781-30.890625 19.894531 6.78125 45.851563 10.890625 69.574219 10.890625 90.015625 0 163.898438-62.054688 169.628906-140.222656 20.9375-.929688 42.714844-4.796875 59.945313-10.667969 20.421875 19.707031 47.90625 30.890625 76.425781 30.890625 4.046875 0 7.691406-2.4375 9.238281-6.171875 1.546875-3.738281.691407-8.039063-2.167969-10.898437-15.003906-15.003907-21.050781-36.765626-16.070312-57.296876 25.171875-26.828124 39-60.6875 39-95.632812 0-86.886719-86.839844-150-176-150zm-160 420c-23.601562 0-50.496094-4.632812-68.511719-11.800781-3.859375-1.539063-8.269531-.527344-11.078125 2.539062-12.074218 13.199219-27.773437 22.402344-44.878906 26.632813 9.425781-18.058594 11.832031-39.347656 6.097656-59.519532-.453125-1.589843-1.292968-3.042968-2.445312-4.226562-22.6875-23.367188-35.183594-53.066406-35.183594-83.625 0-70.46875 71.4375-130 156-130 79.851562 0 150 55.527344 150 130 0 71.683594-67.289062 130-150 130zm280.816406-186.375c-1.152344 1.1875-1.992187 2.640625-2.445312 4.226562-5.734375 20.171876-3.328125 41.460938 6.097656 59.519532-17.105469-4.226563-32.804688-13.433594-44.878906-26.632813-2.808594-3.0625-7.21875-4.078125-11.078125-2.539062-15.613281 6.210937-37.886719 10.511719-58.914063 11.550781-2.921875-37.816406-21.785156-73.359375-54.035156-99.75h130.4375c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-161.160156c-22.699219-11.554688-48.1875-18.292969-74.421875-19.707031 5.746093-67.164063 70.640625-120.292969 149.582031-120.292969 84.5625 0 156 59.53125 156 130 0 30.558594-12.496094 60.257812-35.183594 83.625zm0 0" />
    <path d="m256 260h-126c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h126c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" />
    <path d="m256 320h-166c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h166c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" />
    <path d="m422 100h-126c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h126c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0" />
  </svg>
)
const sectionTitleStyle = css`
  font-size: 1.1rem;
`
export const SectionTitle: FunctionComponent<HTMLAttributes<any>> = ({ children, className = "", id }) => (
  <div css={sectionTitleStyle} className={`mb2 flex items-center section-title ${className}`} id={id}>
    {children}
  </div>
)
const sectionContentStyle = css`
  line-height: 1.5em;
  margin-bottom: 1.45rem;
`
export const SectionContent: FunctionComponent<HTMLAttributes<any>> = ({ children, className = "" }) => {
  const size = React.Children.count(children)
  return (
    <div className={`${className} f5 section-content tj`} css={sectionContentStyle}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child
        if ((child.type === "p" || child.type === "ul" || child.type === "ol") && index < size - 1) {
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

const menuArticleStyle = css`
  text-align: center;
  font-weight: bold;
  svg {
    width: 24px;
    height: 24px;
  }
  .menu-article-container {
    min-width: 250px;
    display: inline-block;
    background-color: ${primaryLightColor};
    color: ${primaryDarkColor};
    border: 3px solid ${primaryDarkColor};
    padding: 1rem;

    & > div:first-of-type {
      margin-bottom: 0.5rem;
    }
  }
  .menu-article-container a:hover {
    text-decoration: underline;
  }
`
export const MenuArticle: React.FunctionComponent<{ title: string }> = ({ children, title }) => {
  return (
    <SectionContent className="menu-article" css={menuArticleStyle}>
      <div className="menu-article-container">
        <div className="ttu black">{title}</div>
        {children}
      </div>
    </SectionContent>
  )
}

interface TitleProps {
  title?: string
  className?: string
  titleClassName?: string
  id?: string
}

type IconBuilder = { build: (lang: Lang) => React.ComponentType }
interface TitleOptions {
  translationKey: string
  icon?: React.ComponentType | IconBuilder
  icon2?: React.ComponentType
}
const isIconBuilder = (obj: unknown): obj is IconBuilder => {
  // can't simplify :shrug:
  if (obj && typeof obj === "object" && "build" in obj) {
    return true
  }
  return false
}
export const titleBuilder = ({
  translationKey,
  icon,
  icon2: Icon2,
}: TitleOptions): React.FunctionComponent<TitleProps> =>
  function Title({ children, title, id, titleClassName = "", className = "" }) {
    const { t, i18n } = useCustomTranslation("common")
    const Icon = isIconBuilder(icon) ? icon.build(i18n.languageCode) : icon
    return (
      <>
        <Anchor id={id} />
        <SectionTitle className={`${titleClassName} ${className}`}>
          {Icon && (
            <>
              <Icon />
              &nbsp;
            </>
          )}
          {title || t(translationKey)}
          {Icon2 ? (
            <>
              &nbsp;
              <Icon2 />
            </>
          ) : null}
        </SectionTitle>
        <SectionContent>{children}</SectionContent>
      </>
    )
  }

export const Where = titleBuilder({ icon: FaMapMarkedAlt, translationKey: "section.where" })
export const When = titleBuilder({ icon: FaCalendarAlt, translationKey: "section.when" })
export const How = titleBuilder({ icon: FaBusAlt, translationKey: "section.how" })
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
export const Visa = titleBuilder({ icon: FaPassport, translationKey: "section.visa" })
export const Health = titleBuilder({ icon: FaHeartbeat, translationKey: "section.health" })
export const Phone = titleBuilder({ icon: FaMobileAlt, translationKey: "section.phone" })
export const Scams = titleBuilder({ icon: FaBiohazard, translationKey: "section.scams" })
export const NaturalDisaster = titleBuilder({ icon: FaMeteor, translationKey: "section.natural-disaster" })
export const Baggage = titleBuilder({ icon: FaSuitcaseRolling, translationKey: "section.baggage" })
export const Opinion = titleBuilder({ icon: FaComments, translationKey: "todo" })
export const LocalCurrency = titleBuilder({ icon: FaMoneyBill, translationKey: "todo" })
export const FewWords = titleBuilder({ icon: FaCommentDots, translationKey: "todo", icon2: SpeechBubble })
export const Information = titleBuilder({ icon: FaInfoCircle, translationKey: "todo" })
export const Operation = titleBuilder({ icon: FaCog, translationKey: "todo" })
export const Booking = titleBuilder({ icon: FaCheckCircle, translationKey: "todo" })
export const Company = titleBuilder({ icon: FaCopyright, translationKey: "todo" })
export const Choice = titleBuilder({ icon: FaClipboardList, translationKey: "todo" })
export const Boat = titleBuilder({ icon: FaShip, translationKey: "todo" })
export const Train = titleBuilder({ icon: FaTrain, translationKey: "todo" })
export const NoIconTitle = titleBuilder({ translationKey: "todo" })

const homeSectionStyle = css`
  letter-spacing: 5px;
  font-family: auto;
  @media (max-width: ${mediumEnd}) {
    margin-bottom: 1rem;
  }
`
export const HomeSection: FunctionComponent<{ className?: string; id?: string }> = ({ children, className = "" }) => (
  <h2 className={`tc ttu mb4-l ${className}`} css={homeSectionStyle}>
    {children}
  </h2>
)
export const SubHomeSection = styled(HomeSection)`
  font-size: 1.38316rem; // h3
`
export const SubTitleTransport = styled(SectionTitle)`
  font-size: 1.38316rem; // h3
  margin-bottom: 1rem; // mb3
`

export const PillTitle = styled(NoIconTitle)`
  && {
    list-style-type: disc;
    list-style-position: inside;
    display: list-item;
  }
`

const subHomeSectionTwoLines = css`
  @media (min-width: ${mediumStart}) {
    &.sub-home-section-two-lines-break {
      display: none;
    }
  }
  @media (max-width: ${smallEnd}) {
    &.sub-home-section-two-lines-space {
      display: none;
    }
  }
`
export const SubHomeSectionTwoLines: FunctionComponent<{ title: string; country: string }> = ({ title, country }) => {
  return (
    <>
      <SubHomeSection className="sub-home-section-two-lines-break" css={subHomeSectionTwoLines}>
        {title}
        <br />
        {country}
      </SubHomeSection>
      <SubHomeSection className="sub-home-section-two-lines-space" css={subHomeSectionTwoLines}>
        {title} {country}
      </SubHomeSection>
    </>
  )
}
export const SubSubHomeSection = styled(HomeSection)`
  font-size: 1.2rem; // h3.5
  margin-bottom: 1.45rem;
`

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

const noteStyle = css`
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
`
export const Note: FunctionComponent<{ className?: string }> = ({ children, className = "" }) => {
  return (
    <p css={noteStyle} className={className}>
      {children}
    </p>
  )
}

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
    <div className={`f5 content ${className}`} css={sectionContentStyle}>
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

interface WhereProps {
  title?: string
}
export const Where: FunctionComponent<WhereProps> = ({ children, title }) => {
  const { t } = useCustomTranslation("common")
  return (
    <>
      <SectionTitle>
        <FaMapMarkedAlt />
        &nbsp;{title || t("section.where")}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}
export const When: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaCalendarAlt />
      &nbsp;Quand ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const How: FunctionComponent = ({ children }) => {
  const { t } = useCustomTranslation("common")
  return (
    <>
      <SectionTitle>
        <FaBusAlt />
        &nbsp;{t("section.how-to-get-there")}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}
interface HowLongProps {
  title?: string
}
export const HowLong: FunctionComponent<HowLongProps> = ({ children, title }) => {
  const { t } = useCustomTranslation("common")
  return (
    <>
      <SectionTitle>
        <FaClock />
        &nbsp;{title || t("section.how-long")}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}
interface HowMuchProps {
  title?: string
}
export const HowMuch: FunctionComponent<HowMuchProps> = ({ children, title }) => {
  const { t, i18n } = useCustomTranslation("common")
  const PriceSign = i18n.languageCode === "fr" ? FaEuroSign : FaDollarSign
  return (
    <>
      <SectionTitle>
        <PriceSign />
        &nbsp;{title || t("section.how-much")}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}
interface WhereToStayProps {
  location?: string
}
export const WhereToStay: FunctionComponent<WhereToStayProps> = ({ children, location }) => {
  const { t } = useCustomTranslation("common")
  return (
    <>
      <SectionTitle>
        <FaBed />
        &nbsp;{t("section.where-to-stay")} {location ? location + " " : ""}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}
interface WhatTimeOfYearProps {
  title?: string
}
export const WhatTimeOfYear: FunctionComponent<WhatTimeOfYearProps> = ({ children, title }) => {
  const { t } = useCustomTranslation("common")
  return (
    <>
      <SectionTitle>
        <FaCloudSun />
        &nbsp;{title || t("section.what-time-of-year")}
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}

interface WhereToHaveProps {
  location: string
}
export const WhereToHave: FunctionComponent<WhereToHaveProps> = ({ children, location }) => {
  return (
    <>
      <SectionTitle>
        <FaUtensils />
        &nbsp;Où manger {location} ?
      </SectionTitle>
      <SectionContent>{children}</SectionContent>
    </>
  )
}
export const Visit: FunctionComponent<HTMLAttributes<any> & { title?: string }> = ({
  children,
  className = "",
  title,
}) => {
  const { t } = useCustomTranslation("common")
  return (
    <>
      <SectionTitle>
        <FaWalking />
        &nbsp;{title || t("common:section.visit")}
      </SectionTitle>
      <SectionContent className={className}>{children}</SectionContent>
    </>
  )
}

export const Bonus: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaLightbulb />
      &nbsp;Le petit +
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const GoodToKnow: FunctionComponent = ({ children }) => (
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

export const MainTitleSection: FunctionComponent = ({ children }) => {
  return <h1 className="tc ttu flex items-center justify-center">{children}</h1>
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

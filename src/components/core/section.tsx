import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"
import {
  FaBed,
  FaBusAlt,
  FaCalendarAlt,
  FaClock,
  FaCloudSun,
  FaLightbulb,
  FaMapMarkedAlt,
  FaUtensils,
  FaWalking,
  FaEuroSign,
} from "react-icons/all"
import { maxWidth, mediumEnd, mobileEnd } from "./variables"

export const SectionTitle: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h4 className={`mb1 flex ${className}`}>{children}</h4>
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
export const Where: FunctionComponent<WhereProps> = ({ children, title = "Où ?" }) => (
  <>
    <SectionTitle>
      <FaMapMarkedAlt />
      &nbsp;{title}
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const When: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaCalendarAlt />
      &nbsp;Quand ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const How: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaBusAlt />
      &nbsp;Comment y aller ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

interface HowLongProps {
  title?: string
}
export const HowLong: FunctionComponent<HowLongProps> = ({ children, title = "Combien de temps ?" }) => (
  <>
    <SectionTitle>
      <FaClock />
      &nbsp;{title}
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

interface HowMuchProps {
  title?: string
  PriceSign?: React.ComponentType
}
export const HowMuch: FunctionComponent<HowMuchProps> = ({ children, title = "Prix ?", PriceSign = FaEuroSign }) => (
  <>
    <SectionTitle>
      <PriceSign />
      &nbsp;{title}
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

interface WhereToStayProps {
  location?: string
}
export const WhereToStay: FunctionComponent<WhereToStayProps> = ({ children, location }) => (
  <>
    <SectionTitle>
      <FaBed />
      &nbsp;Où dormir {location ? location + " " : ""}?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)
interface WhatTimeOfYearProps {
  title?: string
}
export const WhatTimeOfYear: FunctionComponent<WhatTimeOfYearProps> = ({ children, title = "A quelle période ?" }) => (
  <>
    <SectionTitle>
      <FaCloudSun />
      &nbsp;{title}
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

interface WhereToHaveProps {
  location: string
}
export const WhereToHave: FunctionComponent<WhereToHaveProps> = ({ children, location }) => (
  <>
    <SectionTitle>
      <FaUtensils />
      &nbsp;Où manger {location} ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const Visit: FunctionComponent<HTMLAttributes<any> & { title?: string }> = ({
  children,
  className = "",
  title = "La visite",
}) => (
  <>
    <SectionTitle>
      <FaWalking />
      &nbsp;{title}
    </SectionTitle>
    <SectionContent className={className}>{children}</SectionContent>
  </>
)

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
  <h4 className="tl normal center pb2 mb0" css={homeSubSectionStyle}>
    {children}
  </h4>
)

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
  FaYenSign,
} from "react-icons/all"

export const SectionTitle: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h4 className={`mb1 flex ${className}`}>{children}</h4>
)
export const SectionContent: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  const size = React.Children.count(children)
  return (
    <div
      className={`f5 content ${className}`}
      css={css`
        line-height: 1.5em;
        margin-bottom: 1.45rem;
      `}
    >
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
}
export const HowMuch: FunctionComponent<HowMuchProps> = ({ children, title = "Prix ?" }) => (
  <>
    <SectionTitle>
      <FaYenSign />
      &nbsp;{title}
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

interface WhereToStayProps {
  location: string
}
export const WhereToStay: FunctionComponent<WhereToStayProps> = ({ children, location }) => (
  <>
    <SectionTitle>
      <FaBed />
      &nbsp;Où dormir {location} ?
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

const visitStyle = css`
  &.content div:last-of-type .gatsby-image-wrapper {
    margin-bottom: 0;
  }
`
export const Visit: FunctionComponent<HTMLAttributes<any>> = ({ children, className = "" }) => (
  <>
    <SectionTitle>
      <FaWalking />
      &nbsp;La visite
    </SectionTitle>
    <SectionContent css={visitStyle} className={className}>
      {children}
    </SectionContent>
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

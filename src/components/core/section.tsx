import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"
import {
  FaBed,
  FaBusAlt,
  FaCalendarAlt,
  FaClock,
  FaLightbulb,
  FaMapMarkedAlt,
  FaUtensils,
  FaWalking,
  FaYenSign,
} from "react-icons/all"

export const SectionTitle: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h4 className={`mb0 flex ${className}`}>{children}</h4>
)
export const SectionContent: FunctionComponent = ({ children }) => {
  const size = React.Children.count(children)
  return (
    <div
      className="f5"
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

export const Where: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaMapMarkedAlt />
      &nbsp;Où ?
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

export const HowLong: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaClock />
      &nbsp;Combien de temps ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const HowMuch: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaYenSign />
      &nbsp;Prix ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const WhereToStay: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaBed />
      &nbsp;Où dormir à Himeji ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const WhereToHave: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaUtensils />
      &nbsp;Où manger à Himeji ?
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
  </>
)

export const Visit: FunctionComponent = ({ children }) => (
  <>
    <SectionTitle>
      <FaWalking />
      &nbsp;La visite
    </SectionTitle>
    <SectionContent>{children}</SectionContent>
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

import React, { FunctionComponent, useContext } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { ApplicationLink } from "./core/links/link"
import { getLink } from "./core/links/links"
import { ApplicationContext } from "./application"
import { Divider } from "./core/divider"
import { backgroundPrimaryColor, primaryColor } from "./core/variables"

interface CardProps {
  title?: string
  className?: string
  to: string
}

const cardPublishedStyle = css`
  transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;
  &:hover {
    box-shadow: 0 17px 25px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 576px) {
    background-color: ${backgroundPrimaryColor};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    padding-top: 4px;
  }
`
const cardStyle = css`
  .gatsby-image-wrapper {
    margin-bottom: 0px;
  }
  .country {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${primaryColor};
  }
  .title {
    font-size: 0.9rem;
    text-align: center;
    text-transform: uppercase;
  }
`
const StyledDivider = styled(Divider)`
  background-color: black;
  margin-bottom: 0;
  margin-top: auto;
  width: 40px;
`
export const Card: FunctionComponent<CardProps & { country: string }> = ({
  children,
  title,
  className,
  to,
  country,
}) => {
  if (!children) {
    throw new Error("Error in Card component")
  }
  const { published } = getLink(to)
  const context = useContext(ApplicationContext)

  return (
    <ApplicationLink
      to={to}
      className={`pa3 pt0 mt3 mb3 ${className}`}
      css={[cardStyle, context.development || published ? cardPublishedStyle : null]}
    >
      <div className="image mb3">{children}</div>
      <div className="country mb2">{country}</div>
      <div className="title mb3">{title}</div>
      <StyledDivider />
    </ApplicationLink>
  )
}

export const JapanCard = styled(Card)``

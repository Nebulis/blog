import React, { FunctionComponent, useContext } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { japanPrimaryColor } from "./core/japan.variables"
import { ApplicationLink } from "./core/links/link"
import { getLink } from "./core/links/links"
import { ApplicationContext } from "./application"

interface CardProps {
  title?: string
  className?: string
  to: string
}

const cardPublishedStyle = css`
  transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;
  &:hover {
    box-shadow: 0 17px 25px rgba(0, 0, 0, 0.5);
    transform: translateY(4px);
    padding-top: 4px;
  }

  @media (max-width: 576px) {
    background-color: whitesmoke;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    padding-top: 4px;
  }
`
const cardStyle = css`
  display: block;

  h4,
  h5 {
    margin-bottom: 0;
  }

  h4 {
    font-family: "Playfair Display", serif;
  }
  .gatsby-image-wrapper {
    margin-bottom: 0px;
  }
  .next {
    text-decoration: underline;
  }
  .published-date {
    font-size: 0.8rem;
    font-weight: normal;
    opacity: 0.7;
  }
`
export const Card: FunctionComponent<CardProps> = ({ children, title, className, to }) => {
  if (!children) {
    throw new Error("Error in Card component")
  }
  const { publishedDate, published } = getLink(to)
  const context = useContext(ApplicationContext)

  return (
    <ApplicationLink
      to={to}
      className={`pa3 pt0 mt3 mb3 ${className}`}
      css={[cardStyle, context.development || published ? cardPublishedStyle : null]}
    >
      <h4 className="normal tc i b">{title}</h4>
      <div className="published-date tc mt1">
        Publié le{" "}
        {publishedDate instanceof Date
          ? publishedDate.toLocaleString("fr-FR", {
              month: "numeric",
              year: "numeric",
              day: "numeric",
            })
          : "03/01/2010"}
      </div>
      <div className="image mb3">{Array.isArray(children) ? children[0] : children}</div>
      {Array.isArray(children) && React.isValidElement(children[1])
        ? React.cloneElement(children[1], { className: `${children[1].props.className || ""} text` })
        : null}
    </ApplicationLink>
  )
}

export const JapanCard = styled(Card)`
  .next {
    color: ${japanPrimaryColor};
  }
  blockquote {
    margin-bottom: 0.5rem;
  }
`

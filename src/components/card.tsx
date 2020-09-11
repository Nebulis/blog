import React, { FunctionComponent, useContext } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { ApplicationLink, DevelopmentMark } from "./core/links/link"
import { getLink, getLinkLabel, getLinkUrl } from "./core/links/links.configuration" // TODO this causes a cycle
import { ApplicationContext } from "./application"
import { Divider } from "./core/divider"
import { backgroundPrimaryColor, mediumEnd, primaryColor, primaryDarkColor } from "./core/variables"
import { navigate } from "gatsby"

interface CardProps {
  title?: string
  className?: string
  to: string
}

const cardPublishedStyle = css`
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;
  &:hover {
    box-shadow: 0 17px 25px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${mediumEnd}) {
    background-color: ${backgroundPrimaryColor};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    padding-top: 4px;
  }
`
const cardStyle = css`
  display: flex;
  flex-direction: column;
  .gatsby-image-wrapper {
    margin-bottom: 0px;
  }
  .tags {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${primaryColor};
    color: black;
  }
  .title {
    font-size: 0.9rem;
    text-align: center;
    text-transform: uppercase;
  }
  .tags a {
    color: ${primaryColor};
    text-decoration: none;
  }
  .tags a:hover {
    border-bottom: 1px solid ${primaryDarkColor};
  }
  .date {
    font-size: 0.8rem;
    font-weight: normal;
    opacity: 0.7;
    text-align: center;
    margin-top: auto;
  }
`
const StyledDivider = styled(Divider)`
  background-color: black;
  margin-bottom: 0;
  width: 40px;
`
export const Card: FunctionComponent<CardProps & { tags: string[] }> = ({ children, title, className, to, tags }) => {
  if (!children) {
    throw new Error("Error in Card component")
  }
  const link = getLink(to)
  const context = useContext(ApplicationContext)
  if (!link) {
    throw new Error(`No link for ${to}`)
  }

  return (
    <span
      onClick={() => navigate(getLinkUrl(to))}
      className={`pa3 mt3 mb3 ${className} card relative`}
      css={[cardStyle, context.development || link.published ? cardPublishedStyle : null]}
    >
      {context.development && !link.published ? <DevelopmentMark /> : null}
      <div className="image mb3">{children}</div>
      <div className="tags mb2">
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={(event) => {
              event.stopPropagation()
            }}
          >
            <ApplicationLink to={tag}>{getLinkLabel(tag)}</ApplicationLink>
            {index < tags.length - 1 ? <>&nbsp;|&nbsp;</> : ""}
          </span>
        ))}
      </div>
      <div className="title mb3">{title}</div>
      <div className="date mb2">
        Publié le{" "}
        {link.publishedDate instanceof Date
          ? link.publishedDate.toLocaleString("fr-FR", {
              month: "numeric",
              year: "numeric",
              day: "numeric",
            })
          : "03/01/2010"}
      </div>
      <StyledDivider />
    </span>
  )
}

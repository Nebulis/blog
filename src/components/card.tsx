import React, { FunctionComponent, useContext } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { ApplicationLink, DevelopmentMark } from "./core/links/link"
import { getLink, getLinkLabel, getLinkUrl } from "./core/links/links.utils"
import { ApplicationContext } from "./application"
import { Divider } from "./core/divider"
import { backgroundPrimaryColor, mediumEnd, primaryColor, primaryDarkColor } from "./core/variables"
import { navigate } from "gatsby"
import { useCustomTranslation } from "../i18n-hook"

interface CardProps {
  title?: string
  className?: string
  to: string
}

const cardPublishedStyle = css`
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease;
  &:hover,
  &:focus {
    box-shadow: 0 17px 25px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${mediumEnd}) {
    background-color: ${backgroundPrimaryColor};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
`
const cardStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 40px);
  &:active,
  &:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }

  .tags {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${primaryColor};
    color: black;
  }
  .title,
  .show-more {
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
  .card-image-link {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: 0.7rem; // a bit bigger than text padding because it looks closer
  }
`
const StyledDivider = styled(Divider)`
  background-color: black;
  margin-bottom: 0;
  width: 40px;
`
export const Card: FunctionComponent<
  CardProps & { tags?: string[]; showTags?: boolean; showPublished?: boolean; showMore?: boolean; imageOnly?: boolean }
> = ({
  children,
  title,
  className,
  to,
  tags,
  showTags = true,
  showPublished = true,
  showMore = false,
  imageOnly = false,
}) => {
  if (!children) {
    throw new Error("Error in Card component")
  }
  const link = getLink(to)
  const context = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation("common")
  if (!link) {
    throw new Error(`No link for ${to}`)
  }
  const mustShowAndInteract = context.development || link.published
  const tagsToDisplay = (tags || link.tags).filter((tag) => context.development || getLink(tag).published)

  if (imageOnly) return <>{children}</>

  return (
    <span
      onAuxClick={(event) => {
        // TODO safari
        // when clicking with the middle button, open the link into a new tab
        if (event.button === 1) {
          window.open(window.location.origin + getLinkUrl(i18n.languageCode)(to))
        }
      }}
      onClick={(event) => {
        if (!mustShowAndInteract) return
        // if ctrl is pressed, must open the link into a new tab
        if (event.ctrlKey) {
          window.open(window.location.origin + getLinkUrl(i18n.languageCode)(to))
        } else {
          navigate(getLinkUrl(i18n.languageCode)(to))
        }
      }}
      onKeyUp={(event) => {
        if (!mustShowAndInteract) return
        if (event.key === "Enter") {
          navigate(getLinkUrl(i18n.languageCode)(to))
        }
      }}
      className={`pa3 ${className} card relative`}
      css={[cardStyle, mustShowAndInteract ? cardPublishedStyle : null]}
      tabIndex={0}
      role="link"
    >
      {context.development && !link.published ? <DevelopmentMark /> : null}
      <ApplicationLink
        showDevelopmentMark={false}
        to={to}
        onClick={(event) => {
          event.stopPropagation()
        }}
        onAuxClick={(event) => {
          event.stopPropagation()
        }}
        className="card-image-link"
      >
        {children}
      </ApplicationLink>
      {showTags && (
        <div className="tags pb2">
          {tagsToDisplay.map((tag, index) => (
            <span
              key={index}
              onClick={(event) => {
                event.stopPropagation()
              }}
            >
              <ApplicationLink to={tag}>{getLinkLabel(i18n.languageCode)(tag)}</ApplicationLink>
              {index < tagsToDisplay.length - 1 ? <>&nbsp;|&nbsp;</> : ""}
            </span>
          ))}
        </div>
      )}
      <ApplicationLink
        showDevelopmentMark={false}
        to={to}
        onClick={(event) => {
          event.stopPropagation()
        }}
        onAuxClick={(event) => {
          event.stopPropagation()
        }}
      >
        <div className={`title pb2 ${mustShowAndInteract ? "published" : ""}`} title={title}>
          {title}
        </div>
        {mustShowAndInteract && showMore && <div className="show-more pb2">{t("show-more")}</div>}
        {showPublished && (
          <div className="date pb2">
            {t("published")}{" "}
            {link.publishedDate instanceof Date
              ? link.publishedDate.toLocaleString("fr-FR", {
                  month: "numeric",
                  year: "numeric",
                  day: "numeric",
                })
              : "03/01/2010"}
          </div>
        )}
        <StyledDivider />
      </ApplicationLink>
    </span>
  )
}

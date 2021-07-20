import React, { FunctionComponent } from "react"
import { css } from "@emotion/react"
import { getLink, getLinkLabel } from "./links/links.utils"
import { ApplicationLink } from "./links/link"
import { useCustomTranslation } from "../../i18n-hook"
import styled from "@emotion/styled"
import { primaryColor } from "./variables"

interface TitleProps {
  title: string
  linkId: string
  categories?: string[]
  className?: string
}
const titleStyle = css`
  margin-bottom: 1.45rem;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-family: Roboto, sans-serif;
  font-size: 0.85028rem;
  line-height: 1.3;
  .published-date {
    font-size: 0.8rem;
    font-weight: normal;
    opacity: 0.7;
  }
  a {
    border-radius: 3px;
    color: white;
    background-color: ${primaryColor};
    padding: 0 2px;
    text-decoration: none;
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px ${primaryColor};
  }
`
export const Title: FunctionComponent<TitleProps> = ({ title, categories, className, linkId }) => {
  const { publishedDate, tags } = getLink(linkId)
  const { t, i18n } = useCustomTranslation("common")
  const computedCategories = categories || tags
  console.log(getLink(linkId))
  return (
    <>
      <h1 className={`tc mb1 ${className}`}>{title}</h1>
      <div className={`tc flex flex-wrap items-end justify-center ${className}`} css={titleStyle}>
        <span className="published-date">
          {t("published")}{" "}
          {publishedDate instanceof Date
            ? publishedDate.toLocaleString("fr-FR", {
                month: "numeric",
                year: "numeric",
                day: "numeric",
              })
            : "03/01/2010"}
        </span>
        &nbsp;
        <span>{t("in")}</span>
        &nbsp;
        {computedCategories.map((c, index) => (
          <React.Fragment key={index}>
            {index > 0 ? <>&nbsp;</> : ""}
            <ApplicationLink className="title-tag" action="hide" to={c}>
              {getLinkLabel(i18n.languageCode)(c)}
            </ApplicationLink>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export const PrepareSubTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

export const FakeList = styled.p`
  display: list-item;
  margin-left: 1rem; // ml3
  margin-bottom: 0.5rem; // mb2
`

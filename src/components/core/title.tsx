import React, { FunctionComponent } from "react"
import { css } from "@emotion/core"
import { getLink, getLinkLabel } from "./links/links.utils"
import { ApplicationLink } from "./links/link"
import { useCustomTranslation } from "../../i18n"

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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
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
    padding: 0 2px;
    text-decoration: none;
  }
`
export const Title: FunctionComponent<TitleProps> = ({ title, categories, className, linkId }) => {
  const { publishedDate, tags } = getLink(linkId)
  const { t, i18n } = useCustomTranslation("common")
  const computedCategories = categories || tags
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
            <ApplicationLink to={c}>{getLinkLabel(i18n.languageCode)(c)}</ApplicationLink>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

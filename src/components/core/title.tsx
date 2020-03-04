import React, { FunctionComponent } from "react"
import { css } from "@emotion/core"
import { getLink, getLinkLabel } from "./links/links.configuration"
import { ApplicationLink } from "./links/link"

interface TitleProps {
  title: string
  linkId: string
  categories: string[]
  className?: string
}
export const Title: FunctionComponent<TitleProps> = ({ title, categories, className, linkId }) => {
  const { publishedDate } = getLink(linkId)
  return (
    <>
      <h1 className={`tc mb1 ${className}`}>{title}</h1>
      <div
        className={`tc ${className}`}
        css={css`
          margin-bottom: 1.45rem;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          font-size: 0.85028rem;
          line-height: 1.1;
          .published-date {
            font-size: 0.8rem;
            font-weight: normal;
            opacity: 0.7;
          }
        `}
      >
        <span className="published-date">
          Publié le{" "}
          {publishedDate instanceof Date
            ? publishedDate.toLocaleString("fr-FR", {
                month: "numeric",
                year: "numeric",
                day: "numeric",
              })
            : "03/01/2010"}
        </span>{" "}
        dans{" "}
        {categories.map((c, index) => (
          <React.Fragment key={index}>
            {index > 0 ? " " : ""}
            <ApplicationLink to={c}>{getLinkLabel(c)}</ApplicationLink>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

import React, { FunctionComponent } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { japanPrimaryColor } from "./core/japan.variables"
import { ApplicationLink } from "./core/links/link"

interface CardProps {
  title?: string
  className?: string
  to: string
}

export const Card: FunctionComponent<CardProps> = ({ children, title, className, to }) => {
  if (!children || !Array.isArray(children) || children.length < 2 || !React.isValidElement(children[1]))
    throw new Error("I need 2 children")
  return (
    <div
      className={`pa3 pt0 mt3 mb3 ${className}`}
      css={css`
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
      `}
    >
      <h4 className="normal tc i b">{title}</h4>
      <div className="image mb3">{children[0]}</div>
      {React.cloneElement(children[1], { className: `${children[1].props.className || ""} text` })}
      <h5 className="normal tc ttu next">
        <ApplicationLink to={to} action="hide">
          En savoir plus
        </ApplicationLink>
      </h5>
    </div>
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
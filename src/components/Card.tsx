import React, { FunctionComponent } from "react"
import { css } from "@emotion/core"

interface CardProps {
  title?: string
}

export const Card: FunctionComponent<CardProps> = ({ children, title }) => {
  if (!children || !Array.isArray(children) || children.length < 2 || !React.isValidElement(children[1]))
    throw new Error("I need 2 children")
  return (
    <div
      className="pa3 mt3 mb3"
      css={css`
        border: 2px solid lightgrey;
        border-radius: 5px;
        &:hover {
          border: 2px solid #ffb7c5;
        }

        .container {
          &:first-child {
            flex-basis: 60%;
          }
          .image {
            flex-basis: 60%;
          }
          .text {
            flex-basis: 40%;
            padding-left: 1rem;
          }

          @media (max-width: 768px) {
            flex-direction: column;
            .text {
              padding-left: 0;
              padding-top: 1rem;
            }
          }
        }

        .gatsby-image-wrapper {
          margin-bottom: 0px;
        }
      `}
    >
      <div>
        <h4 className="normal tc">{title}</h4>
      </div>
      <div className="container flex align-center">
        <div className="image">{children[0]}</div>
        {React.cloneElement(children[1], { className: `${children[1].props.className || ""} text` })}
      </div>
    </div>
  )
}

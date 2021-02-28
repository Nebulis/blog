import { FunctionComponent } from "react"
import * as React from "react"
import { css } from "@emotion/react"

export const Conclusion: FunctionComponent = ({ children }) => (
  <div
    className="f5 tc fw6"
    css={css`
      line-height: 1.5em;
      font-family: "Playfair Display", serif;
      margin-bottom: 1.45rem;
      ul,
      li {
        margin-left: 0;
        list-style-type: none;
      }
    `}
  >
    {children}
  </div>
)

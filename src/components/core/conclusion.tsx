import { FunctionComponent } from "react"
import * as React from "react"
import { css } from "@emotion/core"

export const Conclusion: FunctionComponent = ({ children }) => (
  <div
    className="f5 tc fw6 pb4"
    css={css`
      line-height: 1.5em;
      font-family: "Playfair Display", serif;
    `}
  >
    {children}
  </div>
)

import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"

const style = css`
  font-family: "Playfair Display", serif;
  font-size: 1.38316rem; // like h3
`
export const City: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h2 className={`normal tc ${className} ttu`} css={style}>
    {children}
  </h2>
)

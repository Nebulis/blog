import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"

const style = css`
  font-family: "Playfair Display", serif;
`
export const City: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h3 className={`normal tc ${className} ttu`} css={style}>
    {children}
  </h3>
)

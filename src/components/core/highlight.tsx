import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { japanPrimaryColor } from "./japan"

const style = css`
  font-family: "Playfair Display", serif;
`
export const City: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h3 className={`normal tc ${className} ttu`} css={style}>
    {children}
  </h3>
)
export const JapanCity = styled(City)`
  color: ${japanPrimaryColor};
`

export const Highlight: FunctionComponent = styled(City)`
  color: black;
`

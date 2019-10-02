import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import styled from "@emotion/styled"

export const City: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h2 className={`normal tc ${className} ttu`}>{children}</h2>
)
export const JapanCity = styled(City)`
  color: #b8566a;
`

export const Highlight: FunctionComponent = styled(City)`
  color: black;
`

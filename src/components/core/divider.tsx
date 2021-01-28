import styled from "@emotion/styled"
import { primaryColor } from "./variables"
import React, { FunctionComponent, BaseHTMLAttributes } from "react"

const Hr: FunctionComponent<BaseHTMLAttributes<any>> = ({ className, ...props }) => (
  <hr className={`divider ${className}`} {...props} />
)
export const Divider = styled(Hr)`
  color: black;
  height: 2px;
  width: 72px;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
`

export const PrimaryDivider = styled(Divider)`
  color: ${primaryColor};
  background-color: ${primaryColor};
`

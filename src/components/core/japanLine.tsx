import css from "@emotion/css"
import React, { FunctionComponent, HTMLAttributes } from "react"
import { ExternalLink } from "./link"

let japanLineStyle = css`
  padding: 2px 5px;
  font-size: 0.9rem;
  font-weight: bold;
`
interface JapanLineProps {
  href: string
}
export const JapanLine: FunctionComponent<HTMLAttributes<any> & JapanLineProps> = ({ children, className, href }) => (
  <ExternalLink href={href} noIcon>
    <span className={className} css={japanLineStyle}>
      {children}
    </span>
  </ExternalLink>
)

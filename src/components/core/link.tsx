import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/all"
import { css } from "@emotion/core"
import React, { AnchorHTMLAttributes, FunctionComponent } from "react"

export const ExternalLink: FunctionComponent<AnchorHTMLAttributes<any>> = ({ children, ...rest }) => (
  <a
    {...rest}
    target="_blank"
    rel="noopener noreferrer"
    css={css`
      font-weight: bold;
      svg {
        vertical-align: middle;
      }
    `}
  >
    {children} <FaExternalLinkAlt size={14} />
  </a>
)

export const JapanLink = styled(Link)`
  color: #b8566a;
  &:visited {
    color: #b8566a;
  }
`
export const JapanExternalLink = styled(ExternalLink)`
  color: #b8566a;
  &:visited {
    color: #b8566a;
  }
`

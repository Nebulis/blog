import styled from "@emotion/styled"
import { GatsbyLinkProps, Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/all"
import { css } from "@emotion/core"
import React, { AnchorHTMLAttributes, ComponentType, FunctionComponent } from "react"
import { japanPrimaryColor } from "../japan.variables"
import { cachedLinks, getLinkUrl } from "./links"

interface ExternalLinkProps {
  noIcon?: boolean
}
const style = css`
  font-size: 0.9rem;
  svg {
    vertical-align: middle;
    font-size: 0.6rem;
  }
`
export const ExternalLink: FunctionComponent<AnchorHTMLAttributes<any> & ExternalLinkProps> = ({
  children,
  noIcon = true,
  ...rest
}) => (
  <a {...rest} target="_blank" rel="noopener noreferrer" css={style}>
    {children}
    {noIcon ? null : (
      <>
        {" "}
        <FaExternalLinkAlt />
      </>
    )}
  </a>
)
// ignore ref property, typing issue
type LinkProps = Omit<GatsbyLinkProps<any>, "ref"> & { action?: "hide" | "no-link" }
const linkBuilder: (ApplicationLink: ComponentType<LinkProps>) => FunctionComponent<LinkProps> = (
  ApplicationLink: ComponentType<LinkProps>
) =>
  function LinkIfActive({ children, to, action = "no-link", ...props }) {
    const link = cachedLinks.get(to)
    if (!link) {
      throw new Error(`No link for ${to}`)
    }
    return link.published ? (
      <ApplicationLink to={getLinkUrl(to)} {...props}>
        {children}
      </ApplicationLink>
    ) : action === "no-link" ? (
      <>{children}</>
    ) : null
  }

export const ApplicationLink = linkBuilder(Link)

export const JapanLink = linkBuilder(styled(Link)`
  color: ${japanPrimaryColor};
  &:visited {
    color: ${japanPrimaryColor};
  }
`)
export const JapanExternalLink = styled(ExternalLink)`
  color: ${japanPrimaryColor};
  &:visited {
    color: ${japanPrimaryColor};
  }
`

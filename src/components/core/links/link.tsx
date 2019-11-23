import styled from "@emotion/styled"
import { GatsbyLinkProps, Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/all"
import { css } from "@emotion/core"
import React, { AnchorHTMLAttributes, ComponentType, FunctionComponent, useContext } from "react"
import { japanPrimaryColor } from "../japan.variables"
import { getLink, getLinkUrl } from "./links"
import { ApplicationContext } from "../../application"

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
  function LinkIfActive({ children, to, action = "no-link", className, ...props }) {
    const context = useContext(ApplicationContext)
    const link = getLink(to)
    if (!link) {
      throw new Error(`No link for ${to}`)
    }
    return context.development || link.published ? (
      <ApplicationLink to={getLinkUrl(to)} {...props} className={`relative ${className}`}>
        {children}
        {!link.published ? <DevelopmentMark /> : null}
      </ApplicationLink>
    ) : action === "no-link" ? (
      <div className={className}>{children}</div>
    ) : null
  }
const developmentMarkStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-top: 15px solid #e28de5;
`
const DevelopmentMark = () => <span css={developmentMarkStyle} />

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

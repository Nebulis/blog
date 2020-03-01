import styled from "@emotion/styled"
import { GatsbyLinkProps, Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/all"
import { css } from "@emotion/core"
import React, { AnchorHTMLAttributes, ComponentType, FunctionComponent, useContext } from "react"
import { japanPrimaryColor } from "../japan.variables"
import { getLink, getLinkUrl } from "./links"
import { ApplicationContext } from "../../application"
import { primaryColor, primaryDarkColor, primaryDarkColor15Darker } from "../variables"

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
  function LinkIfActive({ children, to, action = "no-link", className = "", ...props }) {
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
const DevelopmentMark = () => <span css={developmentMarkStyle} className="development-mark" />

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

const BaseButtonLink = styled(ApplicationLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s linear;
  &:not(.inactive):hover {
    transition: all 0.2s linear;
  }
`

export const ButtonLink = styled(BaseButtonLink)`
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  &:visited {
    color: ${primaryColor};
  }
  &:not(.inactive):hover {
    transition: all 0.2s linear;
    background-color: ${primaryColor};
    color: white;
  }
`
export const PrimaryDarkButtonLink = styled(BaseButtonLink)`
  background-color: ${primaryDarkColor};
  border-color: ${primaryDarkColor};
  color: #fff;
  &:visited {
    color: #fff;
  }
  &:not(.inactive):hover {
    background-color: ${primaryDarkColor15Darker};
    border-color: ${primaryDarkColor15Darker};
  }
`

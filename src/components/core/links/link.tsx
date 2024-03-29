import styled from "@emotion/styled"
import { GatsbyLinkProps, Link } from "gatsby"
import { FaExternalLinkAlt } from "react-icons/fa"
import { css } from "@emotion/react"
import React, { AnchorHTMLAttributes, ComponentType, FunctionComponent, useContext } from "react"
import { getLink, getLinkUrl } from "./links.utils"
import { ApplicationContext } from "../../application"
import { primaryColor, primaryDarkColor, primaryDarkColor15Darker } from "../variables"
import { useCustomTranslation } from "../../../i18n-hook"

interface ExternalLinkProps {
  noIcon?: boolean
  underline?: boolean
}
const style = css`
  svg {
    vertical-align: middle;
    font-size: 0.6rem;
  }
`
export const ExternalLink: FunctionComponent<AnchorHTMLAttributes<any> & ExternalLinkProps> = ({
  className,
  children,
  noIcon = true,
  underline = true,
  ...rest
}) => (
  <a
    {...rest}
    target="_blank"
    rel="noopener noreferrer"
    css={style}
    className={`${className} ${underline ? "underline" : ""}`}
  >
    {children}
    {noIcon ? null : (
      <>
        {" "}
        <FaExternalLinkAlt />
      </>
    )}
  </a>
)

export const ExternalLinkNotUnderlined = styled(ExternalLink)`
  text-decoration: none;
`
// ignore ref property, typing issue
type LinkProps = Omit<GatsbyLinkProps<any>, "ref"> & { action?: "hide" | "no-link"; showDevelopmentMark?: boolean }
export const linkBuilder: (ApplicationLink: ComponentType<LinkProps>) => FunctionComponent<LinkProps> = (
  ApplicationLink: ComponentType<LinkProps>
) =>
  function LinkIfActive({ children, to, action = "no-link", className = "", showDevelopmentMark = true, ...props }) {
    const context = useContext(ApplicationContext)
    const { i18n } = useCustomTranslation()
    // sometimes we need to provide extra parameters, get rid of them to find the page
    const page = to.split("?")[0]
    const search = to.split("?")[1]
    const link = getLink(page)
    if (!link) {
      throw new Error(`No link for ${page}`)
    }
    return context.development || link.published ? (
      <ApplicationLink
        to={`${getLinkUrl(i18n.languageCode)(page)}${search ? `?${search}` : ""}`}
        {...props}
        className={`relative ${className}`}
      >
        {children}
        {!link.published && showDevelopmentMark ? <DevelopmentMark /> : null}
      </ApplicationLink>
    ) : action === "no-link" ? (
      <span className={className}>{children}</span>
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
  pointer-events: none;
`
export const DevelopmentMark = () => <span css={developmentMarkStyle} className="development-mark" />

export const ApplicationLink = linkBuilder(Link)
export const PrimaryApplicationLink = styled(ApplicationLink)`
  color: ${primaryColor};
  &:visited {
    color: ${primaryColor};
  }
`

const BaseButtonLink = styled(ApplicationLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s linear;
  &:not(.inactive):hover {
    transition: all 0.2s linear;
  }
`

export const ButtonLink = styled(BaseButtonLink)`
  border: 2px solid ${primaryColor};
  background-color: ${primaryColor};
  color: white;
  &:visited {
    color: white;
  }
  &:not(.inactive):hover {
    transition: all 0.2s linear;
    color: ${primaryColor};
    background-color: white;
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

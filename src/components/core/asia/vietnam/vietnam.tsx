import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { vietnamPrimaryColor, vietnamPrimaryColorDarker } from "./vietnam.colors"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { ImageAsMedallion, TitleImage } from "../../../images/layout"
import { drawHat } from "./console-draw-hat"
import { ButtonLink, ExternalLink, linkBuilder } from "../../links/link"
import { Link } from "gatsby"
import { City } from "../../highlight"
import hat from "../../../../images/asia/vietnam/hat.svg"
import { css } from "@emotion/core"

const vietnamPartStyle = css`
  color: ${vietnamPrimaryColorDarker};
`
export const VietnamHeadline: FunctionComponent = ({ children }) => (
  <City css={vietnamPartStyle}>
    <TitleImage src={hat} alt="hat" /> {children} <TitleImage src={hat} alt="hat" />
  </City>
)

const drawer = withDraw(drawHat)

const vietnamLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${vietnamPrimaryColor};
  }
  
  a.title-tag {
    background-color: ${vietnamPrimaryColorDarker};
  }
  a.title-tag:hover {
    box-shadow: 0px 0px 2px 1px ${vietnamPrimaryColorDarker};
  }
  
  .quote::before {
    color: ${vietnamPrimaryColor};
  }

  footer a {
    color: ${vietnamPrimaryColor};
  }
  button.btn,
  button.btn:disabled,
  button.btn:hover {
    background-color: ${vietnamPrimaryColorDarker};
    border-color: ${vietnamPrimaryColorDarker};
    color: white;
  }
  .divider {
    background-color: ${vietnamPrimaryColor};
  }
  
  .comments .active svg {
    color: ${vietnamPrimaryColor};
  }
  .comments .form-control:focus
   {
    box-shadow: 0 0 0 0.2rem rgb(255, 217, 102, 0.25);
    border-color: ${vietnamPrimaryColor}
  }
  .menu-entry {
    border-top: 1px solid ${vietnamPrimaryColor}!important;
  }
`
export const IndexVietnamBlogLayout = drawer(styled(IndexBlogLayout)`
  ${vietnamLayout}
`)
export const VietnamBlogLayout = drawer(styled(BlogLayout)`
  ${vietnamLayout}
`)

// the color has been picked from the hat images and is not derived from the primary color or other
export const VietnamImageAsMedallion = styled(ImageAsMedallion)`
  &.mobile,
  &:hover {
    border: 6px solid #f8c471;
  }
`
export const VietnamLink = linkBuilder(styled(Link)`
  color: ${vietnamPrimaryColorDarker};
  font-weight: bold;
  &:visited {
    color: ${vietnamPrimaryColorDarker};
  }
  text-decoration: underline;
`)

export const VietnamExternalLink = styled(ExternalLink)`
  color: ${vietnamPrimaryColorDarker};
  font-weight: bold;
  &:visited {
    color: ${vietnamPrimaryColorDarker};
  }
`

// #d8a200 is vietnamPrimaryColorDarker lighten by 10%
export const VietnamButtonLink = styled(ButtonLink)`
  border: 2px solid #d8a200;
  background-color: #d8a200;
  &:not(.inactive):hover {
    color: #d8a200;
  }
`

import React, { FunctionComponent } from "react"
import { Divider } from "../../divider"
import styled from "@emotion/styled"
import { vietnamPrimaryColor, vietnamPrimaryColorDarker } from "./vietnam.colors"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { ImageAsMedallion } from "../../../images/layout"
import { drawHat } from "./console-draw-hat"
import { Title } from "../../title"
import { Quote } from "../../quote"
import { ButtonLink, ExternalLink, linkBuilder } from "../../links/link"
import { Link } from "gatsby"
import { City } from "../../highlight"
import hat from "../../../../images/asia/vietnam/hat.svg"
import { css } from "@emotion/core"

export const VietnamQuote = styled(Quote)`
  .quote::before {
    color: ${vietnamPrimaryColor};
  }
`
export const CuChoTunnelsQuote = () => (
  <VietnamQuote>
    Immense ensemble de tunnels souterrains atteignant environ 250 km, ils s’étendent de Hô Chi Minh-Ville jusqu&apos;à
    la frontière Cambodgienne.
  </VietnamQuote>
)

const vietnamPartStyle = css`
  color: ${vietnamPrimaryColorDarker};
`
export const VietnamHeadline: FunctionComponent = ({ children }) => (
  <City css={vietnamPartStyle}>
    <img src={hat} alt="hat" style={{ width: "24px" }} /> {children}{" "}
    <img src={hat} alt="hat" style={{ width: "24px" }} />
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

export const VietnamTitle = styled(Title)`
  a {
    border-radius: 3px;
    color: white;
    background-color: ${vietnamPrimaryColorDarker};
    padding: 0 2px;
    text-decoration: none;
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px ${vietnamPrimaryColorDarker};
  }
`

export const VietnamDivider = styled(Divider)`
  background-color: ${vietnamPrimaryColor};
`
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

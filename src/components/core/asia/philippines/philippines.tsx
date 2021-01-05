import { Divider } from "../../divider"
import styled from "@emotion/styled"
import { philippinesPrimaryColor, philippinesPrimaryColorDarker } from "./philippines.colors"
import { ImageAsMedallion } from "../../../images/layout"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { drawSth } from "./console-draw-sth"
import { ButtonLink, ExternalLink } from "../../links/link"
import { Title } from "../../title"
import { Quote } from "../../quote"
import { City } from "../../highlight"
import { css } from "@emotion/core"
import React, { FunctionComponent } from "react"
import philippinesFish from "../../../../images/asia/philippines/fish.svg"

const philippinesPartStyle = css`
  color: ${philippinesPrimaryColor};
`
export const PhilippinesHeadline: FunctionComponent = ({ children }) => (
  <City css={philippinesPartStyle}>
    <img src={philippinesFish} alt="fish icon" style={{ width: "24px" }} /> {children}{" "}
    <img src={philippinesFish} alt="fish icon" style={{ width: "24px" }} />
  </City>
)
export const PhilippinesDivider = styled(Divider)`
  background-color: ${philippinesPrimaryColor};
`
export const PhilippinesImageAsMedallion = styled(ImageAsMedallion)`
  &.mobile,
  &:hover {
    border: 6px solid ${philippinesPrimaryColor};
  }
`

const drawer = withDraw(drawSth)

const philippinesLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${philippinesPrimaryColor};
  }

  footer a {
    color: ${philippinesPrimaryColor};
  }
  button.btn,
  button.btn:disabled,
  button.btn:hover {
    background-color: ${philippinesPrimaryColorDarker};
    border-color: ${philippinesPrimaryColorDarker};
    color: white;
  }

  .menu-entry {
    border-top: 1px solid ${philippinesPrimaryColor}!important;
  }
`
export const IndexPhilippinesBlogLayout = drawer(styled(IndexBlogLayout)`
  ${philippinesLayout}
`)
export const PhilippinesBlogLayout = drawer(styled(BlogLayout)`
  ${philippinesLayout}
`)

export const PhilippinesButtonLink = styled(ButtonLink)`
  border: 2px solid ${philippinesPrimaryColor};
  background-color: ${philippinesPrimaryColor};
  &:not(.inactive):hover {
    color: ${philippinesPrimaryColor};
  }
`

export const PhilippinesTitle = styled(Title)`
  a {
    background-color: ${philippinesPrimaryColor};
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px ${philippinesPrimaryColor};
  }
`

export const PhilippinesQuote = styled(Quote)`
  .quote::before {
    color: ${philippinesPrimaryColor};
  }
`

export const PhilippinesExternalLink = styled(ExternalLink)`
  color: ${philippinesPrimaryColor};
  &:visited {
    color: ${philippinesPrimaryColor};
  }
`

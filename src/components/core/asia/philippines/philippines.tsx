import styled from "@emotion/styled"
import { philippinesPrimaryColor, philippinesPrimaryColorDarker } from "./philippines.colors"
import { ImageAsMedallion } from "../../../images/layout"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { drawSth } from "./console-draw-sth"
import { ButtonLink, ExternalLink, linkBuilder } from "../../links/link"
import { Title } from "../../title"
import { Quote } from "../../quote"
import { Headline } from "../../highlight"
import { css } from "@emotion/react"
import React, { FunctionComponent } from "react"
import philippinesFish from "../../../../images/asia/philippines/fish.svg"
import { Link } from "gatsby"

const philippinesPartStyle = css`
  color: ${philippinesPrimaryColor};
`
export const PhilippinesHeadline: FunctionComponent = ({ children }) => (
  <Headline css={philippinesPartStyle} image={philippinesFish} alt="fish icon">
    {children}
  </Headline>
)
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
  header {
    .menu-entry {
      border-top: 1px solid ${philippinesPrimaryColor}!important;
    }
  }
  .index-blog-layout-content {
    .divider {
      background-color: ${philippinesPrimaryColor};
    }
    button.btn,
    button.btn:disabled,
    button.btn:hover {
      background-color: ${philippinesPrimaryColorDarker};
      border-color: ${philippinesPrimaryColorDarker};
      color: white;
    }
    .comments .active svg {
      color: ${philippinesPrimaryColor};
    }
    .comments .form-control:focus {
      box-shadow: 0 0 0 0.2rem rgb(122, 174, 222, 0.25);
      border-color: ${philippinesPrimaryColor}
    }
  }

  footer {
    a {
      color: ${philippinesPrimaryColor};
    }
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

export const PhilippinesLink = linkBuilder(styled(Link)`
  color: ${philippinesPrimaryColor};
  font-weight: bold;
  &:visited {
    color: ${philippinesPrimaryColor};
  }
  text-decoration: underline;
`)

export const PhilippinesExternalLink = styled(ExternalLink)`
  color: ${philippinesPrimaryColor};
  font-weight: bold;
  &:visited {
    color: ${philippinesPrimaryColor};
  }
`

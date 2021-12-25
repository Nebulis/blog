import bell from "../../images/shared/christmas-bell.png"
import React, { FunctionComponent } from "react"
import { Headline } from "./highlight"
import { css } from "@emotion/react"
import { BlogLayout, IndexBlogLayout } from "../layout/layout"
import styled from "@emotion/styled"

export const christmasPrimaryColor = "#dd3b40" // from the bell
export const christmasPrimaryColorDarker = "#cb2328" // 15% darker

const christmasHeadlineStyle = css`
  color: ${christmasPrimaryColor};
`
export const ChristmasHeadline: FunctionComponent = ({ children }) => (
  <Headline css={christmasHeadlineStyle} image={bell} alt="christmas bell">
    {children}
  </Headline>
)

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${christmasPrimaryColor};
    border-color: ${christmasPrimaryColor};
  }
  button.btn:hover {
    background-color: ${christmasPrimaryColorDarker};
    border-color: ${christmasPrimaryColorDarker};
  }
`
const singaporeLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${christmasPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${christmasPrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${christmasPrimaryColor};
      }
      .title {
        color: ${christmasPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${christmasPrimaryColorDarker};
          svg {
            fill: ${christmasPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${christmasPrimaryColor};
      }
    }
    .all-articles-container a {
      border: 2px solid ${christmasPrimaryColor};
      background-color: ${christmasPrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${christmasPrimaryColor};
      }
    }
    .divider {
      background-color: ${christmasPrimaryColor};
    }
    .quote::before {
      color: ${christmasPrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${christmasPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${christmasPrimaryColor};
      }
    }
    a.title-tag {
      background-color: ${christmasPrimaryColorDarker};
    }
    a.title-tag:hover {
      box-shadow: 0px 0px 2px 1px ${christmasPrimaryColorDarker};
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(76, 111, 139, 0.25);
        border-color: ${christmasPrimaryColor}
      }
      .active svg {
        color: ${christmasPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${christmasPrimaryColor};
    }
  }
`
export const IndexChristmasBlogLayout = styled(IndexBlogLayout)`
  ${singaporeLayout}
`
export const ChristmasBlogLayout = styled(BlogLayout)`
  ${singaporeLayout}
`

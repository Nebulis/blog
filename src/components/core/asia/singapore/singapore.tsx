import styled from "@emotion/styled"
import { BlogLayout, IndexBlogLayout } from "../../../layout/layout"
import { singaporePrimaryColor, singaporePrimaryColorDarker } from "./singapore.variables"
import { WeatherEntry } from "../../../../types/shared"
import { Lang } from "../../links/links.types"
import { Headline } from "../../highlight"
import merlion from "../../../../images/asia/singapore/merlion.svg"
import React, { FunctionComponent } from "react"
import { css } from "@emotion/react"

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${singaporePrimaryColor};
    border-color: ${singaporePrimaryColor};
  }
  button.btn:hover {
    background-color: ${singaporePrimaryColorDarker};
    border-color: ${singaporePrimaryColorDarker};
  }
`
const singaporeLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${singaporePrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${singaporePrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${singaporePrimaryColor};
      }
      .title {
        color: ${singaporePrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${singaporePrimaryColorDarker};
          svg {
            fill: ${singaporePrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${singaporePrimaryColor};
      }
    }
    .all-articles-container a {
      border: 2px solid ${singaporePrimaryColor};
      background-color: ${singaporePrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${singaporePrimaryColor};
      }
    }
    .divider {
      background-color: ${singaporePrimaryColor};
    }
    .quote::before {
      color: ${singaporePrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${singaporePrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${singaporePrimaryColor};
      }
    }
    a.title-tag {
      background-color: ${singaporePrimaryColorDarker};
    }
    a.title-tag:hover {
      box-shadow: 0px 0px 2px 1px ${singaporePrimaryColorDarker};
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(76, 111, 139, 0.25);
        border-color: ${singaporePrimaryColor}
      }
      .active svg {
        color: ${singaporePrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${singaporePrimaryColor};
    }
  }
`
export const IndexSingaporeBlogLayout = styled(IndexBlogLayout)`
  ${singaporeLayout}
`
export const SingaporeBlogLayout = styled(BlogLayout)`
  ${singaporeLayout}
`
const singaporeHeadlineStyle = css`
  color: ${singaporePrimaryColorDarker}; /* darker because it looks too light*/
  img {
    width: 20px;
    height: 20px;
  }
`
export const SingaporeHeadline: FunctionComponent = ({ children }) => (
  <Headline css={singaporeHeadlineStyle} image={merlion} alt="merlion">
    {children}
  </Headline>
)

export const singaporeWeatherEntries = (lang: Lang): WeatherEntry[] => [
  {
    id: "singapore",
    label: lang === "fr" ? "Singapour" : "Singapore",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "shower",
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "shower",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["shower", "hot"],
        temp: 31,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["shower", "hot"],
        temp: 31,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["shower", "hot"],
        temp: 31,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
    ],
  },
]

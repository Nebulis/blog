import styled from "@emotion/styled"
import { philippinesPrimaryColor, philippinesPrimaryColorDarker } from "./philippines.colors"
import { ImageAsMedallion } from "../../../images/layout"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { drawSth } from "./console-draw-sth"
import { ButtonLink } from "../../links/link"
import { Title } from "../../title"
import { Headline } from "../../highlight"
import { css } from "@emotion/react"
import React, { FunctionComponent } from "react"
import philippinesFish from "../../../../images/asia/philippines/fish.svg"
import { WeatherEntry } from "../../../../types/shared"

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

const buttonStyle = `
  button.btn,
  button.btn:disabled,
  button.btn:hover {
    background-color: ${philippinesPrimaryColorDarker};
    border-color: ${philippinesPrimaryColorDarker};
    color: white;
  }
`

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
      border-top: 1px solid ${philippinesPrimaryColor};
    }
  }
  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${philippinesPrimaryColor};
      }
      .title {
        color: ${philippinesPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${philippinesPrimaryColorDarker};
          svg {
            fill: ${philippinesPrimaryColorDarker};
          }
        }
      }
    }
    .all-articles-container {
      ${buttonStyle}
    }
    .booking-card, .get-your-guide-card {
      .information, .photo-container {
        border-color: ${philippinesPrimaryColorDarker}
      }
      .activity {
        background-color: ${philippinesPrimaryColorDarker};
      }
    }
    .quote::before {
      color: ${philippinesPrimaryColor};
    }
    .divider {
      background-color: ${philippinesPrimaryColor};
    }
    .comments .active svg {
      color: ${philippinesPrimaryColor};
    }
    .comments .form-control:focus {
      box-shadow: 0 0 0 0.2rem rgb(122, 174, 222, 0.25);
      border-color: ${philippinesPrimaryColor}
    }
    a.mdx-pseudo-processor-link{
      color: ${philippinesPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${philippinesPrimaryColor};
      }
    }
  }

  footer {
    ${buttonStyle}
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

export const philippinesWeatherEntries = (): WeatherEntry[] => [
  {
    label: "Philippines",
    data: [
      {
        type: "good",
        icon: "sunny",
        alt: "scuba",
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "scuba",
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "jelly-fish"],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["hot", { type: "jelly-fish", position: "alt-top-left" }],
        temp: 31,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["hot", { type: "jelly-fish", position: "alt-top-left" }],
        temp: 31,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet", "jelly-fish", "hot"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba"],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 28,
      },
    ],
  },
]

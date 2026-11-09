import styled from "@emotion/styled"
import { francePrimaryColor, francePrimaryColorDarker } from "./france.colors"
import { ImageAsMedallion } from "../../../images/layout"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { ButtonLink } from "../../links/link"
import { Title } from "../../title"
import { Headline } from "../../highlight"
import { css } from "@emotion/react"
import React, { FunctionComponent } from "react"
import franceIcon from "../../../../images/europe/france/france-icon.svg"
import { WeatherEntry } from "../../../../types/shared"
import { drawFrance } from "./console-draw-france"
import { TFunction } from "i18next"

const francePartStyle = css`
  color: ${francePrimaryColor};
`
export const FranceHeadline: FunctionComponent = ({ children }) => (
  <Headline css={francePartStyle} image={franceIcon} alt="france icon">
    {children}
  </Headline>
)
export const FranceImageAsMedallion = styled(ImageAsMedallion)`
  &.mobile,
  &:hover {
    border: 6px solid ${francePrimaryColor};
  }
`

const drawer = withDraw(drawFrance)

const buttonStyle = `
  button.btn,
  button.btn:disabled,
  button.btn:hover {
    background-color: ${francePrimaryColorDarker};
    border-color: ${francePrimaryColorDarker};
    color: white;
  }
`

const franceLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${francePrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${francePrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${francePrimaryColor};
      }
      .title {
        color: ${francePrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${francePrimaryColorDarker};
          svg {
            fill: ${francePrimaryColorDarker};
          }
        }
      }
    }
    .all-articles-container {
      ${buttonStyle}
    }
    .booking-card, .get-your-guide-card {
      .information, .photo-container {
        border-color: ${francePrimaryColorDarker}
      }
      .activity {
        background-color: ${francePrimaryColorDarker};
      }
    }
    .quote::before {
      color: ${francePrimaryColor};
    }
    .divider {
      background-color: ${francePrimaryColor};
    }
    .comments .active svg {
      color: ${francePrimaryColor};
    }
    .comments .form-control:focus {
      box-shadow: 0 0 0 0.2rem rgb(0, 85, 164, 0.25);
      border-color: ${francePrimaryColor}
    }
    a.mdx-pseudo-processor-link{
      color: ${francePrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${francePrimaryColor};
      }
    }
  }

  footer {
    ${buttonStyle}
    a {
      color: ${francePrimaryColor};
    }
  }
`
export const IndexFranceBlogLayout = styled(IndexBlogLayout)`
  ${franceLayout}
`
export const FranceBlogLayout = styled(BlogLayout)`
  ${franceLayout}
`

export const FranceButtonLink = styled(ButtonLink)`
  border: 2px solid ${francePrimaryColor};
  background-color: ${francePrimaryColor};
  &:not(.inactive):hover {
    color: ${francePrimaryColor};
  }
`

export const FranceTitle = styled(Title)`
  a {
    background-color: ${francePrimaryColor};
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px ${francePrimaryColor};
  }
`

export const franceWeatherEntries = (t: TFunction): WeatherEntry[] => [
  {
    id: "north",
    label: t("common:link.north"),
    data: [
      { type: "fair", icon: "snow", temp: 7, alt: "cold" },
      { type: "fair", icon: "snow", temp: 9, alt: "cold" },
      { type: "fair", icon: "snow", temp: 12, alt: "cold" },
      { type: "fair", icon: "sun-cloud", temp: 15 },
      { type: "good", icon: "sun-cloud", temp: 18 },
      { type: "good", icon: "sun-cloud", temp: 22 },
      { type: "good", icon: "sunny", temp: 24 },
      { type: "good", icon: "sunny", temp: 24 },
      { type: "good", icon: "sunny", temp: 21 },
      { type: "poor", icon: "sun-cloud", temp: 17 },
      { type: "poor", icon: "sun-cloud", temp: 11 },
      { type: "poor", icon: "sun-cloud", temp: 8, alt: "cold" },
    ],
  },
  {
    id: "south",
    label: t("common:link.south"),
    data: [
      { type: "good", icon: "snow", temp: 9, alt: "cold" },
      { type: "good", icon: "snow", temp: 10, alt: "cold" },
      { type: "good", icon: "snow", temp: 13 },
      { type: "fair", icon: "sun-cloud", temp: 16 },
      { type: "good", icon: "sun-cloud", temp: 20 },
      { type: "good", icon: "sunny", temp: 25 },
      { type: "fair", icon: "sunny", temp: 28, alt: "hot" },
      { type: "fair", icon: "sunny", temp: 28, alt: "hot" },
      { type: "good", icon: "sunny", temp: 24 },
      { type: "fair", icon: "sun-rain", temp: 19 },
      { type: "poor", icon: "sun-cloud", temp: 13 },
      { type: "poor", icon: "sun-cloud", temp: 9, alt: "cold" },
    ],
  },
  {
    id: "corsica",
    label: t("common:country.france.region.corsica.title"),
    data: [
      { type: "poor", icon: "sun-rain", temp: 10, alt: "cold" },
      { type: "poor", icon: "sun-cloud", temp: 10, alt: "cold" },
      { type: "poor", icon: "sun-cloud", temp: 12 },
      { type: "fair", icon: "sun-cloud", temp: 17 },
      { type: "good", icon: "sun-cloud", temp: 21 },
      { type: "good", icon: "sunny", temp: 26 },
      { type: "fair", icon: "sunny", temp: 29, alt: "hot" },
      { type: "fair", icon: "sunny", temp: 30, alt: "hot" },
      { type: "good", icon: "sunny", temp: 25 },
      { type: "fair", icon: "sun-rain", temp: 21 },
      { type: "poor", icon: "sun-rain", temp: 13 },
      { type: "poor", icon: "sun-cloud", temp: 9, alt: "cold" },
    ],
  },
]

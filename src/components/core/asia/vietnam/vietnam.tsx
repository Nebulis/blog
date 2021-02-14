import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { vietnamPrimaryColor, vietnamPrimaryColorDarker, vietnamPrimaryColorWithOpacity } from "./vietnam.colors"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { ImageAsMedallion, TitleImage } from "../../../images/layout"
import { drawHat } from "./console-draw-hat"
import { ButtonLink, ExternalLink, linkBuilder } from "../../links/link"
import { Link } from "gatsby"
import { City } from "../../highlight"
import hat from "../../../../images/asia/vietnam/hat.svg"
import { css } from "@emotion/core"
import { TFunction } from "i18next"
import { WeatherEntry } from "../../../../types/shared"

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

  .index-blog-layout-content {
    a.title-tag {
      background-color: ${vietnamPrimaryColorDarker};
    }
    a.title-tag:hover {
      box-shadow: 0px 0px 2px 1px ${vietnamPrimaryColorDarker};
    }
    
    .quote::before {
      color: ${vietnamPrimaryColor};
    }
  
    table tbody tr:nth-of-type(even) {
      background-color: ${vietnamPrimaryColorWithOpacity(0.2)};
    }
    table tbody tr:hover {
      background-color: ${vietnamPrimaryColorWithOpacity(0.3)};
    }
    button.btn:not(.not-overridable),
    button.btn:not(.not-overridable):disabled,
    button.btn:not(.not-overridable):hover {
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
  }
  .menu-entry {
    border-top: 1px solid ${vietnamPrimaryColor}!important;
  }

  footer a {
    color: ${vietnamPrimaryColor};
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
export const vietnamWeatherEntries = (t: TFunction): WeatherEntry[] => [
  {
    label: t("common:link.north"),
    data: [
      {
        type: "fair",
        icon: "light-rain",
      },
      {
        type: "fair",
        icon: "heavy-rain",
      },
      {
        type: "fair",
        icon: "heavy-rain",
      },
      {
        type: "good",
        icon: "sun-rain",
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "good",
        icon: "sun-cloud",
      },
      {
        type: "good",
        icon: "sun-cloud",
      },
      {
        type: "good",
        icon: "sun-cloud",
      },
    ],
  },
  {
    label: t("common:link.central"),
    data: [
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
      },
      {
        type: "fair",
        icon: "sunny",
        alt: "hot",
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
    ],
  },
  {
    label: t("common:link.south"),
    data: [
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "good",
        icon: "sunny",
      },
    ],
  },
]

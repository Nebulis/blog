import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { vietnamPrimaryColor, vietnamPrimaryColorDarker, vietnamPrimaryColorWithOpacity } from "./vietnam.colors"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { ImageAsMedallion } from "../../../images/layout"
import { drawHat } from "./console-draw-hat"
import { ButtonLink } from "../../links/link"
import { Headline } from "../../highlight"
import hat from "../../../../images/asia/vietnam/hat.svg"
import { css } from "@emotion/react"
import { TFunction } from "i18next"
import { WeatherEntry } from "../../../../types/shared"

const vietnamPartStyle = css`
  color: ${vietnamPrimaryColorDarker};
`
export const VietnamHeadline: FunctionComponent = ({ children }) => (
  <Headline css={vietnamPartStyle} image={hat} alt="hat">
    {children}
  </Headline>
)

const drawer = withDraw(drawHat)

const buttonStyle = `
  button.btn,
  button.btn:disabled,
  button.btn:hover {
    background-color: ${vietnamPrimaryColorDarker};
    border-color: ${vietnamPrimaryColorDarker};
    color: white;
  }
`

const vietnamLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${vietnamPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${vietnamPrimaryColor}!important;
    }
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
    .all-articles-container {
      ${buttonStyle}
    }
    .divider {
      background-color: ${vietnamPrimaryColor};
    }
    
    .comments {
      ${buttonStyle}
      .active svg {
        color: ${vietnamPrimaryColor};
      }
      .form-control:focus
       {
        box-shadow: 0 0 0 0.2rem rgb(255, 217, 102, 0.25);
        border-color: ${vietnamPrimaryColor}
      }
    }
    a.mdx-pseudo-processor-link{
      color: ${vietnamPrimaryColorDarker};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${vietnamPrimaryColorDarker};
      }
    }
  }

  footer {
    ${buttonStyle}
    a {
      color: ${vietnamPrimaryColor};
    }
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

export const vietnamCities = {
  "ho-chi-minh": "Ho Chi Minh",
  "da-lat": "Da Lat",
  "da-nang": "Da Nang",
  haiphong: "Haiphong",
  hue: "Hue",
  hanoi: "Hanoi",
  "nha-trang": "Nha Trang",
  "phu-quoc": "Phu Quoc",
  "buon-ma-thuot": "Buon Ma Thuot",
  "con-dao": "Con Dao",
  "chu-lai": "Chu Lai",
  "dong-hoi": "Dong Hoi",
  pleiku: "Pleiku",
  "qui-nhon": "Qui Nhon",
  "rach-gia": "Rach Gia",
  "can-tho": "Can Tho",
  vinh: "Vinh",
  "dien-bien-phu": "Dien Bien Phu",
  "thanh-hoa": "Thanh Hoa",
  "mui-ne": "Mui Ne",
  "tran-de": "Tran De",
  "ha-tien": "Ha Tien",
  "vung-tau": "Vung Tau",
  "hoi-an": "Hoi An",
  "phong-nha": "Phong Nha",
  sapa: "Sapa",
  "mai-chau": "Mai Chau",
  "ninh-binh": "Ninh Binh",
  "ha-long": "Ha Long",
  "cat-ba-island": "Cat ba Island",
}

export type VietnamCity = keyof typeof vietnamCities

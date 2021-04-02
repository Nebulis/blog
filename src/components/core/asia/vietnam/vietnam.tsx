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
    .point-of-interest-section {
      svg {
        fill: ${vietnamPrimaryColorDarker};
      }
      .title {
        color: ${vietnamPrimaryColorDarker};
      }
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
        temp: 19,
      },
      {
        type: "fair",
        icon: "heavy-rain",
        temp: 22,
      },
      {
        type: "fair",
        icon: "heavy-rain",
        temp: 25,
      },
      {
        type: "good",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
        temp: 33,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 34,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 33,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 32,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 31,
      },
      {
        type: "good",
        icon: "sun-cloud",
        temp: 28,
      },
      {
        type: "good",
        icon: "sun-cloud",
        temp: 25,
      },
      {
        type: "good",
        icon: "sun-cloud",
        temp: 21,
      },
    ],
  },
  {
    label: t("common:link.central"),
    data: [
      {
        type: "fair",
        icon: "sun-rain",
        temp: 22,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 24,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 26,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 28,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
        temp: 30,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
        temp: 30,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: "hot",
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 27,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 25,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 22,
      },
    ],
  },
  {
    label: t("common:link.south"),
    data: [
      {
        type: "good",
        icon: "sunny",
        temp: 30,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
        temp: 31,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
        temp: 32,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "hot",
        temp: 33,
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "hot",
        temp: 32,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 29,
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

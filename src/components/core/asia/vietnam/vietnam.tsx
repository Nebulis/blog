import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { vietnamPrimaryColor, vietnamPrimaryColorDarker, vietnamPrimaryColorWithOpacity } from "./vietnam.colors"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { drawHat } from "./console-draw-hat"
import { Headline } from "../../highlight"
import hat from "../../../../images/asia/vietnam/hat.svg"
import { css } from "@emotion/react"
import { TFunction } from "i18next"
import { WeatherEntry } from "../../../../types/shared"
import { mediumEnd } from "../../variables"

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
    
    .react-select-container {
      .react-select__option--is-selected {
        background-color: ${vietnamPrimaryColorDarker};
      }
      .react-select__control,
      .react-select__control:hover {
        border-color: ${vietnamPrimaryColorDarker};
        box-shadow: 0 0 0 1px ${vietnamPrimaryColorDarker};
      }
    }
    .point-of-interest-section {
      svg {
        fill: ${vietnamPrimaryColorDarker};
      }
      .title {
        color: ${vietnamPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${vietnamPrimaryColorDarker};
          svg {
            fill: ${vietnamPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        // the color has been picked from the hat images and is not derived from the primary color or other
        border: 6px solid #f8c471;
      }
    }
    .booking-card, .get-your-guide-card {
      .information, .photo-container {
        border-color: ${vietnamPrimaryColorDarker}
      }
      .activity {
        background-color: ${vietnamPrimaryColorDarker};
      }
    }
    .all-articles-container a {
      // #d8a200 is vietnamPrimaryColorDarker lighten by 10%
      border: 2px solid #d8a200;
      background-color: #d8a200;
      &:not(.inactive):hover {
        background-color: white;
        color: #d8a200;
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

export const vietnamWeatherEntries = (t: TFunction): WeatherEntry[] => [
  {
    id: "north",
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
    id: "central",
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
    id: "south",
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
  "bien-hoa": "Bien Hoa",
  "binh-thuan": "Binh Thuan",
  "thap-cham": "Thap Cham",
  "ninh-hoa": "Ninh Hoa",
  "tuy-hoa": "Tuy Hoa",
  "dieu-tri": "Dieu Tri",
  "quang-ngai": "Quang Ngai",
  "tam-ky": "Tam Ky",
  "dong-ha": "Dong Ha",
  "nam-dinh": "Nam Dinh",
  "dong-dang": "Dong Dang",
  "quan-trieu": "Quan Trieu",
  "yen-bai": "Yen Bai",
  "lao-cai": "Lao Cai",
  kep: "Kep",
}

export type VietnamCity = keyof typeof vietnamCities

export const MapAndTableContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  & > * {
    width: 50%;
  }

  @media (max-width: ${mediumEnd}) {
    flex-direction: column;
    & > svg,
    & > img {
      margin-bottom: calc(1.45rem / 2);
    }
    & > * {
      width: 100%;
    }
  }
`

export const MapAndTableTableContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  .menu-entry-opened .menu-label {
    background-color: #e5e7eb;
  }
  .menu-label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    height: 30px;
    background-color: #f7fafc;
    border-left: 3px solid ${vietnamPrimaryColorDarker};
    border-bottom: 1px solid #e5e7eb;
    .menu-label-chevron {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
    }
  }
  .menu-content-container {
    margin-left: 0;
    padding-left: 0;
  }
  .schedules {
    border-left: 3px solid ${vietnamPrimaryColor};
    font-size: 0.8rem;
  }

  .schedule-entry:nth-of-type(even) {
    background-color: ${vietnamPrimaryColorWithOpacity(0.2)};
  }
  .schedule-entry:hover {
    background-color: ${vietnamPrimaryColorWithOpacity(0.3)};
  }
  .schedule-entry {
    height: 25px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

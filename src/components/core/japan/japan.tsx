import { css } from "@emotion/react"
import React, { FunctionComponent, HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { ButtonLink, ExternalLink } from "../links/link"
import { BlogLayout, IndexBlogLayout } from "../../layout/layout"
import {
  japanCherryBlossom,
  japanPrimaryColor,
  japanPrimaryColorDarker,
  japanPrimaryColorWithOpacity,
} from "./japan.variables"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { City, Headline } from "../highlight"
import { Title } from "../title"
import { WeatherEntry } from "../../../types/shared"
import { MapAndTableTableContainer } from "../../layout/transports-layout"

const japanLineStyle = css`
  padding: 2px 5px;
  font-size: 0.9rem;
`
interface JapanLineProps {
  href: string
}
export const JapanLine: FunctionComponent<HTMLAttributes<any> & JapanLineProps> = ({ children, className, href }) => (
  <ExternalLink href={href} noIcon>
    <span className={className} css={japanLineStyle}>
      {children}
    </span>
  </ExternalLink>
)

export const JapanMapAndTableTableContainer = styled(MapAndTableTableContainer)`
  .schedules {
    border-left: 3px solid ${japanCherryBlossom};
  }
  .menu-label {
    border-left: 3px solid ${japanPrimaryColorDarker};
  }
  .schedule-entry:nth-of-type(even) {
    background-color: ${japanPrimaryColorWithOpacity(0.2)};
  }
  .schedule-entry:hover {
    background-color: ${japanPrimaryColorWithOpacity(0.3)};
  }
`
export const JapanExternalLink = styled(ExternalLink)`
  color: ${japanPrimaryColor};
  &:visited {
    color: ${japanPrimaryColor};
  }
`
const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${japanPrimaryColor};
    border-color: ${japanPrimaryColor};
  }
  button.btn:hover {
    background-color: ${japanPrimaryColorDarker};
    border-color: ${japanPrimaryColorDarker};
  }
`
const japanLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${japanPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${japanPrimaryColor};
    }
  }

  .index-blog-layout-content {
  
    .petit-carre-colore {
      background-color: ${japanPrimaryColorWithOpacity(0.2)};
      border-color: ${japanPrimaryColorDarker};
    }
    .menu-article .menu-article-container {
      background-color: ${japanPrimaryColorWithOpacity(0.2)};
      color: ${japanPrimaryColorDarker};
      border: 3px solid ${japanPrimaryColorDarker};
    }
    
    .react-select-container {
      .react-select__option--is-selected {
        background-color: ${japanPrimaryColorDarker};
      }
      .react-select__control,
      .react-select__control:hover {
        border-color: ${japanPrimaryColorDarker};
        box-shadow: 0 0 0 1px ${japanPrimaryColorDarker};
      }
    }
    
    .point-of-interest-section {
      svg {
        fill: ${japanPrimaryColor};
      }
      .title {
        color: ${japanPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${japanPrimaryColorDarker};
          svg {
            fill: ${japanPrimaryColorDarker};
          }
        }
      }
    }
    .booking-card {
      .information, .photo-container {
        border-color: ${japanPrimaryColorDarker}
      }
      .activity {
        background-color: ${japanPrimaryColorDarker};
      }
    }
    .divider {
      background-color: hsl(348, 41%, 53%, 0.2);
    }
    .quote::before {
      color: #ffb7c5;
    }
    a.mdx-pseudo-processor-link{
      color: ${japanPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${japanPrimaryColor};
      }
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(184, 86, 106, 0.25);
        border-color: ${japanPrimaryColor}
      }
      .active svg {
        color: ${japanPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${japanCherryBlossom};
    }
  }
`
export const IndexJapanBlogLayout = styled(IndexBlogLayout)`
  ${japanLayout}
`
export const JapanBlogLayout = styled(BlogLayout)`
  ${japanLayout}
`

export const JapanButtonLink = styled(ButtonLink)`
  border: 2px solid ${japanPrimaryColor};
  background-color: ${japanPrimaryColor};
  &:not(.inactive):hover {
    color: ${japanPrimaryColor};
  }
`

const japanHeadlineStyle = css`
  color: ${japanPrimaryColor};
  img {
    width: 16px;
    height: 16px;
  }
`
export const JapanHeadline: FunctionComponent = ({ children }) => (
  <Headline css={japanHeadlineStyle} image={cherryBlossom} alt="cherry blossom">
    {children}
  </Headline>
)
const japanCityStyle = css`
  color: ${japanPrimaryColor};
`
export const JapanCity: FunctionComponent = ({ children }) => (
  <City css={japanCityStyle}>
    <img src={cherryBlossom} alt="cherry blossom" /> {children} <img src={cherryBlossom} alt="cherry blossom" />
  </City>
)

export const JapanTitle = styled(Title)`
  a {
    background-color: ${japanPrimaryColor};
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px #ed5567;
  }
`

export const japanWeatherEntries = (): WeatherEntry[] => [
  {
    id: "sapporo",
    label: "Sapporo",
    data: [
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
        temp: -6,
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
        temp: -6,
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
        temp: -2,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["cold", "sakura"],
        temp: 6,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 13,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 17,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 21,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 22,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 18,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["autumn", "cold"],
        temp: 10,
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["cold", "snow-man"],
        temp: 4,
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
        temp: -3,
      },
    ],
  },
  {
    id: "tokyo",
    label: "Tokyo",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 8,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 8,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: "cold",
        temp: 12,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "sakura",
        temp: 17,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 22,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 24,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 28,
      },
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 26,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 21,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
        temp: 15,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 10,
      },
    ],
  },
  {
    id: "fuji",
    label: "Mt. Fuji",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 5,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 6,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 9,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["cold", "sakura"],
        temp: 12,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 20,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 22,
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: "climb",
        temp: 26,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "climb",
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "climb",
        temp: 24,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 18,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 13,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 8,
      },
    ],
  },
  {
    id: "nagoya",
    label: "Nagoya",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 6,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 7,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "cold",
        temp: 11,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "sakura",
        temp: 16,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 22,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 25,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 28,
      },
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
        temp: 31,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 21,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
        temp: 14,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 8,
      },
    ],
  },
  {
    id: "kyoto",
    label: "Kyoto",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 4,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 4,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["sakura", "cold"],
        temp: 8,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "sakura",
        temp: 13,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 19,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 22,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 26,
      },
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
        temp: 28,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 23,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 17,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
        temp: 12,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "snow-man"],
        temp: 6,
      },
    ],
  },
  {
    id: "osaka",
    label: "Osaka",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 5,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
        temp: 6,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["sakura", "cold"],
        temp: 9,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "sakura",
        temp: 14,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 20,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 23,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 27,
      },
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 25,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 19,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
        temp: 14,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "snow-man"],
        temp: 8,
      },
    ],
  },
  {
    id: "fukuoka",
    label: "Fukuoka",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["cold", "snow-man"],
        temp: 8,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["cold"],
        temp: 9,
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: ["cold", "sakura"],
        temp: 12,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 16,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 21,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
        temp: 24,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet", "hot"],
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-rain",
        temp: 26,
      },
      {
        type: "good",
        icon: "sun-cloud",
        temp: 21,
      },
      {
        type: "good",
        icon: "sun-cloud",
        alt: "autumn",
        temp: 16,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["cold"],
        temp: 10,
      },
    ],
  },
]

export const defaultExcludedWeatherEntries = ["nagoya", "kyoto"]

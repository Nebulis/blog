import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import { BlogLayout, IndexBlogLayout } from "../../../layout/layout"
import { australiaPrimaryColor, australiaPrimaryColorDarker } from "./australia.variables"
import { WeatherEntry } from "../../../../types/shared"
import { Lang } from "../../links/links.types"
import { Headline } from "../../highlight"
import kangaroo from "../../../../images/oceania/australia/kangaroo.svg"
import { css } from "@emotion/react"

const australiaHeadlineStyle = css`
  color: ${australiaPrimaryColorDarker};
`
export const AustraliaHeadline: FunctionComponent = ({ children }) => (
  <Headline css={australiaHeadlineStyle} image={kangaroo} alt="kangaroo">
    {children}
  </Headline>
)

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${australiaPrimaryColor};
    border-color: ${australiaPrimaryColor};
  }
  button.btn:hover {
    background-color: ${australiaPrimaryColorDarker};
    border-color: ${australiaPrimaryColorDarker};
  }
`
const australiaLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${australiaPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${australiaPrimaryColor};
    }
  }

  .index-blog-layout-content {
    .booking-card, .get-your-guide-card {
      .information, .photo-container {
        border-color: ${australiaPrimaryColorDarker}
      }
      .activity {
        background-color: ${australiaPrimaryColorDarker};
      }
    }
    .point-of-interest-section {
      svg {
        fill: ${australiaPrimaryColor};
      }
      .title {
        color: ${australiaPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${australiaPrimaryColorDarker};
          svg {
            fill: ${australiaPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${australiaPrimaryColor};
      }
      
      // north territory is too long, the layout is different in french and english
      &.northern-territory-fr,
      &.northern-territory-en {
        span {
          padding-top: 3px;
          padding-left: 50px;
          padding-right: 50px;
          font-size: 1.1rem;
        }
        &:hover span {
          padding-left: 45px;
          padding-right: 45px;
          font-size: 1.3rem;
        }
      }
    }
    .all-articles-container a {
      border: 2px solid ${australiaPrimaryColor};
      background-color: ${australiaPrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${australiaPrimaryColor};
      }
    }
    .divider {
      background-color: ${australiaPrimaryColor};
    }
    a.title-tag {
      background-color: ${australiaPrimaryColorDarker};
    }
    a.title-tag:hover {
      box-shadow: 0px 0px 2px 1px ${australiaPrimaryColorDarker};
    }
    .quote::before {
      color: ${australiaPrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${australiaPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${australiaPrimaryColor};
      }
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(195, 155, 110, 0.25);
        border-color: ${australiaPrimaryColor}
      }
      .active svg {
        color: ${australiaPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${australiaPrimaryColor};
    }
  }
`
export const IndexAustraliaBlogLayout = styled(IndexBlogLayout)`
  ${australiaLayout}
`
export const AustraliaBlogLayout = styled(BlogLayout)`
  ${australiaLayout}
`

export const australiaWeatherEntries = (lang: Lang): WeatherEntry[] => [
  {
    id: "west",
    label: lang === "fr" ? "Ouest" : "West",
    tooltipLabel: lang === "fr" ? "Australie Occidentale - Perth" : "Western Australia - Perth",
    data: [
      {
        type: "good",
        icon: "sunny",
        alt: "surf",
        temp: 26,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "surf",
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "surf",
        temp: 25,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "surf",
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
        alt: ["shower"],
        temp: 16,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower", "whale"],
        temp: 14,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower", "whale"],
        temp: 15,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower", "whale"],
        temp: 16,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 19,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["surf"],
        temp: 22,
      },
      {
        type: "good",
        icon: "sunny",
        alt: "surf",
        temp: 25,
      },
    ],
  },
  {
    id: "northern-territory",
    label: lang === "fr" ? "Nord" : "North",
    tooltipLabel: lang === "fr" ? "Territoire du Nord - Darwin" : "Northern Territory - Darwin",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["hot", "droplet"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["hot", "droplet"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["hot", "droplet"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["hot", "shower"],
        temp: 30,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 28,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["hot", "climb"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["hot"],
        temp: 32,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["hot", "shower"],
        temp: 32,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["hot", "droplet"],
        temp: 32,
      },
    ],
  },
  {
    id: "outback",
    label: lang === "fr" ? "Centre" : "Central",
    tooltipLabel: "Outback - Alice Springs",
    data: [
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
        temp: 33,
      },
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
        temp: 33,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["hot", "climb"],
        temp: 30,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 25,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 20,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 16,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 16,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 19,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 24,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["climb"],
        temp: 28,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["hot", "climb"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sunny",
        alt: ["hot"],
        temp: 34,
      },
    ],
  },
  {
    id: "queensland",
    label: lang === "fr" ? "Est" : "East",
    tooltipLabel: "Queensland - Brisbane",
    data: [
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "jelly-fish", "shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "jelly-fish", "shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "jelly-fish", "shower"],
        temp: 25,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 25,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 24,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "whale"],
        temp: 23,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "whale"],
        temp: 22,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "whale"],
        temp: 22,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "whale"],
        temp: 24,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 25,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "jelly-fish", "shower"],
        temp: 28,
      },
    ],
  },
  {
    id: "south",
    label: lang === "fr" ? "Sud" : "South",
    tooltipLabel:
      lang === "fr"
        ? "Nouvelle-Galles du Sud - Sydney\nTCA - Canberra\nVictoria - Melbourne\nAustralie Méridionale - Adélaïde"
        : "New South Wales - Sydney\nACT - Canberra\nVictoria - Melbourne\nSouth Australia - Adelaide",
    data: [
      {
        type: "good",
        icon: "sunny",
        alt: ["surf"],
        temp: 24,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["surf"],
        temp: 23,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["surf"],
        temp: 21,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["surf"],
        temp: 17,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 15,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "whale"],
        temp: 12,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "whale"],
        temp: 12,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["whale"],
        temp: 14,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["whale"],
        temp: 15,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["surf"],
        temp: 17,
      },
      {
        type: "fair",
        icon: "sunny",
        alt: ["surf"],
        temp: 20,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["surf"],
        temp: 22,
      },
    ],
  },
  {
    id: "tasmania",
    label: lang === "fr" ? "Tasmanie" : "Tasmania",
    data: [
      {
        type: "good",
        icon: "sunny",
        temp: 17,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 16,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 15,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 13,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: "cold",
        temp: 10,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "whale"],
        temp: 8,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "whale", "snow-man"],
        temp: 7,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "whale", "snow-man"],
        temp: 7,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "whale", "snow-man"],
        temp: 8,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 13,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 13,
      },
      {
        type: "good",
        icon: "sunny",
        temp: 13,
      },
    ],
  },
]

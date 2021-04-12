import styled from "@emotion/styled"
import { BlogLayout, IndexBlogLayout } from "../../../layout/layout"
import { malaysiaPrimaryColor, malaysiaPrimaryColorDarker } from "./malaysia.variables"
import { WeatherEntry } from "../../../../types/shared"
import { Lang } from "../../links/links.types"

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${malaysiaPrimaryColor};
    border-color: ${malaysiaPrimaryColor};
  }
  button.btn:hover {
    background-color: ${malaysiaPrimaryColorDarker};
    border-color: ${malaysiaPrimaryColorDarker};
  }
`
const malaysiaLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${malaysiaPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${malaysiaPrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${malaysiaPrimaryColor};
      }
      .title {
        color: ${malaysiaPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${malaysiaPrimaryColorDarker};
          svg {
            fill: ${malaysiaPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${malaysiaPrimaryColor};
      }
    }
    .all-articles-container a {
      border: 2px solid ${malaysiaPrimaryColor};
      background-color: ${malaysiaPrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${malaysiaPrimaryColor};
      }
    }
    .divider {
      background-color: ${malaysiaPrimaryColor};
    }
    .quote::before {
      color: ${malaysiaPrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${malaysiaPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${malaysiaPrimaryColor};
      }
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(204, 85, 0, 0.25);
        border-color: ${malaysiaPrimaryColor}
      }
      .active svg {
        color: ${malaysiaPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${malaysiaPrimaryColor};
    }
  }
`
export const IndexMalaysiaBlogLayout = styled(IndexBlogLayout)`
  ${malaysiaLayout}
`
export const MalaysiaBlogLayout = styled(BlogLayout)`
  ${malaysiaLayout}
`

export const malaysiaWeatherEntries = (lang: Lang): WeatherEntry[] => [
  {
    id: "west",
    label: lang === "fr" ? "Occidentale" : "West",
    data: [
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["swim", "shower"],
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["swim", "shower"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["swim"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["swim", "hot"],
        temp: 31,
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["hot", "swim", "shower"],
        temp: 31,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["swim", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["swim", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["swim", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["swim", "shower"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["swim", "droplet"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["swim", "droplet"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["swim", "droplet"],
        temp: 28,
      },
    ],
  },
  {
    id: "east",
    label: lang === "fr" ? "Orientale" : "East",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 27,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 27,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["climb", "shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["climb", "shower"],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["climb", "shower"],
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["climb", "shower"],
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 28,
      },
    ],
  },
]

import styled from "@emotion/styled"
import { BlogLayout, IndexBlogLayout } from "../../../layout/layout"
import { cambodiaPrimaryColor, cambodiaPrimaryColorDarker, cambodiaPrimaryColorLighter } from "./cambodia.variables"
import { WeatherEntry } from "../../../../types/shared"
import { Lang } from "../../links/links.types"

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${cambodiaPrimaryColor};
    border-color: ${cambodiaPrimaryColor};
  }
  button.btn:hover {
    background-color: ${cambodiaPrimaryColorDarker};
    border-color: ${cambodiaPrimaryColorDarker};
  }
`
const cambodiaLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${cambodiaPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${cambodiaPrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${cambodiaPrimaryColor};
      }
      .title {
        color: ${cambodiaPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${cambodiaPrimaryColorDarker};
          svg {
            fill: ${cambodiaPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${cambodiaPrimaryColor};
      }
    }
    .all-articles-container a {
      border: 2px solid ${cambodiaPrimaryColor};
      background-color: ${cambodiaPrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${cambodiaPrimaryColor};
      }
    }
    .divider {
      background-color: ${cambodiaPrimaryColor};
    }
    .quote::before {
      color: ${cambodiaPrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${cambodiaPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${cambodiaPrimaryColor};
      }
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(76, 111, 139, 0.25);
        border-color: ${cambodiaPrimaryColor}
      }
      .active svg {
        color: ${cambodiaPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${cambodiaPrimaryColorLighter};
    }
  }
`
export const IndexCambodiaBlogLayout = styled(IndexBlogLayout)`
  ${cambodiaLayout}
`
export const CambodiaBlogLayout = styled(BlogLayout)`
  ${cambodiaLayout}
`

export const cambodiaWeatherEntries = (lang: Lang): WeatherEntry[] => [
  {
    label: lang === "fr" ? "Cambodge" : "Cambodia",
    data: [
      {
        type: "good",
        icon: "sunny",
        temp: 30,
        alt: "climb",
      },
      {
        type: "good",
        icon: "sunny",
        temp: 32,
        alt: ["climb", "hot"],
      },
      {
        type: "good",
        icon: "sunny",
        temp: 32,
        alt: ["climb", "hot"],
      },
      {
        type: "fair",
        icon: "sunny",
        temp: 33,
        alt: ["hot"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 32,
        alt: ["hot", "shower"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 31,
        alt: ["hot", "shower"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 30,
        alt: ["shower", "floating-market"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 30,
        alt: [{ type: "floating-market", position: "alt-top-left" }],
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 30,
        alt: ["droplet"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
        alt: ["droplet"],
      },
      {
        type: "poor",
        icon: "sun-cloud",
        temp: 29,
        alt: ["shower", { type: "floating-market", position: "alt-top-left" }],
      },
      {
        type: "good",
        icon: "sunny",
        temp: 29,
        alt: ["climb"],
      },
    ],
  },
]

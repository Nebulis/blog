import styled from "@emotion/styled"
import { BlogLayout, IndexBlogLayout } from "../../../layout/layout"
import { taiwanPrimaryColor, taiwanPrimaryColorDarker, taiwanPrimaryColorLighter } from "./taiwan.variables"
import { WeatherEntry } from "../../../../types/shared"

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${taiwanPrimaryColor};
    border-color: ${taiwanPrimaryColor};
  }
  button.btn:hover {
    background-color: ${taiwanPrimaryColorDarker};
    border-color: ${taiwanPrimaryColorDarker};
  }
`
const taiwanLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${taiwanPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${taiwanPrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${taiwanPrimaryColor};
      }
      .title {
        color: ${taiwanPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${taiwanPrimaryColorDarker};
          svg {
            fill: ${taiwanPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${taiwanPrimaryColor};
      }
    }
    .all-articles-container a {
      border: 2px solid ${taiwanPrimaryColor};
      background-color: ${taiwanPrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${taiwanPrimaryColor};
      }
    }
    .divider {
      background-color: ${taiwanPrimaryColor};
    }
    .quote::before {
      color: ${taiwanPrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${taiwanPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${taiwanPrimaryColor};
      }
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(76, 111, 139, 0.25);
        border-color: ${taiwanPrimaryColor}
      }
      .active svg {
        color: ${taiwanPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${taiwanPrimaryColorLighter};
    }
  }
`
export const IndexTaiwanBlogLayout = styled(IndexBlogLayout)`
  ${taiwanLayout}
`
export const TaiwanBlogLayout = styled(BlogLayout)`
  ${taiwanLayout}
`

export const taiwanWeatherEntries = (): WeatherEntry[] => [
  {
    label: "Taiwan",
    data: [
      {
        type: "good",
        icon: "sun-cloud",
        temp: 16,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 17,
        alt: ["shower"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 20,
        alt: ["shower"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 23,
        alt: ["shower"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 27,
        alt: ["shower"],
      },
      {
        type: "poor",
        icon: "sun-cloud",
        temp: 30,
        alt: ["hot", "shower"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 31,
        alt: ["hot", "typhoon"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 31,
        alt: ["hot", "typhoon"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
        alt: ["typhoon"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        temp: 24,
        alt: ["shower"],
      },
      {
        type: "good",
        icon: "sun-cloud",
        temp: 22,
      },
      {
        type: "good",
        icon: "sun-cloud",
        temp: 17,
      },
    ],
  },
]

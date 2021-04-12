import styled from "@emotion/styled"
import { BlogLayout, IndexBlogLayout } from "../../../layout/layout"
import { indonesiaPrimaryColor, indonesiaPrimaryColorDarker } from "./indonesia.variables"
import { WeatherEntry } from "../../../../types/shared"
import { Lang } from "../../links/links.types"

const buttonStyle = `
  button.btn,
  button.btn:disabled {
    background-color: ${indonesiaPrimaryColor};
    border-color: ${indonesiaPrimaryColor};
  }
  button.btn:hover {
    background-color: ${indonesiaPrimaryColorDarker};
    border-color: ${indonesiaPrimaryColorDarker};
  }
`
const indonesiaLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${indonesiaPrimaryColor};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${indonesiaPrimaryColor};
    }
  }

  .index-blog-layout-content {
    .point-of-interest-section {
      svg {
        fill: ${indonesiaPrimaryColor};
      }
      .title {
        color: ${indonesiaPrimaryColorDarker};
      }
      @media (hover: hover) {
        .title-element:hover {
          border-bottom-color: ${indonesiaPrimaryColorDarker};
          svg {
            fill: ${indonesiaPrimaryColorDarker};
          }
        }
      }
    }
    .image-as-medallion {
      &.mobile,
      &:hover {
        border: 6px solid ${indonesiaPrimaryColor};
      }
    }
    .all-articles-container a {
      border: 2px solid ${indonesiaPrimaryColor};
      background-color: ${indonesiaPrimaryColor};
      &:not(.inactive):hover {
        background-color: white;
        color: ${indonesiaPrimaryColor};
      }
    }
    .divider {
      background-color: ${indonesiaPrimaryColor};
    }
    .quote::before {
      color: ${indonesiaPrimaryColor};
    }
    a.mdx-pseudo-processor-link{
      color: ${indonesiaPrimaryColor};
      font-weight: bold;
      text-decoration: underline;
      &:visited {
        color: ${indonesiaPrimaryColor};
      }
    }
    .comments {
      ${buttonStyle}
      .form-control:focus {
        box-shadow: 0 0 0 0.2rem rgb(76, 111, 139, 0.25);
        border-color: ${indonesiaPrimaryColor}
      }
      .active svg {
        color: ${indonesiaPrimaryColor};
      }
    }
  }

  footer{ 
    ${buttonStyle}
    a {
      color: ${indonesiaPrimaryColor};
    }
  }
`
export const IndexIndonesiaBlogLayout = styled(IndexBlogLayout)`
  ${indonesiaLayout}
`
export const IndonesiaBlogLayout = styled(BlogLayout)`
  ${indonesiaLayout}
`

export const indonesiaWeatherEntries = (lang: Lang): WeatherEntry[] => [
  {
    id: "bali",
    label: lang === "fr" ? "Archipel des îles du sud-est" : "Southeastern Archipelago",
    tooltipLabel: `Bali / Lombok / Sumbawa\nSumba / Komodo / Flor${lang === "fr" ? "è" : "e"}s\nTimor / etc.`,
    data: [
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
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 28,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 28,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 27,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 26,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 26,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 26,
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
        alt: ["scuba", "shower"],
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
    ],
  },
  {
    id: "sumatra",
    label: "Sumatra",
    data: [
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "climb", "shower"],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet"],
        temp: 28,
      },
    ],
  },
  {
    id: "java",
    label: "Java",
    data: [
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
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", { type: "shower", position: "alt-bottom-left" }],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb", "shower"],
        temp: 30,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb", "shower"],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb", "shower"],
        temp: 28,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "climb"],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", { type: "shower", position: "alt-bottom-left" }],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", { type: "shower", position: "alt-bottom-left" }],
        temp: 30,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
    ],
  },
  {
    id: "kalimantan",
    label: `Kalimantan (Born${lang === "fr" ? "é" : "e"}o)`,
    data: [
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
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 30,
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
        temp: 29,
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
        temp: 29,
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
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
    ],
  },
  {
    id: "papua",
    label: lang === "fr" ? "Papouasie Occidentale" : "West Papua",
    data: [
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["shower"],
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
        temp: 27,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "shower",
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "shower",
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "shower",
        temp: 27,
      },
    ],
  },
  {
    id: "moluques",
    label: lang === "fr" ? "Moluques" : "Moluccas",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 28,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 27,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 28,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 29,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 29,
      },
    ],
  },
  {
    id: "sulawesi",
    label: lang === "fr" ? "Sulawesi (Célèbes)" : "Sulawesi (Celebes)",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 29,
      },
      {
        type: "poor",
        icon: "sun-rain",
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 30,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 29,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba"],
        temp: 30,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "hot"],
        temp: 31,
      },
      {
        type: "good",
        icon: "sunny",
        alt: ["scuba", "hot"],
        temp: 31,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "hot", "shower"],
        temp: 31,
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["scuba", "shower"],
        temp: 29,
      },
    ],
  },
]

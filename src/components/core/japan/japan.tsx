import { css } from "@emotion/react"
import React, { FunctionComponent, HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { Quote } from "../quote"
import { ButtonLink, ExternalLink, linkBuilder } from "../links/link"
import { BlogLayout, IndexBlogLayout } from "../../layout/layout"
import { japanCherryBlossom, japanPrimaryColor, japanPrimaryColorDarker } from "./japan.variables"
import { Link } from "gatsby"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { City, Headline } from "../highlight"
import { Title } from "../title"
import { Divider } from "../divider"
import { WeatherEntry } from "../../../types/shared"

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

// TODO delete
export const JapanQuote = styled(Quote)`
  .quote::before {
    color: #ffb7c5;
  }
`

export const NagoyaCastleQuote = () => (
  <JapanQuote>
    Véritable symbole de cette ville très peu touristique du Japon, le château de Nagoya et ses vastes jardins sont
    clairement un lieu à faire si vous y êtes de passage...
  </JapanQuote>
)

export const ToganjiQuote = () => (
  <JapanQuote>
    Impressionnante statue d’un vert très vif d’environ 10 mètres de haut, ce grand Bouddha est entouré à son pied
    d’éléphants, de rennes et de moines.
  </JapanQuote>
)

export const SensojiQuote = () => (
  <JapanQuote>
    Le temple de Senso-Ji serait le plus vieux temple de Tokyo, situé dans le quartier de Asakusa, il regroupe chaque
    jour des milliers de visiteurs.
  </JapanQuote>
)
export const FujiQuote = () => (
  <JapanQuote>
    Le Mont Fuji est un véritable symbole au Japon. Par beau temps il serait même visible de Tokyo. Entouré de cinq
    lacs, nous avons tenté l’expérience au lac Kawaguchi.
  </JapanQuote>
)
export const HamarikyuGardenQuote = () => (
  <JapanQuote>
    Un jardin paisible et calme, parfait endroit pour se ressourcer au milieu de la plus grande mégapole du monde.
  </JapanQuote>
)

// TODO delete
export const JapanLink = linkBuilder(styled(Link)`
  color: ${japanPrimaryColor};
  &:visited {
    color: ${japanPrimaryColor};
  }
`)
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
    border-radius: 3px;
    color: white;
    background-color: ${japanPrimaryColor};
    padding: 0 2px;
    text-decoration: none;
  }
  a:hover {
    box-shadow: 0px 0px 2px 1px #ed5567;
  }
`

export const JapanDivider = styled(Divider)`
  background-color: hsl(348, 41%, 53%, 0.2);
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

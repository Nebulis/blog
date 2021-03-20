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

export const HimejiCastleQuote = () => (
  <JapanQuote>
    Magnifique château, surnommé le château du Héron Blanc, il est considéré comme l’un des plus beaux châteaux du
    Japon...
  </JapanQuote>
)

export const ArashiyamaQuote = () => (
  <JapanQuote>
    Le bambou serait capable de repousser les mauvais esprits, il représenterait la force et la prospérité...
  </JapanQuote>
)

export const KinkakujiQuote = () => (
  <JapanQuote>
    Temple bouddhiste reconnu pour sa beauté. Surnommé le Pavillon d’or, il doit ce nom au fait que ses étages sont
    entièrement recouverts de feuilles d’or...
  </JapanQuote>
)

export const FushimiInariTaishaQuote = () => (
  <JapanQuote>
    Le sanctuaire est surtout connu pour ses quelques milliers de Torii Vermillon qui crée un chemin dans une forêt
    remplie de pins...
  </JapanQuote>
)

export const DaigojiQuote = () => (
  <JapanQuote>
    Daigo-ji est un ensemble de temples bouddhiste et de jardins, haut en couleur à chaque saison...
  </JapanQuote>
)

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
    label: "Sapporo",
    data: [
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["cold", "sakura"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
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
        type: "fair",
        icon: "sun-cloud",
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["cold", "snow-man"],
      },
      {
        type: "poor",
        icon: "snow",
        alt: ["arctic", "snow-man"],
      },
    ],
  },
  {
    label: "Tokyo",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
      },
      {
        type: "fair",
        icon: "sunny",
        alt: "cold",
      },
      {
        type: "good",
        icon: "sunny",
        alt: "sakura",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sunny",
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
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
      },
    ],
  },
  {
    label: "Osaka",
    data: [
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["snow-man", "cold"],
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["sakura", "cold"],
      },
      {
        type: "good",
        icon: "sunny",
        alt: "sakura",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sunny",
        alt: "hot",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "good",
        icon: "sunny",
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: "autumn",
      },
      {
        type: "poor",
        icon: "sun-cloud",
        alt: ["cold", "snow-man"],
      },
    ],
  },
  {
    label: "Fukuoka",
    data: [
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["cold", "snow-man"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["cold", "snow-man"],
      },
      {
        type: "fair",
        icon: "sun-rain",
        alt: ["cold", "sakura"],
      },
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "droplet",
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: ["droplet", "hot"],
      },
      {
        type: "poor",
        icon: "sun-rain",
        alt: "hot",
      },
      {
        type: "fair",
        icon: "sun-rain",
      },
      {
        type: "good",
        icon: "sun-cloud",
      },
      {
        type: "good",
        icon: "sun-cloud",
        alt: "autumn",
      },
      {
        type: "fair",
        icon: "sun-cloud",
        alt: ["cold"],
      },
    ],
  },
]

// export const japanWeatherEntries = (t: TFunction): WeatherEntry[] => [
//   {
//     label: "Tokyo",
//     data: [
//       {
//         type: "poor",
//         icon: "sunny",
//       },
//       {
//         type: "poor",
//         icon: "sunny",
//       },
//       {
//         type: "fair",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sun-rain",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "good",
//         icon: "sun-rain",
//       },
//       {
//         type: "good",
//         icon: "sun-rain",
//       },
//       {
//         type: "fair",
//         icon: "sun-cloud",
//       },
//       {
//         type: "fair",
//         icon: "sun-cloud",
//       },
//     ],
//   },
//   {
//     label: "Osaka",
//     data: [
//       {
//         type: "poor",
//         icon: "sun-cloud",
//       },
//       {
//         type: "poor",
//         icon: "sun-cloud",
//       },
//       {
//         type: "fair",
//         icon: "sun-cloud",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sun-rain",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "fair",
//         icon: "sun-cloud",
//         alt: "hot",
//       },
//       {
//         type: "good",
//         icon: "sun-cloud",
//       },
//       {
//         type: "good",
//         icon: "sun-cloud",
//       },
//       {
//         type: "fair",
//         icon: "sun-cloud",
//       },
//       {
//         type: "fair",
//         icon: "sun-cloud",
//       },
//     ],
//   },
//   {
//     label: "Sapporo",
//     data: [
//       {
//         type: "poor",
//         icon: "sunny", // snow
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//         alt: "hot",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//         alt: "hot",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//     ],
//   },
//   {
//     label: "Fukuoka",
//     data: [
//       {
//         type: "poor",
//         icon: "sunny", // snow
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//         alt: "hot",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//         alt: "hot",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "hot",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "poor",
//         icon: "sun-rain",
//         alt: "droplet",
//       },
//       {
//         type: "fair",
//         icon: "sun-rain",
//       },
//       {
//         type: "good",
//         icon: "sunny",
//       },
//     ],
//   },
// ]

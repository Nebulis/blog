import { css } from "@emotion/react"
import React, { FunctionComponent, HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { Quote } from "../quote"
import { ButtonLink, ExternalLink, linkBuilder } from "../links/link"
import { BlogLayout, IndexBlogLayout } from "../../layout/layout"
import {
  japanCherryBlossom,
  japanPrimaryColor,
  japanPrimaryColorDarker,
  japanPrimaryColorLighter,
} from "./japan.variables"
import { Link } from "gatsby"
import { Comments } from "../comments"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { City } from "../highlight"
import { Title } from "../title"
import { Divider } from "../divider"

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

export const JapanQuote = styled(Quote)`
  .quote::before {
    color: #ffb7c5;
  }
`
interface SpringInJapanQuoteProps {
  short?: boolean
}
export const SpringInJapanQuote: FunctionComponent<SpringInJapanQuoteProps> = ({ short }) => (
  <JapanQuote>
    Le Japon, ce pays incontournable à visiter en Asie. Un nouveau décor à chaque saison. Un mélange entre zénitude dans
    les endroits reculés et animation et dynamisme dans
    {short
      ? "..."
      : " les villes, autant dire qu’en fonction de ce que vous recherchez, que vous aimiez la ville ou la campagne, à n’importe quel endroit vous trouverez votre bonheur..."}
  </JapanQuote>
)

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

const japanLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${japanPrimaryColorLighter};
  }
  header {
    .menu-entry {
      border-top: 1px solid ${japanPrimaryColorLighter};
    }
  }

  .index-blog-layout-content {
    .divider {
      background-color: hsl(348, 41%, 53%, 0.2);
    }
  }

  footer{ 
    a {
      color: ${japanCherryBlossom};
    }
    button.btn,
    button.btn:disabled {
      background-color: ${japanPrimaryColor};
      border-color: ${japanPrimaryColor};
    }
    button.btn:hover {
      background-color: ${japanPrimaryColorDarker};
      border-color: ${japanPrimaryColorDarker};
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
  border: 2px solid ${japanPrimaryColorDarker};
  background-color: ${japanPrimaryColorDarker};
  &:not(.inactive):hover {
    color: ${japanPrimaryColorDarker};
  }
`

export const JapanComments = styled(Comments)`
  a,
  span.reply,
  .form-group.active svg,
  a:visited {
    color: ${japanPrimaryColor};
  }
  textarea.form-control:focus,
  input.form-control:focus {
    border-color: ${japanPrimaryColor};
    box-shadow: 0 0 0 0.2rem rgba(184, 86, 106, 0.21);
  }
`

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

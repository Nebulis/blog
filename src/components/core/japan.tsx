import css from "@emotion/css"
import React, { FunctionComponent, HTMLAttributes } from "react"
import { ExternalLink } from "./link"
import styled from "@emotion/styled"
import { Quote } from "./quote"

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
  blockquote::before {
    color: #ffb7c5;
  }
`
export const SpringInJapanQuote = () => (
  <JapanQuote>
    Le Japon, ce pays incontournable à visiter en Asie. Un nouveau décor à chaque saison. Un mélange entre zénitude dans
    les endroits reculés et animation et dynamisme dans les villes, autant dire qu’en fonction de ce que vous
    recherchez, que vous aimiez la ville ou la campagne, à n’importe quel endroit vous trouverez votre bonheur.
  </JapanQuote>
)

export const HimejiCastleQuote = () => (
  <JapanQuote>
    Magnifique château, surnommé le château du Héron Blanc, il est considéré comme l’un des plus beaux châteaux du
    Japon.
  </JapanQuote>
)

export const ArashiyamaQuote = () => (
  <JapanQuote>
    Le bambou serait capable de repousser les mauvais esprits, il représenterait la force et la prospérité.{" "}
  </JapanQuote>
)

export const KinkakujiQuote = () => (
  <JapanQuote>
    Temple bouddhiste reconnu pour sa beauté. Surnommé le Pavillon d’or, il doit ce nom au fait que ses étages sont
    entièrement recouverts de feuilles d’or.
  </JapanQuote>
)

export const FushimiInariTaishaQuote = () => (
  <JapanQuote>
    Le sanctuaire est surtout connu pour ses quelques milliers de Torii Vermillon qui crée un chemin dans une forêt
    remplie de pins.
  </JapanQuote>
)

export const DaigojiQuote = () => (
  <JapanQuote>
    Daigo-ji est un ensemble de temples bouddhiste et de jardins, haut en couleur à chaque saison.
  </JapanQuote>
)

export const NagoyaCastleQuote = () => (
  <JapanQuote>
    Véritable symbole de cette ville très peu touristique du Japon, le château de Nagoya et ses vastes jardins sont
    clairement un lieu à faire si vous y êtes de passage.
  </JapanQuote>
)

export const ToganjiQuote = () => <JapanQuote>Toganji</JapanQuote>
export const TokyoQuote = () => <JapanQuote>Tokyo</JapanQuote>
export const FujiQuote = () => <JapanQuote>Fuji</JapanQuote>
export const HamarikyuGardenQuote = () => <JapanQuote>HamarikyuGarden</JapanQuote>

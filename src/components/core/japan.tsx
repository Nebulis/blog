import css from "@emotion/css"
import React, { FunctionComponent, HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { Quote } from "./quote"
import { ExternalLink } from "./links/link"
import { MainArashiyamaImage } from "../images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { JapanCard } from "../card"
import { MainKinkakujiImage } from "../images/asia/japan/kyoto/kinkakuji/mainKinkakujiImage"
import { MainDaigojiImage } from "../images/asia/japan/kyoto/daigoji/mainDaigojiImage"
import { MainFushimiImage } from "../images/asia/japan/kyoto/fushimi/mainFushimiImage"
import { MainTokyoImage } from "../images/asia/japan/tokyo/adayintokyo/mainTokyoImage"
import { MainSensojiImage } from "../images/asia/japan/tokyo/sensoji/mainSensojiImage"
import { MainHamarikyuGardenImage } from "../images/asia/japan/tokyo/hamarikyu/mainHamarikyuGardenImage"

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

export const ArashiyamaCard = () => (
  <JapanCard title="Arashiyama – Forêt de Bambous géants" to="arashiyama">
    <MainArashiyamaImage />
    <ArashiyamaQuote />
  </JapanCard>
)

export const KinkakujiCard = () => (
  <JapanCard title="Temple de Kinkakuji – Le pavillon d’or" to="kinkakuji">
    <MainKinkakujiImage />
    <KinkakujiQuote />
  </JapanCard>
)

export const DaigojiCard = () => (
  <JapanCard title="Temple Daigo-ji" to="daigoji">
    <MainDaigojiImage />
    <DaigojiQuote />
  </JapanCard>
)
export const FushimiInariTaishaCard = () => (
  <JapanCard title="Fushimi Inari Taisha – Santuaire aux Torii" to="fushimi-inari-taisha">
    <MainFushimiImage />
    <FushimiInariTaishaQuote />
  </JapanCard>
)
export const ADayInTokyoCard = () => (
  <JapanCard title="Une journée à Tokyo" to="tokyo">
    <MainTokyoImage />
  </JapanCard>
)
export const HamarikyuGardenCard = () => (
  <JapanCard title="Jardin Hama Rikyu – Un havre de paix en pleine ville" to="tokyo">
    <MainHamarikyuGardenImage />
    <HamarikyuGardenQuote />
  </JapanCard>
)

export const SensojiCard = () => (
  <JapanCard title="Le temple de Senso-Ji" to="sensoji">
    <MainSensojiImage />
    <SensojiQuote />
  </JapanCard>
)

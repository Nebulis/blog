import React from "react"
import { MainArashiyamaImage } from "../../images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { MainKinkakujiImage } from "../../images/asia/japan/kyoto/kinkakuji/mainKinkakujiImage"
import { MainDaigojiImage } from "../../images/asia/japan/kyoto/daigoji/mainDaigojiImage"
import { MainFushimiImage } from "../../images/asia/japan/kyoto/fushimi/mainFushimiImage"
import { MainTokyoImage } from "../../images/asia/japan/tokyo/adayintokyo/mainTokyoImage"
import { MainSensojiImage } from "../../images/asia/japan/tokyo/sensoji/mainSensojiImage"
import { MainHamarikyuGardenImage } from "../../images/asia/japan/tokyo/hamarikyu/mainHamarikyuGardenImage"
import { MainFujiImage } from "../../images/asia/japan/fuji/kawaguchiko/mainFujiImage"
import { MainHimejiCastleImage } from "../../images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainNagoyaCastleImage } from "../../images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
import { ImageAsPortrait } from "../../images/layout"
import { MainToganjiImage } from "../../images/asia/japan/nagoya/toganji/mainToganjiImage"
import { Card } from "../../card"
import { japanPrimaryColor, japanPrimaryColorDarker } from "./japan.variables"
import styled from "@emotion/styled"

export const JapanCard = styled(Card)`
  .tags a {
    color: ${japanPrimaryColor};
  }
  .tags a:hover {
    border-bottom: 1px solid ${japanPrimaryColorDarker};
  }
`

export const ArashiyamaCard = () => (
  <JapanCard title="Arashiyama – Forêt de Bambous géants" to="arashiyama" tags={["japan", "kyoto"]}>
    <MainArashiyamaImage />
  </JapanCard>
)

export const KinkakujiCard = () => (
  <JapanCard title="Temple de Kinkakuji – Le pavillon d’or" to="kinkakuji" tags={["japan", "kyoto"]}>
    <MainKinkakujiImage />
    {/*<KinkakujiQuote />*/}
  </JapanCard>
)

export const DaigojiCard = () => (
  <JapanCard title="Temple Daigo-ji" to="daigoji" tags={["japan", "kyoto"]}>
    <MainDaigojiImage />
  </JapanCard>
)
export const FushimiInariTaishaCard = () => (
  <JapanCard title="Fushimi Inari Taisha – Santuaire aux Torii" to="fushimi-inari-taisha" tags={[]}>
    <MainFushimiImage />
  </JapanCard>
)
export const ADayInTokyoCard = () => (
  <JapanCard title="Une journée à Tokyo" to="a-day-in-tokyo" tags={[]}>
    <MainTokyoImage />
  </JapanCard>
)
export const HamarikyuGardenCard = () => (
  <JapanCard title="Jardin Hama Rikyu – Un havre de paix en pleine ville" to="hamarikyu-garden" tags={[]}>
    <MainHamarikyuGardenImage />
  </JapanCard>
)

export const SensojiCard = () => (
  <JapanCard title="Le temple de Senso-Ji" to="sensoji" tags={[]}>
    <MainSensojiImage />
  </JapanCard>
)
export const KawaguchikoLakeCard = () => (
  <JapanCard title="Mont Fuji - Lac Kawaguchiko" to="fuji" tags={[]}>
    <MainFujiImage />
  </JapanCard>
)

export const HimejiCastleCard = () => (
  <JapanCard title="Château de Himeji – Magnifique château du Héron Blanc" to="himeji-castle" tags={[]}>
    <MainHimejiCastleImage />
  </JapanCard>
)

export const NagoyaCastleCard = () => (
  <JapanCard title="Château de Nagoya" to="nagoya-castle" tags={[]}>
    <MainNagoyaCastleImage />
  </JapanCard>
)

export const ToganjiCard = () => (
  <JapanCard title="Le temple de Togan-Ji" to="toganji" tags={[]}>
    <ImageAsPortrait>
      <MainToganjiImage />
    </ImageAsPortrait>
  </JapanCard>
)

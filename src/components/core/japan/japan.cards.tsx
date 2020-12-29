import React, { FunctionComponent } from "react"
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
import { ExtraCardProps } from "../../../types/shared"
import { useCustomTranslation } from "../../../i18n"

export const JapanCard = styled(Card)`
  .tags a {
    color: ${japanPrimaryColor};
  }
  .tags a:hover {
    border-bottom: 1px solid ${japanPrimaryColorDarker};
  }
`

export const ArashiyamaCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => {
  const { i18n } = useCustomTranslation()
  const title = {
    fr: "Arashiyama – Forêt de bambous géants",
    en: "Arashiyama – Giant bamboo forest",
  }
  return (
    <JapanCard title={title[i18n.languageCode]} to="arashiyama">
      <MainArashiyamaImage fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const KinkakujiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Temple de Kinkakuji – Le pavillon d’or" to="kinkakuji">
    <MainKinkakujiImage fluidObject={fluidObject} />
  </JapanCard>
)

export const DaigojiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Temple Daigo-ji" to="daigoji">
    <MainDaigojiImage fluidObject={fluidObject} />
  </JapanCard>
)
export const FushimiInariTaishaCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Fushimi Inari Taisha – Santuaire aux Torii" to="fushimi-inari-taisha">
    <MainFushimiImage fluidObject={fluidObject} />
  </JapanCard>
)
export const ADayInTokyoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Une journée à Tokyo" to="a-day-in-tokyo">
    <MainTokyoImage fluidObject={fluidObject} />
  </JapanCard>
)
export const HamarikyuGardenCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Jardin Hama Rikyu – Un havre de paix en pleine ville" to="hamarikyu-garden">
    <MainHamarikyuGardenImage fluidObject={fluidObject} />
  </JapanCard>
)

export const SensojiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Le temple de Senso-Ji" to="sensoji">
    <MainSensojiImage fluidObject={fluidObject} />
  </JapanCard>
)
export const KawaguchikoLakeCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Mont Fuji - Lac Kawaguchiko" to="fuji">
    <MainFujiImage fluidObject={fluidObject} />
  </JapanCard>
)

export const HimejiCastleCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Château de Himeji – Magnifique château du Héron Blanc" to="himeji-castle">
    <MainHimejiCastleImage fluidObject={fluidObject} />
  </JapanCard>
)

export const NagoyaCastleCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Château de Nagoya" to="nagoya-castle">
    <MainNagoyaCastleImage fluidObject={fluidObject} />
  </JapanCard>
)

export const ToganjiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Le temple de Togan-Ji" to="toganji">
    <ImageAsPortrait>
      <MainToganjiImage fluidObject={fluidObject} />
    </ImageAsPortrait>
  </JapanCard>
)

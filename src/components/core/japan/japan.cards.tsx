import React, { FunctionComponent } from "react"
import { ImageAsPortrait } from "../../images/layout"
import { MainToganjiImage } from "../../images/asia/japan/nagoya/toganji/mainToganjiImage"
import { Card } from "../../card"
import { japanPrimaryColor, japanPrimaryColorDarker } from "./japan.variables"
import styled from "@emotion/styled"
import { ExtraCardProps } from "../../../types/shared"
import { useCustomTranslation } from "../../../i18n"
import { SharedCardJapanImages } from "../../images/asia/japan/shared-card-japan-images"

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
      <SharedCardJapanImages image="arashiyama" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const KinkakujiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Temple de Kinkakuji – Le pavillon d’or" to="kinkakuji">
    <SharedCardJapanImages image="kinkakuji" fluidObject={fluidObject} />
  </JapanCard>
)

export const DaigojiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Temple Daigo-ji" to="daigoji">
    <SharedCardJapanImages image="daigoji" fluidObject={fluidObject} />
  </JapanCard>
)
export const FushimiInariTaishaCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Fushimi Inari Taisha – Santuaire aux Torii" to="fushimi-inari-taisha">
    <SharedCardJapanImages image="fushimi" fluidObject={fluidObject} />
  </JapanCard>
)
export const ADayInTokyoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Une journée à Tokyo" to="a-day-in-tokyo">
    <SharedCardJapanImages image="aDayInTokyo" fluidObject={fluidObject} />
  </JapanCard>
)
export const HamarikyuGardenCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Jardin Hama Rikyu – Un havre de paix en pleine ville" to="hamarikyu-garden">
    <SharedCardJapanImages image="hamarikyuGarden" fluidObject={fluidObject} />
  </JapanCard>
)

export const SensojiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Le temple de Senso-Ji" to="sensoji">
    <SharedCardJapanImages image="sensoji" fluidObject={fluidObject} />
  </JapanCard>
)
export const KawaguchikoLakeCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Mont Fuji - Lac Kawaguchiko" to="fuji">
    <SharedCardJapanImages image="mountFuji" fluidObject={fluidObject} />
  </JapanCard>
)

export const HimejiCastleCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Château de Himeji – Magnifique château du Héron Blanc" to="himeji-castle">
    <SharedCardJapanImages image="himejiCastle" fluidObject={fluidObject} />
  </JapanCard>
)

export const NagoyaCastleCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Château de Nagoya" to="nagoya-castle">
    <SharedCardJapanImages image="nagoyaCastle" fluidObject={fluidObject} />
  </JapanCard>
)

// todo move this image into SharedCardJapanImages
export const ToganjiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject }) => (
  <JapanCard title="Le temple de Togan-Ji" to="toganji">
    <ImageAsPortrait>
      <MainToganjiImage fluidObject={fluidObject} />
    </ImageAsPortrait>
  </JapanCard>
)

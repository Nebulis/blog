import React, { FunctionComponent } from "react"
import { Card } from "../../card"
import { japanPrimaryColor, japanPrimaryColorDarker } from "./japan.variables"
import styled from "@emotion/styled"
import { ExtraCardProps } from "../../../types/shared"
import { useCustomTranslation } from "../../../i18n-hook"
import { SharedCardJapanImages } from "../../images/asia/japan/shared-card-japan-images"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"

export const JapanCard = styled(Card)`
  .tags a {
    color: ${japanPrimaryColor};
  }
  .tags a:hover {
    border-bottom: 1px solid ${japanPrimaryColorDarker};
  }
  .show-more {
    color: ${japanPrimaryColor};
  }
`

export const SpringInJapanCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["spring-in-japan"]} to="spring-in-japan" {...card}>
      <SharedCardJapanImages image="springInJapan" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const PrepareJapanCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.prepare} to="prepare-japan" {...card}>
      <SharedCardJapanImages image="prepareJapan" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const TransportsJapanCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.transports} to="transports-in-japan" {...card}>
      <SharedCardJapanImages image="transportsInJapan" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const FoodJapanCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.food} to="food-in-japan" {...card}>
      <SharedCardJapanImages image="foodInJapan" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const CustomsInJapanCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["customs-in-japan"]} to="customs-in-japan" {...card}>
      <SharedCardJapanImages image="customsInJapan" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const ArashiyamaCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.arashiyama} to="arashiyama" {...card}>
      <SharedCardJapanImages image="arashiyama" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const KinkakujiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.kinkakuji} to="kinkakuji" {...card}>
      <SharedCardJapanImages image="kinkakuji" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const DaigojiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.daigoji} to="daigoji" {...card}>
      <SharedCardJapanImages image="daigoji" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const FushimiInariTaishaCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["fushimi-inari-taisha"]} to="fushimi-inari-taisha" {...card}>
      <SharedCardJapanImages image="fushimi" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const TwoDaysInTokyoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["two-days-in-tokyo"]} to="two-days-in-tokyo" {...card}>
      <SharedCardJapanImages image="twoDaysInTokyo" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const HamarikyuGardenCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  // – Un havre de paix en pleine ville
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["hamarikyu-garden"]} to="hamarikyu-garden" {...card}>
      <SharedCardJapanImages image="hamarikyuGarden" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const SensojiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card.sensoji} to="sensoji" {...card}>
      <SharedCardJapanImages image="sensoji" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const KawaguchikoLakeCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["kawaguchiko-lake"]} to="kawaguchiko-lake" {...card}>
      <SharedCardJapanImages image="mountFuji" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const HimejiCastleCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["himeji-castle"]} to="himeji-castle" {...card}>
      <SharedCardJapanImages image="himejiCastle" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const NagoyaCastleCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["nagoya-castle"]} to="nagoya-castle" {...card}>
      <SharedCardJapanImages image="nagoyaCastle" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const ToganjiCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["toganji"]} to="toganji" {...card}>
      <SharedCardJapanImages image="toganji" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const UenoParkCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["ueno-park"]} to="ueno-park" {...card}>
      <SharedCardJapanImages image="uenoPark" fluidObject={fluidObject} />
    </JapanCard>
  )
}

export const ShibuyaDistrictCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["shibuya-district"]} to="shibuya-district" {...card}>
      <SharedCardJapanImages image="shibuyaDistrict" fluidObject={fluidObject} />
    </JapanCard>
  )
}
export const YasukuniDoriCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <JapanCard title={common.country.japan.card["yasukuni-dori"]} to="yasukuni-dori" {...card}>
      <SharedCardJapanImages image="yasukuniDori" fluidObject={fluidObject} />
    </JapanCard>
  )
}

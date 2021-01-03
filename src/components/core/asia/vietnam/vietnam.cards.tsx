import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { vietnamPrimaryColorDarker } from "./vietnam.colors"
import styled from "@emotion/styled"
import { MainCuChiTunnelsImage } from "../../../images/asia/vietnam/southern-vietnam/cu-chi-tunnels/mainCuChiTunnelsImage"
import { MainWarMuseumImage } from "../../../images/asia/vietnam/southern-vietnam/war-museum/war-museum-main"
import { MainCanThoImage } from "../../../images/asia/vietnam/southern-vietnam/can-tho/can-tho-main"
import { MainMyThoImage } from "../../../images/asia/vietnam/southern-vietnam/my-tho/my-tho-main"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n"
import { HomeVietnamImage } from "../../../images/asia/vietnam/home-vietnam"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const VietnamCard = styled(Card)`
  .tags a {
    color: ${vietnamPrimaryColorDarker};
  }
  .tags a:hover {
    border-bottom: 1px solid ${vietnamPrimaryColorDarker};
  }
  .show-more {
    color: ${vietnamPrimaryColorDarker};
  }
`

export const CuChiTunnelsCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.card.vietnam["cu-chi-tunnels"]} to="cu-chi-tunnels" {...card}>
      <MainCuChiTunnelsImage fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const WarMuseumCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.card.vietnam["ho-chi-minh-war-museum"]} to="ho-chi-minh-war-museum" {...card}>
      <MainWarMuseumImage fluidObject={fluidObject} />
    </VietnamCard>
  )
}
export const CanThoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.card.vietnam["can-tho"]} to="can-tho" {...card}>
      <MainCanThoImage fluidObject={fluidObject} />
    </VietnamCard>
  )
}
export const MyThoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.card.vietnam["my-tho"]} to="my-tho" {...card}>
      <MainMyThoImage fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const SouthVietnamCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.card.vietnam["discover-southern-vietnam"]} to="discover-southern-vietnam" {...card}>
      <HomeVietnamImage fluidObject={fluidObject} />
    </VietnamCard>
  )
}

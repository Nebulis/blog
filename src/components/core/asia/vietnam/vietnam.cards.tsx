import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { vietnamPrimaryColorDarker } from "./vietnam.colors"
import styled from "@emotion/styled"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { SharedCardVietnamImages } from "../../../images/asia/vietnam/shared-card-vietnam-images"

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
    <VietnamCard title={common.country.vietnam.card["cu-chi-tunnels"]} to="cu-chi-tunnels" {...card}>
      <SharedCardVietnamImages image="cuChiTunnelsMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const WarMuseumCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.country.vietnam.card["ho-chi-minh-war-museum"]} to="ho-chi-minh-war-museum" {...card}>
      <SharedCardVietnamImages image="warMuseumMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}
export const CanThoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.country.vietnam.card["can-tho"]} to="can-tho" {...card}>
      <SharedCardVietnamImages image="canThoMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}
export const MyThoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.country.vietnam.card["my-tho"]} to="my-tho" {...card}>
      <SharedCardVietnamImages image="myThoMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const PrepareVietnamCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.country.vietnam.card.prepare} to="prepare-vietnam" {...card}>
      <SharedCardVietnamImages image="prepareMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const TransportVietnamCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.country.vietnam.card.transport} to="transport-vietnam" {...card}>
      <SharedCardVietnamImages image="transportMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const FoodVietnamCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard title={common.country.vietnam.card.food} to="food-vietnam" {...card}>
      <SharedCardVietnamImages image="foodMain" fluidObject={fluidObject} />
    </VietnamCard>
  )
}

export const SouthVietnamCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <VietnamCard
      title={common.country.vietnam.card["discover-southern-vietnam"]}
      to="discover-southern-vietnam"
      {...card}
    >
      <SharedCardVietnamImages fluidObject={fluidObject} image="discoverSouthernVietnam" />
    </VietnamCard>
  )
}

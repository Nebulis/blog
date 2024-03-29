import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import styled from "@emotion/styled"
import { malaysiaPrimaryColorDarker } from "./malaysia.variables"
import { SharedCardMalaysiaImages } from "../../../images/asia/malaysia/shared-card-malaysia-images"
import { CarouselImageQuery } from "../../../images/carousel"

export const MalaysiaCard = styled(Card)`
  .tags a {
    color: ${malaysiaPrimaryColorDarker};
  }
  .tags a:hover {
    border-bottom: 1px solid ${malaysiaPrimaryColorDarker};
  }
  .show-more {
    color: ${malaysiaPrimaryColorDarker};
  }
`

export const SemenggohNatureReserveCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <MalaysiaCard
      title={common.country.malaysia.card["semenggoh-nature-reserve"]}
      to="semenggoh-nature-reserve"
      {...card}
    >
      <SharedCardMalaysiaImages image="semenggohNatureReserve" fluidObject={fluidObject} />
    </MalaysiaCard>
  )
}

export const KubahNightFrogsTourCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <MalaysiaCard title={common.country.malaysia.card["kubah-night-frogs-tour"]} to="kubah-night-frogs-tour" {...card}>
      <SharedCardMalaysiaImages image="kubahNightFrogsTour" fluidObject={fluidObject} />
    </MalaysiaCard>
  )
}

export const BakoNationalParkCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <MalaysiaCard title={common.country.malaysia.card["bako-national-park"]} to="bako-national-park" {...card}>
      <SharedCardMalaysiaImages image="bakoNationalPark" fluidObject={fluidObject} />
    </MalaysiaCard>
  )
}
export const WeekendKuchingCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <MalaysiaCard title={common.country.malaysia.card["weekend-in-kuching"]} to="weekend-in-kuching" {...card}>
      <CarouselImageQuery image="malaysia2" fluidObject={fluidObject} />
    </MalaysiaCard>
  )
}
export const LangkawiDreamHotelCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <MalaysiaCard title={common.country.malaysia.card["langkawi-dream-hotel"]} to="langkawi-dream-hotel" {...card}>
      <SharedCardMalaysiaImages image="langkawiDreamHotel" fluidObject={fluidObject} />
    </MalaysiaCard>
  )
}

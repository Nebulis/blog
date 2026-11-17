import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { cambodiaPrimaryColor, cambodiaPrimaryColorDarker } from "./cambodia.variables"
import styled from "@emotion/styled"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import { SharedCardCambodiaImages } from "../../../images/asia/cambodia/shared-card-cambodia-images"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"

export const CambodiaCard = styled(Card)`
  .tags a {
    color: ${cambodiaPrimaryColor};
  }
  .tags a:hover {
    border-bottom: 1px solid ${cambodiaPrimaryColorDarker};
  }
  .show-more {
    color: ${cambodiaPrimaryColor};
  }
`

export const DiscoverCambodiaCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <CambodiaCard title={common.country.cambodia.card["discover-cambodia"]} to="discover-cambodia" {...card}>
      <SharedCardCambodiaImages image="discoverCambodia" fluidObject={fluidObject} />
    </CambodiaCard>
  )
}

export const AngkorWatCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <CambodiaCard title={common.country.cambodia.card["angkor-wat"]} to="angkor-wat" {...card}>
      <SharedCardCambodiaImages image="angkorWat" fluidObject={fluidObject} />
    </CambodiaCard>
  )
}

export const KampongPhlukCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <CambodiaCard title={common.country.cambodia.card["kampong-phluk"]} to="kampong-phluk" {...card}>
      <SharedCardCambodiaImages image="kampongPhluk" fluidObject={fluidObject} />
    </CambodiaCard>
  )
}

export const TuolSlengCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <CambodiaCard
      title={common.country.cambodia.card["tuol-sleng-genocide-museum"]}
      to="tuol-sleng-genocide-museum"
      {...card}
    >
      <SharedCardCambodiaImages image="tuolSleng" fluidObject={fluidObject} />
    </CambodiaCard>
  )
}

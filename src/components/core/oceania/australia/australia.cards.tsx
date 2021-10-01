import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import styled from "@emotion/styled"
import { australiaPrimaryColorDarker } from "./australia.variables"
import { SharedCardAustraliaImages } from "../../../images/oceania/australia/shared-card-australia-images"

export const AustraliaCard = styled(Card)`
  .tags a {
    color: ${australiaPrimaryColorDarker};
  }
  .tags a:hover {
    border-bottom: 1px solid ${australiaPrimaryColorDarker};
  }
  .show-more {
    color: ${australiaPrimaryColorDarker};
  }
`

export const FromTownsvilleToCairnsCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <AustraliaCard
      title={common.country.australia.card["from-townsville-to-cairns"]}
      to="from-townsville-to-cairns"
      {...card}
    >
      <SharedCardAustraliaImages image="fromTownsvilleToCairns" fluidObject={fluidObject} />
    </AustraliaCard>
  )
}

export const GreenIslandCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <AustraliaCard title={common.country.australia.card["green-island"]} to="green-island" {...card}>
      <SharedCardAustraliaImages image="greenIsland" fluidObject={fluidObject} />
    </AustraliaCard>
  )
}

export const KurandaVillageCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <AustraliaCard title={common.country.australia.card["kuranda-village"]} to="kuranda-village" {...card}>
      <SharedCardAustraliaImages image="kurandaVillage" fluidObject={fluidObject} />
    </AustraliaCard>
  )
}

export const MagneticIslandCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <AustraliaCard title={common.country.australia.card["magnetic-island"]} to="magnetic-island" {...card}>
      <SharedCardAustraliaImages image="magneticIsland" fluidObject={fluidObject} />
    </AustraliaCard>
  )
}

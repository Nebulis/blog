import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import styled from "@emotion/styled"
import { malaysiaPrimaryColorDarker } from "./malaysia.variables"
import { SharedCardMalaysiaImages } from "../../../images/asia/malaysia/shared-card-malaysia-images"

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

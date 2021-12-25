import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import styled from "@emotion/styled"
import { singaporePrimaryColorDarker } from "./singapore.variables"
import { SharedCardSingaporeImages } from "../../../images/asia/singapore/shared-card-singapore-images"

export const SingaporeCard = styled(Card)`
  .tags a {
    color: ${singaporePrimaryColorDarker};
  }
  .tags a:hover {
    border-bottom: 1px solid ${singaporePrimaryColorDarker};
  }
  .show-more {
    color: ${singaporePrimaryColorDarker};
  }
`

export const ChritmasInSingaporeCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <SingaporeCard
      title={common.country.singapore.card["christmas-in-singapore"]}
      to="christmas-in-singapore"
      {...card}
    >
      <SharedCardSingaporeImages image="christmasInSingapore" fluidObject={fluidObject} />
    </SingaporeCard>
  )
}

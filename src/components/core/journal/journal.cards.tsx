import { ExtraCardProps } from "../../../types/shared"
import { useCustomTranslation } from "../../../i18n-hook"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import React, { FunctionComponent } from "react"
import { SharedJournalImages } from "../../images/journal/shared-journal-images"
import { Card } from "../../card"

export const MovingAbroadWhyCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <Card title={common.journal["living-abroad"].card["moving-abroad-why"]} to="moving-abroad-why" {...card}>
      <SharedJournalImages image="movingAbroadWhy" fluidObject={fluidObject} />
    </Card>
  )
}
export const LivingAbroadWhereCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <Card title={common.journal["living-abroad"].card["living-abroad-where"]} to="living-abroad-where" {...card}>
      <SharedJournalImages image="livingAbroadWhere" fluidObject={fluidObject} />
    </Card>
  )
}

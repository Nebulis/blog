import { ExtraCardProps } from "../../../types/shared"
import { useCustomTranslation } from "../../../i18n-hook"
import commonFr from "../../../locales/fr/common.json"
import commonEn from "../../../locales/en/common.json"
import React, { FunctionComponent } from "react"
import { Card } from "../../card"
import { SharedAnimalsImages } from "../../images/animals/shared-animals-images"

export const OrangutanCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <Card title={common.animals.orangutan} to="orangutan" {...card}>
      <SharedAnimalsImages image="homeOrangutan" fluidObject={fluidObject} />
    </Card>
  )
}

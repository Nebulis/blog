import { Card } from "../../../card"
import styled from "@emotion/styled"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { philippinesPrimaryColor } from "./philippines.colors"
import React, { FunctionComponent } from "react"
import { HomePhilippinesImage } from "../../../images/asia/philippines/home"

export const PhilippinesCard = styled(Card)`
  .tags a {
    color: ${philippinesPrimaryColor};
  }
  .tags a:hover {
    border-bottom: 1px solid ${philippinesPrimaryColor};
  }
  .show-more {
    color: ${philippinesPrimaryColor};
  }
`

export const ElNidoParadiseCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <PhilippinesCard title={common.card.philippines["el-nido-paradise"]} to="el-nido-paradise" {...card}>
      <HomePhilippinesImage fluidObject={fluidObject} />
    </PhilippinesCard>
  )
}

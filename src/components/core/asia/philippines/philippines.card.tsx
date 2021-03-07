import { Card } from "../../../card"
import styled from "@emotion/styled"
import { ExtraCardProps } from "../../../../types/shared"
import { useCustomTranslation } from "../../../../i18n-hook"
import commonFr from "../../../../locales/fr/common.json"
import commonEn from "../../../../locales/en/common.json"
import { philippinesPrimaryColor } from "./philippines.colors"
import React, { FunctionComponent } from "react"
import { SharedCardPhilippinesImages } from "../../../images/asia/philippines/shared-card-philippines-images"

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
    <PhilippinesCard title={common.country.philippines.card["el-nido-paradise"]} to="el-nido-paradise" {...card}>
      <SharedCardPhilippinesImages image="elNido" fluidObject={fluidObject} />
    </PhilippinesCard>
  )
}

export const ElNidoWhichTourCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <PhilippinesCard title={common.country.philippines.card["which-tour"]} to="el-nido-which-tour" {...card}>
      <SharedCardPhilippinesImages image="whichTour" fluidObject={fluidObject} />
    </PhilippinesCard>
  )
}

export const ElNidoTourACard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => {
  const { i18n } = useCustomTranslation()
  const common = i18n.languageCode === "fr" ? commonFr : commonEn
  return (
    <PhilippinesCard title={common.country.philippines.card["el-nido-tour-a"]} to="el-nido-tour-a" {...card}>
      <SharedCardPhilippinesImages image="tourA" fluidObject={fluidObject} />
    </PhilippinesCard>
  )
}

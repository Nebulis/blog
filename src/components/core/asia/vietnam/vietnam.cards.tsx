import React, { FunctionComponent } from "react"
import { Card } from "../../../card"
import { vietnamPrimaryColorDarker } from "./vietnam.colors"
import styled from "@emotion/styled"
import { MainCuChiTunnelsImage } from "../../../images/asia/vietnam/south-vietnam/cu-chi-tunnels/mainCuChiTunnelsImage"
import { MainWarMuseumImage } from "../../../images/asia/vietnam/south-vietnam/war-museum/war-museum-main"
import { MainCanThoImage } from "../../../images/asia/vietnam/south-vietnam/can-tho/can-tho-main"
import { MainMyThoImage } from "../../../images/asia/vietnam/south-vietnam/my-tho/my-tho-main"
import { ExtraCardProps } from "../../../../types/shared"

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

export const CuChiTunnelsCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => (
  <VietnamCard title="Les tunnels de Cu Chi" to="cu-chi-tunnels" {...card}>
    <MainCuChiTunnelsImage fluidObject={fluidObject} />
  </VietnamCard>
)

export const WarMuseumCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => (
  <VietnamCard title="Le Musée des Vestiges de Guerre" to="ho-chi-minh-war-museum" {...card}>
    <MainWarMuseumImage fluidObject={fluidObject} />
  </VietnamCard>
)

export const CanThoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => (
  <VietnamCard title="Visite de Can Tho et son marché flottant" to="can-tho" {...card}>
    <MainCanThoImage fluidObject={fluidObject} />
  </VietnamCard>
)

export const MyThoCard: FunctionComponent<ExtraCardProps> = ({ fluidObject, card = {} }) => (
  <VietnamCard title="Croisière sur le Mékong entre My Tho et Ben Tre" to="my-tho" {...card}>
    <MainMyThoImage fluidObject={fluidObject} />
  </VietnamCard>
)

import React from "react"
import { Card } from "../../../card"
import { vietnamPrimaryColorDarker } from "./vietnam.colors"
import styled from "@emotion/styled"
import { MainCuChiTunnelsImage } from "../../../images/asia/vietnam/south-vietnam/cu-chi-tunnels/mainCuChiTunnelsImage"
import { MainWarMuseumImage } from "../../../images/asia/vietnam/south-vietnam/war-museum/war-museum-main"
import { MainCanThoImage } from "../../../images/asia/vietnam/south-vietnam/can-tho/can-tho-main"
import { MainMyThoImage } from "../../../images/asia/vietnam/south-vietnam/my-tho/my-tho-main"

export const VietnamCard = styled(Card)`
  .tags a {
    color: ${vietnamPrimaryColorDarker};
  }
  .tags a:hover {
    border-bottom: 1px solid ${vietnamPrimaryColorDarker};
  }
`

export const CuChiTunnelsCard = () => (
  <VietnamCard title="Les tunnels de Cu Chi" to="cu-chi-tunnels" tags={["vietnam", "south-vietnam"]}>
    <MainCuChiTunnelsImage />
  </VietnamCard>
)

export const WarMuseumCard = () => (
  <VietnamCard title="Le Musée des Vestiges de Guerre" to="ho-chi-minh-war-museum" tags={[]}>
    <MainWarMuseumImage />
  </VietnamCard>
)

export const CanThoCard = () => (
  <VietnamCard title="Visite de Can Tho et son marché flottant" to="can-tho" tags={[]}>
    <MainCanThoImage />
  </VietnamCard>
)

export const MyThoCard = () => (
  <VietnamCard title="Croisière sur le Mékong entre My Tho et Ben Tre" to="my-tho" tags={[]}>
    <MainMyThoImage />
  </VietnamCard>
)

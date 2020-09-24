import React from "react"
import { Card } from "../../../card"
import { vietnamPrimaryColor } from "./vietnam.colors"
import styled from "@emotion/styled"
import { MainCuChiTunnelsImage } from "../../../images/asia/vietnam/south-vietnam/cu-chi-tunnels/mainCuChiTunnelsImage"

export const VietnamCard = styled(Card)`
  .tags a {
    color: ${vietnamPrimaryColor};
  }
  .tags a:hover {
    border-bottom: 1px solid ${vietnamPrimaryColor};
  }
`

export const CuChiTunnelsCard = () => (
  <VietnamCard title="Les tunnels de Cu Chi" to="cu-chi-tunnels" tags={["vietnam", "south-vietnam"]}>
    <MainCuChiTunnelsImage />
  </VietnamCard>
)

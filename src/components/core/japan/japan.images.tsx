import { ImageAsMedallion } from "../../images/layout"
import styled from "@emotion/styled"
import { japanPrimaryColor } from "./japan.variables"

export const JapanImageAsMedallion = styled(ImageAsMedallion)`
  &.mobile,
  &:hover {
    border: 6px solid ${japanPrimaryColor};
  }
`

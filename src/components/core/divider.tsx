import styled from "@emotion/styled"
import { primaryColor } from "./variables"

export const Divider = styled.hr`
  color: black;
  height: 2px;
  width: 4rem;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
`

export const PrimaryDivider = styled(Divider)`
  color: ${primaryColor};
  background-color: ${primaryColor};
`

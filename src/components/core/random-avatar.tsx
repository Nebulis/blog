import React, { FunctionComponent } from "react"
import { css } from "@emotion/core"
import Avatars from "@dicebear/avatars"
import sprites from "@dicebear/avatars-jdenticon-sprites"

const size = 60
const style = css`
  border: 1px solid black;
  width: ${size}px;
  height: ${size}px;
`

export const RandomAvatar: FunctionComponent<{ hash: string }> = ({ hash }) => {
  const avatars = new Avatars(sprites, {
    dataUri: true,
    width: size,
    height: size,
  })
  const svg = avatars.create(hash)
  return <img src={svg} css={style} />
}

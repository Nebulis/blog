import React, { FunctionComponent } from "react"
import { css } from "@emotion/react"
import { createAvatar } from "@dicebear/avatars"
import * as avatarStyle from "@dicebear/avatars-jdenticon-sprites"

const size = 60
const style = css`
  border: 1px solid black;
  width: ${size}px;
  height: ${size}px;
`

export const RandomAvatar: FunctionComponent<{ hash: string }> = ({ hash }) => {
  const svg = createAvatar(avatarStyle, {
    seed: hash,
    size,
    dataUri: true,
  })
  return <img src={svg} css={style} />
}

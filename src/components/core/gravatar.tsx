import React, { FunctionComponent } from "react"
import { css } from "@emotion/core"

const style = css`
  border: 1px solid black;
  border-radius: 15px;
  width: 60px;
  height: 60px;
`
export const Gravatar: FunctionComponent<{ hash: string }> = ({ hash }) => (
  <img src={`https://www.gravatar.com/avatar/${hash}?s=200&d=wavatar`} css={style} />
)

import React, { FunctionComponent, ImgHTMLAttributes } from "react"
import { css } from "@emotion/core"

interface ImageProps extends ImgHTMLAttributes<any> {
  landscape?: boolean
}

export const Image: FunctionComponent<ImageProps> = ({ children, landscape = false, ...rest }) => (
  <div
    css={css`
      text-align: ${landscape ? "center" : "inherit"};
    `}
  >
    <img
      css={css`
        width: ${landscape ? "inherit" : "100%"};
      `}
      {...rest}
    >
      {children}
    </img>
  </div>
)

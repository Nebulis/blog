import React, { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"

const style = css`
  position: relative;
  padding-left: 1em;
  padding-right: 1em;
  line-height: 1.5em;
  blockquote {
    text-indent: 2em;
    font-family: "Playfair Display", serif;
  }
  blockquote::before {
    content: "“";
    font-family: "Playfair Display SC", serif;
    font-size: 2.2em;
    font-weight: 900;
    line-height: 1;
    font-style: normal;
    position: absolute;
    left: 0.2em;
  }
`
export const Quote: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  return (
    <div className={`f5 ${className} i`} css={style}>
      <blockquote>{children}</blockquote>
    </div>
  )
}

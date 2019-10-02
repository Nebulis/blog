import React, { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const Quote: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  return (
    <div
      className={`f5 ${className} i`}
      css={css`
        position: relative;
        padding-left: 1em;
        padding-right: 1em;
        line-height: 1.5em;
        blockquote {
          text-indent: 2em;
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
      `}
    >
      <blockquote>{children}</blockquote>
    </div>
  )
}

export const JapanQuote = styled(Quote)`
  blockquote::before {
    color: #ffb7c5;
  }
`

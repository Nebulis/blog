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

  .quote::before {
    vertical-align: middle;
    text-indent: 0;
    content: "“";
    font-family: "Playfair Display SC", serif;
    font-size: 2.2em;
    font-weight: 900;
    font-style: normal;
    margin-right: 0.5rem;
  }
`
export const Quote: FunctionComponent<HTMLAttributes<any> & { position?: "before" | "none" }> = ({
  children,
  className,
  position = "before",
}) => {
  return (
    <div className={`quote-container f5 ${className} i`} css={style}>
      <blockquote className="tc">
        {position === "before" && <span className="quote" />}
        {children}
      </blockquote>
    </div>
  )
}

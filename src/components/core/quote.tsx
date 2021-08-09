import React, { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { primaryColor } from "./variables"

const style = css`
  position: relative;
  padding-left: 1em;
  padding-right: 1em;
  line-height: 1.5em;
  blockquote {
    font-family: "Playfair Display", serif;
  }

  .quote::before {
    vertical-align: bottom;
    content: "“";
    font-family: "Playfair Display SC", serif;
    font-size: 2.2em;
    font-weight: 900;
    font-style: normal;
    margin-right: 0.5rem;
    color: ${primaryColor};
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

export const PageQuote = styled(Quote)`
  padding-left: 0;
  padding-right: 0;
  font-size: 20px;
  blockquote {
    font-family: "Courgette", serif;
    margin-left: 0;
    margin-right: 0;
  }
`

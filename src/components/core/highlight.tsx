import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/react"
import { TitleImage } from "../images/layout"
import { primaryColor } from "./variables"

const style = css`
  font-family: "Playfair Display", serif;
  font-size: 1.38316rem; // like h3
  white-space: break-spaces;
`
export const City: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h2 className={`normal tc ${className} ttu`} css={style}>
    {children}
  </h2>
)

const headlineStyle = css`
  color: ${primaryColor};
`
interface HeadlineProps extends HTMLAttributes<any> {
  image?: string
  alt?: string
}
export const Headline: FunctionComponent<HeadlineProps> = ({ className = "", image, alt, children }) => {
  // get the last word so that me can make sure the last image and the last word wraps together
  let lastWord = ""
  let otherWords: string[] = []
  if (typeof children === "string") {
    otherWords = children.split(" ")
    lastWord = otherWords.pop() ?? ""
  }
  return (
    <City className={`headline ${className}`} css={headlineStyle}>
      {image && <TitleImage src={image} alt={alt} />} {otherWords.length > 0 ? <>{otherWords.join(" ")} </> : ""}
      <span className="nowrap">
        {lastWord} {image && <TitleImage src={image} alt={alt} />}
      </span>
    </City>
  )
}

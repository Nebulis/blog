import * as React from "react"
import { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"
import { japanPrimaryColor } from "./japan.variables"
import cherryBlossom from "../../images/asia/japan/cherry-blossom.png"

const style = css`
  font-family: "Playfair Display", serif;
`
export const City: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <h3 className={`normal tc ${className} ttu`} css={style}>
    {children}
  </h3>
)
const japanCityStyle = css`
  color: ${japanPrimaryColor};
`
export const JapanCity: FunctionComponent = ({ children }) => (
  <City css={japanCityStyle}>
    <img src={cherryBlossom} alt="cherry blossom" /> {children} <img src={cherryBlossom} alt="cherry blossom" />
  </City>
)

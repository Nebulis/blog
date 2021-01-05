import React, { SVGProps, FunctionComponent, SVGAttributes } from "react"
import { css, SerializedStyles } from "@emotion/core"
import { getLink, getLinkUrl } from "./links/links.utils"
import { navigate } from "gatsby"

export const mapProps: SVGProps<any> = {
  fill: "#d4edf5",
  stroke: "#ffffff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "1",
}
export const mapStyle = css`
  max-height: 60vh;
`

export const defaultTextStyle = css`
  fill: black;
  font-weight: bold;
  rect {
    fill: transparent;
  }
`
export const propsFor = ({
  city,
  basicTextStyle = defaultTextStyle,
  hoveredTextStyle = defaultTextStyle,
}: {
  city: string
  basicTextStyle?: SerializedStyles
  hoveredTextStyle?: SerializedStyles
}) => {
  const link = getLink(city)
  if (link.published) {
    return {
      css: hoveredTextStyle,
      onClick: () => navigate(getLinkUrl(city)),
    }
  }
  return {
    css: basicTextStyle,
  }
}

export const PinPoint: FunctionComponent<SVGAttributes<any>> = (props) => {
  return (
    <svg version="1.1" viewBox="0 0 512 512" {...props}>
      <path
        d="M441.554,133.088C423.517,74.8,376.1,27.369,317.812,9.33C256.12-9.78,190.482,0.841,140.381,37.757
			c-49.732,36.661-79.419,95.389-79.419,157.093c0,42.567,13.466,83.008,38.933,116.944L256.02,512l156.125-200.221
			C450.258,260.963,460.984,195.832,441.554,133.088z M256.02,299.88c-57.908,0-105.031-47.123-105.031-105.031
			c0-57.908,47.123-105.031,105.031-105.031c57.908,0,105.031,47.123,105.031,105.031C361.051,252.757,313.928,299.88,256.02,299.88
			z"
      />
      <path
        d="M256.02,120.027c-41.365,0-75.022,33.457-75.022,74.822c0,41.365,33.657,75.022,75.022,75.022
			c41.365,0,75.022-33.657,75.022-75.022C331.043,153.484,297.385,120.027,256.02,120.027z"
      />
    </svg>
  )
}

import React from "react"
import { defaultTextStyle, mapProps, mapStyle, PinPoint, propsFor } from "../../map"
import { vietnamPrimaryColorDarker } from "./vietnam.colors"
import { css } from "@emotion/core"
import { smallStart } from "../../variables"
import { useCustomTranslation } from "../../../../i18n"

const basicTextStyle = css`
  ${defaultTextStyle}
  stroke-width: 0.3;
  text {
    font-size: 27px;
  }
  @media (max-width: ${smallStart}) {
    text {
      font-size: 30px;
    }
  }
`
const hoveredTextStyle = css`
  ${basicTextStyle}
  cursor: pointer;
  &:hover {
    fill: ${vietnamPrimaryColorDarker};
  }
`
export const SouthVietnamMap = () => {
  const { i18n } = useCustomTranslation()
  return (
    <svg css={mapStyle} {...mapProps} viewBox="0 0 800 919" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M386.7 468.3l3.5 1.2 1.5 2.2 2.1 8.5 0.4 2.6 0 1.7-0.6 0.4-2.8 0.7-4.6 8.3-2.5 3-1.3 1.1-2.1 2.1-1.1 1.6-3.6 7.7-0.8 2.5-0.5 2.7-0.2 5.4 0.2 2.2 0.5 2.3 0.8 2 1.5 2.9 0.8 1.1 1 2.3 0.6 2.3 1.4 1.7 2.2 1.6 1.8 2.2 1.2 4.4-1.5 8.2-1 2.7-1.5 3-1.3 1.9-3.7 3.9-4.7-4.2-1.8-1-1.8-0.7-0.8 0.3-0.4 0.9 0.2 2.3-0.3 1.1-1.1 0.8-11.2 3.4-1.9-0.1-1.3-0.3-1.1-0.9 1.4 0 0.9-0.8-1.5-2.8-2.2-7.9-1.6-2.4-2.4-1.8-2.3-0.4-2.1 1.2-1.6 3-1.4-2.8-1.8-2.3-4.7-4.1-2.1-2.3-3.3-5.2-2-1.8-7.2-1.8-2.8-2.1-1.5-3.9-0.3-3-1.8-1.1-2.2-0.5-1.8-1.4-0.1-2 2.2-10.4 1.5-4.7 0.4-2.1-0.2-2.1-2.1-7.3 0.3-3.6-0.1-1.8-0.7-1.6-1.5-1.1-3.6-0.7-1.6-0.9-1.8-2.9 0.4-2.8 1.6-2.4 1.8-2 3.1-2.6 2.3-0.5 6.4 2.4 3.9 0.2 1.6-2 1.3-2.9 3.8-3.9 0.7-1.7 0.4-1.9 0.1-1.9 3.1-3.4 6.3 1.1 7 2.2 5.6 0.1 9.4 2.9 2.7 1.5 1 1.2 1.9 3 1.2 1 1.8 0.3 7.7-2 1.4-0.1 1.4 0.2 1.9 0.6 2.9 2.2 1.8 0.9 1.7-0.1 1.2-2.2z"
        id="VNM444"
        name="Tây Ninh"
      />
      <path
        d="M688.9 285.2l8.7 14 1.9 2.1 2.8 2.2 7.8 5 6 3 3.3 1.1 11.2 2.6 9.3 3.9-9 7.9-1.1 0.7-1.3 0.2-2.8 0-1.3 0.1-2.2 1-1.1 1.6-1.2 2.5-2 5.9-0.2 2.8 0.2 2 0.6 1.2 0 1.5-0.6 2-1.4 3.2-1.4 4.6-0.8 1.3-1.8 0.7-1.7-0.4-4.9-2.7-1.3-0.5-1.4-0.1-1.4 0.3-1.5 0.5-2.5 1.3-1.9 0.3-3-0.6-1 0.1-0.9 0.7-0.7 1.3-0.6 2.9-0.3 5 0.5 6 1.8 9.2-5.8 3.4-2.1 0.6-2.7 0.4-2.4-0.4-6.7-2.9-2.8-0.7-2.2 0.2-2.1 0.8-7.9 6.8-2.3 1.2-2.4 0.2-5.7-1-1.8 0.2-1.9 1-2 1.5-4.1 2-2 1.4-1.2 1.2-0.4 1.2-0.3 2.3-0.8 0.9-0.9 0.2-1.9-0.8-1.3-0.4-2.8-0.1-3.9-0.9-2 0-1.3 0.6-2.9 2.1 1.7-5.3-0.2-1.5-0.5-0.6-3.2-2.2-3.3-6-2.6-1.4-1.5-2.3-2.3-1-2.6-0.6-2.1-0.2-2.2-0.5-1.6-1.1-3.5-5.4-0.9-2.2-0.5-2.6-0.1-3 0.7-2 1.8-1.6 2.1-0.6 1.9 1 1.4-1.8 1.6-2.9 0.8-2.7-2.3-1.7-1.7-1.9-7.4-2.4-1.6-1.1-0.3-0.9 0.1-1.8 0.4-1.3-5.1-3.6-1.4-12.7-2.9-5.2-24 0-17 0.6-0.4-4.2 0.2-3.7-0.4-3.7-1.8-3.8-3.9-4.4-0.9-1.6-0.5-2.1-0.5-4.3-1.6-3.5-0.3-1.5 0.3-1.5 0.8-1.4 1-1.3-0.4-1.9-2.1-1.6-0.4-2 13.8-33.5 4.1-2.1 4-2.2 5.5-4.3 1.2-0.8 1.4-0.5 16.4-2.3 17.2 0.6 2.3-0.3 2.4-0.7 9.2-4.4 2.3-0.5 2.9-0.1 5.2 0.6 34.8 12.4 3.2 2.2 3 3.9 1.7 3.3 1.6 3.6 5.1 17.8 5.8 5.8 19.9 5.1z"
        id="VNM477"
        name="Dak Lak"
      />
      <path
        d="M689.7 61.5l2.2 9.7 0.5 9.8-1.5 11.7-5.6 21.9 0.1 9.1 1.1 6 2.1 4.5 2.2 3.1 4.1 4.6 1.3 1.9 0.5 1.9-0.1 2.6-0.5 2.9-0.3 3.6 0.5 3.2 1.7 3.6 6.2 8.5 3.4 6.4 1.2 3.9 1.9 11.5 0.5 15-0.5 17.7 0.4 3 0.9 2.7 2.3 4.9 0.8 2.5 0.1 2.5-0.3 2.8 0.1 2.5 0.5 2.1 2.1 3.7 0.6 1.9-0.3 2-1.3 2.3-2.7 2.8-4.5 3.3-11.3 6.3-2.9 2.2-2.7 2.6-3 4.5-0.6 6-19.9-5.1-5.8-5.8-5.1-17.8-1.6-3.6-1.7-3.3-3-3.9-3.2-2.2-34.8-12.4-5.2-0.6-2.9 0.1-2.3 0.5-9.2 4.4-2.4 0.7-2.3 0.3-17.2-0.6-16.4 2.3-1.4 0.5-1.2 0.8-5.5 4.3-4 2.2-4.1 2.1 6.1-15 0.5-4.3-0.8-13.7-1-5.1-11.2-22-2.4-3.4-3.1-3.5-1.6-2.7-2.6-3.1-0.7-2.1 0.1-1.5 0.9-3 0.1-1.2-1.5-4.3 0.7-2.3 0.7-1.6 0.4-1.6-0.3-1.7 2.8-1.5 8.9-6.2 5.3-4.8 5-5.5 2.9-4.8 1.8-4 2.1-3.5 3.1-2.9 5.3-3.8 9.1-4.2 49.7-16 14.5-6.8 10.3-7.3 6.3-6 3.8-6 1.6-4 0.5-2.9-0.2-1.8-0.4-1.2-1.6-2.3-0.3-1.1 0.2-1.3 1-0.6 1.3-0.3 1.9 0.1 1.7 0.4 3 1.5 1.1 0.4 1.5 0.1 16.9-4.4 6.6 6.2z"
        id="VNM478"
        name="Gia Lai"
      />
      <path
        d="M779.5 393l1 0.4 0.8 0.7 0.9 1.7-2.1 1.6-0.6 0.3-0.8-0.9-0.8-0.5-1.1-0.1-0.4 0.9 0.2 0.6-2.7-0.3-2.5-1.3-2-1.7-1.2-1.4 0-1 3.8 1 0-2 2.4 1 5.1 1z m10.4-48.6l-0.7 1.8-2.2-0.7-5-3.5-1.6-2.1-1.6-0.5-1.6-1.1 1.2-1.9 3.5-0.4 3.1 0.5 1.9 0.5 1 1.4 0.4 1.7 1.6 4.3z m-2.8-36.6l-1 0.2-1.2 1.1 0.9 1.1 0.2 1.7-0.1 1.9 0 2 6.1 11.8 2.1 2.4 2 0.1 2.5 1.8 0.4 0.6-0.3 1.1-1.8 0.6-0.8 0.7-0.3 2.1 0.5 5.6-0.2 1.8-1.5 0.8-1.4-1.5-1.7-4.1-1.6-1.8-0.3-1.5 2.8-2.4 0-0.9-2.8-4.9-0.2 1.4-0.8 0.6-1.1 0.2-1.6-0.2 0.6 1.2 0.2 1.2-0.2 1.2-0.6 1.2-0.7-1.4-1-1-1.2-0.5-1.7 0 2.5-3.6 0.3-0.7 3.1-1.6 0.6-1.3-0.5-2.2-2.3-3.2-0.9-1.7 0-4.2-0.5-0.6-1.5 0.3-0.5 0.9-0.1 1.1-0.7 1-4.7 3.1-1.3 1.3-3.3 4.1-2 1.8-1.7 0.8-1.2 0.9-3.9 5.7 0 1.3 0.4 5.4-1 0.9 0.1 2.2 0.5 2.2 0 1.3 0.9 0.3-0.1 0.7 1 0 0.5-1.4 0.2-1.7 0.6-1.2 1.5-0.5 0-0.8-0.9 0 0-1.1 2.3 0.8-0.3 1.9-1.2 2.3-0.8 2.1 0.7 2.5 1.6 1.8 6.7 4.4 0.7 1.1-1.4 2.9 0.1 1.4 0.6 1.1 0.7 0.5 2 0.7 2.5 1.7 1.2 1.9-1.5 1.5 1 1-1 0.9-1.6-1.9-1 1.2-0.9 2.4-1.6 1.2-2-0.7-1.4-1.6-1.8-3.4-5.9-6.7-4.1-2.6-3.9 0.6 0.7 0.8 0.7 1.5-2.3-0.3 0.7 1.9 2.1 2.3 0.9 1.5 2.6-0.5 1.4 2.2 0.5 3.3 0.1 3.1 0.4 1.1 1 1.5 1.1 1.2 1.7 1.2 0.1 1.2-0.8 0.8-1.6-0.8-0.9 0-0.5 0.9-1.3 3.8-3.1-1.4 0 0.7 1.3 1 2.6 1.7-0.8 2.1 0.5 1.6 1.2 1.4 1 1.5-3.6-1-1.4 0.3 0.4 0.8 1.8 0.9 0.7 1.1 0.7 3.8 1 1.2 0.7 1.6-0.6 1.3-1.6 1.5-0.1 1.2 0.5 5.7 0.9 2.5 3.9 7.3 1.2 1.5 3.9 2.7 0 0.9-0.4 2.9-2.4 1.9 0 2.3 0.6 2 1.4 1.6 1.8 0.7 0 1-2.2 0.9-2.2-0.1-1.9-1-1.2-1.7-1.9 0.9-1.1-4.2 0.8-10.1-1.6-4.7 1 0-3-8.2-1.3-6-1.3-1.6-1.8 2.4 1.7 3.3 0.8 1-0.7 3.9 0.7 1.4 3.2 3 0.7 2.2-0.4 4-1.2 4-2.3 3.6-3.5 3.2-2.6 0.4-1.5 4.5 0.7 4.7 4.4 0.8 0.6-1.3 2-2.7 2-2.3 1 0.2-0.5 2-1 1.7-0.1 1.9 1.6 2.4-0.1 3-2.9 0.3-1.7-0.1-4.9-0.7-2.7-0.8-2.1-1.3-1.7-1.7-1.7-3-1-4.4-0.8-1.9-1.4-1.6-2.3-1.3-8.5-2.6-8.9-1.4-1.9-0.9-1.8-1.6-1.4-3-0.8-2.3-2.6-5.6-3-9.5-1.4-3.2-2.4-2.9-2-1.8-7.9-3.2-1.7-12.4-1.7-3.8-1.7-0.7-1.8-9.2-0.5-6 0.3-5 0.6-2.9 0.7-1.3 0.9-0.7 1-0.1 3 0.6 1.9-0.3 2.5-1.3 1.5-0.5 1.4-0.3 1.4 0.1 1.3 0.5 4.9 2.7 1.7 0.4 1.8-0.7 0.8-1.3 1.4-4.6 1.4-3.2 0.6-2 0-1.5-0.6-1.2-0.2-2 0.2-2.8 2-5.9 1.2-2.5 1.1-1.6 2.2-1 1.3-0.1 2.8 0 1.3-0.2 1.1-0.7 9-7.9 5-0.2 2-1 2-1.6 4-4.9 3-2.8 2.8-1.6 2.7-1 2.7-0.5 2.8-0.2 5.6 0.4 6.1-0.6 2.8 0 2.5 0.6 1.5 0.7 1.7 1.4z"
        id="VNM479"
        name="Khánh Hòa"
      />
      <path
        d="M696.8 398.5l-2.1 2.1-1.2 1.5-1.1 2.1-0.5 2.4 0.3 2.8 0.7 2.4 0.3 3.1-1.6 12.5-5.9 18.6 0.3 4.2 1.1 2.5 1.3 1.7 2.4 2.4 0.8 1.2 0.5 1.4-0.2 2.1-1 2.7-2.9 3.9-4.8 4.1-1.2 1.4-0.4 2 0 1.6 1.7 6.9-1.2 1.9-1.6 4.1-1.1 1.6-1.5 0.6-2.2-0.8-3.9-2-2.9-0.3-17.3 0.5-2.8 0.6-3.3 1.6-1.9 1.8-1.1 1.7-0.6 2.2-0.1 2.5 0.2 2.4 0.8 2.2 2 3.6 0.3 1.4-0.4 1.5-1.4 1.7-2.7 2.3-3.4 2.4-4 2.2-4.2 1.6-5.8 0.9-3.3 1-2.8 1.6-1.9 2.1-3.5 5-1.9 1.5-1.7 0.6-1.2-0.3-0.6-0.8 0.4-4.5-0.1-2-0.3-1.8-0.9-1.7-1.9-1.5-2.9-1-34.5-1.9-4-0.6-4.8-1.2-4.7-2.3-6.4-2.3-11.2-5.7-5.9-0.7-2.1 0.1-1.6-0.5-1-0.9-0.7-1.9-0.1-1.5 0.3-1.1 1.9-2 0.5-1.3-0.6-1.3-1.3-1.1-2.9-1-2.5-0.6-1.5-0.5-0.9-1.1-0.1-1.1 0.1-3.5-0.5-1.3-1.8-0.6-3.8 0.1-5.2-0.9-0.1-2.7-1.5-3.2-2-2.6-0.2-1.7 0.6-2.1 2.6-5.2 1.9-2.2 1.3-1.3 8.5-4.7 4.1 1.1 1.5 0.1 1.6-0.2 3-0.7 1.5-0.7 1.8-1.4 1.7-1.1 2.3-0.7 4.2-0.6 1.8-0.7 8-5.3 7.3-6.6 0.8-1.3 0.8-2 0.7-0.9 1.2-0.5 2.2-0.4 1.4 0.2 1 0.3 0.7 1.4 0.2 2.1 0.5 1.6 0.9 0.9 2.6 1.8 1.9 0.1 4.7-0.7 2-0.7 4-0.6 1.3 0 1.4 0.3 1.2 0.5 0.8 0.9 0.5 1.1-0.1 2.8 0.1 1.8 0.6 1.4 1 1 1.6 0.2 4.5-0.7 1.5 0.2 1 0.6 1.2 1.7 1.5 1.2 1.4-0.5 2.2-1.7 4.8-5 2.7-4 1.3-3.9-0.3-2.4 0.8-3.7-0.7-2.4-0.9-0.7-1.2-0.4-1.1-0.8-1-2.5-3.3-3.3-1.3-1.7-0.4-1-0.3-3.5-0.5-0.8-0.9-0.5-3.1-2.5 0-1.9 0.3-1.4 1.2-3.2 0.4-1.6 0.9 0 1.2 0.7 1.4-1 1.8-1.5 2.2-1 5.5 0.8 2.6-0.4 0.5-1.2 2.9-2.1 1.3-0.6 2 0 3.9 0.9 2.8 0.1 1.3 0.4 1.9 0.8 0.9-0.2 0.8-0.9 0.3-2.3 0.4-1.2 1.2-1.2 2-1.4 4.1-2 2-1.5 1.9-1 1.8-0.2 5.7 1 2.4-0.2 2.3-1.2 7.9-6.8 2.1-0.8 2.2-0.2 2.8 0.7 6.7 2.9 2.4 0.4 2.7-0.4 2.1-0.6 5.8-3.4 1.7 0.7 1.7 3.8 1.7 12.4z"
        id="VNM480"
        name="Lâm Đồng"
      />
      <path
        d="M762.6 453l-0.1 0.6 5.4 6.7-1.5 3-1-1-1 1-1.2 2.9-2.4 3-0.3 1.2-0.1 1.4-0.5 2-0.8 1-2.4 2.1-0.6 1.1-0.3 1.6-0.8 1.5-1.7 2.2-0.9 0-1.6-1.4-2-0.1-2.3 0.2-2.5-0.6-1.6-1.8-1-4.8-0.6-1-3.2 0.8 0.2 1.7 1.6 1.8 1 0.8-0.3 2-0.5 1.8-0.1 2.1 0.9 2.3-3.8 0 2.1 3.5 0 6-1.2 9.4 0.4 5.3-0.6 1.7-1.7 1.7-3.3 2.7-2 1.3-2 0.6-2.5-0.1-3.7-1.7-0.3-2.1-0.6-1.9-1.7-2.7-2.5-2.3-3.8-1.6-2.7-0.4-4.2 0.3-1.5-0.2-0.9-0.8-0.5-1.7-0.4-3.9-0.3-1.5-0.9-0.9-3.4-0.9-1.3-0.7-0.9-1.3-0.3-1.5-0.5-3.8-0.6-1.7-1-1.5-2-1.2-2.1-0.9-6.4-0.2-1.7-6.9 0-1.6 0.4-2 1.2-1.4 4.8-4.1 2.9-3.9 1-2.7 0.2-2.1-0.5-1.4-0.8-1.2-2.4-2.4-1.3-1.7-1.1-2.5-0.3-4.2 5.9-18.6 1.6-12.5-0.3-3.1-0.7-2.4-0.3-2.8 0.5-2.4 1.1-2.1 1.2-1.5 2.1-2.1 7.9 3.2 2 1.8 2.4 2.9 1.4 3.2 3 9.5 2.6 5.6 0.8 2.3 1.4 3 1.8 1.6 1.9 0.9 8.9 1.4 8.5 2.6 2.3 1.3 1.4 1.6 0.8 1.9 1 4.4 1.7 3 1.7 1.7 2.1 1.3 2.7 0.8 4.9 0.7 1.7 0.1 2.9-0.3z"
        id="VNM481"
        name="Ninh Thuận"
      />
      <path
        d="M787.1 307.8l-1.7-1.4-1.5-0.7-2.5-0.6-2.8 0-6.1 0.6-5.6-0.4-2.8 0.2-2.7 0.5-2.7 1-2.8 1.6-3 2.8-4 4.9-2 1.6-2 1-5 0.2-9.3-3.9-11.2-2.6-3.3-1.1-6-3-7.8-5-2.8-2.2-1.9-2.1-8.7-14 0.6-6 3-4.5 2.7-2.6 2.9-2.2 11.3-6.3 4.5-3.3 2.7-2.8 1.3-2.3 0.3-2-0.6-1.9-2.1-3.7-0.5-2.1-0.1-2.5 0.3-2.8-0.1-2.5-0.8-2.5-2.3-4.9-0.9-2.7-0.4-3 0.5-17.7 11.4 2.7 4.6 0 4.7-0.6 11.4-4.5 2.5-1.8 8.6-10 2.6-2 6.6-1.6 3.5-1.9 0.2 1 0 3.8 0.3 2.8 0.9 3 1.3 2.4 1.7 0.9 0.1 0.7 1.6 1.2 1.8 1.1 0.7-0.1 0.4 1.3 0 0.9-0.8 0.5-1.5 0.2 0 0.9 0.8 1 0.2 1.9-1.1-1.2-3.1-5.4-1.4-3.4-3.6-4.2-1.1-2.1-1 0-0.1 2.2 0.7 1 1.2 0.6 1.1 1 0.7 1.5 0.5 2.8 0.6 1.5 1.7 1.6 1.3 0.7-0.7 1.5 0.5 1.4 2.8 3.4 1 0 1-1.1 1.7-0.8-0.4 1.4-1.2 1.6-0.2 1.2 0.4 1.8 1.2 1.2 1.5 0.2 1.5-0.8 0.7 1.4-1.2 1.9 0.5 1.6-1.3 2.5-0.9 1.2-1.5 1-1.1-1.5-3-0.6-0.5-1.3 0.6-0.9 1.5-0.6 1.3-0.9 0.3-1.8-0.9-1-4.3-2.9-1.3 0.1-1 0.5-0.9 1.1-0.9 2.2 0.7 1.1-0.4 2.3 1.5 1.4-1.1 1-0.4 1.4-0.3 2.3 2.3 1.2 2.3 3.2 1.9 1.2 1.5-1.4 1.1-0.2 1.1 1.6 0.2 1.6-0.4 1.1-1.1 0.5-1.5-0.1 0 0.8 0.7 0.7 0.4 1.8-0.1 1.4-2.8-1.9-0.7 1.3-1.3 0.6 1.9 4.7 1.2 2 1.7 1.9-0.2-4.4 0.5-1.6 1.5-0.7 0-0.9-0.6-1.1 0.7-0.8 0.8 0.9 0.6 1.2 0.2 1.3 0.2 2.8-0.3 1.1-1.6 3.2 0 1.4 0.9 2.8-0.3 2.3-0.7 2.2-0.3 2.1 0.4 2.5 1.1 1.9 1.3 1.7 0.9 1.9-0.4 1.2 1.7 1.2 1.1 1.1 2.8 5.1 3.6 4 2.7 4.4 5.7 6.6 0.9 1.5 0.3 2.2-0.1 2.6-0.5 2.3-0.6 1.5-3.1 0.9-0.6 0-0.4-1 1.7-1.2 1.3-1.7-0.2-0.5-1.4-0.3-2.9 1.9-1.3 2.9-0.6 0.9-1.1 0.4-1.4 0.2z"
        id="VNM482"
        name="Phú Yên"
      />
      <path
        d="M458.7 523l-4.2 9.5-0.4 2.3 0.6 1.4 1.2 0.8 1.3 1.6 1.4 2.4 1.4 4.3 0.2 2.1-0.5 1.7-2.4 4.3-5.7 4.7-1.4 0.5-1.6 0.1-1.7-0.3-1.7-0.8-1.4-1.1-1.3-1.2-1.1-0.6-1.4-0.2-1.7 0.5-1.9 0.9-1.8 1.5-0.5 1.2 0.5 2.6-0.1 2.6 0.1 1.1 1.4 2.6 1.1 1.6 1.5 1.6 2.1 2.9 0.5 4.1-5-0.9-1.6 0.4-5.1 1.8-2.1 0.5-1.7-0.1-1.3-0.7-1.8-2.8-3.4-4.5-2.7-4.5-4.7-6.1-0.2-2.1-0.2-0.8-0.7-0.4-2.6 0-1.2-0.5-1.2-1.6-5.9-9.9-1.2-1.3-1.1-0.8-2.1-0.1-1.7 0.1-7.6 1.6-1.2-4.4-1.8-2.2-2.2-1.6-1.4-1.7-0.6-2.3-1-2.3-0.8-1.1-1.5-2.9-0.8-2-0.5-2.3-0.2-2.2 0.2-5.4 0.5-2.7 0.8-2.5 3.6-7.7 1.1-1.6 2.1-2.1 1.3-1.1 2.5-3 4.6-8.3 2.2 2 2 1.4 1.5 1.5 1.1 1.3 0.4 1.1 0.5 2.1 1.2 0.9 1.7 0.3 1.9 0.5 2.1 1 3.9 2.3 1.6 1.3 0.9 1.2 0 1-0.2 2.8-0.5 3.4 0.1 1.3 0.5 1.2 1.4 1.8 0.5 1 0.1 2.1 0.7 0.9 1.2 0.4 2.6-0.3 1.5-0.9 0.8-1.3 0.7-3.1 1-0.5 1.4 0.3 2 1.8 0.6 1.1-0.1 1-1.3 1.6-0.3 1 0.7 0.6 1.5 0.3 3.3-1 1.6-1.2 1.7-2 1.8 0 2.8 0.8 9.9 4.1 6.6 2.1 4.3 0.2z"
        id="VNM483"
        name="Bình Dương"
      />
      <path
        d="M427.9 668.7l-1.9 0.3-0.8-0.6-1.2-1.7-2.6-1.1-17.7-3.3-6.5-2.8 2.1-0.2 4.6 2 3.6 0.8 15.6 0.2 2.9 0.9 3.1 0.8 1.2 0.8 0.4 1.8-0.8 1.1-2 1z m-16.7-28.6l2.1-1.3 1.5-1.8 1-2.1 0.9 0 0.7 1.9 0.3 2.2 1 1.6 2.7-0.1 1.1-1.1 2.1-3.7 1.4-0.8 2.3 0.8 1.5 2 1.1 2.4 1.2 1.9 1.8 2 0.8 2 1 12-0.6 3-2.1 1.3-2.6-0.2-7.1-1.7-14.4 0.1-9.9-2-5.1 0-2.6-0.6-2.2-1.2-2-0.8-2 0.7-1.4-0.9-4.5-1.8-1.7-0.3-1.7-0.1-1.6 0.2-6.8 2.5-1.7 0.3-7-0.2-3.3 0.5-6.2 2.4-2.6 0.2-4.3 0-3.3-0.7-6.5-2.4-2.2-0.3-2.1 0-2.1 0.3-2 0.8-2.3 1.7-0.2 1.7-7.7-0.3-6.6-1.5-0.6-0.7-0.8-5.2 0.5-1.1 0.8-1.3 1.3-0.9 12.3-15.5 1.2-3.2 0.7-2.5 0-4.4 5.4 0.3 6.5 1.1 3.8-0.1 2.8-0.6 1.4-1.1 2.4-3.2 2.5-1.4 2.8-0.3 14.2 0.8 2.4 0.4 1.7 1 1.8 1.5 5.7 8.1 1.8 1.2 2.4 1 3.8 0.6 2.1 0.9 1.3 1.1 0.5 1.3 0 1.3-0.4 2.8 0.3 1.3 1.2 0.9 1.9 0.4 6.3-0.5 4 0.5 5.8-0.1 3.1-1.4 1-1.6z"
        id="VNM4834"
        name="Tiền Giang"
      />
      <path
        d="M615.1 402.6l-0.5 1.2-2.6 0.4-5.5-0.8-2.2 1-1.8 1.5-1.4 1-1.2-0.7-0.9 0-0.4 1.6-1.2 3.2-0.3 1.4 0 1.9 3.1 2.5 0.9 0.5 0.5 0.8 0.3 3.5 0.4 1 1.3 1.7 3.3 3.3 1 2.5 1.1 0.8 1.2 0.4 0.9 0.7 0.7 2.4-0.8 3.7 0.3 2.4-1.3 3.9-2.7 4-4.8 5-2.2 1.7-1.4 0.5-1.5-1.2-1.2-1.7-1-0.6-1.5-0.2-4.5 0.7-1.6-0.2-1-1-0.6-1.4-0.1-1.8 0.1-2.8-0.5-1.1-0.8-0.9-1.2-0.5-1.4-0.3-1.3 0-4 0.6-2 0.7-4.7 0.7-1.9-0.1-2.6-1.8-0.9-0.9-0.5-1.6-0.2-2.1-0.7-1.4-1-0.3-1.4-0.2-2.2 0.4-1.2 0.5-0.7 0.9-0.8 2-0.8 1.3-7.3 6.6-8 5.3-1.8 0.7-4.2 0.6-2.3 0.7-1.7 1.1-1.8 1.4-1.5 0.7-3 0.7-1.6 0.2-1.5-0.1-4.1-1.1 1.4-4.6 0-1.7-0.5-1.4-1.2-1.6-1-2-0.9-2.4-0.9-6.3-1-3.1-2-3.1-2.1-2.3-7.7-5.2-2-3.5-1.5-6.3-2.5-32.5-0.1-1.6 6.5-2 6-0.5 3.2 1.9 4.1 6.4 2.6 2.3 3.1-0.2 4.6-6.2 3.3-2.3 3.5-1.5 2-2.5 1-3.1 0.7-3.4 4-11.4 0-3.2-0.9-1.9 0.2-1.5 0.9-1.5 0.7-1.7 0.5-4.3-0.2-4.5-3.4-15.3 17-0.6 24 0 2.9 5.2 1.4 12.7 5.1 3.6-0.4 1.3-0.1 1.8 0.3 0.9 1.6 1.1 7.4 2.4 1.7 1.9 2.3 1.7-0.8 2.7-1.6 2.9-1.4 1.8-1.9-1-2.1 0.6-1.8 1.6-0.7 2 0.1 3 0.5 2.6 0.9 2.2 3.5 5.4 1.6 1.1 2.2 0.5 2.1 0.2 2.6 0.6 2.3 1 1.5 2.3 2.6 1.4 3.3 6 3.2 2.2 0.5 0.6 0.2 1.5-1.7 5.3z"
        id="VNM4835"
        name="Đắk Nông"
      />
      <path
        d="M516.4 458.1l-8.5 4.7-1.3 1.3-1.9 2.2-2.6 5.2-0.6 2.1 0.2 1.7 2 2.6 1.5 3.2 0.1 2.7-10.1 5.3-12.7 4-2.9 1.6-2 1.7-1.2 2.2-0.7 1.8-0.5 1.8-0.4 3.4-0.5 0.9-1.7 2.1-1.4 2.7-1.4 1.9-2.8 2.9-2.3 1.6-1.1 1.1-1 1.9-0.9 0.8-3 1.5-4.3-0.2-6.6-2.1-9.9-4.1-2.8-0.8-1.8 0-1.7 2-1.6 1.2-3.3 1-1.5-0.3-0.7-0.6 0.3-1 1.3-1.6 0.1-1-0.6-1.1-2-1.8-1.4-0.3-1 0.5-0.7 3.1-0.8 1.3-1.5 0.9-2.6 0.3-1.2-0.4-0.7-0.9-0.1-2.1-0.5-1-1.4-1.8-0.5-1.2-0.1-1.3 0.5-3.4 0.2-2.8 0-1-0.9-1.2-1.6-1.3-3.9-2.3-2.1-1-1.9-0.5-1.7-0.3-1.2-0.9-0.5-2.1-0.4-1.1-1.1-1.3-1.5-1.5-2-1.4-2.2-2 2.8-0.7 0.6-0.4 0-1.7-0.4-2.6-2.1-8.5-1.5-2.2-3.5-1.2-1.1-3.1-3.7-6.3-0.2-2.2 0.8-1.9 1.1-1.9 0.9-1.9 0.2-1.2 0.2-3.6 2-3.3 0.4-0.3-0.8-3.4-4-7.6-1.3-3.7 3.2-0.9 1.6-0.1 1.7 0.3 1.3 0.9 0.5 1.2 0.7 0.9 1.8 0.1 4.2-2.9 6.5 0.1 11.7 1.6-1.1-2.1 6.8 1.5 2.9-0.8 2.6-3.5 1.6-4.5 2.2-3.3 3.1-1.9 4.2-0.3 10.4 0.8 5-0.6 5-2 3.3-2.2 9.3-9.3 4.3-5.4 3.6-2.5 1.6-1.5 0.9-2 4.1-4.3 8-4 2.2-0.7 0.1 1.6 2.5 32.5 1.5 6.3 2 3.5 7.7 5.2 2.1 2.3 2 3.1 1 3.1 0.9 6.3 0.9 2.4 1 2 1.2 1.6 0.5 1.4 0 1.7-1.4 4.6z"
        id="VNM484"
        name="Bình Phước"
      />
      <path
        d="M745.4 50.8l0.6 9.3 0.7 1.4-0.1 1.5-1.3 0-0.8 1.5-0.9 0.6-0.4 1 0.8 1.8 0.9-2.8 0.1-1.1 4.6 12.6 2.4 3.2 0.6 2-0.2 7.6 0.3 1.9 0.7 2.4 1.8 3.9 4.3 4.8 1.3 1.9 0.5 1.9 0.9 5.8-1.4 2.2 1.9 4.8 4.6 7.4-2.5-0.3-1.1-1.3-0.6-1.7-1.4-1.6-3.1-0.6-0.3 2.2 1.6 2.9 4.2 2.3 1.4 2.2 3.7 10 1.8 15.6 1.2 2 3.6 2.9 0.8 1.3-0.9 11 0.4 5.4-1.1 0.5-3.5 0-0.3-1.5 0.8-8.1-1.9-7-1.1-2.3-1.7 1.5-0.4 1.5-0.5 5.2-1.4 2.6-0.2 1 1.6-0.6 1 3.2 0.9 1.1 1.7 0.4-1.5 1.6-1.7 1.3-1.2 1.8-0.2 3 1.7 3.3-3.5 1.9-6.6 1.6-2.6 2-8.6 10-2.5 1.8-11.4 4.5-4.7 0.6-4.6 0-11.4-2.7-0.5-15-1.9-11.5-1.2-3.9-3.4-6.4-6.2-8.5-1.7-3.6-0.5-3.2 0.3-3.6 0.5-2.9 0.1-2.6-0.5-1.9-1.3-1.9-4.1-4.6-2.2-3.1-2.1-4.5-1.1-6-0.1-9.1 5.6-21.9 1.5-11.7-0.5-9.8-2.2-9.7 6.1-3.7 4.4-1.9 6.5-4.2 3-1 6.5-0.9 15.8 0.9 7.4-1.2 2.3-0.2 2.9 0.8 0.8 0.7z"
        id="VNM485"
        name="Bình Định"
      />
      <path
        d="M491 639.8l1.1 1.8-1.9-1.1-0.9 0-0.4 1.8-1.9 1.3-1 2.7-1.3 0.8-2.8 1-1.9 1.7-2.9 4.2-1.8 1.7-1.8-6.8 0.7-2.6 5.5-1.4 4.1-2.1 0.8-0.8 0.1-1.4 0.4-1.8 0.6-1.6 1.1-1 4.2 3.6z m-27.8-25.8l0.6 0.1 0 1 1.7 0.8 1.4 1-0.4 2.3-1.5 3.4 0.4 1 1.7 1.6-0.2 1.2-0.9 0.2-1.2-0.7-1.6-1.4 1-0.9-1.9-2 0-0.9 0.7-1.2 0.2-1.6 0-3.9z m70.4-18.1l8.5 19.6 1 5.6-2.2 1.6-3.6 3.6-0.7 1.5-1.1 1.7-2.6 1.6-8.7 3.9-2.4 0.7-6.1 0.7-5.4 1.7-1.5-0.4-1.1 1.5-4 3.7-3.3 5.2-2.4-0.1-5.2-3.1-3.5-0.5 0.6-1.2 2.3-0.8 0.8-0.8-0.1-1.3-0.7-1.2-0.9-1-1.3-0.9-2.7-2.8-2 0.1-1.6-0.2-1-0.4 0 2-0.8 0-1.8-1.9-2.7-1.3-2.8-0.2-2.2 1.4-0.8 0 0.4-1.9-0.4-1.8-1.3 2.7-1 1.2-1.5 0.8-0.8-2.7-0.1-1.1-0.7-1.4 0.7-0.5 1-1.5 0.2-1.4-0.3-9.8-0.4-0.9-1.8-1.9-0.1-1.1 1.4 0.6 0-0.6 2.1-0.2 10.3-3.9 2.3-1.4 1.3-1.5 0.4-2.7 0-2.2 0.7-0.8 12.2-5.8 1.8-0.6 1.6-0.1 2 0.8 1.1 1.3 0.4 1.7-0.3 1.8-0.1 1.9 0.4 1.7 1.1 1.6 1.7 1.2 1.9 0.7 2.1-0.2 2.2-1 8.8-11 3.1-3.1 1.6-1.2 2 0.1 1.4 0.4 4.6 5.8z"
        id="VNM495"
        name="Bà Rịa - Vũng Tàu"
      />
      <path
        d="M730.3 628.9l-0.7 2-2.8-0.2-1.4-1.4-0.6-2.2 0.5-2 1.8-1 2.2 2 1 2.8z m-8.2-111.4l-2.2-1-2.1-0.5-2.4 0-2.5 0.4-2.3 1-4.5 3.2-1.7 1.7-1.3 1.7-1.1 2.5-1.6 7.1-1.1 2.4-1.1 1.1-1.7 0.3-2.3 0-1.3-0.3-2.9-1.3-1.8-0.3-1.3 0.4-2.8 1.2-1.4 0.3-5.2 0-0.7 0.5-1.7 1.8-3.8 1.3-2.4 2-1.8 2.5-1.2 2.2-1.3 5.7-1.3 1.5-3.5 0.5-1 0.4-4.9 2.4-1.4 0.3-2.3 0.1-1 0.5-0.8 1.8-1.7 6.3-0.7 1.4-2.7 0.3-1.3 1-2.1 4.4-0.9 0-1.1-4.3-3.6-1.1-16.8 3.3-3.9 1.3-1.6 2.3-0.7 1.3-3.2 3.4-0.7 1.9-0.5 1.6-1.9 3.9-1 5.7-5.1 10.2-0.9 0-1.5-0.9-6-1.8-2.3-0.3-2.8 0.1-2.2 0.4-7.9 3.4-5.7 4.8-1.9 1.1-5 1.7-8.8 4.7-3 0.4-3.1 1.1-4.7 2.6-1-5.6-8.5-19.6 6.3-6.3 1.9-2.9 1.8-3.9 0.2-4.2-0.5-4.2-1.3-3.9-1.3-2.8-1.6-2.7-1.7-1.7-1.8-1.1-2.2-0.2-2.4 0.3-2.8-0.3-2.3-1-2.5-1.9-1.5-2.2 0.9-1.9 2.2-3.6 1.1-2.3 0.6-3.7 1.5-3.8 2.6-4.6 1.4-3.9 0.7-1.4 3.1-5.1 1.9-4.4 2.9-5.3 1.4-2 1.3-1.4 1.7-1.1 1-0.2 6.4 2.3 4.7 2.3 4.8 1.2 4 0.6 34.5 1.9 2.9 1 1.9 1.5 0.9 1.7 0.3 1.8 0.1 2-0.4 4.5 0.6 0.8 1.2 0.3 1.7-0.6 1.9-1.5 3.5-5 1.9-2.1 2.8-1.6 3.3-1 5.8-0.9 4.2-1.6 4-2.2 3.4-2.4 2.7-2.3 1.4-1.7 0.4-1.5-0.3-1.4-2-3.6-0.8-2.2-0.2-2.4 0.1-2.5 0.6-2.2 1.1-1.7 1.9-1.8 3.3-1.6 2.8-0.6 17.3-0.5 2.9 0.3 3.9 2 2.2 0.8 1.5-0.6 1.1-1.6 1.6-4.1 1.2-1.9 6.4 0.2 2.1 0.9 2 1.2 1 1.5 0.6 1.7 0.5 3.8 0.3 1.5 0.9 1.3 1.3 0.7 3.4 0.9 0.9 0.9 0.3 1.5 0.4 3.9 0.5 1.7 0.9 0.8 1.5 0.2 4.2-0.3 2.7 0.4 3.8 1.6 2.5 2.3 1.7 2.7 0.6 1.9 0.3 2.1z"
        id="VNM496"
        name="Bình Thuận"
      />
      <path
        d="M546.2 512.2l-1 0.2-1.7 1.1-1.3 1.4-1.4 2-2.9 5.3-1.9 4.4-3.1 5.1-0.7 1.4-1.4 3.9-2.6 4.6-1.5 3.8-0.6 3.7-1.1 2.3-2.2 3.6-0.9 1.9 1.5 2.2 2.5 1.9 2.3 1 2.8 0.3 2.4-0.3 2.2 0.2 1.8 1.1 1.7 1.7 1.6 2.7 1.3 2.8 1.3 3.9 0.5 4.2-0.2 4.2-1.8 3.9-1.9 2.9-6.3 6.3-4.6-5.8-1.4-0.4-2-0.1-1.6 1.2-3.1 3.1-8.8 11-2.2 1-2.1 0.2-1.9-0.7-1.7-1.2-1.1-1.6-0.4-1.7 0.1-1.9 0.3-1.8-0.4-1.7-1.1-1.3-2-0.8-1.6 0.1-1.8 0.6-12.2 5.8-0.7 0.8 0 2.2-0.4 2.7-1.3 1.5-2.3 1.4-10.3 3.9-2.1 0.2-0.2-2.9-1.4-2.2-4-3.7-0.6 2 1.4 1.5 1.9 1.3 1 1.3-1.2 3.4 0 0.8-0.6-0.1-0.9 0-0.9 3.9-0.1 4.2-1.7-2.4-1-3-2.6-2.7-2.4-2.1-1.8-1.8-2.9-2.3-1.8 0-3.4 1.7-2.4-0.4-2.5-1.8-1.5-1.5-1.7-0.9-2.5-1-1.5-0.4-1.1-0.6-0.1-2.3-0.5-1.8-0.2-3.1-0.5-1.7 0.9-0.4 4.8 2.7 1.3-0.2 1.3-1 1.6-0.9 1.1-0.3 2.7-0.1 1 0.3 2 1 1.4-0.1-0.1-1.8 0.6-0.9 0.1-2-0.6-2.3-3.8-7.1-2.3-3.2-0.5-4.1-2.1-2.9-1.5-1.6-1.1-1.6-1.4-2.6-0.1-1.1 0.1-2.6-0.5-2.6 0.5-1.2 1.8-1.5 1.9-0.9 1.7-0.5 1.4 0.2 1.1 0.6 1.3 1.2 1.4 1.1 1.7 0.8 1.7 0.3 1.6-0.1 1.4-0.5 5.7-4.7 2.4-4.3 0.5-1.7-0.2-2.1-1.4-4.3-1.4-2.4-1.3-1.6-1.2-0.8-0.6-1.4 0.4-2.3 4.2-9.5 3-1.5 0.9-0.8 1-1.9 1.1-1.1 2.3-1.6 2.8-2.9 1.4-1.9 1.4-2.7 1.7-2.1 0.5-0.9 0.4-3.4 0.5-1.8 0.7-1.8 1.2-2.2 2-1.7 2.9-1.6 12.7-4 10.1-5.3 5.2 0.9 3.8-0.1 1.8 0.6 0.5 1.3-0.1 3.5 0.1 1.1 0.9 1.1 1.5 0.5 2.5 0.6 2.9 1 1.3 1.1 0.6 1.3-0.5 1.3-1.9 2-0.3 1.1 0.1 1.5 0.7 1.9 1 0.9 1.6 0.5 2.1-0.1 5.9 0.7 11.2 5.7z"
        id="VNM497"
        name="Đông Nam Bộ"
      />
      <path
        d="M220.4 577.2l0.9 6.4 0.6 2.1 1 1.8 1.9 1.5 0.8 3.7 5.2 5.7 0.5 1.1 0.6 3.1 1.6 0.8 5.6-0.3 3.1 0.2 1 4.7 0.2 1.5-0.4 4.2 0.4 2.1 1.2 1.8 2.2 1.7 13.7 6.8 1.4 1.1 1.3 1.3 1 1.5 2.5 4.8 1.1 1.5 1.1 1 2.3 1.4-6.7 6-5.4 9.6-0.3 3.3-2.5 4.7-1.9 0.6-2.4-0.7-1.6 0.4-1.5 1-4 3.8-1.6 0.7-1.3-0.1-1-1-2.5-3.2-1.3-1.2-1.7-0.5-0.8 0.3-0.6 1.9-0.9 1-2.4 0.8-1.5 0.8-1.2 1-3.3 4.8-48-25.2-22.2-19.1 6.7 0.8 6.1-0.3 4.9-1.9 3.3-3.4 5.5-8.6 1.6-1.8 1.8-1.5 13.3-6.8 3.3-3.2-0.1-4.4-4.8-9.1-2.2-5.1-0.4-4.8 0.9-2.2 1.5-2 1.8-1.7 1.8-1.3 3-1.5 0.8 0.5 0.3 1.9 1.6 2.1 1.9 0.6 13.2 2.5z"
        id="VNM498"
        name="An Giang"
      />
      <path
        d="M307.3 658.7l3.6 4.7 0.8 3.6 0.4 0.5 2.1 0.9 1.5 1.3 0.5 1.1 0.1 1.3-0.1 2.3-0.7 2.2-1.2 1.6-2.7 1.9-1.8 0.8-2.4 0.3-4.2-0.7-3.6-1.1-3.3-1.6-4.2-2.8-1.3-0.3-1.5 0.5-1.2 1-0.5 1.1 0.4 1.3 0.2 1.9-2.2 2.8-8.4 3-14.4 3.1-13.8 4.9-9.8-10.4-3.6-3.2-6.9-4.5-4.3-3.5 3.3-4.8 1.2-1 1.5-0.8 2.4-0.8 0.9-1 0.6-1.9 0.8-0.3 1.7 0.5 1.3 1.2 2.5 3.2 1 1 1.3 0.1 1.6-0.7 4-3.8 1.5-1 1.6-0.4 2.4 0.7 1.9-0.6 2.5-4.7 0.3-3.3 5.4-9.6 6.7-6 6.6 4 1.8 0.6 5.6 0.3 1.8 0.4 1.6 0.8 1.4 1 6.1 7 2.1 1.9 2.4 1.5 6.7 2.5z"
        id="VNM499"
        name="Can Tho"
      />
      <path
        d="M263.1 568.9l0.5 2.6 1.4 1.8 1.5 1.2 3.6 2.3 2.1 2 8.5 10.2 28.9 27.4 7.7 5.6 5.4 1.9 0 4.4-0.7 2.5-1.2 3.2-12.3 15.5-1.3 0.9-0.8 1.3-0.5 1.1 0.8 5.2 0.6 0.7-6.7-2.5-2.4-1.5-2.1-1.9-6.1-7-1.4-1-1.6-0.8-1.8-0.4-5.6-0.3-1.8-0.6-6.6-4-2.3-1.4-1.1-1-1.1-1.5-2.5-4.8-1-1.5-1.3-1.3-1.4-1.1-13.7-6.8-2.2-1.7-1.2-1.8-0.4-2.1 0.4-4.2-0.2-1.5-1-4.7-3.1-0.2-5.6 0.3-1.6-0.8-0.6-3.1-0.5-1.1-5.2-5.7-0.8-3.7-1.9-1.5-1-1.8-0.6-2.1-0.9-6.4 6 1.1 2.1 1.4 4.7 4.1 2 0.7 1.3-1.3 4-8.3 5.5-6.4 1.7-1.2 0.7 0.3 3.8 1.1 3 1.6 1.1 0.1 6.8-1.5z"
        id="VNM500"
        name="Ð?ng Tháp"
      />
      <path
        d="M466.2 629.7l0.7 1.4-1.9 1-1.1 0.8-0.7 1-0.9 0 0.4-2.1 1.3-1.2 2.2-0.9z m-9.8 0.6l-0.6 4.2-2.9 7.1 1 0 0.9-1.9 2.9 1.9 1.5 1.2 1.2 1.6-6.6 1.6-2.8 1.2-1.8 1.9-0.9 0 0-2.5-0.7-1.9-0.8-1.6-0.4-1.5 0.4-2.5 2.1-3 0.3-2.2-0.9 0 0 2-1.2-3.2 1.2-2.1 2.5-1.3 2.8-0.9 2.8 1.9z m-3.5-10.1l0.3 1.5 0.6 1.5 0.1 1.3-1 0.9-0.7-0.5-0.8-1.3-1.2-2.9-1 0 0.4 1.8 1.2 2.5 0.3 1.8-0.8 1.5-1.8-0.5-1.9-1.3-1.1-1.1-1.6-2.6 0-1.4 1.3-1.1 0.8-3.9-0.5-1.3-1.9-1.1 0-0.8 1.5-0.4 1.8-0.2 1.4 0.1 0.2 1 3.1 2.1 0.7 1.2 1.6 0.8 0.1 1.1-1.1 1.3z m-7.9 12.9l1.4 2.8 0 0.9-2.2-0.6-1.8-0.8-1.7-0.3-1.7 0.8 0.7 0.4 1.1-0.4 2.1 1.9 1.5 2.9-0.1 2.6-2.5 1.1-3.3-1.3-3.3-3.1-2.9-3.8-1.6-3.2-0.5-2.2 0-1.7 0.5-3.7-0.5-1.1-0.4-2.2 0.5-0.4 2.2-0.4 0.9-0.6 1-3.4-1-3.2-3.6-5.7 3.1 0 1.3 0.4 1.2 1.2 1.2 2 0.8 0.8 3.7 1.1 1.7 1.7 0.8 2.1 0 2-0.9 0.9-0.7 0.9-0.2 1.6 1.8 2.8 1.9 1.4 0.6 1.9-1 1.7-3.3 0.2 0 1 2.1 0.1 1.1 0.9z m-3.8-55.4l2.3 3.2 3.8 7.1 0.6 2.3-0.1 2-0.6 0.9 0.1 1.8-1.4 0.1-2-1-1-0.3-2.7 0.1-1.1 0.3-1.6 0.9-1.3 1-1.3 0.2-4.8-2.7-0.9 0.4 0.5 1.7 0.2 3.1 0.5 1.8 0.1 2.3 1.1 0.6 1.5 0.4 2.5 1 1.7 0.9 1.5 1.5 2.5 1.8 2.4 0.4 3.4-1.7 1.8 0 2.9 2.3 1.8 1.8 2.4 2.1 2.6 2.7 1 3 1.7 2.4 1.1 3.7 2.6 2.5-2.3 1.2-3 5.3-1.2 1.1-0.8-0.7 0.2-1.2 0.5-1.5 0.1-1.4-0.6-1.4-1.4-1.2-0.8-1.2-0.7-2.7 0.1-2.5 0.6-4.7-8.3-7.1-4.5 2.3-2.7 0.7-1.2-1.5-0.8-1.5-1.7-2.1-2.1-1.8-1.8-0.8-3.4 1.7-0.8 0.6-0.7 1.6 1 0.9 1.3 0.6 0.7 0.8 0.3 1.3 1.6 3.9-0.5 1.6-2.3 2.1-1.1 3.4-0.7-1.3 0-1.2 0.6-4.1 0.1-2.5-0.9-1.9-1.7-1.6-1.9-1.1-1.8-0.4-1.4 0.1-2.6 1.6-1.3 0.7-1.8-0.3-1.4-1.1-1.8-1.9-1.5-1.1-6-2.5-5.9-3.2-2.5-1.8-1.3-1.8 0.3-1.8 0.9-2.3 2.6-5.1 0.5-3.2-0.2-3.5-1.8-4.8-2.1-2.9-2.6-2.5-2.5-1.7-3.1-1.6-5.3-2.1-4.5-2.5 3.7-3.9 1.3-1.9 1.5-3 1-2.7 1.5-8.2 7.6-1.6 1.7-0.1 2.1 0.1 1.1 0.8 1.2 1.3 5.9 9.9 1.2 1.6 1.2 0.5 2.6 0 0.7 0.4 0.2 0.8 0.2 2.1 4.7 6.1 2.7 4.5 3.4 4.5 1.8 2.8 1.3 0.7 1.7 0.1 2.1-0.5 5.1-1.8 1.6-0.4 5 0.9z"
        id="VNM501"
        name="Hồ Chí Minh city"
      />
      <path
        d="M57 638.1l0.6 0.6 9.9 10.4 0.4 2.4 0 14.6-5.2 13.3-1.8 7.6 2.4 3.7-1 2.9 0 1.7 0.5 1.5 0.5 2.4-2.2-1.2-0.6-0.7-2.7-1.2-1.9-6.1-1.8-11.6-3.6-10.4-2.7-4.4-3.9-3.2-5.2-2.6-1.7-1.8-1.1-5.5-0.5-1.4 0.7-0.4 8.6 1.2 2.6-0.2 1.2-1.1 1.7-2.8 1.8-1 0.4-1.3 0.3-1.6 0.4-1.4 1-1.2 1.3-1.1 1.6-0.1z m97.6-9.7l22.2 19.1 48 25.2 4.3 3.5 6.9 4.5 3.6 3.2 9.8 10.4 6.3 6.6 2.7 2.2 4.1 3.8 0.9 1.5 0.3 1.7 0.1 2.9-0.4 3.6-0.9 3.3-2.1 3.2-15.6 14.8-2.9 3.4-0.8 2.6 0.7 1.4 1.4 1.2 2.2 3-0.1 7.7-9.3-2.2-2.4-0.4-1.4 0.7-0.5 1.8 2.1 7.2 0.3 2.7-1.3 2.4-2.5 3.7-0.5 1.6 0.6 1.8 1.8 2.3 0.4 0.7-0.6 1.5-2 1.1-5.3-1.5-20.7-10.4-6.4-4.1-2.3-0.8-3.8 0.3-2.2-0.4-1.4-0.2-1.2 0.6-0.6 0.7-1.1 0.3-1.6 0.2-3.1-0.5-3.7 1.9-1.8-0.1-5.3-3.7 0.2-3 2.9-25 2.1-7.6 2.8-8 6.3 0.2 4.2-0.6 0.9-2.4 2.2-2.3 8.4-6.3 2.9-1.3 1.4 1 0.4 2.2 3.2 8.7 0-2-0.8-5.1 0-6.1-0.9-3-1.8-3.1-6.1-8-5.3-5.1-2.7-1.6-2.7-0.3-5.3 1.3-3.2-0.1-4.4-2.6-3.1-4.3-2.8-4.7-2.7-3.6-4.5-2.7-4.5-0.6-4.3 1.2-3.5 3.1-0.5 1.4 0 1.2-0.3 0.9-1.5 0.3-0.8 0.6-0.6 2.7-0.4 0.6-4.8-0.3-0.4 0.3-0.7-1.3 0.8-1.9-0.1-1.6-0.6-0.9-1.8-2.1-0.4-1.3 0-3.8-0.5-3.2-1.3-1.9-3.7-2.9-0.9 1.9-1.1 0-0.1-3.8-1.4-2.7-3-3.9-0.7-1.8 1.4-0.3 1.1-0.8 1.1-1.6 0.7-1.3 0-1.4-0.7-1.4-1.1 0-1 2.1-1.5 1.7-1.7 1.2-2.3 0.7-2.1-0.2-0.1-1.5 0.4-2.3-0.6-1.7 2.4 0.5 2-0.3 1.4-1.3 5.7-8.3 1.1-2.2 1.3-2 1.7-1.4 2.2-0.5 5.8-0.2 13.4 1.7z"
        id="VNM502"
        name="Kiên Giang"
      />
      <path
        d="M377.1 564.7l4.5 2.5 5.3 2.1 3.1 1.6 2.5 1.7 2.6 2.5 2.1 2.9 1.8 4.8 0.2 3.5-0.5 3.2-2.6 5.1-0.9 2.3-0.3 1.8 1.3 1.8 2.5 1.8 5.9 3.2 6 2.5 1.5 1.1 1.8 1.9 1.4 1.1 1.8 0.3 1.3-0.7 2.6-1.6 1.4-0.1 1.8 0.4 1.9 1.1 1.7 1.6 0.9 1.9-0.1 2.5-0.6 4.1 0 1.2 0.7 1.3-0.4 1.7-1 2.4-1.7 1-4.4 1.6-2.2-0.1-1.3-2.4-1 0 0.5 2 1.3 1.8-1.5 0.3-1.5 0.7-1.2 1.1-1 2.8-1.4 0.8-1.8 0.7-1.7 1.2 0.1-2.3-0.4-1.8-0.7-1.4-0.9-1.2 0.2 4.8 0.7 2 1.4 0.7 2.4-0.4-1 1.6-3.1 1.4-5.8 0.1-4-0.5-6.3 0.5-1.9-0.4-1.2-0.9-0.3-1.3 0.4-2.8 0-1.3-0.5-1.3-1.3-1.1-2.1-0.9-3.8-0.6-2.4-1-1.8-1.2-5.7-8.1-1.8-1.5-1.7-1-2.4-0.4-14.2-0.8-2.8 0.3-2.5 1.4-2.4 3.2-1.4 1.1-2.8 0.6-3.8 0.1-6.5-1.1-5.4-0.3-5.4-1.9-7.7-5.6-28.9-27.4-8.5-10.2-2.1-2-3.6-2.3-1.5-1.2-1.4-1.8-0.5-2.6 14.7-3.1 3.1-1.4 5.8-3.6 3.9-1.1 3.6 0.4 2.3 2.6 2.4 4.2 4.6 6.4 1 2.1 1.5 4.8 1.1 2 1.8 2.2 2.4 1.6 2.8-0.1 1.3-1.3 1.6-2.8 1.2-3 0.2-2.3 4.6 3.7 3.7 4.4 3.5 2.5 3.8 1.9 3.5 1.3 7.7 0.8 3.6 0.9 3 2.4-3.5-13.2-3.3-6.4-0.7-2.3 0.2-0.3 0.2-3.5-0.3-0.3 1.2-1.9 2.4-0.3 2.9 0.1 1.1 0.9 1.3 0.3 1.9 0.1 11.2-3.4 1.1-0.8 0.3-1.1-0.2-2.3 0.4-0.9 0.8-0.3 1.8 0.7 1.8 1 4.7 4.2z"
        id="VNM503"
        name="Long An"
      />
      <path
        d="M401.6 722.6l-1.2 1.2-1.9-1.2-3.3-5.1-3.9-2.1-6.2-5.9 0.6-0.4 2.2 0.4 5.8 4.2 1.6 1.6 4.5 4.5 1.8 2.8z m-16.5-66l7.8 4.9 32.7 11.2 0.7 0.5 2.2 1.9 1.5 0.8 1.6 1.3 2.8 0.3 1 0.4 0.6 0.7 0.2 1.2-0.3 3.2-0.8 2.1-7.3 7.7-2.2 1.3-2.3-0.6 0.7-1 0.1-1.3-0.2-1.3-0.6-1.2-1 0-0.6 2.4-0.3 0.5-1.8 1.9-0.8 1.1-0.3 1.2 1.5 1.6 0.6 1.2-0.6 0.6-2.1 0.2-0.5 0.7 0.1 0.9-1 1.3-0.3 1.1-0.9 0.5-5.1-0.2-2.2-0.8-2-1.4-1.8-1.8-2.1-1.5-6.8-2.9-3.9-3.2-3.5-4.2-11.3-18.1-3.9-3.9-5.3-1.7 0.7 0.8 1.4 0.6 4.1 3.2 1.6 1.8 1.2 5.3 1.4 2.9 12.6 16.5 3.1 2.9 10.5 4.9 7.1 5.6 7.7 4.1 2.1 0.5 1.3 1.2-0.4 2.8-1.4 2.9-1.9 1.7 0-1 0.9-1 0.1-1.3-0.3-1.3-0.7-1-0.8 0-0.7 4.8-2.7 3.2-3.6 1.2-3.3-0.8-3.2-2.6-8-8.8-3.3-2.6-11.5-6.9-34-35-2.4-1.5-1.2 0.1-2.4-1.5-3.7-1.6-12-3.2-4.1-0.6 0.2-1.7 2.3-1.7 2-0.8 2.1-0.3 2.1 0 2.2 0.3 6.5 2.4 3.3 0.7 4.3 0 2.6-0.2 6.2-2.4 3.3-0.5 7 0.2 1.7-0.3 6.8-2.5 1.6-0.2 1.7 0.1 1.7 0.3 4.5 1.8 1.4 0.9z"
        id="VNM504"
        name="Bến Tre"
      />
      <path
        d="M305.8 699.6l-2.6-0.4 2.6 3.9 8.7 8.7-9.5 22.3-0.3 1.6-0.1 1.7-0.4 0.9-0.8 0.7-1.8 0.3-2 0.6-16.1 9.8-14.2 4.2-4.8 1.6-9.7 1.6-9.5 0.1 0.1-7.7-2.2-3-1.4-1.2-0.7-1.4 0.8-2.6 2.9-3.4 15.6-14.8 2.1-3.2 0.9-3.3 0.4-3.6-0.1-2.9-0.3-1.7-0.9-1.5-4.1-3.8-2.7-2.2-6.3-6.6 13.8-4.9 14.4-3.1 8.4-3 2.3 2 9.5 6.1 4.3 3.8 3.7 4.4z"
        id="VNM505"
        name="Hau Giang"
      />
      <path
        d="M309.9 802.9l-14.7 6-30 11.2-3.4 2.9-5.9 6.4-3.7 2.8-1.4 1.8-0.6 2.4-0.4 0.4-0.7-3.4-0.9-1.5-2.1-2-4.7-1.4-1.7-0.7-1.4-1.6-1.3-2.4-1.9-7.1 0-2.7 0.1-1.3-0.2-1.1-0.8-0.7-2.4-0.2-1.3-1-0.3-1.5 0-2.8 1.6-3.4 1.5-2.3 1.3-1.6 0.4-1.1-0.2-0.9-1.3-1.3-1.5-1.2-1-1.2-0.1-1 1.1-1.7 1.1-1 0.3-2-3.4-4.6 2-1.1 0.6-1.5-0.4-0.7-1.8-2.3-0.6-1.8 0.5-1.6 2.5-3.7 1.3-2.4-0.3-2.7-2.1-7.2 0.5-1.8 1.4-0.7 2.4 0.4 9.3 2.2 9.5-0.1 9.7-1.6 4.8-1.6 1.1 20.8 1.2 2.7 1.8 3 3.5 0.5 1.4 0.5 2.8 2.1 2.1 0.9 2.8 0.7 5.9 0.6 2.1-0.3 2.9-1.4 1.8-0.3 2.1 0.5 2.9 1.7 1.4 2 4.8 15z"
        id="VNM506"
        name="Bạc Liêu"
      />
      <path
        d="M230 782.1l3.4 4.6-0.3 2-1.1 1-1.1 1.7 0.1 1 1 1.2 1.5 1.2 1.3 1.3 0.2 0.9-0.4 1.1-1.3 1.6-1.5 2.3-1.6 3.4 0 2.8 0.3 1.5 1.3 1 2.4 0.2 0.8 0.7 0.2 1.1-0.1 1.3 0 2.7 1.9 7.1 1.3 2.4 1.4 1.6 1.7 0.7 4.7 1.4 2.1 2 0.9 1.5 0.7 3.4-1.7 0.5-0.7 0.5 0 2.9-10 19.2-2.6 3.8-3 3.4-4.6 3.7-5.7 0.8-4.5 1.9-4 4.8-3.8 6.3-3.4 3.6-9.1 2.4-24.2 7-3.2-0.5-2.4-1.7-8.5-1.3-3.2-1.2-0.8-0.4-0.3-1.5 1-0.4 1.7 0.6 2.6-0.5 6.6-4.4 1.5-0.9 2.2-0.8 0.5-1.5-0.7-1.4-1.4-0.7-0.6-0.6 1.8-1.1 1.8 0.1 8.9 1.8 2-0.5 2.2-1.1 1.9-1.5 0.9-1.6-3.2 1.5-4.3 1.2-4.3 0-3.1-1.8-0.6-1.5 0.6-0.8 1.5-0.3 2.2-0.3 3.3 0 1-0.2 2.3-1.7 0-0.8-1.3-2.4-0.4-2.7 0.7-2.6-8.6 3.8-5.6 1.4-3.4-1.7-2.4-4.7 1.5-5.2 1.5-4.8 2.1-6.3-0.4-5.3-0.2-9.7 0.5-11.9 1.1-8.3 0.9-20.2 0-8.4 0.9-15.7 0.2-2.7 5.3 3.7 1.8 0.1 3.7-1.9 3.1 0.5 1.6-0.2 1.1-0.3 0.6-0.7 1.2-0.6 1.4 0.2 2.2 0.4 3.8-0.3 2.3 0.8 6.4 4.1 20.7 10.4 5.3 1.5z"
        id="VNM507"
        name="Cà Mau"
      />
      <path
        d="M418.5 871.8l-1.8 0 0.7 0.8 0.3 1.1-3.2 0.3 0 1.5 1.4 2 0.8 1.8-1.7-0.7-1.4 0.1-2.9 0.6-1.2 0.5-0.3 1.4 0 2.8 0.4 1.2-0.5 0.5-2.2 0.1-0.7-0.6-2.1-2.7-0.4-0.9 1.5-3.3 3.7-3.6 4.4-3.1 3.8-1.6 1 0.4 0.4 1.4z m-62.2-119.3l1.8 1.7 7.6 1.8 1.7 1.2-0.2 3.5-0.9 2.4-1.9 1.3-3.5-0.1 0-0.8 0.7-2.6-2.1-3-2.9-2.5-2.1-1.4-1 0.8 2 2.6 2.3 1.8 0.7 1-2.7 0.3-1.4-1.2-4.6-7.3-3.4-4.1-1.6-2.5-0.6-2.3-0.5-3-1.2-2.2-2.9-3.8 0.8-0.9 0.3 0.7 1.6 1.2 6.5 9.4 6.5 6.4 1 1.6z m-46.4 50.4l-4.8-15-1.4-2-2.9-1.7-2.1-0.5-1.8 0.3-2.9 1.4-2.1 0.3-5.9-0.6-2.8-0.7-2.1-0.9-2.8-2.1-1.4-0.5-3.5-0.5-1.8-3-1.2-2.7-1.1-20.8 14.2-4.2 16.1-9.8 2-0.6 1.8-0.3 0.8-0.7 0.4-0.9 0.1-1.7 0.3-1.6 9.5-22.3 23.2 23.2 0.9 2.4 0.5 2.4 1.3 2.8 14.1 20.9 0.9 1.9 0.5 2.2 0.4 5.7-0.6 1.7-5 5.4 1.3 1.3 1.2 0.6 1 0.7 0.3 2-0.5 2.1-1.3 1-3.9 0.7-18.6 5.8-20.3 8.3z"
        id="VNM508"
        name="Sóc Trăng"
      />
      <path
        d="M327.3 715.6l8.9-5.1 4.7-1.9 4-0.4 1.5-1.1 0.1-1.3-0.6-1.9-0.3-1.8 0.3-1 1-0.9 4.9-1.9 1.4-1 0.7-1.3 0.6-1.5 1.1-1.9 1.3-1.3 2.8-1.2 1.5-0.5 5 3.7 1.2 1.2 0.8 1.2 1.2 2.3 0.8 1.2 6.9 6.6 0.8 0.4 2.6 3.3 11.8 9.8 3.4 3.8 2.4 4.5 1.2 5.4 1.4 1.6 3.5 0.5 1.6 1.1 0.6 2.6 0.1 2.8-0.6 7.1-1.7 4.7-2.7 4-3.4 3.1-2.9 1.8-1.6 0.4-2.8-1.1-1.4 0.6-2 1.3-5.6-0.1-1.8-0.9-6.5-5-11.8-6.4-25.2-23.9-9.2-11.6z"
        id="VNM509"
        name="Trà Vinh"
      />
      <path
        d="M321.6 660.5l4.1 0.6 12 3.2 3.7 1.6 2.4 1.5-0.7 0.6 0.6 0.7 2.4 1.2 3.1 3.4 1.1 2 0.9 4.6 1.3 2 1.5 1.8 2.9 2.7 4.3 3.2-1.5 0.5-2.8 1.2-1.3 1.3-1.1 1.9-0.6 1.5-0.7 1.3-1.4 1-4.9 1.9-1 0.9-0.3 1 0.3 1.8 0.6 1.9-0.1 1.3-1.5 1.1-4 0.4-4.7 1.9-8.9 5.1-3.6-4.4-5.1-4.8-3.9-2.9-4.7-1.2-4.2-2.7-3.7-4.4-4.3-3.8-9.5-6.1-2.3-2 2.2-2.8-0.2-1.9-0.4-1.3 0.5-1.1 1.2-1 1.5-0.5 1.3 0.3 4.2 2.8 3.3 1.6 3.6 1.1 4.2 0.7 2.4-0.3 1.8-0.8 2.7-1.9 1.2-1.6 0.7-2.2 0.1-2.3-0.1-1.3-0.5-1.1-1.5-1.3-2.1-0.9-0.4-0.5-0.8-3.6-3.6-4.7 6.6 1.5 7.7 0.3z"
        id="VNM510"
        name="Vĩnh Long"
      />
      <g {...propsFor({ city: "cu-chi-tunnels", basicTextStyle, hoveredTextStyle, lang: i18n.languageCode })}>
        <rect width="150" height="80" x="360" y="510" />
        <text x="360" y="535">
          Ho Chi Minh
        </text>
        <g transform="translate(410 540) scale(0.06)">
          <PinPoint />
        </g>
      </g>
      <g {...propsFor({ city: "my-tho", basicTextStyle, hoveredTextStyle, lang: i18n.languageCode })}>
        <rect width="90" height="80" x="350" y="600" />
        <text x="345" y="680">
          My Tho
        </text>
        <g transform="translate(360 600) scale(0.06)">
          <PinPoint />
        </g>
      </g>
      <g {...propsFor({ city: "can-tho", basicTextStyle, hoveredTextStyle, lang: i18n.languageCode })}>
        <rect width="90" height="80" x="255" y="650" />
        <text x="255" y="730">
          Can Tho
        </text>
        <g transform="translate(285 650) scale(0.06)">
          <PinPoint />
        </g>
      </g>
    </svg>
  )
}

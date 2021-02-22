import {
  extraLargeStart,
  extraLargeStartSize,
  largeEnd,
  largeStart,
  largeStartSize,
  maxWidthExtraLargeContainer,
  maxWidthLargeContainer,
  maxWidthMediumContainer,
  mediumEnd,
  mediumStart,
  mediumStartSize,
} from "../core/variables"
import { ExtraImageLinkProps } from "../../types/shared"
import { useWindowSize } from "../hooks/useWindowSize"
import { ApplicationLink } from "../core/links/link"
import React, { ComponentType } from "react"
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const margin = 20
const style = css`
  @media (min-width: ${mediumStart}) and (max-width: ${mediumEnd}) {
    &:nth-of-type(odd) {
      margin-right: ${margin}px;
    }
  }
  @media (min-width: ${largeStart}) and (max-width: ${largeEnd}) {
    margin-right: ${margin}px;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  @media (min-width: ${extraLargeStart}) {
    margin-right: ${margin}px;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  &:last-of-type {
    margin-right: 0;
  }
  position: relative;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3rem;
    transition: all 0.2s linear;
    width: 100%;
    padding: 0 1rem;
    text-align: center;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    z-index: 5;
    pointer-events: none;
    transition: all 0.2s linear;
  }
  &:hover .overlay {
    opacity: 0.4;
  }
  &:hover .title {
    font-size: 1.4rem;
  }
`
export const CountryContainer: React.FunctionComponent<{
  title: string
  image: ComponentType<ExtraImageLinkProps>
  imageProps?: ExtraImageLinkProps
  to: string
  // use a default value otherwise typescript not happy :)
}> = ({ title, image: Image, to, imageProps = { image: "" } }) => {
  const { windowWidth } = useWindowSize()
  const maxAllowedWidth = 300
  // margin * 3 (and others) is not completely correct, we should multiply vy the number of images displayed, but it's ok
  const computedWidth =
    windowWidth > extraLargeStartSize
      ? (maxWidthExtraLargeContainer - margin * 3) / 4
      : windowWidth > largeStartSize
      ? (maxWidthLargeContainer - margin * 2) / 3
      : windowWidth > mediumStartSize
      ? (maxWidthMediumContainer - margin) / 2
      : windowWidth
  const width = computedWidth > maxAllowedWidth ? `${maxAllowedWidth}px` : `${computedWidth}px`
  const { css: customCss, ...restImageProps } = imageProps
  return (
    <ApplicationLink to={to} css={style} className="custom-link mb3">
      <div className="title">{title}</div>
      <div className="overlay" />
      {jsx(Image, {
        fluidObject: { aspectRatio: 4 / 3 },
        // @ts-ignore looks like the value is transformed to something different :)
        css: css`
          ${customCss}
          width: ${width};
        `,
        ...restImageProps,
      })}
    </ApplicationLink>
  )
}

export const CountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

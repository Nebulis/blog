import React, { FunctionComponent, HTMLAttributes } from "react"
import { css } from "@emotion/core"

export const adaptiveImageMarginBottom = css`
  @media (max-width: 576px) {
    .gatsby-image-wrapper {
      margin-bottom: 10px;
    }
  }
  @media (min-width: 576px) and (max-width: 768px) {
    .gatsby-image-wrapper {
      margin-bottom: 15px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    .gatsby-image-wrapper {
      margin-bottom: 20px;
    }
  }
`

const imageAsPortraitStyle = css`
  max-width: 600px;
  margin: auto;
`
export const ImageAsPortrait: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <div css={imageAsPortraitStyle} className={className}>
    {children}
  </div>
)

export const ImageAsLandscape: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const twoImagesSameSizeStyles = css`
  margin: auto;
  .gatsby-image-wrapper {
    width: 100%;
  }
  & div:first-of-type {
    margin-right: 0.725rem;
  }
  & div:last-of-type {
    margin-left: 0.725rem;
  }
  @media (max-width: 576px) {
    & div:first-of-type {
      margin-right: 5px;
    }
    & div:last-of-type {
      margin-left: 5px;
    }
  }
  @media (min-width: 576px) and (max-width: 768px) {
    & div:first-of-type {
      margin-right: 7.5px;
    }
    & div:last-of-type {
      margin-left: 7.5px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    & div:first-of-type {
      margin-right: 10px;
    }
    & div:last-of-type {
      margin-left: 10px;
    }
  }
`
export const TwoImagesSameSize: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  if (!children || !Array.isArray(children) || children.length !== 2)
    throw new Error("This component expect 2 children")
  return (
    <div className={`flex ${className}`} css={twoImagesSameSizeStyles}>
      {children}
    </div>
  )
}
const twoImagesLeftBiggerStyles = css`
  .gatsby-image-wrapper {
    width: 100%;
  }
  & div:first-of-type {
    margin-right: 0.725rem;
    flex-basis: 65%;
  }
  & div:last-of-type {
    margin-left: 0.725rem;
    flex-basis: 35%;
  }
  @media (max-width: 576px) {
    & div:first-of-type {
      margin-right: 5px;
    }
    & div:last-of-type {
      margin-left: 5px;
    }
  }
  @media (min-width: 576px) and (max-width: 768px) {
    & div:first-of-type {
      margin-right: 7.5px;
    }
    & div:last-of-type {
      margin-left: 7.5px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    & div:first-of-type {
      margin-right: 10px;
    }
    & div:last-of-type {
      margin-left: 10px;
    }
  }
`
export const TwoImagesLeftBigger: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  if (!children || !Array.isArray(children) || children.length !== 2)
    throw new Error("This component expect 2 children")
  return (
    <div className={`flex ${className}`} css={twoImagesLeftBiggerStyles}>
      {children}
    </div>
  )
}

const imageAsLandscapeOnTheLeft = css`
  .gatsby-image-wrapper {
    width: 100%;
  }
  & div:first-of-type {
    flex-basis: 65%;
  }
  @media (max-width: 992px) {
    & div:first-of-type {
      flex-basis: 100%;
    }
  }
`
export const ImageAsLandscapeOnTheLeft: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  return (
    <div className={`flex ${className}`} css={imageAsLandscapeOnTheLeft}>
      {children}
    </div>
  )
}

const imageAsLandscapeOnTheRight = css`
  .gatsby-image-wrapper {
    width: 100%;
  }
  & div:first-of-type {
    flex-basis: 65%;
  }
  @media (max-width: 992px) {
    & div:first-of-type {
      flex-basis: 100%;
    }
  }
`
export const ImageAsLandscapeOnTheRight: FunctionComponent = ({ children }) => {
  return (
    <div className="flex justify-end" css={imageAsLandscapeOnTheRight}>
      {children}
    </div>
  )
}

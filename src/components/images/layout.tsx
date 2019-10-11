import React, { FunctionComponent, HTMLAttributes } from "react"
import { css, jsx } from "@emotion/core"

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
// https://github.com/emotion-js/emotion/issues/1404
const cloneElement = (element: any, props: any, ...children: any) =>
  jsx(
    element.props["__EMOTION_TYPE_PLEASE_DO_NOT_USE__"]
      ? element.props["__EMOTION_TYPE_PLEASE_DO_NOT_USE__"]
      : element.type,
    {
      key: element.key !== null ? element.key : undefined,
      ref: element.ref,
      ...element.props,
      ...props,
    },
    ...children
  )

const allButLastImageStyle = css`
  .gatsby-image-wrapper {
    margin-bottom: 0px;
  }
`
const allButFirstImageStyle = css`
  @media (max-width: 576px) {
    .gatsby-image-wrapper {
      margin-top: 10px;
    }
  }
  @media (min-width: 576px) and (max-width: 768px) {
    .gatsby-image-wrapper {
      margin-top: 15px;
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    .gatsby-image-wrapper {
      margin-top: 20px;
    }
  }
`
export const GroupOfImages: FunctionComponent = ({ children }) => {
  const size = React.Children.count(children)
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child
        if (index > 0 && index < size - 1) {
          return cloneElement(child, { css: css(allButLastImageStyle, allButFirstImageStyle, child.props.css) })
        } else if (index === 0) {
          console.log(child.props)
          console.log(cloneElement(child, { css: css(allButLastImageStyle, child.props.css) }))
          return cloneElement(child, { css: css(allButLastImageStyle, child.props.css) })
        } else if (index === size - 1) {
          console.log(child.props)
          console.log(cloneElement(child, { css: css(allButFirstImageStyle, child.props.css) }))
          return cloneElement(child, { css: css(allButFirstImageStyle, child.props.css) })
        }
        throw new Error("Damned")
      })}
    </>
  )
}

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
export const ImageAsLandscapeOnTheRight: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  return (
    <div className={`flex justify-end ${className}`} css={imageAsLandscapeOnTheRight}>
      {children}
    </div>
  )
}

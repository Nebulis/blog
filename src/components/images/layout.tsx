import React, { FunctionComponent, HTMLAttributes, useContext } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useWindowSize } from "../hooks/useWindowSize"
import { cloneElement } from "../core/cloneElement"
import { mediumEnd, mediumStart, mobileEnd, primaryColor, smallEnd, smallStart } from "../core/variables"
import { MenuContext } from "../layout/menu.context"

const allButLastImageStyle = css`
  // needed for ImageAsTwoLandscapeLeftAndOnePortraitRight under GroupOfImages
  margin-bottom: 0;
  .gatsby-image-wrapper {
    margin-bottom: 0px;
  }
`
const allButFirstImageStyle = css`
  .gatsby-image-wrapper {
    margin-top: 1.3rem;
  }
  @media (max-width: ${mobileEnd}) {
    .gatsby-image-wrapper {
      margin-top: 10px;
    }
  }
  @media (min-width: ${smallStart}) and (max-width: ${smallEnd}) {
    .gatsby-image-wrapper {
      margin-top: 15px;
    }
  }
  @media (min-width: ${mediumStart}) and (max-width: ${mediumEnd}) {
    .gatsby-image-wrapper {
      margin-top: 20px;
    }
  }
`
export const GroupOfImages: FunctionComponent<{ className?: string }> = ({ children, className = "" }) => {
  const size = React.Children.count(children)
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child
        if (index > 0 && index < size - 1) {
          return cloneElement(child, {
            css: css(allButLastImageStyle, allButFirstImageStyle, child.props.css),
            className: className + " " + (child.props.className || ""),
          })
        } else if (index === 0) {
          return cloneElement(child, {
            css: css(allButLastImageStyle, child.props.css),
            className: className + " " + (child.props.className || ""),
          })
        } else if (index === size - 1) {
          return cloneElement(child, {
            css: css(allButFirstImageStyle, child.props.css),
            className: className + " " + (child.props.className || ""),
          })
        }
        throw new Error("Damned")
      })}
    </>
  )
}

const imageAsPortraitStyle = css`
  max-width: 600px;
  margin: auto;
  .gatsby-image-wrapper {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`
export const ImageAsPortrait: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <div css={imageAsPortraitStyle} className={`${className} flex`}>
    {children}
  </div>
)

const imageAsLandscapeStyle = css`
  .gatsby-image-wrapper {
    width: 100%;
    max-height: calc(100vh - 40px);
  }
`
export const ImageAsLandscape: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => (
  <div css={imageAsLandscapeStyle} className={`${className} flex justify-center`}>
    {children}
  </div>
)

const margin = css`
  & .left-panel {
    margin-right: 0.725rem;
  }
  & .right-panel {
    margin-left: 0.725rem;
  }
  @media (max-width: ${mobileEnd}) {
    & .left-panel {
      margin-right: 5px;
    }
    & .right-panel {
      margin-left: 5px;
    }
  }
  @media (min-width: ${smallStart}) and (max-width: ${smallEnd}) {
    & .left-panel {
      margin-right: 7.5px;
    }
    & .right-panel {
      margin-left: 7.5px;
    }
  }
  @media (min-width: ${mediumStart}) and (max-width: ${mediumEnd}) {
    & .left-panel {
      margin-right: 10px;
    }
    & .right-panel {
      margin-left: 10px;
    }
  }
`

const twoImagesSameSizeStyles = css`
  margin: auto;
  max-height: calc(100vh - 40px);
  & .left-panel {
    flex-basis: 100%;
  }
  & .right-panel {
    flex-basis: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
  }
  ${margin}
`
export const TwoImagesSameSize: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  if (!children || !Array.isArray(children) || children.length !== 2)
    throw new Error("This component expect 2 children")
  return (
    <div className={`flex ${className}`} css={twoImagesSameSizeStyles}>
      {cloneElement(children[0], { className: "left-panel" })}
      {cloneElement(children[1], { className: "right-panel" })}
    </div>
  )
}

export const TwoImagesLeftBigger = styled(TwoImagesSameSize)`
  & .left-panel {
    flex-basis: 65%;
  }
  & .right-panel {
    flex-basis: 35%;
  }
`
export const TwoImagesRightBigger = styled(TwoImagesSameSize)`
  & .left-panel {
    flex-basis: 35%;
  }
  & .right-panel {
    flex-basis: 65%;
  }
`
// this component will adapt to smaller devices and display images in different rows when the device is too small
export const TwoImagesSameSizeOrToGroup: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  const { windowWidth: width } = useWindowSize()
  if (!children || !Array.isArray(children) || children.length !== 2)
    throw new Error("This component expect 2 children")
  return width <= 768 ? (
    <GroupOfImages className={className}>
      <ImageAsLandscape>{children[0]}</ImageAsLandscape>
      <ImageAsLandscape>{children[1]}</ImageAsLandscape>
    </GroupOfImages>
  ) : (
    <TwoImagesSameSize className={className}>
      {children[0]}
      {children[1]}
    </TwoImagesSameSize>
  )
}

const imageAsLandscapeOnTheLeft = css`
  .gatsby-image-wrapper {
    width: 100%;
  }
  & div:first-of-type {
    flex-basis: 65%;
  }
  @media (max-width: ${mediumEnd}) {
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
  @media (max-width: ${mediumEnd}) {
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

const imageAsTwoLandscapeLeftAndOnePortraitRightStyle = css`
  align-items: flex-start;
  .gatsby-image-wrapper {
    width: 100%;
  }
  & .left-panel {
    flex-basis: 100%;
  }
  & .right-panel {
    flex-basis: 100%;
  }

  ${margin}
  .right-panel {
    padding-top: 1.3rem; // to align correctly
    margin-top: auto;
    margin-bottom: auto;
  }
`
const additionalMargin = css`
  margin-bottom: 1.3rem;
`
export const ImageAsTwoLandscapeLeftAndOnePortraitRight: FunctionComponent<HTMLAttributes<any>> = ({
  children,
  className,
}) => {
  const { windowWidth: width } = useWindowSize()
  if (!children || !Array.isArray(children) || children.length !== 3)
    throw new Error("This component expect 3 children")
  return (
    <div
      className={`flex ${width <= 768 ? "flex-column" : ""} w-100 ${className}`}
      css={css(imageAsTwoLandscapeLeftAndOnePortraitRightStyle, width > 768 ? additionalMargin : null)}
    >
      <div className={`flex flex-column ${width <= 768 ? "w-100" : "w-50"} left-panel`}>
        <GroupOfImages>
          <ImageAsPortrait className="w-100">{children[0]}</ImageAsPortrait>
          <ImageAsPortrait className="w-100">{children[1]}</ImageAsPortrait>
          {width <= 768 ? <ImageAsLandscape className="w-100">{children[2]}</ImageAsLandscape> : null}
        </GroupOfImages>
      </div>
      {width > 768 ? <div className="w-50 flex flex-grow-0 items right-panel">{children[2]}</div> : null}
    </div>
  )
}

const medallionDimension = "240px"
const imageAsMedallionStyle = css`
  position: relative;
  border-radius: 50%;
  width: ${medallionDimension};
  height: ${medallionDimension};
  overflow: hidden;
  border: 6px solid transparent;
  transition: border 100ms linear;
  &.mobile,
  &:hover {
    border: 6px solid ${primaryColor};
  }
  &:hover span {
    height: 65px;
    font-size: 1.4rem;
  }
  span {
    background: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 55px;
    padding-top: 12.5px;
    transition: all 300ms linear;
  }
  .gatsby-image-wrapper {
    margin: 0;
    width: ${medallionDimension};
    height: ${medallionDimension} !important;
  }
  img {
    width: ${medallionDimension};
    height: ${medallionDimension} !important;
  }
`
export const ImageAsMedallion: FunctionComponent<HTMLAttributes<any> & { title?: string }> = ({
  children,
  className,
  title,
}) => {
  const { isMobileView } = useContext(MenuContext)

  return (
    <div css={imageAsMedallionStyle} className={`${className}${isMobileView ? " mobile" : ""}`}>
      {children}
      {title && <span>{title}</span>}
    </div>
  )
}

export const TitleImage = styled.img`
  width: 24px;
`

import React, { FunctionComponent, HTMLAttributes, useContext, useState } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useWindowSize } from "../hooks/useWindowSize"
import { cloneElement } from "../core/cloneElement"
import { mediumEnd, mediumStart, mobileEnd, primaryColor, smallEnd, smallStart } from "../core/variables"
import { MenuContext } from "../layout/menu.context"
import { buildCurrentSharedUrl, buildPinterestUrl, buildSharedUrl } from "../../utils"
import { PageProps } from "gatsby"

const creditStyle = css`
  .credit {
    position: absolute;
    opacity: 0.8;
    bottom: 0.4px; // it looks a bit cleaner with this ?
    right: 0.4px; // it looks a bit cleaner with this ?
    background-color: black;
    line-height: initial;
    color: white;
    font-size: 0.7rem;
  }
`
const margin = css`
  @media (max-width: ${mobileEnd}) {
    flex-direction: row;
  }
  & > *:not(:last-of-type) {
    margin-right: 0.725rem;
  }
  & > *:not(:first-of-type) {
    margin-left: 0.725rem;
  }
  @media (max-width: ${mobileEnd}) {
    & > *:not(:last-of-type) {
      margin-right: 5px;
    }
    & > *:not(:first-of-type) {
      margin-left: 5px;
    }
  }
  @media (min-width: ${smallStart}) and (max-width: ${smallEnd}) {
    & > *:not(:last-of-type) {
      margin-right: 7.5px;
    }
    & > *:not(:first-of-type) {
      margin-left: 7.5px;
    }
  }
  @media (min-width: ${mediumStart}) and (max-width: ${mediumEnd}) {
    & > *:not(:last-of-type) {
      margin-right: 10px;
    }
    & > *:not(:first-of-type) {
      margin-left: 10px;
    }
  }
`

const allButLastImageStyle = css`
  // needed for ImageAsTwoLandscapeLeftAndOnePortraitRight under GroupOfImages
  margin-bottom: 0;
  .image-layout {
    margin-bottom: 0px;
  }
`
const allButFirstImageStyle = css`
  &.image-layout {
    margin-top: 1.3rem;
  }
  @media (max-width: ${mobileEnd}) {
    &.image-layout {
      margin-top: 10px;
    }
  }
  @media (min-width: ${smallStart}) and (max-width: ${smallEnd}) {
    &.image-layout {
      margin-top: 15px;
    }
  }
  @media (min-width: ${mediumStart}) and (max-width: ${mediumEnd}) {
    &.image-layout {
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
  margin-right: auto;
  margin-left: auto;
  ${creditStyle}
`
export const ImageAsPortrait: FunctionComponent<HTMLAttributes<any> & { credit?: React.ReactNode }> = ({
  children,
  className = "",
  credit,
  title,
}) => (
  <div css={imageAsPortraitStyle} className={`${className} image-layout`}>
    <div className="flex relative image-layout-image-container">
      {children}
      {credit && <div className="credit">{credit}</div>}
    </div>
    {title && <div className="title tc underline ttu">{title}</div>}
  </div>
)

const pinterestImageStyle = css`
  ${margin}
  margin-bottom: 1.3rem;
  > div {
    width: 100%;
    max-width: 350px;
  }
  .pin {
    bottom: 10px;
    right: 10px;
    z-index: 10;
    padding: 2px 0.75rem;
    background-color: lightgray;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  > div:hover .overlay,
  > div.active .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.15;
    z-index: 5;
    pointer-events: none;
  }
  > div.active .pin,
  > div:hover .pin {
    opacity: 0.9;
  }
  @media (max-width: ${mobileEnd}) {
    flex-direction: column;
    align-items: center;
    > div {
      margin: 0;
    }
    > div:not(:first-of-type) {
      margin-left: 0;
    }
    > div:not(:last-of-type) {
      margin-bottom: 1.3rem;
      margin-right: 0;
    }
  }
`
interface PinterestImageElementProps {
  selectedPin: string
  onSelectPin: (pin: string) => void
  location: PageProps["location"]
  description: string
}
const PinterestImageElement: FunctionComponent<PinterestImageElementProps> = ({
  children,
  selectedPin,
  onSelectPin,
  location,
  description,
}) => {
  const [path, setPath] = useState("")

  const url = buildPinterestUrl({
    url: buildCurrentSharedUrl(location),
    description,
    media: buildSharedUrl(location, path),
  })
  if (!React.isValidElement(children)) return null
  return (
    <div
      className={`relative ${children.props.image === selectedPin ? "active" : ""}`}
      onClick={(event) => {
        event.stopPropagation()
        onSelectPin(children.props.image)
      }}
    >
      <div className="overlay" />
      <a className="absolute z-index ttu pin" href={url} target="_blank" rel="noopener noreferrer">
        Pin
      </a>
      {cloneElement(children, {
        onLoad: setPath,
      })}
    </div>
  )
}

export const PinterestImage: FunctionComponent<HTMLAttributes<any> & PinterestImageElementProps> = ({
  children,
  className,
  selectedPin,
  onSelectPin,
  location,
  description,
}) => {
  return (
    <div css={pinterestImageStyle} className={`${className} flex relative justify-center`}>
      {React.Children.map(children, (child, index) => {
        return (
          <PinterestImageElement
            key={index}
            selectedPin={selectedPin}
            onSelectPin={onSelectPin}
            location={location}
            description={description}
          >
            {child}
          </PinterestImageElement>
        )
      })}
    </div>
  )
}

const imageAsLandscapeStyle = css`
  .gatsby-image-wrapper {
    max-height: calc(100vh - 40px);
  }
  ${creditStyle}
`
export const ImageAsLandscape: FunctionComponent<HTMLAttributes<any> & { credit?: React.ReactNode }> = ({
  children,
  className = "",
  credit,
  title,
}) => (
  <div css={imageAsLandscapeStyle} className={`${className} image-layout`}>
    <div className="flex justify-center relative image-layout-image-container">
      {children}
      {credit && <div className="credit">{credit}</div>}
    </div>
    {title && <div className="title tc underline ttu">{title}</div>}
  </div>
)

const twoImagesSameSizeStyles = css`
  margin-right: auto;
  margin-left: auto;
  max-height: calc(100vh - 40px);
  & .left-panel {
    flex-basis: 100%;
  }
  & .right-panel {
    flex-basis: 100%;
  }
  ${margin}
`
export const TwoImagesSameSize: FunctionComponent<HTMLAttributes<any>> = ({ children, className }) => {
  if (!children || !Array.isArray(children) || children.length !== 2)
    throw new Error("This component expect 2 children")
  return (
    <div className={`flex image-layout ${className}`} css={twoImagesSameSizeStyles}>
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
  &.image-layout {
    max-width: 65%;
  }
  ${creditStyle}
`
export const ImageAsLandscapeOnTheLeft: FunctionComponent<HTMLAttributes<any> & { credit?: React.ReactNode }> = ({
  children,
  className,
  title,
  credit,
}) => {
  return (
    <div className={`image-layout ${className}`} css={imageAsLandscapeOnTheLeft}>
      <div className="flex relative image-layout-image-container">
        {children}
        {credit && <div className="credit">{credit}</div>}
      </div>
      {title && <div className="title tc underline ttu">{title}</div>}
    </div>
  )
}
export const ImageAsLandscapeOnTheRight = styled(ImageAsLandscapeOnTheLeft)`
  &.image-layout {
    margin-left: auto;
  }
`

const imageAsTwoLandscapeLeftAndOnePortraitRightStyle = css`
  align-items: flex-start;
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
export const Anchor = styled.span`
  /*https://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header/21707103#21707103*/
  :target {
    display: block;
    position: relative;
    /*section bottom margin is 1.45 rem*/
    top: -2.9rem;
    visibility: hidden;
  }
`

import { css } from "@emotion/core"
import React, { useEffect, useState } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight, FaMapMarkerAlt } from "react-icons/all"
import { backgroundPrimaryColor, pageHeightWithoutBanner } from "./variables"
import { ApplicationLink } from "./links/link"

const iconSize = 40
const overlayBorderPadding = 15

const carouselStyle = css`
  position: relative;
  .gatsby-image-wrapper {
    margin-top: 0;
    margin-bottom: 0;
  }
  .hidden .gatsby-image-wrapper {
    height: 0;
    opacity: 0;
  }
  .visible .gatsby-image-wrapper {
    opacity: 1;
    transition: opacity 0.8s linear;
    height: ${pageHeightWithoutBanner};
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.25;
    z-index: 5;
    pointer-events: none;
  }
  .overlay-border {
    position: absolute;
    top: ${overlayBorderPadding}px;
    left: ${overlayBorderPadding}px;
    right: ${overlayBorderPadding}px;
    bottom: ${overlayBorderPadding}px;
    display: block;
    border: 2px solid #fff;
    z-index: 5;
    pointer-events: none;
  }
  .left {
    position: absolute;
    left: ${overlayBorderPadding * 2}px;
    top: calc(50% - ${iconSize / 2}px);
    z-index: 10;
  }
  .right {
    position: absolute;
    right: ${overlayBorderPadding * 2}px;
    top: calc(50% - ${iconSize / 2}px);
    z-index: 10;
  }
  .left svg,
  .right svg {
    color: black;
    width: ${iconSize}px;
    height: ${iconSize}px;
    cursor: pointer;
    stroke: black;
    stroke-width: 20;
    opacity: 0.95;
    transition: all 0.2s linear;
  }
  .left:focus,
  svg:focus,
  .right:focus {
    outline: none;
  }
  .right,
  .left {
    width: ${iconSize}px;
    height: ${iconSize}px;
    border-radius: ${iconSize}px;
    background-color: ${backgroundPrimaryColor};
  }
  @media (hover: hover) {
    .left:hover,
    .right:hover {
      background-color: black;
      transition: all 0.2s linear;
    }
    .left:hover svg,
    .right:hover svg {
      color: ${backgroundPrimaryColor};
      stroke: ${backgroundPrimaryColor};
      transition: all 0.2s linear;
    }
  }
  @media (max-width: 576px) {
    .left svg,
    .right svg {
      width: 30px;
      height: 30px;
    }
    .right,
    .left {
      width: 30px;
      height: 30px;
      border-radius: 30px;
    }
  }
`
export const Carousel: React.FunctionComponent = ({ children }) => {
  if (!Array.isArray(children)) throw new Error("Please add children to the carousell")
  const [currentElement, setCurrentElement] = useState(0)
  // must reset on resize
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentElement === children.length - 1) {
        setCurrentElement(0)
      } else {
        setCurrentElement(currentElement + 1)
      }
    }, 13000)
    return () => {
      clearInterval(interval)
    }
  }, [children.length, currentElement])
  return (
    <div css={carouselStyle}>
      <div className="left">
        <FaChevronCircleLeft
          onClick={() => {
            if (currentElement === 0) {
              setCurrentElement(children.length - 1)
            } else {
              setCurrentElement(currentElement - 1)
            }
          }}
        />
      </div>
      <div className="right">
        <FaChevronCircleRight
          onClick={() => {
            if (currentElement === children.length - 1) {
              setCurrentElement(0)
            } else {
              setCurrentElement(currentElement + 1)
            }
          }}
        />
      </div>
      <div className="overlay" />
      <span className="overlay-border" />
      <div>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${currentElement === index ? "visible" : "hidden"}`,
              hide: currentElement !== index,
            })
          }
        })}
      </div>
    </div>
  )
}

const carouselImageStyle = css`
  display: block;
  .country-marker {
    position: absolute;
    width: 100%;
    text-align: right;
    z-index: 100;
    color: white;
    font-size: 1.2rem;
    bottom: ${overlayBorderPadding + 5}px;
    padding-right: ${overlayBorderPadding + 10}px;
  }
  .country-marker svg {
    margin-right: 5px;
    width: 15px;
    height: 15px;
  }
  .country-marker.hidden {
    display: none;
  }
  &.link.hidden .development-mark {
    // hide development mark
    display: none;
  }
`
export const CarouselImage: React.FunctionComponent<{
  country: string
  className?: string
  hide?: boolean
  to: string
}> = ({ country, hide, children, className = "", to }) => {
  return (
    <ApplicationLink to={to} css={carouselImageStyle} className={`${className} link ${hide ? "hidden" : ""}`}>
      <div>
        {children}
        <div className={`country-marker ${hide ? "hidden" : ""}`}>
          <FaMapMarkerAlt />
          {country}
        </div>
      </div>
    </ApplicationLink>
  )
}
import { css } from "@emotion/core"
import React, { useEffect, useRef, useState } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/all"

const carousellStyle = css`
  position: relative;
  .gatsby-image-wrapper {
    margin-top: 0;
    margin-bottom: 0;
    max-height: 700px;
  }
  .hidden .gatsby-image-wrapper {
    height: 0;
    opacity: 0;
  }
  .visible .gatsby-image-wrapper {
    opacity: 1;
    transition: opacity 0.8s linear;
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
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    display: block;
    border: 1px solid #fff;
    z-index: 5;
    pointer-events: none;
  }
  .left {
    position: absolute;
    left: 10px;
    top: calc(50% - 20px);
    z-index: 10;
  }
  .right {
    position: absolute;
    right: 10px;
    top: calc(50% - 20px);
    z-index: 10;
  }
  .left svg,
  .right svg {
    color: black;
    width: 40px;
    height: 40px;
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
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: whitesmoke;
  }
  @media (hover: hover) {
    .left:hover,
    .right:hover {
      background-color: black;
      transition: all 0.2s linear;
    }
    .left:hover svg,
    .right:hover svg {
      color: whitesmoke;
      stroke: whitesmoke;
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
export const Carousell: React.FunctionComponent = ({ children }) => {
  if (!Array.isArray(children)) throw new Error("Please add children to the carousell")
  const [currentElement, setCurrentElement] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  // must reset on resize
  const heightStyle = height
    ? css`
        .visible .gatsby-image-wrapper {
          height: ${height}px;
        }
      `
    : css``
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
  useEffect(() => {
    if (ref.current && height === 0) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [height])
  useEffect(() => {
    const eventListener = () => {
      setHeight(0)
    }
    window.addEventListener("resize", eventListener)
    return () => {
      window.removeEventListener("resize", eventListener)
    }
  }, [])
  return (
    <div css={[carousellStyle, heightStyle]} ref={ref}>
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

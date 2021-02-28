import { css } from "@emotion/react"
import React from "react"
import { FaArrowCircleUp } from "react-icons/all"
import { useWindowSize } from "../hooks/useWindowSize"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { mediumEnd } from "./variables"

const style = css`
  @media (max-width: ${mediumEnd}) {
    display: none;
  }
  width: 40px;
  height: 40px;
  position: fixed;
  // bottom: 20px;
  bottom: 40px;
  right: 20px;
  transition: fill 0.5s, opacity 0.6s, visibility 0.6s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;

  &:hover {
    cursor: pointer;
    fill: #545454;
  }
  &.show {
    opacity: 0.5;
    visibility: visible;
  }
`

export const ScrollToTop = () => {
  const { windowHeight } = useWindowSize()
  const { height, direction } = useScrollPosition()
  return (
    <FaArrowCircleUp
      css={style}
      className={`${
        // display if we have scrolled for one window size and going up OR
        // if reaching the bottom for ~ one screen size (windowHeight * 2 because (document.body.offsetHeight - height - windowHeight) is equal to 0)
        // shouldn't display the arrow if the body height is less then 2 screen height
        (height > windowHeight && direction === "UP") ||
        (height > windowHeight * 2 && document.body.offsetHeight - height < windowHeight * 2)
          ? "show"
          : "hide"
      }`}
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }}
    />
  )
}

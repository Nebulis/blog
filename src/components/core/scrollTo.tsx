import { css } from "@emotion/core"
import React from "react"
import { FaArrowCircleUp } from "react-icons/all"
import { useWindowSize } from "../hooks/useWindowSize"

const style = css`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 20px;
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

export const ScrollToTopDesktop = () => {
  const { windowHeight } = useWindowSize()
  return (
    <ScrollPosition>
      {({ height, direction }) => {
        return (
          <FaArrowCircleUp
            css={style}
            className={`${
              (height > windowHeight && direction === "UP") || document.body.offsetHeight - height < windowHeight * 2
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
      }}
    </ScrollPosition>
  )
}
type DIRECTION = "UP" | "DOWN" | "NONE"
class ScrollPosition extends React.Component<
  { children: (options: { height: number; direction: DIRECTION }) => JSX.Element },
  { height: number; direction: DIRECTION }
> {
  public constructor(props: any) {
    super(props)
    this.state = { height: 0, direction: "NONE" }
  }

  public componentDidMount = () => {
    window.addEventListener("scroll", this.listenToScroll)
  }

  public componentWillUnmount = () => {
    window.removeEventListener("scroll", this.listenToScroll)
  }

  private listenToScroll = () => {
    const newHeight = document.body.scrollTop || document.documentElement.scrollTop
    this.setState(state => ({
      height: newHeight,
      direction: state.height > newHeight ? "UP" : state.height < newHeight ? "DOWN" : "NONE",
    }))
  }

  public render = () => {
    return <>{this.props.children({ height: this.state.height, direction: this.state.direction })}</>
  }
}

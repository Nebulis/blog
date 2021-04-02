import styled from "@emotion/styled"
import React, { FunctionComponent, useRef, useState, useLayoutEffect } from "react"
import ReactDOM from "react-dom"
import { useWindowMousePosition } from "../hooks/useWindowMousePosition"
import { useWindowSize } from "../hooks/useWindowSize"

export const TooltipContent = styled.div`
  background: hsla(0, 0%, 0%, 0.75);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  text-align: center;
`
const Div = styled.div`
  position: absolute;
  pointer-events: none;
  & > * {
    pointer-events: none;
  }
`
// check this in case https://www.joshwcomeau.com/react/the-perils-of-rehydration/
export const DialogPortal: FunctionComponent = ({ children }) => {
  if (typeof window === `undefined`) return null
  const element = document.getElementById("dialog-portal")
  if (!element) return null
  return ReactDOM.createPortal(children, element)
}

export const TooltipPortal: FunctionComponent = ({ children }) => {
  if (typeof window === `undefined`) return null
  const element = document.getElementById("tooltip-portal")
  if (!element) return null
  return ReactDOM.createPortal(children, element)
}

export const MouseToolTip: FunctionComponent = ({ children }) => {
  const { pageX, pageY, clientY, clientX } = useWindowMousePosition()
  const { windowWidth } = useWindowSize()
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(150) // random width
  const [height, setHeight] = useState(40) // random height

  // must use layout effect otherwise there are problems to display the tooltip
  // go in transport vietnam page, in mobile mode
  // click on chu lai airport
  // click on nha trang airport
  // => the tooltip will first be drawn with the width of the previous element (chu lai)
  // => and eventually will display the tooltip from nha trang (sometimes it's not because the tooltip comes over the mouse and triggers on mouse leave event, which get rid of the tooltip
  // the bug still exists :(
  useLayoutEffect(() => {
    setWidth(ref.current?.getBoundingClientRect().width ?? 150)
    setHeight(ref.current?.getBoundingClientRect().height ?? 40)
  }, [children])

  // this is use in combination with tooltip content.
  // we try to find how many elements in the tooltip content so that ew change the
  // offset accordingly (for instance in transport in vietnam page, multiple elements are provided
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const childrenLength = React.Children.count(children?.props?.children)
  const offset = clientY > 80 ? -30 - 20 * childrenLength : 30
  const offsetLeft = windowWidth - clientX < 130
  return (
    <TooltipPortal>
      <Div
        ref={ref}
        style={{
          ...(offsetLeft
            ? {
                left: `${pageX - width - 30}px`,
                top: `${pageY - height / 2}px`,
              }
            : { left: `${pageX - width / 2}px`, top: `${pageY + offset}px` }),
        }}
      >
        {children}
      </Div>
    </TooltipPortal>
  )
}

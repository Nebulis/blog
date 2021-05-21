import styled from "@emotion/styled"
import React, { FunctionComponent, useRef, useState, useEffect } from "react"
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

  useEffect(() => {
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
  const offsetRight = clientX < 130
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
            : offsetRight
            ? {
                left: `${pageX + 15}px`,
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

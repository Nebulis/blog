import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { useWindowMousePosition } from "../hooks/useWindowMousePosition"

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
  const { pageX, pageY, clientY } = useWindowMousePosition()
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(ref.current?.getBoundingClientRect().width ?? 0)
  }, [children])

  // this is use in combination with tooltip content.
  // we try to find how many elements in the tooltip content so that ew change the
  // offset accordingly (for instance in transport in vietnam page, multiple elements are provided
  // @ts-ignore
  const childrenLength = React.Children.count(children?.props?.children)
  const offset = clientY > 80 ? -15 - 30 * childrenLength : 30
  return (
    <TooltipPortal>
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: `${pageX - width / 2}px`,
          top: `${pageY + offset}px`,
        }}
      >
        {children}
      </div>
    </TooltipPortal>
  )
}

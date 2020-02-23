import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import { useWindowMousePosition } from "../hooks/useWindowMousePosition"

export const DialogPortal: FunctionComponent = ({ children }) => {
  const element = document.getElementById("dialog-portal")
  if (!element) return null
  return ReactDOM.createPortal(children, element)
}

export const TooltipPortal: FunctionComponent = ({ children }) => {
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
  const offset = clientY > 80 ? -45 : 30
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
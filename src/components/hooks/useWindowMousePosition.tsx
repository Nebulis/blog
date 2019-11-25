import { useEffect, useState } from "react"

export const useWindowMousePosition = () => {
  const [windowMousePosition, setWindowMousePosition] = useState({
    pageX: 0,
    clientX: 0,
    pageY: 0,
    clientY: 0,
  })

  const handleMouseMove = (e: MouseEvent) => {
    setWindowMousePosition({
      clientX: e.clientX,
      pageX: e.pageX,
      clientY: e.clientY,
      pageY: e.pageY,
    })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return windowMousePosition
}

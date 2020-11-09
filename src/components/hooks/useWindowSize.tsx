import { useEffect, useState } from "react"

let defaultHeight: number
let defaultWidth: number
let defaultScrollbarWidth: number
let defaultScrollbarHeight: number
let defaultMode: "landscape" | "portrait"

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
  defaultScrollbarHeight = 0
  defaultScrollbarWidth = 0
  defaultMode = "portrait"
}

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
    scrollbarHeight: defaultScrollbarHeight,
    scrollbarWidth: defaultScrollbarWidth,
    mode: defaultMode,
  })

  useEffect(() => {
    const handler = () =>
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        scrollbarWidth: window.innerWidth - document.documentElement.clientWidth,
        scrollbarHeight: window.innerHeight - document.documentElement.clientHeight,
        mode: window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait",
      })

    setTimeout(handler, 0) // force initial computation on size because of ssr initial size may be wrong =) (default values)
    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [])

  return dimensions
}

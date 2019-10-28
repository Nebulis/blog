import { useEffect, useState } from "react"

let defaultHeight: number
let defaultWidth: number

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })

  useEffect(() => {
    const handler = () =>
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      })

    setTimeout(handler, 0) // force initial computation on size because of ssr initial size may be wrong =) (default values)
    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [])

  return dimensions
}

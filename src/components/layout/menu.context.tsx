import React, { useEffect, useState } from "react"
import { useWindowSize } from "../hooks/useWindowSize"
import { pageDesktopHeightWithoutBanner, pageMobileHeightWithoutBanner } from "../core/variables"

export const MenuContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
  isMobileView: boolean
  pageHeight: string
}>({
  open: false,
  setOpen: () => {},
  isMobileView: false,
  pageHeight: pageDesktopHeightWithoutBanner,
})

export const MenuProvider: React.FunctionComponent = ({ children }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "scroll"
    }
  }, [open])

  const { windowWidth } = useWindowSize()
  const isMobileView = windowWidth <= 992
  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen,
        isMobileView,
        pageHeight: isMobileView ? pageMobileHeightWithoutBanner : pageDesktopHeightWithoutBanner,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

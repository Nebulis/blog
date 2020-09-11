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
  setOpen: () => void 0,
  isMobileView: false,
  pageHeight: pageDesktopHeightWithoutBanner,
})

export const MenuProvider: React.FunctionComponent = ({ children }) => {
  const [open, setOpen] = useState(false)
  const { windowWidth, scrollbarWidth } = useWindowSize()
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden"
      document.body.style.marginRight = `${scrollbarWidth}px` // this to avoid element to move on thr right when hiding the menu
    } else {
      document.body.style.overflowY = "scroll"
      document.body.style.marginRight = "0px"
    }
  }, [open, scrollbarWidth])

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

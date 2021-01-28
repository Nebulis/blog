import React from "react"
import { Application } from "./src/components/application"
import { MenuProvider } from "./src/components/layout/menu.context"
import { PinterestProvider } from "./src/components/layout/pinterest.context"
const tooltipPortal = document.createElement("div")
tooltipPortal.id = "tooltip-portal"
const dialogPortal = document.createElement("div")
dialogPortal.id = "dialog-portal"
document.body.appendChild(tooltipPortal)
document.body.appendChild(dialogPortal)

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
export const wrapPageElement = ({ element, props }) => {
  return (
    <Application {...props}>
      <MenuProvider>
        <PinterestProvider>{element}</PinterestProvider>
      </MenuProvider>
    </Application>
  )
}

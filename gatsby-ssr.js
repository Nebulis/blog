import { Application } from "./src/components/application"
import React from "react"
import { MenuProvider } from "./src/components/layout/menu.context"
import { PinterestProvider } from "./src/components/layout/pinterest.context"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const wrapPageElement = ({ element, props }) => {
  return (
    <Application {...props}>
      <MenuProvider>
        <PinterestProvider>{element}</PinterestProvider>
      </MenuProvider>
    </Application>
  )
}

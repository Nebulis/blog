import { Application } from "./src/components/application"
import React from "react"
import { MenuProvider } from "./src/components/layout/menu.context"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const wrapPageElement = ({ element }) => {
  return (
    <Application>
      <MenuProvider>{element}</MenuProvider>
    </Application>
  )
}

import React from "react"
import { Application } from "./src/components/application"
const portal = document.createElement("div")
portal.id = "tooltip-portal"
document.body.appendChild(portal)

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
export const wrapPageElement = ({ element }) => {
  return <Application>{element}</Application>
}

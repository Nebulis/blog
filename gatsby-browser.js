import React from "react"
import { Application } from "./src/components/Application"

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const wrapPageElement = ({ element }) => {
  return <Application>{element}</Application>
}

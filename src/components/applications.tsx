import React from "react"

export const ApplicationContext = React.createContext<{
  development: boolean
  /**
   * Property to keep track of the initial value of development when the page started
   * This property is useful because development property can be changed over the time by calling the toggle function
   * Some features need to be always enable or disable and must not change over the time
   */
  initialDevelopmentValue?: boolean
  toggle?: () => void
}>({
  development: false,
  initialDevelopmentValue: false,
})

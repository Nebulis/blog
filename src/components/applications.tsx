import React from "react"

export const ApplicationContext = React.createContext<{
  development: boolean
  initialDevelopmentValue?: boolean
  toggle?: () => void
}>({
  development: false,
  initialDevelopmentValue: false,
})

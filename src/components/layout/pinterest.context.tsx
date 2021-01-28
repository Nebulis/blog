import React, { useState } from "react"

export const PinterestContext = React.createContext<{
  selectedPin: string
  setSelectedPin: (pin: string) => void
}>({
  selectedPin: "",
  setSelectedPin: () => void 0,
})

export const PinterestProvider: React.FunctionComponent = ({ children }) => {
  const [selectedPin, setSelectedPin] = useState("")
  return (
    <PinterestContext.Provider
      value={{
        selectedPin,
        setSelectedPin,
      }}
    >
      {children}
    </PinterestContext.Provider>
  )
}

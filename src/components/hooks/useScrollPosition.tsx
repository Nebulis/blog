import { useEffect, useReducer } from "react"

type DIRECTION = "UP" | "DOWN" | "NONE"
interface State {
  height: number
  direction: DIRECTION
}

const reducer = (state: State, action: { type: "UPDATE"; payload: { height: number } }): State => {
  if (action.type === "UPDATE") {
    return {
      height: action.payload.height,
      direction: state.height > action.payload.height ? "UP" : state.height < action.payload.height ? "DOWN" : "NONE",
    }
  }
  return state
}
export const useScrollPosition = () => {
  const [state, dispatch] = useReducer(reducer, { height: 0, direction: "NONE" })

  useEffect(() => {
    const listenToScroll = () => {
      const newHeight = document.body.scrollTop || document.documentElement.scrollTop
      dispatch({
        type: "UPDATE",
        payload: {
          height: newHeight,
        },
      })
    }
    window.addEventListener("scroll", listenToScroll)

    return () => {
      window.removeEventListener("scroll", listenToScroll)
    }
  }, [])
  return state
}

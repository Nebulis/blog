import React, { FunctionComponent } from "react"

interface FlagFranceProps {
  selected?: boolean
  onClick: () => void
}
export const FlagFrance: FunctionComponent<FlagFranceProps> = ({ selected, onClick }) => {
  return (
    <svg
      onClick={onClick}
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width="16px"
      height="16px"
      style={{ filter: selected ? "grayscale(0)" : "grayscale(1)" }}
    >
      <circle style={{ fill: "#F0F0F0" }} cx="256" cy="256" r="256" />
      <path
        style={{ fill: "#D80027" }}
        d="M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"
      />
      <path
        style={{ fill: "#0052B4" }}
        d="M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z"
      />
    </svg>
  )
}

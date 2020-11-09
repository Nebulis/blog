import React, { FunctionComponent, useEffect, useState } from "react"
import { FaSearch, FaTimesCircle } from "react-icons/all"
import { Input } from "../core/input"
import { DarkButton } from "../core/button"
import { css } from "@emotion/core"
import { backgroundPrimaryColor, bannerHeight, darkButtonColor, darkButtonHoverColor } from "../core/variables"

// TODO landscape on mobile
const searchContainerStyle = css`
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  .search-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${backgroundPrimaryColor};
    width: auto;
    z-index: 1000;
    height: ${bannerHeight};
    padding-top: calc(${bannerHeight} / 8);
    padding-bottom: calc(${bannerHeight} / 8);
  }
  .search-fields {
    display: flex;
    background-color: ${backgroundPrimaryColor};
    align-items: flex-end;
    justify-content: center;
    width: 100%;
  }
  .search-fields .form-group {
    width: 60%;
    margin-bottom: 0;
  }
  .close {
    width: auto;
    cursor: pointer;
    fill: ${darkButtonColor};
    height: calc(${bannerHeight} / 5);
  }
  .close:hover {
    fill: ${darkButtonHoverColor};
  }
`

export const Search: FunctionComponent<{ onClose: () => void }> = ({ onClose }) => {
  const [search, setSearch] = useState("")
  useEffect(() => {
    const captureEvent = (event: KeyboardEvent) => {
      if (event.code === "CapsLock") {
        onClose()
      }
    }
    window.addEventListener("keyup", captureEvent)
    return () => {
      window.removeEventListener("keyup", captureEvent)
    }
  })

  return (
    <div css={searchContainerStyle}>
      <div className="search-container">
        <FaTimesCircle className="close" onClick={onClose} />
        <div className="search-fields">
          {search}
          <Input
            placeholder="Recherche"
            Icon={FaSearch}
            inputClassName="mt0 input"
            id="search"
            value={search}
            onKeyUp={(event) => {
              event.stopPropagation()
            }}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
          <DarkButton>Rechercher</DarkButton>
        </div>
      </div>
    </div>
  )
}

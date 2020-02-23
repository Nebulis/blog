import React, { FunctionComponent, useContext, useState } from "react"
import { FaCircle, FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from "react-icons/all"
import { css } from "@emotion/core"
import banner from "../../images/banner-transparent.png"
import { ApplicationContext } from "../application"
import { backgroundPrimaryColor, primaryColor, bannerHeight } from "../core/variables"
import { DialogPortal } from "../core/tooltipPortal"
import { Search } from "./search"
import styled from "@emotion/styled"
import { ApplicationLink } from "../core/links/link"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { useBannerHeight } from "../hooks/useBannerHeight"

const headerStyle = css`
  .header {
    background-color: ${backgroundPrimaryColor};
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: ${bannerHeight};
  }
  .header > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .header svg {
    fill: black;
    margin-left: 0.2rem;
    margin-right: 0.1rem;
    cursor: pointer;
  }
  .logo-container img {
    width: auto;
    z-index: 1000;
    height: ${bannerHeight};
  }
  .left-menu-container {
    display: flex;
    justify-content: space-between;
  }
  .right-menu-container {
    display: flex;
    justify-content: space-between;
  }

  .facebook:hover,
  .twitter:hover,
  .search:hover,
  .pinterest:hover,
  .instagram:hover {
    fill: ${primaryColor};
  }
  .development-mode-button.development {
    fill: green;
  }
  .development-mode-button.production {
    fill: red;
  }
`

const menuItemStyle = css`
  display: inline-block;
  padding: 5px 10px;
  transition: all 0.1s linear;
  cursor: pointer;
  &:active {
    background-color: red;
    color: white;
  }
  &:active {
    background-color: yellow;
    color: white;
  }
  &:hover {
    background-color: ${primaryColor};
    color: white;
  }
  span {
    padding-bottom: 5px;
    font-family: monospace;
    border-bottom: 2px dotted ${primaryColor};
  }
  &:hover span {
    border-bottom: none;
  }
`
// TODO there is a small glitch when clicking on an element, might be due to the non use of an app skeleton
const MenuItem: FunctionComponent = ({ children }) => {
  return (
    <span css={menuItemStyle}>
      <span>{children}</span>
    </span>
  )
}

export const Header: FunctionComponent = () => {
  const { height } = useScrollPosition()
  const [bannerHeight] = useBannerHeight()
  const [search, setSearch] = useState(false)
  const status = height > bannerHeight * 4 ? "display" : "hide"
  return (
    <>
      <StaticHeader onSearch={() => setSearch(true)} />
      <StickyHeader className={status} onSearch={() => setSearch(true)} />
      {search && (
        <DialogPortal>
          <Search onClose={() => setSearch(false)} />
        </DialogPortal>
      )}
    </>
  )
}

const StaticHeader: FunctionComponent<{ className?: string; onSearch: () => void }> = ({
  className = "",
  onSearch,
}) => {
  const context = useContext(ApplicationContext)

  return (
    <header css={headerStyle} className={className}>
      <div className="header">
        <div className="left-menu-container">
          {context.development ? (
            <div className="social-network-container">
              <FaFacebook className="facebook" />
              <FaTwitter className="twitter" />
              <a href="https://instagram.com/_magic_of_travels_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="instagram" />
              </a>
              <FaPinterest className="pinterest" />
            </div>
          ) : (
            <div />
          )}
          <div className="left-menu-element">
            <MenuItem>
              <ApplicationLink to="home">Accueil</ApplicationLink>
            </MenuItem>
            <MenuItem>Destination</MenuItem>
            <MenuItem>Organisation</MenuItem>
          </div>
        </div>
        <div className="logo-container">
          <ApplicationLink to="home">
            <img src={banner} />
          </ApplicationLink>
        </div>
        <div className="right-menu-container">
          <div className="right-menu-element">
            <MenuItem>Découverte</MenuItem>
            <MenuItem>Lifestyle</MenuItem>
            <MenuItem>A propos</MenuItem>
          </div>
          <div className="mr2">
            {context.development && <FaSearch onClick={onSearch} className="search" />}
            {context.initialDevelopmentValue ? (
              <FaCircle
                onClick={context.toggle}
                className={`development-mode-button ${context.development ? "development" : "production"}`}
              />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}

const duration = 0.1
// TODO explore position sticky
const StickyHeader = styled(StaticHeader)`
  &.hide .header,
  &.hide .header img {
    z-index: 0;
    height: 0px;
  }
  &.hide .header > :not(.logo-container) {
    visibility: hidden;
  }
  &.display .header > :not(.logo-container) {
    visibility: visible;
    transition: visibility ${duration / 2}s step-end;
  }
  &.display .header,
  &.display .header img {
    transition: height ${duration}s ease-in-out;
  }
  &.display {
    z-index: 1000;
    position: fixed;
  }
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid black;
`

import React, { FunctionComponent, useContext, useState } from "react"
import { FaCircle, FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from "react-icons/all"
import { css } from "@emotion/core"
import banner from "../../images/banner-transparent.png"
import { ApplicationContext } from "../application"
import { backgroundPrimaryColor, primaryColor, bannerHeight, primaryDarkColor } from "../core/variables"
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
    // height: 200px;
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

  .left-menu-element {
    ul {
      z-index: 500;
      list-style: none;
      margin: 0;
      padding-left: 0;
    }
    li {
      position: relative;
      font-family: monospace;
      // transition: all 0.1s linear;
    }
    a {
      width: 100%;
    }
    & > ul {
      display: flex;
      & > li {
        padding: 5px 10px;
        & > a {
          padding-bottom: 5px;
          font-family: monospace;
          border-bottom: 2px dotted ${primaryColor};
        }
        &:hover > a {
          border-bottom-color: ;
        }
      }
      & > li:hover {
        background-color: ${primaryColor};
        color: white;
      }
    }

    & ul > li > ul {
      top: calc(100% + 10px);
      left: 0;
      font-size: 0.75rem;
    }
    & ul > li > ul ul {
      top: -20px;
      left: 100%;
    }

    ul li > ul {
      // visibility: hidden;
      // opacity: 0;
      // display: none;
      visibility: visible;
      display: block;
      // opacity: 0.9;
      width: calc(100% + 50px);
      width: 200px;
      position: absolute;

      // background-color: transparent;
      // background-color: ${primaryDarkColor};
      // background-color: ${primaryColor};
      // background-color: #1b1811;
      background-color: rgba(255,255,255,.85);
      // color: ${primaryDarkColor};
      color: black;
      // color: whitesmoke;
      // border: px solid ${primaryDarkColor};
      padding-top:20px;
      padding-bottom:20px;
      border-top: 3px solid ${primaryDarkColor};
    }

    ul li:hover > ul,
    ul li ul:hover,
    ul li ul:focus {
      visibility: visible;
      // opacity: 1;
      display: block;
    }

    ul > li li:not(:last-child) {
      // border-bottom: 2px solid ${primaryColor};
      // border-bottom: 1px solid black;
      // border-bottom: 2px solid ${primaryDarkColor};
    }

    ul > li ul li:hover {
      // background-color: ${primaryColor};
      // background-color: #dcdcdc;
      // background-color: white;
      // opacity: 1;
      color: black;
    }

    ul > li li:first-child {
    }
    ul > li li {
      padding: 0px 15px;
      text-transform: uppercase;
      // border-left: 6px solid ${primaryColor};
      // border-right: 4px solid #B0B0B0;
    }
    & ul > li > ul > li {
      // background-color: #E8E8E8	;
      // opacity: 0.94;
    }
    & ul > li > ul > li > ul > li {
      // background-color: #E8E8E8	;
      // opacity: 1;
    }
    & ul > li > ul > li:hover > ul > li {
      // opacity: 0.94;
    }
    & ul > li > ul > li:hover > ul > li:hover {
      // background-color: white;
      // color: black;
      // opacity: 1;
    }
    
    ul > li ul li a:hover {
    background-color: rgba(0,0,0,.03);
    }

    ul > li ul li a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 10px;
    }
    .menu-arrow {
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;

      border-left: 5px solid green;
    }
  .white-arrow {
    position: absolute;
    border: 10px solid transparent;
    left: calc(50% - 10px);
    transition: all 100ms linear;
    bottom: -20px;
    z-index: 510;
  }
  li:hover .white-arrow {
    // bottom: -8.5px; // dunno why
    border-top-color: ${primaryColor};
  }
  }
`

const menuItemStyle = css`
  display: inline-block;
  padding: 5px 10px;
  transition: all 0.1s linear;
  cursor: pointer;
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
      {/*<StickyHeader className={status} onSearch={() => setSearch(true)} />*/}
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
              <a href="https://twitter.com/_magicoftravels" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="twitter" />
              </a>
              <a href="https://instagram.com/_magic_of_travels_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="instagram" />
              </a>
              <a href="https://pinterest.com/MagicOfTravels" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="pinterest" />
              </a>
            </div>
          ) : (
            <div />
          )}
          <div className="left-menu-element">
            <ul>
              <li>
                <ApplicationLink to="home">Accueil</ApplicationLink>
              </li>
              <li>
                <a href="#">Destination</a>
                {/*<span className="white-arrow"> </span>*/}
                <ul aria-label="submenu">
                  <li>
                    <a href="#">One</a>
                  </li>
                  <li>
                    <a href="#">Two</a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Three</span>
                      <span className="menu-arrow" />
                    </a>

                    <ul aria-label="submenu">
                      <li>
                        <a href="#">Three One</a>
                      </li>
                      <li>
                        <a href="#">Three Two</a>
                      </li>
                      <li>
                        <a href="#">Three Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Organisation</a>
              </li>
            </ul>
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

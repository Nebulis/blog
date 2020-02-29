import React, { FunctionComponent, useContext, useState } from "react"
import { FaCircle, FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from "react-icons/all"
import { css } from "@emotion/core"
import banner from "../../images/2020-02-28.png"
import bannerMobile from "../../images/2020-02-29.png"
import { ApplicationContext } from "../application"
import { backgroundPrimaryColor, primaryColor, bannerHeight } from "../core/variables"
import { DialogPortal } from "../core/tooltipPortal"
import { Search } from "./search"
import styled from "@emotion/styled"
import { ApplicationLink } from "../core/links/link"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { useBannerHeight } from "../hooks/useBannerHeight"
import { Burger, BurgerAbsolute, Menu, MobileMenu } from "./menu"
import { MenuContext } from "./menu.context"

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
  const { isMobileView, open, setOpen } = useContext(MenuContext)

  return (
    <header css={headerStyle} className={className}>
      <div className="header">
        <div className="left-menu-container">
          {context.development && !isMobileView ? (
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
            <div className="ml2">
              <Burger open={open} onClick={() => setOpen(!open)} />
              <BurgerAbsolute open={open} onClick={() => setOpen(!open)} />
            </div>
          )}
          <div className="left-menu-element" />
        </div>
        <div className="logo-container">
          <ApplicationLink to="home">
            {isMobileView ? <img src={bannerMobile} /> : <img src={banner} />}
          </ApplicationLink>
        </div>
        <div className="right-menu-container">
          <div className="right-menu-element" />
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
      {!isMobileView && <Menu />}
      <MobileMenu />
    </header>
  )
}

// TODO explore position sticky
const StickyHeader = styled(StaticHeader)`
  &.hide {
    transform: translateY(-500px);
    transition: transform 0s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  &.display {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid black;
`

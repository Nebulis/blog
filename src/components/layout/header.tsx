import React, { FunctionComponent, useContext, useState } from "react"
import { FaCircle, FaFacebook, FaInstagram, FaPinterest, FaSearch, FaTwitter } from "react-icons/all"
import { css } from "@emotion/core"
import banner from "../../images/logo-the-real.svg"
import bannerMobile from "../../images/logo-mobile-the-real.svg"
import { ApplicationContext } from "../application"
import { backgroundPrimaryColor, primaryColor, bannerHeight, bannerHeightLandscape, mobileEnd } from "../core/variables"
import { DialogPortal } from "../core/tooltipPortal"
import { Search } from "./search"
import styled from "@emotion/styled"
import { ApplicationLink } from "../core/links/link"
import { Burger, BurgerAbsolute, Menu, MobileMenu } from "./menu"
import { MenuContext } from "./menu.context"
import { FlagFrance } from "../icon/flag-france"
import { FlagUK } from "../icon/flag-uk"
import { useCustomTranslation } from "../../i18n"
import { facebook, instagram, pinterest, twitter } from "../../utils"

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
    padding-top: 5px;
    padding-bottom: 5px;
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
  &.show-border-bottom {
    border-bottom: 1px solid black;
  }
  // use max-height to check the mobile
  @media (orientation: landscape) and (max-height: ${mobileEnd}) {
    .header,
    .logo-container img {
      height: ${bannerHeightLandscape};
    }
  }
`
// disabled code is used by the sticky header
export const Header: FunctionComponent<{ noStickyHeader?: boolean; className?: string }> = ({
  // noStickyHeader = false,
  className = "",
}) => {
  const { isMobileView } = useContext(MenuContext)
  const [search, setSearch] = useState(false)
  // const { height } = useScrollPosition()
  // const [bannerHeight] = useBannerHeight()
  // const status = height > bannerHeight * 4 ? "display" : "hide"
  return (
    <>
      <StaticHeader
        onSearch={() => setSearch(true)}
        className={`${className}${isMobileView ? " show-border-bottom" : ""}`}
      />
      {/*{isMobileView && !noStickyHeader && (*/}
      {/*  <StickyHeader*/}
      {/*    // show-border-bottom must be shown only on mobile view, otherwise there is a weird border on desktop view*/}
      {/*    className={`${status} ${className} ${isMobileView ? "show-border-bottom" : ""}`}*/}
      {/*    onSearch={() => setSearch(true)}*/}
      {/*  />*/}
      {/*)}*/}
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
  const { i18n } = useCustomTranslation()

  return (
    <header css={headerStyle} className={className}>
      <div className="header">
        <div className="left-menu-container">
          {!isMobileView ? (
            false && (
              <div className="social-network-container">
                <a
                  href={`https://www.facebook.com/${facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-labelledby="facebook-label"
                >
                  <span id="facebook-label" hidden>
                    Go to Facebook
                  </span>
                  <FaFacebook className="facebook" aria-hidden="true" focusable="false" />
                </a>
                <a
                  href={`https://twitter.com/${twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-labelledby="twitter-label"
                >
                  <span id="twitter-label" hidden>
                    Go to Twitter
                  </span>
                  <FaTwitter className="twitter" aria-hidden="true" focusable="false" />
                </a>
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-labelledby="instagram-label"
                >
                  <span id="instagram-label" hidden>
                    Go to Facebook
                  </span>
                  <FaInstagram className="instagram" aria-hidden="true" focusable="false" />
                </a>
                <a
                  href={`https://pinterest.com/${pinterest}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-labelledby="pinterest-label"
                >
                  <span id="pinterest-label" hidden>
                    Go to Facebook
                  </span>
                  <FaPinterest className="pinterest" aria-hidden="true" focusable="false" />
                </a>
              </div>
            )
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
            {isMobileView ? (
              <img src={bannerMobile} alt="Welcome to Magic of Travels" />
            ) : (
              <img src={banner} alt="Welcome to Magic of Travels" />
            )}
          </ApplicationLink>
        </div>
        <div className="right-menu-container">
          <div className="right-menu-element" />
          <div className="mr2">
            <FlagFrance selected={i18n.languageCode === "fr"} onClick={() => i18n.changeLanguage("fr")} />
            <FlagUK selected={i18n.languageCode === "en"} onClick={() => i18n.changeLanguage("en")} />
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StickyHeader = styled(StaticHeader)`
  &.hide {
    transform: translateY(-500px);
    transition: transform 0s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  &.display {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }
  &.show-border-bottom {
    border-bottom: 1px solid black;
  }

  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

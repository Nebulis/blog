import React, { FunctionComponent, useContext } from "react"
import { Header } from "./header"
import { ScrollToTop } from "../core/scrollTo"
import { getLink } from "../core/links/links.configuration"
import { css } from "@emotion/core"
import { ApplicationContext } from "../application"
import { Maintenance } from "./maintenance"
import "./layout.css"
import "./tachyons.css"
import smoothscroll from "smoothscroll-polyfill"
import { Input } from "../core/input"
import { PrimaryDarkButton } from "../core/button"
import styled from "@emotion/styled"
import { largeStart, mediumEnd, mobileEnd, primaryColor, primaryDarkColor } from "../core/variables"
import { MenuContext } from "./menu.context"

typeof window !== `undefined` && smoothscroll.polyfill()

const pageDevelopmentMarkStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-top: 45px solid #e28de5;
`
export const PageDevelopmentMark = () => <span css={pageDevelopmentMarkStyle} />

const Footer = styled.footer`
  color: white;
  background-color: black;
  a {
    color: ${primaryColor};
  }
  & > div {
    justify-items: center;
  }
  justify-content: space-around;
  display: flex;
  @media (min-width: ${largeStart}) {
    align-items: center;
  }
  @media (max-width: ${mediumEnd}) {
    flex-wrap: wrap;
    .newsletter {
      width: 100%;
      order: -1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .newsletter .text {
      margin-right: 0.5rem;
    }
  }
  @media (max-width: ${mobileEnd}) {
    .newsletter {
      display: block;
      text-align: center;
    }
  }
`

const InternalBlogLayout: FunctionComponent<{ page: string; className?: string; noStickyHeader?: boolean }> = ({
  children,
  page,
  className = "",
  noStickyHeader = false,
}) => {
  const isPublished = page === "home" ? true : getLink(page).published
  const { development } = useContext(ApplicationContext)
  const { isMobileView } = useContext(MenuContext)
  return (
    <Maintenance>
      {typeof window !== `undefined` ? (
        <div className={className}>
          {development && !isPublished && <PageDevelopmentMark />}
          <Header noStickyHeader={noStickyHeader} />
          {!isMobileView && <ScrollToTop />}
          <div className="children-container">{children}</div>

          <Footer className="pa2">
            <div className="f6 copyright">© 2020 Magic of Travels</div>
            {development && (
              <div className="newsletter">
                <div className="tc text">NEWSLETTER</div>
                <Input placeholder="Adresse Email" className="inline-flex" id="newsletter" />
                <div
                  className="inline-flex"
                  css={css`
                    margin-top: 0.6rem;
                    margin-bottom: 0.6rem;
                  `}
                >
                  <PrimaryDarkButton>S&apos;inscrire</PrimaryDarkButton>
                </div>
              </div>
            )}
            <div className="f6 made-by">
              Made with ❤️ by&nbsp;
              <a href="https://github.com/nebulis" target="_blank" rel="noopener noreferrer">
                Nebulis
              </a>
            </div>
          </Footer>
        </div>
      ) : null}
    </Maintenance>
  )
}

export const IndexBlogLayout = styled(InternalBlogLayout)`
  .card .tags a {
    color: ${primaryColor};
  }
  .card .tags a:hover {
    border-bottom: 1px solid ${primaryDarkColor};
  }
`

export const BlogLayout = styled(InternalBlogLayout)`
  // .children-container {
  //   margin-left: auto;
  //   margin-right: auto;
  //   width: 100%;
  //   padding-left: 10px;
  //   padding-right: 10px;
  //   flex: 1;
  // }
  //
  // @media (min-width: 576px) {
  //   .children-container {
  //     padding: 0;
  //     max-width: 540px;
  //   }
  // }
  //
  // @media (min-width: 768px) {
  //   .children-container {
  //     max-width: 720px;
  //   }
  // }
  //
  // @media (min-width: 992px) {
  //   .children-container {
  //     max-width: 960px;
  //   }
  // }
  //
  // @media (min-width: 1200px) {
  //   .children-container {
  //     max-width: 1140px;
  //   }
  // }
`

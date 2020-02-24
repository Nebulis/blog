import React, { FunctionComponent, useContext } from "react"
import { Header } from "./header"
import { Menu, MobileMenu } from "./menu"
import { ScrollToTop } from "../core/scrollTo"
import { getLink } from "../core/links/links"
import { css } from "@emotion/core"
import { ApplicationContext } from "../application"
import { Maintenance } from "./maintenance"
import "./layout.css"
import "./tachyons.css"
import smoothscroll from "smoothscroll-polyfill"
import { useWindowSize } from "../hooks/useWindowSize"
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

export const BlogLayout: FunctionComponent<{ page: string }> = ({ children, page }) => {
  const isPublished = page === "home" ? true : getLink(page).published
  const context = useContext(ApplicationContext)
  const { windowWidth } = useWindowSize()
  return (
    <Maintenance>
      {typeof window !== `undefined` ? (
        <>
          {context.development && !isPublished && <PageDevelopmentMark />}
          <Header />
          {/*{windowWidth <= 576 ? <MobileMenu /> : <Menu />}*/}
          <ScrollToTop />
          <div className="center blog-container">{children}</div>
        </>
      ) : null}
    </Maintenance>
  )
}

import React, { FunctionComponent, useContext } from "react"
import { Header } from "./header"
import { Menu } from "./menu"
import { ScrollToTop } from "../core/scrollTo"
import { getLink } from "../core/links/links"
import { css } from "@emotion/core"
import { ApplicationContext } from "../application"
import { Maintenance } from "./maintenance"
import "./layout.css"
import "./tachyons.css"

const pageDevelopmentMarkStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-top: 45px solid #e28de5;
`
const PageDevelopmentMark = () => <span css={pageDevelopmentMarkStyle} />

export const BlogLayout: FunctionComponent<{ page: string }> = ({ children, page }) => {
  const isPublished = page === "home" ? true : getLink(page).published
  const context = useContext(ApplicationContext)
  return (
    <Maintenance>
      {typeof window !== `undefined` ? (
        <>
          {context.development && !isPublished && <PageDevelopmentMark />}
          <Header />
          <Menu />
          <ScrollToTop />
          <div className="center blog-container">{children}</div>
        </>
      ) : null}
    </Maintenance>
  )
}
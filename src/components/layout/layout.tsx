import React, { FunctionComponent, useContext, useEffect, useState } from "react"
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
import { largeStart, maxWidth, mediumEnd, mobileEnd, primaryColor, primaryDarkColor } from "../core/variables"
import { FaCheck, FaEnvelope, FaSpinner, FaTimes } from "react-icons/all"
import { MenuContext } from "./menu.context"
import { Status } from "../../types/shared"

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
  justify-self: flex-end;
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

export const withDraw = (draw: () => void) => {
  return function <P>(Component: React.ComponentType<P>) {
    // eslint-disable-next-line react/display-name
    return (props: P) => {
      return <Component draw={draw} {...props} />
    }
  }
}

export const IndexBlogLayout: FunctionComponent<{
  page: string
  className?: string
  noStickyHeader?: boolean
  draw?: () => void
}> = ({ children, page, className = "", noStickyHeader = false, draw }) => {
  const isPublished = page === "home" ? true : getLink(page).published
  const { development } = useContext(ApplicationContext)
  const { isMobileView } = useContext(MenuContext)
  const [mail, setMail] = useState("")
  const [status, setStatus] = useState<Status>("INITIAL")
  useEffect(() => {
    if (draw) draw()
    // I really want to run this one even if the function changed which should NOT happen
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // reset the status to INITIAL after SUCCESS
  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (status === "SUCCESS") {
      timeout = setTimeout(() => {
        setStatus("INITIAL")
      }, 5000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [status])
  return (
    <Maintenance>
      {typeof window !== `undefined` ? (
        <div className={`${className} flex flex-column min-vh-100`}>
          {development && !isPublished && <PageDevelopmentMark />}
          <Header noStickyHeader={noStickyHeader} />
          {!isMobileView && <ScrollToTop />}
          <div className="children-container">{children}</div>

          <Footer className="pa2">
            <div className="f6 copyright">© 2020 Magic of Travels</div>
            {development && (
              <div className="newsletter">
                <div className="tc text">NEWSLETTER</div>
                <div className="inline-flex">
                  <Input
                    placeholder="Adresse Email"
                    className="inline-flex"
                    id="newsletter"
                    value={mail}
                    aria-label="Email"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMail(event.target.value)}
                  />
                  <div
                    className="inline-flex"
                    css={css`
                      margin-top: 0.6rem;
                      margin-bottom: 0.6rem;
                    `}
                  >
                    <PrimaryDarkButton
                      disabled={!mail || status === "LOADING"}
                      onClick={() => {
                        setStatus("LOADING")
                        fetch("https://us-central1-blog-3dd22.cloudfunctions.net/newsletter", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            mail,
                          }),
                        })
                          .then((res) => {
                            if (!res.ok) {
                              throw new Error("Request failed: " + res.statusText)
                            }
                          })
                          .then(() => {
                            setMail("")
                            setStatus("SUCCESS")
                          })
                          .catch(() => {
                            setStatus("ERROR")
                          })
                      }}
                    >
                      {status === "INITIAL" ? (
                        <FaEnvelope />
                      ) : status === "LOADING" ? (
                        <FaSpinner className="fa-spin" />
                      ) : status === "SUCCESS" ? (
                        <FaCheck />
                      ) : (
                        <FaTimes />
                      )}
                      &nbsp;S&apos;inscrire
                    </PrimaryDarkButton>
                  </div>
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

// layout to apply on articles
export const HomeBlogLayout = styled(IndexBlogLayout)`
  .card .tags a {
    color: ${primaryColor};
  }
  .card .tags a:hover {
    border-bottom: 1px solid ${primaryDarkColor};
  }
`

// layout to apply on pages (index, country index, ...)
export const BlogLayout = styled(IndexBlogLayout)`
  .children-container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    flex: 1;
  }

  @media (min-width: 576px) {
    .children-container {
      padding: 0;
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .children-container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .children-container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .children-container {
      max-width: 1140px;
    }
  }
`

// max-width is needed for the title to text-overflow correctly
export const ArticlesContainer = styled.div`
  max-width: ${maxWidth}px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }
  padding: 1rem 20px;
  @media (max-width: ${mediumEnd}) {
    > * {
      flex: 0 0 calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
    > *:nth-of-type(n + 3) {
      margin-top: 20px;
    }
    > *:nth-of-type(odd) {
      margin-right: 10px;
    }
    > *:nth-of-type(even) {
      margin-left: 10px;
    }
  }
  @media (max-width: ${mobileEnd}) {
    > * {
      flex: 0 0 100%;
      max-width: 100%;
    }
    > *:nth-of-type(n + 2) {
      margin-top: 20px;
    }
    > *:nth-of-type(odd) {
      margin-right: 0;
    }
    > *:nth-of-type(even) {
      margin-left: 0;
    }
  }
  .card .tags span,
  .card .title {
    font-size: 0.8rem;
  }
`
export const MedallionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  & > * {
    margin: 5px;
  }
`

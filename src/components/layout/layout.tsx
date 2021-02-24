import React, { FunctionComponent, HTMLAttributes, useContext, useEffect, useLayoutEffect, useState } from "react"
import { Header } from "./header"
import { ScrollToTop } from "../core/scrollTo"
import { getLink } from "../core/links/links.utils"
import { css, Global } from "@emotion/core"
import { ApplicationContext } from "../application"
import "./layout.css"
import "./tachyons.css"
import smoothscroll from "smoothscroll-polyfill"
import { Input } from "../core/input"
import { PrimaryDarkButton } from "../core/button"
import styled from "@emotion/styled"
import {
  extraLargeStart,
  largeStart,
  maxWidth,
  maxWidthExtraLargeContainer,
  mediumEnd,
  mediumStart,
  mobileEnd,
  primaryColor,
  smallEnd,
  smallStart,
} from "../core/variables"
import { FaCheck, FaEnvelope, FaSpinner, FaTimes } from "react-icons/all"
import { Status } from "../../types/shared"
import { useCustomTranslation } from "../../i18n"
import { subscribe } from "../../services/newsletter"
import { navigate, PageProps } from "gatsby"
import { PinterestContext } from "./pinterest.context"
import FreestyleFont from "../../fonts/Freestyle-Script.ttf"
import FreestyleFontWoff from "../../fonts/Freestyle-Script.woff2"
import CourgetteFont from "../../fonts/Courgette-Regular.ttf"
import CourgetteFontWoff from "../../fonts/Courgette-Regular.woff2"
import PlayfairFont from "../../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"
import PlayfairFontWoff from "../../fonts/PlayfairDisplay-Italic.woff2"
import { vietnamPrimaryColorDarker, vietnamPrimaryColorWithOpacity } from "../core/asia/vietnam/vietnam.colors"

typeof window !== `undefined` && smoothscroll.polyfill()

const pageDevelopmentMarkStyle = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 45px solid transparent;
  border-top: 45px solid #e28de5;
  pointer-events: none;
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
  return function <P>(Component: React.ComponentType<P>): React.FunctionComponent<P> {
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
  location: PageProps["location"]
}> = ({ children, page, className = "", noStickyHeader = false, draw, location }) => {
  const isPublished = page === "home" ? true : getLink(page).published
  const { initialDevelopmentValue, development } = useContext(ApplicationContext)
  const { setSelectedPin } = useContext(PinterestContext)
  const [mail, setMail] = useState("")
  const [status, setStatus] = useState<Status>("INITIAL")
  const { t } = useCustomTranslation("common")
  useLayoutEffect(() => {
    if (!isPublished && !initialDevelopmentValue) {
      navigate("/404")
    }
  }, [isPublished, initialDevelopmentValue])
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
  return typeof window !== `undefined` ? (
    <div className={`${className} index-blog-layout flex flex-column min-vh-100`} onClick={() => setSelectedPin("")}>
      <Global
        styles={css`
          @font-face {
            font-family: "Playfair Display";
            font-display: swap;
            font-weight: 400;
            src: url(${PlayfairFontWoff}) format("woff2"), url("${PlayfairFont}") format("truetype"); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
          }
          @font-face {
            font-family: "Freestyle Script";
            font-display: swap;
            src: url("${FreestyleFontWoff}") format("woff2"), url("${FreestyleFont}") format("truetype"); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
          }
          @font-face {
            font-family: "Courgette";
            font-display: swap;
            src: url("${CourgetteFontWoff}") format("woff2"), url("${CourgetteFont}") format("truetype"); /* Chrome 4+, Firefox 3.5, Opera 10+, Safari 3—5 */
          }
        `}
      />
      {development && !isPublished && <PageDevelopmentMark />}
      <Header noStickyHeader={noStickyHeader} location={location} />
      <ScrollToTop />
      <div className="children-container index-blog-layout-content flex-grow-1">{children}</div>

      <Footer className="pa2">
        <div className="f6 copyright">© 2020 Magic of Travels</div>
        <div className="newsletter">
          <div className="tc text">NEWSLETTER</div>
          <div className="inline-flex">
            <Input
              placeholder={t("footer.email")}
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
                  subscribe({ mail })
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
                &nbsp;{t("footer.subscribe")}
              </PrimaryDarkButton>
            </div>
          </div>
        </div>
        <div className="f6 made-by">
          Made with ❤️ by&nbsp;
          <a href="https://github.com/nebulis" target="_blank" rel="noopener noreferrer">
            Nebulis
          </a>
        </div>
      </Footer>
    </div>
  ) : null
}

// layout to apply on pages (index, country index, ...)
export const BlogLayout = styled(IndexBlogLayout)`
  .children-container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: ${smallEnd}) {
    .children-container {
      .image-layout:not(.no-reset-image) {
        margin-left: -10px;
        margin-right: -10px;
        width: calc(100% + 20px);
        max-width: calc(100% + 20px);
      }
    }
  }

  @media (min-width: ${smallStart}) and (max-width: ${smallEnd}) {
    .children-container {
      padding: 0 20px;
      .image-layout:not(.no-reset-image) {
        margin-left: -20px;
        margin-right: -20px;
        width: calc(100% + 40px);
        max-width: calc(100% + 40px);
      }
    }
  }

  @media (min-width: ${mediumStart}) {
    .children-container {
      padding: 0 30px;
    }
  }

  @media (min-width: ${extraLargeStart}) {
    .children-container {
      max-width: ${maxWidthExtraLargeContainer}px;
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

export const goToAllArticlesContainer = css`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const GoToAllArticlesContainer: FunctionComponent<HTMLAttributes<any>> = ({ children, ...props }) => (
  <div css={goToAllArticlesContainer} className="all-articles-container" {...props}>
    {children}
  </div>
)

export const MainCardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1rem 20px;

  @media (min-width: ${extraLargeStart}) {
    max-width: ${maxWidthExtraLargeContainer}px;
  }
`
export const ArticleCardContainer = styled.article`
  margin-bottom: 1rem;
  @media (max-width: ${mobileEnd}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const CityArticleContainer = styled.div`
  padding: 1rem 20px;
  @media (min-width: ${largeStart}) {
    display: grid;
    // use minmax to prevent item from expanding the grid
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (max-width: ${mediumEnd}) {
    & > *:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }
`
export const MapContainer = styled.div`
  overflow: hidden;
  text-align: center;
`

export const Table = styled.table`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  td,
  th {
    text-align: center;
  }
`

const petitCarreJauneStyle = css`
  background-color: ${vietnamPrimaryColorWithOpacity(0.2)};
  border-color: ${vietnamPrimaryColorDarker};
  & > p {
    margin-bottom: 0;
  }
  svg {
    height: 64px;
    width: 64px;
    margin-right: 0.5rem;
  }
`
export const PetitCarreJaune: React.FunctionComponent = ({ children }) => (
  <div css={petitCarreJauneStyle} className="ba bw1 bl-0 br-0 pv2 ph3 mh3 mb3 mt3 tc">
    {children}
  </div>
)

import React, { FunctionComponent, useContext, useState } from "react"
import { FaCircle, FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/all"
import { Banner } from "./banner"
import { css } from "@emotion/core"
import { FlagUK } from "../icon/flag-uk"
import { FlagFrance } from "../icon/flag-france"
import { Link } from "gatsby"
import { ApplicationContext } from "../application"

const style = css`
  &.header {
    background-color: black;
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  svg {
    fill: white;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    cursor: pointer;
  }
  .facebook:hover {
    fill: #3b5998;
  }
  .twitter:hover {
    fill: #55acee;
  }
  .instagram:hover {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
    border-radius: 2px;
  }
  .pinterest:hover {
    fill: #cc2127;
    background-color: white;
    border-radius: 16px;
  }
  .development-mode-button.development {
    fill: green;
  }
  .development-mode-button.production {
    fill: red;
  }
`
type Lang = "french" | "english"

export const Header: FunctionComponent = () => {
  const [lang, setLang] = useState<Lang>("french")
  const context = useContext(ApplicationContext)
  return (
    <>
      <header>
        <div css={style} className="header">
          <div>
            <FaFacebook className="facebook" />
            <FaTwitter className="twitter" />
            <FaInstagram className="instagram" />
            <FaPinterest className="pinterest" />
          </div>
          <div>
            {context.initialDevelopmentValue ? (
              <FaCircle
                onClick={context.toggle}
                className={`development-mode-button ${context.development ? "development" : "production"}`}
              />
            ) : null}
            <FlagFrance selected={lang === "french"} onClick={() => setLang("french")} />
            <FlagUK selected={lang === "english"} onClick={() => setLang("english")} />
          </div>
        </div>
        <Link to="/">
          <Banner />
        </Link>
      </header>
    </>
  )
}

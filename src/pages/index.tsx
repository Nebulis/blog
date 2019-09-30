import React, { useState } from "react"
import { Maintenance } from "../components/maintenance"
import { css } from "@emotion/core"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"
import { FlagFrance } from "../components/icon/flag-france"
import { FlagUK } from "../components/icon/flag-uk"

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
`
type Lang = "french" | "english"

const IndexPage = () => {
  const [lang, setLang] = useState<Lang>("french")
  return (
    <Maintenance>
      <div css={style} className="header">
        <div>
          <FaFacebook className="facebook" />
          <FaTwitter className="twitter" />
          <FaInstagram className="instagram" />
          <FaPinterest className="pinterest" />
        </div>
        <div>
          <FlagFrance selected={lang === "french"} onClick={() => setLang("french")} />
          <FlagUK selected={lang === "english"} onClick={() => setLang("english")} />
        </div>
      </div>
      <div
        css={css`
          background-color: pink;
          height: 250px;
        `}
      />
      <div
        css={css`
          background-color: red;
          height: 50px;
        `}
      />
      <div
        css={css`
          background-color: yellow;
          height: 250px;
        `}
      />
    </Maintenance>
  )
}

export default IndexPage

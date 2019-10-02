import React, { useState } from "react"
import { Maintenance } from "../components/maintenance"
import { css } from "@emotion/core"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa"
import { FlagFrance } from "../components/icon/flag-france"
import { FlagUK } from "../components/icon/flag-uk"
import { Japan } from "../components/country/japan"
import SEO from "../components/seo"
import { useWindowSize } from "../components/hooks/useWindowSize"

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
  return (
    <>
      <SEO title="main" />
      <Maintenance>{typeof window !== `undefined` ? <Content /> : null}</Maintenance>
    </>
  )
}

const Content = () => {
  const [lang, setLang] = useState<Lang>("french")
  const { windowWidth: width } = useWindowSize()
  return (
    <>
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
          height: 170px;
          overflow: hidden;
          margin-top: 0.8rem;
          @media (max-width: 767px) {
          }
        `}
      >
        <div
          css={css`
            width: ${width > 1000 ? 1000 : width}px;
            margin: auto;
            font-family: "Ami R Regular";
            background-color: white;
            font-size: 70px;
          `}
        >
          <svg viewBox="0 0 1000 170" paintOrder="fill stroke">
            <g>
              <path
                id="curve"
                d="M 70 120 Q 500 0 930 120"
                stroke="black"
                fill="transparent"
                strokeWidth="4"
                strokeDasharray="20,10,5,5,5,10"
              />
              <text transform="translate(0, -10)">
                <textPath href="#curve">Magic of Travels</textPath>
              </text>
            </g>
            <g transform="translate(910, 70) rotate(59)">
              <rect width="60" height="50" fill="white" />
              <path d="m23 49c2-4 0-13-2-14l3-3c3 1 5 9 4 13z" fill="#d4edf5" />
              <path
                d="m52 10s0-3-1-4l-.1-.3-3.88 1.29c-1.97.66-3.7 1.4-5.02 3.01l-5.43 6.68-1.93 2.38 5.13 4.086c.796.634 1.941.569 2.66-.15l9.629-9.629s-.059-3.257-.059-3.367z"
                fill="#d4edf5"
              />
              <path d="m63 8c0-2.475-1.073-3.768-1.973-4.417-1.374-.99-3.373-1.188-5.344-.532l-8.979 2.993c-1.837.612-3.926 1.424-5.481 3.325l-4.821 5.933-3.497-2.623-3.83 3.83-12.172-3.58-7.75 3.875 15.777 12.62-8.034 9.888-4.564-5.477-4.458 1.486.946 5.679h-5.355l-2.925 4.388 10.697 5.349 5.34 11.748 4.498-2.999-.945-7.083 14.367-10.775 10.259 22.228 6.322-7.586-4.274-20.658 5.904-5.904c1.064-1.063.855-3.052-.395-4.717 2.415-2.909 10.687-13.148 10.687-16.991zm-29.906 7.32 2.048 1.536-.943 1.16-2.937-.864zm-20.249 1.875 4.25-2.125 15.736 4.628-6.641 8.173zm-2.718 19.484 1.542-.514 3.941 4.729-.086.106h-4.677zm-6.667 7.933 1.075-1.612h11.051l1 1-4.783 4.783zm13.964 14.904-4.227-9.299 4.079-4.079 1.65 12.376zm2.402-9.386-.88-6.598-1.602-1.602 25.429-31.297c1.096-1.34 2.559-2.023 4.563-2.691l3.099-1.033c.367.641.563 2.127.565 3.108l.04 2.363c.009.547.455.983 1 .983h.017c.552-.009.993-.464.983-1.017l-.04-2.346c0-.449-.048-2.337-.665-3.724l3.981-1.327c1.363-.456 2.687-.358 3.542.257.758.546 1.142 1.486 1.142 2.794 0 2.516-5.966 10.581-10.13 15.597-1.634-1.16-3.534-1.345-4.521-.356l-14.574 12.492 1.864 4.038zm29.097 5.6-3.678 4.414-11.02-23.877 9.063-7.771zm-2.605-22.462-1.295-6.259.797-.683c.257.819.747 1.655 1.473 2.382.669.669 1.432 1.124 2.189 1.396zm4.141-4.932c-.591-.142-1.23-.521-1.752-1.043s-.902-1.161-1.043-1.752c-.112-.468-.035-.755.043-.834.242-.242 1.47-.116 2.586 1 .522.522.902 1.161 1.043 1.752.112.468.035.755-.043.834-.079.078-.366.154-.834.043z" />
              <circle cx="49" cy="15" r="1" />
              <circle cx="46" cy="18" r="1" />
              <circle cx="43" cy="21" r="1" />
            </g>
          </svg>
        </div>
      </div>
      <div
        css={css`
          text-align: center;
          overflow: hidden;
          @media (max-width: 767px) {
            display: none;
          }
        `}
      >
        <Japan />
      </div>
    </>
  )
}

export default IndexPage

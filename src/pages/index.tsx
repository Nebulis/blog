import React, { useEffect, useRef, useState } from "react"
import SEO from "../components/layout/seo"
import { PageDevelopmentMark } from "../components/layout/layout"
import { useWindowSize } from "../components/hooks/useWindowSize"
import { Maintenance } from "../components/layout/maintenance"
import { Header } from "../components/layout/header"
import { Menu, MobileMenu } from "../components/layout/menu"
import { ScrollToTop } from "../components/core/scrollTo"
import { MainHimejiCastleImage } from "../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { css } from "@emotion/core"
import { MainArashiyamaImage } from "../components/images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { FaChevronCircleLeft, FaChevronCircleRight, FaMapMarkerAlt } from "react-icons/all"
import { ApplicationLink } from "../components/core/links/link"
import { Country, World } from "../components/layout/world"
import styled from "@emotion/styled"
import { MouseToolTip } from "../components/core/tooltip"
import { navigate } from "gatsby"
import { getLinkUrl } from "../components/core/links/links"

const carousellStyle = css`
  position: relative;
  .gatsby-image-wrapper {
    margin-top: 0;
    margin-bottom: 0;
    max-height: 700px;
  }
  .hidden .gatsby-image-wrapper {
    height: 0;
    opacity: 0;
  }
  .visible .gatsby-image-wrapper {
    opacity: 1;
    transition: opacity 0.8s linear;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.25;
    z-index: 5;
    pointer-events: none;
  }
  .overlay-border {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    display: block;
    border: 1px solid #fff;
    z-index: 5;
    pointer-events: none;
  }
  .left {
    position: absolute;
    left: 10px;
    top: calc(50% - 20px);
    z-index: 10;
  }
  .right {
    position: absolute;
    right: 10px;
    top: calc(50% - 20px);
    z-index: 10;
  }
  .left svg,
  .right svg {
    color: black;
    width: 40px;
    height: 40px;
    cursor: pointer;
    stroke: black;
    stroke-width: 20;
    opacity: 0.95;
    transition: all 0.2s linear;
  }
  .left:focus,
  svg:focus,
  .right:focus {
    outline: none;
  }
  .right,
  .left {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: whitesmoke;
  }
  @media (hover: hover) {
    .left:hover,
    .right:hover {
      background-color: black;
      transition: all 0.2s linear;
    }
    .left:hover svg,
    .right:hover svg {
      color: whitesmoke;
      stroke: whitesmoke;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: 576px) {
    .left svg,
    .right svg {
      width: 30px;
      height: 30px;
    }
    .right,
    .left {
      width: 30px;
      height: 30px;
      border-radius: 30px;
    }
  }
`
const Carousell: React.FunctionComponent = ({ children }) => {
  if (!Array.isArray(children)) throw new Error("nope")
  const [currentElement, setCurrentElement] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  // must reset on resize
  const heightStyle = height
    ? css`
        .visible .gatsby-image-wrapper {
          height: ${height}px;
        }
      `
    : css``
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentElement === children.length - 1) {
        setCurrentElement(0)
      } else {
        setCurrentElement(currentElement + 1)
      }
    }, 13000)
    return () => {
      clearInterval(interval)
    }
  }, [children.length, currentElement])
  useEffect(() => {
    if (ref.current && height === 0) {
      setHeight(ref.current.getBoundingClientRect().height)
    }
  }, [height])
  useEffect(() => {
    const eventListener = () => {
      setHeight(0)
    }
    window.addEventListener("resize", eventListener)
    return () => {
      window.removeEventListener("resize", eventListener)
    }
  }, [])
  return (
    <div css={[carousellStyle, heightStyle]} ref={ref}>
      <div className="left">
        <FaChevronCircleLeft
          onClick={() => {
            if (currentElement === 0) {
              setCurrentElement(children.length - 1)
            } else {
              setCurrentElement(currentElement - 1)
            }
          }}
        />
      </div>
      <div className="right">
        <FaChevronCircleRight
          onClick={() => {
            if (currentElement === children.length - 1) {
              setCurrentElement(0)
            } else {
              setCurrentElement(currentElement + 1)
            }
          }}
        />
      </div>
      <div className="overlay" />
      <span className="overlay-border" />
      <div>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `${currentElement === index ? "visible" : "hidden"}`,
              hide: currentElement !== index,
            })
          }
        })}
      </div>
    </div>
  )
}

const imageWithMarkerStyle = css`
  display: block;
  .country-marker {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: right;
    z-index: 100;
    color: white;
    font-size: 1.2rem;
    padding-right: 10px;
  }
  .country-marker svg {
    margin-right: 5px;
    width: 15px;
    height: 15px;
  }
  .country-marker.hidden {
    display: none;
  }
  &.link.hidden .development-mark {
    // hide development mark
    display: none;
  }
`
const ImageWithMarker: React.FunctionComponent<{ country: string; className?: string; hide?: boolean; to: string }> = ({
  country,
  hide,
  children,
  className = "",
  to,
}) => {
  return (
    <ApplicationLink to={to} css={imageWithMarkerStyle} className={`${className} link ${hide ? "hidden" : ""}`}>
      <div>
        {children}
        <div className={`country-marker ${hide ? "hidden" : ""}`}>
          <FaMapMarkerAlt />
          {country}
        </div>
      </div>
    </ApplicationLink>
  )
}

const StyledWorld = styled(World)`
  stroke-line-join: round;
  stroke: white;
  fill: #d4eadc;

  .visited {
    fill: #92d6c1;
    cursor: pointer;
  }
`
const visitedCountries = [
  "japan",
  "france",
  "australia",
  "spain",
  "vietnam",
  "singapour",
  "indonesia",
  "cambodia",
  "malaysia",
  "philippines",
  "india",
  "sri lanka",
  "taiwan",
  "senegal",
  "united states",
]
const transform = (country: Country): Country => {
  if (visitedCountries.includes(country["data-name"].toLowerCase())) {
    return {
      ...country,
      className: "visited",
    }
  }
  return country
}
const TooltipContent = styled.span`
  background: hsla(0, 0%, 0%, 0.75);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
`
const IndexPage = () => {
  const { windowWidth } = useWindowSize()
  const [country, setCountry] = useState<Country>()
  return (
    <>
      <SEO title="main" />
      <Maintenance>
        {typeof window !== `undefined` ? (
          <>
            <PageDevelopmentMark />
            <Header />
            {windowWidth <= 576 ? <MobileMenu /> : <Menu />}
            <ScrollToTop />
            <Carousell>
              <ImageWithMarker country="Japon" to="japan">
                <MainHimejiCastleImage />
              </ImageWithMarker>
              <ImageWithMarker country="Cambodia" to="himeji">
                <MainArashiyamaImage />
              </ImageWithMarker>
            </Carousell>
            <StyledWorld
              transform={transform}
              onMouseEnter={country => {
                if (visitedCountries.includes(country["data-name"].toLowerCase())) {
                  setCountry(country)
                }
              }}
              onMouseLeave={() => setCountry(undefined)}
              onClick={country => {
                try {
                  navigate(getLinkUrl(country["data-name"].toLowerCase()))
                } catch (e) {
                  console.log(`Link doesnt exist for ${country["data-name"].toLowerCase()}`)
                }
              }}
            />
            <MouseToolTip>{country ? <TooltipContent>{country["data-name"]}</TooltipContent> : null}</MouseToolTip>
          </>
        ) : null}
      </Maintenance>
    </>
  )
}

export default IndexPage

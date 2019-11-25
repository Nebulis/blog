import React, { ReactElement, useState } from "react"
import SEO from "../components/layout/seo"
import { PageDevelopmentMark } from "../components/layout/layout"
import { useWindowSize } from "../components/hooks/useWindowSize"
import { Maintenance } from "../components/layout/maintenance"
import { Header } from "../components/layout/header"
import { MobileMenu } from "../components/layout/menu"
import { ScrollToTop } from "../components/core/scrollTo"
import { MainHimejiCastleImage } from "../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainArashiyamaImage } from "../components/images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { ApplicationLink } from "../components/core/links/link"
import { Country, CountryPath, World } from "../components/layout/world"
import styled from "@emotion/styled"
import { MouseToolTip } from "../components/core/tooltip"
import { navigate } from "gatsby"
import { getLinkUrl, getThreeMoreRecentArticles } from "../components/core/links/links"
import { UsImage } from "../components/images/usImage"
import { ImageAsMedallion, ImageWithMarker } from "../components/images/layout"
import { Carousell } from "../components/core/carousell"

const StyledWorld = styled(World)`
  stroke-line-join: round;
  stroke: white;
  fill: #d4eadc;

  .visited {
    fill: #92d6c1;
    cursor: pointer;
  }
  .visited.dot {
    fill: #318269;
  }
`
const visitedCountries = [
  "japan",
  "france",
  "australia",
  "spain",
  "vietnam",
  "singapore",
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
const transform = (country: Country): ReactElement => {
  if (visitedCountries.includes(country["data-name"].toLowerCase())) {
    if (country["data-name"].toLowerCase() === "singapore") {
      return <circle cx="1385" cy="565" r="6" className="visited dot" />
    }
    return <CountryPath country={country} className="visited" />
  }
  return <CountryPath country={country} />
}
const TooltipContent = styled.span`
  background: hsla(0, 0%, 0%, 0.75);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
`

const MapContainer = styled.div`
  max-width: 1140px;
  margin: auto;
`

const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
            {windowWidth <= 576 ? <MobileMenu /> : null}
            <ScrollToTop />
            <Carousell>
              <ImageWithMarker country="Japon" to="japan">
                <MainHimejiCastleImage />
              </ImageWithMarker>
              <ImageWithMarker country="Cambodia" to="himeji">
                <MainArashiyamaImage />
              </ImageWithMarker>
            </Carousell>
            <h3 className="tc mt5 mb3">
              Bienvenue sur notre blog, découvrez ici nos voyages, nos astuces, nos coups de coeurs et nos ressentis.
            </h3>
            <div className="tc">
              <div>
                <ApplicationLink to="who-are-we">En savoir plus sur nous ...</ApplicationLink>
              </div>

              <ImageAsMedallion className="center">
                <ApplicationLink to="who-are-we">
                  <UsImage />
                </ApplicationLink>
              </ImageAsMedallion>
            </div>
            <h4 className="tc mt5 mb0">Nos voyages</h4>
            <MapContainer>
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
            </MapContainer>
            <h4 className="tc mt0 mb4">Nos derniers articles</h4>
            <ArticlesContainer>
              {getThreeMoreRecentArticles().map((Element, index) => (
                <Element key={index} />
              ))}
            </ArticlesContainer>
            <ApplicationLink to="articles">Tous nos articles</ApplicationLink>
            <MouseToolTip>{country ? <TooltipContent>{country["data-name"]}</TooltipContent> : null}</MouseToolTip>
          </>
        ) : null}
      </Maintenance>
    </>
  )
}

export default IndexPage

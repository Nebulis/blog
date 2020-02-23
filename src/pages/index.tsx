import React, { FunctionComponent, ReactElement, useContext, useState } from "react"
import SEO from "../components/layout/seo"
import { PageDevelopmentMark } from "../components/layout/layout"
import { useWindowSize } from "../components/hooks/useWindowSize"
import { Maintenance } from "../components/layout/maintenance"
import { Header } from "../components/layout/header"
import { MobileMenu } from "../components/layout/menu"
import { ScrollToTop } from "../components/core/scrollTo"
import { MainHimejiCastleImage } from "../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainArashiyamaImage } from "../components/images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { Country, CountryPath, World } from "../components/layout/world"
import styled from "@emotion/styled"
import { MouseToolTip } from "../components/core/tooltipPortal"
import { navigate } from "gatsby"
import { continentLinks, getLink, getLinkUrl, getThreeMoreRecentArticles } from "../components/core/links/links"
import { Carousel, CarouselImage } from "../components/core/carousel"
import { css } from "@emotion/core"
import { Divider } from "../components/core/divider"
import { Monument } from "../components/icon/monument"
import { Hiking } from "../components/icon/hiking"
import { CityIcon } from "../components/icon/city"
import { Photo } from "../components/icon/photo"
import { ApplicationLink, ExternalLink } from "../components/core/links/link"
import { primaryColor, primaryDarkColor, primaryLightColor } from "../components/core/variables"
import { ApplicationContext } from "../components/application"
import { Input } from "../components/core/input"
import { LolButton } from "../components/core/button"

const StyledWorld = styled(World)`
  stroke-line-join: round;
  stroke: white;
  fill: ${primaryLightColor};
  .visited {
    fill: ${primaryColor};
  }
  .visited.articles {
    fill: ${primaryDarkColor};
    cursor: pointer;
  }
`
const visitedCountries = ["jp", "fr", "au", "es", "vn", "sg", "id", "kh", "my", "ph", "in", "lk", "tw", "sn", "us"]
const countriesWithArticles = ["jp"]
const transform = (country: Country): ReactElement => {
  if (visitedCountries.includes(country.id.toLowerCase())) {
    if (country.id.toLowerCase() === "singapore") {
      return <circle cx="1385" cy="565" r="6" className="visited" />
    } else if (countriesWithArticles.includes(country.id.toLowerCase())) {
      return <CountryPath country={country} className="visited articles" />
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
`
const TravelsContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 230px;
  min-width: 230px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  > div {
    text-align: center;
    width: 200px;
  }
  div > * {
    width: 100%;
  }
  div:nth-of-type(odd) {
    align-self: flex-start;
  }
  div:nth-of-type(even) {
    align-self: flex-end;
  }
`

const maxWidth = 1425
const ArticlesContainer = styled.div`
  max-width: ${maxWidth}px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .quote-container {
    display: none;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`
const ButtonLink = styled(ApplicationLink)`
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid ${primaryColor};
  font-weight: bold;
  font-size: 0.9rem;
  color: ${primaryColor};
  transition: all 0.2s linear;
  &:visited {
    color: ${primaryColor};
  }
  &.active:hover {
    transition: all 0.2s linear;
    background-color: ${primaryColor};
    color: white;
  }
`
const InstagramContainer = styled.div`
  .hashtag {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: monospace;
  }
  .instagram {
    display: flex;
    a {
      overflow: hidden;
      height: calc(100vw / 10);
      width: calc(100vw / 10);
    }
    img {
      transition: transform 0.3s ease;
    }

    a:hover {
      border: 3px solid #d4eadc;
    }

    a:hover img {
      transform: scale(1.2);
    }
  }
`
const ContemplateContainer = styled.div`
  max-width: ${maxWidth}px;
  margin-top: 5.5rem;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 3rem;
  text-align: center;
  svg {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    fill: ${primaryColor};
  }
  .title {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${primaryDarkColor};
    margin-bottom: 0.8rem;
  }
  .content {
    font-size: 0.9rem;
    line-height: 1.3rem;
    font-family: monospace;
  }
`

const HomeSection: FunctionComponent = ({ children }) => (
  <h2
    className="tc ttu mb4"
    css={css`
      letter-spacing: 5px;
      font-family: auto;
    `}
  >
    {children}
  </h2>
)
const HomeSubSection: FunctionComponent = ({ children }) => (
  <h4
    className="tl normal center pb2 mb0"
    css={css`
      padding-left: 200px;
      max-width: calc(${maxWidth}px - 2rem);
      border-bottom: 1px solid black;
      font-family: "Freestyle Script";
      font-size: 1.8rem;
    `}
  >
    {children}
  </h4>
)
/* margin-top is bigger than margin-bottom because it looks further due to text disposition */
const HomeDivider = styled(Divider)`
  margin-top: 1.85rem;
`

const Footer = styled.footer`
  color: white;
  background-color: black;
  a {
    color: ${primaryColor};
  }
  & > div {
    justify-items: center;
  }
`

const IndexPage = () => {
  const { development } = useContext(ApplicationContext)
  const { windowWidth, windowHeight } = useWindowSize()
  const [country, setCountry] = useState<Country>()
  const articleStyle = css`
    @media (min-width: 993px) {
      .gatsby-image-wrapper {
        height: ${windowHeight / 2.9}px;
      }
    }
  `
  return (
    <>
      <SEO title="main" />
      <Maintenance>
        {typeof window !== `undefined` ? (
          <div>
            <PageDevelopmentMark />
            <Header />
            {windowWidth <= 576 ? <MobileMenu /> : null}
            <ScrollToTop />
            <Carousel>
              <CarouselImage country="Japon" to="japan">
                <MainHimejiCastleImage />
              </CarouselImage>
              <CarouselImage country="Japon" to="japan">
                <MainArashiyamaImage />
              </CarouselImage>
            </Carousel>
            <HomeDivider />
            <HomeSection>Explorer</HomeSection>
            <HomeSubSection>Nos voyages à travers le monde ...</HomeSubSection>
            <TravelsContainer>
              <MapContainer>
                <StyledWorld
                  style={{ height: windowHeight / 1.5 + "px" }}
                  transform={transform}
                  onMouseEnter={country => {
                    if (visitedCountries.includes(country.id.toLowerCase())) {
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
              <ButtonMapContainer>
                {continentLinks
                  .sort((obj1: { label: string }, obj2: { label: string }) => obj1.label.localeCompare(obj2.label))
                  .map(continent => (
                    <div key={continent.id}>
                      <ButtonLink
                        to={continent.id}
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        className={`${getLink(continent.id)!.published || development ? "active" : "inactive"}`}
                      >
                        {continent.label}
                      </ButtonLink>
                    </div>
                  ))}
              </ButtonMapContainer>
            </TravelsContainer>
            <Divider />
            <div>
              <HomeSection>Découvrir</HomeSection>
              <HomeSubSection>Nos dernières aventures ...</HomeSubSection>
              <ArticlesContainer css={articleStyle}>
                {getThreeMoreRecentArticles().map((Element, index) => (
                  <Element key={index} />
                ))}
              </ArticlesContainer>
              <div className="tc mt3">
                <ButtonLink to="articles">Tous nos articles</ButtonLink>
              </div>
            </div>
            <HomeDivider />
            <HomeSection>Contempler</HomeSection>
            <HomeSubSection>Les merveilles de la planète ...</HomeSubSection>
            <ContemplateContainer>
              <div>
                <Monument />
                <div className="title">Monument</div>
                <div className="content">
                  Visite de Pyramides, Temples, Pagodes ... A la poursuite de l&apos;héritage des différentes
                  civilisations
                </div>
              </div>
              <div>
                <Hiking />
                <div className="title">Nature</div>
                <div className="content">
                  Trek, randonnées ou farniente, dans la montagne, dans la jungle comme sur la plage, découvre les
                  paysages que la nature nous offre
                </div>
              </div>
              <div>
                <CityIcon />
                <div className="title">Ville</div>
                <div className="content">
                  Promènes-toi dans les rues et les quartiers atypiques, visite les endroits animés et imprègne toi de
                  la culture des habitants
                </div>
              </div>
              <div>
                <Photo />
                <div className="title">Animaux</div>
                <div className="content">
                  Dans leur habitat ou dans des réserves protégées, observe les animaux, apprends à les connaitre,
                  comment les protéger et conserver leur milieu naturel.
                </div>
              </div>
            </ContemplateContainer>
            {development && (
              <>
                <HomeDivider />
                <HomeSection>Partager</HomeSection>
                <HomeSubSection>Quelque chose ...</HomeSubSection>
                <InstagramContainer>
                  <div className="hashtag">#Some</div>
                  <div className="instagram">
                    {Array(10)
                      .fill(0)
                      .map((_, index) => (
                        <ExternalLink key={index} href="https://www.instagram.com/p/B31ltcFgggb">
                          <img src="https://scontent-sin2-2.cdninstagram.com/v/t51.2885-15/e35/s320x320/72416702_462115874391380_3272355710023571102_n.jpg?_nc_ht=scontent-sin2-2.cdninstagram.com&_nc_cat=108&oh=af51bd1ee8b5982a81fc8e7317832714&oe=5E748522" />
                        </ExternalLink>
                      ))}
                  </div>
                </InstagramContainer>
              </>
            )}
            <Footer className="flex justify-around pa4">
              <div className="flex items-center f6">© 2020 Magic of Travels</div>
              {development && (
                <div>
                  <div className="tc">NEWSLETTER</div>
                  <Input placeholder="Adresse Email" hideLabel className="inline-flex" />
                  <div
                    className="inline-flex"
                    css={css`
                      margin-top: 0.6rem;
                      margin-bottom: 0.6rem;
                    `}
                  >
                    <LolButton>S&apos;inscrire</LolButton>
                  </div>
                </div>
              )}
              <div className="flex items-center f6">
                Made with ❤️ by&nbsp;
                <a href="https://github.com/nebulis" target="_blank" rel="noopener noreferrer">
                  Nebulis
                </a>
              </div>
            </Footer>
            <MouseToolTip>{country ? <TooltipContent>{country["data-name"]}</TooltipContent> : null}</MouseToolTip>
          </div>
        ) : null}
      </Maintenance>
    </>
  )
}

export default IndexPage

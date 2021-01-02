import React, { ReactElement, useContext, useState } from "react"
import { ArticlesContainer, HomeBlogLayout } from "../components/layout/layout"
import { useWindowSize } from "../components/hooks/useWindowSize"
import { Country, CountryPath, World } from "../components/layout/world"
import styled from "@emotion/styled"
import { MouseToolTip } from "../components/core/tooltipPortal"
import { navigate, PageProps } from "gatsby"
import {
  continentLinks,
  getLink,
  getLinkUrl,
  getMostRecentArticles,
  sortByLabel,
} from "../components/core/links/links.configuration"
import { Carousel, CarouselImage } from "../components/core/carousel"
import { Divider } from "../components/core/divider"
import { Monument } from "../components/icon/monument"
import { Hiking } from "../components/icon/hiking"
import { CityIcon } from "../components/icon/city"
import { Photo } from "../components/icon/photo"
import { ButtonLink, ExternalLink } from "../components/core/links/link"
import {
  largeStart,
  maxWidth,
  maxWidthExtraLargeContainer,
  mediumEnd,
  mobileEnd,
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
  smallEnd,
} from "../components/core/variables"
import { ApplicationContext } from "../components/application"
import { MenuContext } from "../components/layout/menu.context"
import SEO from "../components/layout/seo"
import { HomeSection, HomeSubSection } from "../components/core/section"
import { useCustomTranslation } from "../i18n"
import i18n from "i18next"
import indexFr from "../locales/fr/index.json"
import indexEn from "../locales/en/index.json"
import { CarouselVietnam2 } from "../components/images/asia/vietnam/carousel-2"
import { CarouselVietnam } from "../components/images/asia/vietnam/carousel"
import { CarouselPhilippines } from "../components/images/asia/philippines/carousel"
import { CarouselPhilippines2 } from "../components/images/asia/philippines/carousel-2"
import { isPublished } from "../components/core/links/links.utils"

const namespace = "index"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)

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
  "sri-lanka",
  "taiwan",
  "thailand",
  "senegal",
  "united-states",
]
const transform = (countriesWithArticles: string[]) => (country: Country): ReactElement => {
  if (visitedCountries.includes(country.id)) {
    if (country.id === "singapore") {
      return <circle cx="1385" cy="565" r="6" className="visited" />
    } else if (countriesWithArticles.includes(country.id)) {
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
  max-width: ${maxWidthExtraLargeContainer}px;
  width: 100%;
`
const TravelsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
  @media (max-width: ${mediumEnd}) {
    flex-direction: column;
    margin-right: 0;
  }
`
const ButtonMapContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  div > * {
    width: 100%;
  }
  > div {
    text-align: center;
  }

  @media (min-width: ${largeStart}) {
    flex-direction: column;
    justify-content: space-around;
    max-width: 230px;
    margin-top: 1rem;
    > div {
      width: 200px;
    }
    div:nth-of-type(odd) {
      align-self: flex-start;
    }
    div:nth-of-type(even) {
      align-self: flex-end;
    }
  }

  @media (max-width: ${mediumEnd}) {
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    > div {
      margin-top: 0.5rem;
      width: calc(100vw / 3 - 2rem);
    }
  }
  @media (max-width: ${mobileEnd}) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    > div {
      margin-top: 0.5rem;
      width: calc(100vw / 2 - 2rem);
    }
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

  @media (max-width: ${mediumEnd}) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;
    grid-gap: 0;
    grid-row-gap: 2rem;
    .content {
      display: none;
    }
  }

  @media (max-width: ${smallEnd}) amd (orientation: portrait) {
    grid-template-columns: auto auto;
  }
  @media (max-width: ${mobileEnd}) {
    svg {
      width: 80px;
      height: 80px;
    }
  }
`
/* margin-top is bigger than margin-bottom because it looks further due to text disposition */
const HomeDivider = styled(Divider)`
  margin-top: 1.85rem;
`

const shuffleArray = (array: Array<any>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
interface CarouselElementType {
  component: React.ComponentType
  to: string
  country: string
}

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { isMobileView } = useContext(MenuContext)
  const { windowHeight } = useWindowSize()
  const [country, setCountry] = useState<Country>()
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [carouselElement, setCarouselElement] = useState<CarouselElementType[]>(() => {
    const tmp: CarouselElementType[] = [
      {
        to: "vietnam",
        country: t("common:country.vietnam"),
        component: CarouselVietnam,
      },
      {
        to: "vietnam",
        country: t("common:country.vietnam"),
        component: CarouselVietnam2,
      },
      {
        to: "philippines",
        country: t("common:country.philippines"),
        component: CarouselPhilippines,
      },
      {
        to: "philippines",
        country: t("common:country.philippines"),
        component: CarouselPhilippines2,
      },
    ].filter(({ to }) => {
      return development || isPublished(getLink(to))
    })
    return shuffleArray(tmp)
  })

  const countriesWithArticles = ["philippines", "vietnam"].filter((country) => {
    return development || isPublished(getLink(country))
  })
  return (
    <>
      <SEO location={location} />
      <HomeBlogLayout page="home" className="">
        <Carousel>
          {carouselElement.map(({ country, component: Component, to }, index) => {
            return (
              <CarouselImage to={to} country={country} key={index}>
                <Component />
              </CarouselImage>
            )
          })}
        </Carousel>
        <HomeDivider />
        <HomeSection>{t("index:explore.title")}</HomeSection>
        <HomeSubSection>{t("explore.subtitle")}</HomeSubSection>
        <TravelsContainer>
          <MapContainer>
            <StyledWorld
              style={{ maxHeight: windowHeight / 1.5 + "px" }}
              transform={transform(countriesWithArticles)}
              onMouseEnter={(country) => {
                if (isMobileView) return
                if (visitedCountries.includes(country.id)) {
                  setCountry(country)
                }
              }}
              onMouseLeave={() => setCountry(undefined)}
              onClick={(country) => {
                try {
                  navigate(getLinkUrl(country.id))
                } catch (e) {
                  console.log(`Link doesnt exist for ${country.id}`)
                }
              }}
            />
          </MapContainer>
          <ButtonMapContainer>
            {continentLinks.sort(sortByLabel(i18n.languageCode)).map((continent) => (
              <div key={continent.id}>
                <ButtonLink
                  to={continent.id}
                  className={`${getLink(continent.id)?.published || development ? "" : "inactive"}`}
                >
                  {continent.label[i18n.languageCode]}
                </ButtonLink>
              </div>
            ))}
          </ButtonMapContainer>
        </TravelsContainer>
        <Divider />
        <div>
          <HomeSection>{t("discover.title")}</HomeSection>
          <HomeSubSection>{t("discover.subtitle")}</HomeSubSection>
          <ArticlesContainer>
            {getMostRecentArticles().map((Element, index) => (
              <Element key={index} fluidObject={{ aspectRatio: 4 / 3 }} />
            ))}
          </ArticlesContainer>
          {displayAllArticles && (
            <div className="tc mt3">
              <ButtonLink to="articles">{t("common:allArticles")}</ButtonLink>
            </div>
          )}
        </div>
        <HomeDivider />
        <HomeSection>{t("contemplate.title")}</HomeSection>
        <HomeSubSection>{t("contemplate.subtitle")}</HomeSubSection>
        <ContemplateContainer>
          <div className="contemplate-element">
            <Monument />
            <div className="title">{t("contemplate.monuments.title")}</div>
            <div className="content">{t("contemplate.monuments.content")}</div>
          </div>
          <div className="contemplate-element">
            <Hiking />
            <div className="title">{t("contemplate.nature.title")}</div>
            <div className="content">{t("contemplate.nature.content")}</div>
          </div>
          <div className="contemplate-element">
            <CityIcon />
            <div className="title">{t("contemplate.city.title")}</div>
            <div className="content">{t("contemplate.city.content")}</div>
          </div>
          <div className="contemplate-element">
            <Photo />
            <div className="title">{t("contemplate.animals.title")}</div>
            <div className="content">{t("contemplate.animals.content")}</div>
          </div>
        </ContemplateContainer>
        {false && (
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
        <MouseToolTip>
          {country ? <TooltipContent>{t(`common:country.${country.id}`)}</TooltipContent> : null}
        </MouseToolTip>
      </HomeBlogLayout>
    </>
  )
}

export default IndexPage

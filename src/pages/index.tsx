import React, { ReactElement, useContext, useState } from "react"
import { ArticlesContainer } from "../components/layout/layout"
import { useWindowSize } from "../components/hooks/useWindowSize"
import { Country, CountryPath, World } from "../components/layout/world"
import styled from "@emotion/styled"
import { MouseToolTip } from "../components/core/tooltipPortal"
import { PageProps } from "gatsby"
import { getArticles, getLink, isLinkPublished, sortByLabel } from "../components/core/links/links.utils"
import { Carousel, CarouselImage } from "../components/core/carousel"
import { Divider } from "../components/core/divider"
import { Monument } from "../components/icon/monument"
import { Hiking } from "../components/icon/hiking"
import { CityIcon } from "../components/icon/city"
import { Photo } from "../components/icon/photo"
import { ApplicationLink, ButtonLink, ExternalLink, PrimaryApplicationLink } from "../components/core/links/link"
import {
  extraLargeStart,
  largeStart,
  maxWidth,
  maxWidthExtraLargeContainer,
  mediumEnd,
  mobileEnd,
  primaryColor,
  primaryDarkColor,
  primaryLightColor,
} from "../components/core/variables"
import { ApplicationContext } from "../components/application"
import { MenuContext } from "../components/layout/menu.context"
import SEO from "../components/layout/seo"
import { HomeSection, HomeSubSection, SectionContent } from "../components/core/section"
import { useCustomTranslation } from "../i18n"
import i18n from "i18next"
import indexFr from "../locales/fr/index.json"
import indexEn from "../locales/en/index.json"
import { continentLinks } from "../components/core/links/links.configuration"
import { HomeBlogLayout } from "../components/layout/main-layout"
import { CarouselImageQuery } from "../components/images/carousel"
import { PageQuote, Quote } from "../components/core/quote"

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
// eslint-disable-next-line react/display-name
const transform = (countriesWithArticles: string[]) => (country: Country): ReactElement => {
  if (visitedCountries.includes(country.id)) {
    if (country.id === "singapore") {
      return <circle cx="1385" cy="565" r="6" className="visited" />
    } else if (countriesWithArticles.includes(country.id)) {
      return (
        <ApplicationLink to={country.id}>
          <CountryPath country={country} className="visited articles" />
        </ApplicationLink>
      )
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
  a,
  & > span {
    width: 100%;
    text-align: center;
  }

  @media (min-width: ${largeStart}) {
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 230px;
    a,
    & > span {
      width: 200px;
    }
  }

  @media (max-width: ${mediumEnd}) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    a,
    & > span {
      margin-top: 0.5rem;
      width: calc(100vw / 3 - 2rem);
    }
  }
  @media (max-width: ${mobileEnd}) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    a,
    & > span {
      height: 40px; //fix the height in smaller device so that if the text is too big, the height of the link does not grow
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: space-evenly;
    grid-gap: 0;
    grid-row-gap: 2rem;
    .contemplate-element {
      display: flex;
      .title-element {
        flex-basis: 30%;
      }
      .content {
        flex-basis: 70%;
      }
      .content {
        display: flex;
        justify-items: center;
        align-items: center;
        padding-right: 1rem;
        padding-left: 1rem;
      }
    }
    .contemplate-element:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: ${mobileEnd}) {
    svg {
      width: 80px;
      height: 80px;
    }
  }
`

const NewArticleContainer = styled.div`
  @media (max-width: ${mediumEnd}) {
    flex-direction: column;
    .new-article-section-title-large-screen {
      display: none;
    }
    .gatsby-image-wrapper {
      max-width: 600px;
    }
    .new-article-card-container {
      margin-bottom: 1.3rem;
      display: flex;
      justify-content: center;
    }
  }
  @media (min-width: ${largeStart}) {
    height: 60vh;
    max-height: 60vh;
    .new-article-section-title-small-screen {
      display: none;
    }
    .new-article-card-container {
      flex-basis: 50%;
    }
    .new-article-content-container {
      padding-left: 1.5rem;
      flex-basis: 50%;
    }
  }
  @media (min-width: ${extraLargeStart}) {
    .new-article-card-container {
      flex-basis: 60%;
    }
    .new-article-content-container {
      flex-basis: 40%;
    }
  }
  background-color: rgb(212, 234, 220, 0.4); //primary light color in rgb
  display: flex;
  padding: 1.5rem;
  .new-article-card-container {
    display: flex;
  }
  .new-article-content-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .new-article-title {
    font-size: 1.3rem;
    letter-spacing: 3px;
    font-family: auto;
    margin-bottom: 1.45rem;
    font-weight: bold;
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
  component?: React.ComponentType
  image?: string
  to: string
  country: string
}

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { isMobileView } = useContext(MenuContext)
  const { windowHeight } = useWindowSize()
  const [country, setCountry] = useState<Country>()
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const lastArticle = getArticles({ development, limit: 1, tags: ["vietnam"] })[0]
  const Card = lastArticle.card
  const [carouselElement] = useState<CarouselElementType[]>(() => {
    const tmp: CarouselElementType[] = [
      {
        to: "vietnam",
        country: t("common:country.vietnam.title"),
        image: "vietnam1",
      },
      {
        to: "vietnam",
        country: t("common:country.vietnam.title"),
        image: "vietnam2",
      },
      {
        to: "philippines",
        country: t("common:country.philippines.title"),
        image: "philippines1",
      },
      {
        to: "philippines",
        country: t("common:country.philippines.title"),
        image: "philippines2",
      },
    ].filter(({ to }) => {
      return development || isLinkPublished(to)
    })
    return shuffleArray(tmp)
  })

  const countriesWithArticles = ["philippines", "vietnam"].filter((country) => {
    return development || isLinkPublished(country)
  })
  const description = `${t("index:welcome.section1")} ${t("index:welcome.section2")} ${t("index:welcome.section3")}`
  return (
    <>
      <SEO location={location} socialNetworkDescription={description} />
      <HomeBlogLayout page="home" className="" location={location}>
        <Carousel>
          {carouselElement.map(({ country, component: Component, to, image }, index) => {
            return (
              <CarouselImage to={to} country={country} key={index}>
                {image ? <CarouselImageQuery image={image} /> : Component ? <Component /> : null}
              </CarouselImage>
            )
          })}
        </Carousel>
        <HomeDivider />
        <HomeSection>{t("index:welcome.title")}</HomeSection>
        <SectionContent>
          <PageQuote>{t("index:welcome.section1")}</PageQuote>
          <PageQuote position="none">{t("index:welcome.section2")}</PageQuote>
          <PageQuote position="none">{t("index:welcome.section3")}</PageQuote>
          <PageQuote position="none">
            <PrimaryApplicationLink className="b underline" to="who">
              {t("index:welcome.more")}
            </PrimaryApplicationLink>
          </PageQuote>
        </SectionContent>
        <HomeDivider />
        <NewArticleContainer>
          <div className="new-article-section-title-small-screen">
            <div>
              <HomeSection>{t("new-article.title")}</HomeSection>
            </div>
            <Divider />
          </div>
          <div className="new-article-card-container">{Card ? <Card card={{ imageOnly: true }} /> : null}</div>
          <div className="new-article-content-container">
            <div className="new-article-section-title-large-screen">
              <HomeSection>{t("new-article.title")}</HomeSection>
              <Divider />
            </div>
            <div>
              <div className="tc ttu mb3-l new-article-title">{lastArticle.label[i18n.languageCode]}</div>
              <Quote className="tc">{t(`new-article.${lastArticle.id}`)}</Quote>
              <HomeDivider />
            </div>
            <div className="b underline">
              <ApplicationLink to={lastArticle.id}>{t("common:show-more")}</ApplicationLink>
            </div>
          </div>
        </NewArticleContainer>
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
            />
          </MapContainer>
          <ButtonMapContainer>
            {continentLinks.sort(sortByLabel(i18n.languageCode)).map((continent) => (
              <ButtonLink
                key={continent.id}
                to={continent.id}
                className={`${getLink(continent.id)?.published || development ? "" : "inactive"}`}
              >
                {continent.label[i18n.languageCode]}
              </ButtonLink>
            ))}
          </ButtonMapContainer>
        </TravelsContainer>
        <Divider />
        <div>
          <HomeSection>{t("discover.title")}</HomeSection>
          <HomeSubSection>{t("discover.subtitle")}</HomeSubSection>
          <ArticlesContainer>
            {getArticles({
              development,
              kind: "highlight",
              limit: 3,
              filter: (cachedLink) => cachedLink.id !== lastArticle.id,
            }).map(({ card: Card }, index) =>
              Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
            )}
          </ArticlesContainer>
          <div className="tc mt3">
            <ButtonLink to="articles?kind=highlight">{t("discover.all-travelogue")}</ButtonLink>
          </div>
        </div>
        <HomeDivider />
        <HomeSection>{t("contemplate.title")}</HomeSection>
        <HomeSubSection>{t("contemplate.subtitle")}</HomeSubSection>
        <ContemplateContainer>
          <div className="contemplate-element">
            <div className="title-element">
              <Monument />
              <div className="title">{t("contemplate.monuments.title")}</div>
            </div>
            <div className="content">{t("contemplate.monuments.content")}</div>
          </div>
          <div className="contemplate-element">
            <div className="title-element">
              <Hiking />
              <div className="title">{t("contemplate.nature.title")}</div>
            </div>
            <div className="content">{t("contemplate.nature.content")}</div>
          </div>
          <div className="contemplate-element">
            <div className="title-element">
              <CityIcon />
              <div className="title">{t("contemplate.city.title")}</div>
            </div>
            <div className="content">{t("contemplate.city.content")}</div>
          </div>
          <div className="contemplate-element">
            <div className="title-element">
              <Photo />
              <div className="title">{t("contemplate.animals.title")}</div>
            </div>
            <div className="content">{t("contemplate.animals.content")}</div>
          </div>
        </ContemplateContainer>
        <HomeDivider />
        <div>
          <HomeSection>{t("share.title")}</HomeSection>
          <HomeSubSection>{t("share.subtitle")}</HomeSubSection>
          <ArticlesContainer>
            {getArticles({
              development,
              kind: "other",
              limit: 3,
              filter: (cachedLink) => cachedLink.id !== lastArticle.id,
            }).map(({ card: Card }, index) =>
              Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
            )}
          </ArticlesContainer>
          <div className="tc mt3">
            <ButtonLink to="articles?kind=other">{t("share.all-shares")}</ButtonLink>
          </div>
        </div>
        <HomeDivider />
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
          {country ? <TooltipContent>{t(`common:country.${country.id}.title`)}</TooltipContent> : null}
        </MouseToolTip>
      </HomeBlogLayout>
    </>
  )
}

export default IndexPage

import React, { useContext, useState } from "react"
import SEO from "../../../components/layout/seo"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { getArticles, getLinkLabel, isLinkPublished, sortByLabel } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import { JapanBlogLayout, JapanButtonLink, japanWeatherEntries } from "../../../components/core/japan/japan"
import {
  HomeSection,
  HomeSubSection,
  MainTitleSection,
  PointOfInterestSection,
  SectionContent,
  SubHomeSection,
  SubSubHomeSection,
} from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n-hook"
import { PageProps } from "gatsby"
import { Divider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import i18n from "i18next"
import indexFr from "../../../locales/fr/asia/malaysia/index.json"
import indexEn from "../../../locales/en/asia/malaysia/index.json"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { ApplicationLink } from "../../../components/core/links/link"
import { jsx } from "@emotion/react"
import { SharedJapanImages } from "../../../components/images/asia/japan/shared-japan-images"
import { JapanImageAsMedallion } from "../../../components/core/japan/japan.images"
import VietnamImage from "../../../images/asia/vietnam/home-vietnam.jpg"
import { WeatherForHomePage } from "../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import { Farniente, Monument, Scuba } from "../../../components/icon/monument"
import { CityIcon } from "../../../components/icon/city"
import { Hiking } from "../../../components/icon/hiking"
import { malaysiaLinks } from "../../../components/core/asia/malaysia/malaysia.links"
import { Photo } from "../../../components/icon/photo"

const namespace = "asia/malaysia/index"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const country = t("common:country.malaysia.title")
  const articles = getArticles({ kind: "other", tags: ["malaysia"], development })
  const cities = development ? malaysiaLinks.cities : malaysiaLinks.cities.filter(isLinkPublished)
  return (
    <>
      <SEO
        title={country}
        location={location}
        image={VietnamImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
      />
      <JapanBlogLayout page="japan" location={location}>
        <MainTitleSection>
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;{country}&nbsp;
          <img src={cherryBlossom} alt="cherry blossom" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
        </SectionContent>
        <Divider />
        <SubSubHomeSection>{t("section1")}</SubSubHomeSection>
        <PointOfInterestSection>
          <div className="title-element">
            <Farniente />
            <div className="title mt2">{t("farniente")}</div>
          </div>
          <div className="title-element">
            <Monument />
            <div className="title mt2">{t("monuments")}</div>
          </div>
          <div className="title-element">
            <Hiking />
            <div className="title mt2">{t("nature")}</div>
          </div>
          <div className="title-element">
            <Photo />
            <div className="title mt2">{t("animals")}</div>
          </div>
          <div className="title-element">
            <CityIcon />
            <div className="title mt2">{t("city")}</div>
          </div>
          <div className="title-element">
            <Scuba />
            <div className="title mt2">{t("water-activities")}</div>
          </div>
        </PointOfInterestSection>
        {cities.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("tour.title")}</HomeSection>
            <HomeSubSection>{t("tour.subtitle")}</HomeSubSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <JapanImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedJapanImages, city.imageProps)}
                    </JapanImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        {articles.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("inform.title")}</HomeSection>
            <HomeSubSection>{t("inform.subtitle")}</HomeSubSection>
            <ArticlesContainer>
              {articles.map(({ card: Card }, index) =>
                Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
              )}
            </ArticlesContainer>
          </>
        )}
        <Divider />
        <GoToAllArticlesContainer>
          <JapanButtonLink to="articles?country=japan">Tous nos articles</JapanButtonLink>
        </GoToAllArticlesContainer>
        <Divider />
        <SubHomeSection>{t("weather")}</SubHomeSection>
        <WeatherForHomePage
          extraButton
          entries={japanWeatherEntries().filter((entry) => entry.id !== "nagoya")}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        <Divider />
        <MouseToolTip>
          {tooltipLabel ? (
            <TooltipContent>
              {tooltipLabel.split("\n").map((item, index) => {
                return (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </TooltipContent>
          ) : null}
        </MouseToolTip>
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

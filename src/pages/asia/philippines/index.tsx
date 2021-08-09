import React, { useContext, useState } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import { getCities, getLinkLabel, sortByLabel } from "../../../components/core/links/links.utils"
import {
  HomeSection,
  HomeSubSection,
  MainTitleSection,
  SectionContent,
  SubHomeSectionTwoLines,
  SubSubHomeSection,
} from "../../../components/core/section"
import { ApplicationLink } from "../../../components/core/links/link"
import philippinesFish from "../../../images/asia/philippines/fish.svg"
import {
  ArticlesContainer,
  GoToAllArticlesContainer,
  MapContainer,
  MedallionContainer,
} from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n-hook"
import { philippinesLinks } from "../../../components/core/asia/philippines/philippines.links"
import {
  PhilippinesBlogLayout,
  PhilippinesButtonLink,
  PhilippinesImageAsMedallion,
  philippinesWeatherEntries,
} from "../../../components/core/asia/philippines/philippines"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../components/images/layout"
import { ExtraCardProps } from "../../../types/shared"
import { jsx } from "@emotion/react"
import { SharedPhilippinesImages } from "../../../components/images/asia/philippines/shared-philippines-images"
import i18n from "i18next"
import asiaIndexFr from "../../../locales/fr/asia/philippines/index.json"
import asiaIndexEn from "../../../locales/en/asia/philippines/index.json"
import { PageQuote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import { WeatherForHomePage } from "../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import PhilippinesMap from "../../../images/asia/philippines/philippines-map.png"
import { PointOfInterestSection } from "../../../components/core/point-of-interest"

const namespace = "asia/philippines/index"
i18n.addResourceBundle("fr", namespace, asiaIndexFr)
i18n.addResourceBundle("en", namespace, asiaIndexEn)
const currentPageId = "philippines"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: philippinesLinks, development, lang: i18n.languageCode })
  const articles: React.ComponentType<ExtraCardProps>[] = []
  const country = t("common:country.philippines.title")
  const description = `${t("introduction.section1")} ${t("introduction.section2")} ${t("introduction.section3")}`
  return (
    <>
      <SEO
        title={country}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={description}
        googleDescription={t("meta-description")}
      />
      <PhilippinesBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{country}&nbsp;
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
          <PageQuote position="none">{t("introduction.section3")}</PageQuote>
        </SectionContent>
        <Divider />
        <SubSubHomeSection>{t("section1")}</SubSubHomeSection>
        <PointOfInterestSection page={currentPageId} />
        {cities.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("tour.title")}</HomeSection>
            <HomeSubSection>{t("tour.subtitle")}</HomeSubSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <PhilippinesImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedPhilippinesImages, city.imageProps)}
                    </PhilippinesImageAsMedallion>
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
              {articles.map((Element, index) => (
                <Element key={index} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </ArticlesContainer>
          </>
        )}
        <Divider />
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-country")} />
        <WeatherForHomePage
          entries={philippinesWeatherEntries()}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        <Divider />
        <SubHomeSectionTwoLines title={t("map")} country={t("country")} />
        <MapContainer>
          <img src={PhilippinesMap} alt="Philippines Map" />
        </MapContainer>
        <Divider />
        <GoToAllArticlesContainer>
          <PhilippinesButtonLink to="articles?country=philippines">{t("common:allArticles")}</PhilippinesButtonLink>
        </GoToAllArticlesContainer>
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
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

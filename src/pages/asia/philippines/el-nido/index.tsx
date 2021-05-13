import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import {
  CityHomeSection,
  MainTitleSection,
  SectionContent,
  SubHomeSectionTwoLines,
  SubSubHomeSection,
} from "../../../../components/core/section"
import { getArticles, getCities, getLinkLabel, sortByLabel } from "../../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/philippines/el-nido/index.json"
import translationEn from "../../../../locales/en/asia/philippines/el-nido/index.json"
import {
  PhilippinesBlogLayout,
  PhilippinesButtonLink,
  PhilippinesImageAsMedallion,
  philippinesWeatherEntries,
} from "../../../../components/core/asia/philippines/philippines"
import philippinesFish from "../../../../images/asia/philippines/fish.svg"
import { philippinesLinks } from "../../../../components/core/asia/philippines/philippines.links"
import { ElNidoParadiseCard } from "../../../../components/core/asia/philippines/philippines.card"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../../components/images/layout"
import { jsx } from "@emotion/react"
import { SharedPhilippinesImages } from "../../../../components/images/asia/philippines/shared-philippines-images"
import { PageQuote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { PointOfInterestSection } from "../../../../components/core/point-of-interest"
import HomeElNido from "../../../../images/asia/philippines/el-nido/home-el-nido.jpg"
import { WeatherForHomePage } from "../../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"

const namespace = "asia/philippines/el-nido/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "el-nido"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: philippinesLinks, development, lang: i18n.languageCode, currentPageId })
  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["el-nido"],
    filter: (cachedLink) => cachedLink.id !== "el-nido-paradise",
  })
  const googleDescription = t("meta-description")
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO
        title={t("title")}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={description}
        googleDescription={googleDescription}
        image={HomeElNido}
      />
      <PhilippinesBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{t("title")}&nbsp;
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
        <Divider />
        <CityHomeSection>{t("section2")}</CityHomeSection>
        <MainCardContainer>
          <ElNidoParadiseCard />
        </MainCardContainer>
        {highlights.length > 0 && (
          <>
            <Divider className="mt2" />
            <CityHomeSection>{t("section3")}</CityHomeSection>
            <CityArticleContainer>
              {highlights.map(({ card: Card, id }) =>
                Card ? <Card key={id} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
              )}
            </CityArticleContainer>
          </>
        )}
        <Divider />
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-city")} />
        <WeatherForHomePage
          entries={philippinesWeatherEntries().map((entry) => ({ ...entry, label: "El Nido" }))}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        {cities.length > 0 && (
          <>
            <Divider className="mt2" />
            <CityHomeSection>{t("section4")}</CityHomeSection>
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
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <PhilippinesButtonLink to="articles?country=philippines">{t("common:allArticles")}</PhilippinesButtonLink>
        </GoToAllArticlesContainer>
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

import React, { useContext, useState } from "react"
import SEO from "../../../components/layout/seo"
import rafflesia from "../../../images/asia/malaysia/rafflesia.svg"
import { getArticles, getCities, getLinkLabel, sortByLabel } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import {
  HomeSection,
  HomeSubSection,
  MainTitleSection,
  SectionContent,
  SubHomeSectionTwoLines,
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
import { ApplicationLink, ButtonLink } from "../../../components/core/links/link"
import { jsx } from "@emotion/react"
import MalaysiaImage from "../../../images/asia/malaysia/home-malaysia.jpg"
import { WeatherForHomePage } from "../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import { malaysiaLinks } from "../../../components/core/asia/malaysia/malaysia.links"
import { PointOfInterestSection } from "../../../components/core/point-of-interest"
import { ImageAsMedallion, TitleImage } from "../../../components/images/layout"
import { MalaysiaBlogLayout, malaysiaWeatherEntries } from "../../../components/core/asia/malaysia/malaysia"
import { SharedMalaysiaImages } from "../../../components/images/asia/malaysia/shared-malaysia-images"

const namespace = "asia/malaysia/index"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)
const currentPageId = "malaysia"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const country = t("common:country.malaysia.title")
  const articles = getArticles({ kind: "other", tags: ["malaysia"], development })
  const cities = getCities({ links: malaysiaLinks, development, lang: i18n.languageCode })
  return (
    <>
      <SEO
        title={country}
        fullTitle={t("full-title")}
        location={location}
        image={MalaysiaImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
      />
      <MalaysiaBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={rafflesia} alt="rafflesia" />
          &nbsp;{country}&nbsp;
          <TitleImage src={rafflesia} alt="rafflesia" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
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
                    <ImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedMalaysiaImages, city.imageProps)}
                    </ImageAsMedallion>
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
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-country")} />
        <WeatherForHomePage
          entries={malaysiaWeatherEntries(i18n.languageCode)}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        <Divider />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?country=malaysia">{t("common:allArticles")}</ButtonLink>
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
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage

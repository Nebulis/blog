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
import franceIcon from "../../../images/europe/france/france-icon.svg"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n-hook"
import { franceLinks } from "../../../components/core/europe/france/france.links"
import {
  FranceBlogLayout,
  FranceButtonLink,
  FranceImageAsMedallion,
  franceWeatherEntries,
} from "../../../components/core/europe/france/france"
import { WeatherForHomePage } from "../../../components/core/weather"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../components/images/layout"
import { ExtraCardProps } from "../../../types/shared"
import { jsx } from "@emotion/react"
import { SharedEuropeImages } from "../../../components/images/europe/shared-europe-images"
import i18n from "i18next"
import franceIndexFr from "../../../locales/fr/europe/france/index.json"
import franceIndexEn from "../../../locales/en/europe/france/index.json"
import { PageQuote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import { PointOfInterestSection } from "../../../components/core/point-of-interest"

const namespace = "europe/france/index"
i18n.addResourceBundle("fr", namespace, franceIndexFr)
i18n.addResourceBundle("en", namespace, franceIndexEn)
const currentPageId = "france"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: franceLinks, development, lang: i18n.languageCode })
  const articles: React.ComponentType<ExtraCardProps>[] = []
  const country = t("common:country.france.title")
  return (
    <>
      <SEO
        title={country}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("meta-description")}
      />
      <FranceBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={franceIcon} alt="france" />
          &nbsp;{country}&nbsp;
          <TitleImage src={franceIcon} alt="france" />
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
                    <FranceImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedEuropeImages, city.imageProps)}
                    </FranceImageAsMedallion>
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
          entries={franceWeatherEntries(t)}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        <Divider />
        <GoToAllArticlesContainer>
          <FranceButtonLink to="articles?country=france">{t("common:allArticles")}</FranceButtonLink>
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
      </FranceBlogLayout>
    </>
  )
}

export default IndexPage

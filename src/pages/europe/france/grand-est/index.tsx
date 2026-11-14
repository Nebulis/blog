import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import { ApplicationContext } from "../../../../components/application"
import { getCities, getLinkLabel, sortByLabel } from "../../../../components/core/links/links.utils"
import {
  HomeSection,
  HomeSubSection,
  MainTitleSection,
  SectionContent,
  SubHomeSectionTwoLines,
  SubSubHomeSection,
} from "../../../../components/core/section"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n-hook"
import { franceLinks } from "../../../../components/core/europe/france/france.links"
import {
  FranceBlogLayout,
  FranceButtonLink,
  FranceImageAsMedallion,
  franceWeatherEntries,
} from "../../../../components/core/europe/france/france"
import franceIcon from "../../../../images/europe/france/france-icon.svg"
import { WeatherForHomePage } from "../../../../components/core/weather"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../../components/images/layout"
import { ExtraCardProps } from "../../../../types/shared"
import { jsx } from "@emotion/react"
import { SharedFranceImages } from "../../../../components/images/europe/france/shared-europe-images"
import i18n from "i18next"
import franceGrandEstFr from "../../../../locales/fr/europe/france/grand-est/index.json"
import franceGrandEstEn from "../../../../locales/en/europe/france/grand-est/index.json"
import { PageQuote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"
import { PointOfInterestSection } from "../../../../components/core/point-of-interest"

const namespace = "europe/france/grand-est/index"
i18n.addResourceBundle("fr", namespace, franceGrandEstFr)
i18n.addResourceBundle("en", namespace, franceGrandEstEn)
const currentPageId = "grand-est"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: franceLinks, development, lang: i18n.languageCode, currentPageId })
  const articles: React.ComponentType<ExtraCardProps>[] = []
  return (
    <>
      <SEO
        title={t("title")}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("meta-description")}
      />
      <FranceBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={franceIcon} alt="france" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={franceIcon} alt="france" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
        </SectionContent>
        <Divider />
        <SubSubHomeSection>{t("section1")}</SubSubHomeSection>
        <PointOfInterestSection page={currentPageId} />
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
          entries={franceWeatherEntries(t).filter((entry) => entry.id === "grand-est")}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        {cities.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("section5")}</HomeSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city: any) => {
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <FranceImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedFranceImages, city.imageProps)}
                    </FranceImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
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

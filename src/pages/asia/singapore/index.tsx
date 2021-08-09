import React, { useContext, useState } from "react"
import SEO from "../../../components/layout/seo"
import merlion from "../../../images/asia/singapore/merlion.svg"
import { getArticles } from "../../../components/core/links/links.utils"
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
import indexFr from "../../../locales/fr/asia/singapore/index.json"
import indexEn from "../../../locales/en/asia/singapore/index.json"
import { ArticlesContainer, GoToAllArticlesContainer } from "../../../components/layout/layout"
import { ButtonLink } from "../../../components/core/links/link"
import SingaporeImage from "../../../images/asia/singapore/home-singapore.jpg"
import { WeatherForHomePage } from "../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import { PointOfInterestSection } from "../../../components/core/point-of-interest"
import { TitleImage } from "../../../components/images/layout"
import { SingaporeBlogLayout, singaporeWeatherEntries } from "../../../components/core/asia/singapore/singapore"

const namespace = "asia/singapore/index"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)
const currentPageId = "singapore"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const country = t("common:country.singapore.title")
  const articles = getArticles({ kind: "other", tags: ["singapore"], development })
  // const cities = getCities({ links: singaporeLinks, development, lang: i18n.languageCode })
  return (
    <>
      <SEO
        title={country}
        fullTitle={t("full-title")}
        location={location}
        image={SingaporeImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
      />
      <SingaporeBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={merlion} alt="merlion" />
          &nbsp;{country}&nbsp;
          <TitleImage src={merlion} alt="merlion" />
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
        {/*{cities.length > 0 && (*/}
        {/*  <>*/}
        {/*    <Divider />*/}
        {/*    <HomeSection>{t("tour.title")}</HomeSection>*/}
        {/*    <HomeSubSection>{t("tour.subtitle")}</HomeSubSection>*/}
        {/*    <MedallionContainer>*/}
        {/*      {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {*/}
        {/*        return city.imageProps?.image ? (*/}
        {/*          <ApplicationLink to={city.id} key={city.id}>*/}
        {/*            <ImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>*/}
        {/*              {jsx(SharedIndonesiaImages, city.imageProps)}*/}
        {/*            </ImageAsMedallion>*/}
        {/*          </ApplicationLink>*/}
        {/*        ) : null*/}
        {/*      })}*/}
        {/*    </MedallionContainer>*/}
        {/*  </>*/}
        {/*)}*/}
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
          entries={singaporeWeatherEntries(i18n.languageCode)}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        <Divider />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?country=singapore">{t("common:allArticles")}</ButtonLink>
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
      </SingaporeBlogLayout>
    </>
  )
}

export default IndexPage

import React, { useContext, useState } from "react"
import SEO from "../../../components/layout/seo"
import temple from "../../../images/asia/taiwan/temple.svg"
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
import indexFr from "../../../locales/fr/asia/taiwan/index.json"
import indexEn from "../../../locales/en/asia/taiwan/index.json"
import { ArticlesContainer, GoToAllArticlesContainer } from "../../../components/layout/layout"
import { ButtonLink } from "../../../components/core/links/link"
import { css } from "@emotion/react"
import TaiwanImage from "../../../images/asia/taiwan/home-taiwan.jpg"
import { WeatherForHomePage } from "../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import { PointOfInterestSection } from "../../../components/core/point-of-interest"
import { TitleImage } from "../../../components/images/layout"
import { TaiwanBlogLayout, taiwanWeatherEntries } from "../../../components/core/asia/taiwan/taiwan"

const namespace = "asia/taiwan/index"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)
const currentPageId = "taiwan"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const country = t("common:country.taiwan.title")
  const articles = getArticles({ kind: "other", tags: ["taiwan"], development })
  // const cities = getCities({ links: taiwanLinks, development, lang: i18n.languageCode })
  return (
    <>
      <SEO
        title={country}
        fullTitle={t("full-title")}
        location={location}
        image={TaiwanImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
      />
      <TaiwanBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={temple} alt="temple" />
          &nbsp;{country}&nbsp;
          <TitleImage src={temple} alt="temple" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
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
              {articles.map(({ card: Card }, index) =>
                Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
              )}
            </ArticlesContainer>
          </>
        )}
        <Divider />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?country=taiwan">{t("common:allArticles")}</ButtonLink>
        </GoToAllArticlesContainer>
        <Divider />
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-country")} />
        <WeatherForHomePage
          css={css`
            tr > td:first-of-type {
              min-width: 160px;
              width: 160px;
            }
          `}
          entries={taiwanWeatherEntries()}
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
      </TaiwanBlogLayout>
    </>
  )
}

export default IndexPage

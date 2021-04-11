import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import vietnamHat from "../../../../images/asia/vietnam/hat.svg"
import { VietnamBlogLayout, vietnamWeatherEntries } from "../../../../components/core/asia/vietnam/vietnam"
import {
  CityHomeSection,
  MainTitleSection,
  SectionContent,
  SubHomeSectionTwoLines,
  SubSubHomeSection,
} from "../../../../components/core/section"
import { getArticles, getCities, getLinkLabel, sortByLabel } from "../../../../components/core/links/links.utils"
import { ApplicationLink, ButtonLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { vietnamLinks } from "../../../../components/core/asia/vietnam/vietnam.links"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/central-vietnam/index.json"
import translationEn from "../../../../locales/en/asia/vietnam/central-vietnam/index.json"
import { PageProps } from "gatsby"
import CentralVietnamImage from "../../../../images/asia/vietnam/central-vietnam/home-central-vietnam.jpg"
import { ImageAsMedallion, TitleImage } from "../../../../components/images/layout"
import { jsx } from "@emotion/react"
import { SharedVietnamImages } from "../../../../components/images/asia/vietnam/shared-vietnam-images"
import { PageQuote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { WeatherForHomePage } from "../../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"
import { PointOfInterestSection } from "../../../../components/core/point-of-interest"

const namespace = "asia/vietnam/central-vietnam/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const currentPageId = "central-vietnam"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: vietnamLinks, development, lang: i18n.languageCode, currentPageId })
  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["central-vietnam"],
  })
  return (
    <>
      <SEO
        title={t("title")}
        fullTitle={t("full-title")}
        location={location}
        image={CentralVietnamImage}
        googleDescription={t("meta-description")}
        socialNetworkDescription={t("social-network-description")}
      />
      <VietnamBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={vietnamHat} alt="vietnam hat" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={vietnamHat} alt="vietnam hat" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
          {development && <PageQuote position="none">{t("introduction.section3")}</PageQuote>}
        </SectionContent>
        <Divider />
        <SubSubHomeSection>{t("section1")}</SubSubHomeSection>
        <PointOfInterestSection page={currentPageId} />
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
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-region")} />
        <WeatherForHomePage
          entries={vietnamWeatherEntries(t).filter((entry) => entry.id === "central")}
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
                    <ImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedVietnamImages, city.imageProps)}
                    </ImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?country=vietnam">{t("common:allArticles")}</ButtonLink>
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
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

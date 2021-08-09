import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import { jsx } from "@emotion/react"
import { getArticles, getCities, getLinkLabel } from "../../../../components/core/links/links.utils"
import { ApplicationLink, ButtonLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/malaysia/west-malaysia/index.json"
import translationEn from "../../../../locales/en/asia/malaysia/west-malaysia/index.json"
import {
  CityHomeSection,
  MainTitleSection,
  SectionContent,
  SubHomeSectionTwoLines,
  SubSubHomeSection,
} from "../../../../components/core/section"
import { ImageAsMedallion, TitleImage } from "../../../../components/images/layout"
import { Divider } from "../../../../components/core/divider"
import { PageQuote } from "../../../../components/core/quote"
import HomeImage from "../../../../images/asia/malaysia/carousel-malaysia.jpg"
import { PointOfInterestSection } from "../../../../components/core/point-of-interest"
import { malaysiaLinks } from "../../../../components/core/asia/malaysia/malaysia.links"
import { MalaysiaBlogLayout, malaysiaWeatherEntries } from "../../../../components/core/asia/malaysia/malaysia"
import rafflesia from "../../../../images/asia/malaysia/rafflesia.svg"
import { SharedMalaysiaImages } from "../../../../components/images/asia/malaysia/shared-malaysia-images"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"
import { WeatherForHomePage } from "../../../../components/core/weather"

const namespace = "asia/malaysia/west-malaysia/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const currentPageId = "west-malaysia"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: malaysiaLinks, development, lang: i18n.languageCode, currentPageId })
  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["west-malaysia"],
  })
  return (
    <>
      <SEO
        title={t("title")}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("meta-description")}
        image={HomeImage}
      />
      <MalaysiaBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={rafflesia} alt="rafflesia" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={rafflesia} alt="rafflesia" />
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
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-country")} />
        <WeatherForHomePage
          entries={malaysiaWeatherEntries(i18n.languageCode).filter((entry) => entry.id === "west")}
          onMouseLeave={() => setTooltipLabel("")}
          onMouseEnter={setTooltipLabel}
        />
        {cities.length > 0 && (
          <>
            <Divider className="mt2" />
            <CityHomeSection>{t("section4")}</CityHomeSection>
            <MedallionContainer>
              {cities.map((city) => {
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
        <Divider className="mt2" />
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

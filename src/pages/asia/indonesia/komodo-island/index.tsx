import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import { css, jsx } from "@emotion/react"
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
import translationFr from "../../../../locales/fr/asia/indonesia/komodo-island/index.json"
import translationEn from "../../../../locales/en/asia/indonesia/komodo-island/index.json"
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
import HomeImage from "../../../../images/asia/indonesia/komodo-island/home-komodo-island.jpg"
import { PointOfInterestSection } from "../../../../components/core/point-of-interest"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"
import { WeatherForHomePage } from "../../../../components/core/weather"
import { indonesiaLinks } from "../../../../components/core/asia/indonesia/indonesia.links"
import { IndonesiaBlogLayout, indonesiaWeatherEntries } from "../../../../components/core/asia/indonesia/indonesia"
import volcano from "../../../../images/asia/indonesia/volcano.svg"
import { SharedIndonesiaImages } from "../../../../components/images/asia/indonesia/shared-indonesia-images"

const namespace = "asia/indonesia/komodo-island/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const currentPageId = "komodo-island"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: indonesiaLinks, development, lang: i18n.languageCode, currentPageId })
  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["komodo-island"],
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
      <IndonesiaBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={volcano} alt="volcano" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={volcano} alt="volcano" />
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
          css={css`
            tr > td:first-of-type {
              min-width: 160px;
              width: 160px;
            }
          `}
          entries={indonesiaWeatherEntries(i18n.languageCode).filter((entry) => entry.id === "bali")}
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
                      {jsx(SharedIndonesiaImages, city.imageProps)}
                    </ImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?country=indonesia">{t("common:allArticles")}</ButtonLink>
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
      </IndonesiaBlogLayout>
    </>
  )
}

export default IndexPage

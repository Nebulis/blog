import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import { jsx } from "@emotion/react"
import { getArticles, getCities, getLinkLabel } from "../../../../components/core/links/links.utils"
import { ApplicationLink, ButtonLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/oceania/australia/queensland/index.json"
import translationEn from "../../../../locales/en/oceania/australia/queensland/index.json"
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
import HomeImage from "../../../../images/oceania/australia/queensland/queensland-home.jpg"
import { PointOfInterestSection } from "../../../../components/core/point-of-interest"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"
import { WeatherForHomePage } from "../../../../components/core/weather"
import { australiaLinks } from "../../../../components/core/oceania/australia/australia.links"
import { AustraliaBlogLayout, australiaWeatherEntries } from "../../../../components/core/oceania/australia/australia"
import kangaroo from "../../../../images/oceania/australia/kangaroo.svg"
import { SharedAustraliaImages } from "../../../../components/images/oceania/australia/shared-australia-images"
import { FromTownsvilleToCairnsCard } from "../../../../components/core/oceania/australia/australia.cards"

const namespace = "oceania/australia/queensland/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const currentPageId = "queensland"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = getCities({ links: australiaLinks, development, lang: i18n.languageCode, currentPageId })
  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["queensland"],
    filter: (cachedLink) => cachedLink.id !== "from-townsville-to-cairns",
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
      <AustraliaBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={kangaroo} alt="kangaroo" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={kangaroo} alt="kangaroo" />
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
        <Divider />
        <CityHomeSection>{t("section2")}</CityHomeSection>
        <MainCardContainer>
          <FromTownsvilleToCairnsCard />
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
        <SubHomeSectionTwoLines title={t("weather")} country={t("weather-country")} />
        <WeatherForHomePage
          entries={australiaWeatherEntries(i18n.languageCode).filter((entry) => entry.id === "queensland")}
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
                    <ImageAsMedallion
                      title={getLinkLabel(i18n.languageCode)(city.id)}
                      className={`${city.id}-${i18n.languageCode}`}
                    >
                      {jsx(SharedAustraliaImages, city.imageProps)}
                    </ImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?country=australia">{t("common:allArticles")}</ButtonLink>
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
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

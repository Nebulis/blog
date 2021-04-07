import React, { useContext, useState } from "react"
import SEO from "../../../../components/layout/seo"
import { jsx } from "@emotion/react"
import cherryBlossom from "../../../../images/asia/japan/cherry-blossom.png"
import { getArticles, getLinkLabel, isLinkPublished } from "../../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { JapanBlogLayout, JapanButtonLink, japanWeatherEntries } from "../../../../components/core/japan/japan"
import { JapanImageAsMedallion } from "../../../../components/core/japan/japan.images"
import { japanLinks } from "../../../../components/core/japan/japan.links"
import { useCustomTranslation } from "../../../../i18n-hook"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/index.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/index.json"
import { CityLink } from "../../../../components/core/links/links.types"
import {
  CityHomeSection,
  MainTitleSection,
  PointOfInterestSection,
  SectionContent,
  SubHomeSection,
  SubSubHomeSection,
} from "../../../../components/core/section"
import { TitleImage } from "../../../../components/images/layout"
import { Divider } from "../../../../components/core/divider"
import { PageQuote } from "../../../../components/core/quote"
import HomeImage from "../../../../images/asia/japan/tokyo/hamarikyu/hamarikyu-garden-main.jpg"
import { TwoDaysInTokyoCard } from "../../../../components/core/japan/japan.cards"
import { Monument } from "../../../../components/icon/monument"
import { CityIcon } from "../../../../components/icon/city"
import { WeatherForHomePage } from "../../../../components/core/weather"
import { MouseToolTip, TooltipContent } from "../../../../components/core/tooltipPortal"

const namespace = "asia/japan/tokyo/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "tokyo"
const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [tooltipLabel, setTooltipLabel] = useState("")
  const cities = development
    ? japanLinks.cities.filter(isNotCurrentPage)
    : japanLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)
  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["tokyo"],
    filter: (cachedLink) => cachedLink.id !== "two-days-in-tokyo",
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
      <JapanBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={cherryBlossom} alt="cherry blossom" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={cherryBlossom} alt="cherry blossom" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
          <PageQuote position="none">{t("introduction.section3")}</PageQuote>
          {development && <PageQuote position="none">{t("introduction.section4")}</PageQuote>}
        </SectionContent>
        <Divider />
        <SubSubHomeSection>{t("section1")}</SubSubHomeSection>
        <PointOfInterestSection>
          <div className="title-element">
            <Monument />
            <div className="title mt2">{t("monuments")}</div>
          </div>
          <div className="title-element">
            <CityIcon />
            <div className="title mt2">{t("city")}</div>
          </div>
        </PointOfInterestSection>
        <Divider />
        <CityHomeSection>{t("section2")}</CityHomeSection>
        <MainCardContainer>
          <TwoDaysInTokyoCard />
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
        <SubHomeSection>{t("weather")}</SubHomeSection>
        <WeatherForHomePage
          entries={japanWeatherEntries().filter((entry) => entry.id === "tokyo")}
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
                    <JapanImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedJapanImages, city.imageProps)}
                    </JapanImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <JapanButtonLink to="articles?country=japan">{t("common:allArticles")}</JapanButtonLink>
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
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

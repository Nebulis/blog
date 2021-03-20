import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import { getArticles, getLinkLabel, isLinkPublished, sortByLabel } from "../../../components/core/links/links.utils"
import { vietnamLinks } from "../../../components/core/asia/vietnam/vietnam.links"
import {
  HomeSection,
  HomeSubSection,
  MainTitleSection,
  SectionContent,
  SubHomeSection,
} from "../../../components/core/section"
import { ApplicationLink } from "../../../components/core/links/link"
import vietnamHat from "../../../images/asia/vietnam/hat.svg"
import {
  VietnamBlogLayout,
  VietnamButtonLink,
  VietnamImageAsMedallion,
  vietnamWeatherEntries,
} from "../../../components/core/asia/vietnam/vietnam"
import { SouthVietnamCard } from "../../../components/core/asia/vietnam/vietnam.cards"
import {
  ArticlesContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MapContainer,
  MedallionContainer,
} from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n-hook"
import { PageProps } from "gatsby"
import VietnamImage from "../../../images/asia/vietnam/home-vietnam.jpg"
import { TitleImage } from "../../../components/images/layout"
import { jsx } from "@emotion/react"
import { SharedVietnamImages } from "../../../components/images/asia/vietnam/shared-vietnam-images"
import i18n from "i18next"
import asiaIndexFr from "../../../locales/fr/asia/vietnam/index.json"
import asiaIndexEn from "../../../locales/en/asia/vietnam/index.json"
import { PageQuote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import { WeatherForHomePage } from "../../../components/core/weather"
import HomeVietnamImage from "../../../images/asia/vietnam/home-vietnam-map.png"

const namespace = "asia/vietnam/index"
i18n.addResourceBundle("fr", namespace, asiaIndexFr)
i18n.addResourceBundle("en", namespace, asiaIndexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)
  const articles = getArticles({ kind: "other", tags: ["vietnam"], development })
  const country = t("common:country.vietnam.title")
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO title={country} location={location} image={VietnamImage} socialNetworkDescription={description} />
      <VietnamBlogLayout page="vietnam" location={location}>
        <MainTitleSection>
          <TitleImage src={vietnamHat} alt="vietnam hat" />
          &nbsp;{country}&nbsp;
          <TitleImage src={vietnamHat} alt="vietnam hat" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
        </SectionContent>
        {false && (
          <>
            <Divider />
            <HomeSection>{t("travel.title")}</HomeSection>
            <HomeSubSection>{t("travel.subtitle")}</HomeSubSection>
            <MainCardContainer>
              <SouthVietnamCard />
            </MainCardContainer>
          </>
        )}
        {cities.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("tour.title")}</HomeSection>
            <HomeSubSection>{t("tour.subtitle")}</HomeSubSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <VietnamImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedVietnamImages, city.imageProps)}
                    </VietnamImageAsMedallion>
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
        <GoToAllArticlesContainer>
          <VietnamButtonLink to="articles?country=vietnam">Tous nos articles</VietnamButtonLink>
        </GoToAllArticlesContainer>
        <Divider />
        <SubHomeSection>{t("weather")}</SubHomeSection>
        <WeatherForHomePage entries={vietnamWeatherEntries(t)} />
        <Divider />
        <SubHomeSection>{t("map")}</SubHomeSection>
        <MapContainer>
          <img src={HomeVietnamImage} alt="Home Vietnam Image" />
        </MapContainer>
        <Divider />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

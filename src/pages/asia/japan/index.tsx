import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { getArticles, getLinkLabel, isLinkPublished, sortByLabel } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import { JapanBlogLayout, JapanButtonLink } from "../../../components/core/japan/japan"
import { japanLinks } from "../../../components/core/japan/japan.links"
import { HomeSection, HomeSubSection, MainTitleSection, SectionContent } from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n-hook"
import { PageProps } from "gatsby"
import { Divider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import i18n from "i18next"
import indexFr from "../../../locales/fr/asia/japan/index.json"
import indexEn from "../../../locales/en/asia/japan/index.json"
import {
  ArticlesContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../components/layout/layout"
import { ApplicationLink } from "../../../components/core/links/link"
import { jsx } from "@emotion/react"
import { SharedJapanImages } from "../../../components/images/asia/japan/shared-japan-images"
import { JapanImageAsMedallion } from "../../../components/core/japan/japan.images"
import { SpringInJapanCard } from "../../../components/core/japan/japan.cards"
import VietnamImage from "../../../images/asia/vietnam/home-vietnam.jpg"

const namespace = "asia/japan/index"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const country = t("common:country.japan.title")
  const articles = getArticles({ kind: "other", tags: ["japan"], development })
  const cities = development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished)
  const description = `${t("introduction.section2")} ${t("introduction.section3")}`
  return (
    <>
      <SEO
        title={country}
        location={location}
        image={VietnamImage}
        socialNetworkDescription={description}
        googleDescription={description}
      />
      <JapanBlogLayout page="japan" location={location}>
        <MainTitleSection>
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;{country}&nbsp;
          <img src={cherryBlossom} alt="cherry blossom" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
          <PageQuote position="none">{t("introduction.section3")}</PageQuote>
        </SectionContent>
        <Divider />
        <HomeSection>{t("travel.title")}</HomeSection>
        <HomeSubSection>{t("travel.subtitle")}</HomeSubSection>
        <MainCardContainer>
          <SpringInJapanCard fluidObject={{ aspectRatio: 4 / 3 }} />
        </MainCardContainer>
        {cities.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("tour.title")}</HomeSection>
            <HomeSubSection>{t("tour.subtitle")}</HomeSubSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
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
          <JapanButtonLink to="articles?country=japan">Tous nos articles</JapanButtonLink>
        </GoToAllArticlesContainer>
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

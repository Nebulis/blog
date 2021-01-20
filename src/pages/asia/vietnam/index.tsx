import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../../components/core/links/links.utils"
import { vietnamLinks } from "../../../components/core/asia/vietnam/vietnam.links"
import { HomeSection, HomeSubSection, IndexIntroduction, MainTitleSection } from "../../../components/core/section"
import { ApplicationLink } from "../../../components/core/links/link"
import vietnamHat from "../../../images/asia/vietnam/hat.svg"
import {
  IndexVietnamBlogLayout,
  VietnamButtonLink,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../components/core/asia/vietnam/vietnam"
import { SouthVietnamCard } from "../../../components/core/asia/vietnam/vietnam.cards"
import {
  ArticlesContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"
import { PageProps } from "gatsby"
import VietnamImage from "../../../images/asia/vietnam/home-vietnam.jpg"
import { TitleImage } from "../../../components/images/layout"
import { ExtraCardProps } from "../../../types/shared"
import { jsx } from "@emotion/core"
import { SharedVietnamImages } from "../../../components/images/asia/vietnam/shared-vietnam-images"
import i18n from "i18next"
import asiaIndexFr from "../../../locales/fr/asia/vietnam/index.json"
import asiaIndexEn from "../../../locales/en/asia/vietnam/index.json"

const namespace = "asia/vietnam/index"
i18n.addResourceBundle("fr", namespace, asiaIndexFr)
i18n.addResourceBundle("en", namespace, asiaIndexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)
  const articles: React.ComponentType<ExtraCardProps>[] = []
  const country = t("common:country.vietnam.title")
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO title={country} location={location} image={VietnamImage} description={description} />
      <IndexVietnamBlogLayout page="vietnam" location={location}>
        <MainTitleSection>
          <TitleImage src={vietnamHat} alt="vietnam hat" />
          &nbsp;{country}&nbsp;
          <TitleImage src={vietnamHat} alt="vietnam hat" />
        </MainTitleSection>
        <VietnamDivider />
        <IndexIntroduction>
          <p>{t("introduction.section1")}</p>
          <p>{t("introduction.section2")}</p>
        </IndexIntroduction>
        {false && (
          <>
            <VietnamDivider />
            <HomeSection>{t("common:travel.title")}</HomeSection>
            <HomeSubSection>{t("common:travel.subtitle")}</HomeSubSection>
            <MainCardContainer>
              <SouthVietnamCard />
            </MainCardContainer>
          </>
        )}
        {cities.length > 0 && (
          <>
            <VietnamDivider />
            <HomeSection>{t("common:tour.title")}</HomeSection>
            <HomeSubSection>{t("common:tour.subtitle")}</HomeSubSection>
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
            <VietnamDivider />
            <HomeSection>{t("common:inform.title")}</HomeSection>
            <HomeSubSection>{t("common:inform.subtitle")}</HomeSubSection>
            <ArticlesContainer>
              {articles.map((Element, index) => (
                <Element key={index} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </ArticlesContainer>
          </>
        )}
        {displayAllArticles && (
          <>
            <VietnamDivider />
            <GoToAllArticlesContainer>
              <VietnamButtonLink to="articles?country=vietnam">Tous nos articles</VietnamButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </IndexVietnamBlogLayout>
    </>
  )
}

export default IndexPage

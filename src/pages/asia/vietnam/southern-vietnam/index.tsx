import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import vietnamHat from "../../../../images/asia/vietnam/hat.svg"
import {
  VietnamBlogLayout,
  VietnamButtonLink,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../../components/core/asia/vietnam/vietnam"
import { HomeSection, MainTitleSection } from "../../../../components/core/section"
import {
  getHighlightsFromCity,
  getLinkLabel,
  isLinkPublished,
  sortByLabel,
  sortByPublishedDate,
} from "../../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { vietnamLinks } from "../../../../components/core/asia/vietnam/vietnam.links"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/index.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/index.json"
import { CityLink } from "../../../../components/core/links/links.types"
import { SouthVietnamCard } from "../../../../components/core/asia/vietnam/vietnam.cards"
import { PageProps } from "gatsby"
import SouthernVietnamImage from "../../../../images/asia/vietnam/southern-vietnam/home-southern-vietnam.jpg"
import { TitleImage } from "../../../../components/images/layout"

const namespace = "asia/vietnam/southern-vietnam/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "southern-vietnam"

const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development
    ? vietnamLinks.cities.filter(isNotCurrentPage)
    : vietnamLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)

  const highlights = getHighlightsFromCity(vietnamLinks.cities)({ id: currentPageId, development }).sort(
    sortByPublishedDate
  )
  return (
    <>
      <SEO title={t("title")} location={location} image={SouthernVietnamImage} />
      <VietnamBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={vietnamHat} alt="vietnam hat" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={vietnamHat} alt="vietnam hat" />
        </MainTitleSection>
        <VietnamDivider className="mb0" />
        <MainCardContainer>
          <SouthVietnamCard />
        </MainCardContainer>
        {highlights.length > 0 && (
          <>
            <HomeSection>{t("section1")}</HomeSection>
            <CityArticleContainer>
              {highlights.map(({ card: Card, id }) => (
                <Card key={id} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </CityArticleContainer>
          </>
        )}
        {cities.length > 0 && (
          <>
            <VietnamDivider />
            <HomeSection>{t("section2")}</HomeSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <VietnamImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {React.createElement(city.image)}
                    </VietnamImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
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
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

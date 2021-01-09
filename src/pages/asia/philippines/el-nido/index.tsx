import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
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
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/philippines/el-nido/index.json"
import translationEn from "../../../../locales/en/asia/philippines/el-nido/index.json"
import { CityLink } from "../../../../components/core/links/links.types"
import {
  PhilippinesBlogLayout,
  PhilippinesButtonLink,
  PhilippinesDivider,
  PhilippinesImageAsMedallion,
} from "../../../../components/core/asia/philippines/philippines"
import philippinesFish from "../../../../images/asia/philippines/fish.svg"
import { philippinesLinks } from "../../../../components/core/asia/philippines/philippines.links"
import { ElNidoParadiseCard } from "../../../../components/core/asia/philippines/philippines.card"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../../components/images/layout"

const namespace = "asia/philippines/el-nido/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "el-nido"

const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development
    ? philippinesLinks.cities.filter(isNotCurrentPage)
    : philippinesLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)

  const highlights = getHighlightsFromCity(philippinesLinks.cities)({ id: currentPageId, development }).sort(
    sortByPublishedDate
  )
  return (
    <>
      <SEO title={t("title")} location={location} />
      <PhilippinesBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
        </MainTitleSection>
        <PhilippinesDivider className="mb0" />
        <MainCardContainer>
          <ElNidoParadiseCard />
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
            <PhilippinesDivider />
            <HomeSection>{t("section2")}</HomeSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <PhilippinesImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {React.createElement(city.image)}
                    </PhilippinesImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        {displayAllArticles && (
          <>
            <PhilippinesDivider />
            <GoToAllArticlesContainer>
              <PhilippinesButtonLink to="articles?country=philippines">Tous nos articles</PhilippinesButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

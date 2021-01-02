import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { HomeSection, MainTitleSection } from "../../../../components/core/section"
import {
  getLinkLabel,
  isLinkPublished,
  sortByLabel,
  sortByPublishedDate,
} from "../../../../components/core/links/links.configuration"
import { ApplicationLink, ButtonLink } from "../../../../components/core/links/link"
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
  PhilippinesDivider,
  PhilippinesImageAsMedallion,
} from "../../../../components/core/asia/philippines/philippines"
import philippinesScubaDiving from "../../../../images/asia/philippines/scuba-diving.svg"
import { philippinesLinks } from "../../../../components/core/asia/philippines/philippines.links"
import { getHighlightsFromCity } from "../../../../components/core/links/links.configuration"
import { ElNidoParadiseCard } from "../../../../components/core/asia/philippines/philippines.card"
import { PageProps } from "gatsby"

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
      <PhilippinesBlogLayout page={currentPageId}>
        <MainTitleSection>
          <img src={philippinesScubaDiving} alt="philippines scuba diving" style={{ width: "24px" }} />
          &nbsp;{t("title")}&nbsp;
          <img src={philippinesScubaDiving} alt="philippines scuba diving" style={{ width: "24px" }} />
        </MainTitleSection>
        <PhilippinesDivider className="mb0" />
        <MainCardContainer>
          <ElNidoParadiseCard />
        </MainCardContainer>
        {cities.length > 0 && (
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
              <ButtonLink to="articles?country=philippines">Tous nos articles</ButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

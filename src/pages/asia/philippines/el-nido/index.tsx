import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { CityHomeSection, HomeSection, IndexIntroduction, MainTitleSection } from "../../../../components/core/section"
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
import { jsx } from "@emotion/core"
import { SharedPhilippinesImages } from "../../../../components/images/asia/philippines/shared-philippines-images"
import { VietnamBlogLayout, VietnamDivider } from "../../../../components/core/asia/vietnam/vietnam"

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
  const googleDescription = t("introduction.section3")
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO title={t("title")} location={location} description={description} googleDescription={googleDescription} />
      <PhilippinesBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
        </MainTitleSection>
        <PhilippinesDivider />
        <IndexIntroduction>
          <p>{t("introduction.section1")}</p>
          <p>{t("introduction.section2")}</p>
          <p>{t("introduction.section3")}</p>
          <p>{t("introduction.section4")}</p>
          <p>{t("introduction.section5")}</p>
        </IndexIntroduction>
        <PhilippinesDivider />
        <CityHomeSection>{t("section1")}</CityHomeSection>
        <MainCardContainer>
          <ElNidoParadiseCard />
        </MainCardContainer>
        {highlights.length > 0 && (
          <>
            <PhilippinesDivider className="mt2" />
            <CityHomeSection>{t("section2")}</CityHomeSection>
            <CityArticleContainer>
              {highlights.map(({ card: Card, id }) => (
                <Card key={id} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </CityArticleContainer>
          </>
        )}
        {cities.length > 0 && (
          <>
            <PhilippinesDivider className="mt2" />
            <CityHomeSection>{t("section3")}</CityHomeSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <PhilippinesImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedPhilippinesImages, city.imageProps)}
                    </PhilippinesImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        {displayAllArticles && (
          <>
            <PhilippinesDivider className="mt2" />
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

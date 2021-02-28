import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { CityHomeSection, MainTitleSection, SectionContent } from "../../../../components/core/section"
import { getArticles, getLinkLabel, isLinkPublished, sortByLabel } from "../../../../components/core/links/links.utils"
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
  PhilippinesImageAsMedallion,
} from "../../../../components/core/asia/philippines/philippines"
import philippinesFish from "../../../../images/asia/philippines/fish.svg"
import { philippinesLinks } from "../../../../components/core/asia/philippines/philippines.links"
import { ElNidoParadiseCard } from "../../../../components/core/asia/philippines/philippines.card"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../../components/images/layout"
import { jsx } from "@emotion/react"
import { SharedPhilippinesImages } from "../../../../components/images/asia/philippines/shared-philippines-images"
import { PageQuote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"

const namespace = "asia/philippines/el-nido/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "el-nido"

const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development
    ? philippinesLinks.cities.filter(isNotCurrentPage)
    : philippinesLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)

  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["el-nido"],
    filter: (cachedLink) => cachedLink.id !== "el-nido-paradise",
  })
  const googleDescription = t("meta-description")
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO
        title={t("title")}
        location={location}
        socialNetworkDescription={description}
        googleDescription={googleDescription}
      />
      <PhilippinesBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
          <PageQuote position="none">{t("introduction.section3")}</PageQuote>
          <PageQuote position="none">{t("introduction.section4")}</PageQuote>
          <PageQuote position="none">{t("introduction.section5")}</PageQuote>
        </SectionContent>
        <Divider />
        <CityHomeSection>{t("section1")}</CityHomeSection>
        <MainCardContainer>
          <ElNidoParadiseCard />
        </MainCardContainer>
        {highlights.length > 0 && (
          <>
            <Divider className="mt2" />
            <CityHomeSection>{t("section2")}</CityHomeSection>
            <CityArticleContainer>
              {highlights.map(({ card: Card, id }) =>
                Card ? <Card key={id} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
              )}
            </CityArticleContainer>
          </>
        )}
        {cities.length > 0 && (
          <>
            <Divider className="mt2" />
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
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <PhilippinesButtonLink to="articles?country=philippines">Tous nos articles</PhilippinesButtonLink>
        </GoToAllArticlesContainer>
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

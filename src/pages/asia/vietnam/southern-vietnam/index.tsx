import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import vietnamHat from "../../../../images/asia/vietnam/hat.svg"
import {
  VietnamBlogLayout,
  VietnamButtonLink,
  VietnamImageAsMedallion,
} from "../../../../components/core/asia/vietnam/vietnam"
import { CityHomeSection, MainTitleSection, SectionContent } from "../../../../components/core/section"
import { getArticles, getLinkLabel, isLinkPublished, sortByLabel } from "../../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { vietnamLinks } from "../../../../components/core/asia/vietnam/vietnam.links"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/index.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/index.json"
import { CityLink } from "../../../../components/core/links/links.types"
import { SouthVietnamCard } from "../../../../components/core/asia/vietnam/vietnam.cards"
import { PageProps } from "gatsby"
import SouthernVietnamImage from "../../../../images/asia/vietnam/southern-vietnam/home-southern-vietnam.jpg"
import { TitleImage } from "../../../../components/images/layout"
import { jsx } from "@emotion/react"
import { SharedVietnamImages } from "../../../../components/images/asia/vietnam/shared-vietnam-images"
import { PageQuote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"

const namespace = "asia/vietnam/southern-vietnam/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "southern-vietnam"

const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development
    ? vietnamLinks.cities.filter(isNotCurrentPage)
    : vietnamLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)

  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["southern-vietnam"],
    filter: (cachedLink) => cachedLink.id !== "discover-southern-vietnam",
  })
  const googleDescription = t("meta-description")
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO
        title={t("title")}
        location={location}
        image={SouthernVietnamImage}
        socialNetworkDescription={description}
        googleDescription={googleDescription}
      />
      <VietnamBlogLayout page={currentPageId} location={location}>
        <MainTitleSection>
          <TitleImage src={vietnamHat} alt="vietnam hat" />
          &nbsp;{t("title")}&nbsp;
          <TitleImage src={vietnamHat} alt="vietnam hat" />
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
          <SouthVietnamCard />
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
                    <VietnamImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedVietnamImages, city.imageProps)}
                    </VietnamImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        <Divider className="mt2" />
        <GoToAllArticlesContainer>
          <VietnamButtonLink to="articles?country=vietnam">Tous nos articles</VietnamButtonLink>
        </GoToAllArticlesContainer>
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

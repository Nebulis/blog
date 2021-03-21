import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { jsx } from "@emotion/react"
import cherryBlossom from "../../../../images/asia/japan/cherry-blossom.png"
import { getArticles, getLinkLabel, isLinkPublished } from "../../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { japanLinks } from "../../../../components/core/japan/japan.links"
import { JapanBlogLayout, JapanButtonLink } from "../../../../components/core/japan/japan"
import { JapanImageAsMedallion } from "../../../../components/core/japan/japan.images"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/himeji/index.json"
import translationEn from "../../../../locales/en/asia/japan/himeji/index.json"
import { CityHomeSection, MainTitleSection, SectionContent } from "../../../../components/core/section"
import { TitleImage } from "../../../../components/images/layout"
import { Divider } from "../../../../components/core/divider"
import { PageQuote } from "../../../../components/core/quote"
import { CityLink } from "../../../../components/core/links/links.types"

const namespace = "asia/japan/himeji/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "himeji"

const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development
    ? japanLinks.cities.filter(isNotCurrentPage)
    : japanLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)

  const highlights = getArticles({
    kind: "highlight",
    development,
    tags: ["himeji"],
  })
  const description = `${t("introduction.section1")} ${t("introduction.section2")}`
  return (
    <>
      <SEO
        title={t("title")}
        location={location}
        socialNetworkDescription={description}
        googleDescription={t("meta-description")}
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
        </SectionContent>
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
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

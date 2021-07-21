import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { ArticlesContainer } from "../../components/layout/layout"
import { getArticles } from "../../components/core/links/links.utils"
import { ApplicationContext } from "../../components/application"
import { PrimaryDivider } from "../../components/core/divider"
import { PageQuote } from "../../components/core/quote"
import { HomeSection, HomeSubSection, MainTitleSection, SectionContent } from "../../components/core/section"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import indexFr from "../../locales/fr/journal/living-abroad.json"
import indexEn from "../../locales/en/journal/living-abroad.json"
import { PageProps } from "gatsby"

const namespace = "journal/living-abroad"
const id = "living-abroad"
i18n.addResourceBundle("fr", namespace, indexFr)
i18n.addResourceBundle("en", namespace, indexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  // TODO
  const articles = getArticles({ kind: "other", tags: ["living-abroad"], development })
  const { t } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO
        title={t("common:link.journal.living-abroad")}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={t("meta-description")}
        googleDescription={t("meta-description")}
      />
      <PrimaryBlogLayoutWithDrawer page={id} location={location}>
        <MainTitleSection>{t("common:link.journal.living-abroad")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("quote.part1")}</PageQuote>
          <PageQuote position="none">{t("quote.part2")}</PageQuote>
          <PageQuote position="none">{t("quote.part3")}</PageQuote>
        </SectionContent>
        <PrimaryDivider />
        <HomeSection>{t("inform.title")}</HomeSection>
        <HomeSubSection>{t("inform.subtitle")}</HomeSubSection>
        <ArticlesContainer>
          {articles.map(({ card: Card }, index) =>
            Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
          )}
        </ArticlesContainer>
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

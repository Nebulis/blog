import React, { useContext, useState } from "react"
import SEO from "../components/layout/seo"
import queryString from "query-string"
import { PageProps } from "gatsby"
import { BlogLayoutWithDrawer } from "../components/layout/main-layout"
import { getArticles } from "../components/core/links/links.utils"
import { ApplicationContext } from "../components/application"
import { ArticlesContainer } from "../components/layout/layout"
import { MainTitleSection } from "../components/core/section"
import { PrimaryDivider } from "../components/core/divider"
import { useCustomTranslation } from "../i18n"
import i18n from "i18next"
import translationFr from "../locales/fr/articles.json"
import translationEn from "../locales/en/articles.json"
import { isKind, Kind } from "../components/core/links/links.types"

const namespace = "articles"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const query = queryString.parse(location.search)
  const [search] = useState<{ continent: string; country: string; kind: Kind | "none" }>({
    continent: typeof query.continent === "string" ? query.continent : "",
    country: typeof query.country === "string" ? query.country : "",
    kind: isKind(query.kind) ? query.kind : "none",
  })
  const { development } = useContext(ApplicationContext)
  const { t } = useCustomTranslation([namespace, "common"])
  const title = t("title")
  const articles = getArticles({
    development,
    tags: [search.country, search.continent].filter(Boolean),
    kind: search.kind,
  })
  return (
    <>
      <SEO title={title} location={location} />
      <BlogLayoutWithDrawer page="articles" location={location}>
        <MainTitleSection>{title}</MainTitleSection>
        <PrimaryDivider className="mb0" />
        <ArticlesContainer>
          {articles.map(({ card: Card }, index) =>
            Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3, sizes: "400px" }} /> : null
          )}
        </ArticlesContainer>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

import React, { useContext } from "react"
import SEO from "../components/layout/seo"
import queryString from "query-string"
import { navigate, PageProps } from "gatsby"
import { BlogLayoutWithDrawer } from "../components/layout/main-layout"
import { getArticles, sortByLabel } from "../components/core/links/links.utils"
import { ApplicationContext } from "../components/application"
import { ArticlesContainer } from "../components/layout/layout"
import { MainTitleSection } from "../components/core/section"
import { PrimaryDivider } from "../components/core/divider"
import { useCustomTranslation } from "../i18n-hook"
import i18n from "i18next"
import translationFr from "../locales/fr/articles.json"
import translationEn from "../locales/en/articles.json"
import { isKind, Kind } from "../components/core/links/links.types"
import { Select } from "../components/core/select"

const namespace = "articles"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const query = queryString.parse(location.search)
  const search: { continent?: string; country?: string; kind?: Kind } = {
    continent: typeof query.continent === "string" ? query.continent : undefined,
    country: typeof query.country === "string" ? query.country : undefined,
    kind: isKind(query.kind) ? query.kind : undefined,
  }
  const { development } = useContext(ApplicationContext)
  const { i18n, t } = useCustomTranslation([namespace, "common"])
  const title = t("title")
  const tags: string[] = [search.country, search.continent].filter(Boolean) as string[]
  const articles = getArticles({
    development,
    kind: search.kind,
    filter: (cachedLink) => (tags.length > 0 ? tags.every((t) => cachedLink.tags.includes(t)) : true),
  })
  const countries = getArticles({
    kind: "country",
    card: false,
    development,
  })
    .sort(sortByLabel(i18n.languageCode))
    .map((country) => {
      return { value: country.id, label: t(`common:country.${country.id}.title`) }
    })
  const continents = getArticles({
    kind: "continent",
    card: false,
    development,
  })
    .sort(sortByLabel(i18n.languageCode))
    .map((continent) => {
      return { value: continent.id, label: t(`common:continent.${continent.id}`) }
    })
  const kinds = [
    { value: "highlight", label: "Tous nos récits de voyage" },
    { value: "other", label: "Tous nos conseils / partages" },
  ]
  const navigateTo = (data: any) => {
    const newSearch = { ...search, ...data }
    console.log({ newSearch })
    navigate(`${location.pathname}?${queryString.stringify(newSearch)}`)
  }
  return (
    <>
      <SEO title={title} location={location} fullTitle={t("full-title")} />
      <BlogLayoutWithDrawer page="articles" location={location}>
        <MainTitleSection>{title}</MainTitleSection>
        <PrimaryDivider className="mb0" />
        <Select
          placeholder="Category"
          onChange={(value) => {
            navigateTo({ kind: value })
          }}
          value={kinds.find((kind) => kind.value === search.kind)}
          options={kinds}
        />
        <Select
          placeholder="Continents"
          onChange={(value) => {
            navigateTo({ continent: value })
          }}
          value={continents.find((continent) => continent.value === search.continent)}
          options={continents}
        />
        <Select
          placeholder="Country"
          onChange={(value) => {
            navigateTo({ country: value })
          }}
          value={countries.find((country) => country.value === search.country)}
          options={countries}
        />
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

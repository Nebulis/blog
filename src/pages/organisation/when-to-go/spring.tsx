import React from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { BlogLayout } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/spring.json"
import translationEn from "../../../locales/en/organisation/when-to-go/spring.json"
import { PrimaryDivider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { HomeVietnamImage } from "../../../components/images/asia/vietnam/home"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../../components/layout/organisation-layout"

const namespace = "organisation/when-to-go/spring"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = () => {
  const { t } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO title={t("title")} />
      <BlogLayout page="spring">
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
        </SectionContent>
        <CountriesContainer>
          <CountryContainer title={t("common:country.vietnam")} image={HomeVietnamImage} to="southern-vietnam" />
        </CountriesContainer>
      </BlogLayout>
    </>
  )
}

export default IndexPage

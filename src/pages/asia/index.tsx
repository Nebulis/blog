import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { MedallionContainer, GoToAllArticlesContainer } from "../../components/layout/layout"
import { ApplicationLink, ButtonLink } from "../../components/core/links/link"
import { ImageAsMedallion } from "../../components/images/layout"
import { asiaLinks } from "../../components/core/asia/asia.links"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../components/core/links/links.configuration"
import { ApplicationContext } from "../../components/application"
import { PrimaryDivider } from "../../components/core/divider"
import { Quote } from "../../components/core/quote"
import styled from "@emotion/styled"
import { HomeSection, HomeSubSection, MainTitleSection } from "../../components/core/section"
import { IndexBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { useCustomTranslation } from "../../i18n"
import i18n from "i18next"
import asiaIndexFr from "../../locales/fr/asia/index.json"
import asiaIndexEn from "../../locales/en/asia/index.json"

const namespace = "asia/index"
i18n.addResourceBundle("fr", namespace, asiaIndexFr)
i18n.addResourceBundle("en", namespace, asiaIndexEn)

const CustomQuote = styled(Quote)`
  font-size: 20px;
  blockquote {
    font-family: "Courgette", serif;
  }
`

const IndexPage = () => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const countries = development ? asiaLinks.countries : asiaLinks.countries.filter(isLinkPublished)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO title={t("common:continent.asia")} />
      <IndexBlogLayoutWithDrawer page="asia">
        <MainTitleSection>{t("common:continent.asia")}</MainTitleSection>
        <PrimaryDivider />
        <div>
          <CustomQuote>{t("quote.part1")}</CustomQuote>
          <CustomQuote position="none">{t("quote.part2")}</CustomQuote>
          <CustomQuote position="none">{t("quote.part3")}</CustomQuote>
        </div>
        <PrimaryDivider />

        <HomeSection>{t("common:inspire.title")}</HomeSection>
        <HomeSubSection>{t("common:inspire.subtitle")}</HomeSubSection>
        <MedallionContainer>
          {countries.sort(sortByLabel(i18n.languageCode)).map((country) =>
            country.image ? (
              <ApplicationLink to={country.id} key={country.id}>
                <ImageAsMedallion title={getLinkLabel(i18n.languageCode)(country.id)}>
                  {React.createElement(country.image)}
                </ImageAsMedallion>
              </ApplicationLink>
            ) : null
          )}
        </MedallionContainer>
        {displayAllArticles && (
          <>
            <PrimaryDivider />
            <GoToAllArticlesContainer>
              <ButtonLink to="articles?continent=asia">{t("common:allArticles")}</ButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </IndexBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

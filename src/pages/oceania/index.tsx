import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { GoToAllArticlesContainer, MedallionContainer } from "../../components/layout/layout"
import { ApplicationLink, ButtonLink } from "../../components/core/links/link"
import { ImageAsMedallion } from "../../components/images/layout"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../components/core/links/links.utils"
import { ApplicationContext } from "../../components/application"
import { Divider } from "../../components/core/divider"
import { PageQuote } from "../../components/core/quote"
import { HomeSection, HomeSubSection, MainTitleSection, SectionContent } from "../../components/core/section"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import translateFr from "../../locales/fr/oceania/index.json"
import translateEn from "../../locales/en/oceania/index.json"
import { PageProps } from "gatsby"
import AustraliaImage from "../../images/oceania/australia/home-australia.jpg"
import { jsx } from "@emotion/react"
import { oceaniaLinks } from "../../components/core/oceania/oceania.links"
import { SharedOceaniaImages } from "../../components/images/oceania/shared-oceania-images"

const namespace = "oceania/index"
i18n.addResourceBundle("fr", namespace, translateFr)
i18n.addResourceBundle("en", namespace, translateEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const countries = development ? [...oceaniaLinks.countries] : oceaniaLinks.countries.filter(isLinkPublished)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO
        title={t("common:continent.oceania")}
        fullTitle={t("full-title")}
        location={location}
        image={AustraliaImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("meta-description")}
      />
      <PrimaryBlogLayoutWithDrawer page="oceania" location={location}>
        <MainTitleSection>{t("common:continent.oceania")}</MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("quote.part1")}</PageQuote>
          <PageQuote position="none">{t("quote.part2")}</PageQuote>
          <PageQuote position="none">{t("quote.part3")}</PageQuote>
        </SectionContent>
        <Divider />

        <HomeSection>{t("inspire.title")}</HomeSection>
        <HomeSubSection>{t("inspire.subtitle")}</HomeSubSection>
        <MedallionContainer>
          {countries.sort(sortByLabel(i18n.languageCode)).map((country) =>
            country.imageProps?.image ? (
              <ApplicationLink to={country.id} key={country.id}>
                <ImageAsMedallion title={getLinkLabel(i18n.languageCode)(country.id)}>
                  {jsx(SharedOceaniaImages, country.imageProps)}
                </ImageAsMedallion>
              </ApplicationLink>
            ) : null
          )}
        </MedallionContainer>
        <Divider />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?continent=oceania">{t("common:allArticles")}</ButtonLink>
        </GoToAllArticlesContainer>
        <Divider />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

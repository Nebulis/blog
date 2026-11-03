import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { GoToAllArticlesContainer, MedallionContainer } from "../../components/layout/layout"
import { ApplicationLink, ButtonLink } from "../../components/core/links/link"
import { ImageAsMedallion } from "../../components/images/layout"
import { europeLinks } from "../../components/core/europe/europe.links"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../components/core/links/links.utils"
import { ApplicationContext } from "../../components/application"
import { Divider } from "../../components/core/divider"
import { PageQuote } from "../../components/core/quote"
import { HomeSection, HomeSubSection, MainTitleSection, SectionContent } from "../../components/core/section"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import europeIndexFr from "../../locales/fr/europe/index.json"
import europeIndexEn from "../../locales/en/europe/index.json"
import { PageProps } from "gatsby"
import EuropeImage from "../../images/europe/home-europe.jpg"
import { jsx } from "@emotion/react"
import { SharedEuropeImages } from "../../components/images/europe/shared-europe-images"

const namespace = "europe/index"
i18n.addResourceBundle("fr", namespace, europeIndexFr)
i18n.addResourceBundle("en", namespace, europeIndexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const countries = development ? [...europeLinks.countries] : europeLinks.countries.filter(isLinkPublished)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO
        title={t("common:continent.europe")}
        fullTitle={t("full-title")}
        location={location}
        image={EuropeImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("meta-description")}
      />
      <PrimaryBlogLayoutWithDrawer page="europe" location={location}>
        <MainTitleSection>{t("common:continent.europe")}</MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("quote.part1")}</PageQuote>
          <PageQuote position="none">{t("quote.part2")}</PageQuote>
        </SectionContent>
        <Divider />

        <HomeSection>{t("inspire.title")}</HomeSection>
        <HomeSubSection>{t("inspire.subtitle")}</HomeSubSection>
        <MedallionContainer>
          {countries.sort(sortByLabel(i18n.languageCode)).map((country) =>
            country.imageProps?.image ? (
              <ApplicationLink to={country.id} key={country.id}>
                <ImageAsMedallion title={getLinkLabel(i18n.languageCode)(country.id)}>
                  {jsx(SharedEuropeImages, country.imageProps)}
                </ImageAsMedallion>
              </ApplicationLink>
            ) : null
          )}
        </MedallionContainer>
        <Divider />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?continent=europe">{t("common:allArticles")}</ButtonLink>
        </GoToAllArticlesContainer>
        <Divider />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

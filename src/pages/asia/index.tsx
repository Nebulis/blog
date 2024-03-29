import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { GoToAllArticlesContainer, MedallionContainer } from "../../components/layout/layout"
import { ApplicationLink, ButtonLink } from "../../components/core/links/link"
import { ImageAsMedallion } from "../../components/images/layout"
import { asiaLinks } from "../../components/core/asia/asia.links"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../components/core/links/links.utils"
import { ApplicationContext } from "../../components/application"
import { Divider } from "../../components/core/divider"
import { PageQuote } from "../../components/core/quote"
import { HomeSection, HomeSubSection, MainTitleSection, SectionContent } from "../../components/core/section"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import asiaIndexFr from "../../locales/fr/asia/index.json"
import asiaIndexEn from "../../locales/en/asia/index.json"
import { PageProps } from "gatsby"
import VietnamImage from "../../images/asia/vietnam/home-vietnam.jpg"
import { jsx } from "@emotion/react"
import { SharedAsiaImages } from "../../components/images/asia/shared-asia-images"

const namespace = "asia/index"
i18n.addResourceBundle("fr", namespace, asiaIndexFr)
i18n.addResourceBundle("en", namespace, asiaIndexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const countries = development ? [...asiaLinks.countries] : asiaLinks.countries.filter(isLinkPublished)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO
        title={t("common:continent.asia")}
        fullTitle={t("full-title")}
        location={location}
        image={VietnamImage}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("meta-description")}
      />
      <PrimaryBlogLayoutWithDrawer page="asia" location={location}>
        <MainTitleSection>{t("common:continent.asia")}</MainTitleSection>
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
                  {jsx(SharedAsiaImages, country.imageProps)}
                </ImageAsMedallion>
              </ApplicationLink>
            ) : null
          )}
        </MedallionContainer>
        <Divider />
        <GoToAllArticlesContainer>
          <ButtonLink to="articles?continent=asia">{t("common:allArticles")}</ButtonLink>
        </GoToAllArticlesContainer>
        <Divider />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

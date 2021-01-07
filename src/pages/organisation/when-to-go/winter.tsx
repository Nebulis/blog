import React from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/winter.json"
import translationEn from "../../../locales/en/organisation/when-to-go/winter.json"
import { PrimaryDivider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { HomeVietnamImage } from "../../../components/images/asia/vietnam/home-vietnam"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../../components/layout/organisation-layout"
import { BlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { CarouselAndOrganisationPhilippines2 } from "../../../components/images/asia/philippines/carousel-and-organisation-philippines2"
import styled from "@emotion/styled"

const namespace = "organisation/when-to-go/winter"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO title={t("title")} location={location} />
      <BlogLayoutWithDrawer page="winter" location={location}>
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
          <PageQuote position="none">{t("part4")}</PageQuote>
          <PageQuote position="none">{t("part5")}</PageQuote>
          <PageQuote position="none">{t("part6")}</PageQuote>
        </SectionContent>
        <CountriesContainer>
          <CountryContainer
            title={t("common:country.philippines")}
            image={styled(CarouselAndOrganisationPhilippines2)`
              img {
                object-position: -50px 30px !important;
                transform: scale(1.6);
              }
            `}
            to="philippines"
          />
          <CountryContainer
            title={t("common:country.southern-vietnam")}
            image={HomeVietnamImage}
            to="southern-vietnam"
          />
        </CountriesContainer>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

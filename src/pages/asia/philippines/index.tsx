import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../../components/core/links/links.utils"
import { HomeSection, HomeSubSection, MainTitleSection, SectionContent } from "../../../components/core/section"
import { ApplicationLink } from "../../../components/core/links/link"
import philippinesFish from "../../../images/asia/philippines/fish.svg"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"
import { philippinesLinks } from "../../../components/core/asia/philippines/philippines.links"
import {
  PhilippinesBlogLayout,
  PhilippinesButtonLink,
  PhilippinesImageAsMedallion,
} from "../../../components/core/asia/philippines/philippines"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../components/images/layout"
import { ExtraCardProps } from "../../../types/shared"
import { jsx } from "@emotion/react"
import { SharedPhilippinesImages } from "../../../components/images/asia/philippines/shared-philippines-images"
import i18n from "i18next"
import asiaIndexFr from "../../../locales/fr/asia/philippines/index.json"
import asiaIndexEn from "../../../locales/en/asia/philippines/index.json"
import { PageQuote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"

const namespace = "asia/philippines/index"
i18n.addResourceBundle("fr", namespace, asiaIndexFr)
i18n.addResourceBundle("en", namespace, asiaIndexEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development ? philippinesLinks.cities : philippinesLinks.cities.filter(isLinkPublished)
  const articles: React.ComponentType<ExtraCardProps>[] = []
  const country = t("common:country.philippines.title")
  const description = `${t("introduction.section1")} ${t("introduction.section2")} ${t("introduction.section3")}`
  return (
    <>
      <SEO title={country} location={location} socialNetworkDescription={description} />
      <PhilippinesBlogLayout page="philippines" location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{country}&nbsp;
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
        </MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("introduction.section1")}</PageQuote>
          <PageQuote position="none">{t("introduction.section2")}</PageQuote>
          <PageQuote position="none">{t("introduction.section3")}</PageQuote>
        </SectionContent>
        {cities.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("common:tour.title")}</HomeSection>
            <HomeSubSection>{t("common:tour.subtitle")}</HomeSubSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <PhilippinesImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedPhilippinesImages, city.imageProps)}
                    </PhilippinesImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        {articles.length > 0 && (
          <>
            <Divider />
            <HomeSection>{t("common:inform.title")}</HomeSection>
            <HomeSubSection>{t("common:inform.subtitle")}</HomeSubSection>
            <ArticlesContainer>
              {articles.map((Element, index) => (
                <Element key={index} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </ArticlesContainer>
          </>
        )}
        <Divider />
        <GoToAllArticlesContainer>
          <PhilippinesButtonLink to="articles?country=philippines">Tous nos articles</PhilippinesButtonLink>
        </GoToAllArticlesContainer>
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

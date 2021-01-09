import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../../components/core/links/links.utils"
import { HomeSection, HomeSubSection, MainTitleSection } from "../../../components/core/section"
import { ApplicationLink } from "../../../components/core/links/link"
import philippinesFish from "../../../images/asia/philippines/fish.svg"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"
import { philippinesLinks } from "../../../components/core/asia/philippines/philippines.links"
import {
  IndexPhilippinesBlogLayout,
  PhilippinesButtonLink,
  PhilippinesDivider,
  PhilippinesImageAsMedallion,
} from "../../../components/core/asia/philippines/philippines"
import { PageProps } from "gatsby"
import { TitleImage } from "../../../components/images/layout"
import { ExtraCardProps } from "../../../types/shared"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation(["asia/philippines/index", "common"])
  const cities = development ? philippinesLinks.cities : philippinesLinks.cities.filter(isLinkPublished)
  const articles: React.ComponentType<ExtraCardProps>[] = []
  return (
    <>
      <SEO title={t("common:country.philippines")} location={location} />
      <IndexPhilippinesBlogLayout page="philippines" location={location}>
        <MainTitleSection>
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
          &nbsp;{t("common:country.philippines")}&nbsp;
          <TitleImage src={philippinesFish} alt="philippines scuba diving" />
        </MainTitleSection>
        {cities.length > 0 && (
          <>
            <PhilippinesDivider />
            <HomeSection>{t("common:tour.title")}</HomeSection>
            <HomeSubSection>{t("common:tour.subtitle")}</HomeSubSection>
            <MedallionContainer>
              {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
                return city.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <PhilippinesImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {React.createElement(city.image)}
                    </PhilippinesImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </MedallionContainer>
          </>
        )}
        {articles.length > 0 && (
          <>
            <PhilippinesDivider />
            <HomeSection>{t("common:inform.title")}</HomeSection>
            <HomeSubSection>{t("common:inform.subtitle")}</HomeSubSection>
            <ArticlesContainer>
              {articles.map((Element, index) => (
                <Element key={index} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </ArticlesContainer>
          </>
        )}
        {displayAllArticles && (
          <>
            <PhilippinesDivider />
            <GoToAllArticlesContainer>
              <PhilippinesButtonLink to="articles?country=philippines">Tous nos articles</PhilippinesButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </IndexPhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

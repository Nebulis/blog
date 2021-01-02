import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import {
  getLinkLabel,
  getMostRecentArticles,
  isLinkPublished,
  sortByLabel,
} from "../../../components/core/links/links.configuration"
import { HomeSection, HomeSubSection, MainTitleSection } from "../../../components/core/section"
import { ApplicationLink, ButtonLink } from "../../../components/core/links/link"
import philippinesScubaDiving from "../../../images/asia/philippines/scuba-diving.svg"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"
import { filteredUrl } from "../../../components/core/asia/vietnam/vietnam.utils"
import { philippinesLinks } from "../../../components/core/asia/philippines/philippines.links"
import {
  IndexPhilippinesBlogLayout,
  PhilippinesDivider,
  PhilippinesImageAsMedallion,
} from "../../../components/core/asia/philippines/philippines"
import { PageProps } from "gatsby"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation(["asia/philippines/index", "common"])
  const cities = development ? philippinesLinks.cities : philippinesLinks.cities.filter(isLinkPublished)
  const articles = getMostRecentArticles({
    customFilter: (link) => link.country === "philippines" && !filteredUrl.includes(link.url),
    limit: 2,
  })
  return (
    <>
      <SEO title={t("common:country.philippines")} location={location} />
      <IndexPhilippinesBlogLayout page="philippines">
        <MainTitleSection>
          <img src={philippinesScubaDiving} alt="philippines scuba diving" style={{ width: "24px" }} />
          &nbsp;{t("common:country.philippines")}&nbsp;
          <img src={philippinesScubaDiving} alt="philippines scuba diving" style={{ width: "24px" }} />
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
              <ButtonLink to="articles?country=philippines">Tous nos articles</ButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </IndexPhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

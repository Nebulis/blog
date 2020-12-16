import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import {
  getLinkLabel,
  getMostRecentArticles,
  isLinkPublished,
  sortByLabel,
} from "../../../components/core/links/links.configuration"
import { vietnamLinks } from "../../../components/core/asia/vietnam/vietnam.links"
import { HomeSection, HomeSubSection, MainTitleSection } from "../../../components/core/section"
import { ApplicationLink, ButtonLink } from "../../../components/core/links/link"
import vietnamHat from "../../../images/asia/vietnam/hat.svg"
import {
  IndexVietnamBlogLayout,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../components/core/asia/vietnam/vietnam"
import { SouthVietnamCard } from "../../../components/core/asia/vietnam/vietnam.cards"
import {
  ArticlesContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"

const IndexPage = () => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation(["asia/vietnam/index", "common"])
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)
  return (
    <>
      <SEO title="Vietnam" />
      <IndexVietnamBlogLayout page="vietnam">
        <MainTitleSection>
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
          &nbsp;{t("common:country.vietnam")}&nbsp;
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
        </MainTitleSection>
        <VietnamDivider />
        <HomeSection>{t("common:travel.title")}</HomeSection>
        <HomeSubSection>{t("common:travel.subtitle")}</HomeSubSection>
        <MainCardContainer>
          <SouthVietnamCard />
        </MainCardContainer>
        <VietnamDivider />
        <HomeSection>{t("common:tour.title")}</HomeSection>
        <HomeSubSection>{t("common:tour.subtitle")}</HomeSubSection>
        <MedallionContainer>
          {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
            return city.image ? (
              <ApplicationLink to={city.id} key={city.id}>
                <VietnamImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                  {React.createElement(city.image)}
                </VietnamImageAsMedallion>
              </ApplicationLink>
            ) : null
          })}
        </MedallionContainer>
        <VietnamDivider />
        <HomeSection>{t("common:inform.title")}</HomeSection>
        <HomeSubSection>{t("common:inform.subtitle")}</HomeSubSection>
        <ArticlesContainer>
          {getMostRecentArticles({ customFilter: (link) => link.country === "vietnam", limit: 2 }).map(
            (Element, index) => (
              <Element key={index} fluidObject={{ aspectRatio: 4 / 3 }} />
            )
          )}
        </ArticlesContainer>
        {displayAllArticles && (
          <>
            <VietnamDivider />
            <GoToAllArticlesContainer>
              <ButtonLink to="articles?country=vietnam">Tous nos articles</ButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </IndexVietnamBlogLayout>
    </>
  )
}

export default IndexPage

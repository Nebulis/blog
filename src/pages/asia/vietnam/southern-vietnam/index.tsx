import React, { ComponentType, useContext } from "react"
import SEO from "../../../../components/layout/seo"
import vietnamHat from "../../../../images/asia/vietnam/hat.svg"
import {
  VietnamBlogLayout,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../../components/core/asia/vietnam/vietnam"
import { HomeSection, MainTitleSection } from "../../../../components/core/section"
import {
  getLinkLabel,
  isLinkPublished,
  sortByLabel,
  sortByPublishedDate,
} from "../../../../components/core/links/links.configuration"
import { ApplicationLink, ButtonLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { vietnamLinks } from "../../../../components/core/asia/vietnam/vietnam.links"
import {
  CityArticleContainer,
  GoToAllArticlesContainer,
  MainCardContainer,
  MedallionContainer,
} from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/index.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/index.json"
import { CityLink, HighlightLink } from "../../../../components/core/links/links.types"
import { ExtraCardProps } from "../../../../types/shared"
import { SouthVietnamCard } from "../../../../components/core/asia/vietnam/vietnam.cards"
import { filteredId } from "../../../../components/core/asia/vietnam/vietnam.utils"

const namespace = "asia/vietnam/southern-vietnam/index"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const currentPageId = "southern-vietnam"

type HighlightWithCard = HighlightLink & { card: ComponentType<ExtraCardProps> }
const isHighlighWithCard = (highlight: HighlightLink): highlight is HighlightWithCard => !!highlight.card
const getHighlightsFromCity = ({ id, development }: { id: string; development: boolean }): HighlightWithCard[] => {
  const city = vietnamLinks.cities.find((city) => city.id === id)
  if (!city) return []
  const highlights = development ? city.highlights : city.highlights.filter(isLinkPublished)
  return highlights.filter(isHighlighWithCard).filter((link) => !filteredId.includes(link.id))
}

const isNotCurrentPage = (city: CityLink) => city.id !== currentPageId
const IndexPage = () => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development
    ? vietnamLinks.cities.filter(isNotCurrentPage)
    : vietnamLinks.cities.filter(isLinkPublished).filter(isNotCurrentPage)

  const highlights = getHighlightsFromCity({ id: currentPageId, development }).sort(sortByPublishedDate)
  return (
    <>
      <SEO title={t("title")} />
      <VietnamBlogLayout page={currentPageId}>
        <MainTitleSection>
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
          &nbsp;{t("title")}&nbsp;
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
        </MainTitleSection>
        <VietnamDivider className="mb0" />
        <MainCardContainer>
          <SouthVietnamCard />
        </MainCardContainer>
        {cities.length > 0 && (
          <>
            <HomeSection>{t("section1")}</HomeSection>
            <CityArticleContainer>
              {highlights.map(({ card: Card, id }) => (
                <Card key={id} fluidObject={{ aspectRatio: 4 / 3 }} />
              ))}
            </CityArticleContainer>
          </>
        )}
        {cities.length > 0 && (
          <>
            <VietnamDivider />
            <HomeSection>{t("section2")}</HomeSection>
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
          </>
        )}
        {displayAllArticles && (
          <>
            <VietnamDivider />
            <GoToAllArticlesContainer>
              <ButtonLink to="articles?country=vietnam">Tous nos articles</ButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

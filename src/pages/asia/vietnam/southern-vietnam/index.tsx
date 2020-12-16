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
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { vietnamLinks } from "../../../../components/core/asia/vietnam/vietnam.links"
import { CityArticleContainer, MainCardContainer, MedallionContainer } from "../../../../components/layout/layout"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/index.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/index.json"
import { HighlightLink } from "../../../../components/core/links/links.types"
import { ExtraCardProps } from "../../../../types/shared"
import { SouthVietnamCard } from "../../../../components/core/asia/vietnam/vietnam.cards"

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
  return highlights.filter(isHighlighWithCard)
}

const IndexPage = () => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)

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
        <VietnamDivider />
        <MainCardContainer>
          <SouthVietnamCard />
        </MainCardContainer>
        <HomeSection>{t("section1")}</HomeSection>
        <CityArticleContainer>
          {highlights.map(({ card: Card, id }) => (
            <Card key={id} fluidObject={{ aspectRatio: 4 / 3 }} />
          ))}
        </CityArticleContainer>
        <VietnamDivider />
        <HomeSection>{t("section2")}</HomeSection>
        <MedallionContainer>
          {cities
            .filter((city) => city.id !== currentPageId)
            .sort(sortByLabel(i18n.languageCode))
            .map((city) => {
              return city.image ? (
                <ApplicationLink to={city.id} key={city.id}>
                  <VietnamImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                    {React.createElement(city.image)}
                  </VietnamImageAsMedallion>
                </ApplicationLink>
              ) : null
            })}
        </MedallionContainer>
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

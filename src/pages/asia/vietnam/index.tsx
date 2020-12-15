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
import { HomeSection, HomeSubSection } from "../../../components/core/section"
import { ApplicationLink, ButtonLink } from "../../../components/core/links/link"
import { extraLargeStart } from "../../../components/core/variables"
import styled from "@emotion/styled"
import vietnamHat from "../../../images/asia/vietnam/hat.svg"
import {
  IndexVietnamBlogLayout,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../components/core/asia/vietnam/vietnam"
import { VietnamCard } from "../../../components/core/asia/vietnam/vietnam.cards"
import { ArticlesContainer, GoToAllArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { HomeVietnamImage } from "../../../components/images/asia/vietnam/home"

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1rem 20px;

  @media (min-width: ${extraLargeStart}) {
    max-width: 1140px;
  }
`

const IndexPage = () => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)
  return (
    <>
      <SEO title="Vietnam" />
      <IndexVietnamBlogLayout page="vietnam">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
          &nbsp;Vietnam&nbsp;
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
        </h1>
        <VietnamDivider />
        <HomeSection>Voyager</HomeSection>
        <HomeSubSection>En suivant notre aventure ...</HomeSubSection>
        <Container>
          <VietnamCard title="Découverte du Vietnam du Sud" to="discover-south-vietnam">
            <HomeVietnamImage />
          </VietnamCard>
        </Container>
        <VietnamDivider />
        <HomeSection>Parcourir</HomeSection>
        <HomeSubSection>Le pays de région en région ...</HomeSubSection>
        <MedallionContainer>
          {cities.sort(sortByLabel).map((city) => {
            return city.image ? (
              <ApplicationLink to={city.id} key={city.id}>
                <VietnamImageAsMedallion title={getLinkLabel(city.id)}>
                  {React.createElement(city.image)}
                </VietnamImageAsMedallion>
              </ApplicationLink>
            ) : null
          })}
        </MedallionContainer>
        <VietnamDivider />
        <HomeSection>S&apos;informer</HomeSection>
        <HomeSubSection>A travers nos astuces, nos coups de cœur ...</HomeSubSection>
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
              <ButtonLink to="articles?country=vietnam" className="pr3 pl3">
                Tous nos articles
              </ButtonLink>
            </GoToAllArticlesContainer>
          </>
        )}
      </IndexVietnamBlogLayout>
    </>
  )
}

export default IndexPage

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
import { ApplicationLink } from "../../../components/core/links/link"
import { css } from "@emotion/core"
import { extraLargeStart, mediumEnd } from "../../../components/core/variables"
import styled from "@emotion/styled"
import vietnamHat from "../../../images/asia/vietnam/hat.svg"
import {
  IndexVietnamBlogLayout,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../components/core/asia/vietnam/vietnam"
import { VietnamCard } from "../../../components/core/asia/vietnam/vietnam.cards"
import { MainSouthVietnamImage } from "../../../components/images/asia/vietnam/south-vietnam/south-vietnam-main"
import { ArticlesContainer, MedallionContainer } from "../../../components/layout/layout"

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
  const { development } = useContext(ApplicationContext)
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
            <MainSouthVietnamImage lol />
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
      </IndexVietnamBlogLayout>
    </>
  )
}

export default IndexPage

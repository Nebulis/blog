import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { ApplicationContext } from "../../../components/application"
import {
  getLinkLabel,
  getThreeMoreRecentArticles,
  isLinkPublished,
  sortByLabel,
} from "../../../components/core/links/links.configuration"
import { vietnamLinks } from "../../../components/core/asia/vietnam/vietnam.links"
import { HomeSection, HomeSubSection } from "../../../components/core/section"
import { ApplicationLink } from "../../../components/core/links/link"
import { css } from "@emotion/core"
import { extraLargeStart, maxWidth, mediumEnd, mobileEnd } from "../../../components/core/variables"
import styled from "@emotion/styled"
import vietnamHat from "../../../images/asia/vietnam/hat.svg"
import {
  VietnamBlogLayout,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../components/core/asia/vietnam/vietnam"
import { VietnamCard } from "../../../components/core/asia/vietnam/vietnam.cards"
import { MainSouthVietnamImage } from "../../../components/images/asia/vietnam/south-vietnam/south-vietnam-main"

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;

  @media (min-width: ${extraLargeStart}) {
    padding: 0;
    max-width: 1140px;
  }
`

const ArticlesContainer = styled(Container)`
  max-width: ${maxWidth}px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  .quote-container {
    display: none;
  }
  @media (max-width: ${mediumEnd}) {
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;
    .gatsby-image-wrapper {
      height: 180px;
    }
  }
  @media (max-width: ${mobileEnd}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .card .tags span,
  .card .title {
    font-size: 0.8rem;
  }
  .gatsby-image-wrapper {
    height: 200px;
  }
`

const IndexPage = () => {
  const { development } = useContext(ApplicationContext)
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)
  return (
    <>
      <SEO title="Vietnam" />
      <VietnamBlogLayout page="vietnam">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
          &nbsp;Vietnam&nbsp;
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
        </h1>
        <VietnamDivider />
        <h2
          className="tc ttu mb2-l"
          css={css`
            letter-spacing: 5px;
            font-family: auto;
            @media (max-width: ${mediumEnd}) {
              margin-bottom: 1rem;
            }
          `}
        >
          Voyager
        </h2>
        <HomeSubSection>En suivant notre aventure ...</HomeSubSection>
        <Container>
          <VietnamCard title="Découverte du Vietnam du Sud" to="discover-south-vietnam" tags={["asia", "vietnam"]}>
            <MainSouthVietnamImage />
          </VietnamCard>
        </Container>
        <VietnamDivider />
        <HomeSection>Parcourir</HomeSection>
        <HomeSubSection>Le pays de région en région ...</HomeSubSection>
        <div
          className="flex justify-center flex-wrap pt3 pb3 mb3 mt3"
          css={css`
            & > * {
              margin-left: 5px;
              margin-right: 5px;
            }
          `}
        >
          {cities.sort(sortByLabel).map((city) => {
            return city.image ? (
              <ApplicationLink to={city.id} key={city.id}>
                <VietnamImageAsMedallion title={getLinkLabel(city.id)}>
                  {React.createElement(city.image)}
                </VietnamImageAsMedallion>
              </ApplicationLink>
            ) : null
          })}
        </div>
        <VietnamDivider />
        <HomeSection>S&apos;informer</HomeSection>
        <HomeSubSection>A travers nos astuces, nos coups de cœur ...</HomeSubSection>
        <ArticlesContainer>
          {getThreeMoreRecentArticles().map((Element, index) => (
            <Element key={index} />
          ))}
        </ArticlesContainer>
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import {
  getLinkLabel,
  getThreeMoreRecentArticles,
  isLinkPublished,
  sortByLabel,
} from "../../../components/core/links/links.configuration"
import { ApplicationLink } from "../../../components/core/links/link"
import { ApplicationContext } from "../../../components/application"
import { IndexJapanBlogLayout, JapanDivider } from "../../../components/core/japan/japan"
import { JapanImageAsMedallion } from "../../../components/core/japan/japan.images"
import { japanLinks } from "../../../components/core/japan/japan.links"
import { JapanCard } from "../../../components/core/japan/japan.cards"
import { HomeSection, HomeSubSection } from "../../../components/core/section"
import { extraLargeStart, maxWidth, mediumEnd, mobileEnd } from "../../../components/core/variables"

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
  }
  @media (max-width: ${mobileEnd}) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
  .card .tags span,
  .card .title {
    font-size: 0.8rem;
  }
`

const IndexPage = () => {
  const { development } = useContext(ApplicationContext)
  const cities = development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished)
  const articleStyle = css`
    .gatsby-image-wrapper {
      height: 200px;
    }
    @media (max-width: ${mediumEnd}) {
      .gatsby-image-wrapper {
        height: 180px;
      }
    }
  `
  return (
    <>
      <SEO title="Japon" />
      <IndexJapanBlogLayout page="japan">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;Japon&nbsp;
          <img src={cherryBlossom} alt="cherry blossom" />
        </h1>
        <JapanDivider />
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
          <JapanCard title="Le Japon au printemps" to="spring-in-japan" tags={["asia", "japan"]}>
            <MainImage />
          </JapanCard>
        </Container>
        <JapanDivider />
        <HomeSection>Parcourir</HomeSection>
        <HomeSubSection>Le pays de ville en ville ...</HomeSubSection>
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
                <JapanImageAsMedallion title={getLinkLabel(city.id)}>
                  {React.createElement(city.image)}
                </JapanImageAsMedallion>
              </ApplicationLink>
            ) : null
          })}
        </div>
        <JapanDivider />
        {development && (
          <>
            <HomeSection>S&apos;informer</HomeSection>
            <HomeSubSection>A travers nos astuces, nos coups de cœur ...</HomeSubSection>
            <ArticlesContainer css={articleStyle}>
              {getThreeMoreRecentArticles().map((Element, index) => (
                <Element key={index} />
              ))}
            </ArticlesContainer>
          </>
        )}
      </IndexJapanBlogLayout>
    </>
  )
}

export default IndexPage

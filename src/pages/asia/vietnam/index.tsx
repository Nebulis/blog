import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { BlogLayout } from "../../../components/layout/layout"
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
import { ImageAsMedallion } from "../../../components/images/layout"
import { Divider } from "../../../components/core/divider"
import { extraLargeStart, maxWidth, mediumEnd, mobileEnd } from "../../../components/core/variables"
import styled from "@emotion/styled"

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
      <SEO title="main" />
      <BlogLayout page="asia">
        <h1 className="tc ttu flex items-center justify-center">Vietnam</h1>
        <Divider />
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
        <Divider />
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
                <ImageAsMedallion title={getLinkLabel(city.id)}>{React.createElement(city.image)}</ImageAsMedallion>
              </ApplicationLink>
            ) : null
          })}
        </div>
        <Divider />
        {development && (
          <>
            <HomeSection>S&apos;informer</HomeSection>
            <HomeSubSection>A travers nos astuces, nos coups de cœur ...</HomeSubSection>
            <ArticlesContainer>
              {getThreeMoreRecentArticles().map((Element, index) => (
                <Element key={index} />
              ))}
            </ArticlesContainer>
          </>
        )}
      </BlogLayout>
    </>
  )
}

export default IndexPage

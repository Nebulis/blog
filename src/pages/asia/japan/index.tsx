import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { getLinkLabel, getArticles, isLinkPublished } from "../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../components/core/links/link"
import { ApplicationContext } from "../../../components/application"
import { IndexJapanBlogLayout, JapanDivider } from "../../../components/core/japan/japan"
import { JapanImageAsMedallion } from "../../../components/core/japan/japan.images"
import { japanLinks } from "../../../components/core/japan/japan.links"
import { JapanCard } from "../../../components/core/japan/japan.cards"
import { HomeSection, HomeSubSection } from "../../../components/core/section"
import { extraLargeStart, mediumEnd } from "../../../components/core/variables"
import { ArticlesContainer, MedallionContainer } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n-hook"
import { PageProps } from "gatsby"
import { sortByLabel } from "../../../components/core/links/links.utils"
import { SharedJapanImages } from "../../../components/images/asia/japan/shared-japan-images"

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1rem 20px;

  @media (min-width: ${extraLargeStart}) {
    max-width: 1140px;
  }
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { i18n } = useCustomTranslation()
  const cities = development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished)
  return (
    <>
      <SEO title="Japon" location={location} />
      <IndexJapanBlogLayout page="japan" location={location}>
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
        <MedallionContainer>
          {cities.sort(sortByLabel(i18n.languageCode)).map((city) => {
            return city.imageProps?.image ? (
              <ApplicationLink to={city.id} key={city.id}>
                <JapanImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                  {jsx(SharedJapanImages, city.imageProps)}
                </JapanImageAsMedallion>
              </ApplicationLink>
            ) : null
          })}
        </MedallionContainer>
        <JapanDivider />
        {development && (
          <>
            <HomeSection>S&apos;informer</HomeSection>
            <HomeSubSection>A travers nos astuces, nos coups de cœur ...</HomeSubSection>
            <ArticlesContainer>
              {getArticles({
                development,
                tags: ["japan"],
                kind: "highlight",
              }).map(({ card: Card }, index) =>
                Card ? <Card key={index} fluidObject={{ aspectRatio: 4 / 3 }} /> : null
              )}
            </ArticlesContainer>
          </>
        )}
      </IndexJapanBlogLayout>
    </>
  )
}

export default IndexPage

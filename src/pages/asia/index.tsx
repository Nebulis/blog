import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { IndexBlogLayout, MedallionContainer } from "../../components/layout/layout"
import { ApplicationLink, ButtonLink } from "../../components/core/links/link"
import { ImageAsMedallion } from "../../components/images/layout"
import { asiaLinks } from "../../components/core/asia/asia.links"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../components/core/links/links.configuration"
import { ApplicationContext } from "../../components/application"
import { PrimaryDivider } from "../../components/core/divider"
import { Quote } from "../../components/core/quote"
import styled from "@emotion/styled"
import { HomeSection, HomeSubSection } from "../../components/core/section"

const CustomQuote = styled(Quote)`
  font-size: 20px;
  blockquote {
    font-family: "Courgette", serif;
  }
`

const IndexPage = () => {
  const { development, displayAllArticles } = useContext(ApplicationContext)
  const countries = development ? asiaLinks.countries : asiaLinks.countries.filter(isLinkPublished)
  return (
    <>
      <SEO title="Asia" />
      <IndexBlogLayout page="asia">
        <h1 className="tc ttu">Asie</h1>
        <PrimaryDivider />
        <div>
          <CustomQuote>
            Le continent asiatique est un continent que nous aimons particulièrement. Nous vivons depuis 2016 à
            Singapour et de ce fait nous avons pu faire de nombreux voyages dans les régions environnantes.
          </CustomQuote>
          <CustomQuote position="none">
            Farniente sur des plages paradisiaques, visite de temples traditionnels, trek dans la jungle ou simple
            promenade à la découverte de paysages à couper le souffle, des grandes villes au petit village, en apprenant les traditions de certaines tribus ou en observant avec discrétion les animaux sauvages … Tant de pays qui
            incitent à l’évasion et font rêver.
          </CustomQuote>
          <CustomQuote position="none">Retrouvez ci-dessous les plus belles perles d’Asie.</CustomQuote>
        </div>
        <PrimaryDivider />

        <HomeSection>S&apos;inspirer</HomeSection>
        <HomeSubSection>D&apos;après nos récits et nos conseils ...</HomeSubSection>
        <MedallionContainer>
          {countries.sort(sortByLabel).map((country) =>
            country.image ? (
              <ApplicationLink to={country.id} key={country.id}>
                <ImageAsMedallion title={getLinkLabel(country.id)}>
                  {React.createElement(country.image)}
                </ImageAsMedallion>
              </ApplicationLink>
            ) : null
          )}
        </MedallionContainer>
        {displayAllArticles && (
          <>
            <PrimaryDivider />
            <div className="tc mt3 mb3">
              <ButtonLink to="articles?continent=asia" className="pr3 pl3">
                Tous nos articles
              </ButtonLink>
            </div>
          </>
        )}
      </IndexBlogLayout>
    </>
  )
}

export default IndexPage

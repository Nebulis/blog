import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import vietnamHat from "../../../../images/asia/vietnam/hat.svg"
import {
  VietnamBlogLayout,
  VietnamDivider,
  VietnamImageAsMedallion,
} from "../../../../components/core/asia/vietnam/vietnam"
import { largeStart, mediumEnd, smallEnd } from "../../../../components/core/variables"
import { css } from "@emotion/core"
import { HomeSection } from "../../../../components/core/section"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../../../components/core/links/links.configuration"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { vietnamLinks } from "../../../../components/core/asia/vietnam/vietnam.links"
import { VietnamMap } from "../../../../components/core/asia/vietnam/vietnam-map"
import { CuChiTunnelsCard } from "../../../../components/core/asia/vietnam/vietnam.cards"
import { MedallionContainer } from "../../../../components/layout/layout"

const IndexPage = () => {
  const { development } = useContext(ApplicationContext)
  const cities = development ? vietnamLinks.cities : vietnamLinks.cities.filter(isLinkPublished)
  return (
    <>
      <SEO title="Vietnam du Sud" />
      <VietnamBlogLayout page="south-vietnam">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={vietnamHat} alt="vietnam hat" style={{ width: "24px" }} />
          &nbsp;Vietnam du Sud&nbsp;
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
          Nos visites
        </h2>
        <div
          css={css`
            padding: 1rem 20px;
            @media (min-width: ${largeStart}) {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
          `}
        >
          <CuChiTunnelsCard />
        </div>
        <VietnamDivider />
        <div
          className="overflow-hidden tc"
          css={css`
            @media (max-width: ${smallEnd}) {
              display: none;
            }
          `}
        >
          <VietnamMap />
        </div>
        <VietnamDivider />
        <HomeSection>Découvre le Vietnam</HomeSection>
        <MedallionContainer>
          {cities
            .filter((city) => city.id !== "south-vietnam")
            .sort(sortByLabel)
            .map((city) => {
              return city.image ? (
                <ApplicationLink to={city.id} key={city.id}>
                  <VietnamImageAsMedallion title={getLinkLabel(city.id)}>
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

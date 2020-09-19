import React, { useContext } from "react"
import SEO from "../../components/layout/seo"
import { BlogLayout } from "../../components/layout/layout"
import { ApplicationLink } from "../../components/core/links/link"
import { ImageAsMedallion } from "../../components/images/layout"
import { asiaLinks } from "../../components/core/asia/asia.links"
import { getLinkLabel, isLinkPublished, sortByLabel } from "../../components/core/links/links.configuration"
import { ApplicationContext } from "../../components/application"
import { css } from "@emotion/core"

const IndexPage = () => {
  const { development } = useContext(ApplicationContext)
  const countries = development ? asiaLinks.countries : asiaLinks.countries.filter(isLinkPublished)
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="asia">
        <h1 className="tc ttu">Asie</h1>
        <div
          className="flex justify-center flex-wrap pt3 pb3 mb3"
          css={css`
            & > * {
              margin-left: 10px;
              margin-right: 10px;
            }
          `}
        >
          {countries.sort(sortByLabel).map((country) =>
            country.image ? (
              <ApplicationLink to={country.id} key={country.id}>
                <ImageAsMedallion title={getLinkLabel(country.id)}>
                  {React.createElement(country.image)}
                </ImageAsMedallion>
              </ApplicationLink>
            ) : null
          )}
        </div>
      </BlogLayout>
    </>
  )
}

export default IndexPage

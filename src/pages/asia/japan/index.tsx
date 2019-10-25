import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { JapanImageAsMedallion } from "../../../components/images/layout"
import { css } from "@emotion/core"
import { JapanDivider } from "../../../components/core/divider"
import { JapanCard } from "../../../components/card"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import { SpringInJapanQuote } from "../../../components/core/japan"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"
import { getLinkLabel, isLinkPublished } from "../../../components/core/links/links"
import { japanLinks } from "../../../components/core/links/japan.links"
import { ApplicationLink } from "../../../components/core/links/link"
import { ApplicationContext } from "../../../components/application"
import { BlogLayout } from "../../../components/layout/blog"

const IndexPage = () => {
  const context = useContext(ApplicationContext)
  const cities = context.development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished).sort()
  return (
    <>
      <SEO title="japan" />
      <BlogLayout page="japan">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;Japon&nbsp;
          <img src={cherryBlossom} alt="cherry blossom" />
        </h1>
        <JapanDivider />
        <h2 className="tc ttu">Notre voyage au Japon</h2>
        <JapanCard title="Le Japon au printemps" to="spring-in-japan">
          <MainImage />
          <SpringInJapanQuote />
        </JapanCard>
        <JapanDivider />
        {cities.length > 0 && (
          <>
            <h2 className="tc ttu">Découvre le Japon</h2>
            <div
              className="flex justify-center flex-wrap pt3 pb3 mb3"
              css={css`
                & > * {
                  margin-left: 10px;
                  margin-right: 10px;
                }
              `}
            >
              {cities.map(city => (
                <ApplicationLink to={city.id} key={city.id}>
                  <JapanImageAsMedallion title={getLinkLabel(city.id)}>
                    {React.createElement(city.image)}
                  </JapanImageAsMedallion>
                </ApplicationLink>
              ))}
            </div>
            <JapanDivider />
          </>
        )}
      </BlogLayout>
    </>
  )
}

export default IndexPage

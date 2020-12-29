import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { css } from "@emotion/core"
import cherryBlossom from "../../../../images/asia/japan/cherry-blossom.png"
import { getLinkLabel, isLinkPublished } from "../../../../components/core/links/links.configuration"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { BlogLayout } from "../../../../components/layout/layout"
import { extraLargeStart, largeStart } from "../../../../components/core/variables"
import { JapanDivider } from "../../../../components/core/japan/japan"
import { JapanImageAsMedallion } from "../../../../components/core/japan/japan.images"
import { ADayInTokyoCard, HamarikyuGardenCard, SensojiCard } from "../../../../components/core/japan/japan.cards"
import { japanLinks } from "../../../../components/core/japan/japan.links"
import { useCustomTranslation } from "../../../../i18n"

const IndexPage = () => {
  const context = useContext(ApplicationContext)
  const { i18n } = useCustomTranslation()
  const cities = (context.development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished).sort()).filter(
    (city) => city.id !== "tokyo"
  )
  return (
    <>
      <SEO title="japan" />
      <BlogLayout page="tokyo">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;Tokyo&nbsp;
          <img src={cherryBlossom} alt="cherry blossom" />
        </h1>
        <JapanDivider />
        <div
          css={css`
            @media (min-width: ${largeStart}) {
              display: grid;
              grid-template-columns: 1fr 1fr;
              .gatsby-image-wrapper {
                height: 325px;
              }
            }
            @media (min-width: ${extraLargeStart}) {
              .gatsby-image-wrapper {
                height: 391px;
              }
            }
          `}
        >
          <ADayInTokyoCard />
          <HamarikyuGardenCard />
          <SensojiCard />
        </div>
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
              {cities.map((city) => {
                return city.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <JapanImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {React.createElement(city.image)}
                    </JapanImageAsMedallion>
                  </ApplicationLink>
                ) : null
              })}
            </div>
            <JapanDivider />
          </>
        )}
      </BlogLayout>
    </>
  )
}

export default IndexPage

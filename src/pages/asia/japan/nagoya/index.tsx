import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { css, jsx } from "@emotion/core"
import cherryBlossom from "../../../../images/asia/japan/cherry-blossom.png"
import { getLinkLabel, isLinkPublished } from "../../../../components/core/links/links.utils"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { BlogLayout } from "../../../../components/layout/layout"
import { extraLargeStart, largeStart } from "../../../../components/core/variables"
import { NagoyaCastleCard, ToganjiCard } from "../../../../components/core/japan/japan.cards"
import { JapanDivider } from "../../../../components/core/japan/japan"
import { JapanImageAsMedallion } from "../../../../components/core/japan/japan.images"
import { japanLinks } from "../../../../components/core/japan/japan.links"
import { useCustomTranslation } from "../../../../i18n"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const context = useContext(ApplicationContext)
  const { i18n } = useCustomTranslation()
  const cities = (context.development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished).sort()).filter(
    (city) => city.id !== "nagoya"
  )
  return (
    <>
      <SEO title="japan" location={location} />
      <BlogLayout page="nagoya" location={location}>
        <h1 className="tc ttu flex items-center justify-center">
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;Nagoya&nbsp;
          <img src={cherryBlossom} alt="cherry blossom" />
        </h1>
        <JapanDivider />
        <div
          css={css`
            @media (min-width: ${largeStart}) {
              display: grid;
              grid-template-columns: 1fr 1fr;
              .gatsby-image-wrapper {
                height: 333px;
              }
            }
            @media (min-width: ${extraLargeStart}) {
              .gatsby-image-wrapper {
                height: 400px;
              }
            }
          `}
        >
          <NagoyaCastleCard />
          <ToganjiCard />
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
                return city.imageProps?.image ? (
                  <ApplicationLink to={city.id} key={city.id}>
                    <JapanImageAsMedallion title={getLinkLabel(i18n.languageCode)(city.id)}>
                      {jsx(SharedJapanImages, city.imageProps)}
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

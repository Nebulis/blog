import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { JapanImageAsMedallion } from "../../../../components/images/layout"
import { css } from "@emotion/core"
import { JapanDivider } from "../../../../components/core/divider"
import { ArashiyamaCard, DaigojiCard, FushimiInariTaishaCard, KinkakujiCard } from "../../../../components/core/japan"
import cherryBlossom from "../../../../images/asia/japan/cherry-blossom.png"
import { getLinkLabel, isLinkPublished } from "../../../../components/core/links/links"
import { japanLinks } from "../../../../components/core/links/japan.links"
import { ApplicationLink } from "../../../../components/core/links/link"
import { ApplicationContext } from "../../../../components/application"
import { BlogLayout } from "../../../../components/layout/layout"
import { extraLargeStart, largeStart } from "../../../../components/core/variables"

const IndexPage = () => {
  const context = useContext(ApplicationContext)
  const cities = (context.development ? japanLinks.cities : japanLinks.cities.filter(isLinkPublished).sort()).filter(
    city => city.id !== "kyoto"
  )
  return (
    <>
      <SEO title="japan" />
      <BlogLayout page="kyoto">
        <h1 className="tc ttu flex items-center justify-center">
          <img src={cherryBlossom} alt="cherry blossom" />
          &nbsp;Kyoto&nbsp;
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
          <FushimiInariTaishaCard />
          <ArashiyamaCard />
          <KinkakujiCard />
          <DaigojiCard />
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
              {cities.map(city => {
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
          </>
        )}
      </BlogLayout>
    </>
  )
}

export default IndexPage

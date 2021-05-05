import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import {
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  Where,
  WhereToHave,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  ImageAsPortraitOnTheLeft,
  ImageAsPortraitOnTheRight,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/himeji/himeji-castle.json"
import translationEn from "../../../../locales/en/asia/japan/himeji/himeji-castle.json"
import HomeImgUrl from "../../../../images/asia/japan/carousel-japan-2.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import { HimejiCastleImages } from "../../../../components/images/asia/japan/himeji/himeji-castle-images"
import HimejiCastleMap from "../../../../images/asia/japan/himeji/castle/himeji-castle-map.jpg"
import { MapContainer } from "../../../../components/layout/layout"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { buildPixabayUrl } from "../../../../utils"
import { css } from "@emotion/react"
import { mediumStart } from "../../../../components/core/variables"

const namespace = "asia/japan/himeji/himeji-castle"
const id = "himeji-castle"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transport-japan").published
  const foodLinkPublished = development || getLink("food-japan").published
  return (
    <>
      <SEO
        title={title}
        fullTitle={t("full-title")}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <JapanBlogLayout page={id} location={location}>
        <JapanTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardJapanImages image="himejiCastle" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Where title={t("where.title")}>
          <p>{t("where.part1")}</p>
        </Where>
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
          <p>{t("when.part3")}</p>
        </When>
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <ul>
            <li>{t("how.part2")}</li>
            <li>{t("how.part3")}</li>
            <li>{t("how.part4")}</li>
          </ul>
          {transportLinkPublished && <p>{t("how.part5")}</p>}
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <ul>
            <li>{t("how-much.part2")}</li>
            <li>{t("how-much.part3")}</li>
            <li>{t("how-much.part4")}</li>
            <li>{t("how-much.part5")}</li>
          </ul>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <ImageAsPortrait
            css={css`
              max-width: 50%;
              @media (min-width: ${mediumStart}) {
                max-width: 40%;
              }
            `}
            className="no-reset-image"
          >
            <HimejiCastleImages image="gyuKaku" />
          </ImageAsPortrait>
          {foodLinkPublished && <p>{t("where-to-have.part3")}</p>}
        </WhereToHave>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
              <ImageAsLandscape>
                <HimejiCastleImages image="visit" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <ImageAsLandscape>
                <HimejiCastleImages image="history" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <GroupOfImages>
                <ImageAsPortrait>
                  <HimejiCastleImages image="garden" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <HimejiCastleImages image="garden2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <ImageAsLandscape>
                <HimejiCastleImages image="garden3" />
              </ImageAsLandscape>
              <p>{t("visit2.part6")}</p>
              <ImageAsLandscape>
                <HimejiCastleImages image="garden4" />
              </ImageAsLandscape>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <p>{t("visit2.part9")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HimejiCastleImages image="garden5" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <HimejiCastleImages image="garden6" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <HimejiCastleImages image="garden7" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <MapContainer>
                <img src={HimejiCastleMap} alt="Himeji Castle Map" />
              </MapContainer>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <HimejiCastleImages image="maze" />
                  <HimejiCastleImages image="maze2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <HimejiCastleImages image="maze3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <ImageAsLandscape>
                <HimejiCastleImages image="maze4" />
              </ImageAsLandscape>
              <p>{t("visit3.part7")}</p>
              <p>{t("visit3.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HimejiCastleImages image="maze5" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <HimejiCastleImages image="maze6" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <p>{t("visit3.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HimejiCastleImages image="maze7" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <HimejiCastleImages image="maze8" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <HimejiCastleImages image="maze9" />
                </ImageAsLandscape>
                <ImageAsPortraitOnTheLeft>
                  <HimejiCastleImages image="maze10" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <HimejiCastleImages image="maze11" />
                </ImageAsPortraitOnTheRight>
                <ImageAsLandscape>
                  <HimejiCastleImages image="maze12" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit4.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <p>{t("visit4.part3")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <HimejiCastleImages image="inside" />
                </ImageAsPortrait>
                <ImageAsLandscapeOnTheLeft>
                  <HimejiCastleImages image="inside2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <HimejiCastleImages image="inside3" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit4.part4")}</p>
              <p>{t("visit4.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape
                  credit={
                    <ExternalLinkNotUnderlined href="https://fr.wikipedia.org/wiki/Ch%C3%A2teau_de_Himeji#/media/Fichier:Inside_the_Main_Tower_(2856041800).jpg">
                      wikipedia
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <HimejiCastleImages image="inside4" />
                </ImageAsLandscape>
                <ImageAsPortrait
                  credit={
                    <ExternalLinkNotUnderlined href="https://en.wikipedia.org/wiki/File:Himeji_Castle_No09_044.jpg">
                      wikipedia
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <HimejiCastleImages image="inside5" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit4.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HimejiCastleImages image="inside6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <HimejiCastleImages image="inside7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <HimejiCastleImages image="inside8" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HimejiCastleImages image="inside9" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <HimejiCastleImages image="inside10" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <HimejiCastleImages image="inside11" />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit5.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <p>{t("visit5.part4")}</p>
              <p>{t("visit5.part5")}</p>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/jackmac34-483877")}>
                    jackmac34
                  </ExternalLinkNotUnderlined>
                }
              >
                <HimejiCastleImages image="kokoEn" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit6.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <HimejiCastleImages image="bonus" />
                  <HimejiCastleImages image="bonus2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSize
                  css={css`
                    @media (min-width: ${mediumStart}) {
                      max-width: 80%;
                    }
                  `}
                >
                  <HimejiCastleImages image="bonus3" />
                  <HimejiCastleImages image="bonus4" />
                </TwoImagesSameSize>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <Divider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <HimejiCastleImages image="cardFr1" key="cardFr1" />,
                    <HimejiCastleImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <HimejiCastleImages image="cardEn1" key="cardEn1" />,
                    <HimejiCastleImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

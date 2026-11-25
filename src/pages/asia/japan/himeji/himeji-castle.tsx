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
  R2Image,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/asia/japan/japan"
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
import HimejiCastleMap from "../../../../images/asia/japan/himeji/castle/himeji-castle-map.jpg"
import cardFr1 from "../../../../images/asia/japan/himeji/castle/card-fr1.jpg"
import cardFr2 from "../../../../images/asia/japan/himeji/castle/card-fr2.jpg"
import cardEn1 from "../../../../images/asia/japan/himeji/castle/card-en1.jpg"
import cardEn2 from "../../../../images/asia/japan/himeji/castle/card-en2.jpg"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { buildPixabayUrl } from "../../../../utils"
import { css } from "@emotion/react"
import { mediumStart } from "../../../../components/core/variables"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import richmondHotel from "../../../../images/asia/japan/himeji/castle/richmond-hotel.jpg"
import montereyHotel from "../../../../images/asia/japan/himeji/castle/monterey-hotel.jpg"
import daiwaRoynetHotel from "../../../../images/asia/japan/himeji/castle/daiwa-roynet-hotel.jpg"

const namespace = "asia/japan/himeji/himeji-castle"
const id = "himeji-castle"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transports-in-japan").published
  const foodLinkPublished = development || getLink("food-in-japan").published
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
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/daiwa-roynet-himeji"
              title="Daiwa Roynet Hotel Himeji"
              image={daiwaRoynetHotel}
              note="9,0"
              price={59}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/richmond-hotel-himeji"
              title="Richmond Hotel Himeji"
              image={richmondHotel}
              note="8,8"
              price={64}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/hoterumontoreji-lu"
              title="Hotel Monterey Himeji"
              image={montereyHotel}
              note="8,9"
              price={115}
              people={2}
              kind="hotel"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part3")}</BookingWarning>
          <p>{t("where-to-stay.part4")}</p>
          <p>{t("where-to-stay.part5")}</p>
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
            <R2Image namespace={namespace} name="himeji-yakiniku-bbq-spread" aspectRatio={0.71} />
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
                <R2Image namespace={namespace} name="himeji-castle-keep-sky" aspectRatio={4 / 3} />
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
                <R2Image namespace={namespace} name="himeji-castle-traditional-costume" aspectRatio={1.6} />
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
                  <R2Image namespace={namespace} name="himeji-castle-stone-moat" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-moat-boat" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="himeji-castle-cherry-blossoms" aspectRatio={4 / 3} />
              </ImageAsLandscape>
              <p>{t("visit2.part6")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="himeji-castle-park-gardens" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <p>{t("visit2.part9")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-spring-sky" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="himeji-castle-sakura-branches" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="himeji-castle-cherry-blooms" aspectRatio={3 / 2} />
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
                  <R2Image namespace={namespace} name="himeji-castle-wooden-entrance" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="himeji-castle-sakura-tree" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-gate-blossoms" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="himeji-castle-stone-walls" aspectRatio={4 / 3} />
              </ImageAsLandscape>
              <p>{t("visit3.part7")}</p>
              <p>{t("visit3.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-roof-tiles" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="himeji-castle-bonsai-pine" aspectRatio={3 / 4} />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <p>{t("visit3.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-cherry-blossom-closeup" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="himeji-cherry-blossom-petals" aspectRatio={3 / 2} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-weeping-cherry" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsPortraitOnTheLeft>
                  <R2Image namespace={namespace} name="himeji-castle-pink-sakura" aspectRatio={3 / 4} />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <R2Image namespace={namespace} name="himeji-castle-cherry-blossoms-2" aspectRatio={3 / 4} />
                </ImageAsPortraitOnTheRight>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-cherry-blossom" aspectRatio={1.36} />
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
                  <R2Image namespace={namespace} name="himeji-castle-shachihoko-sculpture" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="himeji-castle-city-view" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="himeji-castle-walls-cityscape" aspectRatio={4 / 3} />
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
                  <R2Image
                    namespace={namespace}
                    name="himeji-castle-wooden-corridor"
                    aspectRatio={4 / 3}
                    breakpoints={[1200, 600]}
                  />
                </ImageAsLandscape>
                <ImageAsPortrait
                  credit={
                    <ExternalLinkNotUnderlined href="https://en.wikipedia.org/wiki/File:Himeji_Castle_No09_044.jpg">
                      wikipedia
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <R2Image namespace={namespace} name="himeji-castle-tatami-room" aspectRatio={2 / 3} />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit4.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-architecture-facade" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-courtyard-view" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-historic-gateway" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-keep-architecture" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="himeji-castle-roof-details" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="himeji-castle-courtyard-roofs" aspectRatio={3 / 4} />
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
                <R2Image namespace={namespace} name="himeji-castle-kokoen-garden" aspectRatio={1.59} />
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
                <TwoImagesSameSize>
                  <R2Image namespace={namespace} name="himeji-market-stalls-plaza" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="himeji-castle-food-market" aspectRatio={3 / 4} />
                </TwoImagesSameSize>
                <TwoImagesSameSize
                  css={css`
                    @media (min-width: ${mediumStart}) {
                      max-width: 80%;
                    }
                  `}
                >
                  <R2Image namespace={namespace} name="himeji-street-food-vendor" aspectRatio={0.776} />
                  <R2Image namespace={namespace} name="himeji-festival-traditional-dancers" aspectRatio={0.727} />
                </TwoImagesSameSize>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
        <Divider />
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
          <p>{t("love")}</p>
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Le Château de Himeji" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Le Château de Himeji" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: Himeji Castle" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: Himeji Castle" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

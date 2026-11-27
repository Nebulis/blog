import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  R2Image,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import {
  Bonus,
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
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/asia/japan/japan"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/nagoya/nagoya-castle.json"
import translationEn from "../../../../locales/en/asia/japan/nagoya/nagoya-castle.json"
import HomeImgUrl from "../../../../images/asia/japan/nagoya/castle/nagoya-castle-main.jpg"
import NagoyaCastleMap from "../../../../images/asia/japan/nagoya/castle/nagoya-castle-map.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { ApplicationContext } from "../../../../components/application"
import { getLink } from "../../../../components/core/links/links.utils"
import { Comments } from "../../../../components/core/comments"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import apaHotel from "../../../../images/asia/japan/nagoya/castle/apa-hotel-sakae-kita.jpg"
import androoms from "../../../../images/asia/japan/nagoya/castle/hotel-androoms-nagoya-sakae.jpg"
import kuretake from "../../../../images/asia/japan/nagoya/castle/kuretake-inn-nagoya-hisayaodori.jpg"
import cardFr1 from "../../../../images/asia/japan/nagoya/castle/card-fr1.jpg"
import cardFr2 from "../../../../images/asia/japan/nagoya/castle/card-fr2.jpg"
import cardEn1 from "../../../../images/asia/japan/nagoya/castle/card-en1.jpg"
import cardEn2 from "../../../../images/asia/japan/nagoya/castle/card-en2.jpg"

const namespace = "asia/japan/nagoya/nagoya-castle"
const id = "nagoya-castle"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transports-in-japan").published

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
          <SharedCardJapanImages image="nagoyaCastle" />
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
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/kuretake-inn-nagoya-hisayaodori"
              title="Kuretake Inn Nagoya Hisayaodori"
              image={kuretake}
              note="8,3"
              price={53}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/apahoteru-ming-gu-wu-rong-bei"
              title="APA Hotel Nagoya Sakae Kita"
              image={apaHotel}
              note="8,2"
              price={70}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/androoms-nagoya-sakae"
              title="Hotel androoms Nagoya Sakae"
              image={androoms}
              note="8,8"
              price={96}
              people={2}
              kind="hotel"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part3")}</BookingWarning>
          <p>{t("where-to-stay.part4")}</p>
        </WhereToStay>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <ImageAsLandscape>
            <R2Image namespace={namespace} name="nagoya-yakiniku-barbecue-table" aspectRatio={4 / 3} />
          </ImageAsLandscape>
        </WhereToHave>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="nagoya-castle-main-keep-skyline" aspectRatio={1.36} />
              </ImageAsLandscape>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <p>{t("visit1.part7")}</p>
              <p>{t("visit1.part8")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-moat-sakura-blossoms" aspectRatio={1.97} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="nagoya-castle-dry-moat-lawn" aspectRatio={1.285} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="nagoya-castle-wall-sakura" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="nagoya-castle-turret-manicured-bushes" aspectRatio={0.815} />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part2")}</p>
              <MapContainer className="mb2">
                <img src={NagoyaCastleMap} alt="Nagoya Castle Map" />
              </MapContainer>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="nagoya-castle-turret-stone-wall" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="nagoya-castle-moat-stone-walls" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="nagoya-castle-stone-wall-turret" aspectRatio={0.78} />
                  <R2Image namespace={namespace} name="nagoya-castle-rampart-hedge-pathway" aspectRatio={0.78} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-turret-cherry-blossoms" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-honmaru-palace-roof" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-honmaru-palace-exterior" aspectRatio={1.23} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>

              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://www.nagoyajo.city.nagoya.jp/en/nagoyajo/honmarugoten/about/">
                    nagoyajo
                  </ExternalLinkNotUnderlined>
                }
              >
                <R2Image namespace={namespace} name="nagoya-castle-honmaru-palace-gold-screen" aspectRatio={1.23} />
              </ImageAsPortrait>
              <p>{t("visit3.part3")}</p>
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
              <p>{t("visit4.part4")}</p>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-main-keep-architecture" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-roof-golden-shachihoko" aspectRatio={3 / 2} />
                </ImageAsLandscape>
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
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-park-moat-view" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-cherry-blossom-tree" aspectRatio={1.29} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="nagoya-castle-moat-stone-wall" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="nagoya-castle-swimming-swan-koi" aspectRatio={1.43} />
                </ImageAsLandscapeOnTheRight>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="nagoya-castle-moat-cherry-blossoms" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="nagoya-castle-cherry-blossoms-moat" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="nagoya-castle-cherry-tree-bloom" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="nagoya-castle-gnarled-cherry-tree" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="nagoya-castle-cherry-blossom-branches" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-cherry-blossoms-dense" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit5.part5")}</p>
              <p>{t("visit5.part6")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="nagoya-castle-kato-kiyomasa-statue" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="nagoya-castle-dry-moat-topiary" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="nagoya-castle-camellia-garden-blooms" aspectRatio={1.02} />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="nagoya-castle-camellia-cherry-blossoms" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-sakura-tree-blooms" aspectRatio={1.43} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-garden-grassy-mound" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-garden-rock-formation" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-red-azalea-flowers" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit5.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-roof-spring-trees" aspectRatio={1.44} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="nagoya-castle-keep-golden-shachihoko" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
        <Bonus title={t("bonus.title")}>
          <p>{t("bonus.part1")}</p>
        </Bonus>
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Château de Nagoya" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Château de Nagoya" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: Nagoya Castle" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: Nagoya Castle" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

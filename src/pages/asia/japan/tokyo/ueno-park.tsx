import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/ueno-park.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/ueno-park.json"
import { JapanBlogLayout, JapanTitle } from "../../../../components/core/japan/japan"
import {
  How,
  HowLong,
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
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/ueno-park/ueno-park-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  ImageAsPortraitOnTheLeft,
  ImageAsPortraitOnTheRight,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { UenoParkImages } from "../../../../components/images/asia/japan/tokyo/ueno-park"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import keiseiHotel from "../../../../images/asia/japan/tokyo/ueno-park/apa-hotel-keisei-ueno-ekimae.jpg"
import inaricho from "../../../../images/asia/japan/tokyo/ueno-park/apa-hotel-ueno-inaricho-ekikita.jpg"
import resolHotel from "../../../../images/asia/japan/tokyo/ueno-park/resol-hotel.jpg"

const namespace = "asia/japan/tokyo/ueno-park"
const id = "ueno-park"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)

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
          <SharedCardJapanImages image="uenoPark" />
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
          <ul>
            <li>{t("how.part1")}</li>
            <li>{t("how.part2")}</li>
          </ul>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
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
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/apahoteru-shang-ye-dao-he-ting-yi-bei"
              title="APA Hotel Ueno Inaricho Ekikita"
              image={inaricho}
              note="8,4"
              price={46}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/apa-keisei-ueno-ekimae"
              title="APA Hotel Keisei Ueno Ekimae"
              image={keiseiHotel}
              note="8,1"
              price={70}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/hotel-resol-ueno"
              title="Hotel Resol Ueno"
              image={resolHotel}
              note="8,7"
              price={100}
              people={2}
              kind="hotel"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part2")}</BookingWarning>
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <ImageAsPortrait>
            <UenoParkImages image="restaurant" />
          </ImageAsPortrait>
        </WhereToHave>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <UenoParkImages image="park" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <UenoParkImages image="park2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <UenoParkImages image="park3" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortraitOnTheLeft>
                  <UenoParkImages image="park4" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <UenoParkImages image="park5" />
                </ImageAsPortraitOnTheRight>
              </GroupOfImages>
              <p>{t("visit.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <UenoParkImages image="park6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <UenoParkImages image="park7" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part5")}</p>
              <p>{t("visit.part6")}</p>
              <p>{t("visit.part7")}</p>
              <p>{t("visit.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <UenoParkImages image="park8" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <UenoParkImages image="park9" />
                  <UenoParkImages image="park10" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <UenoParkImages image="park11" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit.part9")}</p>
              <p>{t("visit.part10")}</p>
              <ImageAsLandscape>
                <UenoParkImages image="park12" />
              </ImageAsLandscape>
              <p>{t("visit.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <UenoParkImages image="park14" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <UenoParkImages image="park15" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <UenoParkImages image="park16" />
                  <UenoParkImages image="park17" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <UenoParkImages image="park18" />
                </ImageAsLandscape>
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
                ? [<UenoParkImages image="cardFr1" key="cardFr1" />, <UenoParkImages image="cardFr2" key="cardFr1" />]
                : [<UenoParkImages image="cardEn1" key="cardEn1" />, <UenoParkImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

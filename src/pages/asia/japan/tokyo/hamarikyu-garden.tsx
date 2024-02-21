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
  WhereToStay,
} from "../../../../components/core/section"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { JapanBlogLayout, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/hamarikyu-garden.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/hamarikyu-garden.json"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden-main.jpg"
import HamarikyuGardensMap from "../../../../images/asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden-map.jpg"
import HamarikyuGardensMapEn from "../../../../images/asia/japan/tokyo/hamarikyu-garden/hamarikyu-garden-map-en.jpg"
import { Divider } from "../../../../components/core/divider"
import { ApplicationContext } from "../../../../components/application"
import { getLink } from "../../../../components/core/links/links.utils"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import { Conclusion } from "../../../../components/core/conclusion"
import { Comments } from "../../../../components/core/comments"
import { HamarikyuGardensImages } from "../../../../components/images/asia/japan/tokyo/hamarikyu-garden"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import hotelTavinos from "../../../../images/asia/japan/tokyo/hamarikyu-garden/hotel-tavinos-hamamatsucho.jpg"
import bay from "../../../../images/asia/japan/tokyo/hamarikyu-garden/bay-tokyohamamatsucho.jpg"
import villaFontaine from "../../../../images/asia/japan/tokyo/hamarikyu-garden/villa-fontaine-shiodome.jpg"
import { Quote } from "../../../../components/core/quote"

const namespace = "asia/japan/tokyo/hamarikyu-garden"
const id = "hamarikyu-garden"
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
          <SharedCardJapanImages image="hamarikyuGarden" />
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
          </ul>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
          {transportLinkPublished && <p>{t("how.part5")}</p>}
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
        </WhatTimeOfYear>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/hotel-tavinos-hamamatsucho"
              title="Hotel Tavinos Hamamatsucho"
              image={hotelTavinos}
              note="8,5"
              price={56}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/bay-tokyohamamatsucho"
              title="Bay Hotel Tokyo Hamamatsucho"
              image={bay}
              note="8,4"
              price={72}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/villa-fontaine-shiodome"
              title="Hotel Villa Fontaine Grand Tokyo-Shiodome"
              image={villaFontaine}
              note="8,5"
              price={96}
              people={2}
              kind="hotel"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part3")}</BookingWarning>
          <p>{t("where-to-stay.part4")}</p>
        </WhereToStay>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <MapContainer>
                {i18n.languageCode === "fr" && <img src={HamarikyuGardensMap} alt="Hamarikyu Garden Map" />}
                {i18n.languageCode === "en" && <img src={HamarikyuGardensMapEn} alt="Hamarikyu Garden Map" />}
              </MapContainer>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
              <p>{t("visit.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden2" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <HamarikyuGardensImages image="hamarikyuGarden3" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit.part5")}</p>
              <p>{t("visit.part6")}</p>
              <p>{t("visit.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden4" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <HamarikyuGardensImages image="hamarikyuGarden5" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <HamarikyuGardensImages image="hamarikyuGarden6" />
                </ImageAsLandscapeOnTheRight>
                <TwoImagesSameSizeOrToGroup>
                  <HamarikyuGardensImages image="hamarikyuGarden7" />
                  <HamarikyuGardensImages image="hamarikyuGarden8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden9" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <HamarikyuGardensImages image="hamarikyuGarden10" />
                  <HamarikyuGardensImages image="hamarikyuGarden11" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden12" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <HamarikyuGardensImages image="hamarikyuGarden13" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <HamarikyuGardensImages image="hamarikyuGarden14" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.part9")}</p>
              <p>{t("visit.part10")}</p>
              <p>{t("visit.part11")}</p>
              <p>{t("visit.part12")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden16" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <HamarikyuGardensImages image="hamarikyuGarden17" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <HamarikyuGardensImages image="hamarikyuGarden18" />
                </ImageAsLandscapeOnTheRight>
                <TwoImagesSameSizeOrToGroup>
                  <HamarikyuGardensImages image="hamarikyuGarden19" />
                  <HamarikyuGardensImages image="hamarikyuGarden20" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <HamarikyuGardensImages image="hamarikyuGarden21" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden22" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <HamarikyuGardensImages image="hamarikyuGarden23" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <HamarikyuGardensImages image="hamarikyuGarden24" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <HamarikyuGardensImages image="hamarikyuGarden25" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <HamarikyuGardensImages image="hamarikyuGarden26" />
                  <HamarikyuGardensImages image="hamarikyuGarden27" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit.part13")}</p>
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
                    <HamarikyuGardensImages image="cardFr1" key="cardFr1" />,
                    <HamarikyuGardensImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <HamarikyuGardensImages image="cardEn1" key="cardEn1" />,
                    <HamarikyuGardensImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

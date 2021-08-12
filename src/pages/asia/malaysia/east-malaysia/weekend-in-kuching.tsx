import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/malaysia/east-malaysia/weekend-in-kuching.json"
import translationEn from "../../../../locales/en/asia/malaysia/east-malaysia/weekend-in-kuching.json"
import { MalaysiaBlogLayout, MalaysiaHeadline } from "../../../../components/core/asia/malaysia/malaysia"
import {
  Baggage,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  Where,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/asia/malaysia/carousel-malaysia2.jpg"
import { ImageAsLandscape, ImageAsPortrait } from "../../../../components/images/layout"
import { CarouselImageQuery } from "../../../../components/images/carousel"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import { ArticleCardContainer, BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import {
  BakoNationalParkCard,
  KubahNightFrogsTourCard,
  SemenggohNatureReserveCard,
} from "../../../../components/core/asia/malaysia/malaysia.cards"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import hiltonHotel from "../../../../images/asia/malaysia/east-malaysia/weekend-in-kuching/hilton-hotel.jpg"
import marianHotel from "../../../../images/asia/malaysia/east-malaysia/weekend-in-kuching/marian-hotel.jpg"
import novaHotel from "../../../../images/asia/malaysia/east-malaysia/weekend-in-kuching/nova-hotel.jpg"
import { WeekendInKuchingImages } from "../../../../components/images/asia/malaysia/east-malaysia/weekend-in-kuching"
import WeekendInKuchingMap from "../../../../images/asia/malaysia/east-malaysia/weekend-in-kuching/weekend-in-kuching-map.png"

const namespace = "asia/malaysia/east-malaysia/weekend-in-kuching"
const id = "weekend-in-kuching"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.malaysia.card.${id}`)
  const orangutanLinkPublished = development || getLink("orangutan").published

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
      <MalaysiaBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <CarouselImageQuery image="malaysia2" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <ul>
            <li>{t("how-much.part3")}</li>
            <li>{t("how-much.part4")}</li>
            <li>{t("how-much.part5")}</li>
            <li>{t("how-much.part6")}</li>
          </ul>
          <p>{t("how-much.part7")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="my/nova-kuching"
              title="Nova Kuching Hotel"
              image={novaHotel}
              note="7,7"
              price={16}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="my/the-marian-boutique-lodging-house"
              title="The Marian Boutique Lodging House"
              image={marianHotel}
              note="8,6"
              price={25}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="my/hilton-kuching"
              title="Hilton Kuching Hotel"
              image={hiltonHotel}
              note="8,4"
              price={50}
              people={2}
              kind="hotel"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part3")}</BookingWarning>
          <p>{t("where-to-stay.part4")}</p>
          <p>{t("where-to-stay.part5")}</p>
        </WhereToStay>
        <Baggage title={t("what-to-bring.title")}>
          <ul>
            <li>{t("what-to-bring.part1")}</li>
            <li>{t("what-to-bring.part2")}</li>
            <li>{t("what-to-bring.part3")}</li>
            <li>{t("what-to-bring.part4")}</li>
            <li>{t("what-to-bring.part5")}</li>
            <li>{t("what-to-bring.part6")}</li>
            <li>{t("what-to-bring.part7")}</li>
            <li>{t("what-to-bring.part8")}</li>
            <li>{t("what-to-bring.part9")}</li>
            <li>{t("what-to-bring.part10")}</li>
          </ul>
        </Baggage>
        <Where title={t("itinerary.title")}>
          <p>{t("itinerary.part1")}</p>
          <p>{t("itinerary.part2")}</p>
          <p>{t("itinerary.part3")}</p>
          <p>{t("itinerary.part4")}</p>
          <p>{t("itinerary.part5")}</p>
          <p>{t("itinerary.part6")}</p>
          <p>{t("itinerary.part7")}</p>
        </Where>
        <Visit title={t("visit.title")}>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <ImageAsLandscape>
              <WeekendInKuchingImages image="welcome" />
            </ImageAsLandscape>
            <p>{t("visit.part2")}</p>
            <p>{t("visit.part3")}</p>
            <p>{t("visit.part4")}</p>
            <p>{t("visit.part5")}</p>
            <p>{t("visit.part6")}</p>
            <p>{t("visit.part7")}</p>
            <p>{t("visit.part8")}</p>
            <MapContainer>
              <img src={WeekendInKuchingMap} alt="Weekend in Kuching Map" />
            </MapContainer>
          </SectionContent>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.visit1.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p className="i">{t("visit.visit1.part1")}</p>
              <p>{t("visit.visit1.part2")}</p>
              <p>{t("visit.visit1.part3")}</p>
              <p>{t("visit.visit1.part4")}</p>
              <p>{t("visit.visit1.part5")}</p>
              <p>{t("visit.visit1.part6")}</p>
              <p>{t("visit.visit1.part7")}</p>
              <p>{t("visit.visit1.part8")}</p>
              <p>{t("visit.visit1.part9")}</p>
              <ArticleCardContainer>
                <BakoNationalParkCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.visit2.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p className="i">{t("visit.visit2.part1")}</p>
              <p>{t("visit.visit2.part2")}</p>
              <p>{t("visit.visit2.part3")}</p>
              <p>{t("visit.visit2.part4")}</p>
              <p>{t("visit.visit2.part5")}</p>
              <p>{t("visit.visit2.part6")}</p>
              <ArticleCardContainer>
                <KubahNightFrogsTourCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.visit3.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p className="i">{t("visit.visit3.part1")}</p>
              <p>{t("visit.visit3.part2")}</p>
              <p>{t("visit.visit3.part3")}</p>
              <p>{t("visit.visit3.part4")}</p>
              <p>{t("visit.visit3.part5")}</p>
              <p>{t("visit.visit3.part6")}</p>
              <p>{t("visit.visit3.part7")}</p>
              <p>{t("visit.visit3.part8")}</p>
              <ArticleCardContainer>
                <SemenggohNatureReserveCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.visit3.part9")}</p>
              <p>{t("visit.visit3.part10")}</p>
              {orangutanLinkPublished && <p>{t("visit.visit3.part11")}</p>}
              <p>{t("visit.visit3.part12")}</p>
              <ImageAsPortrait>
                <WeekendInKuchingImages image="orangutan" />
              </ImageAsPortrait>
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
                    <WeekendInKuchingImages image="cardFr1" key="cardFr1" />,
                    <WeekendInKuchingImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <WeekendInKuchingImages image="cardEn1" key="cardEn1" />,
                    <WeekendInKuchingImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage

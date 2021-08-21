import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/malaysia/west-malaysia/langkawi-dream-hotel.json"
import translationEn from "../../../../locales/en/asia/malaysia/west-malaysia/langkawi-dream-hotel.json"
import { MalaysiaBlogLayout, MalaysiaHeadline } from "../../../../components/core/asia/malaysia/malaysia"
import {
  Booking,
  How,
  HowLong,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/asia/malaysia/west-malaysia/langkawi-dream-hotel/langkawi-dream-hotel-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  Panorama,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardMalaysiaImages } from "../../../../components/images/asia/malaysia/shared-card-malaysia-images"
import { BookingGygCardContainer, Table } from "../../../../components/layout/layout"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import { LangkawiDreamHotelImages } from "../../../../components/images/asia/malaysia/west-malaysia/langkawi-dream-hotel"
import vivantaHotel from "../../../../images/asia/malaysia/west-malaysia/langkawi-dream-hotel/vivanta-hotel.jpg"

const namespace = "asia/malaysia/west-malaysia/langkawi-dream-hotel"
const id = "langkawi-dream-hotel"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.malaysia.card.${id}`)

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
          <SharedCardMalaysiaImages image="langkawiDreamHotel" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          <p>{t("introduction.part3")}</p>
          <p>{t("introduction.part4")}</p>
        </SectionContent>
        <Divider />
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
        </How>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
        </HowLong>
        <Visit title={t("activities.title")}>
          <p>{t("activities.part1")}</p>
          <p>{t("activities.part2")}</p>
          <p>{t("activities.part3")}</p>
          <p>{t("activities.part4")}</p>
        </Visit>
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="my/vivanta-taj-rebak-island"
              title="Vivanta Langkawi, Rebak Island"
              image={vivantaHotel}
              note="8,3"
              kind="hotel"
            />
          </BookingGygCardContainer>
        </Booking>
        <WhereToStay title={t("accommodations.title")}>
          <section>
            <SectionContent>
              <Panorama>
                <LangkawiDreamHotelImages image="panorama" />
              </Panorama>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("accommodations.part1.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("accommodations.part1.part1")}</p>
              <p>{t("accommodations.part1.part2")}</p>
              <ImageAsLandscape>
                <LangkawiDreamHotelImages image="hotel" />
              </ImageAsLandscape>
              <p>{t("accommodations.part1.part3")}</p>
              <p>{t("accommodations.part1.part4")}</p>
              <p>{t("accommodations.part1.part5")}</p>
              <p>{t("accommodations.part1.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="island" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="island2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="island3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="island4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="island5" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="island7" />
                  <LangkawiDreamHotelImages image="island6" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("accommodations.part1.part7")}</p>
              <p>{t("accommodations.part1.part8")}</p>
              <p>{t("accommodations.part1.part9")}</p>
              <p>{t("accommodations.part1.part10")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="beach" />
                  <LangkawiDreamHotelImages image="beach2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="beach3" />
                  <LangkawiDreamHotelImages image="beach4" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <LangkawiDreamHotelImages image="beach5" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="beach6" />
                  <LangkawiDreamHotelImages image="beach7" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="beach8" />
                  <LangkawiDreamHotelImages image="beach9" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("accommodations.part2.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("accommodations.part2.part1")}</p>
              <p>{t("accommodations.part2.part2")}</p>
              <p>{t("accommodations.part2.part3")}</p>
              <p>{t("accommodations.part2.part4")}</p>
              <p>{t("accommodations.part2.part5")}</p>
              <p>{t("accommodations.part2.part6")}</p>
              <p>{t("accommodations.part2.part7")}</p>
              <p>{t("accommodations.part2.part8")}</p>
              <p>{t("accommodations.part2.part9")}</p>
              <p>{t("accommodations.part2.part10")}</p>
              <TwoImagesSameSizeOrToGroup>
                <LangkawiDreamHotelImages image="spa" />
                <LangkawiDreamHotelImages image="spa2" />
              </TwoImagesSameSizeOrToGroup>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("accommodations.part3.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("accommodations.part3.part1")}</p>
              <p>{t("accommodations.part3.part2")}</p>
              <p>{t("accommodations.part3.part3")}</p>
              <p>{t("accommodations.part3.part4")}</p>
              <p>{t("accommodations.part3.part5")}</p>
              <p>{t("accommodations.part3.part6")}</p>
              <p>{t("accommodations.part3.part7")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <LangkawiDreamHotelImages image="food" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="food2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <LangkawiDreamHotelImages image="food3" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <LangkawiDreamHotelImages image="food4" />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("accommodations.part4.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("accommodations.part4.part1")}</p>
              <p>{t("accommodations.part4.part2")}</p>
              <p>{t("accommodations.part4.part3")}</p>
              <p>{t("accommodations.part4.part4")}</p>
              <Table className="mb3">
                <thead>
                  <tr>
                    <th>{i18n.languageCode === "fr" ? "Chambres" : "Rooms"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("accommodations.part4.part5")}</td>
                  </tr>
                  <tr>
                    <td>{t("accommodations.part4.part6")}</td>
                  </tr>
                  <tr>
                    <td>{t("accommodations.part4.part7")}</td>
                  </tr>
                  <tr>
                    <td>{t("accommodations.part4.part8")}</td>
                  </tr>
                  <tr>
                    <td>{t("accommodations.part4.part9")}</td>
                  </tr>
                  <tr>
                    <td>{t("accommodations.part4.part10")}</td>
                  </tr>
                  <tr>
                    <td>{t("accommodations.part4.part11")}</td>
                  </tr>
                </tbody>
              </Table>
              <BookingWarning>{t("accommodations.part4.part12")}</BookingWarning>
              <p>{t("accommodations.part4.part13")}</p>
              <p>{t("accommodations.part4.part14")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="room" />
                  <LangkawiDreamHotelImages image="room2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="room3" />
                  <LangkawiDreamHotelImages image="room4" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <LangkawiDreamHotelImages image="room5" />
                  <LangkawiDreamHotelImages image="room6" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <Divider />
              <p>{t("accommodations.part4.part15")}</p>
            </SectionContent>
          </section>
        </WhereToStay>
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
                    <LangkawiDreamHotelImages image="cardFr1" key="cardFr1" />,
                    <LangkawiDreamHotelImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <LangkawiDreamHotelImages image="cardEn1" key="cardEn1" />,
                    <LangkawiDreamHotelImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/oceania/australia/queensland/green-island.json"
import translationEn from "../../../../locales/en/oceania/australia/queensland/green-island.json"
import { AustraliaBlogLayout, AustraliaHeadline } from "../../../../components/core/oceania/australia/australia"
import {
  Booking,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToHave,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/oceania/australia/queensland/green-island/green-island-main.jpg"
import greenIslandResort from "../../../../images/oceania/australia/queensland/green-island/green-island-resort.jpg"
import { SharedCardAustraliaImages } from "../../../../components/images/oceania/australia/shared-card-australia-images"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { css } from "@emotion/react"
import { GreenIslandImages } from "../../../../components/images/oceania/australia/queensland/green-island"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import { TravelCardBookingStyle } from "../../../../components/core/booking"
import { BasicTourCard } from "../../../../components/core/get-your-guide"

const namespace = "oceania/australia/queensland/green-island"
const id = "green-island"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.australia.card.${id}`)

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
      <AustraliaBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardAustraliaImages image="greenIsland" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
          <p>{t("where-to-book.part2")}</p>
          <p>{t("where-to-book.part3")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <GreenIslandImages image="booking" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <GreenIslandImages image="booking2" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <GreenIslandImages image="booking3" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <GreenIslandImages image="booking4" />
            </ImageAsLandscape>
          </GroupOfImages>
        </Booking>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <ul>
            <li>{t("how-long.part2")}</li>
            <li>{t("how-long.part3")}</li>
          </ul>
          <p>{t("how-long.part4")}</p>
          <p>{t("how-long.part5")}</p>
        </HowLong>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <p>{t("how-much.part3")}</p>
          <p>{t("how-much.part4")}</p>
          <p>{t("how-much.part5")}</p>
          <p>{t("how-much.part6")}</p>
          <p>{t("how-much.part7")}</p>
          <p>{t("how-much.part8")}</p>
          <p>{t("how-much.part9")}</p>
          <p>{t("how-much.part10")}</p>
          <p>{t("how-much.part11")}</p>
          <ImageAsLandscape>
            <GreenIslandImages image="howMuch" />
          </ImageAsLandscape>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <BookingGygCardContainer>
            <TravelCardBookingStyle
              to="https://book-directonline.com/properties/GREENISLANDDIRECT"
              title="Green Island Resort"
              image={greenIslandResort}
              note="8,4"
              price={315}
              people={2}
              kind="deluxe"
            />
          </BookingGygCardContainer>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <p>{t("where-to-have.part3")}</p>
        </WhereToHave>
        <Visit>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part4.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part1")}</p>
              <p>{t("visit.part4.part2")}</p>
              <p>{t("visit.part4.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland4" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part5.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part5.part1")}</p>
              <p>{t("visit.part5.part2")}</p>
              <p>{t("visit.part5.part3")}</p>
              <p>{t("visit.part5.part4")}</p>
              <p>{t("visit.part5.part5")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part6.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part6.part1")}</p>
              <p>{t("visit.part6.part2")}</p>
              <p>{t("visit.part6.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIslandBeach" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIslandBeach2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIslandBeach3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part4")}</p>
              <p>{t("visit.part6.part5")}</p>
              <p>{t("visit.part6.part6")}</p>
              <p>{t("visit.part6.part7")}</p>
              <ul>
                <li>{t("visit.part6.part8")}</li>
              </ul>
              <BookingGygCardContainer>
                <BasicTourCard
                  to="https://greenisland.com.au/great-barrier-reef-tours/glass-bottom-boat-tour/"
                  title="Glass Bottom Boat Tour"
                  image="https://greenisland.com.au/wp-content/uploads/2019/11/extras-gbb1.jpg"
                  duration={{ value: 30, unit: "minute" }}
                  price={0}
                />
              </BookingGygCardContainer>
              <ul>
                <li>{t("visit.part6.part9")}</li>
              </ul>
              <BookingGygCardContainer>
                <BasicTourCard
                  to="https://greenisland.com.au/great-barrier-reef-tours/submarine-tour/"
                  title="Semi-Submarine Tour"
                  image="https://greenisland.com.au/wp-content/uploads/2019/11/extras-semi-sub.jpg"
                  duration={{ value: 30, unit: "minute" }}
                  price={0}
                />
              </BookingGygCardContainer>
              <p>{t("visit.part6.part10")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <GreenIslandImages image="glassBoat" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <GreenIslandImages image="glassBoat2" />
                  <GreenIslandImages image="glassBoat3" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <GreenIslandImages image="glassBoat4" />
                  <GreenIslandImages image="glassBoat5" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <GreenIslandImages image="glassBoat6" />
                  <GreenIslandImages image="glassBoat7" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <ul>
                <li>{t("visit.part6.part11")}</li>
                <ul
                  css={css`
                    margin-bottom: 0;
                  `}
                >
                  <li>{t("visit.part6.part12")}</li>
                  <li>{t("visit.part6.part13")}</li>
                </ul>
              </ul>
              <BookingGygCardContainer>
                <BasicTourCard
                  to="https://greenisland.com.au/great-barrier-reef-tours/snorkelling-green-island/"
                  title="Snorkelling"
                  image="https://greenisland.com.au/wp-content/uploads/2021/03/Untitled-design-4.jpg"
                  duration={{ value: 45, unit: "minute" }}
                  price={0}
                />
              </BookingGygCardContainer>
              <ul>
                <li>{t("visit.part6.part14")}</li>
                <li>{t("visit.part6.part15")}</li>
                <li>{t("visit.part6.part16")}</li>
              </ul>
              <p>{t("visit.part6.part17")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland5" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <GreenIslandImages image="greenIsland7" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <SectionContent>
              <p>{t("visit.part6.part18")}</p>
              <p>{t("visit.part6.part19")}</p>
              <p>{t("visit.part6.part20")}</p>
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
                    <GreenIslandImages image="cardFr1" key="cardFr1" />,
                    <GreenIslandImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <GreenIslandImages image="cardEn1" key="cardEn1" />,
                    <GreenIslandImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

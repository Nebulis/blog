import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/oceania/australia/queensland/magnetic-island.json"
import translationEn from "../../../../locales/en/oceania/australia/queensland/magnetic-island.json"
import { AustraliaBlogLayout, AustraliaHeadline } from "../../../../components/core/oceania/australia/australia"
import {
  How,
  HowLong,
  Introduction,
  SectionContent,
  SectionTitle,
  titleBuilder,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { FakeList, Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/oceania/australia/queensland/magnetic-island/magnetic-island-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardAustraliaImages } from "../../../../components/images/oceania/australia/shared-card-australia-images"
import { MagneticIslandImages } from "../../../../components/images/oceania/australia/queensland/magnetic-island"
import { FaHiking } from "react-icons/fa"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import bungalooBayKoala from "../../../../images/oceania/australia/queensland/magnetic-island/bungalow-bay-koala.jpg"
import dandalooGardens from "../../../../images/oceania/australia/queensland/magnetic-island/dandaloo-gardens.jpg"
import peppersBlue from "../../../../images/oceania/australia/queensland/magnetic-island/peppers-blue.jpg"
import magneticIslandMap from "../../../../images/oceania/australia/queensland/magnetic-island/map.jpg"

const namespace = "oceania/australia/queensland/magnetic-island"
const id = "magnetic-island"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const MovingAround = titleBuilder({ icon: FaHiking, translationKey: "todo" })

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
          <SharedCardAustraliaImages image="magneticIsland" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <MagneticIslandImages image="magneticIsland" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <MagneticIslandImages image="magneticIsland2" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <MagneticIslandImages image="magneticIsland3" />
            </ImageAsLandscape>
          </GroupOfImages>
        </SectionContent>
        <Divider />
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
          <p>{t("how.part5")}</p>
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
          <p>{t("how.part8")}</p>
          <p>{t("how.part9")}</p>
          <p>{t("how.part10")}</p>
          <p>{t("how.part11")}</p>
          <p>{t("how.part12")}</p>
          <p>{t("how.part13")}</p>
          <SectionContent />
          <Divider />
          <p>{t("how.part14")}</p>
          <p>{t("how.part15")}</p>
          <p>{t("how.part16")}</p>
          <p>{t("how.part17")}</p>
        </How>
        <MovingAround title={t("moving-around.title")}>
          <p>{t("moving-around.part1")}</p>
          <FakeList>{t("moving-around.part2.title")}</FakeList>
          <p>{t("moving-around.part2.part1")}</p>
          <p>{t("moving-around.part2.part2")}</p>
          <p>{t("moving-around.part2.part3")}</p>
          <p>{t("moving-around.part2.part4")}</p>
          <FakeList>{t("moving-around.part3.title")}</FakeList>
          <p>{t("moving-around.part3.part1")}</p>
          <p>{t("moving-around.part3.part2")}</p>
          <p>{t("moving-around.part3.part3")}</p>
          <p>{t("moving-around.part3.part4")}</p>
          <FakeList>{t("moving-around.part4.title")}</FakeList>
          <p>{t("moving-around.part4.part1")}</p>
          <p>{t("moving-around.part4.part2")}</p>
          <p>{t("moving-around.part4.part3")}</p>
          <FakeList>{t("moving-around.part5.title")}</FakeList>
          <p>{t("moving-around.part5.part1")}</p>
          <p>{t("moving-around.part5.part2")}</p>
          <p>{t("moving-around.part5.part3")}</p>
          <SectionContent />
          <Divider />
          <p>{t("moving-around.part6")}</p>
        </MovingAround>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
          <GroupOfImages>
            <TwoImagesSameSizeOrToGroup>
              <MagneticIslandImages image="stinger" />
              <MagneticIslandImages image="stinger2" />
            </TwoImagesSameSizeOrToGroup>
            <ImageAsPortrait>
              <MagneticIslandImages image="stinger3" />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>{t("what-time-of-year.part5")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="au/bungalow-bay-koala-village-horseshoe-bay"
              title="Bungalow Bay Koala Village"
              image={bungalooBayKoala}
              note="8,3"
              price={24}
              people={1}
              kind="inn"
            />
            <BookingCard
              hotel="au/dandaloo-gardens"
              title="Dandaloo Gardens"
              image={dandalooGardens}
              note="9,2"
              price={79}
              people={2}
              kind="chalet"
            />
            <BookingCard
              hotel="au/peppers-blue-on-blue"
              title="Peppers Blue on Blue"
              image={peppersBlue}
              note="8,0"
              price={137}
              people={2}
              kind="deluxe"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part3")}</BookingWarning>
          <p>{t("where-to-stay.part4")}</p>
        </WhereToStay>
        <Visit>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part1.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part1.part1")}</p>
              <p>{t("visit.part1.part2")}</p>
              <p>{t("visit.part1.part3")}</p>
              <p>{t("visit.part1.part4")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part2.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part1")}</p>
              <p>{t("visit.part2.part2")}</p>
              <p>{t("visit.part2.part3")}</p>
              <MapContainer>
                <img src={magneticIslandMap} alt="Magnetic Island Map" />
              </MapContainer>
              <p>{t("visit.part2.part4")}</p>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part5")}</p>
              <SectionTitle>{t("visit.part2.part6.title")}</SectionTitle>
              <p>{t("visit.part2.part6.part1")}</p>
              <p>{t("visit.part2.part6.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="nellyBay" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="nellyBay2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="nellyBay3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="nellyBay4" />
                </ImageAsLandscape>
              </GroupOfImages>
              <SectionTitle>{t("visit.part2.part7.title")}</SectionTitle>
              <p>{t("visit.part2.part7.part1")}</p>
              <p>{t("visit.part2.part7.part2")}</p>
              <p>{t("visit.part2.part7.part3")}</p>
              <p>{t("visit.part2.part7.part4")}</p>
              <p>{t("visit.part2.part7.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="geoffreyBay" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="almaBay" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="almaBay2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="almaBay3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="almaBay4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="almaBay5" />
                </ImageAsLandscape>
              </GroupOfImages>
              <SectionTitle>{t("visit.part2.part8.title")}</SectionTitle>
              <p>{t("visit.part2.part8.part1")}</p>
              <p>{t("visit.part2.part8.part2")}</p>
              <p>{t("visit.part2.part8.part3")}</p>
              <p>{t("visit.part2.part8.part4")}</p>
              <p>{t("visit.part2.part8.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk4" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part2.part8.part6")}</p>
              <SectionTitle>{t("visit.part2.part9.title")}</SectionTitle>
              <p>{t("visit.part2.part9.part1")}</p>
              <p>{t("visit.part2.part9.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <MagneticIslandImages image="fortsWalk5" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk6" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <MagneticIslandImages image="fortsWalk7" />
                  <MagneticIslandImages image="fortsWalk8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk9" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <MagneticIslandImages image="fortsWalk10" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <MagneticIslandImages image="fortsWalk11" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <MagneticIslandImages image="fortsWalk12" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part2.part9.part3")}</p>
              <p>{t("visit.part2.part9.part4")}</p>
              <p>{t("visit.part2.part9.part5")}</p>
              <p>{t("visit.part2.part9.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="horseshoeBay" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="horseshoeBay2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="horseshoeBay3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="horseshoeBay4" />
                </ImageAsLandscape>
              </GroupOfImages>
              <SectionTitle>{t("visit.part2.part10.title")}</SectionTitle>
              <p>{t("visit.part2.part10.part1")}</p>
              <p>{t("visit.part2.part10.part2")}</p>
              <p>{t("visit.part2.part10.part3")}</p>
              <p>{t("visit.part2.part10.part4")}</p>
              <p>{t("visit.part2.part10.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <MagneticIslandImages image="baldingBay2" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay4" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <MagneticIslandImages image="baldingBay5" />
                  <MagneticIslandImages image="baldingBay6" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <MagneticIslandImages image="baldingBay7" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay8" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay9" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay10" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="baldingBay11" />
                </ImageAsLandscape>
              </GroupOfImages>
              <SectionTitle>{t("visit.part2.part11.title")}</SectionTitle>
              <p>{t("visit.part2.part11.part1")}</p>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part12")}</p>
              <p>{t("visit.part2.part13")}</p>
              <p>{t("visit.part2.part14")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part3.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part3.part1")}</p>
              <p>{t("visit.part3.part2")}</p>
              <p>{t("visit.part3.part3")}</p>
              <p>{t("visit.part3.part4")}</p>
              <p>{t("visit.part3.part5")}</p>
              <p>{t("visit.part3.part6")}</p>
              <p>{t("visit.part3.part7")}</p>
              <ImageAsLandscape>
                <MagneticIslandImages image="koala" />
              </ImageAsLandscape>
              <p>{t("visit.part3.part8")}</p>
              <p>{t("visit.part3.part9")}</p>
              <p>{t("visit.part3.part10")}</p>
              <ImageAsLandscape>
                <MagneticIslandImages image="wallaby" />
              </ImageAsLandscape>
              <p>{t("visit.part3.part11")}</p>
              <p>{t("visit.part3.part12")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="rainbowLorikeet" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="rainbowLorikeet2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="rainbowLorikeet3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part3.part13")}</p>
              <p>{t("visit.part3.part14")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="snake" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="snake2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="lizard" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.part3.part15")}</p>
              <p>{t("visit.part3.part16")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MagneticIslandImages image="magneticIsland4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <MagneticIslandImages image="magneticIsland5" />
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
                ? [
                    <MagneticIslandImages image="cardFr1" key="cardFr1" />,
                    <MagneticIslandImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <MagneticIslandImages image="cardEn1" key="cardEn1" />,
                    <MagneticIslandImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

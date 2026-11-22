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
import cardFr1 from "../../../../images/oceania/australia/queensland/magnetic-island/card-fr1.jpg"
import cardFr2 from "../../../../images/oceania/australia/queensland/magnetic-island/card-fr2.jpg"
import cardEn1 from "../../../../images/oceania/australia/queensland/magnetic-island/card-en1.jpg"
import cardEn2 from "../../../../images/oceania/australia/queensland/magnetic-island/card-en2.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  R2Image,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardAustraliaImages } from "../../../../components/images/oceania/australia/shared-card-australia-images"
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
              <R2Image namespace={namespace} name="magnetic-island-welcome-sign" aspectRatio={3 / 2} />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="magnetic-island-coastline-sea" aspectRatio={4 / 3} />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="magnetic-island-beach-water" aspectRatio={4 / 3} />
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
          <p>{t("moving-around.part2.part5")}</p>
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
            <TwoImagesSameSizeOrToGroup orientation="landscape">
              <R2Image namespace={namespace} name="alma-bay-beach-report" aspectRatio={3 / 2} />
              <R2Image namespace={namespace} name="alma-bay-warning-flag" aspectRatio={3 / 2} />
            </TwoImagesSameSizeOrToGroup>
            <ImageAsPortrait>
              <R2Image namespace={namespace} name="magnetic-island-marine-stingers-sign" aspectRatio={3 / 4} />
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
              title="Bounce Magnetic Island and Koala Park"
              image={bungalooBayKoala}
              note="8,3"
              price={45}
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
                  <R2Image namespace={namespace} name="magnetic-island-granite-rocks" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-forest-shore" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-hills-sky" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-coastal-landscape" aspectRatio={3 / 2} />
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
                  <R2Image namespace={namespace} name="geoffrey-bay-national-park-sign" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="alma-bay-beach-ocean-view" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="alma-bay-tropical-beach-coastline" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="alma-bay-granite-rocks-coastline" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="alma-bay-boulders-tropical-trees" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="alma-bay-ocean-waves-shore" aspectRatio={4 / 3} />
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
                  <R2Image namespace={namespace} name="magnetic-island-forts-walk-boulder" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-ocean-horizon-view" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-lush-bay-coastline" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-pine-bay-vistas" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part2.part8.part6")}</p>
              <SectionTitle>{t("visit.part2.part9.title")}</SectionTitle>
              <p>{t("visit.part2.part9.part1")}</p>
              <p>{t("visit.part2.part9.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="arcadia-horseshoe-bay-trail" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-pink-fruit-tree" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup orientation="landscape">
                  <R2Image namespace={namespace} name="magnetic-island-white-flowers-tree" aspectRatio={3 / 2} />
                  <R2Image namespace={namespace} name="magnetic-island-tree-fruit-ocean" aspectRatio={3 / 2} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-koala-tree-canopy" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="magnetic-island-koala-sleeping-branch" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="magnetic-island-koala-resting-trunk" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-koala-tree" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part2.part9.part3")}</p>
              <p>{t("visit.part2.part9.part4")}</p>
              <p>{t("visit.part2.part9.part5")}</p>
              <p>{t("visit.part2.part9.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-horseshoe-bay-beach" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-rowboat-dog-bay" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-horseshoe-bay-hills" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-anchored-sailboat-beach" aspectRatio={4 / 3} />
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
                  <R2Image namespace={namespace} name="magnetic-island-trail-signpost-forest" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="balding-bay-trek-path" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-boulders-beach-coast" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-trail-forest-ocean" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="balding-bay-trek-forest" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="magnetic-island-balding-bay-boulder" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="magnetic-island-balding-bay-tree" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-wallaby-rock-coast" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-rock-wallaby-woods" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-balding-bay-beach" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-bay-yachts-anchored" aspectRatio={3 / 2} />
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
                <R2Image namespace={namespace} name="magnetic-island-koala-tree-2" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit.part3.part8")}</p>
              <p>{t("visit.part3.part9")}</p>
              <p>{t("visit.part3.part10")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="magnetic-island-rock-wallaby" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit.part3.part11")}</p>
              <p>{t("visit.part3.part12")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-lorikeet-branch" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-lorikeet-feeding" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-lorikeet-hiding" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part3.part13")}</p>
              <p>{t("visit.part3.part14")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-small-snake" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-snake-ground" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-lizard-rock" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.part3.part15")}</p>
              <p>{t("visit.part3.part16")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="magnetic-island-ocean-wake-ferry" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="townsville-waterfront-mountain-coastline" aspectRatio={4 / 3} />
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Magnetic Island" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Magnetic Island" />,
                  ]
                : [
                    <img src={cardEn1} key="cardFr1" alt="Pinterest Card: Magnetic Island" />,
                    <img src={cardEn2} key="cardFr1" alt="Pinterest Card: Magnetic Island" />,
                  ],
          }}
        />
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import {
  How,
  HowLong,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/fuji/kawaguchiko-lake.json"
import translationEn from "../../../../locales/en/asia/japan/fuji/kawaguchiko-lake.json"
import HomeImgUrl from "../../../../images/asia/japan/fuji/kawaguchiko-lake/kawaguchiko-lake-main.jpg"
import KawaguchikoLakeMap from "../../../../images/asia/japan/fuji/kawaguchiko-lake/map-lake-mount-fuji.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import { KawaguchikoLakeImages } from "../../../../components/images/asia/japan/fuji/kawaguchiko-lake"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { FakeList } from "../../../../components/core/title"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import lakelandHotel from "../../../../images/asia/japan/fuji/kawaguchiko-lake/lakeland-hotel.jpg"
import shikiNoYado from "../../../../images/asia/japan/fuji/kawaguchiko-lake/shiki-no-yado-fujisan.jpg"
import shuhokakuKogetsu from "../../../../images/asia/japan/fuji/kawaguchiko-lake/shuhokaku-kogetsu.jpg"

const namespace = "asia/japan/fuji/kawaguchiko-lake"
const id = "kawaguchiko-lake"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transports-in-japan").published
  const mountFujiAscentLinkPublished = development || getLink("mount-fuji-ascent").published
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
          <SharedJapanImages image="mainFuji" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <ImageAsLandscape>
            <KawaguchikoLakeImages image="when" />
          </ImageAsLandscape>
        </WhatTimeOfYear>
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <ul>
            <li>{t("how.part3")}</li>
            <li>{t("how.part4")}</li>
          </ul>
          {transportLinkPublished && <p>{t("how.part5")}</p>}
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/shiki-no-yado-popura"
              title="Shiki-no-Yado Fujisan"
              image={shikiNoYado}
              note="7,7"
              price={100}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/lakeland-mizunosato"
              title="Lakeland Hotel Mizunosato"
              image={lakelandHotel}
              note="8,6"
              price={200}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/shuhokaku-kogetsu"
              title="Shuhokaku Kogetsu"
              image={shuhokakuKogetsu}
              note="9,3"
              price={360}
              people={2}
              kind="deluxe"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part3")}</BookingWarning>
          <p>{t("where-to-stay.part4")}</p>
        </WhereToStay>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
              <p>{t("visit.part4")}</p>
              <p>{t("visit.part5")}</p>
              {mountFujiAscentLinkPublished && <p>{t("visit.part6")}</p>}
              <TwoImagesSameSizeOrToGroup>
                <KawaguchikoLakeImages image="plane" />
                <KawaguchikoLakeImages image="plane2" />
              </TwoImagesSameSizeOrToGroup>
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
              <GroupOfImages>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="train" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="train2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="train3" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <p>{t("visit2.part7")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <MapContainer>
                <img src={KawaguchikoLakeMap} alt="Mount Fiju Lakes Map" />
              </MapContainer>
              <FakeList>{t("visit3.part4")}</FakeList>
              <p>{t("visit3.part5")}</p>
              <FakeList>{t("visit3.part6")}</FakeList>
              <p>{t("visit3.part7")}</p>
              <FakeList>{t("visit3.part8")}</FakeList>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <FakeList>{t("visit3.part11")}</FakeList>
              <p>{t("visit3.part12")}</p>
              <FakeList>{t("visit3.part13")}</FakeList>
              <p>{t("visit3.part14")}</p>
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
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <KawaguchikoLakeImages image="lake" />
                  <KawaguchikoLakeImages image="lake2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscapeOnTheLeft>
                  <KawaguchikoLakeImages image="lake3" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <KawaguchikoLakeImages image="lake4" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="lake5" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <KawaguchikoLakeImages image="lake6" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <KawaguchikoLakeImages image="lake7" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="lake8" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
              <p>{t("visit4.part8")}</p>
              <p>{t("visit4.part9")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <KawaguchikoLakeImages image="lake9" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <KawaguchikoLakeImages image="lake10" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="lake11" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="lake12" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <KawaguchikoLakeImages image="lake13" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <KawaguchikoLakeImages image="lake14" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="lake15" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KawaguchikoLakeImages image="lake16" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part10")}</p>
              <ul>
                <li>{t("visit4.part11")}</li>
                <li>{t("visit4.part12")}</li>
                <li>{t("visit4.part13")}</li>
              </ul>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit5.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <ImageAsLandscape>
                <KawaguchikoLakeImages image="chureitoPagoda" />
              </ImageAsLandscape>
              <p>{t("visit5.part2")}</p>
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
                    <KawaguchikoLakeImages image="cardFr1" key="cardFr1" />,
                    <KawaguchikoLakeImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <KawaguchikoLakeImages image="cardEn1" key="cardEn1" />,
                    <KawaguchikoLakeImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

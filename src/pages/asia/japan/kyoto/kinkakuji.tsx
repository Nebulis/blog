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
  ImageAsPortraitOnTheLeft,
  ImageAsPortraitOnTheRight,
  TwoImagesRightBigger,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/kyoto/kinkakuji.json"
import translationEn from "../../../../locales/en/asia/japan/kyoto/kinkakuji.json"
import HomeImgUrl from "../../../../images/asia/japan/kyoto/kinkakuji/kinkakuji-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import { KinkakujiImages } from "../../../../components/images/asia/japan/kyoto/kinkakuji"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import granMsKyoto from "../../../../images/asia/japan/kyoto/kinkakuji/gran-ms-kyoto.jpg"
import mitsuiGarden from "../../../../images/asia/japan/kyoto/kinkakuji/mitsui-garden-kyoto-sanjo.jpg"
import solariaHotel from "../../../../images/asia/japan/kyoto/kinkakuji/solaria-nishitetsu-hotel-kyoto-premier.jpg"
import { BookingGygCardContainer } from "../../../../components/layout/layout"

const namespace = "asia/japan/kyoto/kinkakuji"
const id = "kinkakuji"
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
          <SharedCardJapanImages image="kinkakuji" />
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
          <p>{t("where-to-stay.part3")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/gran-ms-kyoto"
              title="Hotel Gran Ms Kyoto"
              image={granMsKyoto}
              note="8,5"
              price={40}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/mitsui-garden-kyoto-sanjo"
              title="Mitsui Garden Hotel Kyoto Sanjo"
              image={mitsuiGarden}
              note="8,5"
              price={50}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/solaria-nishitetsu-hotel-kyoto-premier"
              title="Solaria Nishitetsu Hotel Kyoto Premier"
              image={solariaHotel}
              note="9,0"
              price={150}
              people={2}
              kind="hotel"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part4")}</BookingWarning>
          <p>{t("where-to-stay.part5")}</p>
        </WhereToStay>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <GroupOfImages>
                <ImageAsPortraitOnTheLeft>
                  <KinkakujiImages image="visit" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <KinkakujiImages image="visit2" />
                </ImageAsPortraitOnTheRight>
              </GroupOfImages>
              <p>{t("visit.part3")}</p>
              <p>{t("visit.part4")}</p>
              <p>{t("visit.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <KinkakujiImages image="visit3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KinkakujiImages image="visit4" />
                </ImageAsLandscape>
                <TwoImagesRightBigger>
                  <KinkakujiImages image="visit5" />
                  <KinkakujiImages image="visit6" />
                </TwoImagesRightBigger>
              </GroupOfImages>
              <p>{t("visit.part6")}</p>
              <p>{t("visit.part7")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <KinkakujiImages image="history" />
              </ImageAsLandscape>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <p>{t("visit1.part7")}</p>
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
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <KinkakujiImages image="temple" />
                  <KinkakujiImages image="temple2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <KinkakujiImages image="temple3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <KinkakujiImages image="temple4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KinkakujiImages image="temple5" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <KinkakujiImages image="temple6" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <KinkakujiImages image="temple7" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <GroupOfImages>
                <ImageAsPortraitOnTheLeft>
                  <KinkakujiImages image="temple8" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <KinkakujiImages image="temple9" />
                </ImageAsPortraitOnTheRight>
              </GroupOfImages>
              <p>{t("visit2.part9")}</p>
              <p>{t("visit2.part10")}</p>
              <p>{t("visit2.part11")}</p>
              <p>{t("visit2.part12")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <KinkakujiImages image="garden2" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden4" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <KinkakujiImages image="garden5" />
                  <KinkakujiImages image="garden6" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden8" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <KinkakujiImages image="garden9" />
                </ImageAsPortrait>
                <ImageAsPortraitOnTheLeft>
                  <KinkakujiImages image="garden10" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <KinkakujiImages image="garden11" />
                </ImageAsPortraitOnTheRight>
                <ImageAsPortraitOnTheLeft>
                  <KinkakujiImages image="garden12" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <KinkakujiImages image="garden13" />
                </ImageAsPortraitOnTheRight>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden14" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden15" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden16" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <KinkakujiImages image="garden17" />
                </ImageAsLandscape>
                <ImageAsPortraitOnTheLeft>
                  <KinkakujiImages image="garden18" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <KinkakujiImages image="garden19" />
                </ImageAsPortraitOnTheRight>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
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
                ? [<KinkakujiImages image="cardFr1" key="cardFr1" />, <KinkakujiImages image="cardFr2" key="cardFr1" />]
                : [
                    <KinkakujiImages image="cardEn1" key="cardEn1" />,
                    <KinkakujiImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

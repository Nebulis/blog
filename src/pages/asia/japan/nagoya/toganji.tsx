import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  ImageAsPortraitOnTheLeft,
  ImageAsPortraitOnTheRight,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
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
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/nagoya/toganji.json"
import translationEn from "../../../../locales/en/asia/japan/nagoya/toganji.json"
import HomeImgUrl from "../../../../images/asia/japan/nagoya/toganji/toganji-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { ToganjiImages } from "../../../../components/images/asia/japan/nagoya/toganji-images"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import apaNagoyaSakae from "../../../../images/asia/japan/nagoya/toganji/apa-nagoya-sakae.jpg"
import glareZipClub from "../../../../images/asia/japan/nagoya/toganji/glare-zip-club.jpg"
import wabisabiHouseIkeshita from "../../../../images/asia/japan/nagoya/toganji/wabisabi-house-ikeshita.jpg"
import { BookingGygCardContainer } from "../../../../components/layout/layout"

const namespace = "asia/japan/nagoya/toganji"
const id = "toganji"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transport-japan").published
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
        <ImageAsPortrait>
          <SharedCardJapanImages image="toganji" />
        </ImageAsPortrait>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Where title={t("where.title")}>
          <p>{t("where.part1")}</p>
        </Where>
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
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
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/apa-nagoya-sakae"
              title="APA Hotel Nagoya Sakae"
              image={apaNagoyaSakae}
              note="7,5"
              price={55}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/glare-zip-club"
              title="Design Hotel W Zip Club"
              image={glareZipClub}
              note="8,1"
              price={55}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/wabisabi-house-ikeshita"
              title="Wabisabi House Ikeshita"
              image={wabisabiHouseIkeshita}
              note="7,3"
              price={115}
              people={2}
              kind="hotel"
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
              <GroupOfImages>
                <ImageAsLandscape>
                  <ToganjiImages image="visit" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ToganjiImages image="visit2" />
                  <ToganjiImages image="visit3" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <GroupOfImages>
                <ImageAsPortraitOnTheLeft>
                  <ToganjiImages image="garden" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <ToganjiImages image="garden2" />
                </ImageAsPortraitOnTheRight>
                <ImageAsPortrait>
                  <ToganjiImages image="garden3" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <ToganjiImages image="garden4" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <ToganjiImages image="garden5" />
                  <ToganjiImages image="garden6" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <ToganjiImages image="garden7" />
                  <ToganjiImages image="garden8" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ToganjiImages image="garden9" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <ToganjiImages image="garden10" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <ToganjiImages image="garden11" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ToganjiImages image="garden12" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ToganjiImages image="garden13" />
                  <ToganjiImages image="garden14" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <ToganjiImages image="garden15" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ToganjiImages image="garden16" />
                </ImageAsLandscape>
              </GroupOfImages>
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
              <ImageAsPortrait>
                <ToganjiImages image="buddha" />
              </ImageAsPortrait>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ToganjiImages image="buddha2" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ToganjiImages image="buddha3" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ToganjiImages image="buddha4" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit3.part7")}</p>
              <p>{t("visit3.part8")}</p>
              <ImageAsPortrait>
                <ToganjiImages image="buddha5" />
              </ImageAsPortrait>
              <p>{t("visit3.part9")}</p>
              <ImageAsPortrait>
                <ToganjiImages image="buddha6" />
              </ImageAsPortrait>
              <p>{t("visit3.part10")}</p>
            </SectionContent>
          </section>
        </Visit>
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
                ? [<ToganjiImages image="cardFr1" key="cardFr1" />, <ToganjiImages image="cardFr2" key="cardFr1" />]
                : [<ToganjiImages image="cardEn1" key="cardEn1" />, <ToganjiImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

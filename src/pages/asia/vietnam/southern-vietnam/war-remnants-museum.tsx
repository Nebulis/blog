import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/war-remnants-museum.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/war-remnants-museum.json"
import { VietnamBlogLayout, VietnamHeadline } from "../../../../components/core/asia/vietnam/vietnam"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import HomeImgUrl from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/war-museum-main.jpg"
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
import { HoChiMinWarMuseum } from "../../../../components/images/asia/vietnam/southern-vietnam/ho-chi-min-war-museum"
import { css } from "@emotion/react"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { Divider } from "../../../../components/core/divider"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import pragueHotel from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/prague-hotel.jpg"
import naNueHotel from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/na-nue-hotel.jpg"
import yenTrangHotel from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/yen-trang-hotel.jpg"

const namespace = "asia/vietnam/southern-vietnam/ho-chi-minh-war-museum"
const id = "ho-chi-minh-war-museum"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.vietnam.card.${id}`)

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
      <VietnamBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="warMuseumMain" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Where title={t("where.title")}>
          <p>{t("where.part1")}</p>
        </Where>
        <When>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
        </When>
        <How>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("common:section.how-much2")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
          <p>{t("where-to-stay.part4")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="vn/prague"
              title="Prague Hotel"
              image={pragueHotel}
              note="8,4"
              price={15}
              people={2}
              kind="standard"
            />
            <BookingCard
              hotel="vn/na-nue"
              title="Na Nue Hotel"
              image={naNueHotel}
              note="8,4"
              price={12}
              people={2}
              kind="standard"
            />
            <BookingCard
              hotel="vn/yen-trang-2"
              title="Yen Trang 2 Hotel"
              image={yenTrangHotel}
              note="8,0"
              price={17}
              people={2}
              kind="standard"
            />
          </BookingGygCardContainer>
          <BookingWarning />
          <p>{t("where-to-stay.part5")}</p>
          <p>{t("where-to-stay.part6")}</p>
          <p>{t("where-to-stay.part7")}</p>
        </WhereToStay>
        <Visit title={t("common:section.visit")}>
          <SectionContent>
            <p>{t("visit.part1")}</p>
          </SectionContent>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit1.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://pixabay.com/fr/users/saildancer-3004325">
                    Saildancer
                  </ExternalLinkNotUnderlined>
                }
              >
                <HoChiMinWarMuseum image="memorial" />
              </ImageAsPortrait>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft title="U-17 Plane">
                  <HoChiMinWarMuseum image="u17" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight title="A-1 Skyraider">
                  <HoChiMinWarMuseum image="a1" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft title="F-5A Jet Fighter">
                  <HoChiMinWarMuseum image="f5a" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight title="M48 Tank">
                  <HoChiMinWarMuseum image="m48" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft title="CH-47 Chinook">
                  <HoChiMinWarMuseum image="ch47" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight title="M107 Gun">
                  <SharedCardVietnamImages image="warMuseumMain" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft>
                  <HoChiMinWarMuseum image="helicopter" />
                </ImageAsLandscapeOnTheLeft>
              </GroupOfImages>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <TwoImagesSameSizeOrToGroup>
                <HoChiMinWarMuseum image="guillotine" />
                <HoChiMinWarMuseum image="jail" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit2.part6")}</p>
              <p>{t("visit2.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <HoChiMinWarMuseum image="tigerCage" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <HoChiMinWarMuseum image="panelTigerCage" />
                </ImageAsPortrait>
              </GroupOfImages>
              {t("visit2.part8") && <Quote className="b">{t("visit2.part8")}</Quote>}
              <p>{t("visit2.part9")}</p>
              <p>{t("visit2.part10")}</p>
              <p>{t("visit2.part11")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <HoChiMinWarMuseum image="museum1" />
                  <HoChiMinWarMuseum image="museum2" imgStyle={{ objectFit: "contain" }} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <HoChiMinWarMuseum image="museum3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <p>{t("visit3.part8")}</p>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <p>{t("visit3.part11")}</p>
              <p>{t("visit3.part12")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://pixabay.com/fr/users/janeb13-725943">
                    janeb13
                  </ExternalLinkNotUnderlined>
                }
              >
                <HoChiMinWarMuseum image="youngChild" />
              </ImageAsPortrait>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <p>{t("visit4.part3")}</p>
              <p>{t("visit4.part4")}</p>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
            </SectionContent>
            <ImageAsPortrait
              css={css`
                max-width: 200px;
              `}
              className="no-reset-image"
            >
              <HoChiMinWarMuseum image="soldierHelmet" />
            </ImageAsPortrait>
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
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <HoChiMinWarMuseum image="cardFr1" key="cardFr1" />,
                    <HoChiMinWarMuseum image="cardFr2" key="cardFr2" />,
                  ]
                : [
                    <HoChiMinWarMuseum image="cardEn1" key="cardEn1" />,
                    <HoChiMinWarMuseum image="cardEn2" key="cardEn2" />,
                  ],
          }}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

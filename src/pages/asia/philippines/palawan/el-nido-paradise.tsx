import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import HomeImgUrl from "../../../../images/asia/philippines/home-philippines.jpg"
import frendzHostelElNido from "../../../../images/asia/philippines/palawan/el-nido-paradise/frendz-hostel-el-nido.jpg"
import cadlaoResort from "../../../../images/asia/philippines/palawan/el-nido-paradise/cadlao-resort-and-restaurant.jpg"
import velagoResort from "../../../../images/asia/philippines/palawan/el-nido-paradise/velago-resort.jpg"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/philippines/palawan/el-nido-paradise.json"
import translationEn from "../../../../locales/en/asia/philippines/palawan/el-nido-paradise.json"
import {
  PhilippinesBlogLayout,
  PhilippinesHeadline,
  PhilippinesTitle,
} from "../../../../components/core/asia/philippines/philippines"
import {
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Comments } from "../../../../components/core/comments"
import { ElNidoWhichTourCard } from "../../../../components/core/asia/philippines/philippines.card"
import { ElNidoParadiseImages } from "../../../../components/images/asia/philippines/palawan/el-nido-paradise-images"
import { philippinesPrimaryColor } from "../../../../components/core/asia/philippines/philippines.colors"
import { css } from "@emotion/react"
import { ArticleCardContainer, BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { PhilippinesMap } from "../../../../components/core/asia/philippines/philippines-map"
import { SharedCardPhilippinesImages } from "../../../../components/images/asia/philippines/shared-card-philippines-images"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"

const namespace = "asia/philippines/palawan/el-nido-paradise"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t("common:country.philippines.card.el-nido-paradise")

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
      <PhilippinesBlogLayout page="el-nido-paradise" location={location}>
        <PhilippinesTitle title={title} linkId="el-nido-paradise" />
        <ImageAsLandscape>
          <SharedCardPhilippinesImages image="elNido" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <ImageAsPortrait>
            <ElNidoParadiseImages image="jellyfish" />
          </ImageAsPortrait>
        </WhatTimeOfYear>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <ul>
            <li>{t("how-long.part2")}</li>
            <li>{t("how-long.part3")}</li>
            <li>{t("how-long.part4")}</li>
          </ul>
          <p>{t("how-long.part5")}</p>
          <p>{t("how-long.part6")}</p>
          <p>{t("how-long.part7")}</p>
          <p>{t("how-long.part8")}</p>
        </HowLong>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <ul>
            <li>{t("how-much.price1")}</li>
            <li>{t("how-much.price2")}</li>
            <li>{t("how-much.price3")}</li>
            <li>{t("how-much.price4")}</li>
            <li>{t("how-much.price5")}</li>
          </ul>
          <p>{t("how-much.part3")}</p>
        </HowMuch>
        <How>
          <p>{t("how.part1")}</p>
          <p
            className="mb2 tc b"
            css={css`
              color: ${philippinesPrimaryColor};
            `}
          >
            {t("how.part2")}
          </p>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
          <p>{t("how.part5")}</p>
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
          <p>{t("how.part8")}</p>
        </How>
        <WhereToStay>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="ph/frendz-hostel-el-nido"
              title="Frendz Hostel El Nido"
              image={frendzHostelElNido}
              note="9,1"
              price={21}
              people={1}
              kind="inn"
            />
            <BookingCard
              hotel="ph/cadlao-resort-and-restaurant"
              title="Cadlao Resort and Restaurant"
              image={cadlaoResort}
              note="8,2"
              price={64}
              people={2}
              kind="standard"
            />
            <BookingCard
              hotel="ph/vellago-resort"
              title="Vellago Resort"
              image={velagoResort}
              note="9,1"
              price={281}
              people={2}
              kind="deluxe"
            />
          </BookingGygCardContainer>
          <BookingWarning />
          <p>{t("where-to-stay.part3")}</p>
          <p>{t("where-to-stay.part4")}</p>
        </WhereToStay>
        <Visit>
          <SectionContent
            css={css`
              // using emotion because of priority issue with className
              margin-bottom: 0;
            `}
          >
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
            <p className="mb0">{t("visit.part3")}</p>
          </SectionContent>
          <MapContainer>
            <PhilippinesMap />
          </MapContainer>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit1.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <ImageAsPortrait>
                <ElNidoParadiseImages image="fruit" />
              </ImageAsPortrait>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ElNidoParadiseImages image="city1" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ElNidoParadiseImages image="city2" />
                  <ElNidoParadiseImages image="city3" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <ElNidoParadiseImages image="city4" />
                  <ElNidoParadiseImages image="city5" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit2.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ElNidoParadiseImages image="tuktuk" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <ElNidoParadiseImages image="departure1" />
                  <ElNidoParadiseImages image="departure2" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <ArticleCardContainer>
                <ElNidoWhichTourCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit3.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ElNidoParadiseImages image="paradise1" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ElNidoParadiseImages image="paradise2" />
                  <ElNidoParadiseImages image="paradise3" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <ElNidoParadiseImages image="paradise4" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part8")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <ElNidoParadiseImages image="snorkeling1" />
                  <ElNidoParadiseImages image="snorkeling2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <ElNidoParadiseImages image="snorkeling3" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit4.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <p>{t("visit4.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <ElNidoParadiseImages image="paradise5" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <ElNidoParadiseImages image="paradise6" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <ElNidoParadiseImages image="paradise7" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ElNidoParadiseImages image="paradise8" />
                  <ElNidoParadiseImages image="paradise9" />
                </TwoImagesSameSizeOrToGroup>
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
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <ElNidoParadiseImages image="cardFr1" key="cardFr1" />,
                    <ElNidoParadiseImages image="cardFr2" key="cardFr2" />,
                  ]
                : [
                    <ElNidoParadiseImages image="cardEn1" key="cardEn1" />,
                    <ElNidoParadiseImages image="cardEn2" key="cardEn2" />,
                  ],
          }}
        />
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

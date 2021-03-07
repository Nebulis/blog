import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/can-tho.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/can-tho.json"
import { VietnamBlogLayout, VietnamHeadline } from "../../../../components/core/asia/vietnam/vietnam"
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
import { Divider } from "../../../../components/core/divider"
import HomeImgUrl from "../../../../images/asia/vietnam/southern-vietnam/can-tho/can-tho-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesLeftBigger,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { vietnamPrimaryColorDarker } from "../../../../components/core/asia/vietnam/vietnam.colors"
import { CanThoImages } from "../../../../components/images/asia/vietnam/southern-vietnam/can-tho"
import styled from "@emotion/styled"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"

const namespace = "asia/vietnam/southern-vietnam/can-tho"
const id = "can-tho"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const InsideQuote = styled.p`
  color: ${vietnamPrimaryColorDarker};
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.vietnam.card.${id}`)
  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <VietnamBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="canThoMain" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <How>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
          <p>{t("how.part5")}</p>
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
        </HowLong>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <p>{t("how-much.part3")}</p>
          <p>{t("how-much.part4")}</p>
        </HowMuch>
        <WhereToStay>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
        <Visit>
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
              <GroupOfImages>
                <ImageAsPortrait>
                  <CanThoImages image="hotel1" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="hotel2" />
                  <CanThoImages image="hotel3" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <ul>
                <li>{t("visit2.part3")}</li>
                <li>{t("visit2.part4")}</li>
              </ul>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <TwoImagesSameSizeOrToGroup>
                <CanThoImages image="floatingMarket1" />
                <CanThoImages image="floatingMarket2" />
              </TwoImagesSameSizeOrToGroup>
            </SectionContent>
            <SectionContent>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <p>{t("visit2.part9")}</p>
              <p>{t("visit2.part10")}</p>
              {/* adding mb2 manually cause it's not working automatically: should use child.type?.__emotion_base === "p" but it's not typed*/}
              <InsideQuote className="tc b mb2">{t("visit2.part11")}</InsideQuote>
              <ImageAsPortrait>
                <CanThoImages image="floatingMarket3" />
              </ImageAsPortrait>
              <p>{t("visit2.part12")}</p>
              <p>{t("visit2.part13")}</p>
              <p>{t("visit2.part14")}</p>
              <p>{t("visit2.part15")}</p>
              <p>{t("visit2.part16")}</p>
              <p>{t("visit2.part17")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="floatingMarket4" />
                  <CanThoImages image="floatingMarket5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <CanThoImages image="floatingMarket6" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="floatingMarket7" />
                  <CanThoImages image="floatingMarket8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <CanThoImages image="floatingMarket9" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part18")}</p>
              <p>{t("visit2.part19")}</p>
              <ImageAsLandscape>
                <CanThoImages image="floatingMarket10" />
              </ImageAsLandscape>
              <p>{t("visit2.part20")}</p>
              <p>{t("visit2.part21")}</p>
              <TwoImagesLeftBigger>
                <CanThoImages image="floatingMarket11" />
                <CanThoImages image="floatingMarket12" />
              </TwoImagesLeftBigger>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="market1" />
                  <CanThoImages image="market2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="market3" />
                  <CanThoImages image="market4" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <CanThoImages image="market5" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="market6" />
                  <CanThoImages image="market7" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
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
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="rice1" />
                  <CanThoImages image="rice2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <CanThoImages image="rice3" />
                </ImageAsPortrait>
                <TwoImagesSameSize>
                  <CanThoImages image="rice4" />
                  <CanThoImages image="rice5" />
                </TwoImagesSameSize>
              </GroupOfImages>
              <p>{t("visit4.part7")}</p>
              <p>{t("visit4.part8")}</p>
              <TwoImagesSameSize>
                <CanThoImages image="rice6" />
                <CanThoImages image="rice7" />
              </TwoImagesSameSize>
            </SectionContent>
            <p>{t("visit4.part9")}</p>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit5.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <TwoImagesSameSizeOrToGroup>
                <CanThoImages image="ride1" />
                <CanThoImages image="ride2" />
              </TwoImagesSameSizeOrToGroup>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit6.title") || " lol"}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p className="b tc">{t("visit6.part1")}</p>
              <p className="mb4">{t("visit6.part2")}</p>
              <p className="b tc">{t("visit6.part3")}</p>
              <p className="mb4">{t("visit6.part4")}</p>
              <p className="b tc">{t("visit6.part5")}</p>
              <p className="mb4">{t("visit6.part6")}</p>
              <ImageAsPortrait>
                <CanThoImages image="pineapple" />
              </ImageAsPortrait>
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
                ? [<CanThoImages image="cardFr1" key="cardFr1" />, <CanThoImages image="cardFr2" key="cardFr1" />]
                : [<CanThoImages image="cardEn1" key="cardEn1" />, <CanThoImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

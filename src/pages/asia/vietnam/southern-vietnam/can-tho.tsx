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
  Covid,
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
import { ApplicationContext } from "../../../../components/application"
import { useContext } from "react"
import { css } from "@emotion/react"
import { GetYourGuideCard } from "../../../../components/core/get-your-guide"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import winterSpringColorsHouse from "../../../../images/asia/vietnam/southern-vietnam/can-tho/winter-spring-colors-house.jpg"
import queenieHouse from "../../../../images/asia/vietnam/southern-vietnam/can-tho/queenie-house.jpg"
import greenVillageMekong from "../../../../images/asia/vietnam/southern-vietnam/can-tho/green-village-mekong.jpg"

const namespace = "asia/vietnam/southern-vietnam/can-tho"
const id = "can-tho"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const InsideQuote = styled.p`
  color: ${vietnamPrimaryColorDarker};
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { covid } = useContext(ApplicationContext)
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
          <p>{t("how-much.part5")}</p>
          <BookingGygCardContainer>
            <GetYourGuideCard
              to="h-chi-minh-ville-l272/circuit-de-2-jours-en-petit-groupe-au-delta-du-mkong-avec-t125249"
              title={
                i18n.languageCode === "fr"
                  ? "Excursion de 2 jours dans le delta du Mékong et le marché flottant"
                  : "Mekong Delta and Floating Market 2-Day Small Group Tour"
              }
              rating={4.2}
              image="https://cdn.getyourguide.com/img/tour/5e58ba1e4b64e.jpeg/38"
              price={96}
              duration={{ value: 2, unit: "day" }}
              groupSize="small"
            />
            <GetYourGuideCard
              to="h-chi-minh-ville-l272/march-flottant-de-cai-rang-et-delta-du-mkong-2-jours-t111085"
              title={
                i18n.languageCode === "fr"
                  ? "Marché flottant de Cai Rang et delta du Mékong"
                  : "Cai Rang Floating Market and Mekong Delta"
              }
              rating={4.1}
              image="https://cdn.getyourguide.com/img/tour/59d75898331b0.jpeg/38"
              certified
              price={54}
              duration={{ value: 2, unit: "day" }}
            />
            <GetYourGuideCard
              to="h-chi-minh-ville-l272/depuis-h-chi-minh-3-jours-du-delta-du-mkong-au-cambodge-t111100"
              title={
                i18n.languageCode === "fr"
                  ? "Depuis Hô-Chi-Minh-Ville : 3 jours dans le delta du Mékong"
                  : "Mekong Delta: 3-Day 2-Night with Phnom Penh Exit, Cambodia"
              }
              rating={4.3}
              certified
              image="https://cdn.getyourguide.com/img/tour/595e01c8d9aed.jpeg/38"
              price={112}
              duration={{ value: 3, unit: "day" }}
            />
          </BookingGygCardContainer>
          <p
            css={css`
              margin-bottom: 1.45rem;
            `}
          >
            {t("how-much.part6")}
          </p>
          {covid && <Covid>{t("how-much.part7")}</Covid>}
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="vn/winter-spring-colors-house-can-tho"
              title="Winter Spring Colors House"
              image={winterSpringColorsHouse}
              note="9,3"
              price={10}
              people={2}
              kind="low-cost"
            />
            <BookingCard
              hotel="vn/queenie-house"
              title="Queenie House"
              image={queenieHouse}
              note="9,6"
              price={18}
              people={2}
              kind="standard"
            />
            <BookingCard
              hotel="vn/green-village-mekong"
              title="Green Village Mekong"
              image={greenVillageMekong}
              note="9,4"
              price={31}
              people={2}
              kind="standard"
            />
          </BookingGygCardContainer>
          <BookingWarning />
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
              <GroupOfImages>
                <ImageAsLandscape>
                  <CanThoImages image="floatingMarket10" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <CanThoImages image="floatingMarket13" />
                  <CanThoImages image="floatingMarket14" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
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

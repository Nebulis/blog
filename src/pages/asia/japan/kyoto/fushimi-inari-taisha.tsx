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
  WhereToHave,
  WhereToStay,
} from "../../../../components/core/section"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/kyoto/fushimi-inari-taisha.json"
import translationEn from "../../../../locales/en/asia/japan/kyoto/fushimi-inari-taisha.json"
import HomeImgUrl from "../../../../images/asia/japan/kyoto/fushimi/fushimi-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { ApplicationContext } from "../../../../components/application"
import { getLink } from "../../../../components/core/links/links.utils"
import { Comments } from "../../../../components/core/comments"
import { FushimiInariTaishaImages } from "../../../../components/images/asia/japan/kyoto/fushimi-inari-taisha"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { buildPixabayUrl } from "../../../../utils"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import urbanKyoto from "../../../../images/asia/japan/kyoto/fushimi/urban-kyoto-kyoto.jpg"
import yamashinaHotel from "../../../../images/asia/japan/kyoto/fushimi/kyoto-yamashina-hotel-sanraku.jpg"
import jingTing from "../../../../images/asia/japan/kyoto/fushimi/jing-ting-wu-yu-wu-song.jpg"
import { BookingGygCardContainer } from "../../../../components/layout/layout"

const namespace = "asia/japan/kyoto/fushimi-inari-taisha"
const id = "fushimi-inari-taisha"
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
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        fullTitle={t("full-title")}
        image={HomeImgUrl}
        location={location}
      />
      <JapanBlogLayout page={id} location={location}>
        <JapanTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardJapanImages image="fushimi" />
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
          <p>{t("how.part7")}</p>
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
              hotel="jp/urban-kyoto-kyoto"
              title="Urban Hotel Kyoto"
              image={urbanKyoto}
              note="7,1"
              price={67}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/kyoto-yamashina-hotel-sanraku"
              title="Kyoto Yamashina Hotel Sanraku"
              image={yamashinaHotel}
              note="8,5"
              price={90}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/jing-ting-wu-yu-wu-song"
              title="京町屋 御屋・松"
              image={jingTing}
              note="9,4"
              price={230}
              people={2}
              kind="flat"
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
              <p>{t("visit.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <FushimiInariTaishaImages image="visit" />
                  <FushimiInariTaishaImages image="visit2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="visit3" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <FushimiInariTaishaImages image="visit4" />
                  <FushimiInariTaishaImages image="visit5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="visit6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="visit7" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <FushimiInariTaishaImages image="history2" />
              </ImageAsLandscape>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="history3" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="history4" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="history5" />
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
              <ImageAsLandscape>
                <FushimiInariTaishaImages image="toriis" />
              </ImageAsLandscape>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="toriis2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="toriis3" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/michelleraponi-165491")}>
                    michelleraponi
                  </ExternalLinkNotUnderlined>
                }
              >
                <FushimiInariTaishaImages image="discovery" />
              </ImageAsLandscape>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="discovery2" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="discovery3" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="discovery4" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="discovery5" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <FushimiInariTaishaImages image="discovery7" />
                  <FushimiInariTaishaImages image="discovery8" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit3.part8")}</p>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <p>{t("visit3.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <FushimiInariTaishaImages image="discovery9" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <FushimiInariTaishaImages image="discovery10" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait
                  credit={
                    <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/gadgetstou-17189958")}>
                      gadgetstou
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <FushimiInariTaishaImages image="discovery11" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <FushimiInariTaishaImages image="discovery12" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <FushimiInariTaishaImages image="discovery13" />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <p>{t("where-to-have.part3")}</p>
        </WhereToHave>
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
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}\n${t("facebook.part3")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <FushimiInariTaishaImages image="cardFr1" key="cardFr1" />,
                    <FushimiInariTaishaImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <FushimiInariTaishaImages image="cardEn1" key="cardEn1" />,
                    <FushimiInariTaishaImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

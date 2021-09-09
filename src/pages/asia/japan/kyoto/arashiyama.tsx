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
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/kyoto/arashiyama.json"
import translationEn from "../../../../locales/en/asia/japan/kyoto/arashiyama.json"
import HomeImgUrl from "../../../../images/asia/japan/carousel-japan.jpg"
import ArashiyamaMap from "../../../../images/asia/japan/kyoto/arashiyama/arashiyama-map.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import { ArashiyamaImages } from "../../../../components/images/asia/japan/kyoto/arashiyama"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { buildPixabayUrl } from "../../../../utils"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import sunMembersKyotoSaga from "../../../../images/asia/japan/kyoto/arashiyama/sun-members-kyoto-saga.jpg"
import businessArashiyama from "../../../../images/asia/japan/kyoto/arashiyama/business-arashiyama.jpg"
import binarioSagaArashiyama from "../../../../images/asia/japan/kyoto/arashiyama/binario-saga-arashiyama.jpg"
import { FakeList } from "../../../../components/core/title"

const namespace = "asia/japan/kyoto/arashiyama"
const id = "arashiyama"
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
          <SharedCardJapanImages image="arashiyama" />
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
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/sun-members-kyoto-saga"
              title="Sun Members Kyoto Saga"
              image={sunMembersKyotoSaga}
              note="7,9"
              price={100}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/business-arashiyama"
              title="Hotel Arashiyama"
              image={businessArashiyama}
              note="8,2"
              price={110}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/binario-saga-arashiyama"
              title="Hotel Binario Saga Arashiyama"
              image={binarioSagaArashiyama}
              note="8,1"
              price={124}
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
                <ImageAsPortrait>
                  <ArashiyamaImages image="visit" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="visit2" />
                  <ArashiyamaImages image="visit3" />
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
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ArashiyamaImages image="street" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="street2" />
                  <ArashiyamaImages image="street11" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="street3" />
                  <ArashiyamaImages image="street4" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="street5" />
                  <ArashiyamaImages image="street6" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit1.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <ArashiyamaImages image="street7" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <ArashiyamaImages image="street8" />
                </ImageAsLandscapeOnTheRight>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="street9" />
                  <ArashiyamaImages image="street10" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
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
              <TwoImagesSameSize>
                <ArashiyamaImages image="bamboo" />
                <ArashiyamaImages image="bamboo2" />
              </TwoImagesSameSize>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="bamboo3" />
                  <ArashiyamaImages image="bamboo4" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortraitOnTheLeft>
                  <ArashiyamaImages image="bamboo5" />
                </ImageAsPortraitOnTheLeft>
                <ImageAsPortraitOnTheRight>
                  <ArashiyamaImages image="bamboo6" />
                </ImageAsPortraitOnTheRight>
              </GroupOfImages>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <p>{t("visit2.part9")}</p>
              <p>{t("visit2.part10")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ArashiyamaImages image="bamboo7" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <ArashiyamaImages image="bamboo8" />
                  <ArashiyamaImages image="bamboo9" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit2.part11")}</p>
              <p>{t("visit2.part12")}</p>
              <p>{t("visit2.part13")}</p>
              <p>{t("visit2.part14")}</p>
              <p>{t("visit2.part15")}</p>
              <p>{t("visit2.part16")}</p>
              <ul>
                <li>{t("visit2.part17")}</li>
                <li>{t("visit2.part18")}</li>
                <li>{t("visit2.part19")}</li>
                <li>{t("visit2.part20")}</li>
                <li>{t("visit2.part21")}</li>
                <li>{t("visit2.part22")}</li>
                <li>{t("visit2.part23")}</li>
                <li>{t("visit2.part24")}</li>
                <li>{t("visit2.part25")}</li>
              </ul>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ArashiyamaImages image="bamboo10" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ArashiyamaImages image="bamboo11" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part26")}</p>
              <p>{t("visit2.part27")}</p>
              <ImageAsPortrait>
                <ArashiyamaImages image="bamboo12" />
              </ImageAsPortrait>
              <p>{t("visit2.part28")}</p>
              <p>{t("visit2.part29")}</p>
              <p>{t("visit2.part30")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ArashiyamaImages image="bamboo13" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <ArashiyamaImages image="bamboo14" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <ArashiyamaImages image="bamboo15" />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <MapContainer>
                <img src={ArashiyamaMap} alt="Arashiyama Map" />
              </MapContainer>
              <p>{t("visit3.part3")}</p>
              <FakeList>{t("visit3.part4")}</FakeList>
              <FakeList>{t("visit3.part5")}</FakeList>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <FakeList>{t("visit3.part8")}</FakeList>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <FakeList>{t("visit3.part11")}</FakeList>
              <p>{t("visit3.part12")}</p>
              <p>{t("visit3.part13")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/michelleraponi-165491")}>
                    michelleraponi
                  </ExternalLinkNotUnderlined>
                }
              >
                <ArashiyamaImages image="monkey" />
              </ImageAsPortrait>
              <FakeList>{t("visit3.part14")}</FakeList>
              <p>{t("visit3.part15")}</p>
              <FakeList>{t("visit3.part16")}</FakeList>
              <p>{t("visit3.part17")}</p>
              <FakeList>{t("visit3.part18")}</FakeList>
              <p>{t("visit3.part19")}</p>
              <p>{t("visit3.part20")}</p>
              <FakeList>{t("visit3.part21")}</FakeList>
              <p>{t("visit3.part22")}</p>
              <p>{t("visit3.part23")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/michelleraponi-165491")}>
                    michelleraponi
                  </ExternalLinkNotUnderlined>
                }
              >
                <ArashiyamaImages image="kimono" />
              </ImageAsPortrait>
              <FakeList>{t("visit3.part24")}</FakeList>
              <p>{t("visit3.part25")}</p>
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
                    <ArashiyamaImages image="cardFr1" key="cardFr1" />,
                    <ArashiyamaImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <ArashiyamaImages image="cardEn1" key="cardEn1" />,
                    <ArashiyamaImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

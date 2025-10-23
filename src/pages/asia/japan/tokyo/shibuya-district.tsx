import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/shibuya-district.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/shibuya-district.json"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
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
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/shibuya-district/shibuya-district-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import emitShibuya from "../../../../images/asia/japan/tokyo/shibuya-district/emit-shibuya.jpg"
import shibuyaExcelTokyo from "../../../../images/asia/japan/tokyo/shibuya-district/shibuya-excel-tokyu.jpg"
import ceruleanTowerTokyo from "../../../../images/asia/japan/tokyo/shibuya-district/cerulean-tower-tokyu.jpg"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import { ShibuyaDistrictImages } from "../../../../components/images/asia/japan/tokyo/shibuya-district"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { buildPixabayUrl } from "../../../../utils"

const namespace = "asia/japan/tokyo/shibuya-district"
const id = "shibuya-district"
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
          <SharedCardJapanImages image="shibuyaDistrict" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <ul>
            <li>{t("how.part2")}</li>
            <li>{t("how.part3")}</li>
          </ul>
          <p>{t("how.part4")}</p>
          <ul>
            <li>{t("how.part5")}</li>
          </ul>
          <p>{t("how.part6")}</p>
          <ul>
            <li>{t("how.part7")}</li>
          </ul>
          {transportLinkPublished && <p>{t("how.part8")}</p>}
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/emit-shibuya"
              title="Hotel Emit Shibuya"
              image={emitShibuya}
              note="8,3"
              price={59}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/shibuya-excel-tokyu"
              title="Shibuya Excel Hotel Tokyu"
              image={shibuyaExcelTokyo}
              note="8,5"
              price={120}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/cerulean-tower-tokyu"
              title="Cerulean Tower Tokyu Hotel"
              image={ceruleanTowerTokyo}
              note="9,0"
              price={220}
              people={2}
              kind="deluxe"
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part4")}</BookingWarning>
          <p>{t("where-to-stay.part5")}</p>
        </WhereToStay>
        <Visit>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
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
              <p>{t("visit1.part5")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <ShibuyaDistrictImages image="crossing5" />
                  <ShibuyaDistrictImages image="crossing6" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="crossing" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="crossing2" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="crossing3" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="crossing4" />
                </ImageAsPortrait>
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
              <ImageAsLandscape>
                <ShibuyaDistrictImages image="hachiko" />
              </ImageAsLandscape>
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
              <ImageAsLandscape>
                <ShibuyaDistrictImages image="mall" />
              </ImageAsLandscape>
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
              <GroupOfImages>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="takeshitaStreet2" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet3" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <ShibuyaDistrictImages image="takeshitaStreet4" />
                  <ShibuyaDistrictImages image="takeshitaStreet5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet6" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <ShibuyaDistrictImages image="takeshitaStreet7" />
                  <ShibuyaDistrictImages image="takeshitaStreet8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet9" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="takeshitaStreet10" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet11" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit4.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="takeshitaStreet12" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet13" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="takeshitaStreet14" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet15" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="takeshitaStreet16" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ShibuyaDistrictImages image="takeshitaStreet17" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <ShibuyaDistrictImages image="takeshitaStreet18" />
                  <ShibuyaDistrictImages image="takeshitaStreet19" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <ShibuyaDistrictImages image="takeshitaStreet20" />
                </ImageAsLandscape>
              </GroupOfImages>
              <Divider />
              <p>{t("visit4.part7")}</p>
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
                    <ShibuyaDistrictImages image="cardFr1" key="cardFr1" />,
                    <ShibuyaDistrictImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <ShibuyaDistrictImages image="cardEn1" key="cardEn1" />,
                    <ShibuyaDistrictImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

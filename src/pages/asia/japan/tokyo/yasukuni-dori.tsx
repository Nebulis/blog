import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/yasukuni-dori.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/yasukuni-dori.json"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { How, HowLong, Introduction, SectionContent, Visit, WhereToStay } from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/yasukuni-dori/yasukuni-dori-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { japanPrimaryColor } from "../../../../components/core/japan/japan.variables"
import { css } from "@emotion/react"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import apahoteru from "../../../../images/asia/japan/tokyo/yasukuni-dori/apahoteru-xin-su-ge-wu-ji-ting-zhong-yang.jpg"
import bestWestern from "../../../../images/asia/japan/tokyo/yasukuni-dori/best-western-shinjuku-astina.jpg"
import graceryShinjuku from "../../../../images/asia/japan/tokyo/yasukuni-dori/gracery-shinjuku.jpg"
import { YasukuniDoriImages } from "../../../../components/images/asia/japan/tokyo/yasukuni-dori"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { buildPixabayUrl } from "../../../../utils"

const namespace = "asia/japan/tokyo/yasukuni-dori"
const id = "yasukuni-dori"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)

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
          <SharedCardJapanImages image="yasukuniDori" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <How title={t("how.title")}>
          <p
            css={css`
              text-align: center;
              color: ${japanPrimaryColor};
            `}
            className="mb2"
          >
            {t("how.part1")}
          </p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="jp/apahoteru-xin-su-ge-wu-ji-ting-zhong-yang"
              title="APA Hotel Shinjuku Kabukicho Chuo"
              image={apahoteru}
              note="8,2"
              price={76}
              people={2}
              kind="hotel"
            />
            <BookingCard
              hotel="jp/best-western-shinjuku-astina"
              title="Citadines Central Shinjuku Tokyo"
              image={bestWestern}
              note="8,5"
              price={88}
              people={2}
              kind="flat"
            />
            <BookingCard
              hotel="jp/gracery-shinjuku"
              title="Hotel Gracery Shinjuku"
              image={graceryShinjuku}
              note="8,5"
              price={100}
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
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriDay" />
                  <YasukuniDoriImages image="yasukuniDoriDay2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriDay3" />
                  <YasukuniDoriImages image="yasukuniDoriDay4" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriDay5" />
                  <YasukuniDoriImages image="yasukuniDoriDay6" imgStyle={{ objectFit: "contain" }} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriDay7" />
                  <YasukuniDoriImages image="yasukuniDoriDay8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <YasukuniDoriImages image="yasukuniDoriDay9" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriDay10" />
                  <YasukuniDoriImages image="yasukuniDoriDay11" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriDay12" />
                  <YasukuniDoriImages image="yasukuniDoriDay13" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscapeOnTheLeft>
                  <YasukuniDoriImages image="yasukuniDoriDay14" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <YasukuniDoriImages image="yasukuniDoriDay15" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <YasukuniDoriImages image="yasukuniDoriDay16" />
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
              <GroupOfImages>
                <ImageAsLandscape
                  credit={
                    <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/937983-937983")}>
                      937983
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <YasukuniDoriImages image="yasukuniDoriNight" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <YasukuniDoriImages image="yasukuniDoriNight2" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <YasukuniDoriImages image="yasukuniDoriNight3" />
                  <YasukuniDoriImages image="yasukuniDoriNight4" />
                </TwoImagesSameSizeOrToGroup>
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
                    <YasukuniDoriImages image="cardFr1" key="cardFr1" />,
                    <YasukuniDoriImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <YasukuniDoriImages image="cardEn1" key="cardEn1" />,
                    <YasukuniDoriImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { ImageAsLandscape } from "../../../../components/images/layout"
import {
  HowLong,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/two-days-in-tokyo.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/two-days-in-tokyo.json"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/two-days-in-tokyo/two-days-in-tokyo-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import { css } from "@emotion/react"
import { ArticleCardContainer } from "../../../../components/layout/layout"
import {
  SensojiCard,
  ShibuyaDistrictCard,
  UenoParkCard,
  YasukuniDoriCard,
} from "../../../../components/core/japan/japan.cards"
import { TwoDaysInTokyoImages } from "../../../../components/images/asia/japan/tokyo/two-days-in-tokyo"

const namespace = "asia/japan/tokyo/two-days-in-tokyo"
const id = "two-days-in-tokyo"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transport-japan").published
  const hamarikyuGardenPublished = development || getLink("hamarikyu-garden").published
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
          <SharedJapanImages image="mainTokyo" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
          <p>{t("where-to-stay.part4")}</p>
          {transportLinkPublished && <p>{t("where-to-stay.part5")}</p>}
        </WhereToStay>
        <Visit title={t("visit.title")}>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
          </SectionContent>
          <Divider />
          <section>
            <div
              className="ttu tc f4 b"
              css={css`
                margin-bottom: 1.45rem;
              `}
            >
              {t("day1.title")}
            </div>
            <Divider />
            <JapanHeadline>{t("day1.visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("day1.visit1.part1")}</p>
              <p>{t("day1.visit1.part2")}</p>
              <ul>
                <li>
                  {t("day1.visit1.part3")}
                  <p>{t("day1.visit1.part4")}</p>
                </li>
                <li>
                  {t("day1.visit1.part5")}
                  <p>{t("day1.visit1.part6")}</p>
                </li>
                <li>
                  {t("day1.visit1.part7")}
                  <p>{t("day1.visit1.part8")}</p>
                </li>
                <li>
                  {t("day1.visit1.part9")}
                  <p>{t("day1.visit1.part10")}</p>
                </li>
              </ul>
              <ArticleCardContainer>
                <ShibuyaDistrictCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <div
              className="ttu tc f4 b"
              css={css`
                margin-bottom: 1.45rem;
              `}
            >
              {t("day2.title")}
            </div>
            <Divider />
            <JapanHeadline>{t("day2.visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("day2.visit2.part1")}</p>
              <p>{t("day2.visit2.part2")}</p>
              <p>{t("day2.visit2.part3")}</p>
              <ArticleCardContainer>
                <UenoParkCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("day2.visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("day2.visit3.part1")}</p>
              <p>{t("day2.visit3.part2")}</p>
              <p>{t("day2.visit3.part3")}</p>
              <ArticleCardContainer>
                <SensojiCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("day2.visit4.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("day2.visit4.part1")}</p>
              <p>{t("day2.visit4.part2")}</p>
              <ArticleCardContainer>
                <YasukuniDoriCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
              <p>{t("day2.visit4.part3")}</p>
              {hamarikyuGardenPublished && <p>{t("day2.visit4.part4")}</p>}
              <p>{t("day2.visit4.part5")}</p>
              <p>{t("day2.visit4.part6")}</p>
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
                ? [
                    <TwoDaysInTokyoImages image="cardFr1" key="cardFr1" />,
                    <TwoDaysInTokyoImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <TwoDaysInTokyoImages image="cardEn1" key="cardEn1" />,
                    <TwoDaysInTokyoImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import { Comments } from "../../../components/core/comments"
import translationFr from "../../../locales/fr/asia/japan/food-in-japan.json"
import translationEn from "../../../locales/en/asia/japan/food-in-japan.json"
import { JapanBlogLayout, JapanTitle, JapanHeadline } from "../../../components/core/japan/japan"
import {
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  WhereToStay,
} from "../../../components/core/section"
import { Conclusion } from "../../../components/core/conclusion"
import { Divider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/asia/japan/home.jpg"

const namespace = "asia/japan/food-in-japan"
const id = "food-in-japan"
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
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <When>
          <p>{t("when.part1")}</p>
        </When>
        <How>
          <p>{t("how.part1")}</p>
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay>
          <p>{t("where-to-stay.part1")}</p>
        </WhereToStay>
        <Visit>
          <p>{t("visit.part1")}</p>
        </Visit>
        <Divider />
        <section>
          <JapanHeadline>{t("visit1.title")}</JapanHeadline>
          <Divider />
          <SectionContent>
            <p>{t("visit1.part1")}</p>
          </SectionContent>
        </section>
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
            nodes: i18n.languageCode === "fr" ? [] : [],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

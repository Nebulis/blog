import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/oceania/australia/queensland/kuranda-village.json"
import translationEn from "../../../../locales/en/oceania/australia/queensland/kuranda-village.json"
import { AustraliaBlogLayout, AustraliaHeadline } from "../../../../components/core/oceania/australia/australia"
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
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/oceania/australia/queensland/kuranda-village/kuranda-village-main.jpg"
import { ImageAsLandscape } from "../../../../components/images/layout"
import { SharedCardAustraliaImages } from "../../../../components/images/oceania/australia/shared-card-australia-images"

const namespace = "oceania/australia/queensland/kuranda-village"
const id = "kuranda-village"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.australia.card.${id}`)

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
      <AustraliaBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardAustraliaImages image="kurandaVillage" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
        </When>
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
        </WhereToStay>
        <Visit>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit1.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
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
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

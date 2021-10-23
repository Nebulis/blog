import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/oceania/australia/queensland/from-townsville-to-cairns.json"
import translationEn from "../../../../locales/en/oceania/australia/queensland/from-townsville-to-cairns.json"
import { AustraliaBlogLayout, AustraliaHeadline } from "../../../../components/core/oceania/australia/australia"
import {
  HowLong,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  Where,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/oceania/australia/queensland/from-townsville-to-cairns/from-townsville-to-cairns-main.jpg"
import QueenslandMap from "../../../../images/oceania/australia/queensland/from-townsville-to-cairns/queensland-map.png"
import { GroupOfImages, ImageAsLandscape } from "../../../../components/images/layout"
import { SharedCardAustraliaImages } from "../../../../components/images/oceania/australia/shared-card-australia-images"
import { ArticleCardContainer, MapContainer } from "../../../../components/layout/layout"
import {
  GreenIslandCard,
  KurandaVillageCard,
  MagneticIslandCard,
} from "../../../../components/core/oceania/australia/australia.cards"
import { FromTownsvilleToCairnsImages } from "../../../../components/images/oceania/australia/queensland/from-townsville-to-cairns"

const namespace = "oceania/australia/queensland/from-townsville-to-cairns"
const id = "from-townsville-to-cairns"
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
          <SharedCardAustraliaImages image="fromTownsvilleToCairns" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
        </HowLong>
        <Where title={t("itinerary.title")}>
          <p>{t("itinerary.part1")}</p>
          <p>{t("itinerary.part2")}</p>
          <p>{t("itinerary.part3")}</p>
          <Divider />
          <MapContainer>
            <img src={QueenslandMap} alt="Queensland map" />
          </MapContainer>
        </Where>
        <Visit>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part2.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part1")}</p>
              <p>{t("visit.part2.part2")}</p>
              <p>{t("visit.part2.part3")}</p>
              <p>{t("visit.part2.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <FromTownsvilleToCairnsImages image="townsville" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <FromTownsvilleToCairnsImages image="townsville4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <FromTownsvilleToCairnsImages image="townsville2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part2.part5")}</p>
              <ImageAsLandscape>
                <FromTownsvilleToCairnsImages image="townsville3" />
              </ImageAsLandscape>
              <Divider />
              <p>{t("visit.part2.part6")}</p>
              <p>{t("visit.part2.part7")}</p>
              <ArticleCardContainer>
                <MagneticIslandCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part3.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part3.part1")}</p>
              <p>{t("visit.part3.part2")}</p>
              <p>{t("visit.part3.part3")}</p>
              <ImageAsLandscape>
                <FromTownsvilleToCairnsImages image="missionBeach" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part4.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part1")}</p>
              <p>{t("visit.part4.part2")}</p>
              <p>{t("visit.part4.part3")}</p>
              <ArticleCardContainer>
                <KurandaVillageCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part4")}</p>
              <p>{t("visit.part4.part5")}</p>
              <p>{t("visit.part4.part6")}</p>
              <p>{t("visit.part4.part7")}</p>
              <ArticleCardContainer>
                <GreenIslandCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part8")}</p>
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
                    <FromTownsvilleToCairnsImages image="cardFr1" key="cardFr1" />,
                    <FromTownsvilleToCairnsImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <FromTownsvilleToCairnsImages image="cardEn1" key="cardEn1" />,
                    <FromTownsvilleToCairnsImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

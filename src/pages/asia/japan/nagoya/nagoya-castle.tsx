import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import {
  Bonus,
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
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/nagoya/nagoya-castle.json"
import translationEn from "../../../../locales/en/asia/japan/nagoya/nagoya-castle.json"
import HomeImgUrl from "../../../../images/asia/japan/nagoya/castle/nagoya-castle-main.jpg"
import NagoyaCastleMap from "../../../../images/asia/japan/nagoya/castle/nagoya-castle-map.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { ApplicationContext } from "../../../../components/application"
import { getLink } from "../../../../components/core/links/links.utils"
import { Comments } from "../../../../components/core/comments"
import { NagoyaCastleImages } from "../../../../components/images/asia/japan/nagoya/nagoya-castle-images"
import { MapContainer } from "../../../../components/layout/layout"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"

const namespace = "asia/japan/nagoya/nagoya-castle"
const id = "nagoya-castle"
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
          <SharedCardJapanImages image="nagoyaCastle" />
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
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <ImageAsLandscape>
            <NagoyaCastleImages image="food" />
          </ImageAsLandscape>
        </WhereToHave>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <ImageAsLandscape>
                <NagoyaCastleImages image="history" />
              </ImageAsLandscape>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <p>{t("visit1.part7")}</p>
              <p>{t("visit1.part8")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="entrance" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <NagoyaCastleImages image="entrance2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <NagoyaCastleImages image="entrance3" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait>
                  <NagoyaCastleImages image="entrance4" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part2")}</p>
              <MapContainer className="mb2">
                <img src={NagoyaCastleMap} alt="Nagoya Castle Map" />
              </MapContainer>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <NagoyaCastleImages image="entrance5" />
                  <NagoyaCastleImages image="entrance6" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <NagoyaCastleImages image="entrance7" />
                  <NagoyaCastleImages image="entrance8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="entrance9" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <GroupOfImages>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="honmaru" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="honmaru2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>

              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://www.nagoyajo.city.nagoya.jp/en/nagoyajo/honmarugoten/about/">
                    nagoyajo
                  </ExternalLinkNotUnderlined>
                }
              >
                <NagoyaCastleImages image="honmaru3" />
              </ImageAsPortrait>
              <p>{t("visit3.part3")}</p>
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
              <p>{t("visit4.part4")}</p>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="castle" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="castle2" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit5.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <p>{t("visit5.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden2" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <NagoyaCastleImages image="garden3" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <NagoyaCastleImages image="garden4" />
                </ImageAsLandscapeOnTheRight>
                <TwoImagesSameSizeOrToGroup>
                  <NagoyaCastleImages image="garden5" />
                  <NagoyaCastleImages image="garden6" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <NagoyaCastleImages image="garden7" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <NagoyaCastleImages image="garden8" />
                  <NagoyaCastleImages image="garden9" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden10" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit5.part5")}</p>
              <p>{t("visit5.part6")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <NagoyaCastleImages image="garden11" />
                  <NagoyaCastleImages image="garden12" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <NagoyaCastleImages image="garden13" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <NagoyaCastleImages image="garden14" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden15" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden16" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden17" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden18" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit5.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden19" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <NagoyaCastleImages image="garden20" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
        <Bonus title={t("bonus.title")}>
          <p>{t("bonus.part1")}</p>
        </Bonus>
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
                    <NagoyaCastleImages image="cardFr1" key="cardFr1" />,
                    <NagoyaCastleImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <NagoyaCastleImages image="cardEn1" key="cardEn1" />,
                    <NagoyaCastleImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

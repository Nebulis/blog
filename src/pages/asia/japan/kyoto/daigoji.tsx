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
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/kyoto/daigoji.json"
import translationEn from "../../../../locales/en/asia/japan/kyoto/daigoji.json"
import HomeImgUrl from "../../../../images/asia/japan/kyoto/daigoji/daigoji-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Comments } from "../../../../components/core/comments"
import DaigojiMap from "../../../../images/asia/japan/kyoto/daigoji/daigoji-map.jpg"
import { MapContainer } from "../../../../components/layout/layout"
import { DaigojiImages } from "../../../../components/images/asia/japan/kyoto/daigoji"

const namespace = "asia/japan/kyoto/daigoji"
const id = "daigoji"
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
          <SharedCardJapanImages image="daigoji" />
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
        </HowLong>{" "}
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
        </WhereToStay>
        <Visit title={t("visit.title")}>
          <section>
            <SectionContent>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <ul>
                <li>{t("visit.part3")}</li>
                <li>{t("visit.part4")}</li>
                <li>{t("visit.part5")}</li>
              </ul>
              <MapContainer className="mb2">
                <img src={DaigojiMap} alt="Daigoji Map" />
              </MapContainer>
              <p>{t("visit.part6")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <DaigojiImages image="samboin" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin2" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <ImageAsLandscape>
                <DaigojiImages image="samboin3" />
              </ImageAsLandscape>
              <p>{t("visit1.part7")}</p>
              <p>{t("visit1.part8")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="samboin4" />
                  <DaigojiImages image="samboin5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin8" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit1.part9")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="samboin9" />
                  <DaigojiImages image="samboin10" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <DaigojiImages image="samboin11" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="samboin12" />
                  <DaigojiImages image="samboin13" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin14" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <DaigojiImages image="samboin15" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit1.part10")}</p>
              <p>{t("visit1.part11")}</p>
              <ImageAsLandscape>
                <DaigojiImages image="samboin16" />
              </ImageAsLandscape>
              <p>{t("visit1.part12")}</p>
              <p>{t("visit1.part13")}</p>
              <p>{t("visit1.part14")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin17" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <DaigojiImages image="samboin18" />
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
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="shimoDaiho" />
                  <DaigojiImages image="shimoDaiho2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <DaigojiImages image="shimoDaiho3" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <DaigojiImages image="shimoDaiho4" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <DaigojiImages image="shimoDaiho5" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <DaigojiImages image="shimoDaiho6" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <p>{t("visit2.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <DaigojiImages image="shimoDaiho7" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <DaigojiImages image="shimoDaiho8" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <DaigojiImages image="shimoDaiho9" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="shimoDaiho10" />
                  <DaigojiImages image="shimoDaiho11" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <DaigojiImages image="shimoDaiho12" />
                </ImageAsLandscape>
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
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <DaigojiImages image="kamiDaigo2" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="kamiDaigo3" />
                  <DaigojiImages image="kamiDaigo4" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <DaigojiImages image="kamiDaigo5" />
                  <DaigojiImages image="kamiDaigo6" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
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
                ? [<DaigojiImages image="cardFr1" key="cardFr1" />, <DaigojiImages image="cardFr2" key="cardFr1" />]
                : [<DaigojiImages image="cardEn1" key="cardEn1" />, <DaigojiImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

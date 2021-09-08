import React from "react"
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
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  When,
  Where,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/sensoji.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/sensoji.json"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/sensoji/sensoji-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Quote } from "../../../../components/core/quote"
import { Divider } from "../../../../components/core/divider"
import { Comments } from "../../../../components/core/comments"
import { SensojiImages } from "../../../../components/images/asia/japan/tokyo/sensoji"

const namespace = "asia/japan/tokyo/sensoji"
const id = "sensoji"
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
          <SharedCardJapanImages image="sensoji" />
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
          <p>{t("how.part2")}</p>
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
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
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
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
              <ImageAsLandscape>
                <SensojiImages image="sensojiComplex" />
              </ImageAsLandscape>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <p>{t("visit2.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <SensojiImages image="sensojiComplex2" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <SensojiImages image="sensojiComplex3" />
                  <SensojiImages image="sensojiComplex4" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <SensojiImages image="sensojiComplex5" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit2.part8")}</p>
              <p>{t("visit2.part9")}</p>
              <p>{t("visit2.part10")}</p>
              <p>{t("visit2.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <SensojiImages image="sensojiComplex6" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <SensojiImages image="sensojiComplex7" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <SensojiImages image="sensojiComplex8" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <SensojiImages image="sensojiComplex9" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <SensojiImages image="sensojiComplex10" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <SensojiImages image="sensojiComplex11" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait>
                  <SensojiImages image="sensojiComplex12" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit2.part12")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <SensojiImages image="sensojiComplex13" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <SensojiImages image="sensojiComplex14" />
                  <SensojiImages image="sensojiComplex15" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <SensojiImages image="sensojiComplex16" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit2.part13")}</p>
              <p>{t("visit2.part14")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <SensojiImages image="sensojiComplex17" />
                  <SensojiImages image="sensojiComplex18" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <SensojiImages image="sensojiComplex19" />
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
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <SensojiImages image="sensojiGarden" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <SensojiImages image="sensojiGarden2" />
                </ImageAsLandscapeOnTheRight>
                <TwoImagesSameSizeOrToGroup>
                  <SensojiImages image="sensojiGarden3" />
                  <SensojiImages image="sensojiGarden4" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <SensojiImages image="sensojiGarden5" />
                  <SensojiImages image="sensojiGarden6" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <SensojiImages image="sensojiGarden7" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
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
                ? [<SensojiImages image="cardFr1" key="cardFr1" />, <SensojiImages image="cardFr2" key="cardFr1" />]
                : [<SensojiImages image="cardEn1" key="cardEn1" />, <SensojiImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

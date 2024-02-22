import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import { Comments } from "../../../components/core/comments"
import translationFr from "../../../locales/fr/asia/singapore/christmas-in-singapore.json"
import translationEn from "../../../locales/en/asia/singapore/christmas-in-singapore.json"
import { Introduction, PillTitle, SectionContent, Visit } from "../../../components/core/section"
import { Conclusion } from "../../../components/core/conclusion"
import { Divider } from "../../../components/core/divider"
import { Title } from "../../../components/core/title"
import HomeImgUrl from "../../../images/asia/singapore/christmas-in-singapore/christmas-in-singapore-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesLeftBigger,
  TwoImagesRightBigger,
  TwoImagesSameSizeOrToGroup,
} from "../../../components/images/layout"
import { SharedCardSingaporeImages } from "../../../components/images/asia/singapore/shared-card-singapore-images"
import { ChristmasInSingaporeImages } from "../../../components/images/asia/singapore/christmas-in-singapore"
import { ChristmasBlogLayout, ChristmasHeadline } from "../../../components/core/christmas"

const namespace = "asia/singapore/christmas-in-singapore"
const id = "christmas-in-singapore"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.singapore.card.${id}`)

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
      <ChristmasBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardSingaporeImages image="christmasInSingapore" />
        </ImageAsLandscape>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
        </SectionContent>
        <Divider />
        <PillTitle title={t("part1.title")}>
          <p>{t("part1.part1")}</p>
          <p>{t("part1.part2")}</p>
          <ImageAsLandscape>
            <ChristmasInSingaporeImages image="tradition" />
          </ImageAsLandscape>
          <p>{t("part1.part3")}</p>
          <p>{t("part1.part4")}</p>
          <p>{t("part1.part5")}</p>
          <p>{t("part1.part6")}</p>
        </PillTitle>
        <PillTitle title={t("part2.title")}>
          <p>{t("part2.part1")}</p>
          <p>{t("part2.part2")}</p>
          <p>{t("part2.part3")}</p>
        </PillTitle>
        <PillTitle title={t("part3.title")}>
          <p>{t("part3.part1")}</p>
          <p>{t("part3.part2")}</p>
          <p>{t("part3.part3")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <ChristmasInSingaporeImages image="singapore" />
            </ImageAsLandscape>
            <ImageAsPortrait>
              <ChristmasInSingaporeImages image="singapore2" />
            </ImageAsPortrait>
            <ImageAsLandscape>
              <ChristmasInSingaporeImages image="singapore3" />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>{t("part3.part4")}</p>
          <p>{t("part3.part5")}</p>
          <p>{t("part3.part6")}</p>
        </PillTitle>
        <Visit>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <ChristmasHeadline>{t("visit.title")}</ChristmasHeadline>
            <Divider />
            <PillTitle title={t("visit.title1")}>
              <p>{t("visit.part1")}</p>
              <p>{t("visit.part2")}</p>
              <p>{t("visit.part3")}</p>
            </PillTitle>
          </section>
          <Divider />
          <section>
            <ChristmasHeadline>{t("visit1.title")}</ChristmasHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
            </SectionContent>
            <PillTitle title={t("visit1.part3.title")}>
              <p>{t("visit1.part3.part1")}</p>
            </PillTitle>
            <PillTitle title={t("visit1.part4.title")}>
              <p>{t("visit1.part4.part1")}</p>
              <p>{t("visit1.part4.part2")}</p>
              <p>{t("visit1.part4.part3")}</p>
              <ImageAsLandscape>
                <ChristmasInSingaporeImages image="mbs" />
              </ImageAsLandscape>
            </PillTitle>
            <PillTitle title={t("visit1.part5.title")}>
              <p>{t("visit1.part5.part1")}</p>
              <p>{t("visit1.part5.part2")}</p>
              <p>{t("visit1.part5.part3")}</p>
              <p>{t("visit1.part5.part4")}</p>
              <ImageAsLandscape>
                <ChristmasInSingaporeImages image="garden" />
              </ImageAsLandscape>
              <p>{t("visit1.part5.part5")}</p>
              <p>{t("visit1.part5.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden2" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <ChristmasInSingaporeImages image="garden3" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <ChristmasInSingaporeImages image="garden4" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="garden5" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden7" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <ChristmasInSingaporeImages image="garden8" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <ChristmasInSingaporeImages image="garden9" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden10" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="garden11" />
                  <ChristmasInSingaporeImages image="garden12" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="garden13" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden14" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit1.part5.part7")}</p>
              <p>{t("visit1.part5.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden15" />
                </ImageAsLandscape>
                <TwoImagesRightBigger>
                  <ChristmasInSingaporeImages image="garden16" />
                  <ChristmasInSingaporeImages image="garden17" />
                </TwoImagesRightBigger>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden28" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden19" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="garden20" />
                  <ChristmasInSingaporeImages image="garden21" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="garden22" />
                  <ChristmasInSingaporeImages image="garden23" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden24" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="garden25" />
                  <ChristmasInSingaporeImages image="garden26" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden27" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden18" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="garden29" />
                  <ChristmasInSingaporeImages image="garden30" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="garden31" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden32" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden33" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="garden34" />
                </ImageAsLandscape>
                <TwoImagesRightBigger>
                  <ChristmasInSingaporeImages image="garden35" />
                  <ChristmasInSingaporeImages image="garden36" />
                </TwoImagesRightBigger>
              </GroupOfImages>
              <p>{t("visit1.part5.part9")}</p>
            </PillTitle>
          </section>
          <Divider />
          <section>
            <ChristmasHeadline>{t("visit2.title")}</ChristmasHeadline>
            <Divider />
            <PillTitle title={t("visit2.title1")}>
              <p>{t("visit2.part1")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="jewel" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="jewel2" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="jewel3" />
                  <ChristmasInSingaporeImages image="jewel4" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <ImageAsPortrait>
                <ChristmasInSingaporeImages image="jewel5" />
              </ImageAsPortrait>
              <p>{t("visit2.part5")}</p>
              <GroupOfImages>
                <TwoImagesRightBigger>
                  <ChristmasInSingaporeImages image="jewel6" />
                  <ChristmasInSingaporeImages image="jewel7" />
                </TwoImagesRightBigger>
                <TwoImagesLeftBigger>
                  <ChristmasInSingaporeImages image="jewel9" />
                  <ChristmasInSingaporeImages image="jewel8" />
                </TwoImagesLeftBigger>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="jewel10" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="jewel11" />
                  <ChristmasInSingaporeImages image="jewel12" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscapeOnTheLeft>
                  <ChristmasInSingaporeImages image="jewel13" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <ChristmasInSingaporeImages image="jewel14" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit2.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="jewel15" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="jewel16" />
                  <ChristmasInSingaporeImages image="jewel17" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </PillTitle>
          </section>
          <Divider />
          <section>
            <ChristmasHeadline>{t("visit3.title")}</ChristmasHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="meal" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="meal2" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="meal3" />
                  <ChristmasInSingaporeImages image="meal4" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit3.part4")}</p>
              <ImageAsLandscape>
                <ChristmasInSingaporeImages image="meal5" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <ChristmasHeadline>{t("visit4.title")}</ChristmasHeadline>
            <Divider />
            <PillTitle title={t("visit4.part1.title")}>
              <p>{t("visit4.part1.part1")}</p>
              <p>{t("visit4.part1.part2")}</p>
            </PillTitle>
            <PillTitle title={t("visit4.part2.title")}>
              <p>{t("visit4.part2.part1")}</p>
            </PillTitle>
            <PillTitle title={t("visit4.part3.title")}>
              <p>{t("visit4.part3.part1")}</p>
              <p>{t("visit4.part3.part2")}</p>
              <p>{t("visit4.part3.part3")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="snow" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="snow2" />
                </ImageAsLandscape>
              </GroupOfImages>
            </PillTitle>
            <PillTitle title={t("visit4.part4.title")}>
              <p>{t("visit4.part4.part1")}</p>
              <p>{t("visit4.part4.part2")}</p>
              <p>{t("visit4.part4.part3")}</p>
            </PillTitle>
          </section>
          <Divider />
          <section>
            <ChristmasHeadline>{t("visit5.title")}</ChristmasHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <p>{t("visit5.part4")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <ChristmasInSingaporeImages image="orientExpress" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="orientExpress2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="orientExpress3" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <ChristmasInSingaporeImages image="orientExpress4" />
                  <ChristmasInSingaporeImages image="orientExpress5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="orientExpress6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="orientExpress7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="orientExpress8" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ChristmasInSingaporeImages image="orientExpress9" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
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
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}\n${t("facebook.part3")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <ChristmasInSingaporeImages image="cardFr1" key="cardFr1" />,
                    <ChristmasInSingaporeImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <ChristmasInSingaporeImages image="cardEn1" key="cardEn1" />,
                    <ChristmasInSingaporeImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </ChristmasBlogLayout>
    </>
  )
}

export default IndexPage

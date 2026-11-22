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
import cardFr1 from "../../../images/asia/singapore/christmas-in-singapore/card-fr1.jpg"
import cardFr2 from "../../../images/asia/singapore/christmas-in-singapore/card-fr2.jpg"
import cardEn1 from "../../../images/asia/singapore/christmas-in-singapore/card-en1.jpg"
import cardEn2 from "../../../images/asia/singapore/christmas-in-singapore/card-en2.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  R2Image,
  TwoImagesLeftBigger,
  TwoImagesRightBigger,
  TwoImagesSameSizeOrToGroup,
} from "../../../components/images/layout"
import { SharedCardSingaporeImages } from "../../../components/images/asia/singapore/shared-card-singapore-images"
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
            <R2Image namespace={namespace} name="singapore-christmas-cozy-fireplace-socks" aspectRatio={3 / 2} />
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
              <R2Image namespace={namespace} name="chijmes-singapore-entrance-arch-decorations" aspectRatio={4 / 3} />
            </ImageAsLandscape>
            <ImageAsPortrait>
              <R2Image namespace={namespace} name="capitol-kempinski-singing-christmas-tree" aspectRatio={3 / 4} />
            </ImageAsPortrait>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="capitol-kempinski-floral-backdrop-decorations" aspectRatio={4 / 3} />
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
                <R2Image namespace={namespace} name="marina-bay-sands-christmas-lights" aspectRatio={4 / 3} />
              </ImageAsLandscape>
            </PillTitle>
            <PillTitle title={t("visit1.part5.title")}>
              <p>{t("visit1.part5.part1")}</p>
              <p>{t("visit1.part5.part2")}</p>
              <p>{t("visit1.part5.part3")}</p>
              <p>{t("visit1.part5.part4")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="gardens-bay-supertree-grove-skyway" aspectRatio={4 / 3} />
              </ImageAsLandscape>
              <p>{t("visit1.part5.part5")}</p>
              <p>{t("visit1.part5.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="gardens-bay-christmas-market-stall" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="gardens-bay-giftbox-display-tables" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="gardens-bay-picnic-lawn-balloon" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="gardens-bay-gazebo-supertree-skywalk" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="gardens-bay-reindeer-sleigh-decor" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="gardens-bay-illuminated-bridge-night" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="gardens-bay-illuminated-trees-underpass" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="gardens-bay-market-wooden-huts" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="gardens-bay-glowing-trees-courtyard" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup orientation="landscape">
                  <R2Image namespace={namespace} name="gardens-bay-illuminated-bridge-balloon" aspectRatio={4 / 3} />
                  <R2Image namespace={namespace} name="gardens-bay-gift-archway-lights" aspectRatio={4 / 3} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="supertree-grove-lighted-carriage-display" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="gardens-bay-glowing-carriage-supertrees" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit1.part5.part7")}</p>
              <p>{t("visit1.part5.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-recipe-book-display" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesRightBigger>
                  <R2Image
                    namespace={namespace}
                    name="flower-dome-whisk-poinsettia-display"
                    aspectRatio={3 / 4}
                    orientation="portrait"
                  />
                  <R2Image
                    namespace={namespace}
                    name="flower-dome-wooden-kitchen-utensils"
                    aspectRatio={4 / 3}
                    orientation="landscape"
                  />
                </TwoImagesRightBigger>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-candy-canes-decor" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-festive-carriage-display" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="flower-dome-gingerbread-moose-presents" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="flower-dome-decorated-tree-poinsettias" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="flower-dome-gnome-cupcake-carriage" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="flower-dome-gnome-gift-boxes" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-armchair-gift-display" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup orientation="landscape">
                  <R2Image namespace={namespace} name="flower-dome-vintage-television-scene" aspectRatio={4 / 3} />
                  <R2Image namespace={namespace} name="flower-dome-toy-steam-train" aspectRatio={3 / 2} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="flower-dome-christmas-presents-poinsettias"
                    aspectRatio={4 / 3}
                  />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-candy-canes-decorations" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup orientation="landscape">
                  <R2Image namespace={namespace} name="flower-dome-marshmallow-snowman-display" aspectRatio={3 / 2} />
                  <R2Image namespace={namespace} name="flower-dome-gingerbread-moose-decor" aspectRatio={3 / 2} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="flower-dome-gingerbread-tree-squirrel" aspectRatio={2 / 3} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-christmas-lights-decorations" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-ferris-wheel-lights" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="flower-dome-gingerbread-trees-lights" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesRightBigger>
                  <R2Image
                    namespace={namespace}
                    name="flower-dome-christmas-trees-poinsettias"
                    aspectRatio={3 / 4}
                    orientation="portrait"
                  />
                  <R2Image
                    namespace={namespace}
                    name="flower-dome-illuminated-trees-walkway"
                    aspectRatio={4 / 3}
                    orientation="landscape"
                  />
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
                  <R2Image namespace={namespace} name="jewel-changi-christmas-tree-tunnel" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="jewel-changi-christmas-sign-baubles" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="jewel-changi-suitcase-display-stickers" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="jewel-changi-trunks-backpack-display" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <ImageAsPortrait>
                <R2Image namespace={namespace} name="jewel-changi-purple-tree-tunnel" aspectRatio={3 / 4} />
              </ImageAsPortrait>
              <p>{t("visit2.part5")}</p>
              <GroupOfImages>
                <TwoImagesRightBigger>
                  <R2Image
                    namespace={namespace}
                    name="jewel-changi-tree-waterfall-view"
                    aspectRatio={3 / 4}
                    orientation="portrait"
                  />
                  <R2Image
                    namespace={namespace}
                    name="jewel-changi-waterfall-christmas-tree"
                    aspectRatio={4 / 3}
                    orientation="landscape"
                  />
                </TwoImagesRightBigger>
                <TwoImagesLeftBigger>
                  <R2Image
                    namespace={namespace}
                    name="changi-mall-train-booth-seating"
                    aspectRatio={4 / 3}
                    orientation="landscape"
                  />
                  <R2Image
                    namespace={namespace}
                    name="jewel-changi-toy-train-display"
                    aspectRatio={3 / 4}
                    orientation="portrait"
                  />
                </TwoImagesLeftBigger>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="jewel-changi-nutcracker-british-guard" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="jewel-changi-indoor-christmas-tree" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="jewel-changi-garland-purple-baubles" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="jewel-changi-snowflake-ornament-tree" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="jewel-changi-purple-glitter-bauble" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit2.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="jewel-changi-indoor-waterfall-dome" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="jewel-changi-rain-vortex-green" aspectRatio={2 / 3} />
                  <R2Image namespace={namespace} name="jewel-changi-rain-vortex-yellow" aspectRatio={2 / 3} />
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
                  <R2Image namespace={namespace} name="cluny-court-plush-toys-display" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="cluny-court-snowman-santa-plush" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="cluny-court-wooden-snowman-ornament" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="cluny-court-santa-gifts-ornament" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit3.part4")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="singapore-christmas-table-setting-decor" aspectRatio={3 / 2} />
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
                  <R2Image namespace={namespace} name="singapore-christmas-nutcracker-snow-dome" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="tanglin-mall-igloo-christmas-decorations" aspectRatio={4 / 3} />
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
                  <R2Image namespace={namespace} name="gardens-bay-orient-express-locomotive" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="orient-express-steam-locomotive-train" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="orient-express-carriage-dining-table" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="orient-express-carriage-corridor-interior" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="orient-express-table-playing-cards" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="orient-express-armchair-red-jacket" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="orient-express-table-fez-artifacts" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="orient-express-dining-car-aisle" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="orient-express-newspaper-armistice-exhibit"
                    aspectRatio={4 / 3}
                  />
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Noël à Singapour" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Noël à Singapour" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: Christmas in Singapore" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: Christmas in Singapore" />,
                  ],
          }}
        />
      </ChristmasBlogLayout>
    </>
  )
}

export default IndexPage

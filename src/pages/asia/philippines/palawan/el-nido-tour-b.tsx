import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/philippines/palawan/el-nido-tour-b.json"
import translationEn from "../../../../locales/en/asia/philippines/palawan/el-nido-tour-b.json"
import {
  PhilippinesBlogLayout,
  PhilippinesHeadline,
  PhilippinesTitle,
} from "../../../../components/core/asia/philippines/philippines"
import {
  Baggage,
  Booking,
  HowLong,
  HowMuch,
  Introduction,
  Opinion,
  SectionContent,
  Visit,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import HomeImgUrl from "../../../../images/asia/philippines/palawan/el-nido-tour-b/tour-b-main.jpg"
import cardFr1 from "../../../../images/asia/philippines/palawan/el-nido-tour-b/card-fr1.jpg"
import cardFr2 from "../../../../images/asia/philippines/palawan/el-nido-tour-b/card-fr2.jpg"
import cardEn1 from "../../../../images/asia/philippines/palawan/el-nido-tour-b/card-en1.jpg"
import cardEn2 from "../../../../images/asia/philippines/palawan/el-nido-tour-b/card-en2.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  R2Image,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardPhilippinesImages } from "../../../../components/images/asia/philippines/shared-card-philippines-images"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import ElNidoMap from "../../../../images/asia/philippines/palawan/el-nido-tour-b/tour-b-map.png"
import SkipperCharters1 from "../../../../images/asia/philippines/palawan/el-nido-tour-b/skipper-charters-tour-b-1.jpg"
import SkipperCharters2 from "../../../../images/asia/philippines/palawan/el-nido-tour-b/skipper-charters-tour-b-2.jpg"
import {
  philippinesPrimaryColor,
  philippinesPrimaryColorDarker,
} from "../../../../components/core/asia/philippines/philippines.colors"
import { css } from "@emotion/react"
import { CarouselImageQuery } from "../../../../components/images/carousel"
import { TravelCardBookingStyle } from "../../../../components/core/booking"

const namespace = "asia/philippines/palawan/el-nido-tour-b"
const id = "el-nido-tour-b"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.philippines.card.${id}`)

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
      <PhilippinesBlogLayout page={id} location={location}>
        <PhilippinesTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardPhilippinesImages image="tourB" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <SectionContent>
          <MapContainer>
            <img src={ElNidoMap} alt="El Nido Map Tour A" />
          </MapContainer>
        </SectionContent>
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
          <p>{t("where-to-book.part2")}</p>
          <p>{t("where-to-book.part3")}</p>
        </Booking>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <ul>
            <li>
              <span
                css={css`
                  font-weight: bold;
                  text-transform: uppercase;
                  color: ${philippinesPrimaryColorDarker};
                `}
              >
                {t("how-much.part2")}
              </span>
              <ul>
                <li>{t("how-much.part3")}</li>
                <li>{t("how-much.part4")}</li>
              </ul>
            </li>
          </ul>
          <BookingGygCardContainer>
            <TravelCardBookingStyle
              to="https://www.elnidoparadise.com/booking/private-tours/private-tour-b/"
              title={
                i18n.languageCode === "fr" ? "El Nido Paradise - Tour B - Privé" : "El Nido Paradise - Private Tour B"
              }
              image="https://www.elnidoparadise.com/wp-content/uploads/booking-el-nido-tour-b.jpg"
              price={145}
              duration={{ value: 1, unit: "day" }}
              groupType="private"
            />
            <TravelCardBookingStyle
              to="https://www.elnidoparadise.com/booking/main-island-hopping-tours/tour-b/"
              title={
                i18n.languageCode === "fr" ? "El Nido Paradise - Tour B - Public" : "El Nido Paradise - Public Tour B"
              }
              image="https://www.elnidoparadise.com/wp-content/uploads/cudugnon-cave.jpg"
              price={22}
              duration={{ value: 1, unit: "day" }}
              groupType="public"
            />
          </BookingGygCardContainer>
          <ul>
            <li>
              <span
                css={css`
                  font-weight: bold;
                  text-transform: uppercase;
                  color: ${philippinesPrimaryColorDarker};
                `}
              >
                {t("how-much.part5")}
              </span>
              <ul>
                <li>{t("how-much.part6")}</li>
                <li>{t("how-much.part7")}</li>
              </ul>
            </li>
          </ul>
          <BookingGygCardContainer>
            <TravelCardBookingStyle
              to="https://lapecheuse.webflow.io/"
              title={i18n.languageCode === "fr" ? "La Pecheuse - Tour B - Privé" : "La Pecheuse - Private Tour B"}
              image={SkipperCharters1}
              price={350}
              duration={{ value: 1, unit: "day" }}
              groupType="private"
            />
            <TravelCardBookingStyle
              to="https://lapecheuse.webflow.io/"
              title={i18n.languageCode === "fr" ? "La Pecheuse - Tour B - Public" : "La Pecheuse - Public Tour B"}
              image={SkipperCharters2}
              price={45}
              duration={{ value: 1, unit: "day" }}
              groupType="public"
            />
          </BookingGygCardContainer>
          <p>{t("how-much.part8")}</p>
          <ul>
            <li>{t("how-much.part9")}</li>
            <li>{t("how-much.part10")}</li>
          </ul>
          <p>{t("how-much.part11")}</p>
          <p>{t("how-much.part12")}</p>
        </HowMuch>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
          <p>{t("how-long.part4")}</p>
        </HowLong>
        <Visit title={t("visit.title")}>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit1.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="entalula-island-palm-trees-cliffs" aspectRatio={1.38} />
              </ImageAsLandscape>
              <p>{t("visit.visit1.part1")}</p>
              <p>{t("visit.visit1.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="entalula-beach-outrigger-boat-lagoon" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="entalula-beach-anchored-bangka-boat" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.visit1.part3")}</p>
              <p>{t("visit.visit1.part4")}</p>
              <p>{t("visit.visit1.part5")}</p>
              <TwoImagesSameSizeOrToGroup>
                <R2Image namespace={namespace} name="entalula-island-limestone-cliff-beach" aspectRatio={3 / 4} />
                <R2Image namespace={namespace} name="entalula-beach-bangka-boat-shore" aspectRatio={0.83} />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit1.part6")}</p>
              <p>{t("visit.visit1.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="entalula-beach-limestone-overhang-cove" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="entalula-beach-cave-sea-view" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="entalula-beach-waves-rock-shore" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit2.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="snake-island-sandbar-turquoise-waters" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p
                className="tc b mb2"
                css={css`
                  color: ${philippinesPrimaryColor};
                `}
              >
                {t("visit.visit2.part1")}
              </p>
              <p>{t("visit.visit2.part2")}</p>
              <p>{t("visit.visit2.part3")}</p>
              <p>{t("visit.visit2.part4")}</p>
              <p>{t("visit.visit2.part5")}</p>
              <TwoImagesSameSizeOrToGroup>
                <R2Image namespace={namespace} name="snake-island-forest-trail-viewpoint" aspectRatio={3 / 4} />
                <R2Image namespace={namespace} name="snake-island-sleeping-cat-bench" aspectRatio={3 / 4} />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit2.part6")}</p>
              <p>{t("visit.visit2.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="snake-island-lagoon-palm-trees" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="snake-island-outrigger-boats-sandbar" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.visit2.part8")}</p>
              <p>{t("visit.visit2.part9")}</p>
              <p>{t("visit.visit2.part10")}</p>
              <p>{t("visit.visit2.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="snake-island-shallow-water-mountain" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="snake-island-submerged-sandbar-shallow-sea"
                    aspectRatio={4 / 3}
                  />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="snake-island-beach-palm-trees" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="snake-island-cat-wooden-bench" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit3.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <CarouselImageQuery image="philippines1" />
              </ImageAsLandscape>
              <p>{t("visit.visit3.part1")}</p>
              <p
                className="tc b mb2"
                css={css`
                  color: ${philippinesPrimaryColor};
                `}
              >
                {t("visit.visit3.part2")}
              </p>
              <p>{t("visit.visit3.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="pinagbuyutan-island-bangka-boat-approach" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="pinagbuyutan-island-palm-trees-beach" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.visit3.part4")}</p>
              <TwoImagesSameSizeOrToGroup>
                <R2Image namespace={namespace} name="pinagbuyutan-island-coconut-palms-beach" aspectRatio={3 / 4} />
                <R2Image namespace={namespace} name="pinagbuyutan-island-palm-trunk-ocean" aspectRatio={3 / 4} />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit3.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="pinagbuyutan-island-coconut-palm-tree" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="pinagbuyutan-island-shoreline-karst-mountains"
                    aspectRatio={4 / 3}
                  />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="pinagbuyutan-island-seashell-wet-sand" aspectRatio={4 / 3} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="pinagbuyutan-island-purple-jellyfish-water" aspectRatio={1.45} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit4.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="yum-yum-island-turquoise-beach" aspectRatio={4 / 3} />
              </ImageAsLandscape>
              <p>{t("visit.visit4.part1")}</p>
              <p>{t("visit.visit4.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="yum-yum-beach-palm-thatched-hut" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="yum-yum-island-buffet-lunch-dishes" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.visit4.part3")}</p>
              <p>{t("visit.visit4.part4")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="el-nido-green-snake-limestone" aspectRatio={3 / 2} />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit5.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="cudugnon-cave-sandbar-limestone-cliff" aspectRatio={4 / 3} />
              </ImageAsLandscape>
              <p>{t("visit.visit5.part1")}</p>
              <p>{t("visit.visit5.part2")}</p>
              <p>{t("visit.visit5.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="cudugnon-cave-sandy-beach" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="cudugnon-cave-palm-fronds-sand" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="cudugnon-cave-beach-shallow-water" aspectRatio={1.35} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="el-nido-limestone-karst-monolith" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="cudugnon-cave-deep-turquoise-water" aspectRatio={4 / 3} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit6.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="el-nido-snorkeling-fish-swarm" aspectRatio={16 / 9} />
              </ImageAsLandscape>
              <p>{t("visit.visit6.part1")}</p>
              <p>{t("visit.visit6.part2")}</p>
              <p>{t("visit.visit6.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="el-nido-reef-blue-fish" aspectRatio={16 / 9} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="el-nido-coral-reef-fish" aspectRatio={16 / 9} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="el-nido-butterflyfish-coral-reef" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="el-nido-underwater-blue-wrasse" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="el-nido-damselfish-underwater-portrait" aspectRatio={16 / 9} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
        </Visit>
        <Opinion title={t("opinion.title")}>
          <p>{t("opinion.part1")}</p>
          <p>{t("opinion.part2")}</p>
          <p>{t("opinion.part3")}</p>
          <p>{t("opinion.part4")}</p>
        </Opinion>
        <Baggage title={t("must-pack.title")}>
          <ul>
            <li>{t("must-pack.part1")}</li>
            <li>{t("must-pack.part2")}</li>
            <li>{t("must-pack.part3")}</li>
            <li>{t("must-pack.part4")}</li>
            <li>{t("must-pack.part5")}</li>
            <li>{t("must-pack.part6")}</li>
            <li>{t("must-pack.part7")}</li>
            <li>{t("must-pack.part8")}</li>
            <li>{t("must-pack.part9")}</li>
          </ul>
        </Baggage>
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : El Nido Tour B" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : El Nido Tour B" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: El Nido Tour B" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: El Nido Tour B" />,
                  ],
          }}
        />
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

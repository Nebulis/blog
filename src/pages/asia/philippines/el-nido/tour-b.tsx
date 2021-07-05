import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/philippines/el-nido/tour-b.json"
import translationEn from "../../../../locales/en/asia/philippines/el-nido/tour-b.json"
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
import HomeImgUrl from "../../../../images/asia/philippines/el-nido/tour-b/tour-b-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardPhilippinesImages } from "../../../../components/images/asia/philippines/shared-card-philippines-images"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import ElNidoMap from "../../../../images/asia/philippines/el-nido/tour-b/tour-b-map.png"
import SkipperCharters1 from "../../../../images/asia/philippines/el-nido/tour-b/skipper-charters-tour-b-1.jpg"
import SkipperCharters2 from "../../../../images/asia/philippines/el-nido/tour-b/skipper-charters-tour-b-2.jpg"
import { TourBImages } from "../../../../components/images/asia/philippines/el-nido/tour-b"
import {
  philippinesPrimaryColor,
  philippinesPrimaryColorDarker,
} from "../../../../components/core/asia/philippines/philippines.colors"
import { css } from "@emotion/react"
import { CarouselImageQuery } from "../../../../components/images/carousel"
import { TravelCardBookingStyle } from "../../../../components/core/booking"

const namespace = "asia/philippines/el-nido/tour-b"
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
              to="http://www.skippercharters.ph/el-nido-charters.html"
              title={
                i18n.languageCode === "fr" ? "El Nido Charters - Tour B - Privé" : "El Nido Charters - Private Tour B"
              }
              image={SkipperCharters1}
              price={400}
              duration={{ value: 1, unit: "day" }}
              groupType="private"
            />
            <TravelCardBookingStyle
              to="http://www.skippercharters.ph/el-nido-charters.html"
              title={
                i18n.languageCode === "fr" ? "El Nido Charters - Tour B - Public" : "El Nido Charters - Public Tour B"
              }
              image={SkipperCharters2}
              price={60}
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
                <TourBImages image="entalulaBeach" />
              </ImageAsLandscape>
              <p>{t("visit.visit1.part1")}</p>
              <p>{t("visit.visit1.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <TourBImages image="entalulaBeach2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourBImages image="entalulaBeach3" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.visit1.part3")}</p>
              <p>{t("visit.visit1.part4")}</p>
              <p>{t("visit.visit1.part5")}</p>
              <TwoImagesSameSizeOrToGroup>
                <TourBImages image="entalulaBeach4" />
                <TourBImages image="entalulaBeach5" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit1.part6")}</p>
              <p>{t("visit.visit1.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourBImages image="entalulaBeach6" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <TourBImages image="entalulaBeach7" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourBImages image="entalulaBeach8" />
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
                <TourBImages image="snakeIsland" />
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
                <TourBImages image="snakeIsland2" />
                <TourBImages image="snakeIsland3" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit2.part6")}</p>
              <p>{t("visit.visit2.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <TourBImages image="snakeIsland4" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourBImages image="snakeIsland5" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.visit2.part8")}</p>
              <p>{t("visit.visit2.part9")}</p>
              <p>{t("visit.visit2.part10")}</p>
              <p>{t("visit.visit2.part11")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourBImages image="snakeIsland6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourBImages image="snakeIsland7" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <TourBImages image="snakeIsland8" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourBImages image="snakeIsland9" />
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
                  <TourBImages image="pinagbuyutanIsland2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourBImages image="pinagbuyutanIsland3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.visit3.part4")}</p>
              <TwoImagesSameSizeOrToGroup>
                <TourBImages image="pinagbuyutanIsland4" />
                <TourBImages image="pinagbuyutanIsland5" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit3.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourBImages image="pinagbuyutanIsland6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourBImages image="pinagbuyutanIsland7" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <TourBImages image="pinagbuyutanIsland8" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourBImages image="pinagbuyutanIsland9" />
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
                <TourBImages image="yumyumIsland" />
              </ImageAsLandscape>
              <p>{t("visit.visit4.part1")}</p>
              <p>{t("visit.visit4.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <TourBImages image="yumyumIsland2" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <TourBImages image="yumyumIsland3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.visit4.part3")}</p>
              <p>{t("visit.visit4.part4")}</p>
              <ImageAsLandscape>
                <TourBImages image="yumyumIsland4" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit5.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <TourBImages image="cudugnonCave" />
              </ImageAsLandscape>
              <p>{t("visit.visit5.part1")}</p>
              <p>{t("visit.visit5.part2")}</p>
              <p>{t("visit.visit5.part3")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <TourBImages image="cudugnonCave2" />
                  <TourBImages image="cudugnonCave3" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <TourBImages image="cudugnonCave4" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <TourBImages image="cudugnonCave5" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <TourBImages image="cudugnonCave6" />
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
                <TourBImages image="snorkeling" />
              </ImageAsLandscape>
              <p>{t("visit.visit6.part1")}</p>
              <p>{t("visit.visit6.part2")}</p>
              <p>{t("visit.visit6.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <TourBImages image="snorkeling2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourBImages image="snorkeling3" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <TourBImages image="snorkeling4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourBImages image="snorkeling5" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourBImages image="snorkeling6" />
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
                ? [<TourBImages image="cardFr1" key="cardFr1" />, <TourBImages image="cardFr2" key="cardFr1" />]
                : [<TourBImages image="cardEn1" key="cardEn1" />, <TourBImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

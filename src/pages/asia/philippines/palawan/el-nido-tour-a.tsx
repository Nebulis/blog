import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/philippines/palawan/el-nido-tour-a.json"
import translationEn from "../../../../locales/en/asia/philippines/palawan/el-nido-tour-a.json"
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
  ImageDescription,
  Introduction,
  Opinion,
  SectionContent,
  Visit,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import HomeImgUrl from "../../../../images/asia/philippines/palawan/el-nido-tour-a/tour-a-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  Panorama,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardPhilippinesImages } from "../../../../components/images/asia/philippines/shared-card-philippines-images"
import ElNidoMap from "../../../../images/asia/philippines/palawan/el-nido-tour-a/tour-a-map.png"
import SkipperCharters1 from "../../../../images/asia/philippines/palawan/el-nido-tour-a/skipper-charters-tour-a-1.jpg"
import SkipperCharters2 from "../../../../images/asia/philippines/palawan/el-nido-tour-a/skipper-charters-tour-a-2.jpg"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { TourAImages } from "../../../../components/images/asia/philippines/palawan/el-nido-tour-a"
import {
  philippinesPrimaryColor,
  philippinesPrimaryColorDarker,
} from "../../../../components/core/asia/philippines/philippines.colors"
import { css } from "@emotion/react"
import { Quote } from "../../../../components/core/quote"
import { TravelCardBookingStyle } from "../../../../components/core/booking"

const namespace = "asia/philippines/palawan/tour-a"
const id = "el-nido-tour-a"
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
          <SharedCardPhilippinesImages image="tourA" />
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
        <HowMuch>
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
              to="https://www.elnidoparadise.com/booking/private-tours/private-tour-a/"
              title={
                i18n.languageCode === "fr" ? "El Nido Paradise - Tour A - Privé" : "El Nido Paradise - Private Tour A"
              }
              image="https://www.elnidoparadise.com/wp-content/uploads/booking-el-nido-tour-a.jpeg"
              price={135}
              duration={{ value: 1, unit: "day" }}
              groupType="private"
            />
            <TravelCardBookingStyle
              to="https://www.elnidoparadise.com/booking/main-island-hopping-tours/tour-a/"
              title={
                i18n.languageCode === "fr" ? "El Nido Paradise - Tour A - Public" : "El Nido Paradise - Public Tour A"
              }
              image="https://www.elnidoparadise.com/wp-content/uploads/small-lagoon.jpg"
              price={20}
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
                i18n.languageCode === "fr" ? "El Nido Charters - Tour A - Privé" : "El Nido Charters - Private Tour A"
              }
              image={SkipperCharters1}
              price={400}
              duration={{ value: 1, unit: "day" }}
              groupType="private"
            />
            <TravelCardBookingStyle
              to="http://www.skippercharters.ph/el-nido-charters.html"
              title={
                i18n.languageCode === "fr" ? "El Nido Charters - Tour A - Public" : "El Nido Charters - Public Tour A"
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
            <li>{t("how-much.part11")}</li>
          </ul>
          <p>{t("how-much.part12")}</p>
          <p>{t("how-much.part13")}</p>
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
                <TourAImages image="bigLagoon" />
              </ImageAsLandscape>
              <p
                className="tc b"
                css={css`
                  color: ${philippinesPrimaryColor};
                `}
              >
                {t("visit.visit1.part1")}
              </p>
              <p>{t("visit.visit1.part2")}</p>
              <p>{t("visit.visit1.part3")}</p>
              <p>{t("visit.visit1.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <TourAImages image="bigLagoon2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourAImages image="bigLagoon3" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.visit1.part5")}</p>
              <p>{t("visit.visit1.part6")}</p>
              <ImageAsLandscape>
                <TourAImages image="bigLagoon4" />
              </ImageAsLandscape>
              <p>{t("visit.visit1.part7")}</p>
              <p>{t("visit.visit1.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourAImages image="bigLagoon6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="bigLagoon5" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit2.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <TourAImages image="secretLagoon" />
              </ImageAsLandscape>
              <p>{t("visit.visit2.part1")}</p>
              <p>{t("visit.visit2.part2")}</p>
              <p>{t("visit.visit2.part3")}</p>
              <p>{t("visit.visit2.part4")}</p>
              <TwoImagesSameSizeOrToGroup>
                <TourAImages image="secretLagoon2" />
                <TourAImages image="secretLagoon3" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.visit2.part5")}</p>
              <p>{t("visit.visit2.part6")}</p>
              <p>{t("visit.visit2.part7")}</p>
              <GroupOfImages>
                <TwoImagesSameSize
                  css={css`
                    .panel-image {
                      max-height: 80vh;
                    }
                  `}
                >
                  <TourAImages image="secretLagoon4" />
                  <TourAImages image="secretLagoon5" />
                </TwoImagesSameSize>
                <ImageAsPortrait>
                  <TourAImages image="secretLagoon6" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit.visit2.part8")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourAImages image="secretLagoon7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="secretLagoon8" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="secretLagoon9" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit3.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <TourAImages image="shimizuIsland" />
              </ImageAsLandscape>
              <p>{t("visit.visit3.part1")}</p>
              <p>{t("visit.visit3.part2")}</p>
              <p>{t("visit.visit3.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <TourAImages image="shimizuIsland2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourAImages image="shimizuIsland3" />
                </ImageAsLandscapeOnTheRight>
                <Panorama>
                  <TourAImages image="shimizuIsland4" />
                </Panorama>
              </GroupOfImages>
              <p>{t("visit.visit3.part4")}</p>
              <p>{t("visit.visit3.part5")}</p>
            </SectionContent>
            <Divider />
          </section>
          <section>
            <PhilippinesHeadline>{t("visit.visit4.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <TourAImages image="payongBeach" />
              </ImageAsLandscape>
              <p>{t("visit.visit4.part1")}</p>
              <p>{t("visit.visit4.part2")}</p>
              <p>{t("visit.visit4.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourAImages image="payongBeach2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="payongBeach3" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.visit4.part4")}</p>
              <p>{t("visit.visit4.part5")}</p>
              <p>{t("visit.visit4.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <TourAImages image="payongBeach4" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourAImages image="payongBeach5" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit5.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <TourAImages image="sevenCommandoBeach" />
              </ImageAsLandscape>
              <p>{t("visit.visit5.part1")}</p>
              <p>{t("visit.visit5.part2")}</p>
              <ImageAsLandscape>
                <TourAImages image="sevenCommandoBeach2" />
              </ImageAsLandscape>
              <p>{t("visit.visit5.part3")}</p>
              <p>{t("visit.visit5.part4")}</p>
              <GroupOfImages>
                <Panorama>
                  <TourAImages image="sevenCommandoBeach3" />
                </Panorama>
                <ImageAsLandscapeOnTheLeft>
                  <TourAImages image="sevenCommandoBeach4" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TourAImages image="sevenCommandoBeach5" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.visit5.part5")}</p>
              <Panorama>
                <TourAImages image="sevenCommandoBeach6" />
              </Panorama>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <PhilippinesHeadline>{t("visit.visit6.title")}</PhilippinesHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <TourAImages image="snorkeling" />
              </ImageAsLandscape>
              <p>{t("visit.visit6.part1")}</p>
              <p>{t("visit.visit6.part2")}</p>
              <p>{t("visit.visit6.part3")}</p>
              <p className="tc ttu b">{t("visit.visit6.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling2" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling3" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling5" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p className="tc ttu b">{t("visit.visit6.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling6" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling7" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling8" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <TourAImages image="snorkeling9" />
                </ImageAsLandscape>
              </GroupOfImages>
              <ImageDescription>{t("visit.visit6.part6")}</ImageDescription>
            </SectionContent>
          </section>
        </Visit>
        <Opinion title={t("opinion.title")}>
          <p>{t("opinion.part1")}</p>
          <p>{t("opinion.part2")}</p>
          <p>{t("opinion.part3")}</p>
          <p>{t("opinion.part4")}</p>
          <p>{t("opinion.part5")}</p>
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
                ? [<TourAImages image="cardFr1" key="cardFr1" />, <TourAImages image="cardFr2" key="cardFr1" />]
                : [<TourAImages image="cardEn1" key="cardEn1" />, <TourAImages image="cardEn2" key="cardEn1" />],
          }}
        />
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

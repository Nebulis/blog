import React, { useState } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import translationFr from "../../../locales/fr/asia/japan/transports-in-japan.json"
import translationEn from "../../../locales/en/asia/japan/transports-in-japan.json"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../components/core/japan/japan"
import {
  Booking,
  Company,
  HowMuch,
  Information,
  Introduction,
  MenuArticle,
  Operation,
  Opinion,
  SubTitleTransport,
  Train,
} from "../../../components/core/section"
import { Divider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/asia/japan/transports-in-japan/transports-in-japan-main.jpg"
import {
  Anchor,
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
} from "../../../components/images/layout"
import { SharedCardJapanImages } from "../../../components/images/asia/japan/shared-card-japan-images"
import { ExternalLinkNotUnderlined } from "../../../components/core/links/link"
import { buildPixabayUrl, price } from "../../../utils"
import { TransportsInJapanImages } from "../../../components/images/asia/japan/transports-in-japan"
import TokyoIslands from "../../../images/asia/japan/transports-in-japan/transports-in-japan-tokyo-islands.jpg"
import OkinawaMap from "../../../images/asia/japan/transports-in-japan/transports-in-japan-okinawa-map.jpg"
// import WillerExpressMap from "../../../images/asia/japan/transports-in-japan/transports-in-japan-willer-express-map.png"
import JrPassMap from "../../../images/asia/japan/transports-in-japan/transports-in-japan-jrpass-map.jpg"
import Suica from "../../../images/asia/japan/transports-in-japan/transports-in-japan-suica.jpg"
import { MapContainer, Table } from "../../../components/layout/layout"
import { FaBus } from "react-icons/fa"
import { BookingWarning } from "../../../components/core/booking"
import { Conclusion } from "../../../components/core/conclusion"
import { Comments } from "../../../components/core/comments"
import { css } from "@emotion/react"
import { MouseToolTip, TooltipContent } from "../../../components/core/tooltipPortal"
import { JapanPlaneSchedule } from "../../../components/core/japan/japan.schedules-plane"

const namespace = "asia/japan/transports-in-japan"
const id = "transports-in-japan"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.transports`)
  const [tooltipContent, setTooltipContent] = useState<string>()

  const buildTitle = (title: string) => {
    return i18n.languageCode === "fr" ? `${t("transport-in")} ${title}` : `${title} ${t("transport-in")}`
  }
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
          <SharedCardJapanImages image="transportsInJapan" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <MenuArticle title={t("index")}>
          <div>
            <a href="#plane">{t("plane.title")}</a>
          </div>
          <div>
            <a href="#boat">{t("boat.title")}</a>
          </div>
          <div>
            <a href="#bus-menu">{t("bus.title")}</a>
          </div>
          <div>
            <a href="#mrt">{t("mrt.title")}</a>
          </div>
          <div>
            <a href="#rickshaw">{t("rickshaw.title")}</a>
          </div>
          <div>
            <a href="#taxi">{t("taxi.title")}</a>
          </div>
          <div>
            <a href="#train">{t("train.title")}</a>
          </div>
          <div>
            <a href="#bike">{t("bike.title")}</a>
          </div>
          <div>
            <a href="#car">{t("car.title")}</a>
          </div>
          <div>
            <a href="#essential">{t("essential.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <Anchor id="plane" />
        <section>
          <JapanHeadline>{buildTitle(t("plane.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="plane" />
          </ImageAsLandscape>
          <Information title={t("plane.information.title")}>
            <p>{t("plane.information.part1")}</p>
            <p>{t("plane.information.part2")}</p>
            <p>{t("plane.information.part3")}</p>
            <p>{t("plane.information.part4")}</p>
          </Information>
          <Booking title={t("plane.booking.title")}>
            <p>{t("plane.booking.part1")}</p>
            <p>{t("plane.booking.part2")}</p>
            <p>{t("plane.booking.part3")}</p>
            <p>{t("plane.booking.part4")}</p>
          </Booking>
          <Company title={t("plane.company.title")}>
            <p>{t("plane.company.part1")}</p>
            <p>{t("plane.company.part2")}</p>
            <ul>
              <li>{t("plane.company.part3")}</li>
              <li>{t("plane.company.part4")}</li>
            </ul>
            <p>{t("plane.company.part5")}</p>
            <ul>
              <li>{t("plane.company.part6")}</li>
            </ul>
            <p>{t("plane.company.part7")}</p>
          </Company>
          <HowMuch title={t("plane.price.title")}>
            <p>{t("plane.price.part1")}</p>
            <p>{t("plane.price.part2")}</p>
            <p>{t("plane.price.part3")}</p>
            <p>{t("plane.price.part4")}</p>
            <JapanPlaneSchedule setTooltipContent={setTooltipContent} />
            <BookingWarning>{t("plane.price.part5")}</BookingWarning>
          </HowMuch>
          <Opinion title={t("plane.opinion.title")}>
            <p>{t("plane.opinion.part1")}</p>
            <p>{t("plane.opinion.part2")}</p>
            <p>{t("plane.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="boat" />
        <section>
          <JapanHeadline>{buildTitle(t("boat.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="boat" />
          </ImageAsLandscape>
          <Information title={t("plane.information.title")}>
            <p>{t("boat.information.part1")}</p>
            <p>{t("boat.information.part2")}</p>
            <p>{t("boat.information.part3")}</p>
            <p>{t("boat.information.part4")}</p>
            <p>{t("boat.information.part5")}</p>
            <ul>
              <li>{t("boat.information.part6")}</li>
              <li>{t("boat.information.part7")}</li>
              <li>{t("boat.information.part8")}</li>
              <li>{t("boat.information.part9")}</li>
            </ul>
          </Information>
          <Booking title={t("plane.booking.title")}>
            <p>{t("boat.booking.part1")}</p>
            <p>{t("boat.booking.part2")}</p>
            <p>{t("boat.booking.part3")}</p>
            <ul>
              <li>{t("boat.booking.part4")}</li>
              <li>{t("boat.booking.part5")}</li>
              <li>{t("boat.booking.part6")}</li>
            </ul>
            <p>{t("boat.booking.part7")}</p>
            <MapContainer>
              <img src={TokyoIslands} alt="Map of Tokyo Islands" />
            </MapContainer>
            <p>{t("boat.booking.part8")}</p>
            <p>{t("boat.booking.part9")}</p>
            <MapContainer>
              <img src={OkinawaMap} alt="Map of Okinawa" />
            </MapContainer>
            <p>{t("boat.booking.part10")}</p>
            <BookingWarning>{t("boat.booking.part11")}</BookingWarning>
            <p>{t("boat.booking.part12")}</p>
            <ul>
              <li>{t("boat.booking.part13")}</li>
              <li>{t("boat.booking.part14")}</li>
              <li>{t("boat.booking.part15")}</li>
              <li>{t("boat.booking.part16")}</li>
            </ul>
          </Booking>
          <Opinion title={t("boat.opinion.title")}>
            <p>{t("boat.opinion.part1")}</p>
            <p>{t("boat.opinion.part2")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="bus-menu" />
        <section>
          <JapanHeadline>{buildTitle(t("bus.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="bus" />
          </ImageAsLandscape>
          <p>{t("bus.part1")}</p>
        </section>
        <MenuArticle title={t("index")}>
          <div>
            <a href="#bus">{t("bus.bus.title")}</a>
          </div>
          <div>
            <a href="#bus-car">{t("bus.car.title")}</a>
          </div>
          <div>
            <a href="#night-tour">{t("bus.night-tour.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <Anchor id="bus" />
        <section>
          <SubTitleTransport>
            <FaBus />
            &nbsp;{t("bus.bus.title")}
          </SubTitleTransport>
          <Information title={t("bus.bus.information.title")}>
            <p>{t("bus.bus.information.part1")}</p>
          </Information>
          <Booking title={t("bus.bus.booking.title")}>
            <p>{t("bus.bus.booking.part1")}</p>
            <ul>
              <li>{t("bus.bus.booking.part2")}</li>
              <li>{t("bus.bus.booking.part3")}</li>
            </ul>
            <p>{t("bus.bus.booking.part4")}</p>
            <p>{t("bus.bus.booking.part5")}</p>
            <p>{t("bus.bus.booking.part6")}</p>
            <p>{t("bus.bus.booking.part7")}</p>
          </Booking>
          <Opinion title={t("bus.bus.opinion.title")}>
            <p>{t("bus.bus.opinion.part1")}</p>
            <p>{t("bus.bus.opinion.part2")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="bus-car" />
        <section>
          <SubTitleTransport>
            <FaBus />
            &nbsp;{t("bus.car.title")}
          </SubTitleTransport>
          <Information title={t("bus.car.information.title")}>
            <p>{t("bus.car.information.part1")}</p>
            <p>{t("bus.car.information.part2")}</p>
            <p>{t("bus.car.information.part3")}</p>
            <p>{t("bus.car.information.part4")}</p>
          </Information>
          <Booking title={t("bus.car.booking.title")}>
            <p>{t("bus.car.booking.part1")}</p>
            <p>{t("bus.car.booking.part2")}</p>
            <p>{t("bus.car.booking.part3")}</p>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft
                title="REBORN"
                credit={
                  <ExternalLinkNotUnderlined href="https://willerexpress.com/en/bus/seat/">
                    willer express
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportsInJapanImages image="busReborn" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight
                title="LUXIA"
                credit={
                  <ExternalLinkNotUnderlined href="https://willerexpress.com/en/bus/seat/">
                    willer express
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportsInJapanImages image="busLuxia" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft
                title="COMODO"
                credit={
                  <ExternalLinkNotUnderlined href="https://willerexpress.com/en/bus/seat/">
                    willer express
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportsInJapanImages image="busComodo" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight
                title="RELAX"
                credit={
                  <ExternalLinkNotUnderlined href="https://willerexpress.com/en/bus/seat/">
                    willer express
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportsInJapanImages image="busRelax" />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
            <p>{t("bus.car.booking.part4")}</p>
            <p>{t("bus.car.booking.part5")}</p>
          </Booking>
          {/*<HowMuch title={t("bus.car.price.title")}>*/}
          {/*  <p>{t("bus.car.price.part1")}</p>*/}
          {/*  /!*<p>{t("bus.car.price.part2")}</p>*!/*/}
          {/*  <p>{t("bus.car.price.part3")}</p>*/}
          {/*  <p>{t("bus.car.price.part4")}</p>*/}
          {/*  <MapContainer>*/}
          {/*    <img src={WillerExpressMap} alt="Map of Willer Express Buses" />*/}
          {/*  </MapContainer>*/}
          {/*  /!*<p>{t("bus.car.price.part5")}</p>*!/*/}
          {/*</HowMuch>*/}
          <Opinion title={t("bus.car.opinion.title")}>
            <p>{t("bus.car.opinion.part1")}</p>
            <p>{t("bus.car.opinion.part2")}</p>
            <p>{t("bus.car.opinion.part3")}</p>
            <p>{t("bus.car.opinion.part4")}</p>
            <p>{t("bus.car.opinion.part5")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="night-tour" />
        <section>
          <SubTitleTransport>
            <FaBus />
            &nbsp;{t("bus.night-tour.title")}
          </SubTitleTransport>
          <Information title={t("bus.night-tour.information.title")}>
            <p>{t("bus.night-tour.information.part1")}</p>
            <p>{t("bus.night-tour.information.part2")}</p>
          </Information>
          <Booking title={t("bus.night-tour.booking.title")}>
            <p>{t("bus.night-tour.booking.part1")}</p>
            <p>{t("bus.night-tour.booking.part2")}</p>
            <p>{t("bus.night-tour.booking.part3")}</p>
            <p>{t("bus.night-tour.booking.part4")}</p>
          </Booking>
          <Opinion title={t("bus.night-tour.opinion.title")}>
            <p>{t("bus.night-tour.opinion.part1")}</p>
            <p>{t("bus.night-tour.opinion.part2")}</p>
            <p>{t("bus.night-tour.opinion.part3")}</p>
            <p>{t("bus.night-tour.opinion.part4")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="mrt" />
        <section>
          <JapanHeadline>{buildTitle(t("mrt.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="mrt" />
          </ImageAsLandscape>
          <Information title={t("mrt.information.title")}>
            <p>{t("mrt.information.part1")}</p>
            <p>{t("mrt.information.part2")}</p>
            <p>{t("mrt.information.part3")}</p>
          </Information>
          <Booking title={t("mrt.booking.title")}>
            <p>{t("mrt.booking.part1")}</p>
            <p>{t("mrt.booking.part2")}</p>
            <p>{t("mrt.booking.part3")}</p>
            <p>{t("mrt.booking.part4")}</p>
            <p>{t("mrt.booking.part5")}</p>
            <p>{t("mrt.booking.part6")}</p>
            <p>{t("mrt.booking.part7")}</p>
            <p>{t("mrt.booking.part8")}</p>
          </Booking>
          <Opinion title={t("mrt.opinion.title")}>
            <p>{t("mrt.opinion.part1")}</p>
            <p>{t("mrt.opinion.part2")}</p>
            <p>{t("mrt.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="rickshaw" />
        <section>
          <JapanHeadline>{buildTitle(t("rickshaw.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="rickshaw" />
          </ImageAsLandscape>
          <Information title={t("rickshaw.information.title")}>
            <p>{t("rickshaw.information.part1")}</p>
            <p>{t("rickshaw.information.part2")}</p>
            <p>{t("rickshaw.information.part3")}</p>
          </Information>
          <Opinion title={t("rickshaw.opinion.title")}>
            <p>{t("rickshaw.opinion.part1")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="taxi" />
        <section>
          <JapanHeadline>{buildTitle(t("taxi.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="taxi" />
          </ImageAsLandscape>
          <Information title={t("taxi.information.title")}>
            <p>{t("taxi.information.part1")}</p>
            <p>{t("taxi.information.part2")}</p>
            <p>{t("taxi.information.part3")}</p>
            <p>{t("taxi.information.part4")}</p>
            <p>{t("taxi.information.part5")}</p>
          </Information>
          <Booking title={t("taxi.booking.title")}>
            <p>{t("taxi.booking.part1")}</p>
            <ul>
              <li>{t("taxi.booking.part2")}</li>
              <li>{t("taxi.booking.part3")}</li>
            </ul>
          </Booking>
          <HowMuch title={t("taxi.price.title")}>
            <p>{t("taxi.price.part1")}</p>
            <p>{t("taxi.price.part2")}</p>
            <p>{t("taxi.price.part3")}</p>
            <p>{t("taxi.price.part4")}</p>
          </HowMuch>
          <Opinion title={t("taxi.opinion.title")}>
            <p>{t("taxi.opinion.part1")}</p>
            <p>{t("taxi.opinion.part2")}</p>
            <p>{t("taxi.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="train" />
        <section>
          <JapanHeadline>{buildTitle(t("train.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="train" />
          </ImageAsLandscape>
          <Information title={t("train.information.title")}>
            <p>{t("train.information.part1")}</p>
            <p>{t("train.information.part2")}</p>
            <p>{t("train.information.part3")}</p>
            <p>{t("train.information.part4")}</p>
            <p>{t("train.information.part5")}</p>
            <p>{t("train.information.part6")}</p>
            <ul>
              <li>{t("train.information.part7")}</li>
              <li>{t("train.information.part8")}</li>
              <li>{t("train.information.part9")}</li>
            </ul>
            <p>{t("train.information.part10")}</p>
          </Information>
          <Company title={t("train.company.title")}>
            <p>{t("train.company.part1")}</p>
            <p>{t("train.company.part2")}</p>
            <ul>
              <li>{t("train.company.part3")}</li>
              <li>{t("train.company.part4")}</li>
              <li>{t("train.company.part5")}</li>
            </ul>
            <p>{t("train.company.part6")}</p>
          </Company>
          <Booking title={t("train.booking.title")}>
            <p>{t("train.booking.part1")}</p>
            <p>{t("train.booking.part2")}</p>
            <p>{t("train.booking.part3")}</p>
            <ul>
              <li>{t("train.booking.part4")}</li>
              <li>{t("train.booking.part5")}</li>
              <li>{t("train.booking.part6")}</li>
            </ul>
            <p>{t("train.booking.part7")}</p>
            <p>{t("train.booking.part8")}</p>
          </Booking>
          <HowMuch title={t("train.price.title")}>
            <p>{t("train.price.part1")}</p>
            <p>{t("train.price.part2")}</p>
            {/*<p>{t("train.price.part3")}</p>*/}
            <p>{t("train.price.part4")}</p>
            <p>{t("train.price.part5")}</p>
          </HowMuch>
          <Opinion title={t("train.opinion.title")}>
            <p>{t("train.opinion.part1")}</p>
            <p>{t("train.opinion.part2")}</p>
            <p>{t("train.opinion.part3")}</p>
          </Opinion>
          <Train title={t("train.night-train.title")}>
            <p>{t("train.night-train.part1")}</p>
            <p>{t("train.night-train.part2")}</p>
            <p>{t("train.night-train.part3")}</p>
            <p>{t("train.night-train.part4")}</p>
            <p>{t("train.night-train.part5")}</p>
            <ul>
              <li>{t("train.night-train.part6")}</li>
              <li>{t("train.night-train.part7")}</li>
              <li>{t("train.night-train.part8")}</li>
            </ul>
            <ImageAsPortrait
              credit={
                <ExternalLinkNotUnderlined href={`https://${i18n.languageCode}.wikipedia.org/wiki/Sunrise_Seto`}>
                  wikipedia
                </ExternalLinkNotUnderlined>
              }
            >
              <TransportsInJapanImages image="trainSunriseSeto" />
            </ImageAsPortrait>
            <p>{t("train.night-train.part9")}</p>
            <ul>
              <li>{t("train.night-train.part10")}</li>
              <li>{t("train.night-train.part11")}</li>
              <li>{t("train.night-train.part12")}</li>
            </ul>
            <p>{t("train.night-train.part13")}</p>
            <p>{t("train.night-train.part14")}</p>
          </Train>
        </section>
        <Divider />
        <Anchor id="bike" />
        <section>
          <JapanHeadline>{buildTitle(t("bike.title"))}</JapanHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportsInJapanImages image="bike" />
          </ImageAsLandscape>
          <Information title={t("bike.information.title")}>
            <p>{t("bike.information.part1")}</p>
            <p>{t("bike.information.part2")}</p>
            <p>{t("bike.information.part3")}</p>
            <p>{t("bike.information.part4")}</p>
          </Information>
          <Booking title={t("bike.booking.title")}>
            <p>{t("bike.booking.part1")}</p>
            <p>{t("bike.booking.part2")}</p>
            <p>{t("bike.booking.part3")}</p>
          </Booking>
        </section>
        <Divider />
        <Anchor id="car" />
        <section>
          <JapanHeadline>{buildTitle(t("car.title"))}</JapanHeadline>
          <Divider />
          <Information title={t("car.information.title")}>
            <p>{t("car.information.part1")}</p>
            <p>{t("car.information.part2")}</p>
          </Information>
          <Booking title={t("car.booking.title")}>
            <p>{t("car.booking.part1")}</p>
            <p>{t("car.booking.part2")}</p>
          </Booking>
          <HowMuch title={t("car.price.title")}>
            <p>{t("car.price.part1")}</p>
            <p>{t("car.price.part2")}</p>
            <p>{t("car.price.part3")}</p>
            <p>{t("car.price.part4")}</p>
          </HowMuch>
          <Opinion title={t("car.opinion.title")}>
            <p>{t("car.opinion.part1")}</p>
            <p>{t("car.opinion.part2")}</p>
            <p>{t("car.opinion.part3")}</p>
            <p>{t("car.opinion.part4")}</p>
          </Opinion>
        </section>
        <Divider />
        <Anchor id="essential" />
        <section>
          <JapanHeadline>{t("essential.title")}</JapanHeadline>
          <Divider />
        </section>
        <Anchor id="suica" />
        <section>
          <SubTitleTransport>{t("essential.section1.title")}</SubTitleTransport>
          <Information title={t("essential.section1.information.title")}>
            <p>{t("essential.section1.information.part1")}</p>
            <p>{t("essential.section1.information.part2")}</p>
            <p>{t("essential.section1.information.part3")}</p>
            <MapContainer
              css={css`
                margin-bottom: 0.5rem;
              `}
            >
              <img src={Suica} alt="Suica Card Compatibility Logos" />
            </MapContainer>
            <p>{t("essential.section1.information.part4")}</p>
            <p>{t("essential.section1.information.part5")}</p>
            <p>{t("essential.section1.information.part6")}</p>
          </Information>
          <Operation title={t("essential.section1.operation.title")}>
            <p>{t("essential.section1.operation.part1")}</p>
            <p>{t("essential.section1.operation.part2")}</p>
            <p>{t("essential.section1.operation.part3")}</p>
          </Operation>
          <Booking title={t("essential.section1.booking.title")}>
            <p>{t("essential.section1.booking.part1")}</p>
            <p>{t("essential.section1.booking.part2")}</p>
          </Booking>
          <HowMuch title={t("essential.section1.price.title")}>
            <p>{t("essential.section1.price.part1")}</p>
            <p>{t("essential.section1.price.part2")}</p>
            <p>{t("essential.section1.price.part3")}</p>
            <p>{t("essential.section1.price.part4")}</p>
          </HowMuch>
        </section>
        <Divider />
        <Anchor id="jrpass" />
        <section>
          <SubTitleTransport>{t("essential.section2.title")}</SubTitleTransport>
          <Information title={t("essential.section2.information.title")}>
            <p>{t("essential.section2.information.part1")}</p>
            <MapContainer>
              <img src={JrPassMap} alt="Jr Pass Map" />
            </MapContainer>
            <p>{t("essential.section2.information.part2")}</p>
            <p>{t("essential.section2.information.part3")}</p>
            <ul>
              <li>{t("essential.section2.information.part4")}</li>
              <li>{t("essential.section2.information.part5")}</li>
              <li>{t("essential.section2.information.part6")}</li>
              <li>{t("essential.section2.information.part7")}</li>
            </ul>
            <p>{t("essential.section2.information.part8")}</p>
            <ul>
              <li>{t("essential.section2.information.part9")}</li>
              <li>{t("essential.section2.information.part10")}</li>
              <li>{t("essential.section2.information.part11")}</li>
            </ul>
            <p>{t("essential.section2.information.part12")}</p>
            <p>{t("essential.section2.information.part13")}</p>
          </Information>
          <Booking title={t("essential.section2.booking.title")}>
            <p>{t("essential.section2.booking.part1")}</p>
            <p>{t("essential.section2.booking.part2")}</p>
            <ul>
              <li>{t("essential.section2.booking.part3")}</li>
              <li>{t("essential.section2.booking.part4")}</li>
              <li>{t("essential.section2.booking.part5")}</li>
            </ul>
            <p>{t("essential.section2.booking.part6")}</p>
            <p>{t("essential.section2.booking.part7")}</p>
            <p>{t("essential.section2.booking.part8")}</p>
          </Booking>
          <HowMuch title={t("essential.section2.price.title")}>
            <p>{t("essential.section2.price.part1")}</p>
            <p>{t("essential.section2.price.part2")}</p>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th>National</th>
                  <th>Green Pass</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7 {t("days")}</td>
                  <td>{price(240, i18n.languageCode)}</td>
                  <td>{price(315, i18n.languageCode)}</td>
                </tr>
                <tr>
                  <td>14 {t("days")}</td>
                  <td>{price(375, i18n.languageCode)}</td>
                  <td>{price(510, i18n.languageCode)}</td>
                </tr>
                <tr>
                  <td>21 {t("days")}</td>
                  <td>{price(480, i18n.languageCode)}</td>
                  <td>{price(670, i18n.languageCode)}</td>
                </tr>
              </tbody>
            </Table>
            <p>{t("essential.section2.price.part3")}</p>
            <ul>
              <li>{t("essential.section2.price.part4")}</li>
              <li>{t("essential.section2.price.part5")}</li>
              <li>{t("essential.section2.price.part6")}</li>
              <li>{t("essential.section2.price.part7")}</li>
              <li>{t("essential.section2.price.part8")}</li>
              <li>{t("essential.section2.price.part9")}</li>
              <li>{t("essential.section2.price.part10")}</li>
            </ul>
            <p>{t("essential.section2.price.part11")}</p>
          </HowMuch>
          <Opinion title={t("essential.section2.opinion.title")}>
            <p>{t("essential.section2.opinion.part1")}</p>
            <p>{t("essential.section2.opinion.part2")}</p>
            <p>{t("essential.section2.opinion.part3")}</p>
            <p>{t("essential.section2.opinion.part4")}</p>
            <p>{t("essential.section2.opinion.part5")}</p>
          </Opinion>
        </section>
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
        <MouseToolTip>
          {tooltipContent ? (
            <TooltipContent>
              {tooltipContent.split("\n").map((item, index) => {
                return (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </TooltipContent>
          ) : null}
        </MouseToolTip>
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

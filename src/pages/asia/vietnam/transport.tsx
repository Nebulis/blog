import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../locales/fr/asia/vietnam/transport.json"
import translationEn from "../../../locales/en/asia/vietnam/transport.json"
import { ApplicationContext } from "../../../components/application"
import { useCustomTranslation } from "../../../i18n"
import HomeImgUrl from "../../../images/asia/vietnam/transport/transport-vietnam-main.jpg"
import {
  VietnamBlogLayout,
  VietnamExternalLink,
  VietnamHeadline,
  VietnamLink,
} from "../../../components/core/asia/vietnam/vietnam"
import { Title } from "../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  MainImageAsLandscape,
} from "../../../components/images/layout"
import { SharedCardVietnamImages } from "../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { Quote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import {
  Bike,
  Boat,
  Bus,
  Car,
  HighLight,
  Introduction,
  MenuArticle,
  Moto,
  Plane,
  Rickshaw,
  SectionContent,
  SectionTitleParagraph,
  Taxi,
  Train,
  Visit,
} from "../../../components/core/section"
import { TransportVietnamImages } from "../../../components/images/asia/vietnam/transport-vietnam-images"
import { ExternalLinkNotUnderlined } from "../../../components/core/links/link"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import {
  build12GoAsiaUrl,
  buildBaolauSearchUrl,
  buildBaolauUrl,
  buildCo2LogicUrl,
  buildExpediaUrl,
  buildGetYourGuideLink,
  buildGoogleMapsUrl,
  buildPixabayUrl,
  buildSkyScannerUrl,
  buildTripAdvisorLink,
} from "../../../utils"
import VietnamRailwayIcon from "../../../images/asia/vietnam/transport/vietnam-railways.png"
import VioletteIcon from "../../../images/asia/vietnam/transport/violette.png"
import NewLivitransIcon from "../../../images/asia/vietnam/transport/new-livitrans-express.png"
import LotusIcon from "../../../images/asia/vietnam/transport/lotus-train.png"
import { vietnamPrimaryColorDarker } from "../../../components/core/asia/vietnam/vietnam.colors"
import { Conclusion } from "../../../components/core/conclusion"
import { Comments } from "../../../components/core/comments"
import { MyThoImages } from "../../../components/images/asia/vietnam/southern-vietnam/my-tho"

const ListOfThings = styled.ul`
  // remove margin-left after first element
  & > li > p:not(:first-of-type),
  & > li > div {
    margin-left: -1.45rem;
  }
  // add margin because it has been removed globally
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
`
const thingsTitleStyle = css`
  margin-left: 0;
`
const ThingsTitle: React.FunctionComponent = ({ children }) => (
  <SectionTitleParagraph className="no-reset" css={thingsTitleStyle}>
    {children}
  </SectionTitleParagraph>
)

const namespace = "asia/vietnam/transport"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t("common:country.vietnam.card.transport")
  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={t("meta-description")}
        googleDescription={t("google-description")}
        location={location}
        image={HomeImgUrl}
      />
      <VietnamBlogLayout
        page="transport-vietnam"
        location={location}
        className="fucking-annoying-classname-because-emotion-fucking-annoying-me"
        css={css`
          .section-title:not(.no-reset) {
            font-size: 1.38316rem; // h3
            margin-bottom: 1rem; // mb3
          }
        `}
      >
        <Title title={title} linkId="transport-vietnam" />
        <MainImageAsLandscape>
          <SharedCardVietnamImages image="transportMain" />
        </MainImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <MenuArticle>
          <div>
            <a href="#plane">{t("section1.title")}</a>
          </div>
          <div>
            <a href="#boat">{t("section2.title")}</a>
          </div>
          <div>
            <a href="#bus">{t("section3.title")}</a>
          </div>
          <div>
            <a href="#rickshaw">{t("section4.title")}</a>
          </div>
          <div>
            <a href="#moto">{t("section5.title")}</a>
          </div>
          <div>
            <a href="#taxi">{t("section6.title")}</a>
          </div>
          <div>
            <a href="#train">{t("section7.title")}</a>
          </div>
          <div>
            <a href="#bike">{t("section8.title")}</a>
          </div>
          <div>
            <a href="#car">{t("section9.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <Plane id="plane">
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/biohacker76-9101824")}>
                biohacker76
              </ExternalLinkNotUnderlined>
            }
          >
            <TransportVietnamImages image="plane" />
          </ImageAsLandscape>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section1.information.part1")}</p>
              <p>
                {t("section1.information.part2")} <HighLight>{t("section1.information.part3")}</HighLight>{" "}
                {t("section1.information.part4")}
              </p>
              <p>
                {t("section1.information.part5")}{" "}
                <VietnamExternalLink href={buildCo2LogicUrl(i18n.languageCode)}>
                  {t("section1.information.part6")}
                </VietnamExternalLink>
                {t("section1.information.part7")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section1.booking.part1")}{" "}
                <VietnamExternalLink href={buildExpediaUrl(i18n.languageCode)}>
                  {t("section1.booking.part2")}
                </VietnamExternalLink>
                {t("section1.booking.part3")}
              </p>
              <p>
                {t("section1.booking.part4")}{" "}
                <VietnamExternalLink href={buildSkyScannerUrl(i18n.languageCode)}>
                  {t("section1.booking.part5")}
                </VietnamExternalLink>
                {t("section1.booking.part6")}{" "}
                <VietnamExternalLink href="https://ec.europa.eu/transport/sites/transport/files/air-safety-list_fr.pdf">
                  {t("section1.booking.part7")}
                </VietnamExternalLink>
                .
              </p>
              <p>{t("section1.booking.part8")}</p>
              <p>{t("section1.booking.part9")}</p>
            </li>
            <li>
              <ThingsTitle>{t("company")}</ThingsTitle>
              <p>
                {t("section1.company.part1")}{" "}
                <VietnamExternalLink href={`https://www.vietnamairlines.com/${i18n.languageCode}`}>
                  {t("section1.company.part2")}
                </VietnamExternalLink>
                {t("section1.company.part3")}{" "}
                <VietnamExternalLink href="https://www.vietjetair.com">
                  {t("section1.company.part4")}
                </VietnamExternalLink>{" "}
                {t("section1.company.part5")}{" "}
                <VietnamExternalLink href="https://www.bambooairways.com">
                  {t("section1.company.part6")}
                </VietnamExternalLink>{" "}
                {t("section1.company.part7")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>
                {t("section1.price.part1")} <HighLight>{t("section1.price.part2")}</HighLight>
              </p>
              <p>{t("section1.price.part3")}</p>
              <p>
                {t("section1.price.part4")} <HighLight>{t("section1.price.part5")}</HighLight>
              </p>
              <p>{t("section1.price.part6")}</p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section1.opinion.part1")}</p>
              <p>{t("section1.opinion.part2")}</p>
              <p>{t("section1.opinion.part3")}</p>
            </li>
          </ListOfThings>
        </Plane>
        <Divider />
        <Boat id="boat">
          <ImageAsLandscape>
            <TransportVietnamImages image="boat" />
          </ImageAsLandscape>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section2.information.part1")}</p>
              <p>{t("section2.information.part2")}</p>
              <p>{t("section2.information.part3")}</p>
              <p>
                {t("section2.information.part4")}{" "}
                <VietnamLink to="halong-bay">{t("section2.information.part5")}</VietnamLink>{" "}
                {t("section2.information.part6")}{" "}
                <VietnamLink to="my-tho">{t("section2.information.part7")}</VietnamLink>
                {t("section2.information.part8")}
              </p>
              <p>
                {t("section2.information.part9")} <HighLight>{t("section2.information.part10")}</HighLight>{" "}
                {t("section2.information.part11")} <HighLight>{t("section2.information.part12")}</HighLight>
                {t("section2.information.part13")} <HighLight>{t("section2.information.part14")}</HighLight>{" "}
                {t("section2.information.part15")} <HighLight>{t("section2.information.part16")}</HighLight>{" "}
                {t("section2.information.part17")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section2.booking.part1")}{" "}
                <VietnamExternalLink href={buildGetYourGuideLink(i18n.languageCode)()}>
                  {t("section2.booking.part2")}
                </VietnamExternalLink>{" "}
                {t("section2.booking.part3")}{" "}
                <VietnamExternalLink href={buildTripAdvisorLink(i18n.languageCode)()}>
                  {t("section2.booking.part4")}
                </VietnamExternalLink>
                .
              </p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section2.opinion")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheRight>
                  <TransportVietnamImages image="boat2" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft>
                  <SharedCardVietnamImages image="transportMain" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <TransportVietnamImages image="boat3" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </li>
          </ListOfThings>
        </Boat>
        <Divider />
        <Bus id="bus" title={t("section3.title")}>
          <p>
            {t("section3.part1")} <HighLight>{t("section3.part2")}</HighLight> {t("section3.part3")}{" "}
            <HighLight>{t("section3.part4")}</HighLight>
          </p>
          <p>{t("section3.part5")}</p>
        </Bus>
        <Divider />
        <Bus title={t("section3.bus.title")}>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>
                {t("section3.bus.information.part1")} <HighLight>{t("section3.bus.information.part2")}</HighLight>{" "}
                {t("section3.bus.information.part3")}
              </p>
              <p>{t("section3.bus.information.part4")}</p>
              <p>{t("section3.bus.information.part5")}</p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section3.bus.booking.part1")} <HighLight>{t("section3.bus.booking.part2")}</HighLight>{" "}
                {t("section3.bus.booking.part3")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section3.bus.opinion")}</p>
            </li>
          </ListOfThings>
        </Bus>
        <Divider />
        <Bus title={t("section3.car.title")}>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>
                {t("section3.car.information.part1")} <HighLight>{t("section3.car.information.part2")}</HighLight>
              </p>
              <p>{t("section3.car.information.part3")}</p>
              <ul>
                <li>
                  <HighLight>{t("section3.car.information.part4")}</HighLight> {t("section3.car.information.part5")}
                </li>
                <li>
                  <HighLight>{t("section3.car.information.part6")}</HighLight> {t("section3.car.information.part7")}
                </li>
                <li>
                  <HighLight>{t("section3.car.information.part8")}</HighLight> {t("section3.car.information.part9")}
                </li>
                <li>
                  <HighLight>{t("section3.car.information.part10")}</HighLight> {t("section3.car.information.part11")}
                </li>
              </ul>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft
                  title="Seater Bus"
                  credit={
                    <ExternalLinkNotUnderlined href="https://thesinhtourist.vn/carhire/vctx/car-hire">
                      thesinhtourist
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="seaterBus" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight
                  title="Seater Sleeper Bus"
                  credit={
                    <ExternalLinkNotUnderlined href="https://thesinhtourist.vn/carhire/vctx/car-hire">
                      thesinhtourist
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="seaterSleeperBus" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft
                  title="Berths Seater Bus"
                  credit={
                    <ExternalLinkNotUnderlined href="https://thesinhtourist.vn/carhire/vctx/car-hire">
                      thesinhtourist
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="berthsSleeperBus" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight
                  title="Night Sleeper Bus"
                  credit={
                    <ExternalLinkNotUnderlined href="https://www.klook.com/en-SG/activity/19894-sleeper-bus-ho-chi-minh-nha-trang/">
                      klook
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="nightSleeperBus" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("section3.car.information.part12")}</p>
              <p>{t("section3.car.information.part13")}</p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section3.car.booking.part1")} <HighLight>{t("section3.car.booking.part2")}</HighLight>{" "}
                {t("section3.car.booking.part3")}
              </p>
              <p>{t("section3.car.booking.part4")}</p>
              <p>
                {t("section3.car.booking.part5")}{" "}
                <VietnamExternalLink href={build12GoAsiaUrl(i18n.languageCode)}>
                  {t("section3.car.booking.part6")}
                </VietnamExternalLink>{" "}
                {t("section3.car.booking.part7")}{" "}
                <VietnamExternalLink href={buildBaolauUrl(i18n.languageCode)}>
                  {t("section3.car.booking.part8")}
                </VietnamExternalLink>
              </p>
            </li>
            <li>
              <ThingsTitle>{t("company")}</ThingsTitle>
              <p>
                {t("section3.car.company.part1")}{" "}
                <VietnamExternalLink href={`https://www.thesinhtourist.vn/`}>
                  {t("section3.car.company.part2")}
                </VietnamExternalLink>
                ,{" "}
                <VietnamExternalLink href={`https://futabus.vn/en-US?lang=en-US`}>
                  {t("section3.car.company.part3")}
                </VietnamExternalLink>{" "}
                {t("section3.car.company.part4")}{" "}
                <VietnamExternalLink href={`http://mailinhexpress.vn/`}>
                  {t("section3.car.company.part5")}
                </VietnamExternalLink>
              </p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>
                {t("section3.car.price.part1")} <HighLight>{t("section3.car.price.part2")}</HighLight>{" "}
                {t("section3.car.price.part3")}
              </p>
              <p>{t("section3.car.price.part4")}</p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section3.car.opinion.part1")}</p>
              <p>{t("section3.car.opinion.part2")}</p>
              <p>{t("section3.car.opinion.part3")}</p>
              <p>
                {t("section3.car.opinion.part4")}{" "}
                <VietnamLink to="cambodia">{t("section3.car.opinion.part5")}</VietnamLink>{" "}
                {t("section3.car.opinion.part6")}
              </p>
            </li>
          </ListOfThings>
        </Bus>
        <Divider />
        <Bus title={t("section3.open-tour.title")}>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>
                {t("section3.open-tour.information.part1")}{" "}
                <HighLight>{t("section3.open-tour.information.part2")}</HighLight>{" "}
                {t("section3.open-tour.information.part3")}
              </p>
              <p>{t("section3.open-tour.information.part4")}</p>
              <ul>
                <li>{t("section3.open-tour.information.part5")}</li>
                <li>{t("section3.open-tour.information.part6")}</li>
                <li>{t("section3.open-tour.information.part7")}</li>
                <li>{t("section3.open-tour.information.part8")}</li>
              </ul>
              <p>{t("section3.open-tour.information.part9")}</p>
              <p>
                {t("section3.open-tour.information.part10")}{" "}
                <HighLight>{t("section3.open-tour.information.part11")}</HighLight>{" "}
                {t("section3.open-tour.information.part12")}
              </p>
              <p>{t("section3.open-tour.information.part13")}</p>
              <p>
                {t("section3.open-tour.information.part14")}{" "}
                <VietnamExternalLink href={buildGetYourGuideLink(i18n.languageCode)()}>
                  {t("section3.open-tour.information.part15")}
                </VietnamExternalLink>{" "}
                {t("section3.open-tour.information.part16")}
              </p>
              <p>
                {t("section3.open-tour.information.part17")}{" "}
                <VietnamLink to="halong-bay">{t("section3.open-tour.information.part18")}</VietnamLink>{" "}
                {t("section3.open-tour.information.part19")}
              </p>
              <p>{t("section3.open-tour.information.part20")}</p>
              <p>
                {t("section3.open-tour.information.part21")}{" "}
                <HighLight>{t("section3.open-tour.information.part22")}</HighLight>{" "}
                {t("section3.open-tour.information.part23")}{" "}
                <HighLight>{t("section3.open-tour.information.part24")}</HighLight>
                {t("section3.open-tour.information.part25")}
              </p>
              <p>{t("section3.open-tour.information.part26")}</p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section3.open-tour.booking.part1")} <HighLight>{t("section3.open-tour.booking.part2")}</HighLight>{" "}
                {t("section3.open-tour.booking.part3")} <HighLight>{t("section3.open-tour.booking.part4")}</HighLight>
              </p>
              <ul>
                <li>{t("section3.open-tour.booking.part5")}</li>
                <li>{t("section3.open-tour.booking.part6")}</li>
                <li>{t("section3.open-tour.booking.part7")}</li>
                <li>{t("section3.open-tour.booking.part8")}</li>
              </ul>
              <p>
                {t("section3.open-tour.booking.part9")} <HighLight>{t("section3.open-tour.booking.part10")}</HighLight>{" "}
                {t("section3.open-tour.booking.part11")}
              </p>
              <p>{t("section3.open-tour.booking.part12")}</p>
              <p>
                {t("section3.open-tour.booking.part13")} <HighLight>{t("section3.open-tour.booking.part14")}</HighLight>{" "}
                {t("section3.open-tour.booking.part15")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("company")}</ThingsTitle>
              <p>
                <HighLight>{t("section3.open-tour.company.part1")}</HighLight> {t("section3.open-tour.company.part2")}{" "}
                <VietnamExternalLink href="https://thesinhtourist.vn/openbus/vcvx/open-bus/all">
                  {t("section3.open-tour.company.part3")}
                </VietnamExternalLink>
                .
              </p>
              <p>{t("section3.open-tour.company.part4")}</p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>{t("section3.open-tour.price.part1")}</p>
              <ul>
                <li>
                  {t("section3.open-tour.price.part2")}{" "}
                  <VietnamExternalLink href="https://www.thesinhtourist.vn/download/OpenBus-SG.pdf">
                    {t("section3.open-tour.price.part3")}
                  </VietnamExternalLink>
                </li>
                <li>
                  {t("section3.open-tour.price.part4")}{" "}
                  <VietnamExternalLink href="https://www.thesinhtourist.vn/download/OpenBus-HN.pdf">
                    {t("section3.open-tour.price.part5")}
                  </VietnamExternalLink>
                </li>
                <li>
                  {t("section3.open-tour.price.part6")}{" "}
                  <VietnamExternalLink href="https://www.thesinhtourist.vn/download/OpenBus-Hue.pdf">
                    {t("section3.open-tour.price.part7")}
                  </VietnamExternalLink>
                </li>
              </ul>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section3.open-tour.opinion.part1")}</p>
              <p>{t("section3.open-tour.opinion.part2")}</p>
              <p>{t("section3.open-tour.opinion.part3")}</p>
            </li>
          </ListOfThings>
        </Bus>
        <Divider />
        <Bus title={t("section3.guided-tour.title")}>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>
                {t("section3.guided-tour.information.part1")}{" "}
                <HighLight>{t("section3.guided-tour.information.part2")}</HighLight>
              </p>
              <p>{t("section3.guided-tour.information.part3")}</p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>{t("section3.guided-tour.booking.part1")}</p>
              <p>
                {t("section3.guided-tour.booking.part2")}{" "}
                <VietnamExternalLink
                  href={buildTripAdvisorLink(i18n.languageCode)(
                    "Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html"
                  )}
                >
                  {t("section3.guided-tour.booking.part3")}
                </VietnamExternalLink>{" "}
                {t("section3.guided-tour.booking.part4")}{" "}
                <VietnamExternalLink href={buildGetYourGuideLink(i18n.languageCode)("discovery/s?q=Vietnam")}>
                  {t("section3.guided-tour.booking.part5")}
                </VietnamExternalLink>
                {t("section3.guided-tour.booking.part6")}
              </p>
              <p>
                {t("section3.guided-tour.booking.part7")}{" "}
                <VietnamExternalLink
                  href={buildGoogleMapsUrl(i18n.languageCode)(
                    "place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam"
                  )}
                >
                  {t("section3.guided-tour.booking.part8")}
                </VietnamExternalLink>{" "}
                {t("section3.guided-tour.booking.part9")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>
                {t("section3.guided-tour.price.part1")} <HighLight>{t("section3.guided-tour.price.part2")}</HighLight>
              </p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section3.guided-tour.opinion.part1")}</p>
              <p>{t("section3.guided-tour.opinion.part2")}</p>
              <p>{t("section3.guided-tour.opinion.part3")}</p>
            </li>
          </ListOfThings>
        </Bus>
        <Divider />
        <Rickshaw id="rickshaw" title={t("section4.title")}>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>
                {t("section4.information.part1")} <HighLight>{t("section4.information.part2")}</HighLight>{" "}
                {t("section4.information.part3")}
              </p>
              <p>
                {t("section4.information.part4")}{" "}
                <VietnamLink to="hoi-an">{t("section4.information.part5")}</VietnamLink>{" "}
                {t("section4.information.part6")}
              </p>
              <p>{t("section4.information.part7")}</p>
              <p>{t("section4.information.part8")}</p>
              <p>
                {t("section4.information.part9")} <HighLight>{t("section4.information.part10")}</HighLight>{" "}
                {t("section4.information.part11")}{" "}
                <VietnamLink to="arashiyama">{t("section4.information.part12")}</VietnamLink>{" "}
                {t("section4.information.part13")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>
                {t("section4.price.part1")} <HighLight>{t("section4.price.part2")}</HighLight>{" "}
                {t("section4.price.part3")}
              </p>
              <p>{t("section4.price.part4")}</p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section4.opinion.part1")}</p>
              <ImageAsLandscape>
                <TransportVietnamImages image="rickshaw" />
              </ImageAsLandscape>
            </li>
          </ListOfThings>
        </Rickshaw>
        <Divider />
        <Moto id="moto" title={t("section5.title")}>
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/viarami-13458823/")}>
                viarami
              </ExternalLinkNotUnderlined>
            }
          >
            <TransportVietnamImages image="moto" />
          </ImageAsLandscape>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section5.information.part1")}</p>
              <p>{t("section5.information.part2")}</p>
              <p>{t("section5.information.part3")}</p>
              <p>
                {t("section5.information.part4")} <HighLight>{t("section5.information.part5")}</HighLight>{" "}
                {t("section5.information.part6")}
              </p>
              <p>
                {t("section5.information.part7")} <HighLight>{t("section5.information.part8")}</HighLight>{" "}
                {t("section5.information.part9")}
              </p>
              <p>{t("section5.information.part10")}</p>
              <ul>
                <li>{t("section5.information.part11")}</li>
                <li>
                  {t("section5.information.part12")}
                  <VietnamExternalLink href="https://commons.wikimedia.org/wiki/File:Vienna_Convention_on_Road_Traffic.svg">
                    {t("section5.information.part13")}
                  </VietnamExternalLink>
                  {t("section5.information.part14")}
                </li>
              </ul>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section5.booking.part1")} <HighLight>{t("section5.booking.part2")}</HighLight>
              </p>
              <p>
                {t("section5.booking.part3")}{" "}
                <VietnamExternalLink href="http://www.flamingotravel.com.vn/rentals/">
                  {t("section5.booking.part4")}
                </VietnamExternalLink>
                {t("section5.booking.part5")}
              </p>
              <p>
                {t("section5.booking.part6")} <HighLight>{t("section5.booking.part7")}</HighLight>{" "}
                {t("section5.booking.part8")}{" "}
                <VietnamExternalLink href="https://www.facebook.com/groups/ForSaleVietnam/">
                  {t("section5.booking.part9")}
                </VietnamExternalLink>{" "}
                {t("section5.booking.part10")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>{t("section5.price.part1")}</p>
              <ul>
                <li>
                  <HighLight>{t("section5.price.part2")}</HighLight> {t("section5.price.part3")}
                </li>
                <li>
                  <HighLight>{t("section5.price.part4")}</HighLight> {t("section5.price.part5")}
                </li>
                <li>
                  <HighLight>{t("section5.price.part6")}</HighLight> {t("section5.price.part7")}{" "}
                  <VietnamExternalLink>{t("section5.price.part8")}</VietnamExternalLink>
                  {t("section5.price.part9")}
                </li>
              </ul>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p
                className="mb0 tc b"
                css={css`
                  margin-bottom: 0 !important;
                  color: ${vietnamPrimaryColorDarker};
                `}
              >
                {t("section5.opinion.part1")}
              </p>
              <p className="tc i">{t("section5.opinion.part2")}</p>
              <p>{t("section5.opinion.part3")}</p>
              <p>{t("section5.opinion.part4")}</p>
            </li>
          </ListOfThings>
        </Moto>
        <Divider />
        <Taxi id="taxi">
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section6.information.part1")}</p>
              <p>
                {t("section6.information.part2")} <HighLight>{t("section6.information.part3")}</HighLight>
              </p>
              <p>{t("section6.information.part4")}</p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section6.booking.part1")} <HighLight>{t("section6.booking.part2")}</HighLight>{" "}
                {t("section6.booking.part3")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("company")}</ThingsTitle>
              <p>
                <HighLight>{t("section6.company.part1")}</HighLight> {t("section6.company.part2")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>
                {t("section6.price.part1")} <HighLight>{t("section6.price.part2")}</HighLight>{" "}
                {t("section6.price.part3")}
              </p>
              <p>
                {t("section6.price.part4")}{" "}
                <VietnamExternalLink href="https://www.grab.com/vn/en/transport/justgrab/#section-fare-table-fare-table-for-justgrab">
                  {t("section6.price.part5")}
                </VietnamExternalLink>{" "}
                {t("section6.price.part6")}
              </p>
              <p>{t("section6.price.part7")}</p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section6.opinion")}</p>
            </li>
          </ListOfThings>
        </Taxi>
        <Divider />
        <Train id="train">
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/bomhehe100-8743342")}>
                bomhehe100
              </ExternalLinkNotUnderlined>
            }
          >
            <TransportVietnamImages image="train" />
          </ImageAsLandscape>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section7.information.part1")}</p>
              <p>{t("section7.information.part2")}</p>
              <p>{t("section7.information.part3")}</p>
              <ul>
                <li>
                  <HighLight>{t("section7.information.part4")}</HighLight> {t("section7.information.part5")}
                </li>
                <li>
                  <HighLight>{t("section7.information.part6")}</HighLight> {t("section7.information.part7")}
                </li>
                <li>
                  <HighLight>{t("section7.information.part8")}</HighLight> {t("section7.information.part9")}
                </li>
                <li>
                  <HighLight>{t("section7.information.part10")}</HighLight> {t("section7.information.part11")}
                </li>
              </ul>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft
                  title="Hard Seat"
                  credit={
                    <ExternalLinkNotUnderlined href="https://en.wikipedia.org/wiki/Vietnam_Railways#/media/File:CowtownExpressInterior1.jpg">
                      wikipedia
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="hardSeatTrain" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight
                  title="Soft Seat"
                  credit={
                    <ExternalLinkNotUnderlined href={buildBaolauUrl(i18n.languageCode)}>
                      baolau
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="softSeatTrain" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft
                  title="Hard Sleeper"
                  credit={
                    <ExternalLinkNotUnderlined href={buildBaolauUrl(i18n.languageCode)}>
                      baolau
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="hardSleeperTrain" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight
                  title="Soft Sleeper"
                  credit={
                    <ExternalLinkNotUnderlined href={buildBaolauUrl(i18n.languageCode)}>
                      baolau
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <TransportVietnamImages image="softSleeperTrain" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>
                {t("section7.booking.part1")}{" "}
                <VietnamExternalLink href={buildBaolauUrl(i18n.languageCode)}>
                  {t("section7.booking.part2")}
                </VietnamExternalLink>{" "}
                {t("section7.booking.part3")}{" "}
                <VietnamExternalLink href={build12GoAsiaUrl(i18n.languageCode)}>
                  {t("section7.booking.part4")}
                </VietnamExternalLink>
                {t("section7.booking.part5")}
              </p>
              <p>{t("section7.booking.part6")}</p>
              <p>{t("section7.booking.part7")}</p>
            </li>
            <li>
              <ThingsTitle>{t("company")}</ThingsTitle>
              <p>
                {t("section7.company.part1")} <HighLight>{t("section7.company.part2")}</HighLight>{" "}
                {t("section7.company.part3")}
                <img src={VietnamRailwayIcon} alt="Vietnam Railway" />
              </p>
              <p>{t("section7.company.part4")}</p>
              <ul>
                <li>
                  <HighLight>{t("section7.company.part5")}</HighLight> {t("section7.company.part6")}
                  <img src={VioletteIcon} alt="Violette" className="v-top" />
                </li>
                <li>
                  <HighLight>{t("section7.company.part7")}</HighLight> {t("section7.company.part8")}{" "}
                  <img src={NewLivitransIcon} alt="New Livitrans Express" className="v-top" />
                </li>
                <li>
                  <HighLight>{t("section7.company.part9")}</HighLight> {t("section7.company.part10")}
                  <img src={LotusIcon} alt="Lotus Train" className="v-top" />
                </li>
              </ul>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>{t("section7.price")}</p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section7.opinion.part1")}</p>
              <p>{t("section7.opinion.part2")}</p>
              <p>{t("section7.opinion.part3")}</p>
            </li>
          </ListOfThings>
        </Train>
        <Divider />
        <Bike id="bike">
          <ImageAsLandscape>
            <TransportVietnamImages image="bicycle" />
          </ImageAsLandscape>
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section8.information.part1")}</p>
              <p>{t("section8.information.part2")}</p>
            </li>
            <li>
              <ThingsTitle>{t("booking")}</ThingsTitle>
              <p>{t("section8.booking")}</p>
            </li>
            <li>
              <ThingsTitle>{t("price")}</ThingsTitle>
              <p>
                {t("section8.price.part1")} <HighLight>{t("section8.price.part2")}</HighLight>{" "}
                {t("section8.price.part3")}
              </p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section8.opinion")}</p>
            </li>
          </ListOfThings>
        </Bike>
        <Divider />
        <Car id="car">
          <ListOfThings>
            <li>
              <ThingsTitle>{t("information")}</ThingsTitle>
              <p>{t("section9.information")}</p>
            </li>
            <li>
              <ThingsTitle>{t("opinion")}</ThingsTitle>
              <p>{t("section9.opinion")}</p>
            </li>
          </ListOfThings>
        </Car>
        <Divider />
        <section>
          <VietnamHeadline>{t("section10.title")}</VietnamHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section10.part1")}</p>
            <ul>
              <li>{t("section10.part2")}</li>
            </ul>
            <ul>
              <li>{t("section10.part3")}</li>
            </ul>
            <ul>
              <li>{t("section10.part4")}</li>
            </ul>
            <ul>
              <li>{t("section10.part5")}</li>
            </ul>
            <p>{t("section10.part6")}</p>
          </SectionContent>
        </section>
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
                ? [<MyThoImages image="cardFr1" key="cardFr1" />, <MyThoImages image="cardFr2" key="cardFr2" />]
                : [<MyThoImages image="cardEn1" key="cardEn1" />, <MyThoImages image="cardEn2" key="cardEn2" />],
          }}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

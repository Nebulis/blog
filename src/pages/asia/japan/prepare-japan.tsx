import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import translationFr from "../../../locales/fr/asia/japan/prepare-japan.json"
import translationEn from "../../../locales/en/asia/japan/prepare-japan.json"
import { FaBriefcaseMedical, FaLaptop, FaShoppingBag, FaTshirt } from "react-icons/fa"
import {
  defaultExcludedWeatherEntries,
  JapanBlogLayout,
  JapanTitle,
  japanWeatherEntries,
} from "../../../components/core/japan/japan"
import {
  Baggage,
  FewWords,
  Health,
  How,
  HowLong,
  HowMuch,
  Introduction,
  LocalCurrency,
  MenuArticle,
  NaturalDisaster,
  Opinion,
  Phone,
  Scams,
  Visa,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../components/core/section"
import { Divider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/asia/japan/prepare-japan/prepare-japan-main.jpg"
import { MapContainer, PetitCarreColore, Table } from "../../../components/layout/layout"
import { ApplicationContext } from "../../../components/application"
import {
  BlueKimono,
  Fuji,
  JapanCalendar,
  JapanEarthquake,
  JapanEarthquake2,
  JapanFan,
  JapanPrepareFlag,
  JapanTea,
  ManekiNeko,
  Ninja,
  PinkKimono,
  Shinkansen,
  Tori,
  Volcano,
} from "../../../components/core/japan/japan.prepare"
import { japanPrimaryColor, japanPrimaryColorWithOpacity } from "../../../components/core/japan/japan.variables"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FakeList, PrepareSubTitle } from "../../../components/core/title"
import { Weather } from "../../../components/core/weather"
import { ImageAsLandscape, ImageAsPortrait } from "../../../components/images/layout"
import JapanMapActivitiesTransport from "../../../images/asia/japan/prepare-japan/prepare-japan-activities-transport.png"
import JapanBudget from "../../../images/asia/japan/prepare-japan/prepare-japan-budget.png"
import JapanBudget2 from "../../../images/asia/japan/prepare-japan/prepare-japan-budget2.png"
import { getLink } from "../../../components/core/links/links.utils"
import { SharedCardJapanImages } from "../../../components/images/asia/japan/shared-card-japan-images"
import { PrepareJapanImages } from "../../../components/images/asia/japan/prepare-japan"
import { ExternalLinkNotUnderlined } from "../../../components/core/links/link"
import { buildPixabayUrl } from "../../../utils"
import { Tornado } from "../../../components/icon/tornado"
import { Hurricane } from "../../../components/icon/hurricane"
import { Conclusion } from "../../../components/core/conclusion"
import { Comments } from "../../../components/core/comments"
import {
  AndorraWithFlag,
  ArgentinaWithFlag,
  AustraliaWithFlag,
  AustriaWithFlag,
  BahamasWithFlag,
  BarbadosWithFlag,
  BelgiumWithFlag,
  BruneiFlag,
  CanadaWithFlag,
  ChileWithFlag,
  CostaRicaWithFlag,
  CountryWithFlag,
  CroatiaWithFlag,
  CyprusWithFlag,
  CzechRepublicWithFlag,
  DenmarkWithFlag,
  DominicaWithFlag,
  ElSalvadorWithFlag,
  EstoniaWithFlag,
  FinlandWithFlag,
  FranceWithFlag,
  GermanyWithFlag,
  GreeceWithFlag,
  GuatemalaWithFlag,
  HondurasWithFlag,
  HongKongWithFlag,
  HungaryWithFlag,
  IndonesiaWithFlag,
  IrelandWithFlag,
  IsraelWithFlag,
  ItalyWithFlag,
  LatviaWithFlag,
  LesothoWithFlag,
  LiechtensteinWithFlag,
  LithuaniaWithFlag,
  LuxembourgWithFlag,
  MacaoWithFlag,
  MacedoniaWithFlag,
  MalaysiaWithFlag,
  MaltaWithFlag,
  MauritiusWithFlag,
  MexicoWithFlag,
  MonacoWithFlag,
  NetherlandsWithFlag,
  NewZealandWithFlag,
  NorwayWithFlag,
  PolandWithFlag,
  SerbiaWithFlag,
  SingaporeWithFlag,
  SlovakiaWithFlag,
  SloveniaWithFlag,
  SouthKoreaWithFlag,
  SpainWithFlag,
  SurinameWithFlag,
  SwedenWithFlag,
  SwitzerlandWithFlag,
  TaiwanWithFlag,
  ThailandFlag,
  TunisiaWithFlag,
  TurkeyWithFlag,
  UaeFlag,
  UKWithFlag,
  UruguayWithFlag,
  UsaWithFlag,
} from "../../../components/icon/flags"

const namespace = "asia/japan/prepare-japan"
const id = "prepare-japan"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const VisaTitle = styled.p`
  color: ${japanPrimaryColor};
  font-size: 1.1rem;
`

const VisaHeaderRow = styled.tr`
  background-color: ${japanPrimaryColorWithOpacity(0.4)};
  &:hover {
    background-color: ${japanPrimaryColorWithOpacity(0.3)};
  }
`

// TODO sous titre pas les meme
// TODO dans opinion les fleches sont pas soulignes au vietnam
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.prepare`)
  const transportLinkPublished = development || getLink("transports-in-japan").published
  const foodLinkPublished = development || getLink("food-in-japan").published
  const devicesPublished = development || getLink("devices").published

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
      <JapanBlogLayout
        page={id}
        location={location}
        css={css`
          .section-title {
            font-size: 1.38316rem; // h3
            margin-bottom: 1rem; // mb3
          }
        `}
      >
        <JapanTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardJapanImages image="prepareJapan" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <MenuArticle title={t("index")}>
          <div>
            <a href="#visa">{t("visa.title")}</a>
          </div>
          <div>
            <a href="#health">{t("health.title")}</a>
          </div>
          <div>
            <a href="#weather">{t("weather.title")}</a>
          </div>
          <div>
            <a href="#how-long">{t("how-long.title")}</a>
          </div>
          <div>
            <a href="#activities">{t("activities.title")}</a>
          </div>
          <div>
            <a href="#transports">{t("transports.title")}</a>
          </div>
          <div>
            <a href="#accommodations">{t("accommodations.title")}</a>
          </div>
          <div>
            <a href="#money">{t("money.title")}</a>
          </div>
          <div>
            <a href="#phone">{t("phone.title")}</a>
          </div>
          <div>
            <a href="#scam">{t("scam.title")}</a>
          </div>
          <div>
            <a href="#natural-disasters">{t("natural-disasters.title")}</a>
          </div>
          <div>
            <a href="#baggage">{t("baggage.title")}</a>
          </div>
          <div>
            <a href="#opinion">{t("opinion.title")}</a>
          </div>
          <div>
            <a href="#currency">{t("currency.title")}</a>
          </div>
          <div>
            <a href="#few-words">{t("few-words.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <Visa id="visa">
          <ImageAsLandscape>
            <PrepareJapanImages image="visa" />
          </ImageAsLandscape>
          <p>{t("visa.part2")}</p>
          <ol>
            <li>{t("visa.part3")}</li>
            <li>{t("visa.part4")}</li>
          </ol>
          <VisaTitle className="b list-item mb2 ml3">{t("visa.part5.title")}</VisaTitle>
          <p>{t("visa.part5.part1")}</p>
          <p>{t("visa.part5.part2")}</p>
          <div className="flex justify-center mt3">
            <Table
              css={css`
                max-width: 800px;
              `}
            >
              <tbody>
                <VisaHeaderRow>
                  <th>{t("common:continent.europe")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <GermanyWithFlag />
                    <AndorraWithFlag />
                    <AustriaWithFlag />
                    <BelgiumWithFlag />
                    <CroatiaWithFlag />
                    <CyprusWithFlag />
                    <DenmarkWithFlag />
                    <SpainWithFlag />
                    <EstoniaWithFlag />
                    <FinlandWithFlag />
                    <FranceWithFlag />
                    <GreeceWithFlag />
                    <HungaryWithFlag />
                    <IrelandWithFlag />
                    <ItalyWithFlag />
                    <LatviaWithFlag />
                    <LiechtensteinWithFlag />
                    <LithuaniaWithFlag />
                    <LuxembourgWithFlag />
                    <MacedoniaWithFlag />
                    <MaltaWithFlag />
                    <MonacoWithFlag />
                    <NetherlandsWithFlag />
                    <NorwayWithFlag />
                    <PolandWithFlag />
                    <CzechRepublicWithFlag />
                    <UKWithFlag />
                    <SerbiaWithFlag />
                    <SlovakiaWithFlag />
                    <SloveniaWithFlag />
                    <SwedenWithFlag />
                    <SwitzerlandWithFlag />
                  </td>
                </tr>
                <VisaHeaderRow>
                  <th>{t("common:continent.north-america")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <CanadaWithFlag />
                    <UsaWithFlag />
                  </td>
                </tr>
                <VisaHeaderRow>
                  <th>{t("common:continent.south-america")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <ArgentinaWithFlag />
                    <BahamasWithFlag />
                    <BarbadosWithFlag />
                    <ChileWithFlag />
                    <CostaRicaWithFlag />
                    <DominicaWithFlag />
                    <GuatemalaWithFlag />
                    <HondurasWithFlag />
                    <MexicoWithFlag />
                    <ElSalvadorWithFlag />
                    <SurinameWithFlag />
                    <UruguayWithFlag />
                  </td>
                </tr>
                <VisaHeaderRow>
                  <th>{t("common:continent.asia")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <CountryWithFlag
                      text={`${t("common:country.brunei.title")} ${t("visa.part5.brunei")}`}
                      flag={BruneiFlag}
                    />
                    <SouthKoreaWithFlag />
                    <HongKongWithFlag />
                    <IndonesiaWithFlag />
                    <MacaoWithFlag />
                    <MalaysiaWithFlag />
                    <SingaporeWithFlag />
                    <TaiwanWithFlag />
                    <CountryWithFlag
                      text={`${t("common:country.thailand.title")} ${t("visa.part5.thailand")}`}
                      flag={ThailandFlag}
                    />
                  </td>
                </tr>
                <VisaHeaderRow>
                  <th>{t("common:continent.oceania")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <AustraliaWithFlag />
                    <NewZealandWithFlag />
                  </td>
                </tr>
                <VisaHeaderRow>
                  <th>{t("common:continent.middle-east")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <CountryWithFlag text={`${t("common:country.uae.title")} ${t("visa.part5.uae")}`} flag={UaeFlag} />
                    <IsraelWithFlag />
                    <TurkeyWithFlag />
                  </td>
                </tr>
                <VisaHeaderRow>
                  <th>{t("common:continent.africa")}</th>
                </VisaHeaderRow>
                <tr>
                  <td>
                    <LesothoWithFlag />
                    <MauritiusWithFlag />
                    <TunisiaWithFlag />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <p> {t("visa.part5.part3")}</p>
          <p>{t("visa.part5.part4")}</p>
          <p>{t("visa.part5.part5")}</p>
          <p>{t("visa.part5.part6")}</p>
          <ul>
            <li>{t("visa.part5.part7")}</li>
          </ul>
          <VisaTitle className="b list-item mb2 ml3">{t("visa.part6.title")}</VisaTitle>
          <p>{t("visa.part6.part1")}</p>
          <p>{t("visa.part6.part2")}</p>
          <PetitCarreColore>
            <p>{t("visa.part7")}</p>
            <p>{t("visa.part8")}</p>
            <p>{t("visa.part9")}</p>
            <p>{t("visa.part10")}</p>
            <p className="mt2">
              <JapanPrepareFlag />
            </p>
          </PetitCarreColore>
          <p>{t("visa.part11")}</p>
          <p>{t("visa.part12")}</p>
          <p>{t("visa.part13")}</p>
          <p>{t("visa.part14")}</p>
          <PetitCarreColore>
            <p>{t("visa.part15")}</p>
          </PetitCarreColore>
        </Visa>
        <Divider />
        <Health id="health">
          <ImageAsLandscape>
            <PrepareJapanImages image="health" />
          </ImageAsLandscape>
          <p>{t("health.part1")}</p>
          <PetitCarreColore>
            <p className="ttu">{t("health.part2")}</p>
            <p>{t("health.part3")}</p>
            <p>{t("health.part4")}</p>
            <p>
              <JapanFan />
            </p>
          </PetitCarreColore>
          <p>{t("health.part5")}</p>
          <p>{t("health.part6")}</p>
          <p>{t("health.part7")}</p>
        </Health>
        <Divider />
        <WhatTimeOfYear title={t("weather.title")} id="weather">
          <PrepareSubTitle>{t("weather.part1")}</PrepareSubTitle>
          <Weather
            extraButton
            entries={japanWeatherEntries().filter((entry) => !defaultExcludedWeatherEntries.includes(entry.id ?? ""))}
          />
          <p>{t("weather.part2")}</p>
          <p>{t("weather.part3")}</p>
          <p>{t("weather.part4")}</p>
          <p>{t("weather.part5")}</p>
          <p>{t("weather.part6")}</p>
          <p>{t("weather.part7")}</p>
          <p>{t("weather.part8")}</p>
        </WhatTimeOfYear>
        <Divider />
        <HowLong title={t("how-long.title")} id="how-long">
          <PrepareSubTitle>{t("how-long.part1")}</PrepareSubTitle>
          <ImageAsLandscape>
            <PrepareJapanImages image="howLong" />
          </ImageAsLandscape>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
          <p>{t("how-long.part4")}</p>
          <PetitCarreColore>
            <p>
              <JapanCalendar />
            </p>
            <p>{t("how-long.part5")}</p>
            <p>{t("how-long.part6")}</p>
            <p>{t("how-long.part7")}</p>
            <p>{t("how-long.part8")}</p>
            <p>{t("how-long.part9")}</p>
            <p>{t("how-long.part10")}</p>
            <p>{t("how-long.part11")}</p>
            <p>{t("how-long.part12")}</p>
          </PetitCarreColore>
        </HowLong>
        <Divider />
        <Visit title={t("activities.title")} id="activities">
          <PrepareSubTitle>{t("activities.part1")}</PrepareSubTitle>
          {i18n.languageCode === "fr" && (
            <ImageAsLandscape>
              <PrepareJapanImages image="activities" imgStyle={{ objectFit: "contain" }} />
            </ImageAsLandscape>
          )}
          {i18n.languageCode === "en" && (
            <ImageAsLandscape>
              <PrepareJapanImages image="activities2" imgStyle={{ objectFit: "contain" }} />
            </ImageAsLandscape>
          )}
          <p>{t("activities.part2")}</p>
          <p>{t("activities.part3")}</p>
          <p>{t("activities.part4")}</p>
          <PetitCarreColore>
            <p>
              <Fuji />
              <Tori />
            </p>
            <p>{t("activities.part5")}</p>
            <p>{t("activities.part6")}</p>
            <p>{t("activities.part7")}</p>
            <p>{t("activities.part8")}</p>
            <p>{t("activities.part9")}</p>
            <p>{t("activities.part10")}</p>
            <p>{t("activities.part11")}</p>
          </PetitCarreColore>
          <p>{t("activities.part12")}</p>
          <p>{t("activities.part13")}</p>
          <p>{t("activities.part14")}</p>
          <MapContainer>
            <img src={JapanMapActivitiesTransport} alt="Japan Map Activities Transport" />
          </MapContainer>
        </Visit>
        <Divider />
        <How title={t("transports.title")} id="transports">
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/michelleraponi-165491")}>
                Michelleraponi
              </ExternalLinkNotUnderlined>
            }
          >
            <SharedCardJapanImages image="transportsInJapan" />
          </ImageAsLandscape>
          <p>{t("transports.part1")}</p>
          <p>{t("transports.part2")}</p>
          <p>{t("transports.part3")}</p>
          <p>{t("transports.part4")}</p>
          {transportLinkPublished && <p>{t("transports.part5")}</p>}
          <p className="tc">
            <Shinkansen />
          </p>
        </How>
        <Divider />
        <WhereToStay title={t("accommodations.title")} id="accommodations">
          <PrepareSubTitle>{t("accommodations.part1")}</PrepareSubTitle>
          <ImageAsLandscape>
            <PrepareJapanImages image="accommodations" />
          </ImageAsLandscape>
          <p>{t("accommodations.part2")}</p>
          <p>{t("accommodations.part3")}</p>
          <PetitCarreColore>
            <p>{t("accommodations.part4")}</p>
            <p>{t("accommodations.part5")}</p>
            <p>{t("accommodations.part6")}</p>
            <p>{t("accommodations.part7")}</p>
            <p>{t("accommodations.part8")}</p>
            <p>{t("accommodations.part9")}</p>
          </PetitCarreColore>
          <p>{t("accommodations.part10")}</p>
          <p className="tc">
            <JapanTea />
          </p>
        </WhereToStay>
        <Divider />
        <HowMuch title={t("money.title")} id="money">
          <MapContainer
            css={css`
              margin-bottom: 0;
              img {
                max-width: 600px;
              }
            `}
          >
            {i18n.languageCode === "fr" && <img src={JapanBudget} alt="Japan Budget" className="w-100" />}
            {i18n.languageCode === "en" && <img src={JapanBudget2} alt="Japan Budget" className="w-100" />}
          </MapContainer>
          <p>{t("money.part1")}</p>
          <p>{t("money.part2")}</p>
          <p>{t("money.part3")}</p>
          <FakeList>{t("money.part4")}</FakeList>
          <p>{t("money.part5")}</p>
          <FakeList>{t("money.part6")}</FakeList>
          <p>{t("money.part7")}</p>
          <p>{t("money.part8")}</p>
          <p>{t("money.part9")}</p>
          <FakeList>{t("money.part10")}</FakeList>
          <p>{t("money.part11")}</p>
          <FakeList>{t("money.part12")}</FakeList>
          <p>{t("money.part13")}</p>
          <p>{t("money.part14")}</p>
          {transportLinkPublished && <p>{t("money.part15")}</p>}
          <PetitCarreColore>
            <p>{t("money.part16")}</p>
            <p>
              <ManekiNeko />
            </p>
          </PetitCarreColore>
          <p>{t("money.part17")}</p>
        </HowMuch>
        <Divider />
        <Phone id="phone">
          <p>{t("phone.part1")}</p>
          <p>{t("phone.part2")}</p>
          <p>{t("phone.part3")}</p>
          <p>{t("phone.part4")}</p>
          <p>{t("phone.part5")}</p>
          <p>{t("phone.part6")}</p>
          <p>{t("phone.part7")}</p>
          <p>{t("phone.part8")}</p>
        </Phone>
        <Divider />
        <Scams id="scam">
          <p>{t("scam.part1")}</p>
          <p>{t("scam.part2")}</p>
          <p>{t("scam.part3")}</p>
          <p className="tc">
            <Ninja />
          </p>
        </Scams>
        <Divider />
        <NaturalDisaster id="natural-disasters">
          <p>{t("natural-disasters.part1")}</p>
          <PetitCarreColore>{t("natural-disasters.part2")}</PetitCarreColore>
          <p
            className="tc"
            css={css`
              svg:not(:first-of-type) {
                margin-left: 0.5rem;
              }
            `}
          >
            <Tornado />
            <Hurricane />
          </p>
          <p>{t("natural-disasters.part3")}</p>
          <p>{t("natural-disasters.part4")}</p>
          <p>{t("natural-disasters.part5")}</p>
          {t("natural-disasters.part6") && <p>{t("natural-disasters.part6")}</p>}
          <p
            className="tc"
            css={css`
              svg:not(:first-of-type) {
                margin-left: 0.5rem;
              }
            `}
          >
            <JapanEarthquake />
            <JapanEarthquake2 />
          </p>
          <p>{t("natural-disasters.part7")}</p>
          <p>{t("natural-disasters.part8")}</p>
          <p>{t("natural-disasters.part9")}</p>
          {t("natural-disasters.part10") && <p>{t("natural-disasters.part10")}</p>}
          <p className="tc">
            <Volcano />
          </p>
          <p>{t("natural-disasters.part11")}</p>
          <p>{t("natural-disasters.part12")}</p>
          <p>{t("natural-disasters.part13")}</p>
          <p>{t("natural-disasters.part14")}</p>
          <p>{t("natural-disasters.part15")}</p>
          <PetitCarreColore>
            <p className="ttu">{t("natural-disasters.part16")}</p>
            <br />
            {t("natural-disasters.part17") && <p>{t("natural-disasters.part17")}</p>}
          </PetitCarreColore>
        </NaturalDisaster>
        <Divider />
        <Baggage id="baggage">
          <ImageAsLandscape>
            <PrepareJapanImages image="baggage" />
          </ImageAsLandscape>
          <p className="tc">{t("baggage.part1")}</p>
          <p className="flex items-center ">
            <FaTshirt />
            &nbsp;{t("baggage.clothing.title")}
          </p>
          <ul>
            <li>{t("baggage.clothing.part1")}</li>
            <li>{t("baggage.clothing.part2")}</li>
            <li>{t("baggage.clothing.part3")}</li>
            <li>{t("baggage.clothing.part4")}</li>
            <li>{t("baggage.clothing.part5")}</li>
            <li>{t("baggage.clothing.part6")}</li>
          </ul>
          <PetitCarreColore>
            <p>{t("baggage.clothing.part7")}</p>
          </PetitCarreColore>
          <p className="flex items-center ">
            <FaBriefcaseMedical />
            &nbsp;{t("baggage.medical-kit.title")}
          </p>
          <ul>
            <li>{t("baggage.medical-kit.part1")}</li>
            <li>{t("baggage.medical-kit.part2")}</li>
            <li>{t("baggage.medical-kit.part3")}</li>
            <li>{t("baggage.medical-kit.part4")}</li>
            <li>{t("baggage.medical-kit.part5")}</li>
          </ul>
          <PetitCarreColore>
            <p>{t("baggage.medical-kit.part6")}</p>
          </PetitCarreColore>
          <p className="flex items-center ">
            <FaLaptop />
            &nbsp;{t("baggage.devices.title")}
          </p>
          <ul>
            <li>{t("baggage.devices.part1")}</li>
            <li>{t("baggage.devices.part2")}</li>
            <li>{t("baggage.devices.part3")}</li>
          </ul>
          <p className="flex items-center ">
            <FaShoppingBag />
            &nbsp;{t("baggage.other.title")}
          </p>
          <ul>
            <li>{t("baggage.other.part1")}</li>
            <li>{t("baggage.other.part2")}</li>
            <li>{t("baggage.other.part3")}</li>
            <li>{t("baggage.other.part4")}</li>
            <li>{t("baggage.other.part5")}</li>
          </ul>
          {devicesPublished ? <p>{t("baggage.other.part6")}</p> : null}
        </Baggage>
        <Divider />
        <Opinion title={t("opinion.title")} id="opinion">
          <p className="list-item ml3">{t("opinion.part1.title")}</p>
          <p>
            ➵ <span className="underline">{t("opinion.part1.part1.title")}</span>
          </p>
          <p>{t("opinion.part1.part1.part1")}</p>
          <ImageAsPortrait>
            <PrepareJapanImages image="opinion" />
          </ImageAsPortrait>
          <p>
            ➵ <span className="underline">{t("opinion.part1.part2.title")}</span>
          </p>
          <p>{t("opinion.part1.part2.part1")}</p>
          <p>{t("opinion.part1.part2.part2")}</p>
          <p>
            ➵ <span className="underline">{t("opinion.part1.part3.title")}</span>
          </p>
          <p>{t("opinion.part1.part3.part1")}</p>
          {foodLinkPublished && <p>{t("opinion.part1.part3.part2")}</p>}
          <p>
            ➵ <span className="underline">{t("opinion.part1.part4.title")}</span>
          </p>
          <p>{t("opinion.part1.part4.part1")}</p>
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/hitesh0141-2271740")}>
                hitesh0141
              </ExternalLinkNotUnderlined>
            }
          >
            <PrepareJapanImages image="opinion2" />
          </ImageAsLandscape>
          <p>{t("opinion.part1.part4.part2")}</p>
          <p className="list-item ml3">{t("opinion.part2.title")}</p>
          <p>
            ➵ <span className="underline">{t("opinion.part2.part1.title")}</span>
          </p>
          <p>{t("opinion.part2.part1.part1")}</p>
          <p>{t("opinion.part2.part1.part2")}</p>
          <p>
            ➵ <span className="underline">{t("opinion.part2.part2.title")}</span>
          </p>
          <p>{t("opinion.part2.part2.part1")}</p>
          <p>{t("opinion.part2.part2.part2")}</p>
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/evelyn_chai-8705727")}>
                Evelyn_Chai
              </ExternalLinkNotUnderlined>
            }
          >
            <PrepareJapanImages image="opinion3" />
          </ImageAsLandscape>
        </Opinion>
        <Divider />
        <LocalCurrency title={t("currency.title")} id="currency">
          <p>{t("currency.part1")}</p>
          <ul>
            <li>{t("currency.part2")}</li>
            <li>{t("currency.part3")}</li>
            <li>{t("currency.part4")}</li>
            <li>{t("currency.part5")}</li>
          </ul>
          <p>{t("currency.part6")}</p>
          <ImageAsPortrait>
            <PrepareJapanImages image="currency" />
          </ImageAsPortrait>
        </LocalCurrency>
        <Divider />
        <FewWords title={t("few-words.title")} id="few-words">
          <ul>
            <li>{t("few-words.part1")}</li>
            <li>{t("few-words.part2")}</li>
            <li>{t("few-words.part4")}</li>
            <li>{t("few-words.part5")}</li>
            <li>{t("few-words.part6")}</li>
            <li>{t("few-words.part7")}</li>
          </ul>
          <p
            className="tc"
            css={css`
              svg:not(:first-of-type) {
                margin-left: 0.5rem;
              }
            `}
          >
            <PinkKimono />
            <BlueKimono />
          </p>
        </FewWords>
        <Divider />
        <Conclusion>
          <p>{t("conclusion.part1")}</p>
          <p>{t("conclusion.part2")}</p>
        </Conclusion>
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}\n${t("facebook.part3")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <PrepareJapanImages image="cardFr1" key="cardFr1" />,
                    <PrepareJapanImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <PrepareJapanImages image="cardEn1" key="cardEn1" />,
                    <PrepareJapanImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

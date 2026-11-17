import React, { useContext } from "react"
import {
  HowLong,
  HowMuch,
  Introduction,
  How,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
  Baggage,
  Where,
  Bonus,
} from "../../../components/core/section"
import SEO from "../../../components/layout/seo"
import { Conclusion } from "../../../components/core/conclusion"
import { CambodiaBlogLayout, CambodiaHeadline, CambodiaTitle } from "../../../components/core/asia/cambodia/cambodia"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../locales/fr/asia/cambodia/discover-cambodia.json"
import translationEn from "../../../locales/en/asia/cambodia/discover-cambodia.json"
import { useCustomTranslation } from "../../../i18n-hook"
import {
  ImageAsLandscape,
  ImageAsPortrait,
  GroupOfImages,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  TwoImagesSameSizeOrToGroup,
} from "../../../components/images/layout"
import { SharedCardCambodiaImages } from "../../../components/images/asia/cambodia/shared-card-cambodia-images"
import { Quote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import { ArticleCardContainer, MapContainer } from "../../../components/layout/layout"
import { Comments } from "../../../components/core/comments"
import { DiscoverCambodiaImages } from "../../../components/images/asia/cambodia/discover-cambodia-images"
import { getLink } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import CambodiaItinerary from "../../../images/asia/cambodia/discover-cambodia/cambodia-itinerary.png"
import { AngkorWatCard, KampongPhlukCard, TuolSlengCard } from "../../../components/core/asia/cambodia/cambodia.cards"

const namespace = "asia/cambodia/discover-cambodia"
const id = "discover-cambodia"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.cambodia.card.${id}`)
  const prepareCambodiaPublished = development || getLink("prepare-cambodia").published
  return (
    <>
      <SEO
        title={title}
        fullTitle={t("full-title")}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        location={location}
      />
      <CambodiaBlogLayout page={id} location={location}>
        <CambodiaTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardCambodiaImages image="discoverCambodia" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <p>{t("how-much.part3")}</p>
          <p>{t("how-much.part4")}</p>
        </HowMuch>
        <How title={t("moving-around.title")}>
          <p>{t("moving-around.part1")}</p>
          <p>{t("moving-around.part2")}</p>
          <p>{t("moving-around.part3")}</p>
          <p>{t("moving-around.part4")}</p>
          <p>{t("moving-around.part5")}</p>
          <p>{t("moving-around.part6")}</p>
          <p>{t("moving-around.part7")}</p>
        </How>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
        </WhereToStay>
        <Baggage title={t("what-to-bring.title")}>
          <p>{t("what-to-bring.part1")}</p>
          <p>{t("what-to-bring.part2")}</p>
          <p>{t("what-to-bring.part3")}</p>
          <p>{t("what-to-bring.part4")}</p>
          <ul>
            <li>{t("what-to-bring.part5")}</li>
            <li>{t("what-to-bring.part6")}</li>
            <li>{t("what-to-bring.part7")}</li>
            <li>{t("what-to-bring.part8")}</li>
            <li>{t("what-to-bring.part9")}</li>
            <li>{t("what-to-bring.part10")}</li>
            <li>{t("what-to-bring.part11")}</li>
          </ul>
          <p>{t("what-to-bring.part12")}</p>
          {prepareCambodiaPublished && <p>{t("what-to-bring.part13")}</p>}
        </Baggage>
        <Divider />
        <Where title={t("itinerary.title")}>
          <p>{t("itinerary.part1")}</p>
          <ImageAsPortrait>
            <DiscoverCambodiaImages image="elephantStatue" />
          </ImageAsPortrait>
          <p>{t("itinerary.part2")}</p>
          <p>{t("itinerary.part3")}</p>
          <p>{t("itinerary.part4")}</p>
          <p>{t("itinerary.part5")}</p>
          <SectionContent>
            <MapContainer>
              <img src={CambodiaItinerary} alt="Discover Cambodia Map" />
            </MapContainer>
          </SectionContent>
        </Where>
        <Divider />
        <Visit>
          <CambodiaHeadline>{t("visit.title")}</CambodiaHeadline>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
            <ImageAsPortrait>
              <DiscoverCambodiaImages image="buddhaStatue" />
            </ImageAsPortrait>
            <p>{t("visit.part3")}</p>
          </SectionContent>
          <section>
            <SectionContent>
              <p>{t("visit1.title")}</p>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="pubStreet1" />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <DiscoverCambodiaImages image="pubStreet2" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <DiscoverCambodiaImages image="pubStreet3" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsPortrait>
                  <DiscoverCambodiaImages image="pubStreet4" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit1.part3")}</p>
              <TwoImagesSameSizeOrToGroup>
                <DiscoverCambodiaImages image="pubStreet5" />
                <DiscoverCambodiaImages image="pubStreet6" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <ImageAsPortrait>
                <DiscoverCambodiaImages image="redCurry" />
              </ImageAsPortrait>
              <p>{t("visit1.part6")}</p>
              <ImageAsPortrait>
                <DiscoverCambodiaImages image="lokLak" />
              </ImageAsPortrait>
              <p>{t("visit1.part7")}</p>
              <ImageAsPortrait>
                <DiscoverCambodiaImages image="amokTrei" />
              </ImageAsPortrait>
              <p>{t("visit1.part8")}</p>
              <ImageAsLandscape>
                <DiscoverCambodiaImages image="pubStreet7" />
              </ImageAsLandscape>
              <p>{t("visit1.part9")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <CambodiaHeadline>{t("visit2.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <p>{t("visit2.part6")}</p>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <ArticleCardContainer>
                <AngkorWatCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
              <Divider />
              <p>{t("visit2.part9")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <CambodiaHeadline>{t("visit3.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <p>{t("visit3.part8")}</p>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <DiscoverCambodiaImages image="kampongPhluk1" />
                  <DiscoverCambodiaImages image="kampongPhluk2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <DiscoverCambodiaImages image="kampongPhluk3" />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="kampongPhluk4" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="kampongPhluk5" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit3.part11")}</p>
              <ArticleCardContainer>
                <KampongPhlukCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
              <p>{t("visit3.part12")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <CambodiaHeadline>{t("visit4.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit5.title")}</p>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <p>{t("visit5.part4")}</p>
              <p>{t("visit5.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="royalPalace1" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <DiscoverCambodiaImages image="royalPalace2" />
                  <DiscoverCambodiaImages image="royalPalace3" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="royalPalace4" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <DiscoverCambodiaImages image="royalPalace5" />
                  <DiscoverCambodiaImages image="royalPalace6" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="royalPalace7" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <SectionContent>
              <p>{t("visit6.title")}</p>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
              <p>{t("visit6.part4")}</p>
              <p>{t("visit6.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <DiscoverCambodiaImages image="nationalMuseum1" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <DiscoverCambodiaImages image="nationalMuseum2" />
                  <DiscoverCambodiaImages image="nationalMuseum3" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <SectionContent>
              <p>{t("visit7.title")}</p>
              <p>{t("visit7.part1")}</p>
              <p>{t("visit7.part2")}</p>
              <p>{t("visit7.part3")}</p>
              <p>{t("visit7.part4")}</p>
              <p>{t("visit7.part5")}</p>
              <ArticleCardContainer>
                <TuolSlengCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
        </Visit>
        <Divider />
        <Bonus title={t("bonus.title")}>
          <p>{t("bonus.part1")}</p>
          <p>{t("bonus.part2")}</p>
          <p>{t("bonus.part3")}</p>
          <p>{t("bonus.part4")}</p>
          <ImageAsLandscape>
            <DiscoverCambodiaImages image="mondulkiri" />
          </ImageAsLandscape>
        </Bonus>
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
                    <DiscoverCambodiaImages image="cardFr1" key="cardFr1" />,
                    <DiscoverCambodiaImages image="cardFr2" key="cardFr2" />,
                  ]
                : [
                    <DiscoverCambodiaImages image="cardEn1" key="cardEn1" />,
                    <DiscoverCambodiaImages image="cardEn2" key="cardEn2" />,
                  ],
          }}
        />
      </CambodiaBlogLayout>
    </>
  )
}

export default IndexPage

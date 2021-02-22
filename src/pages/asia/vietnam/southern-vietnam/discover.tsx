import React from "react"
import SEO from "../../../../components/layout/seo"
import { VietnamBlogLayout, VietnamHeadline, VietnamLink } from "../../../../components/core/asia/vietnam/vietnam"
import {
  HighLight,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  Where,
} from "../../../../components/core/section"
import { SouthVietnamMap } from "../../../../components/core/asia/vietnam/south-vietnam-map"
import {
  CanThoCard,
  CuChiTunnelsCard,
  MyThoCard,
  WarMuseumCard,
} from "../../../../components/core/asia/vietnam/vietnam.cards"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  TwoImagesSameSize,
} from "../../../../components/images/layout"
import { Conclusion } from "../../../../components/core/conclusion"
import HomeImgUrl from "../../../../images/asia/vietnam/home-vietnam.jpg"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/discover.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/discover.json"
import { Comments } from "../../../../components/core/comments"
import { SouthernVietnam } from "../../../../components/images/asia/vietnam/southern-vietnam/southern-vietnam"
import { MapContainer } from "../../../../components/layout/layout"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { Divider } from "../../../../components/core/divider"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"

const namespace = "asia/vietnam/southern-vietnam/discover"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t("common:country.vietnam.card.discover-southern-vietnam")
  const description = t("quote")
  const googleDescription = t("introduction")

  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={description}
        image={HomeImgUrl}
        location={location}
        googleDescription={googleDescription}
      />
      <VietnamBlogLayout page="discover-southern-vietnam" location={location}>
        <Title title={title} linkId="discover-southern-vietnam" />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="discoverSouthernVietnam" />
        </ImageAsLandscape>
        <Quote>{description}</Quote>
        <Divider />
        <Introduction>{googleDescription}</Introduction>
        <WhatTimeOfYear>
          <p>
            {t("what-time-of-year.part1")} <HighLight>{t("what-time-of-year.part2")}</HighLight>
          </p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowLong>
          <p>
            <HighLight>{t("how-long.part1")}</HighLight> {t("how-long.part2")}
          </p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
          <ul>
            <li>{t("how-much.price1")}</li>
            <li>{t("how-much.price2")}</li>
            <li>{t("how-much.price3")}</li>
            <li>{t("how-much.price4")}</li>
          </ul>
          <p>{t("how-much.part2")}</p>
        </HowMuch>
        <Where>
          <p>{t("where.part1")}</p>
          <p>{t("where.part2")}</p>
        </Where>
        <MapContainer>
          <SouthVietnamMap />
        </MapContainer>
        <Visit>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
          </SectionContent>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit1.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <article>
                <WarMuseumCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </article>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <article>
                <CuChiTunnelsCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </article>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <SouthernVietnam image="fruits" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <SouthernVietnam image="scarecrow" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft>
                  <SouthernVietnam image="calao1" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <SouthernVietnam image="calao2" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit2.part5")}</p>
              <TwoImagesSameSize>
                <SouthernVietnam image="market1" />
                <SouthernVietnam image="market2" />
              </TwoImagesSameSize>
              <p>{t("visit2.part6")}</p>
              <ImageAsLandscape>
                <SouthernVietnam image="dragon" />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
            </SectionContent>
            <article>
              <MyThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </article>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
            </SectionContent>
            <article>
              <CanThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </article>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>
                {t("visit4.part1")} <VietnamLink to="northern-vietnam">{t("visit4.part2")}</VietnamLink>{" "}
                {t("visit4.part3")} <VietnamLink to="central-vietnam">{t("visit4.part4")}</VietnamLink>{" "}
                {t("visit4.part5")}
              </p>
              <p>{t("visit4.part6")}</p>
            </SectionContent>
          </section>
          <Divider />
          <Conclusion>
            <p>{t("conclusion")}</p>
            <ul>
              <li>{t("question1")}</li>
              <li>{t("question2")}</li>
            </ul>
          </Conclusion>
        </Visit>
        <Divider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [<SouthernVietnam image="cardFr1" key="cardFr1" />, <SouthernVietnam image="cardFr2" key="cardFr2" />]
                : [
                    <SouthernVietnam image="cardEn1" key="cardEn1" />,
                    <SouthernVietnam image="cardEn2" key="cardEn2" />,
                  ],
          }}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

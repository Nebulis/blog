import React from "react"
import SEO from "../../../../components/layout/seo"
import { VietnamBlogLayout, VietnamHeadline } from "../../../../components/core/asia/vietnam/vietnam"
import {
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  Where,
} from "../../../../components/core/section"
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
import SouthernVietnamMap from "../../../../images/asia/vietnam/southern-vietnam-map.png"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/discover.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/discover.json"
import { Comments } from "../../../../components/core/comments"
import { SouthernVietnam } from "../../../../components/images/asia/vietnam/southern-vietnam/southern-vietnam"
import { ArticleCardContainer, MapContainer } from "../../../../components/layout/layout"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { Divider } from "../../../../components/core/divider"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"
import { css } from "@emotion/react"

const namespace = "asia/vietnam/southern-vietnam/discover"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t("common:country.vietnam.card.discover-southern-vietnam")
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
      <VietnamBlogLayout page="discover-southern-vietnam" location={location}>
        <Title title={title} linkId="discover-southern-vietnam" />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="discoverSouthernVietnam" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
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
        <MapContainer
          css={css`
            img {
              max-height: 60vh;
            }
          `}
        >
          <img src={SouthernVietnamMap} alt="Southern Vietnam Map" />
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
              <ArticleCardContainer>
                <WarMuseumCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <ArticleCardContainer>
                <CuChiTunnelsCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
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
            <ArticleCardContainer>
              <MyThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </ArticleCardContainer>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
            </SectionContent>
            <ArticleCardContainer>
              <CanThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </ArticleCardContainer>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
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

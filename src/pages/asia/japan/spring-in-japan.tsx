import React, { useContext } from "react"
import { css } from "@emotion/react"
import {
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  Where,
} from "../../../components/core/section"
import SEO from "../../../components/layout/seo"
import { Conclusion } from "../../../components/core/conclusion"
import { JapanBlogLayout, JapanHeadline, JapanTitle } from "../../../components/core/japan/japan"
import {
  TwoDaysInTokyoCard,
  ArashiyamaCard,
  DaigojiCard,
  FushimiInariTaishaCard,
  HamarikyuGardenCard,
  HimejiCastleCard,
  KawaguchikoLakeCard,
  KinkakujiCard,
  NagoyaCastleCard,
  ToganjiCard,
} from "../../../components/core/japan/japan.cards"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../locales/fr/asia/japan/spring-in-japan.json"
import translationEn from "../../../locales/en/asia/japan/spring-in-japan.json"
import HomeImgUrl from "../../../images/asia/japan/spring-in-japan/spring-in-japan-main.jpg"
import { useCustomTranslation } from "../../../i18n-hook"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../components/images/layout"
import { SharedCardJapanImages } from "../../../components/images/asia/japan/shared-card-japan-images"
import { Quote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import { ArticleCardContainer, MapContainer } from "../../../components/layout/layout"
import SpringInJapanMap from "../../../images/asia/japan/spring-in-japan/spring-in-japan-map.png"
import { japanPrimaryColor } from "../../../components/core/japan/japan.variables"
import { Comments } from "../../../components/core/comments"
import { SpringInJapanImages } from "../../../components/images/asia/japan/spring-in-japan-images"
import { getLink } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"

const namespace = "asia/japan/spring-in-japan"
const id = "spring-in-japan"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  const transportLinkPublished = development || getLink("transports-in-japan").published
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
          <SharedCardJapanImages image="springInJapan" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
          <p>{t("how-long.part4")}</p>
        </HowLong>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <ul>
            <li>{t("how-much.part3")}</li>
            <li>{t("how-much.part4")}</li>
            <li>{t("how-much.part5")}</li>
            <li>{t("how-much.part6")}</li>
          </ul>
          <p>{t("how-much.part7")}</p>
        </HowMuch>
        <Where title={t("itinerary.title")}>
          <p>{t("itinerary.part1")}</p>
          <p>{t("itinerary.part2")}</p>
          <p>{t("itinerary.part3")}</p>
          <p>{t("itinerary.part4")}</p>
          <p>{t("itinerary.part5")}</p>
          {transportLinkPublished && <p>{t("itinerary.part6")}</p>}
        </Where>
        <Divider />
        <SectionContent>
          <MapContainer>
            <img src={SpringInJapanMap} alt="Spring In Japan Map" />
          </MapContainer>
        </SectionContent>
        <Visit title={t("visit.title")}>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
            <p>{t("visit.part3")}</p>
          </SectionContent>
          <Divider />
          <section>
            <JapanHeadline>{t("visit1.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <ArticleCardContainer>
                <HimejiCastleCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit2.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <ArticleCardContainer>
                <ArashiyamaCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p
                className="tc mb2"
                css={css`
                  color: ${japanPrimaryColor};
                `}
              >
                {t("visit2.part5")}
              </p>
              <ArticleCardContainer>
                <KinkakujiCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part6")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit3.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <ArticleCardContainer>
                <DaigojiCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
              <p
                className="tc mb2 i"
                css={css`
                  color: ${japanPrimaryColor};
                `}
              >
                {t("visit3.part2")}
              </p>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <ArticleCardContainer>
                <FushimiInariTaishaCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part6")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit4.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <ArticleCardContainer>
                <NagoyaCastleCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part2")}</p>
              <ArticleCardContainer>
                <ToganjiCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part3")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit5.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <ArticleCardContainer>
                <TwoDaysInTokyoCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit6.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <ArticleCardContainer>
                <KawaguchikoLakeCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <JapanHeadline>{t("visit7.title")}</JapanHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit7.part1")}</p>
              <p>{t("visit7.part2")}</p>
              <p>{t("visit7.part3")}</p>
              <ArticleCardContainer>
                <HamarikyuGardenCard card={{ showTags: false, showPublished: false, showMore: true }} />
              </ArticleCardContainer>
            </SectionContent>
            <Divider />
            <SectionContent>
              <p>{t("visit7.part4")}</p>
              <p>{t("visit7.part6")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <SpringInJapanImages image="springInJapan" />
                  <SpringInJapanImages image="springInJapan2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <SpringInJapanImages image="springInJapan3" />
                  <SpringInJapanImages image="springInJapan4" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <SpringInJapanImages image="springInJapan5" />
                </ImageAsPortrait>
              </GroupOfImages>
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
                ? [
                    <SpringInJapanImages image="cardFr1" key="cardFr1" />,
                    <SpringInJapanImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <SpringInJapanImages image="cardEn1" key="cardEn1" />,
                    <SpringInJapanImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

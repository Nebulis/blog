import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/my-tho.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/my-tho.json"
import {
  VietnamBlogLayout,
  VietnamExternalLink,
  VietnamHeadline,
  VietnamLink,
} from "../../../../components/core/asia/vietnam/vietnam"
import {
  How,
  HowLong,
  ImageDescription,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import HomeImgUrl from "../../../../images/asia/vietnam/southern-vietnam/my-tho/my-tho-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesRightBigger,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import {
  buildBaolauSearchUrl,
  buildBookingSearchUrl,
  buildBookingUrl,
  buildGetYourGuideLink,
  buildTripAdvisorLink,
} from "../../../../utils"
import { MyThoImages } from "../../../../components/images/asia/vietnam/southern-vietnam/my-tho"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { MekongRiverMap } from "../../../../components/core/asia/vietnam/mekong-river-map"
import { Divider } from "../../../../components/core/divider"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"

const namespace = "asia/vietnam/southern-vietnam/my-tho"
const id = "my-tho"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const { development } = useContext(ApplicationContext)
  const title = t(`common:country.vietnam.card.${id}`)
  const transportLinkPublished = development || getLink("transport-vietnam").published

  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <VietnamBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="myThoMain" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <How>
          <p>{t("how.part1")}</p>
          <p>
            {t("how.part2")}{" "}
            <VietnamExternalLink
              href={buildBaolauSearchUrl(i18n.languageCode)({ origin: "Ho Chi Minh", destination: "My Tho" })}
            >
              {t("how.part3")}
            </VietnamExternalLink>{" "}
            {t("how.part4")}
          </p>
          <p>
            {t("how.part5")}{" "}
            <VietnamExternalLink
              href={buildGetYourGuideLink(i18n.languageCode)(
                "activity/ho-chi-minh-city-l272/upper-mekong-river-full-day-tour-t69167"
              )}
            >
              {t("how.part6")}
            </VietnamExternalLink>{" "}
            {t("how.part7")}
          </p>
          <p>{t("how.part8")}</p>
          {transportLinkPublished && (
            <p>
              {t("how.part9")}{" "}
              <VietnamLink to="transport-vietnam">{t("common:country.vietnam.card.transport")}</VietnamLink>.
            </p>
          )}
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>
            {t("how-long.part3")}{" "}
            <VietnamExternalLink
              href={buildTripAdvisorLink(i18n.languageCode)(
                "Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html"
              )}
            >
              {t("how-long.part4")}
            </VietnamExternalLink>{" "}
            {t("how-long.part5")}{" "}
            <VietnamExternalLink
              href={buildGetYourGuideLink(i18n.languageCode)("discovery/s?q=Vietnam&searchSource=2")}
            >
              {t("how-long.part6")}
            </VietnamExternalLink>
            .
          </p>
          <p>
            {t("how-long.part7")} <VietnamLink to="can-tho">{t("how-long.part8")}</VietnamLink>.
          </p>
        </HowLong>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>
            {t("where-to-stay.part1")}{" "}
            <VietnamExternalLink href={buildBookingUrl(i18n.languageCode)("vn/the-island-logde")}>
              {t("where-to-stay.part2")}
            </VietnamExternalLink>{" "}
            {t("where-to-stay.part3")}
          </p>
          <p>{t("where-to-stay.part4")}</p>
          <p>
            {t("where-to-stay.part5")}{" "}
            <VietnamExternalLink href={buildBookingUrl(i18n.languageCode)("vn/khach-san-song-tien")}>
              {t("where-to-stay.part6")}
            </VietnamExternalLink>
            {t("where-to-stay.part7")}
          </p>
          <p>
            <VietnamExternalLink
              href={buildBookingSearchUrl(i18n.languageCode)("M%E1%BB%B9+Tho%2C+Tien+Giang%2C+Vietnam")}
            >
              {t("where-to-stay.part8")}
            </VietnamExternalLink>
          </p>
        </WhereToStay>
        <Visit title={t("common:section.visit")}>
          <SectionContent>
            <p>{t("visit.part1")}</p>
          </SectionContent>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit1.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <ImageAsLandscape>
                <MyThoImages image="vinhTrang1" />
              </ImageAsLandscape>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <TwoImagesSameSize>
                <MyThoImages image="vinhTrang2" />
                <MyThoImages image="vinhTrang3" />
              </TwoImagesSameSize>
              <p>{t("visit1.part6")}</p>
              <p>{t("visit1.part7")}</p>
              <p>{t("visit1.part8")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <MyThoImages image="vinhTrang4" />
                  <MyThoImages image="vinhTrang5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <MyThoImages image="vinhTrang6" />
                </ImageAsPortrait>
              </GroupOfImages>
              <ImageDescription>{t("visit1.part9")}</ImageDescription>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href="https://pixabay.com/fr/users/dezalb-1045091">
                    dezalb
                  </ExternalLinkNotUnderlined>
                }
              >
                <MyThoImages image="boat1" />
              </ImageAsLandscape>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <MyThoImages image="boat2" />
                  <MyThoImages image="boat3" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <MyThoImages image="boat4" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <MekongRiverMap />
              <ImageDescription>{t("visit3.part1")}</ImageDescription>
              <p>{t("visit3.part2")}</p>
              <p>
                {t("visit3.part3")}{" "}
                <VietnamLink to="kampong-phluk">{t("common:country.cambodia.card.kampong-phluk")}</VietnamLink>{" "}
                {t("visit3.part4")}
              </p>
              <p>
                {t("visit3.part5")} <VietnamLink to="china">{t("common:country.china.title")}</VietnamLink>{" "}
                {t("visit3.part6")} <VietnamLink to="myanmar">{t("common:country.myanmar.title")}</VietnamLink>
                {t("visit3.part7")} <VietnamLink to="thailand">{t("common:country.thailand.title")}</VietnamLink>{" "}
                {t("visit3.part8")} <VietnamLink to="laos">{t("common:country.laos.title")}</VietnamLink>
                {t("visit3.part9")} <VietnamLink to="cambodia">{t("common:country.cambodia.title")}</VietnamLink>{" "}
                {t("visit3.part10")}
              </p>
              <p>{t("visit3.part11")}</p>
              <ImageAsLandscape>
                <MyThoImages image="mekong1" />
              </ImageAsLandscape>
              <p>{t("visit3.part12")}</p>
              <p>{t("visit3.part13")}</p>
              <p>{t("visit3.part14")}</p>
              <TwoImagesSameSizeOrToGroup>
                <MyThoImages image="mekong2" />
                <MyThoImages image="mekong3" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit3.part15")}</p>
              <TwoImagesSameSizeOrToGroup>
                <MyThoImages image="mekong4" />
                <MyThoImages image="mekong5" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit3.part16")}</p>
              <p>{t("visit3.part17")}</p>
              <p>{t("visit3.part18")}</p>
              <p>{t("visit3.part19")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MyThoImages image="fruit1" />
                </ImageAsLandscape>
                <TwoImagesRightBigger>
                  <MyThoImages image="fruit2" />
                  <MyThoImages image="fruit3" />
                </TwoImagesRightBigger>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <p>{t("visit4.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <MyThoImages image="coconut1" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <MyThoImages image="coconut2" />
                </ImageAsPortrait>
                <TwoImagesSameSize>
                  <MyThoImages image="coconut4" />
                  <MyThoImages image="coconut5" />
                </TwoImagesSameSize>
                <ImageAsPortrait>
                  <MyThoImages image="coconut6" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit4.part4")}</p>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <MyThoImages image="coconut7" />
                  <MyThoImages image="coconut8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <MyThoImages image="coconut3" />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit5.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <p>{t("visit5.part4")}</p>
              <p>{t("visit5.part5")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <MyThoImages image="sweets1" />
                  <MyThoImages image="sweets2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <MyThoImages image="sweets3" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit5.part6")}</p>
              <p>{t("visit5.part7")}</p>
              <p>{t("visit5.part8")}</p>
              <TwoImagesSameSizeOrToGroup>
                <MyThoImages image="sculpture1" />
                <MyThoImages image="sculpture2" />
              </TwoImagesSameSizeOrToGroup>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit6.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <ImageAsPortrait>
                <MyThoImages image="bees" />
              </ImageAsPortrait>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
              <ImageAsPortrait>
                <MyThoImages image="sugarcane" />
              </ImageAsPortrait>
              <p>
                {t("visit6.part4")} <VietnamLink to="green-pomelo">{t("visit6.part5")}</VietnamLink>
                {t("visit6.part6")}
              </p>
              <p>{t("visit6.part7")}</p>
              <TwoImagesSameSize>
                <MyThoImages image="fruit4" />
                <MyThoImages image="fruit5" />
              </TwoImagesSameSize>
            </SectionContent>
          </section>
        </Visit>
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

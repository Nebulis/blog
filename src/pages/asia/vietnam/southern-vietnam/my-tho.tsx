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
  VietnamDivider,
  VietnamExternalLink,
  VietnamHeadline,
  VietnamLink,
  VietnamQuote,
  VietnamTitle,
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
  MainImageAsLandscape,
  TwoImagesRightBigger,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import {
  buildBaolauLink,
  buildBookingSearchUrl,
  buildBookingUrl,
  buildGetYourGuideLink,
  buildTripAdvisorLink,
} from "../../../../utils"
import { MyThoImages } from "../../../../components/images/asia/vietnam/southern-vietnam/my-tho"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { MekongRiverMap } from "../../../../components/core/asia/vietnam/mekong-river-map"

const namespace = "asia/vietnam/southern-vietnam/my-tho"
const id = "my-tho"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const { development } = useContext(ApplicationContext)
  const title = t(`common:country.vietnam.card.${id}`)
  const description = t("quote")
  const googleDescription = t("introduction")
  const transportLinkPublished = development || getLink("transports-in-vietnam").published

  return (
    <>
      <SEO
        title={title}
        description={description}
        googleDescription={googleDescription}
        image={HomeImgUrl}
        location={location}
      />
      <VietnamBlogLayout page={id} location={location}>
        <VietnamTitle title={title} linkId={id} />
        <MainImageAsLandscape>
          <SharedCardVietnamImages image="myThoMain" />
        </MainImageAsLandscape>
        <VietnamQuote>{description}</VietnamQuote>
        <VietnamDivider />
        <Introduction>{googleDescription}</Introduction>
        <VietnamDivider />
        <How>
          <p>{t("how.part1")}</p>
          <p>
            {t("how.part2")}{" "}
            <VietnamExternalLink href={buildBaolauLink(i18n.languageCode)}>{t("how.part3")}</VietnamExternalLink>{" "}
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
              <VietnamLink to="transports-in-vietnam">{t("common:country.vietnam.card.transports")}</VietnamLink>.
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
          <p>
            {t("what-time-of-year.part3")} <span className="b">{t("what-time-of-year.part4")}</span>
          </p>
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
          <p>{t("visit.part1")}</p>
        </Visit>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit1.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <MyThoImages image="vinhTrang1" />
          </SectionContent>
          <SectionContent>
            <p>{t("visit1.part1")}</p>
            <p>{t("visit1.part2")}</p>
            <p>{t("visit1.part3")}</p>
            <p>{t("visit1.part4")}</p>
            <p>{t("visit1.part5")}</p>
            <TwoImagesSameSize>
              <MyThoImages image="vinhTrang2" />
              <MyThoImages image="vinhTrang3" />
            </TwoImagesSameSize>
          </SectionContent>
          <SectionContent>
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
          </SectionContent>
          <SectionContent>
            <ImageDescription>{t("visit1.part9")}</ImageDescription>
          </SectionContent>
        </section>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit2.part1")}</p>
            <ImageAsLandscape
              credit={
                <ExternalLinkNotUnderlined href="https://pixabay.com/fr/users/dezalb-1045091">
                  dezalb
                </ExternalLinkNotUnderlined>
              }
            >
              <MyThoImages image="boat1" />
            </ImageAsLandscape>
          </SectionContent>
          <SectionContent>
            <p>{t("visit2.part2")}</p>
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
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <MekongRiverMap />
            <ImageDescription>{t("visit3.part1")}</ImageDescription>
            <p>{t("visit3.part2")}</p>
            <p>
              {t("visit3.part3")}{" "}
              <VietnamLink to="kampong-phluk">{t("common:country.cambodia.card.kampong-phluk")}</VietnamLink>{" "}
              {t("visit3.part4")}
            </p>
            <p>{t("visit3.part5")}</p>
            <p>{t("visit3.part6")}</p>
            <ImageAsLandscape>
              <MyThoImages image="mekong1" />
            </ImageAsLandscape>
          </SectionContent>
          <SectionContent>
            <p>{t("visit3.part7")}</p>
            <p>{t("visit3.part8")}</p>
            <p>{t("visit3.part9")}</p>
            <TwoImagesSameSizeOrToGroup>
              <MyThoImages image="mekong2" />
              <MyThoImages image="mekong3" />
            </TwoImagesSameSizeOrToGroup>
          </SectionContent>
          <SectionContent>
            <p>{t("visit3.part10")}</p>
            <TwoImagesSameSizeOrToGroup>
              <MyThoImages image="mekong4" />
              <MyThoImages image="mekong5" />
            </TwoImagesSameSizeOrToGroup>
          </SectionContent>
          <SectionContent>
            <p>{t("visit3.part11")}</p>
            <p>{t("visit3.part12")}</p>
            <p>{t("visit3.part13")}</p>
            <p>{t("visit3.part14")}</p>
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
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
          <VietnamDivider />
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
          </SectionContent>
          <SectionContent>
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
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit5.title")}</VietnamHeadline>
          <VietnamDivider />
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
          </SectionContent>
          <SectionContent>
            <p>{t("visit5.part6")}</p>
            <p>{t("visit5.part7")}</p>
            <p>{t("visit5.part8")}</p>
            <TwoImagesSameSizeOrToGroup>
              <MyThoImages image="sculpture1" />
              <MyThoImages image="sculpture2" />
            </TwoImagesSameSizeOrToGroup>
          </SectionContent>
        </section>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit6.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit6.part1")}</p>
            <p>{t("visit6.part2")}</p>
            <p>{t("visit6.part3")}</p>
            <ImageAsPortrait>
              <MyThoImages image="sugarcane" />
            </ImageAsPortrait>
          </SectionContent>
          <SectionContent>
            <p>{t("visit6.part4")}</p>
            <p>{t("visit6.part5")}</p>
            <TwoImagesSameSize>
              <MyThoImages image="fruit4" />
              <MyThoImages image="fruit5" />
            </TwoImagesSameSize>
          </SectionContent>
        </section>
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <VietnamDivider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

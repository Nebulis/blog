import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import { VietnamBlogLayout, VietnamHeadline } from "../../../../components/core/asia/vietnam/vietnam"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesRightBigger,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import {
  Covid,
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n-hook"
import HomeImgUrl from "../../../../images/asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-main.jpg"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/cu-chi-tunnels.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/cu-chi-tunnels.json"
import i18n from "i18next"
import { CuChiTunnelsImages } from "../../../../components/images/asia/vietnam/southern-vietnam/cu-chi-tunnels"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { Divider } from "../../../../components/core/divider"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"
import { BookingGygCardContainer } from "../../../../components/layout/layout"
import { GetYourGuideCard, TripadvisorCard } from "../../../../components/core/get-your-guide"
import { BookingCard, BookingWarning } from "../../../../components/core/booking"
import pragueHotel from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/prague-hotel.jpg"
import naNueHotel from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/na-nue-hotel.jpg"
import yenTrangHotel from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/yen-trang-hotel.jpg"
import { ApplicationContext } from "../../../../components/application"
import { css } from "@emotion/react"

const namespace = "asia/vietnam/southern-vietnam/cu-chi-tunnels"
const id = "cu-chi-tunnels"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
/*
the image at the end have sizing problem which look caused by the size of the original image and gatsby not handling properly. Some resources:
- https://github.com/gatsbyjs/gatsby/issues/15669
- https://github.com/gatsbyjs/gatsby/issues/10029
- https://github.com/gatsbyjs/gatsby/issues/11851
TLDR the problem is caused by having the 4032w original image size in the src set
Manually setting the srcset dont get rid of the original img size (maybe in the future ??)
the fastest way to fix it is to resize a bit the images to
 */

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { covid } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.vietnam.card.${id}`)

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
      <VietnamBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="cuChiTunnelsMain" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <When>
          <p>{t("when.part1")}</p>
        </When>
        <How>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
          <ul>
            <li>{t("how.part4")}</li>
            <li>{t("how.part5")}</li>
          </ul>
          <p>{t("how.part6")}</p>
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
        </HowLong>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <p>{t("how-much.part3")}</p>
          <BookingGygCardContainer>
            <TripadvisorCard
              to="AttractionProductReview-g293925-d11455504-Morning_Cu_Chi_Tunnels_Tour_from_Ho_Chi_Minh_City-Ho_Chi_Minh_City.html"
              title={
                i18n.languageCode === "fr"
                  ? "Visite des tunnels de Cu Chi, au départ de Ho-Chi-Minh-Ville"
                  : "Morning Cu Chi Tunnels Tour from Ho Chi Minh City"
              }
              rating={4.5}
              image="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/74/2f/c5.jpg"
              price={30}
              duration={{ value: 6, unit: "hour" }}
              groupSize={"small"}
            />
            <GetYourGuideCard
              to="h-chi-minh-ville-l272/tunnels-de-cu-chi-visite-vip-en-hors-bord-t26653"
              title={
                i18n.languageCode === "fr"
                  ? "Tunnels de Cu Chi et visite en hors-bord VIP"
                  : "Cu Chi Tunnels & VIP Speedboat Tour"
              }
              rating={4.8}
              image="https://cdn.getyourguide.com/img/tour/5aef87214d356.jpeg/38"
              certified
              price={68}
              duration={{ value: 5, unit: "hour" }}
            />
            <GetYourGuideCard
              to="h-chi-minh-ville-l272/excursion-au-temple-de-cao-i-et-dans-les-tunnels-de-c-chi-t69151"
              title={
                i18n.languageCode === "fr"
                  ? "Temples de Củ Chi et Cao Đài : visite d’une journée"
                  : "Cao Đài Temple and Củ Chi Tunnels Full-Day Tour"
              }
              rating={4.4}
              image="https://cdn.getyourguide.com/img/tour/577b5bf87b8e7.jpeg/38"
              certified
              price={29}
              duration={{ value: 1, unit: "day" }}
            />
          </BookingGygCardContainer>
          <p
            css={css`
              margin-bottom: 1.45rem;
            `}
          >
            {t("how-much.part4")}
          </p>
          {covid && <Covid>{t("how-much.part5")}</Covid>}
        </HowMuch>
        <WhereToStay>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="vn/prague"
              title="Prague Hotel"
              image={pragueHotel}
              note="8,4"
              price={15}
              people={2}
              kind="standard"
            />
            <BookingCard
              hotel="vn/na-nue"
              title="Na Nue Hotel"
              image={naNueHotel}
              note="8,4"
              price={12}
              people={2}
              kind="standard"
            />
            <BookingCard
              hotel="vn/yen-trang-2"
              title="Yen Trang 2 Hotel"
              image={yenTrangHotel}
              note="8,0"
              price={17}
              people={2}
              kind="standard"
            />
          </BookingGygCardContainer>
          <BookingWarning />
          <p>{t("where-to-stay.part3")}</p>
        </WhereToStay>
        <Visit title={t("common:section.visit")}>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
            <p>{t("visit.part3")}</p>
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
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <TwoImagesSameSizeOrToGroup>
                <CuChiTunnelsImages image="entrance1" />
                <CuChiTunnelsImages image="entrance2" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <GroupOfImages>
                <TwoImagesRightBigger>
                  <CuChiTunnelsImages image="expo1" />
                  <CuChiTunnelsImages image="expo2" />
                </TwoImagesRightBigger>
                <ImageAsLandscape>
                  <CuChiTunnelsImages image="expo3" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <CuChiTunnelsImages image="expo4" />
                  <CuChiTunnelsImages image="expo5" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <CuChiTunnelsImages image="expo6" />
                </ImageAsPortrait>
              </GroupOfImages>
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
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <SharedCardVietnamImages image="cuChiTunnelsMain" />
                  <CuChiTunnelsImages image="tunnels1" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <CuChiTunnelsImages image="tunnels2" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <CuChiTunnelsImages image="tunnels4" />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <CuChiTunnelsImages image="tunnels3" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <TwoImagesSameSizeOrToGroup>
                <CuChiTunnelsImages image="inside1" />
                <CuChiTunnelsImages image="inside2" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
              <p>{t("visit3.part8")}</p>
              <p>{t("visit3.part9")}</p>
              <p>{t("visit3.part10")}</p>
              <p>{t("visit3.part11")}</p>
              <TwoImagesSameSizeOrToGroup>
                <CuChiTunnelsImages image="inside3" />
                <CuChiTunnelsImages image="inside4" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit3.part12")}</p>
              <p>{t("visit3.part13")}</p>
              <p>{t("visit3.part14")}</p>
              <p>{t("visit3.part15")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <ul>
                <li>{t("visit4.part3")}</li>
                <li>{t("visit4.part4")}</li>
                <li>{t("visit4.part5")}</li>
              </ul>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <CuChiTunnelsImages image="trap1" />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <CuChiTunnelsImages image="trap2" />
                  <CuChiTunnelsImages image="trap3" />
                </TwoImagesSameSizeOrToGroup>
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
              <TwoImagesSameSizeOrToGroup>
                <CuChiTunnelsImages image="rest1" />
                <CuChiTunnelsImages image="rest2" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit5.part5")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <VietnamHeadline>{t("visit6.title")}</VietnamHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <CuChiTunnelsImages image="trap4" />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <CuChiTunnelsImages image="bonus1" />
                  <CuChiTunnelsImages image="bonus2" />
                </TwoImagesSameSizeOrToGroup>
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
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <CuChiTunnelsImages image="cardFr1" key="cardFr1" />,
                    <CuChiTunnelsImages image="cardFr2" key="cardFr2" />,
                  ]
                : [
                    <CuChiTunnelsImages image="cardEn1" key="cardEn1" />,
                    <CuChiTunnelsImages image="cardEn2" key="cardEn2" />,
                  ],
          }}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

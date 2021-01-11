import React, { useContext } from "react"
import SEO from "../../../../components/layout/seo"
import {
  VietnamBlogLayout,
  VietnamExternalLink,
  VietnamHeadline,
  VietnamLink,
} from "../../../../components/core/asia/vietnam/vietnam"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  MainImageAsLandscape,
  TwoImagesRightBigger,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import {
  HighLight,
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
import { useCustomTranslation } from "../../../../i18n"
import HomeImgUrl from "../../../../images/asia/vietnam/southern-vietnam/cu-chi-tunnels/cu-chi-tunnels-main.jpg"
import { buildBookingSearchUrl, buildBookingUrl, buildTripAdvisorLink } from "../../../../utils"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/cu-chi-tunnels.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/cu-chi-tunnels.json"
import i18n from "i18next"
import { CuChiTunnelsImages } from "../../../../components/images/asia/vietnam/southern-vietnam/cu-chi-tunnels"
import { SharedCardVietnamImages } from "../../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { Divider } from "../../../../components/core/divider"
import { Title } from "../../../../components/core/title"
import { Quote } from "../../../../components/core/quote"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"

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
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const { development } = useContext(ApplicationContext)
  const title = t(`common:country.vietnam.card.${id}`)
  const description = t("quote")
  const googleDescription = t("introduction")
  const transportLinkPublished = development || getLink("transport-vietnam").published

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
        <Title title={title} linkId={id} />
        <MainImageAsLandscape>
          <SharedCardVietnamImages image="cuChiTunnelsMain" />
        </MainImageAsLandscape>
        <Quote>{description}</Quote>
        <Divider />
        <Introduction>{googleDescription}</Introduction>
        <Divider />
        <When>
          <p>{t("when.part1")}</p>
        </When>
        <How>
          <p>{t("how.part1")}</p>
          <p>
            {t("how.part2")} <span className="b">{t("how.part3")}</span>
            {t("how.part4")}
          </p>
          <p>{t("how.part5")}</p>
          <ul>
            <li>
              <span className="b">{t("how.part6")}</span>{" "}
              <VietnamExternalLink href="https://www.google.com/maps/dir/?api=1&origin=Bến+Xe+Buýt+Sài+Gòn+Lê+Lai,+Phạm+Ngũ+Lão,+Quận+1,+Thành+phố+Hồ+Chí+Minh,+Vietnam&destination=Ben+Dinh+Tunnel,+Đường+Tỉnh+Lộ+15,+Nhuận+Đức,+Củ+Chi,+Ho+Chi+Minh+City,+Vietnam&travelmode=transit">
                {t("how.part7")}
              </VietnamExternalLink>
            </li>
            <li>
              <span className="b">{t("how.part8")}</span>{" "}
              <VietnamExternalLink href="https://www.google.com/maps/dir/?api=1&origin=Bến+Xe+Buýt+Sài+Gòn+Lê+Lai,+Phạm+Ngũ+Lão,+Quận+1,+Thành+phố+Hồ+Chí+Minh,+Vietnam&destination=Cu+Chi+Tunnel,+Đ.+Tỉnh+Lộ+15,+Phú+Hiệp,+Củ+Chi,+Thành+phố+Hồ+Chí+Minh+733814,+Vietnam&travelmode=transit">
                {t("how.part9")}
              </VietnamExternalLink>
            </li>
          </ul>
          {transportLinkPublished && (
            <p>
              {t("how.part10")}{" "}
              <VietnamLink to="transport-vietnam">{t("common:country.vietnam.card.transport")}</VietnamLink>.
            </p>
          )}
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>
            {t("how-long.part3")}{" "}
            <VietnamExternalLink href="https://www.google.com/maps/place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh">
              {t("how-long.part4")}
            </VietnamExternalLink>{" "}
            {t("how-long.part5")}
          </p>
        </HowLong>
        <WhatTimeOfYear>
          <p>
            {t("what-time-of-year.part1")} <span className="b">{t("what-time-of-year.part2")}</span>
          </p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
          <p>
            {t("how-much.part2")}{" "}
            <VietnamExternalLink
              href={buildTripAdvisorLink(i18n.languageCode)(
                "AttractionProductReview-g293925-d11455504-Morning_Cu_Chi_Tunnels_Tour_from_Ho_Chi_Minh_City-Ho_Chi_Minh_City.html"
              )}
            >
              {t("how-much.part3")}
            </VietnamExternalLink>{" "}
            {t("how-much.part4")}
          </p>
          <p>
            {t("how-much.part5")} <HighLight>{t("how-much.part6")}</HighLight>
            {t("how-much.part7")}
          </p>
        </HowMuch>
        <WhereToStay>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>
            {t("where-to-stay.part3")}{" "}
            <VietnamExternalLink href={buildBookingUrl(i18n.languageCode)("vn/prague")}>
              {t("where-to-stay.part4")}
            </VietnamExternalLink>{" "}
            {t("where-to-stay.part5")}
          </p>
          <p>
            <VietnamExternalLink
              href={buildBookingSearchUrl(i18n.languageCode)(
                "H%C3%B4-Chi-Minh-Ville%2C+H%C3%B4-Chi-Minh-Ville%2C+Vietnam"
              )}
            >
              {t("where-to-stay.part6")}
            </VietnamExternalLink>
          </p>
        </WhereToStay>
        <Visit title={t("common:section.visit")}>
          <SectionContent>
            <p>
              {t("visit.part1")} <span className="b">{t("visit.part2")}</span> {t("visit.part3")}
            </p>
            <p>{t("visit.part4")}</p>
            <p>{t("visit.part5")}</p>
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
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://pixabay.com/fr/users/fun_lucky-2181935">
                    Fun_Lucky
                  </ExternalLinkNotUnderlined>
                }
              >
                <CuChiTunnelsImages image="weapon" />
              </ImageAsPortrait>
              <p>{t("visit5.part4")}</p>
              <TwoImagesSameSizeOrToGroup>
                <CuChiTunnelsImages image="rest1" />
                <CuChiTunnelsImages image="rest2" />
              </TwoImagesSameSizeOrToGroup>
              <p>
                {t("visit5.part5")}{" "}
                <VietnamLink to="ho-chi-minh-war-museum">
                  {t("common:country.vietnam.card.ho-chi-minh-war-museum")}
                </VietnamLink>
                {t("visit5.part6")}
              </p>
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
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
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

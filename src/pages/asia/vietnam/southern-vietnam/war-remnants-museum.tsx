import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/war-remnants-museum.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/war-remnants-museum.json"
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
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import HomeImgUrl from "../../../../images/asia/vietnam/southern-vietnam/war-remnants-museum/war-museum-main.jpg"
import { MainWarMuseumImage } from "../../../../components/images/asia/vietnam/southern-vietnam/war-museum/war-museum-main"
import {
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  Where,
  WhereToStay,
} from "../../../../components/core/section"
import { buildBookingSearchUrl, buildBookingUrl } from "../../../../utils"
import { Conclusion } from "../../../../components/core/conclusion"
import { HoChiMinWarMuseum } from "../../../../components/images/asia/vietnam/southern-vietnam/ho-chi-min-war-museum"
import { css } from "@emotion/core"

const namespace = "asia/vietnam/southern-vietnam/ho-chi-minh-war-museum"
const id = "ho-chi-minh-war-museum"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.vietnam.card.${id}`)
  const description = t("quote")
  const googleDescription = t("introduction")

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
        <ImageAsLandscape>
          <MainWarMuseumImage />
        </ImageAsLandscape>
        <VietnamQuote>{description}</VietnamQuote>
        <VietnamDivider />
        <Introduction>{googleDescription}</Introduction>
        <VietnamDivider />
        <Where title={t("where.title")}>
          <p>{t("where.part1")}</p>
        </Where>
        <When>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
        </When>
        <How>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>
            <VietnamLink action="hide" to="transports-in-vietnam">
              {t("how.part3")}
            </VietnamLink>
          </p>
        </How>
        <HowLong>
          <p>{t("how-long.part1")}</p>
        </HowLong>
        <WhatTimeOfYear>
          <p>
            {t("what-time-of-year.part1")} <span className="b">{t("what-time-of-year.part2")}</span>
          </p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
          <p>{t("what-time-of-year.part5")}</p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>{t("how-much.part1")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>
            {t("where-to-stay.part1")}{" "}
            <VietnamExternalLink href={buildBookingUrl(i18n.languageCode)("vn/prague")}>
              {t("where-to-stay.part2")}
            </VietnamExternalLink>
            {t("where-to-stay.part3")}{" "}
            <VietnamExternalLink href="https://www.google.com/maps/place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh">
              {t("where-to-stay.part4")}
            </VietnamExternalLink>
          </p>
          <p>{t("where-to-stay.part5")}</p>
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
          <p>{t("visit.part1")}</p>
        </Visit>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit1.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit1.part1")}</p>
            <p>{t("visit1.part2")}</p>
            <p>{t("visit1.part3")}</p>
            <p>{t("visit1.part4")}</p>
            <p>{t("visit1.part5")}</p>
            <ImageAsPortrait>
              <HoChiMinWarMuseum image="memorial" />
            </ImageAsPortrait>
          </SectionContent>
        </section>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit2.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit2.part1")}</p>
            <p>{t("visit2.part2")}</p>
            <p>{t("visit2.part3")}</p>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft title="U-17 Plane">
                <HoChiMinWarMuseum image="u17" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight title="A-1 Skyraider">
                <HoChiMinWarMuseum image="a1" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft title="F-5A Jet Fighter">
                <HoChiMinWarMuseum image="f5a" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight title="M48 Tank">
                <HoChiMinWarMuseum image="m48" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft title="CH-47 Chinook">
                <HoChiMinWarMuseum image="ch47" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight title="M107 Gun">
                <MainWarMuseumImage />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft>
                <HoChiMinWarMuseum image="helicopter" />
              </ImageAsLandscapeOnTheLeft>
            </GroupOfImages>
          </SectionContent>
          <SectionContent>
            <p>{t("visit2.part4")}</p>
            <p>{t("visit2.part5")}</p>
            <GroupOfImages>
              <TwoImagesSameSizeOrToGroup>
                <HoChiMinWarMuseum image="guillotine" />
                <HoChiMinWarMuseum image="jail" />
              </TwoImagesSameSizeOrToGroup>
            </GroupOfImages>
          </SectionContent>
          <SectionContent>
            <p>
              {t("visit2.part6")} <span className="b">{t("visit2.part7")}</span> {t("visit2.part8")}
            </p>
            <p>{t("visit2.part9")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <HoChiMinWarMuseum image="tigerCage" />
              </ImageAsLandscape>
              <ImageAsPortrait>
                <HoChiMinWarMuseum image="panelTigerCage" />
              </ImageAsPortrait>
            </GroupOfImages>
            {t("visit2.part10") && <VietnamQuote className="b">{t("visit2.part10")}</VietnamQuote>}
          </SectionContent>
          <SectionContent>
            <p>{t("visit2.part11")}</p>
            <p>{t("visit2.part12")}</p>
            <p>{t("visit2.part13")}</p>
          </SectionContent>
        </section>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit3.part1")}</p>
            <p>{t("visit3.part2")}</p>
            <GroupOfImages>
              <TwoImagesSameSizeOrToGroup>
                <HoChiMinWarMuseum image="museum1" />
                <HoChiMinWarMuseum image="museum2" imgStyle={{ objectFit: "contain" }} />
              </TwoImagesSameSizeOrToGroup>
              <ImageAsLandscape>
                <HoChiMinWarMuseum image="museum3" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
          <SectionContent>
            <p>{t("visit3.part3")}</p>
            <p>{t("visit3.part4")}</p>
            <p>
              <span className="b">{t("visit3.part5")}</span> {t("visit3.part6")}
            </p>
            <p>{t("visit3.part7")}</p>
            <p>{t("visit3.part8")}</p>
            <p>{t("visit3.part9")}</p>
            <p>{t("visit3.part10")}</p>
            <p>{t("visit3.part11")}</p>
            <p>{t("visit3.part12")}</p>
            <p>
              {t("visit3.part13")} <span className="i">{t("visit3.part14")}</span>
            </p>
            <ImageAsPortrait>
              <HoChiMinWarMuseum image="youngChild" />
            </ImageAsPortrait>
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
            <p>{t("visit4.part4")}</p>
            <p>
              {t("visit4.part5")}{" "}
              <VietnamLink to="s-21-prison">{t("common:country.cambodia.card.s-21-prison")}</VietnamLink>{" "}
              {t("visit4.part6")}
            </p>
            <p>{t("visit4.part7")}</p>
            {t("visit4.part8")}{" "}
            <VietnamLink to="discover-southern-vietnam">
              {t("common:country.vietnam.card.discover-southern-vietnam")}
            </VietnamLink>
            {t("visit4.part9")}
          </SectionContent>
          <ImageAsPortrait
            css={css`
              max-width: 200px;
            `}
          >
            <HoChiMinWarMuseum image="soldierHelmet" />
          </ImageAsPortrait>
        </section>
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <Comments collectionName={namespace} location={location} />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

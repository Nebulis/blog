import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  VietnamBlogLayout,
  VietnamDivider,
  VietnamHeadline,
  VietnamQuote,
  VietnamTitle,
} from "../../../../components/core/asia/vietnam/vietnam"
import { HowLong, HowMuch, SectionContent, Visit, WhatTimeOfYear, Where } from "../../../../components/core/section"
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
import { HomeVietnamImage } from "../../../../components/images/asia/vietnam/home-vietnam"
import HomeImgUrl from "../../../../images/asia/vietnam/home-vietnam.jpg"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/discover.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/discover.json"
import { Comments } from "../../../../components/core/comments"
import { SouthernVietnam } from "../../../../components/images/asia/vietnam/southern-vietnam/southern-vietnam"
import { MapContainer } from "../../../../components/layout/layout"

const namespace = "asia/vietnam/southern-vietnam/discover"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t } = useCustomTranslation([namespace, "common"])
  const title = t("common:card.vietnam.discover-southern-vietnam")
  const description = t("quote")

  return (
    <>
      <SEO title={title} description={description} image={HomeImgUrl} location={location} />
      <VietnamBlogLayout page="discover-southern-vietnam" location={location}>
        <VietnamTitle title={title} linkId="discover-southern-vietnam" />
        <ImageAsLandscape>
          <HomeVietnamImage />
        </ImageAsLandscape>
        <VietnamQuote>{t("quote")}</VietnamQuote>
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
        <MapContainer>
          <SouthVietnamMap />
        </MapContainer>
        <Visit>
          <p>{t("visit.part1")}</p>
          <p>{t("visit.part2")}</p>
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
            <article>
              <WarMuseumCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </article>
          </SectionContent>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit1.part5")}</p>
            <p>{t("visit1.part6")}</p>
            <article>
              <CuChiTunnelsCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </article>
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
            <p>{t("visit2.part4")}</p>
            <GroupOfImages>
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
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit3.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit3.part1")}</p>
            <p>{t("visit3.part2")}</p>
            <p>{t("visit3.part3")}</p>
          </SectionContent>
          <article>
            <MyThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
          </article>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit3.part4")}</p>
            <p>{t("visit3.part5")}</p>
          </SectionContent>
          <article>
            <CanThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
          </article>
        </section>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit4.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit4.part1")}</p>
            <p>{t("visit4.part2")}</p>
            <p>{t("visit4.part3")}</p>
          </SectionContent>
        </section>
        <VietnamDivider />
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <VietnamDivider />
        <Comments collectionName={namespace} location={location} />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  VietnamBlogLayout,
  VietnamDivider,
  VietnamHeadline,
  VietnamQuote,
  VietnamTitle,
} from "../../../../components/core/asia/vietnam/vietnam"
import {
  HowLong,
  HowMuch,
  SectionContent,
  SectionTitle,
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
import { HoChiMinhCalao1Image } from "../../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-calao1"
import { HoChiMinhCalao2Image } from "../../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-calao2"
import { HoChiMinhMarket1Image } from "../../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-market1"
import { HoChiMinhMarket2Image } from "../../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-market2"
import { HoChiMinhDragonImage } from "../../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-dragon"
import { Conclusion } from "../../../../components/core/conclusion"
import { HomeVietnamImage } from "../../../../components/images/asia/vietnam/home"
import HomeImgUrl from "../../../../images/asia/vietnam/home.jpg"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/vietnam/southern-vietnam/discover.json"
import translationEn from "../../../../locales/en/asia/vietnam/southern-vietnam/discover.json"
import { Comments } from "../../../../components/core/comments"
import { hostname } from "../../../../utils"

const namespace = "asia/vietnam/southern-vietnam/discover"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t } = useCustomTranslation([namespace, "common"])
  const title = t("common:card.vietnam.discover-southern-vietnam")
  const description = t("quote")

  return (
    <>
      <SEO
        title={title}
        description={description}
        meta={[
          { name: "twitter:image", content: `${hostname}${HomeImgUrl}` },
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:image", content: `${hostname}${HomeImgUrl}` },
          { property: "putain:de:merde", content: `${title}${description}` },
        ]}
      />
      <VietnamBlogLayout page="discover-southern-vietnam">
        <VietnamTitle
          title={t("common:card.vietnam.discover-southern-vietnam")}
          categories={["asia", "vietnam"]}
          linkId="discover-southern-vietnam"
        />
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
          {t("how-much.part1")}
          <ul>
            <li>{t("how-much.price1")}</li>
            <li>{t("how-much.price2")}</li>
            <li>{t("how-much.price3")}</li>
            <li>{t("how-much.price4")}</li>
          </ul>
          {t("how-much.part2")}
        </HowMuch>
        <Where>
          <p>{t("where.part1")}</p>
          <p>{t("where.part2")}</p>
        </Where>
        <div className="overflow-hidden tc">
          <SouthVietnamMap />
        </div>
        <SectionTitle>{t("common:section.visit")}</SectionTitle>
        <SectionContent>
          <p>{t("visit.part1")}</p>
          <p>{t("visit.part2")}</p>
        </SectionContent>
        <VietnamDivider />
        <section>
          <VietnamHeadline>{t("visit1.title")}</VietnamHeadline>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit1.part1")}</p>
            <p>{t("visit1.part2")}</p>
            <p>{t("visit1.part3")}</p>
          </SectionContent>
          <article>
            <WarMuseumCard card={{ showTags: false, showPublished: false, showMore: true }} />
          </article>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit1.part4")}</p>
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
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft>
                <HoChiMinhCalao1Image />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <HoChiMinhCalao2Image />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
            <p>{t("visit2.part4")}</p>
            <TwoImagesSameSize>
              <HoChiMinhMarket1Image />
              <HoChiMinhMarket2Image />
            </TwoImagesSameSize>
            <p>{t("visit2.part5")}</p>
            <ImageAsLandscape>
              <HoChiMinhDragonImage />
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
          </SectionContent>
          <article>
            <MyThoCard card={{ showTags: false, showPublished: false, showMore: true }} />
          </article>
          <VietnamDivider />
          <SectionContent>
            <p>{t("visit3.part3")}</p>
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
          </SectionContent>
        </section>
        <VietnamDivider />
        <Conclusion>{t("conclusion")}</Conclusion>
        <VietnamDivider />
        <Comments collectionName={namespace} location={location} />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

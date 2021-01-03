import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import HomeImgUrl from "../../../../images/asia/vietnam/home-vietnam.jpg"
import { PageProps } from "gatsby"
import { useCustomTranslation } from "../../../../i18n"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/philippines/el-nido/el-nido-paradise.json"
import translationEn from "../../../../locales/en/asia/philippines/el-nido/el-nido-paradise.json"
import {
  PhilippinesBlogLayout,
  PhilippinesDivider,
  PhilippinesHeadline,
  PhilippinesQuote,
  PhilippinesTitle,
} from "../../../../components/core/asia/philippines/philippines"
import { HomePhilippinesImage } from "../../../../components/images/asia/philippines/home-philippines"
import {
  How,
  HowLong,
  HowMuch,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Comments } from "../../../../components/core/comments"
import { ElNidoWhichTourCard } from "../../../../components/core/asia/philippines/philippines.card"
import { ElNidoParadise } from "../../../../components/images/asia/philippines/el-nido/el-nido-paradise"

const namespace = "asia/philippines/el-nido/el-nido-paradise"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t } = useCustomTranslation([namespace, "common"])
  const title = t("common:card.philippines.el-nido-paradise")
  const description = t("quote")

  return (
    <>
      <SEO title={title} description={description} image={HomeImgUrl} location={location} />
      <PhilippinesBlogLayout page="el-nido-paradise">
        <PhilippinesTitle title={title} linkId="el-nido-paradise" />
        <ImageAsLandscape>
          <HomePhilippinesImage />
        </ImageAsLandscape>
        <PhilippinesQuote>{t("quote")}</PhilippinesQuote>
        <WhatTimeOfYear>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <ImageAsPortrait>
            <ElNidoParadise image="jellyfish" />
          </ImageAsPortrait>
        </WhatTimeOfYear>
        <HowLong>
          <p>{t("how-long.part1")}</p>
          <ul>
            <li>{t("how-long.part2")}</li>
            <li>{t("how-long.part3")}</li>
            <li>{t("how-long.part4")}</li>
          </ul>
          <p>{t("how-long.part5")}</p>
          <p>{t("how-long.part6")}</p>
          <p>{t("how-long.part7")}</p>
          <p>{t("how-long.part8")}</p>
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
        <How>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
          <p>{t("how.part5")}</p>
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
          <p>{t("how.part8")}</p>
        </How>
        <WhereToStay>
          <p>{t("where-to-stay.part1")}</p>
        </WhereToStay>
        <Visit>
          <p>{t("visit.part1")}</p>
          <p>{t("visit.part2")}</p>
          <p>{t("visit.part3")}</p>
        </Visit>
        <PhilippinesDivider />
        <section>
          <PhilippinesHeadline>{t("visit1.title")}</PhilippinesHeadline>
          <PhilippinesDivider />
          <SectionContent>
            <p>{t("visit1.part1")}</p>
            <p>{t("visit1.part2")}</p>
            <p>{t("visit1.part3")}</p>
            <p>{t("visit1.part4")}</p>
            <ImageAsPortrait>
              <ElNidoParadise image="fruit" />
            </ImageAsPortrait>
          </SectionContent>
        </section>
        <PhilippinesDivider />
        <section>
          <PhilippinesHeadline>{t("visit2.title")}</PhilippinesHeadline>
          <PhilippinesDivider />
          <SectionContent>
            <p>{t("visit2.part1")}</p>
            <GroupOfImages>
              <ImageAsPortrait>
                <ElNidoParadise image="tuktuk" />
              </ImageAsPortrait>
              <TwoImagesSameSizeOrToGroup>
                <ElNidoParadise image="departure1" />
                <ElNidoParadise image="departure2" />
              </TwoImagesSameSizeOrToGroup>
            </GroupOfImages>
          </SectionContent>
          <PhilippinesDivider />
          <SectionContent>
            <p>{t("visit2.part2")}</p>
            <p>{t("visit2.part3")}</p>
            <p>{t("visit2.part4")}</p>
            <p>{t("visit2.part5")}</p>
            <p>{t("visit2.part6")}</p>
            <article>
              <ElNidoWhichTourCard card={{ showTags: false, showPublished: false, showMore: true }} />
            </article>
          </SectionContent>
        </section>
        <PhilippinesDivider />
        <section>
          <PhilippinesHeadline>{t("visit3.title")}</PhilippinesHeadline>
          <PhilippinesDivider />
          <SectionContent>
            <p>{t("visit3.part1")}</p>
            <p>{t("visit3.part2")}</p>
            <p>{t("visit3.part3")}</p>
            <p>{t("visit3.part4")}</p>
            <p>{t("visit3.part5")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <ElNidoParadise image="paradise1" />
              </ImageAsLandscape>
              <TwoImagesSameSizeOrToGroup>
                <ElNidoParadise image="paradise2" />
                <ElNidoParadise image="paradise3" />
              </TwoImagesSameSizeOrToGroup>
              <ImageAsLandscape>
                <ElNidoParadise image="paradise4" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
          <PhilippinesDivider />
          <SectionContent>
            <p>{t("visit3.part6")}</p>
            <GroupOfImages>
              <TwoImagesSameSizeOrToGroup>
                <ElNidoParadise image="snorkeling1" />
                <ElNidoParadise image="snorkeling2" />
              </TwoImagesSameSizeOrToGroup>
              <ImageAsLandscape>
                <ElNidoParadise image="snorkeling3" />
              </ImageAsLandscape>
            </GroupOfImages>
          </SectionContent>
        </section>
        <PhilippinesDivider />
        <section>
          <PhilippinesHeadline>{t("visit4.title")}</PhilippinesHeadline>
          <PhilippinesDivider />
          <SectionContent>
            <p>{t("visit4.part1")}</p>
            <p>{t("visit4.part2")}</p>
            <p>{t("visit4.part3")}</p>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft>
                <ElNidoParadise image="paradise5" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <ElNidoParadise image="paradise6" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscape>
                <ElNidoParadise image="paradise7" />
              </ImageAsLandscape>
              <TwoImagesSameSizeOrToGroup>
                <ElNidoParadise image="paradise8" />
                <ElNidoParadise image="paradise9" />
              </TwoImagesSameSizeOrToGroup>
            </GroupOfImages>
          </SectionContent>
        </section>
        <PhilippinesDivider />
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <Comments collectionName={namespace} location={location} />
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

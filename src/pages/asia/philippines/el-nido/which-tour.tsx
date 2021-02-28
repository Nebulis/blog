import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/philippines/el-nido/which-tour.json"
import translationEn from "../../../../locales/en/asia/philippines/el-nido/which-tour.json"
import {
  PhilippinesBlogLayout,
  PhilippinesExternalLink,
  PhilippinesHeadline,
  PhilippinesLink,
  PhilippinesQuote,
  PhilippinesTitle,
} from "../../../../components/core/asia/philippines/philippines"
import {
  Baggage,
  Boat,
  Booking,
  Choice,
  HighLight,
  HowMuch,
  Introduction,
  Opinion,
  SectionContent,
  SectionTitle,
  Visit,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import HomeImgUrl from "../../../../images/asia/philippines/el-nido/which-tour/el-nido-which-tour-main.jpg"
import ElNidoMap from "../../../../images/asia/philippines/el-nido/which-tour/el-nido-which-tour-map.png"
import {
  Anchor,
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
} from "../../../../components/images/layout"
import { SharedCardPhilippinesImages } from "../../../../components/images/asia/philippines/shared-card-philippines-images"
import { ArticleCardContainer } from "../../../../components/layout/layout"
import { ElNidoParadiseCard } from "../../../../components/core/asia/philippines/philippines.card"
import styled from "@emotion/styled"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"
import { ElNidoWhichTourImages } from "../../../../components/images/asia/philippines/el-nido/which-tour"
import { ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { css } from "@emotion/react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore https://github.com/Swizec/useDimensions/issues/16
import useDimensions from "react-use-dimensions"

const namespace = "asia/philippines/el-nido/which-tour"
const id = "el-nido-which-tour"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const CustomTitle = styled(SectionTitle)`
  justify-content: center;
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.philippines.card.which-tour`)
  const tourALinkPublished = development || getLink("el-nido-tour-a").published
  const tourBLinkPublished = development || getLink("el-nido-tour-b").published
  const tourCLinkPublished = development || getLink("el-nido-tour-c").published
  const tourDLinkPublished = development || getLink("el-nido-tour-d").published
  const [ref, { width }] = useDimensions()
  const ratio = width / 800

  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <PhilippinesBlogLayout page={id} location={location}>
        <PhilippinesTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardPhilippinesImages image="whichTour" />
        </ImageAsLandscape>
        <PhilippinesQuote>{t("quote")}</PhilippinesQuote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <Divider />
        <SectionContent>
          <p>
            {t("introduction.part2")} <HighLight>{t("introduction.part3")}</HighLight>
          </p>
          {t("introduction.part4") && <p>{t("introduction.part4")}</p>}
          <p>
            {t("introduction.part5")} <PhilippinesLink to="boracay">{t("introduction.part6")}</PhilippinesLink>,{" "}
            <PhilippinesLink to="coron-island">{t("introduction.part7")}</PhilippinesLink> {t("introduction.part8")}{" "}
            <PhilippinesLink to="thailand">{t("introduction.part9")}</PhilippinesLink>
            {t("introduction.part10")} <PhilippinesLink to="azores">{t("introduction.part11")}</PhilippinesLink>{" "}
            {t("introduction.part12")} <PhilippinesLink to="caribbean">{t("introduction.part13")}</PhilippinesLink>{" "}
            {t("introduction.part14")}
          </p>
          <p>{t("introduction.part15")}</p>
          <p>{t("introduction.part16")}</p>
          <ArticleCardContainer>
            <ElNidoParadiseCard card={{ showTags: false, showPublished: false, showMore: true }} />
          </ArticleCardContainer>
          <p>{t("introduction.part17")}</p>
        </SectionContent>
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
          <ul>
            <li>
              <PhilippinesExternalLink href={`https://www.elnidoparadise.com/${i18n.languageCode ? "fr" : ""}`}>
                {t("where-to-book.part2")}
              </PhilippinesExternalLink>{" "}
              {t("where-to-book.part3")}
            </li>
            <li>
              <PhilippinesExternalLink href="https://www.tikigo.com/">
                {t("where-to-book.part4")}
              </PhilippinesExternalLink>{" "}
              {t("where-to-book.part5")}
            </li>
            <li>
              <PhilippinesExternalLink href="https://www.travel-palawan.com/">
                {t("where-to-book.part6")}
              </PhilippinesExternalLink>{" "}
              {t("where-to-book.part7")}
            </li>
            <li>
              <PhilippinesExternalLink href="https://booking.philippineislandcruises.com/en">
                {t("where-to-book.part8")}
              </PhilippinesExternalLink>{" "}
              {t("where-to-book.part9")}
            </li>
            <li>
              <PhilippinesExternalLink href="http://www.skippercharters.ph/el-nido-charters.html">
                {t("where-to-book.part10")}
              </PhilippinesExternalLink>{" "}
              {t("where-to-book.part11")}
            </li>
          </ul>
          <p>{t("where-to-book.part12")}</p>
          <p>{t("where-to-book.part13")}</p>
          <p>{t("where-to-book.part14")}</p>
          <p>
            {t("where-to-book.part15")} <HighLight>{t("where-to-book.part16")}</HighLight> {t("where-to-book.part17")}
          </p>
          <p>
            {t("where-to-book.part18")} <HighLight>{t("where-to-book.part19")}</HighLight>
            {t("where-to-book.part20")}
          </p>
          <p>
            {t("where-to-book.part21")} <HighLight>{t("where-to-book.part22")}</HighLight>
            {t("where-to-book.part23")}
          </p>
          <p>{t("where-to-book.part24")}</p>
        </Booking>
        <Choice title={t("tour-category.title")}>
          <p>{t("tour-category.part1")}</p>
          <ul>
            <li>
              <p>
                <HighLight>{t("tour-category.part2")}</HighLight> <br />
                {t("tour-category.part3")}
              </p>
            </li>
            <li>
              <p>
                <HighLight>{t("tour-category.part4")}</HighLight> <br />
                {t("tour-category.part5")}
              </p>
            </li>
          </ul>
          <p>{t("tour-category.part6")}</p>
          <p>{t("tour-category.part7")}</p>
          <p>{t("tour-category.part8")}</p>
          <ul>
            <li>
              <p>
                <HighLight>{t("tour-category.part9")}</HighLight> <br />
                {t("tour-category.part10")}
              </p>
            </li>
            <li>
              <p>
                <HighLight>{t("tour-category.part11")}</HighLight> <br />
                {t("tour-category.part12")}
              </p>
            </li>
          </ul>
        </Choice>
        <HowMuch>
          <ul>
            <li>
              <HighLight>{t("how-much.part1")}</HighLight> {t("how-much.part2")}
            </li>
            <li>
              <HighLight>{t("how-much.part3")}</HighLight> {t("how-much.part4")}
            </li>
            <li>
              <HighLight>{t("how-much.part5")}</HighLight> {t("how-much.part6")}
            </li>
            <li>
              <HighLight>{t("how-much.part9")}</HighLight> {t("how-much.part10")}
            </li>
            <li>
              <HighLight>{t("how-much.part11")}</HighLight> {t("how-much.part12")}
            </li>
          </ul>
          <p>{t("how-much.part13")}</p>
          <ul>
            <li>
              {t("how-much.part14")} <HighLight>{t("how-much.part15")}</HighLight> {t("how-much.part16")}
            </li>
            <li>
              {t("how-much.part17")} <HighLight>{t("how-much.part18")}</HighLight>
            </li>
            <li>
              {t("how-much.part19")} <HighLight>{t("how-much.part20")}</HighLight>
            </li>
            <li>
              {t("how-much.part21")} <HighLight>{t("how-much.part22")}</HighLight>
            </li>
            <li>
              {t("how-much.part23")} <HighLight>{t("how-much.part24")}</HighLight>
            </li>
          </ul>
          <p>{t("how-much.part25")}</p>
          <p>{t("how-much.part26")}</p>
        </HowMuch>
        <Baggage title={t("what-to-bring.title")}>
          <p>
            {t("what-to-bring.part1")} <HighLight>{t("what-to-bring.part2")}</HighLight> {t("what-to-bring.part3")}{" "}
            <HighLight>{t("what-to-bring.part4")}</HighLight>
          </p>

          <p>{t("what-to-bring.part5")} </p>
          <p>
            {t("what-to-bring.part6")} <HighLight>{t("what-to-bring.part7")}</HighLight>
          </p>
          <p>{t("what-to-bring.part8")} </p>
        </Baggage>
        <Boat title={t("which-boat.title")}>
          <p>
            {t("which-boat.part1")} <HighLight>{t("which-boat.part2")}</HighLight> {t("which-boat.part3")}{" "}
            <HighLight>{t("which-boat.part4")}</HighLight> {t("which-boat.part5")}
          </p>
          <GroupOfImages>
            <ImageAsLandscape>
              <ElNidoWhichTourImages image="speedboat" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <ElNidoWhichTourImages image="boat" />
            </ImageAsLandscape>
          </GroupOfImages>
        </Boat>
        <Visit title={t("visit-title")}>
          <section className="pt3">
            <div
              className="relative tc"
              css={css`
                margin-bottom: 1.45rem;
              `}
            >
              <span className="relative dib">
                <img
                  ref={ref}
                  src={ElNidoMap}
                  alt="El Nido Tour Map"
                  className="db"
                  css={css`
                    width: 100%;
                    max-width: 700px;
                    object-fit: contain;
                  `}
                />
                <a
                  href="#tour-a"
                  css={css`
                    position: absolute;
                    width: ${270 * ratio}px;
                    height: ${93 * ratio}px;
                    top: ${354 * ratio}px;
                    left: ${234 * ratio}px;
                    z-index: 10;
                    border-radius: ${93 * ratio}px / ${45 * ratio}px;
                    transform: rotate(-25deg);
                  `}
                />
                <a
                  href="#tour-b"
                  css={css`
                    position: absolute;
                    width: ${270 * ratio}px;
                    height: ${130 * ratio}px;
                    top: ${465 * ratio}px;
                    left: ${284 * ratio}px;
                    z-index: 10;
                    border-radius: ${130 * ratio}px / ${65 * ratio}px;
                    transform: rotate(-5deg);
                  `}
                />
                <a
                  href="#tour-c"
                  css={css`
                    position: absolute;
                    width: ${238 * ratio}px;
                    height: ${100 * ratio}px;
                    top: ${215 * ratio}px;
                    left: ${124 * ratio}px;
                    z-index: 10;
                    border-radius: ${100 * ratio}px / ${50 * ratio}px;
                    transform: rotate(-2deg);
                  `}
                />
                <a
                  href="#tour-d"
                  css={css`
                    position: absolute;
                    width: ${170 * ratio}px;
                    height: ${110 * ratio}px;
                    top: ${160 * ratio}px;
                    left: ${340 * ratio}px;
                    z-index: 10;
                    border-radius: ${110 * ratio}px / ${70 * ratio}px;
                    transform: rotate(50deg);
                  `}
                />
                <PhilippinesLink
                  to="el-nido"
                  css={css`
                    position: absolute;
                    width: ${90 * ratio}px;
                    height: ${60 * ratio}px;
                    top: ${285 * ratio}px;
                    left: ${494 * ratio}px;
                    z-index: 10;
                    border-radius: ${90 * ratio}px / ${60 * ratio}px;
                  `}
                />
              </span>
            </div>
            <Divider />
            <Anchor id="tour-a" />
            <PhilippinesHeadline>{t("tour-a.title")}</PhilippinesHeadline>
            <Divider />
            <CustomTitle>{t("tour-a.big-lagoon.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-a.big-lagoon.part1")}</p>
              <p>{t("tour-a.big-lagoon.part2")}</p>
              <p>{t("tour-a.big-lagoon.part3")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="bigLagoon" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-a.secret-lagoon.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-a.secret-lagoon.part1")}</p>
              <p>{t("tour-a.secret-lagoon.part2")}</p>
              <p>{t("tour-a.secret-lagoon.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ElNidoWhichTourImages image="secretLagoon1" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <ElNidoWhichTourImages image="secretLagoon2" />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-a.shimizu-island.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-a.shimizu-island.part1")}</p>
              <p>{t("tour-a.shimizu-island.part2")}</p>
              <p>{t("tour-a.shimizu-island.part3")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="shimizuIsland" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-a.commando-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-a.commando-beach.part1")}</p>
              <p>{t("tour-a.commando-beach.part2")}</p>
              <p>{t("tour-a.commando-beach.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ElNidoWhichTourImages image="commandoBeach1" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ElNidoWhichTourImages image="commandoBeach2" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-a.snorkeling.title")}</CustomTitle>
            <SectionContent>
              <p>{t("snorkeling")}</p>
            </SectionContent>
            {tourALinkPublished && (
              <SectionContent>
                <p>
                  {t("tour-a.snorkeling.part1")}{" "}
                  <PhilippinesLink to="el-nido-tour-a">{t("tour-a.snorkeling.part2")}</PhilippinesLink>.
                </p>
              </SectionContent>
            )}
          </section>
          <Divider />
          <section>
            <Anchor id="tour-b" />
            <PhilippinesHeadline>{t("tour-b.title")}</PhilippinesHeadline>
            <Divider />
            <CustomTitle>{t("tour-b.entalula-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-b.entalula-beach.part1")}</p>
              <p>{t("tour-b.entalula-beach.part2")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="entalulaBeach" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-b.snake-island.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-b.snake-island.part1")}</p>
              <p>{t("tour-b.snake-island.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <ElNidoWhichTourImages image="snakeIsland1" />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <ElNidoWhichTourImages image="snakeIsland2" />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-b.pinagbuyutan-island.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-b.pinagbuyutan-island.part1")}</p>
              <p>{t("tour-b.pinagbuyutan-island.part2")}</p>
              <p>{t("tour-b.pinagbuyutan-island.part3")}</p>
              <p>{t("tour-b.pinagbuyutan-island.part4")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="pinagbuyutanIsland" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-b.yum-yum-island.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-b.yum-yum-island.part1")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="yumyumIsland" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-b.cudugnon-cave.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-b.cudugnon-cave.part1")}</p>
              <p>{t("tour-b.cudugnon-cave.part2")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="cudugnonCave" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-b.snorkeling.title")}</CustomTitle>
            <SectionContent>{t("snorkeling")}</SectionContent>
            {tourBLinkPublished && (
              <SectionContent>
                {t("tour-b.snorkeling.part1")}{" "}
                <PhilippinesLink to="el-nido-tour-b">{t("tour-b.snorkeling.part2")}</PhilippinesLink>.
              </SectionContent>
            )}
          </section>
          <Divider />
          <section>
            <Anchor id="tour-c" />
            <PhilippinesHeadline>{t("tour-c.title")}</PhilippinesHeadline>
            <Divider />
            <CustomTitle>{t("tour-c.helicopter-island.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-c.helicopter-island.part1")}</p>
              <p>{t("tour-c.helicopter-island.part2")}</p>
              <p>{t("tour-c.helicopter-island.part3")}</p>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/helicopter-island">
                    Tikigo
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="helicopterIsland" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-c.matinloc-shrine.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-c.matinloc-shrine.part1")}</p>
              <p>{t("tour-c.matinloc-shrine.part2")}</p>
              <p>{t("tour-c.matinloc-shrine.part3")}</p>
              <p>{t("tour-c.matinloc-shrine.part4")}</p>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href="https://www.routard.com/photos/philippines/1502975-matinloc_shrine.htm">
                    Routard
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="matinlocShrine" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-c.secret-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-c.secret-beach.part1")}</p>
              <p>{t("tour-c.secret-beach.part2")}</p>
              <p>{t("tour-c.secret-beach.part3")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://www.pinterest.fr/pin/333125703680649065/">
                    cachucha24
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="secretBeach" />
              </ImageAsPortrait>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-c.star-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-c.star-beach.part1")}</p>
              <p>{t("tour-c.star-beach.part2")}</p>
              <p>{t("tour-c.star-beach.part3")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://www.travel-palawan.com/?attachment_id=70373">
                    travel-palawan
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="starBeach" />
              </ImageAsPortrait>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-c.hidden-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-c.hidden-beach.part1")}</p>
              <p>{t("tour-c.hidden-beach.part2")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://www.travel-palawan.com/product/el-nido-tour-c/">
                    travel-palawan
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="hiddenBeach" />
              </ImageAsPortrait>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-c.snorkeling.title")}</CustomTitle>
            <SectionContent>{t("snorkeling")}</SectionContent>
            {tourCLinkPublished && (
              <>
                <SectionContent>
                  <p>
                    {t("tour-c.snorkeling.part1")}{" "}
                    <PhilippinesLink to="el-nido-tour-c">{t("tour-c.snorkeling.part2")}</PhilippinesLink>.
                  </p>
                </SectionContent>
              </>
            )}
          </section>
          <Divider />
          <section>
            <Anchor id="tour-d" />
            <PhilippinesHeadline>{t("tour-d.title")}</PhilippinesHeadline>
            <Divider />
            <CustomTitle>{t("tour-d.ipil-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-d.ipil-beach.part1")}</p>
              <p>{t("tour-d.ipil-beach.part2")}</p>
              <p>{t("tour-d.ipil-beach.part3")}</p>
              <ImageAsPortrait
                credit={
                  <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/ipil-beach">
                    tikigo
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="ipilBeach" />
              </ImageAsPortrait>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.cadlao-lagoon.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-d.cadlao-lagoon.part1")}</p>
              <p>{t("tour-d.cadlao-lagoon.part2")}</p>
              <p>{t("tour-d.cadlao-lagoon.part3")}</p>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/cadlao-island">
                    tikigo
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="cadlaoIsland" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.paradise-beach.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-d.paradise-beach.part1")}</p>
              <p>{t("tour-d.paradise-beach.part2")}</p>
              <p>{t("tour-d.paradise-beach.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheRight
                  credit={
                    <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/nat-nat-beach">
                      tikigo
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <ElNidoWhichTourImages image="natNatBeach" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft
                  credit={
                    <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/paradise-beach">
                      tikigo
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <ElNidoWhichTourImages image="paradiseBeach" />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight
                  credit={
                    <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/pasandigan-cove">
                      tikigo
                    </ExternalLinkNotUnderlined>
                  }
                >
                  <ElNidoWhichTourImages image="pasandiganCove" />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.small-lagoon.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-d.small-lagoon.part1")}</p>
              <p>{t("tour-d.small-lagoon.part2")}</p>
              <p>{t("tour-d.small-lagoon.part3")}</p>
              <ImageAsLandscape
                credit={
                  <ExternalLinkNotUnderlined href="https://www.tikigo.com/palawan/el-nido/small-lagoon">
                    tikigo
                  </ExternalLinkNotUnderlined>
                }
              >
                <ElNidoWhichTourImages image="smallLagoon" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.snorkeling.title")}</CustomTitle>
            <SectionContent>{t("snorkeling")}</SectionContent>
            {tourDLinkPublished && (
              <>
                <SectionContent>
                  <p>
                    {t("tour-d.snorkeling.part1")}{" "}
                    <PhilippinesLink to="el-nido-tour-d">{t("tour-d.snorkeling.part2")}</PhilippinesLink>.
                  </p>
                </SectionContent>
              </>
            )}
          </section>
        </Visit>
        <Opinion title={t("opinion.title")}>
          <p>{t("opinion.part1")}</p>
          <p>{t("opinion.part2")}</p>
          <p>{t("opinion.part3")}</p>
          <ol
            css={css`
              list-style: none;
              counter-reset: custom-counter 0;
              li {
                counter-increment: custom-counter;
              }
              li::marker {
                content: counter(custom-counter) ". ";
                font-weight: bold;
              }
            `}
          >
            <li>
              <HighLight>{t("opinion.part4")}</HighLight> <br />
              {t("opinion.part5")}
            </li>
            <li>
              <HighLight>{t("opinion.part6")}</HighLight> <br />
              {t("opinion.part7")} <br />
              {t("opinion.part8")}
            </li>
            <li>
              <HighLight>{t("opinion.part9")}</HighLight> <br />
              {t("opinion.part10")} <br />
              {t("opinion.part11")}
            </li>
            <li>
              <HighLight>{t("opinion.part12")}</HighLight> <br />
              {t("opinion.part13")} <br />
              {t("opinion.part14")}
            </li>
          </ol>
          <p>{t("opinion.part15")}</p>
        </Opinion>
        <Divider />
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
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}\\n${t("facebook.part3")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <ElNidoWhichTourImages image="cardFr1" key="cardFr1" />,
                    <ElNidoWhichTourImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <ElNidoWhichTourImages image="cardEn1" key="cardEn1" />,
                    <ElNidoWhichTourImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </PhilippinesBlogLayout>
    </>
  )
}

export default IndexPage

import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/philippines/palawan/el-nido-which-tour.json"
import translationEn from "../../../../locales/en/asia/philippines/palawan/el-nido-which-tour.json"
import {
  PhilippinesBlogLayout,
  PhilippinesHeadline,
  PhilippinesTitle,
} from "../../../../components/core/asia/philippines/philippines"
import {
  Baggage,
  Boat,
  Booking,
  Choice,
  HowMuch,
  Introduction,
  Opinion,
  SectionContent,
  SectionTitle,
  Visit,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import HomeImgUrl from "../../../../images/asia/philippines/carousel-philippines-2.jpg"
import ElNidoMap from "../../../../images/asia/philippines/palawan/el-nido-which-tour/el-nido-which-tour-map.png"
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
import { ElNidoWhichTourImages } from "../../../../components/images/asia/philippines/palawan/el-nido-which-tour"
import { ApplicationLink, ExternalLinkNotUnderlined } from "../../../../components/core/links/link"
import { css } from "@emotion/react"
import { Quote } from "../../../../components/core/quote"
import { TourAImages } from "../../../../components/images/asia/philippines/palawan/el-nido-tour-a"
import { CarouselImageQuery } from "../../../../components/images/carousel"
import { FakeList } from "../../../../components/core/title"
import useDimensions from "../../../../use-dimensions"

const namespace = "asia/philippines/palawan/which-tour"
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
  const ratio = width ? width / 800 : 1

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
      <PhilippinesBlogLayout page={id} location={location}>
        <PhilippinesTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <CarouselImageQuery image="philippines2" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <Divider />
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          {t("introduction.part3") && <p>{t("introduction.part3")}</p>}
          <p>{t("introduction.part4")}</p>
          <p>{t("introduction.part5")}</p>
          <p>{t("introduction.part6")}</p>
          <ArticleCardContainer>
            <ElNidoParadiseCard card={{ showTags: false, showPublished: false, showMore: true }} />
          </ArticleCardContainer>
          <p>{t("introduction.part7")}</p>
        </SectionContent>
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
          <ul>
            <li>{t("where-to-book.part2")}</li>
            <li>{t("where-to-book.part3")}</li>
            <li>{t("where-to-book.part4")}</li>
            <li>{t("where-to-book.part5")}</li>
            <li>{t("where-to-book.part6")}</li>
          </ul>
          <p>{t("where-to-book.part7")}</p>
          <p>{t("where-to-book.part8")}</p>
          <p>{t("where-to-book.part9")}</p>
          <p>{t("where-to-book.part10")}</p>
          <p>{t("where-to-book.part11")}</p>
          <p>{t("where-to-book.part12")}</p>
          <p>{t("where-to-book.part13")}</p>
        </Booking>
        <Choice title={t("tour-category.title")}>
          <p>{t("tour-category.part1")}</p>
          <FakeList>{t("tour-category.part2")}</FakeList>
          <p>{t("tour-category.part3")}</p>
          <FakeList>{t("tour-category.part4")}</FakeList>
          <p>{t("tour-category.part5")}</p>
          <p>{t("tour-category.part6")}</p>
          <p>{t("tour-category.part7")}</p>
          <p>{t("tour-category.part8")}</p>
          <FakeList>{t("tour-category.part9")}</FakeList>
          <p>{t("tour-category.part10")}</p>
          <FakeList>{t("tour-category.part11")}</FakeList>
          <p>{t("tour-category.part12")}</p>
        </Choice>
        <HowMuch>
          <ul>
            <li>{t("how-much.part1")}</li>
            <li>{t("how-much.part2")}</li>
            <li>{t("how-much.part3")}</li>
            <li>{t("how-much.part5")}</li>
            <li>{t("how-much.part6")}</li>
          </ul>
          <p>{t("how-much.part7")}</p>
          <ul>
            <li>{t("how-much.part8")}</li>
            <li>{t("how-much.part9")}</li>
            <li>{t("how-much.part10")}</li>
            <li>{t("how-much.part11")}</li>
            <li>{t("how-much.part12")}</li>
          </ul>
          <p>{t("how-much.part13")}</p>
          <p>{t("how-much.part14")}</p>
        </HowMuch>
        <Baggage title={t("what-to-bring.title")}>
          <p>{t("what-to-bring.part1")}</p>
          <p>{t("what-to-bring.part2")}</p>
          <p>{t("what-to-bring.part3")}</p>
          <p>{t("what-to-bring.part4")} </p>
        </Baggage>
        <Boat title={t("which-boat.title")}>
          <p>{t("which-boat.part1")}</p>
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
                <ApplicationLink
                  to="palawan"
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
                <SharedCardPhilippinesImages image="tourA" />
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
                  <TourAImages image="secretLagoon" />
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
                <TourAImages image="shimizuIsland" />
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
                  <TourAImages image="sevenCommandoBeach" />
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
                <p>{t("tour-a.snorkeling.part1")}</p>
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
            {tourBLinkPublished && <SectionContent>{t("tour-b.snorkeling.part1")}</SectionContent>}
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
              <ImageAsLandscape>
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
              <ImageAsLandscape>
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
              <ImageAsPortrait>
                <ElNidoWhichTourImages image="hiddenBeach" />
              </ImageAsPortrait>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-c.snorkeling.title")}</CustomTitle>
            <SectionContent>{t("snorkeling")}</SectionContent>
            {tourCLinkPublished && <SectionContent>{t("tour-c.snorkeling.part1")}</SectionContent>}
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
              <ImageAsPortrait>
                <ElNidoWhichTourImages image="ipilBeach" />
              </ImageAsPortrait>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.cadlao-lagoon.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-d.cadlao-lagoon.part1")}</p>
              <p>{t("tour-d.cadlao-lagoon.part2")}</p>
              <p>{t("tour-d.cadlao-lagoon.part3")}</p>
              <ImageAsLandscape>
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
                <ImageAsLandscapeOnTheRight>
                  <ElNidoWhichTourImages image="pasandiganCove" />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft>
                  <ElNidoWhichTourImages image="pasandiganCove2" />
                </ImageAsLandscapeOnTheLeft>
              </GroupOfImages>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.small-lagoon.title")}</CustomTitle>
            <SectionContent>
              <p>{t("tour-d.small-lagoon.part1")}</p>
              <p>{t("tour-d.small-lagoon.part2")}</p>
              <p>{t("tour-d.small-lagoon.part3")}</p>
              <ImageAsLandscape>
                <ElNidoWhichTourImages image="smallLagoon" />
              </ImageAsLandscape>
            </SectionContent>
            <Divider />
            <CustomTitle>{t("tour-d.snorkeling.title")}</CustomTitle>
            <SectionContent>{t("snorkeling")}</SectionContent>
            {tourDLinkPublished && <SectionContent>{t("tour-d.snorkeling.part1")}</SectionContent>}
          </section>
        </Visit>
        <Divider />
        <Opinion title={t("opinion.title")}>
          <p>{t("opinion.part1")}</p>
          <p>{t("opinion.part2")}</p>
          <p>{t("opinion.part3")}</p>
          <FakeList>
            <span className="b">1.</span> {t("opinion.part4")}
          </FakeList>
          <p>{t("opinion.part5")}</p>
          <FakeList>
            <span className="b">2.</span> {t("opinion.part6")}
          </FakeList>
          <p>{t("opinion.part7")}</p>
          <p>{t("opinion.part8")}</p>
          <FakeList>
            <span className="b">3.</span> {t("opinion.part9")}
          </FakeList>
          <p>{t("opinion.part10")}</p>
          <p>{t("opinion.part11")}</p>
          <FakeList>
            <span className="b">4.</span> {t("opinion.part12")}
          </FakeList>
          <p>{t("opinion.part13")}</p>
          <p>{t("opinion.part14")}</p>
          <p>{t("opinion.part15")}</p>
        </Opinion>
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

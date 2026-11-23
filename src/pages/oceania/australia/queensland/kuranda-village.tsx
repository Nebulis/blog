import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/oceania/australia/queensland/kuranda-village.json"
import translationEn from "../../../../locales/en/oceania/australia/queensland/kuranda-village.json"
import { AustraliaBlogLayout, AustraliaHeadline } from "../../../../components/core/oceania/australia/australia"
import {
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  WhereToHave,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import { Title } from "../../../../components/core/title"
import HomeImgUrl from "../../../../images/oceania/australia/queensland/kuranda-village/kuranda-village-main.jpg"
import KurandaMap from "../../../../images/oceania/australia/queensland/kuranda-village/map.jpg"
import ButterflySanctuary from "../../../../images/oceania/australia/queensland/kuranda-village/butterfly-sanctuary.jpg"
import Birdworld from "../../../../images/oceania/australia/queensland/kuranda-village/birdworld.jpg"
import KoalaGardens from "../../../../images/oceania/australia/queensland/kuranda-village/koala-gardens.jpg"
import Riverboat from "../../../../images/oceania/australia/queensland/kuranda-village/riverboat.jpg"
import ScenicRailway from "../../../../images/oceania/australia/queensland/kuranda-village/scenic-railway.jpg"
import Skyrail from "../../../../images/oceania/australia/queensland/kuranda-village/skyrail.jpg"
import cardFr1 from "../../../../images/oceania/australia/queensland/kuranda-village/card-fr1.jpg"
import cardFr2 from "../../../../images/oceania/australia/queensland/kuranda-village/card-fr2.jpg"
import cardEn1 from "../../../../images/oceania/australia/queensland/kuranda-village/card-en1.jpg"
import cardEn2 from "../../../../images/oceania/australia/queensland/kuranda-village/card-en2.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  R2Image,
} from "../../../../components/images/layout"
import { SharedCardAustraliaImages } from "../../../../components/images/oceania/australia/shared-card-australia-images"
import { BookingGygCardContainer, MapContainer } from "../../../../components/layout/layout"
import { BasicTourCard } from "../../../../components/core/get-your-guide"
import { css } from "@emotion/react"

const namespace = "oceania/australia/queensland/kuranda-village"
const id = "kuranda-village"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.australia.card.${id}`)

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
      <AustraliaBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardAustraliaImages image="kurandaVillage" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
          <p>{t("how.part4")}</p>
          <ul>
            <li>{t("how.part5")}</li>
            <li>{t("how.part6")}</li>
          </ul>
          <p>{t("how.part7")}</p>
          <p>{t("how.part8")}</p>
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
          <p>{t("what-time-of-year.part5")}</p>
          <p>{t("what-time-of-year.part6")}</p>
        </WhatTimeOfYear>
        <WhereToHave title={t("where-to-have.title")}>
          <p>{t("where-to-have.part1")}</p>
          <p>{t("where-to-have.part2")}</p>
          <ImageAsLandscape>
            <R2Image namespace={namespace} name="kuranda-french-crepes-sign-foliage" aspectRatio={3 / 2} />
          </ImageAsLandscape>
          <p>{t("where-to-have.part3")}</p>
        </WhereToHave>
        <Visit title={t("visit.title")}>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part1.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part1.part1")}</p>
              <p>{t("visit.part1.part2")}</p>
              <p>{t("visit.part1.part3")}</p>
              <p>{t("visit.part1.part4")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part2.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part1")}</p>
              <p>{t("visit.part2.part2")}</p>
              <p>{t("visit.part2.part3")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-scenic-railway-train-bridge" aspectRatio={3 / 2} />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part3.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part3.part1")}</p>
              <p>{t("visit.part3.part2")}</p>
              <p>{t("visit.part3.part3")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-skyrail-gondola-barron-river" aspectRatio={1.6} />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part4.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part1")}</p>
              <p>{t("visit.part4.part2")}</p>
              <p>{t("visit.part4.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="butterfly-sanctuary-kuranda-black-butterfly"
                    aspectRatio={3 / 2}
                  />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-butterfly-blue-spots-log" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="kuranda-butterfly-hanging-silk-thread" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="kuranda-butterfly-electric-blue-rock" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-butterfly-orange-patterned-leaf" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part4.part4")}</p>
              <p>{t("visit.part4.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="kuranda-cairns-birdwing-green-wing" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="kuranda-cairns-birdwing-macro-foliage" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.part4.part6")}</p>
              <p>{t("visit.part4.part7")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-swallowtail-butterflies-mating-fern" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit.part4.part8")}</p>
              <p>{t("visit.part4.part9")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-butterfly-dark-wings-fern" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="butterfly-sanctuary-kuranda-lacewing-butterfly"
                    aspectRatio={3 / 2}
                  />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-butterfly-orange-striped-leaf" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part4.part10")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-butterfly-resting-visitor-shoulder" aspectRatio={3 / 2} />
              </ImageAsLandscape>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part5.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part5.part1")}</p>
              <p>{t("visit.part5.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-birdworld-macaw-eating-nut" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="birdworld-kuranda-rainbow-lorikeet-perch" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part5.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="birdworld-kuranda-galah-cockatoo-feeder" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="birdworld-kuranda-pink-galah-branches" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="birdworld-kuranda-black-cockatoo-roof" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="birdworld-kuranda-pink-cockatoos-trunk" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.part5.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="birdworld-kuranda-green-parrot-perch" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="birdworld-kuranda-sun-conure-branch" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="birdworld-kuranda-black-capped-lory" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="kuranda-birdworld-green-parrot-perched" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="kuranda-birdworld-blue-parakeet-branch" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="kuranda-birdworld-yellow-parrot-preening" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-birdworld-dark-bowerbird-leaves" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-birdworld-black-swan-ducks" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-birdworld-radjah-shelduck-sand" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-birdworld-glossy-ibis-log" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-birdworld-sun-conure-hollow" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part5.part5")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-birdworld-cassowary-lush-foliage" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit.part5.part6")}</p>
              <p>{t("visit.part5.part7")}</p>
              <ImageAsPortrait>
                <R2Image namespace={namespace} name="kuranda-birdworld-rail-stone-path" aspectRatio={3 / 4} />
              </ImageAsPortrait>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part6.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part6.part1")}</p>
              <p>{t("visit.part6.part2")}</p>
              <p>{t("visit.part6.part3")}</p>
              <p>{t("visit.part6.part4")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="kuranda-koala-gardens-freshwater-crocodile"
                    aspectRatio={3 / 2}
                  />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-koala-gardens-crocodiles-rocks" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part5")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-koala-gardens-water-dragon" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-koala-gardens-lizard-log" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-koala-gardens-turtle-rock" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part6.part6")}</p>
              <p>{t("visit.part6.part7")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-koala-gardens-sleeping-koalas" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit.part6.part8")}</p>
              <p>{t("visit.part6.part9")}</p>
              <p>{t("visit.part6.part10")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="kuranda-koala-gardens-quokka-sleeping" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscapeOnTheLeft>
                  <R2Image namespace={namespace} name="kuranda-koala-gardens-wombat-log" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheLeft>
                <ImageAsLandscapeOnTheRight>
                  <R2Image namespace={namespace} name="kuranda-gardens-wombat-mossy-burrow" aspectRatio={3 / 2} />
                </ImageAsLandscapeOnTheRight>
              </GroupOfImages>
              <p>{t("visit.part6.part11")}</p>
              <ImageAsLandscape>
                <R2Image namespace={namespace} name="kuranda-koala-gardens-wallabies-enclosure" aspectRatio={3 / 2} />
              </ImageAsLandscape>
              <p>{t("visit.part6.part12")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <AustraliaHeadline>{t("visit.part7.title")}</AustraliaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part7.part1")}</p>
              <p>{t("visit.part7.part2")}</p>
              <p>{t("visit.part7.part3")}</p>
              <p>{t("visit.part7.part4")}</p>
              <MapContainer>
                <img src={KurandaMap} alt="Kuranda Village Map" />
              </MapContainer>
            </SectionContent>
          </section>
        </Visit>
        <Divider />
        <HowMuch title={t("how-much.title")}>
          <SectionContent>
            <BookingGygCardContainer>
              <BasicTourCard
                to="https://australianbutterflies.com/"
                title="Butterfly Sanctuary"
                image={ButterflySanctuary}
                duration={{ value: 1, unit: "hour" }}
                price={12}
              />
            </BookingGygCardContainer>
            <p>{t("how-much.part2")}</p>
          </SectionContent>
          <Divider />
          <SectionContent>
            <BookingGygCardContainer>
              <BasicTourCard
                css={css`
                  img {
                    object-position: center 40%;
                  }
                `}
                to="https://www.birdworldkuranda.com/"
                title="Birdworld"
                image={Birdworld}
                duration={{ value: 1, unit: "hour" }}
                price={12}
              />
            </BookingGygCardContainer>
            <p>{t("how-much.part3")}</p>
          </SectionContent>
          <Divider />
          <SectionContent>
            <BookingGygCardContainer>
              <BasicTourCard
                to="https://www.koalagardens.com/"
                title="Koala Gardens"
                image={KoalaGardens}
                duration={{ value: 1, unit: "hour" }}
                price={12}
              />
            </BookingGygCardContainer>
            <p>{t("how-much.part4")}</p>
          </SectionContent>
          <Divider />
          <SectionContent>
            <BookingGygCardContainer>
              <BasicTourCard
                to="https://kurandariverboat.com.au/"
                title="Riverboat"
                image={Riverboat}
                duration={{ value: 45, unit: "minute" }}
                price={12}
              />
            </BookingGygCardContainer>
            <p>{t("how-much.part5")}</p>
            <ul>
              <li>{t("how-much.part6")}</li>
              <li>{t("how-much.part7")}</li>
              <li>{t("how-much.part8")}</li>
              <li>{t("how-much.part9")}</li>
              <li>{t("how-much.part10")}</li>
            </ul>
          </SectionContent>
          <Divider />
          <SectionContent>
            <BookingGygCardContainer>
              <BasicTourCard
                to="https://www.ksr.com.au/Pages/Default.aspx/"
                title="Scenic Railway"
                image={ScenicRailway}
                duration={{ value: 2, unit: "hour" }}
                price={50}
              />
            </BookingGygCardContainer>
            <p>{t("how-much.part11")}</p>
            <ul>
              <li>{t("how-much.part12")}</li>
              <li>{t("how-much.part13")}</li>
            </ul>
            <p>{t("how-much.part14")}</p>
            <ul>
              <li>{t("how-much.part15")}</li>
              <li>{t("how-much.part16")}</li>
            </ul>
            <p>{t("how-much.part18")}</p>
          </SectionContent>
          <Divider />
          <BookingGygCardContainer>
            <BasicTourCard
              to="https://www.skyrail.com.au/plan/skyrail-rainforest-cableway/"
              title="Skyrail Rainforest"
              image={Skyrail}
              duration={{ value: 90, unit: "minute" }}
              price={35}
            />
          </BookingGygCardContainer>
          <p>{t("how-much.part19")}</p>
          <p>{t("how-much.part20")}</p>
          <p>{t("how-much.part21")}</p>
          <p>{t("how-much.part17")}</p>
        </HowMuch>
        <Divider />
        <SectionContent>
          <p>{t("how-much.part22")}</p>
          <p>{t("how-much.part23")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="kuranda-lookout-hinterland-coast-view" aspectRatio={4 / 3} />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="kuranda-lookout-mountain-valley-view" aspectRatio={4 / 3} />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="kuranda-lookout-coastal-ocean-view" aspectRatio={4 / 3} />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>{t("how-much.part24")}</p>
        </SectionContent>
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
                ? [
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Kuranda Village" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Kuranda Village" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: Kuranda Village" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: Kuranda Village" />,
                  ],
          }}
        />
      </AustraliaBlogLayout>
    </>
  )
}

export default IndexPage

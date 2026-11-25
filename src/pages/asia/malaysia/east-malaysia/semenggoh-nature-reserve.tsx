import React, { useContext } from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/malaysia/east-malaysia/semenggoh-nature-reserve.json"
import translationEn from "../../../../locales/en/asia/malaysia/east-malaysia/semenggoh-nature-reserve.json"
import { MalaysiaBlogLayout, MalaysiaHeadline, malaysiaPrice } from "../../../../components/core/asia/malaysia/malaysia"
import {
  Booking,
  How,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  Where,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import HomeImgUrl from "../../../../images/asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-main.jpg"
import SemenggohMap from "../../../../images/asia/malaysia/east-malaysia/semenggoh-nature-reserve/semenggoh-nature-reserve-map.jpg"
import cardFr1 from "../../../../images/asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-fr1.jpg"
import cardFr2 from "../../../../images/asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-fr2.jpg"
import cardEn1 from "../../../../images/asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-en1.jpg"
import cardEn2 from "../../../../images/asia/malaysia/east-malaysia/semenggoh-nature-reserve/card-en2.jpg"
import { Title } from "../../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  R2Image,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardMalaysiaImages } from "../../../../components/images/asia/malaysia/shared-card-malaysia-images"
import { MapContainer, Table } from "../../../../components/layout/layout"
import { css } from "@emotion/react"
import { malaysiaPrimaryColor } from "../../../../components/core/asia/malaysia/malaysia.variables"
import { getLink } from "../../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../../components/application"

const namespace = "asia/malaysia/east-malaysia/semenggoh-nature-reserve"
const id = "semenggoh-nature-reserve"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.malaysia.card.${id}`)
  const orangutanLinkPublished = development || getLink("orangutan").published
  const malaysiaPriceWithLang = malaysiaPrice(i18n.languageCode)
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
      <MalaysiaBlogLayout page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardMalaysiaImages image="semenggohNatureReserve" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Where title={t("where.title")}>
          <p>{t("where.part1")}</p>
        </Where>
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <p>{t("how.part2")}</p>
          <p>{t("how.part3")}</p>
        </How>
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
          <p>{t("when.part3")}</p>
          <p>{t("when.part4")}</p>
          <p>{t("when.part5")}</p>
        </When>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <Table className="mb3">
            <thead>
              <tr>
                <th>{i18n.languageCode === "fr" ? "Catégorie" : "Category"}</th>
                <th>{i18n.languageCode === "fr" ? "Étranger" : "Foreigner"}</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Adulte" : "Adult"}</td>
                <td>{malaysiaPriceWithLang(10)}</td>
                <td>{malaysiaPriceWithLang(5)}</td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Retraité" : "Senior Citizen"}</td>
                <td>{malaysiaPriceWithLang(10)}</td>
                <td>{malaysiaPriceWithLang(3)}</td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Personne Handicapée" : "Disabled person"}</td>
                <td>{malaysiaPriceWithLang(5)}</td>
                <td>{malaysiaPriceWithLang(3)}</td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Enfant (6-7 ans)" : "Children (6-7 years old)"}</td>
                <td>{malaysiaPriceWithLang(5)}</td>
                <td>{malaysiaPriceWithLang(2)}</td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Enfant (moins de 6 ans)" : "Children ( below 6 years old)"}</td>
                <td>{i18n.languageCode === "fr" ? "Gratuit" : "Free"}</td>
                <td>{i18n.languageCode === "fr" ? "Gratuit" : "Free"}</td>
              </tr>
            </tbody>
          </Table>
        </HowMuch>
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
        </Booking>
        <Visit title={t("visit.title")}>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit1.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <ImageAsLandscape>
                <R2Image
                  namespace={namespace}
                  name="semenggoh-wildlife-centre-entrance-pavilion"
                  aspectRatio={16 / 9}
                />
              </ImageAsLandscape>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <ul>
                <li>{t("visit1.part4")}</li>
                <li>{t("visit1.part5")}</li>
                <li>{t("visit1.part6")}</li>
              </ul>
              <p>{t("visit1.part7")}</p>
              <p>{t("visit1.part8")}</p>
              <ImageAsPortrait>
                <R2Image namespace={namespace} name="semenggoh-wildlife-centre-entrance-sign" aspectRatio={16 / 9} />
              </ImageAsPortrait>
              <p>{t("visit1.part9")}</p>
              <p>{t("visit1.part10")}</p>
              <p>{t("visit1.part11")}</p>
              <p>{t("visit1.part12")}</p>
              <MapContainer
                css={css`
                  max-width: 500px;
                  margin-left: auto;
                  margin-right: auto;
                `}
              >
                <img src={SemenggohMap} alt="Map of Semenggoh Nature Reserve" />
              </MapContainer>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit2.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <TwoImagesSameSizeOrToGroup>
                <R2Image namespace={namespace} name="sarawak-protected-wildlife-poster" aspectRatio={9 / 16} />
                <R2Image namespace={namespace} name="semenggoh-wildlife-protection-sign-sarawak" aspectRatio={9 / 16} />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit2.part3")}</p>
              <p>{t("visit2.part4")}</p>
              <p>{t("visit2.part5")}</p>
              <p
                className="i tc"
                css={css`
                  color: ${malaysiaPrimaryColor};
                `}
              >
                {t("visit2.part6")}
              </p>
              <p>{t("visit2.part7")}</p>
              <p>{t("visit2.part8")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup
                  css={css`
                    max-width: 900px;
                  `}
                >
                  <R2Image namespace={namespace} name="semenggoh-orangutan-high-rope-canopy" aspectRatio={0.59} />
                  <R2Image namespace={namespace} name="semenggoh-orangutan-rope-treetop-sky" aspectRatio={0.59} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup
                  css={css`
                    max-width: 900px;
                  `}
                >
                  <R2Image namespace={namespace} name="semenggoh-orangutan-crossing-rope-canopy" aspectRatio={0.59} />
                  <R2Image namespace={namespace} name="semenggoh-orangutan-canopy-rope" aspectRatio={0.59} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup
                  css={css`
                    max-width: 900px;
                  `}
                >
                  <R2Image namespace={namespace} name="semenggoh-orangutan-swinging-rope-canopy" aspectRatio={9 / 16} />
                  <R2Image
                    namespace={namespace}
                    name="semenggoh-orangutan-hanging-jungle-canopy"
                    aspectRatio={9 / 16}
                  />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-climbing-tree-trunk" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-hanging-rope" aspectRatio={2 / 3} />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-relaxing-wooden-deck" aspectRatio={9 / 16} />
                  <R2Image
                    namespace={namespace}
                    name="semenggoh-orangutan-resting-wooden-platform-2"
                    aspectRatio={2 / 3}
                  />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-sleeping-wooden-deck" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image
                    namespace={namespace}
                    name="semenggoh-orangutan-resting-wooden-platform"
                    aspectRatio={3 / 2}
                  />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit2.part9")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit3.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <p>{t("visit3.part6")}</p>
              <p>{t("visit3.part7")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit4.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <ImageAsPortrait>
                <R2Image namespace={namespace} name="semenggoh-coconut-shells-feeding-ground" aspectRatio={1.01} />
              </ImageAsPortrait>
              <p>{t("visit4.part3")}</p>
              <p>{t("visit4.part4")}</p>
              <p>{t("visit4.part5")}</p>
              <p>{t("visit4.part6")}</p>
              <p>{t("visit4.part7")}</p>
              <p>{t("visit4.part8")}</p>
              <p>{t("visit4.part9")}</p>
              <p>{t("visit4.part10")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-mother-baby" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-tree-trunk-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-baby-orangutan-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-infant-climbing-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-juvenile-orangutan-eating-fruit" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part11")}</p>
              <p>{t("visit4.part12")}</p>
              <p>{t("visit4.part13")}</p>
              <p>{t("visit4.part14")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-eating-coconut-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-mother-baby-ropes" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-mother-baby-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutans-canopy-rope-network" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutans-hanging-upside-down" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-rope-canopy" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-baby-orangutan-rope-canopy" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part15")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-climbing-rope-canopy" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-eating-fruit" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-acrobatic-feeding" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-climbing-thick-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-climbing-rope" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-swinging-rope-foliage" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutans-canopy-ropes" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-hanging-tree" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit4.part16")}</p>
              <p>{t("visit4.part17")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit5.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <p>{t("visit5.part4")}</p>
              <p>{t("visit5.part5")}</p>
              <p>{t("visit5.part6")}</p>
              <p>{t("visit5.part7")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-family-tree-board" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-orangutan-family-tree" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="semenggoh-information-board-profiles" aspectRatio={16 / 9} />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit5.part8")}</p>
              <p>{t("visit5.part9")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit6.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
              {orangutanLinkPublished && <p>{t("visit6.part4")}</p>}
              <p>{t("visit6.part5")}</p>
              <TwoImagesSameSizeOrToGroup
                title1={i18n.languageCode === "fr" ? "Mme Magic" : "Mrs. Magic"}
                title2={i18n.languageCode === "fr" ? "Mr Magic" : "Mr. Magic"}
                titleClassName="tc"
              >
                <R2Image namespace={namespace} name="semenggoh-orangutans-swinging-ropes-forest" aspectRatio={9 / 16} />
                <R2Image namespace={namespace} name="semenggoh-orangutan-hanging-forest-canopy" aspectRatio={9 / 16} />
              </TwoImagesSameSizeOrToGroup>
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Semenggoh Nature Reserve" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Semenggoh Nature Reserve" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: Semenggoh Nature Reserve" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: Semenggoh Nature Reserve" />,
                  ],
          }}
        />
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage

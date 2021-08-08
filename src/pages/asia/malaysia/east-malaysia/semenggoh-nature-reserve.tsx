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
import { Title } from "../../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardMalaysiaImages } from "../../../../components/images/asia/malaysia/shared-card-malaysia-images"
import { MapContainer, Table } from "../../../../components/layout/layout"
import { css } from "@emotion/react"
import { malaysiaPrimaryColor } from "../../../../components/core/asia/malaysia/malaysia.variables"
import { SemenggohNatureReserveImages } from "../../../../components/images/asia/malaysia/east-malaysia/semenggoh-nature-reserve"
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
        <Visit title={t("visit.title")} />
        <Divider />
        <section>
          <MalaysiaHeadline>{t("visit1.title")}</MalaysiaHeadline>
          <Divider />
          <SectionContent>
            <p>{t("visit1.part1")}</p>
            <ImageAsLandscape>
              <SemenggohNatureReserveImages image="history" />
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
              <SemenggohNatureReserveImages image="history2" />
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
              <SemenggohNatureReserveImages image="briefing" />
              <SemenggohNatureReserveImages image="briefing2" />
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
                <SemenggohNatureReserveImages image="briefing3" imgStyle={{ objectFit: "contain" }} />
                <SemenggohNatureReserveImages image="briefing4" imgStyle={{ objectFit: "contain" }} />
              </TwoImagesSameSizeOrToGroup>
              <TwoImagesSameSizeOrToGroup
                css={css`
                  max-width: 900px;
                `}
              >
                <SemenggohNatureReserveImages image="briefing5" imgStyle={{ objectFit: "contain" }} />
                <SemenggohNatureReserveImages image="briefing6" imgStyle={{ objectFit: "contain" }} />
              </TwoImagesSameSizeOrToGroup>
              <TwoImagesSameSizeOrToGroup
                css={css`
                  max-width: 900px;
                `}
              >
                <SemenggohNatureReserveImages image="briefing7" imgStyle={{ objectFit: "contain" }} />
                <SemenggohNatureReserveImages image="briefing8" imgStyle={{ objectFit: "contain" }} />
              </TwoImagesSameSizeOrToGroup>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="briefing9" />
              </ImageAsLandscape>
              <ImageAsPortrait>
                <SemenggohNatureReserveImages image="briefing10" />
              </ImageAsPortrait>
              <TwoImagesSameSizeOrToGroup>
                <SemenggohNatureReserveImages image="briefing11" />
                <SemenggohNatureReserveImages image="briefing12" />
              </TwoImagesSameSizeOrToGroup>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="briefing13" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="briefing14" />
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
              <SemenggohNatureReserveImages image="feeding" />
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
                <SemenggohNatureReserveImages image="feeding2" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding3" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding4" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding5" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding19" />
              </ImageAsLandscape>
            </GroupOfImages>
            <p>{t("visit4.part11")}</p>
            <p>{t("visit4.part12")}</p>
            <p>{t("visit4.part13")}</p>
            <p>{t("visit4.part14")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding6" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding7" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding8" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding9" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding10" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding11" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding12" />
              </ImageAsLandscape>
            </GroupOfImages>
            <p>{t("visit4.part15")}</p>
            <GroupOfImages>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding13" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding14" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding15" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding16" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding17" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding18" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding20" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="feeding21" />
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
                <SemenggohNatureReserveImages image="family" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="family2" />
              </ImageAsLandscape>
              <ImageAsLandscape>
                <SemenggohNatureReserveImages image="family3" />
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
              <SemenggohNatureReserveImages image="bonus" imgStyle={{ objectFit: "contain" }} />
              <SemenggohNatureReserveImages image="bonus2" imgStyle={{ objectFit: "contain" }} />
            </TwoImagesSameSizeOrToGroup>
          </SectionContent>
        </section>
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
                    <SemenggohNatureReserveImages image="cardFr1" key="cardFr1" />,
                    <SemenggohNatureReserveImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <SemenggohNatureReserveImages image="cardEn1" key="cardEn1" />,
                    <SemenggohNatureReserveImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage

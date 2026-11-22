import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import { Comments } from "../../../components/core/comments"
import translationFr from "../../../locales/fr/asia/cambodia/angkor-wat.json"
import translationEn from "../../../locales/en/asia/cambodia/angkor-wat.json"
import { CambodiaBlogLayout, CambodiaHeadline, CambodiaTitle } from "../../../components/core/asia/cambodia/cambodia"
import {
  How,
  HowLong,
  HowMuch,
  Introduction,
  SectionContent,
  Visit,
  WhatTimeOfYear,
  When,
  WhereToStay,
  Where,
  Baggage,
  MenuArticle,
} from "../../../components/core/section"
import { Anchor } from "../../../components/images/layout"
import { Conclusion } from "../../../components/core/conclusion"
import { Divider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/asia/cambodia/home-cambodia.jpg"
import leVertAngkorHotelUrl from "../../../images/asia/cambodia/angkor-wat/le-vert-angkor-hotel.jpg"
import angkorItinerary from "../../../images/asia/cambodia/angkor-wat/angkor-itinerary.jpg"
import cardFr1 from "../../../images/asia/cambodia/angkor-wat/card-fr1.jpg"
import cardFr2 from "../../../images/asia/cambodia/angkor-wat/card-fr2.jpg"
import cardEn1 from "../../../images/asia/cambodia/angkor-wat/card-en1.jpg"
import cardEn2 from "../../../images/asia/cambodia/angkor-wat/card-en2.jpg"
import {
  ImageAsLandscape,
  GroupOfImages,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
  Panorama,
  R2Image,
} from "../../../components/images/layout"
import { SharedCardCambodiaImages } from "../../../components/images/asia/cambodia/shared-card-cambodia-images"
import { BookingCard, BookingWarning } from "../../../components/core/booking"
import { BookingGygCardContainer, MapContainer } from "../../../components/layout/layout"

const namespace = "asia/cambodia/angkor-wat"
const id = "angkor-wat"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.cambodia.card.${id}`)

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
      <CambodiaBlogLayout page={id} location={location}>
        <CambodiaTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardCambodiaImages image="angkorWat" loading="eager" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Where title={t("where.title")}>
          <p>{t("where.part1")}</p>
        </Where>
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
        </When>
        <How title={t("how.title")}>
          <p>{t("how.part1")}</p>
          <ul>
            <li>{t("how.part2")}</li>
            <li>{t("how.part3")}</li>
            <li>{t("how.part4")}</li>
          </ul>
          <p>{t("how.part5")}</p>
          <p>{t("how.part6")}</p>
          <p>{t("how.part7")}</p>
          <p>{t("how.part8")}</p>
        </How>
        <HowLong title={t("how-long.title")}>
          <p>{t("how-long.part1")}</p>
          <p>{t("how-long.part2")}</p>
          <p>{t("how-long.part3")}</p>
          <p>{t("how-long.part4")}</p>
          <p>{t("how-long.part5")}</p>
        </HowLong>
        <WhatTimeOfYear title={t("what-time-of-year.title")}>
          <p>{t("what-time-of-year.part1")}</p>
          <p>{t("what-time-of-year.part2")}</p>
          <p>{t("what-time-of-year.part3")}</p>
          <p>{t("what-time-of-year.part4")}</p>
          <p>{t("what-time-of-year.part5")}</p>
        </WhatTimeOfYear>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <ul>
            <li>{t("how-much.part2")}</li>
            <li>{t("how-much.part3")}</li>
            <li>{t("how-much.part4")}</li>
          </ul>
          <p>{t("how-much.part5")}</p>
          <p>{t("how-much.part6")}</p>
        </HowMuch>
        <WhereToStay title={t("where-to-stay.title")}>
          <p>{t("where-to-stay.part1")}</p>
          <p>{t("where-to-stay.part2")}</p>
          <p>{t("where-to-stay.part3")}</p>
          <BookingGygCardContainer>
            <BookingCard
              hotel="kh/le-vert-angkor"
              title="Le Vert Angkor Hotel"
              image={leVertAngkorHotelUrl}
              note="9,2"
              price={30}
              people={2}
            />
          </BookingGygCardContainer>
          <BookingWarning>{t("where-to-stay.part4")}</BookingWarning>
          <p>{t("where-to-stay.part5")}</p>
        </WhereToStay>
        <Baggage title={t("what-to-bring.title")}>
          <p>{t("what-to-bring.part1")}</p>
          <p>{t("what-to-bring.part2")}</p>
          <ul>
            <li>{t("what-to-bring.part3")}</li>
            <li>{t("what-to-bring.part4")}</li>
            <li>{t("what-to-bring.part5")}</li>
            <li>{t("what-to-bring.part6")}</li>
            <li>{t("what-to-bring.part7")}</li>
          </ul>
        </Baggage>
        <Divider />
        <Where title={t("itinerary.title")}>
          <p>{t("itinerary.part1")}</p>
          <p>{t("itinerary.part2")}</p>
          <MapContainer className="mb2 mt3">
            <img src={angkorItinerary} alt="Angkor Wat Itinerary Map" />
          </MapContainer>
          <p>{t("itinerary.part3")}</p>
          <p>{t("itinerary.part4")}</p>
          <p>{t("itinerary.part5")}</p>
          <MenuArticle title={t("menu.title1")}>
            <div>
              <a href="#angkor-wat">{t("menu.title2")}</a>
            </div>
            <div>
              <a href="#angkor-thom">{t("menu.title3")}</a>
            </div>
            <div>
              <a href="#bayon">{t("menu.title4")}</a>
            </div>
            <div>
              <a href="#thommanon">{t("menu.title5")}</a>
            </div>
            <div>
              <a href="#ta-keo">{t("menu.title6")}</a>
            </div>
            <div>
              <a href="#ta-phrom">{t("menu.title7")}</a>
            </div>
          </MenuArticle>
          <MenuArticle title={t("menu1.title1")}>
            <div>
              <a href="#preah-khan">{t("menu1.title2")}</a>
            </div>
            <div>
              <a href="#neak-poan">{t("menu1.title3")}</a>
            </div>
            <div>
              <a href="#ta-som">{t("menu1.title4")}</a>
            </div>
            <div>
              <a href="#mebon-oriental">{t("menu1.title5")}</a>
            </div>
            <div>
              <a href="#pre-rup">{t("menu1.title6")}</a>
            </div>
            <div>
              <a href="#banteay-kdei">{t("menu1.title7")}</a>
            </div>
            <div>
              <a href="#prasat-kravan">{t("menu1.title8")}</a>
            </div>
          </MenuArticle>
          <MenuArticle title={t("menu2.title1")}>
            <div>
              <a href="#bakong">{t("menu2.title2")}</a>
            </div>
          </MenuArticle>
        </Where>
        <Divider />
        <Visit>
          <CambodiaHeadline>{t("visit.title")}</CambodiaHeadline>
          <SectionContent>
            <p>{t("visit.part1")}</p>
            <p>{t("visit.part2")}</p>
            <p>{t("visit.part3")}</p>
            <p>{t("visit.part4")}</p>
            <ImageAsLandscape>
              <R2Image namespace={namespace} name="angkor-wat-hot-air-balloon" aspectRatio={3 / 2} />
            </ImageAsLandscape>
            <p>{t("visit.part5")}</p>
          </SectionContent>
          <Divider />
          <Anchor id="angkor-wat" />
          <section>
            <CambodiaHeadline>{t("visit1.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit1.part1")}</p>
              <p>{t("visit1.part2")}</p>
              <p>{t("visit1.part3")}</p>
              <p>{t("visit1.part4")}</p>
              <p>{t("visit1.part5")}</p>
              <p>{t("visit1.part6")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-wat-temple-towers-palms" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="angkor-wat-wooden-walkway-sanctuary" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="angkor-wat-entrance-staircase-lions" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-wat-staircase-lion-statues" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="angkor-wat-stone-library-pavilion" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="angkor-wat-stone-gallery-tower" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <Panorama>
                  <R2Image namespace={namespace} name="angkor-wat-outer-gallery-courtyard" aspectRatio={3.628} />
                </Panorama>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-wat-apsara-wall-carvings" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="angkor-wat-corbelled-stone-archway" aspectRatio={5 / 9} />
                  <R2Image namespace={namespace} name="angkor-wat-apsara-wall-relief" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-wat-apsara-carvings-relief" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-wat-bas-relief-battle-carvings" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-wat-macaque-monkeys-roof" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="angkor-thom" />
          <section>
            <CambodiaHeadline>{t("visit2.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit2.part1")}</p>
              <p>{t("visit2.part2")}</p>
              <p>{t("visit2.part3")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <SharedCardCambodiaImages image="angkorWat" />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="angkor-thom-stone-face-gate" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-thom-moat-jungle-reflection" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="angkor-thom-asura-statues-causeway" aspectRatio={9 / 16} />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="bayon" />
          <section>
            <CambodiaHeadline>{t("visit3.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit3.part1")}</p>
              <p>{t("visit3.part2")}</p>
              <p>{t("visit3.part3")}</p>
              <p>{t("visit3.part4")}</p>
              <p>{t("visit3.part5")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="bayon-temple-smiling-face-tower" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="bayon-temple-towers-stone-faces" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="bayon-temple-tower-face-carvings" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="bayon-temple-carved-face-closeup" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="bayon-temple-wooden-stairs-tower" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="bayon-apsara-carvings-stone-pillar" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="phimeanakas-temple-stepped-pyramid-ruins" aspectRatio={16 / 9} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="thommanon" />
          <section>
            <CambodiaHeadline>{t("visit4.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit4.part1")}</p>
              <p>{t("visit4.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="angkor-temple-ruins-jungle-clearing" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="angkor-temple-stone-carved-tower" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="angkor-temple-sand-courtyard-pavilions" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="ta-keo" />
          <section>
            <CambodiaHeadline>{t("visit5.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit5.part1")}</p>
              <p>{t("visit5.part2")}</p>
              <p>{t("visit5.part3")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="ta-keo-temple-mountain-pyramid" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="ta-keo-sandstone-temple-terraces" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="ta-keo-stone-staircase-entrance" aspectRatio={9 / 16} />
                </ImageAsPortrait>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="ta-phrom" />
          <section>
            <CambodiaHeadline>{t("visit6.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit6.part1")}</p>
              <p>{t("visit6.part2")}</p>
              <p>{t("visit6.part3")}</p>
              <p>{t("visit6.part4")}</p>
              <p>{t("visit6.part5")}</p>
              <p>{t("visit6.part6")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="ta-prohm-tree-growing-wall" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="ta-prohm-tree-stump-ruins" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="ta-prohm-tree-roots-ruins" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="ta-prohm-lion-guardian-statue" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="ta-prohm-spung-tree-roots" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="ta-prohm-stone-tower-roots" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="preah-khan" />
          <section>
            <CambodiaHeadline>{t("visit7.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit7.part1")}</p>
              <p>{t("visit7.part2")}</p>
              <p>{t("visit7.part3")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="preah-khan-stone-entrance-gopura-tower" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="preah-khan-entrance-stone-causeway" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="preah-khan-tree-roots-ruins" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="preah-khan-headless-statue-guardian" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="preah-khan-headless-sculpture-pedestal" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="preah-khan-deity-bas-relief" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="preah-khan-ruined-corridor-mossy-stone" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="preah-khan-corridor-stone-doorways" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="neak-poan" />
          <section>
            <CambodiaHeadline>{t("visit8.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit8.part1")}</p>
              <p>{t("visit8.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="neak-pean-pond-temple-reflection" aspectRatio={2} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="neak-pean-sacred-pool-reflections" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="neak-pean-palm-tree-pond" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="neak-pean-flooded-reservoir-trees" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="neak-pean-baray-submerged-trees" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="neak-pean-lotus-flower-reflection" aspectRatio={3 / 2} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="neak-pean-stone-shrine-roots" aspectRatio={16 / 9} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="ta-som" />
          <section>
            <CambodiaHeadline>{t("visit9.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit9.part1")}</p>
              <p>{t("visit9.part2")}</p>
              <p>{t("visit9.part3")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="ta-som-gopura-gate-roots" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="ta-som-tree-face-tower" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="ta-som-carved-stone-figures" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="ta-som-courtyard-carved-doorway" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="ta-som-apsara-carving-niche" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="mebon-oriental" />
          <section>
            <CambodiaHeadline>{t("visit10.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit10.part1")}</p>
              <p>{t("visit10.part2")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="east-mebon-stone-elephant-sculpture" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="east-mebon-elephant-statue-towers" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="east-mebon-sanctuary-tower-terrace" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="east-mebon-guardian-lion-statue" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="east-mebon-laterite-balustraded-windows" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="pre-rup" />
          <section>
            <CambodiaHeadline>{t("visit11.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit11.part1")}</p>
              <p>{t("visit11.part2")}</p>
              <GroupOfImages>
                <Panorama>
                  <R2Image namespace={namespace} name="pre-rup-upper-terrace-towers" aspectRatio={3.348} />
                </Panorama>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="pre-rup-dirt-pathway-stone-walls" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="pre-rup-brick-tower-courtyard" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="pre-rup-brick-tower-stone-doorway" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="pre-rup-wooden-walkway-ruined-gateways" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="pre-rup-temple-ruins-overlook" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="pre-rup-temple-jungle-surroundings" aspectRatio={16 / 9} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="banteay-kdei" />
          <section>
            <CambodiaHeadline>{t("visit12.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit12.part1")}</p>
              <p>{t("visit12.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="banteay-kdei-temple-tree-roots" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="banteay-kdei-tree-tower-roots" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="banteay-kdei-sand-courtyard-ruins" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="banteay-kdei-tree-root-ruins" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="banteay-kdei-doorway-stone-corridor" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="banteay-kdei-stone-corridor-pillars" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="banteay-kdei-apsara-dancing-carvings" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="prasat-kravan" />
          <section>
            <CambodiaHeadline>{t("visit13.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit13.part1")}</p>
              <p>{t("visit13.part2")}</p>
              <GroupOfImages>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="prasat-kravan-brick-towers-terrace" aspectRatio={4 / 3} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="prasat-kravan-brick-towers-platform" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="prasat-kravan-red-brick-towers" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="prasat-kravan-brick-tower-corridor" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="prasat-kravan-stone-carved-lintel" aspectRatio={16 / 9} />
                </ImageAsLandscape>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="prasat-kravan-brick-bas-relief-lakshmi" aspectRatio={9 / 16} />
                  <R2Image namespace={namespace} name="prasat-kravan-female-deity-wall-carving" aspectRatio={9 / 16} />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <p>{t("visit13.part3")}</p>
            </SectionContent>
          </section>
          <Divider />
          <Anchor id="bakong" />
          <section>
            <CambodiaHeadline>{t("visit14.title")}</CambodiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit14.part1")}</p>
              <p>{t("visit14.part2")}</p>
              <p>{t("visit14.part3")}</p>
              <p>{t("visit14.part4")}</p>
              <GroupOfImages>
                <ImageAsPortrait>
                  <R2Image namespace={namespace} name="bakong-temple-stone-gopura-entrance" aspectRatio={3 / 4} />
                </ImageAsPortrait>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="bakong-temple-paved-stone-terrace" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="bakong-temple-courtyard-stone-lion" aspectRatio={3 / 4} />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <R2Image namespace={namespace} name="bakong-temple-brick-prasat-tower" aspectRatio={3 / 4} />
                  <R2Image namespace={namespace} name="bakong-temple-devata-sculpture-carving" aspectRatio={2 / 3} />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <R2Image namespace={namespace} name="bakong-temple-devata-brick-niche" aspectRatio={3 / 2} />
                </ImageAsLandscape>
              </GroupOfImages>
            </SectionContent>
          </section>
          <section>
            <Divider />
            <SectionContent>
              <p>{t("visit14.part5")}</p>
              <p>{t("visit14.part6")}</p>
              <p>{t("visit14.part7")}</p>
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
                    <img src={cardFr1} key="cardFr1" alt="Carte Pinterest : Les temples d'Angkor" />,
                    <img src={cardFr2} key="cardFr2" alt="Carte Pinterest : Angkor Wat au lever du soleil" />,
                  ]
                : [
                    <img src={cardEn1} key="cardEn1" alt="Pinterest Card: Angkor Temples" />,
                    <img src={cardEn2} key="cardEn2" alt="Pinterest Card: Angkor Wat Sunrise" />,
                  ],
          }}
        />
      </CambodiaBlogLayout>
    </>
  )
}

export default IndexPage

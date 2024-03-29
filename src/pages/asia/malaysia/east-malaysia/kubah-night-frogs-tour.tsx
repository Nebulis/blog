import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../../components/layout/seo"
import { useCustomTranslation } from "../../../../i18n-hook"
import { Comments } from "../../../../components/core/comments"
import translationFr from "../../../../locales/fr/asia/malaysia/east-malaysia/kubah-night-frogs-tour.json"
import translationEn from "../../../../locales/en/asia/malaysia/east-malaysia/kubah-night-frogs-tour.json"
import { MalaysiaBlogLayout, MalaysiaHeadline, malaysiaPrice } from "../../../../components/core/asia/malaysia/malaysia"
import {
  Baggage,
  Booking,
  HowMuch,
  Introduction,
  SectionContent,
  SectionTitle,
  Visit,
  When,
} from "../../../../components/core/section"
import { Conclusion } from "../../../../components/core/conclusion"
import { Divider } from "../../../../components/core/divider"
import { Quote } from "../../../../components/core/quote"
import HomeImgUrl from "../../../../images/asia/malaysia/east-malaysia/kubah-night-frogs-tour/kubah-night-frogs-tour-main.jpg"
import { Title } from "../../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { SharedCardMalaysiaImages } from "../../../../components/images/asia/malaysia/shared-card-malaysia-images"
import { BookingGygCardContainer, PetitCarreColore, Table } from "../../../../components/layout/layout"
import { TripadvisorCard } from "../../../../components/core/get-your-guide"
import { BookingWarning } from "../../../../components/core/booking"
import { KubahNightFrogsTourImages } from "../../../../components/images/asia/malaysia/east-malaysia/kubah-night-frogs-tour"

const namespace = "asia/malaysia/east-malaysia/kubah-night-frogs-tour"
const id = "kubah-night-frogs-tour"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const Frog = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
    <path
      fill="#9EC767"
      d="M511.999,134.797c-0.161,17.299-15.344,21.571-32.589,21.571c0,0-35.168,32.355-71.282,21.571
	c-36.103-10.785-58.668,112.738-58.668,112.738c-24.735,114.82-88.656,141.038-176.283,141.038H51.21
	C22.919,431.714,0,408.688,0,380.311c0-6.309,0.451-12.521,1.311-18.647c11.347-80.252,94.351-144.413,176.873-189.841
	c68.077-37.467,86.165-89.039,134.161-110.391c5.096-2.267,10.619-3.425,16.197-3.425h1.502
	c4.739-17.46,20.652-30.317,39.553-30.317c22.64,0,40.992,18.432,40.992,41.155c0,0.011,0,0.024,0,0.036
	c-0.001,2.109,1.268,4.008,3.243,4.752l68.103,25.639c8.564,3.213,15.666,8.93,20.641,16.145
	C507.636,122.74,512.074,125.457,511.999,134.797z"
    />
    <path
      fill="#89AD5C"
      d="M329.985,58.005h-1.443c-5.578,0-11.102,1.159-16.198,3.425
	c-47.994,21.354-66.082,72.924-134.16,110.392C95.662,217.25,12.658,281.412,1.311,361.663C0.451,367.79,0,374.003,0,380.311
	c0,28.377,22.919,51.403,51.21,51.403H88.62c-28.292,0-51.21-23.025-51.21-51.403c0-6.308,0.451-12.52,1.311-18.647
	c11.347-80.251,98.003-143.401,177.315-194.216c64.318-41.209,71.884-81.322,119.263-101.3c2.836-1.196,2.926-5.154,0.178-6.541
	C334.122,58.923,332.348,58.336,329.985,58.005z"
    />
    <g>
      <ellipse fill="#F2E5CB" cx="372.025" cy="70.238" rx="22.565" ry="22.649" />
      <path
        fill="#F2E5CB"
        d="M479.41,156.368c0,0-35.168,32.355-71.282,21.571c-36.103-10.785-58.668,112.738-58.668,112.738
		c-24.735,114.82-88.656,141.038-176.283,141.038H51.21C22.919,431.714,0,408.688,0,380.311c0-6.309,0.451-12.521,1.311-18.647
		c19.782-5.047,43.034-6.891,69.606-4.335c145.595,14.02,191.261-22.11,218.661-54.756c27.399-32.648,52.113-176.048,101.003-159.33
		S479.41,156.368,479.41,156.368z"
      />
    </g>
    <path
      fill="#D1C1A1"
      d="M313.022,302.573c23.627-28.153,45.259-138.643,82.114-157.822c-1.509-0.484-3.028-0.986-4.556-1.508
	c-48.89-16.717-73.604,126.682-101.003,159.33c-22.301,26.571-56.709,55.449-147.244,57.716
	C250.578,362.769,288.891,331.323,313.022,302.573z"
    />
    <g>
      <ellipse fill="#5D753F" cx="372.025" cy="68.891" rx="8.084" ry="8.077" />
      <ellipse fill="#5D753F" cx="251.674" cy="164.498" rx="8.292" ry="8.285" />
      <ellipse fill="#5D753F" cx="164.645" cy="229.742" rx="8.292" ry="8.285" />
      <ellipse fill="#5D753F" cx="210.944" cy="195.971" rx="8.292" ry="8.285" />
      <ellipse fill="#5D753F" cx="289.071" cy="181.07" rx="8.292" ry="8.285" />
      <ellipse fill="#5D753F" cx="207.747" cy="251.35" rx="8.292" ry="8.285" />
      <ellipse fill="#5D753F" cx="291.474" cy="133.987" rx="8.084" ry="8.077" />
      <ellipse fill="#5D753F" cx="256" cy="229.742" rx="8.292" ry="8.285" />
    </g>
    <path
      fill="#8AAD5A"
      d="M257.18,471.573v8.767c0,2.194-1.77,3.971-3.956,3.971H141.504C25.659,484.31,0,428.757,0,375.028
	c0-57.968,46.812-104.956,104.565-104.956S209.13,317.061,209.13,375.028c0,48.671-32.413,80.988-32.413,80.988h64.964
	C250.236,456.016,257.18,462.986,257.18,471.573z"
    />
    <path
      fill="#668042"
      d="M21.558,375.028c0-54.316,41.099-98.989,93.786-104.405c-3.543-0.364-7.14-0.552-10.779-0.552
	C46.812,270.072,0,317.061,0,375.028C0,428.756,25.659,484.31,141.504,484.31h21.558C47.217,484.31,21.558,428.756,21.558,375.028z"
    />
    <path
      fill="#9EC767"
      d="M291.367,276.439l23.48,160.8c0.211,2.213,2.063,3.904,4.279,3.904h20.098
	c17.677,0,32.006,14.383,32.006,32.126v4.615c0,3.548-2.866,6.425-6.401,6.425h-75.838c-1.797,0-3.405-1.113-4.036-2.794
	l-57.331-152.589L291.367,276.439z"
    />
    <path
      fill="#89AD5C"
      d="M227.787,329.363l57.167,152.153c0.631,1.68,2.24,2.794,4.036,2.794h19.649l-56.671-149.316
	c-3.706-9.766-15.919-13.006-23.986-6.363l0,0C227.767,328.808,227.688,329.103,227.787,329.363z"
    />
  </svg>
)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.malaysia.card.${id}`)
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
          <SharedCardMalaysiaImages image="kubahNightFrogsTour" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          <p>{t("introduction.part3")}</p>
          <p>{t("introduction.part4")}</p>
        </SectionContent>
        <Divider />
        <Booking title={t("where-to-book.title")}>
          <p>{t("where-to-book.part1")}</p>
          <p>{t("where-to-book.part2")}</p>
          <p>{t("where-to-book.part3")}</p>
          <BookingGygCardContainer>
            <TripadvisorCard
              to="AttractionProductReview-g298309-d11807021-Night_Frogs_Tour_at_Kubah_National_Park-Kuching_Sarawak.html"
              title={
                i18n.languageCode === "fr"
                  ? "Excursion des grenouilles la nuit au parc national de Kubah"
                  : "Night Frogs Tour at Kubah National Park"
              }
              rating={4}
              image="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6a/ed/d2.jpg"
              price={75}
              duration={{ value: 4, unit: "hour" }}
              groupType={"private"}
            />
          </BookingGygCardContainer>
        </Booking>
        <When title={t("when.title")}>
          <p>{t("when.part1")}</p>
          <p>{t("when.part2")}</p>
          <p>{t("when.part3")}</p>
        </When>
        <HowMuch title={t("how-much.title")}>
          <p>{t("how-much.part1")}</p>
          <p>{t("how-much.part2")}</p>
          <p>{t("how-much.part3")}</p>
          <Table className="mb3">
            <thead>
              <tr>
                <th>{i18n.languageCode === "fr" ? "Catégorie" : "Category"}</th>
                <th>{i18n.languageCode === "fr" ? "Prix" : "Price"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Groupe de 2" : "Group of 2"}</td>
                <td>
                  {malaysiaPriceWithLang(340)} {i18n.languageCode === "fr" ? "par personne" : "per person"}
                </td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Groupe de 3" : "Group of 3"}</td>
                <td>
                  {malaysiaPriceWithLang(245)} {i18n.languageCode === "fr" ? "par personne" : "per person"}
                </td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Groupe de 4" : "Group of 4"}</td>
                <td>
                  {malaysiaPriceWithLang(225)} {i18n.languageCode === "fr" ? "par personne" : "per person"}
                </td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Groupe de 5" : "Group of 5"}</td>
                <td>
                  {malaysiaPriceWithLang(210)} {i18n.languageCode === "fr" ? "par personne" : "per person"}
                </td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Groupe de 6" : "Group of 6"}</td>
                <td>
                  {malaysiaPriceWithLang(190)} {i18n.languageCode === "fr" ? "par personne" : "per person"}
                </td>
              </tr>
              <tr>
                <td>{i18n.languageCode === "fr" ? "Enfant (6-11 ans)" : "Child (6-11 years)"}</td>
                <td>{malaysiaPriceWithLang(170)}</td>
              </tr>
            </tbody>
          </Table>
          <BookingWarning>{t("how-much.part4")}</BookingWarning>
        </HowMuch>
        <Baggage title={t("baggage.title")}>
          <ul>
            <li>{t("baggage.part1")}</li>
            <li>{t("baggage.part2")}</li>
            <li>{t("baggage.part3")}</li>
            <li>{t("baggage.part4")}</li>
            <li>{t("baggage.part5")}</li>
          </ul>
          <p>{t("baggage.part6")}</p>
        </Baggage>
        <Visit title={t("visit.title")}>
          {/* just to have the correct space*/}
          <SectionContent />
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part1.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part1.part1")}</p>
              <p>{t("visit.part1.part2")}</p>
              <p>{t("visit.part1.part3")}</p>
              <Table className="mb3">
                <thead>
                  <tr>
                    <th>{i18n.languageCode === "fr" ? "Nom du trek" : "Trek Name"}</th>
                    <th>{i18n.languageCode === "fr" ? "Temps aller simple" : "One-way trek time"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Waterfall Trail</td>
                    <td>1h30</td>
                  </tr>
                  <tr>
                    <td>Rayu Trail</td>
                    <td>3h30</td>
                  </tr>
                  <tr>
                    <td>Main Trail</td>
                    <td>1h15</td>
                  </tr>
                  <tr>
                    <td>Selang Trail</td>
                    <td>1h</td>
                  </tr>
                  <tr>
                    <td>Summit Trail</td>
                    <td>3h30</td>
                  </tr>
                  <tr>
                    <td>Palmetum</td>
                    <td>30min</td>
                  </tr>
                  <tr>
                    <td>Belian Trail</td>
                    <td>40min</td>
                  </tr>
                </tbody>
              </Table>
              <p>{t("visit.part1.part4")}</p>
              <ImageAsPortrait>
                <KubahNightFrogsTourImages image="map" />
              </ImageAsPortrait>
              <p>{t("visit.part1.part5")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part2.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part2.part1")}</p>
              <p>{t("visit.part2.part2")}</p>
              <p>{t("visit.part2.part3")}</p>
              <p>{t("visit.part2.part4")}</p>
              <p>{t("visit.part2.part5")}</p>
              <p>{t("visit.part2.part6")}</p>
              <p>{t("visit.part2.part7")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="microhyla" />
                  <KubahNightFrogsTourImages image="microhyla2" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <KubahNightFrogsTourImages image="microhyla3" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit.part2.part8")}</p>
              <p>{t("visit.part2.part9")}</p>
              <p>{t("visit.part2.part10")}</p>
              <TwoImagesSameSizeOrToGroup>
                <KubahNightFrogsTourImages image="eggs" />
                <KubahNightFrogsTourImages image="eggs2" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.part2.part11")}</p>
              <p>{t("visit.part2.part12")}</p>
              <p>{t("visit.part2.part13")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part3.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <SectionTitle>{t("visit.part3.part1.title")}</SectionTitle>
              <p>{t("visit.part3.part1.part1")}</p>
              <TwoImagesSameSizeOrToGroup>
                <KubahNightFrogsTourImages image="peatSwampFrog" />
                <KubahNightFrogsTourImages image="peatSwampFrog2" />
              </TwoImagesSameSizeOrToGroup>
              <SectionTitle>{t("visit.part3.part2.title")}</SectionTitle>
              <p>{t("visit.part3.part2.part1")}</p>
              <TwoImagesSameSizeOrToGroup>
                <KubahNightFrogsTourImages image="fileEaredTreeFrog" />
                <KubahNightFrogsTourImages image="fileEaredTreeFrog2" />
              </TwoImagesSameSizeOrToGroup>
              <SectionTitle>{t("visit.part3.part3.title")}</SectionTitle>
              <p>{t("visit.part3.part3.part1")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="longNosedHornedFrog" />
                  <KubahNightFrogsTourImages image="longNosedHornedFrog2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="longNosedHornedFrog3" />
                  <KubahNightFrogsTourImages image="longNosedHornedFrog4" />
                </TwoImagesSameSizeOrToGroup>
              </GroupOfImages>
              <SectionTitle>{t("visit.part3.part4.title")}</SectionTitle>
              <p>{t("visit.part3.part4.part1")}</p>
              <TwoImagesSameSizeOrToGroup>
                <KubahNightFrogsTourImages image="mahoganyFrog" />
                <KubahNightFrogsTourImages image="mahoganyFrog2" />
              </TwoImagesSameSizeOrToGroup>
              <p>{t("visit.part3.part4.part2")}</p>
              <p>{t("visit.part3.part4.part3")}</p>
              <p>{t("visit.part3.part4.part4")}</p>
              <p>{t("visit.part3.part4.part5")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="frog" />
                  <KubahNightFrogsTourImages image="frog2" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="frog3" />
                  <KubahNightFrogsTourImages image="frog4" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="frog5" />
                  <KubahNightFrogsTourImages image="frog6" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="frog7" />
                  <KubahNightFrogsTourImages image="frog8" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsPortrait>
                  <KubahNightFrogsTourImages image="frog9" />
                </ImageAsPortrait>
              </GroupOfImages>
              <p>{t("visit.part3.part4.part6")}</p>
              <p>{t("visit.part3.part4.part7")}</p>
              <GroupOfImages>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="frog10" />
                  <KubahNightFrogsTourImages image="frog11" />
                </TwoImagesSameSizeOrToGroup>
                <TwoImagesSameSizeOrToGroup>
                  <KubahNightFrogsTourImages image="frog12" />
                  <KubahNightFrogsTourImages image="frog13" />
                </TwoImagesSameSizeOrToGroup>
                <ImageAsLandscape>
                  <KubahNightFrogsTourImages image="frog14" />
                </ImageAsLandscape>
              </GroupOfImages>
              <p>{t("visit.part3.part4.part8")}</p>
              <ImageAsPortrait>
                <KubahNightFrogsTourImages image="frog15" />
              </ImageAsPortrait>
              <p>{t("visit.part3.part4.part9")}</p>
              <p>{t("visit.part3.part4.part10")}</p>
              <p>{t("visit.part3.part4.part11")}</p>
            </SectionContent>
          </section>
          <Divider />
          <section>
            <MalaysiaHeadline>{t("visit.part4.title")}</MalaysiaHeadline>
            <Divider />
            <SectionContent>
              <p>{t("visit.part4.part1")}</p>
              <p>{t("visit.part4.part2")}</p>
              <p>{t("visit.part4.part3")}</p>
              <PetitCarreColore>
                <p className="b ttu">{t("visit.part4.part4")}</p>
                <p>{t("visit.part4.part5")}</p>
                <p>{t("visit.part4.part6")}</p>
                <p>{t("visit.part4.part7")}</p>
                <p>{t("visit.part4.part8")}</p>
                <p>{t("visit.part4.part9")}</p>
                <p>
                  <Frog />
                </p>
              </PetitCarreColore>
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
                    <KubahNightFrogsTourImages image="cardFr1" key="cardFr1" />,
                    <KubahNightFrogsTourImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <KubahNightFrogsTourImages image="cardEn1" key="cardEn1" />,
                    <KubahNightFrogsTourImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </MalaysiaBlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../components/layout/seo"
import { useCustomTranslation } from "../../i18n-hook"
import { Comments } from "../../components/core/comments"
import translationFr from "../../locales/fr/animals/orangutan.json"
import translationEn from "../../locales/en/animals/orangutan.json"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { Introduction, Note, titleBuilder } from "../../components/core/section"
import { Conclusion } from "../../components/core/conclusion"
import { Divider } from "../../components/core/divider"
import { Quote } from "../../components/core/quote"
import { Title } from "../../components/core/title"
import HomeImgUrl from "../../images/animals/orangutan/orangutan-main.jpg"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSizeOrToGroup,
} from "../../components/images/layout"
import { SharedAnimalsImages } from "../../components/images/animals/shared-animals-images"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { OrangutanImages } from "../../components/images/animals/orangutan"
import { ExternalLinkNotUnderlined } from "../../components/core/links/link"
import { buildPixabayUrl } from "../../utils"
import {
  FaApple,
  FaArrowsAltV,
  FaBaby,
  FaBookOpen,
  FaCommentDots,
  FaGlobeAfrica,
  FaHistory,
  FaHourglassEnd,
  FaRadiationAlt,
  FaTheaterMasks,
  FaTree,
  FaWeightHanging,
} from "react-icons/fa"
import { GiWolfHowl } from "react-icons/gi"

const namespace = "animals/orangutan"
const id = "orangutan"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const CustomList = styled.ul`
  margin-bottom: 0.5rem;
  li {
    list-style-type: "➵ ";
  }
`

export const Description = titleBuilder({ icon: FaCommentDots, translationKey: "todo" })
export const Height = titleBuilder({ icon: FaArrowsAltV, translationKey: "todo" })
export const Weight = titleBuilder({ icon: FaWeightHanging, translationKey: "todo" })
export const Food = titleBuilder({ icon: FaApple, translationKey: "todo" })
export const Baby = titleBuilder({ icon: FaBaby, translationKey: "todo" })
export const Lifestyle = titleBuilder({ icon: FaTree, translationKey: "todo" })
export const Lifespan = titleBuilder({ icon: FaHourglassEnd, translationKey: "todo" })
export const Behaviour = titleBuilder({ icon: FaTheaterMasks, translationKey: "todo" })
export const Education = titleBuilder({ icon: FaBookOpen, translationKey: "todo" })
export const Distribution = titleBuilder({ icon: FaGlobeAfrica, translationKey: "todo" })
export const Threat = titleBuilder({ icon: FaRadiationAlt, translationKey: "todo" })
export const Predator = titleBuilder({ icon: GiWolfHowl, translationKey: "todo" })
export const Future = styled(titleBuilder({ icon: FaHistory, translationKey: "todo" }))`
  svg {
    transform: scaleX(-1);
  }
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:animals.${id}`)

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
      <PrimaryBlogLayoutWithDrawer page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedAnimalsImages image="homeOrangutan" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <Description title={t("description.title")}>
          <p>{t("description.part1")}</p>
          <p>{t("description.part2")}</p>
          <p>{t("description.part3")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <OrangutanImages image="description" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="description2" />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>{t("description.part4")}</p>
          <ImageAsLandscape>
            <OrangutanImages image="description3" />
          </ImageAsLandscape>
        </Description>
        <Height title={t("size.title")}>
          <p>{t("size.part1")}</p>
          <p>{t("size.part2")}</p>
        </Height>
        <Weight title={t("weight.title")}>
          <p>{t("weight.part1")}</p>
        </Weight>
        <Lifespan title={t("lifespan.title")}>
          <p>{t("lifespan.part1")}</p>
          <p>{t("lifespan.part2")}</p>
        </Lifespan>
        <Distribution title={t("distribution.title")}>
          <p>{t("distribution.part1")}</p>
          <ul>
            <li>{t("distribution.part2")}</li>
            <li>{t("distribution.part3")}</li>
            <li>{t("distribution.part4")}</li>
          </ul>
          <p>{t("distribution.part5")}</p>
          <p>{t("distribution.part6")}</p>
          <p>{t("distribution.part7")}</p>
          <CustomList>
            <li>{t("distribution.part8")}</li>
            <li>{t("distribution.part9")}</li>
          </CustomList>
          <p>{t("distribution.part10")}</p>
          <CustomList>
            <li>{t("distribution.part11")}</li>
            <li>{t("distribution.part12")}</li>
          </CustomList>
          <GroupOfImages>
            <ImageAsLandscape>
              <OrangutanImages image="distribution" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="distribution2" />
            </ImageAsLandscape>
          </GroupOfImages>
        </Distribution>
        <Food title={t("diet.title")}>
          <p>{t("diet.part1")}</p>
          <p>{t("diet.part2")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <OrangutanImages image="diet" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="diet2" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="diet3" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="diet4" />
            </ImageAsLandscape>
          </GroupOfImages>
        </Food>
        <Lifestyle title={t("lifestyle.title")}>
          <p>{t("lifestyle.part1")}</p>
          <p>{t("lifestyle.part2")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <OrangutanImages image="lifestyle" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="lifestyle2" />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>{t("lifestyle.part3")}</p>
          <p>{t("lifestyle.part4")}</p>
          <p>{t("lifestyle.part5")}</p>
          <p>{t("lifestyle.part6")}</p>
          <GroupOfImages>
            <ImageAsPortrait>
              <OrangutanImages image="lifestyle3" />
            </ImageAsPortrait>
            <ImageAsLandscape>
              <OrangutanImages image="lifestyle4" />
            </ImageAsLandscape>
          </GroupOfImages>
        </Lifestyle>
        <Behaviour title={t("behaviour.title")}>
          <p>{t("behaviour.part1")}</p>
          <p>{t("behaviour.part2")}</p>
          <CustomList>
            <li>{t("behaviour.part3")}</li>
            <li>{t("behaviour.part4")}</li>
            <li>{t("behaviour.part5")}</li>
            <li>{t("behaviour.part6")}</li>
            <li>{t("behaviour.part7")}</li>
          </CustomList>
          <p>{t("behaviour.part8")}</p>
          <p>{t("behaviour.part9")}</p>
          <p>{t("behaviour.part10")}</p>
        </Behaviour>
        <Baby title={t("reproduction.title")}>
          <p>{t("reproduction.part1")}</p>
          <p>{t("reproduction.part2")}</p>
          <p>{t("reproduction.part3")}</p>
          <p>{t("reproduction.part4")}</p>
          <p>{t("reproduction.part5")}</p>
          <p>{t("reproduction.part6")}</p>
        </Baby>
        <Education title={t("development.title")}>
          <p>{t("development.part1")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <OrangutanImages image="development" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="development2" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="development3" />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>{t("development.part2")}</p>
          <p>{t("development.part3")}</p>
          <p>{t("development.part4")}</p>
          <p>{t("development.part5")}</p>
          <p>{t("development.part6")}</p>
          <ImageAsLandscape>
            <OrangutanImages image="development4" />
          </ImageAsLandscape>
          <p>{t("development.part7")}</p>
        </Education>
        <Predator title={t("predator.title")}>
          <p>{t("predator.part1")}</p>
          <p>{t("predator.part2")}</p>
        </Predator>
        <Threat title={t("threat.title")}>
          <p>{t("threat.part1")}</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <OrangutanImages image="threat" />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <OrangutanImages image="threat2" />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>{t("threat.part2")}</p>
          <p>{t("threat.part3")}</p>
          <p>{t("threat.part4")}</p>
          <p>{t("threat.part5")}</p>
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/pixel-mixer-1197643")}>
                pixel-mixer
              </ExternalLinkNotUnderlined>
            }
          >
            <OrangutanImages image="threat3" />
          </ImageAsLandscape>
        </Threat>
        <Future title={t("future.title")}>
          <p>{t("future.part1")}</p>
          <p>{t("future.part2")}</p>
          <p>{t("future.part3")}</p>
          <p>{t("future.part4")}</p>
          <p>{t("future.part5")}</p>
          <TwoImagesSameSizeOrToGroup>
            <OrangutanImages image="future" />
            <OrangutanImages image="future2" />
          </TwoImagesSameSizeOrToGroup>
          <p>{t("future.part6")}</p>
          <p>{t("future.part7")}</p>
          <p>{t("future.part8")}</p>
          <TwoImagesSameSizeOrToGroup>
            <OrangutanImages image="future3" />
            <OrangutanImages image="future4" />
          </TwoImagesSameSizeOrToGroup>
          <p>{t("future.part9")}</p>
          <p>{t("future.part10")}</p>
          <Note>{t("future.part11")}</Note>
          <Divider />
          <p>{t("future.part12")}</p>
          <div className="tc">
            <iframe
              css={css`
                max-width: 560px;
              `}
              width="100%"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${
                i18n.languageCode === "fr" ? "7lM0HLdDmXc" : "TQQXstNh45g"
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <Note>
              {i18n.languageCode === "fr"
                ? "En lançant la vidéo, vous acceptez les règles de confidentialité des données de Google / YouTube"
                : "By clicking on the video start button, you accept the data privacy rules of Google / YouTube"}
            </Note>
          </div>
        </Future>
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
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [<OrangutanImages image="cardFr1" key="cardFr1" />, <OrangutanImages image="cardFr2" key="cardFr1" />]
                : [
                    <OrangutanImages image="cardEn1" key="cardEn1" />,
                    <OrangutanImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

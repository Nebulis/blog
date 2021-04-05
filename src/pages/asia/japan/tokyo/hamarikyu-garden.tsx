import React from "react"
import SEO from "../../../../components/layout/seo"
import { How, HowMuch, Visit, When, Where } from "../../../../components/core/section"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { HamarikyuGardenBuilding1Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenBuilding1Image"
import { HamarikyuBird1Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuBird1Image"
import { HamarikyuBird2Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuBird2Image"
import { HamarikyuGardenCherry1Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenCherry1Image"
import { HamarikyuGardenCherry2Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenCherry2Image"
import { HamarikyuGardenBuilding2Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenBuilding2Image"
import { css } from "@emotion/react"
import { HamarikyuGardenColzaImage } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenColzaImage"
import { HamarikyuGardenJungleImage } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenJungleImage"
import { HamarikyuGardenBankImage } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenBankImage"
import { Conclusion } from "../../../../components/core/conclusion"
import { HamarikyuGardenCherry3Image } from "../../../../components/images/asia/japan/tokyo/hamarikyu/hamarikyuGardenCherry3Image"
import { HamarikyuGardenQuote, JapanBlogLayout, JapanLink, JapanTitle } from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedCardJapanImages } from "../../../../components/images/asia/japan/shared-card-japan-images"
import { useCustomTranslation } from "../../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/tokyo/hamarikyu-garden.json"
import translationEn from "../../../../locales/en/asia/japan/tokyo/hamarikyu-garden.json"
import HomeImgUrl from "../../../../images/asia/japan/tokyo/hamarikyu/hamarikyu-garden-main.jpg"

const namespace = "asia/japan/tokyo/hamarikyu-garden"
const id = "hamarikyu-garden"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t } = useCustomTranslation([namespace, "common"])
  const title = t(`common:country.japan.card.${id}`)
  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <JapanBlogLayout page={id} location={location}>
        <JapanTitle title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedCardJapanImages image="hamarikyuGarden" />
        </ImageAsLandscape>
        <HamarikyuGardenQuote />
        <Where>1-1 Hamarikyuteien, Chuo City, Tokyo</Where>
        <When>
          <p>Tous les jours de 9h à 17h</p>
        </When>
        <How>
          Depuis Tokyo Station, plusieurs choix :
          <ul>
            <li>Keihintohoku Line, Yamanote Line ou Tokaido Line</li>
          </ul>
          <p>
            Descendre à Shimbashi Station entre 3 et 6 mins de train, avec un nombre d&apos;arrêt dépendant de la ligne
            que vous aurez pris. Ensuite 10 à 15 mins de marche.
          </p>
          <p>
            Il est possible de prendre le bus 01 en sortant de Shimbashi Station pour se rapprocher à 5 mins du jardin.
          </p>
          <small>
            <JapanLink action="hide" to="transport-japan">
              Plus d’information sur les transports.
            </JapanLink>
          </small>
        </How>
        <HowMuch>Gratuit</HowMuch>
        <Visit>
          <p>
            L’entrée est impressionnante tant par son contraste entre l’énorme circulation des routes qu’il y a autour
            et le calme soudain une fois que vous êtes dans le parc.
          </p>
          <ImageAsPortrait>
            <HamarikyuGardenBuilding1Image />
          </ImageAsPortrait>
          <p>
            On ressent une atmosphère différente à chaque endroit. Il y a des chemins en peu partout, on se retrouve
            avec des gens et d’un coup seul au monde.
          </p>
          <TwoImagesSameSize>
            <HamarikyuBird1Image />
            <HamarikyuBird2Image />
          </TwoImagesSameSize>
          <p>
            Entre les chemins en terre et les chemins en gravier, se dessinent devant vos yeux des paysages différents
            au fur et à mesure que vous vous y aventurez.
          </p>
          <p>Le lac avec en son centre un restaurant.</p>
          <p>Le petit spot à cerisiers.</p>
          <GroupOfImages>
            <TwoImagesSameSizeOrToGroup>
              <HamarikyuGardenCherry1Image />
              <HamarikyuGardenCherry2Image />
            </TwoImagesSameSizeOrToGroup>
            <ImageAsPortrait>
              <HamarikyuGardenBuilding2Image
                css={css`
                  max-width: 450px;
                `}
              />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>La végétation soudainement intense en plein milieu.</p>
          <p>Le champ de colza.</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <HamarikyuGardenColzaImage />
            </ImageAsLandscape>
            <TwoImagesSameSizeOrToGroup>
              <HamarikyuGardenJungleImage />
              <HamarikyuGardenBankImage />
            </TwoImagesSameSizeOrToGroup>
          </GroupOfImages>
          <p>Que d’endroits qui apaisent en un rien de temps et qui nous font partir du Japon avec tant d’émotions.</p>
        </Visit>
        <Conclusion>Quel plaisir de trouver un endroit au calme dans cette frénésie qu&apos;est Tokyo.</Conclusion>
        <ImageAsPortrait>
          <HamarikyuGardenCherry3Image />
        </ImageAsPortrait>
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

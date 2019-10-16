import React from "react"
import { Header } from "../../../../components/layout/header"
import { Maintenance } from "../../../../components/layout/maintenance"
import SEO from "../../../../components/layout/seo"
import { JapanTitle } from "../../../../components/core/title"
import { Menu } from "../../../../components/layout/menu"
import { MainFushimiImage } from "../../../../components/images/asia/japan/kyoto/fushimi/mainFushimiImage"
import { JapanQuote } from "../../../../components/core/quote"
import { Where, When, How, HowLong, HowMuch, WhereToStay, Visit } from "../../../../components/core/section"
import { JapanLink, JapanExternalLink } from "../../../../components/core/link"
import {
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
  GroupOfImages,
} from "../../../../components/images/layout"
import { FushimiTorii1Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiTorii1Image"
import { css } from "@emotion/core"
import { FushimiTorii2Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiTorii2Image"
import { FushimiTemple1Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiTemple1Image"
import { FushimiTemple2Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiTemple2Image"
import { FushimiWaterImage } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiWaterImage"
import { FushimiKomainu2Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiKomainu2Image"
import { FushimiKomainu1Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiKomainu1Image"
import { Conclusion } from "../../../../components/core/conclusion"
import { FushimiTorii3Image } from "../../../../components/images/asia/japan/kyoto/fushimi/fushimiTorii3Image"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <Maintenance>{typeof window !== `undefined` ? <Content /> : null}</Maintenance>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Header />
      <Menu />
      <div className="center blog-container">
        <JapanTitle title="FUSHIMI INARI TAISHA" categories={["asie", "japon", "kyoto"]} />
        <MainFushimiImage />
        <JapanQuote>
          Le sanctuaire est surtout connu pour ses quelques milliers de Torii Vermillon qui crée un chemin dans une
          forêt remplie de pins.{" "}
        </JapanQuote>
        <Where>68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto</Where>
        <When>
          <p>Tous les jours 24h/24h.</p>
          <p>
            Plutôt tôt le matin ou le soir pour éviter le monde. Nous y étions allés en fin de matinée, c'était noir de
            monde, impossible de faire des photos ou de se promener sans se faire bousculer, éviter les heures de pointe
            en haute saison du coup.
          </p>
        </When>
        <How>
          Depuis la plupart des grandes villes il est possible de se rendre à Kyoto en Shinkansen.
          <ul>
            <li>Depuis Tokyo environ 2h30</li>
            <li>Depuis Himeji environ 1h</li>
            <li>Depuis Nagoya environ 1h</li>
            <small>
              <JapanLink to="/asia/japan/transports">Plus d’information sur les transports.</JapanLink>
            </small>
          </ul>
          <p>
            Depuis la gare de Kyoto, prendre la Nara Line jusqu’à Inari Station (5mins - 2 arrêts). Attention tous les
            trains ne s'y arrêtent pas{" "}
            <JapanExternalLink href="https://www.westjr.co.jp/global/en/timetable/">
              (Vérifier quel train prendre)
            </JapanExternalLink>
            . Une fois à la gare, prenez la seule sortie et vous serez juste en face de Fushimi Inari Taisha.
          </p>
        </How>
        <HowLong>Environ 4h si vous comptez faire la randonnée.</HowLong>
        <HowMuch>Gratuit</HowMuch>
        <WhereToStay location="à Kyoto, près de Fushimi Inari Taisha">
          <p>
            Comme déjà expliqué dans nos autres articles sur Kyoto, nous sommes toujours effaré par les prix des hôtels
            surtout pour une nuit, cela dit au moins près de Fushimi il y en a et ils ont l’air tous plutôt pas mal,
            c’est déjà ça.
          </p>
          <p>
            Parce qu’on a quand même mis du temps à chercher à Kyoto, un véritable casse tête qu’on se le dise ! Si vous
            cherchez du traditionnel les prix montent très vite, si vous ne cherchez pas trop cher, ça devient vite
            n’importe quoi. Le logement au Japon un vrai investissement sur vos vacances.
          </p>
          <p>
            <small>
              <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Kyoto%2C+Kyoto%2C+Japon">
                Trouver un hôtel vers Fushimi.
              </JapanExternalLink>
            </small>
          </p>
        </WhereToStay>
        <Visit>
          <p>
            Sorti du train nous voici à la gare, pas de chance pour nous, c’est le seul jour où il pleut depuis notre
            arrivée au Japon, quelle galère quand on sait qu’on peut faire une randonnée de 2h environ dans la forêt.
          </p>
          <p>
            La pluie n’a cela dit pas empêché les gens de venir, nous y compris. Le soleil va bien réapparaître à un
            moment donné, on y croit !
          </p>
          <ImageAsLandscape>
            <FushimiTorii1Image />
          </ImageAsLandscape>
          <p>
            La visite commence donc en bas de la colline, où un premier temple nous apparaît, ici y est concentré toute
            la foule qui attend que la pluie cesse. On peut malgré tout voir quelques personnes prier.
          </p>
          <p>Sur notre gauche il y a quelques boutiques de souvenirs.</p>
          <p>On suit le chemin en ayant un peu peur de se perdre à vrai dire tellement l’endroit à l’air immense.</p>
          <ImageAsPortrait
            css={css`
              max-width: 800px;
            `}
          >
            <FushimiTorii2Image />
          </ImageAsPortrait>
          <ImageAsLandscape>
            <FushimiTemple1Image />
          </ImageAsLandscape>
          <p>Nous suivons les escaliers depuis le pied de la colline.</p>
          <p>
            Avant de passer en dessous des Torii, on croise quelques monuments pour prier et se purifier. Avant d’entrer
            dans un temple il serait coutume de se laver les mains et la bouche.
          </p>
          <TwoImagesSameSizeOrToGroup>
            <FushimiTemple2Image />
            <FushimiWaterImage />
          </TwoImagesSameSizeOrToGroup>
          <p>
            La promenade commence avec un grand nombre de marches puis de chemins. Autour de vous ces célèbres Torii,
            quelques sanctuaires visibles de temps en temps, des lieux pour se reposer ou admirer la vue.
          </p>
          <p>
            On croise également des statues de pierres qui sont dissimulés un peu partout. Appelé Komainu, elles sont
            généralement représentés sous forme de renard “Kitsune” avec son foulard rouge. D’après l’histoire ces
            statues monteraient la garde et éloignerait les mauvais esprits.
          </p>
          <p>
            Vous n’êtes pas obligé de faire la randonnée, l’endroit est déjà prestigieux et rien qu’en vous promenant
            près du temple, vous y découvrirez pleins de petits endroits.
          </p>
          <GroupOfImages>
            <TwoImagesSameSize>
              <FushimiKomainu1Image />
              <FushimiKomainu2Image />
            </TwoImagesSameSize>
            <ImageAsPortrait
              css={css`
                max-width: 800px;
              `}
            >
              <FushimiTorii3Image />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>
            Nous n’avons malheureusement pas pu prendre de photos sous les Torii car c’était noir de monde, nous vous
            renvoyons vers{" "}
            <JapanExternalLink href="https://travelswithnano.com/2016/05/18/fushimi-inari-taisha-kyoto/">
              Travels With Nano
            </JapanExternalLink>{" "}
            (blog en anglais) qui a fait de superbes photos de cet endroit.
          </p>
          <p>
            Nous y retournerons certainement à une période moins touristique, et en essayant d’avoir un peu plus de
            chance sur la météo cette fois-ci. Nous sommes restés un peu sur notre faim.
          </p>
        </Visit>
        <Conclusion>
          Les Torii seraient, pour la plupart, des dons fait par des particuliers ou des entreprises. Leur nom ainsi que
          la date de pose y serait indiqué sur chacun d’eux.
        </Conclusion>
      </div>
    </>
  )
}

export default IndexPage

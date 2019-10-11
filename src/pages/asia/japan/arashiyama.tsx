import React from "react"
import { Link } from "gatsby"
import { Header } from "../../../components/layout/header"
import { Maintenance } from "../../../components/layout/maintenance"
import SEO from "../../../components/layout/seo"
import css from "@emotion/css"
import { JapanQuote } from "../../../components/core/quote"
import { Where, When, How, HowLong, HowMuch, WhereToStay, Visit } from "../../../components/core/section"
import { JapanTitle } from "../../../components/core/title"
import { MainArashiyamaImage } from "../../../components/images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { JapanLink, JapanExternalLink } from "../../../components/core/link"
import { HimejiGyuKaku } from "../../../components/images/asia/japan/himeji/castle/himejiGyukaku"
import {
  ImageAsPortrait,
  TwoImagesSameSize,
  adaptiveImageMarginBottom,
  ImageAsLandscape,
  TwoImagesLeftBigger,
} from "../../../components/images/layout"
import { ArashiyamaTuktukImage } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaTuktukImage"
import { HimejiCastleWithCherry2Image } from "../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry2Image"
import { HimejiCastleWithCherry3Image } from "../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry3Image"
import { ArashiyamaGeishaImage } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaGeishaImage"
import { ArashiyamaPathTuktukImage } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaPathTuktukImage"
import { ArashiyamaSkyBamboo1Image } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaSkyBamboo1Image"
import { ArashiyamaSkyBamboo2Image } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaSkyBamboo2Image"
import { HimejiCastle1Image } from "../../../components/images/asia/japan/himeji/castle/himejiCastle1Image"
import { ArashiyamaSkyBamboo3Image } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaSkyBamboo3Image"
import { EntranceHimejiCastleImage } from "../../../components/images/asia/japan/himeji/castle/entranceHimejiCastleImage"
import { ArashiyamaBambooImage } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaBambooImage"
import { HimejiCastle2Image } from "../../../components/images/asia/japan/himeji/castle/himejiCastle2Image"
import { HimejiCastleWithTreeImage } from "../../../components/images/asia/japan/himeji/castle/himejiCastleWithTreeImage"
import { ArashiyamaShrine1Image } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaShrine1Image"
import { ArashiyamaShrine2Image } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaShrine2Image"
import { HimejiCastle3Image } from "../../../components/images/asia/japan/himeji/castle/himejiCastle3Image"
import { ArashiyamaCherryImage } from "../../../components/images/asia/japan/kyoto/arashiyama/arashiyamaCherryImage"

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
      <div
        css={css`
          height: 60px;
          background-color: #ffe1e7;
        `}
      />
      <div className="center blog-container">
        <JapanTitle title="ARASHIYAMA – Forêt de bambous" categories={["asie", "japon", "kyoto"]} />
        <MainArashiyamaImage />
        <JapanQuote>
          Le bambou serait capable de repousser les mauvais esprits, il représenterait la force et la prospérité.{" "}
        </JapanQuote>
        <Where>Ukyo Ward, Kyoto</Where>
        <When>
          <p>Tous les jours 24h/24h.</p>
          <p>Plutôt tôt le matin ou au coucher du soleil pour éviter le monde.</p>
        </When>
        <How>
          Depuis la plupart des grandes villes il est possible de se rendre à Kyoto en Shinkansen.
          <ul>
            <li>Depuis Tokyo environ 2h30</li>
            <li>Depuis Himeji environ 1h</li>
            <li>Depuis Nagoya environ 1h</li>
            <small>
              Plus d’information sur les transports <JapanLink to="/asia/japan/transports">ici</JapanLink>.
            </small>
          </ul>
          <p>
            Depuis la gare de Kyoto, prendre la San-In Line jusqu’à Saga-Arashiyama Station (17mins – 7 arrêts). Prendre
            la sortie sud de la gare, puis se diriger vers l'ouest pendant environ 10mins. On arrive sur une rue où se
            trouvent plusieurs restaurants, il suffit de traverser et l’entrée se situe sur votre gauche (direction
            sud).
          </p>
        </How>
        <HowLong>Environ 2h.</HowLong>
        <HowMuch>Gratuit</HowMuch>
        <WhereToStay>
          <p>
            Kyoto est particulièrement cher de ce que nous avons pu voir. Partez sur un minimum de 100€ voir 200€ par
            nuit. Vérifiez bien les hôtels, on trouve un peu de tout et pas forcément très bien indiqué (des hôtels avec
            chambre commune ou salle de bains commune mais indiqué en tout petit, lisez bien !). Vérifiez aussi les
            chambres fumeurs et non-fumeurs.
          </p>
          <p>
            Pour trouver un hôtel à Kyoto{" "}
            <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Kyoto%2C+Kyoto%2C+Japon">
              ICI
            </JapanExternalLink>
          </p>
        </WhereToStay>
        <Visit>
          <p>
            Arrivé à la gare, on cherche notre chemin. Autant dire que même si vous ne savez pas où aller il suffit de
            suivre les gens, ce n’est pas bien compliqué.
          </p>
          <p>
            On marche pendant une dizaine de minutes dans des rues habitées avec quelques jolies façades, quelques
            jardins fleuries de cerisiers et temples.
          </p>
          <TwoImagesLeftBigger css={adaptiveImageMarginBottom}>
            <ArashiyamaShrine1Image />
            <ArashiyamaShrine2Image />
          </TwoImagesLeftBigger>
          <ImageAsPortrait css={adaptiveImageMarginBottom}>
            <ArashiyamaCherryImage />
          </ImageAsPortrait>
          <p>Au bout de la rue, nous arrivons dans une rue animée où il y a déjà pas mal de mondes.</p>
          <p>
            Pour entrer dans le chemin d’Arashiyama vous pouvez y aller à pied ou en pousse-pousse. On a vu que
            certaines personnes disaient qu’on pouvait le faire en vélo, en tout cas à la période où nous y étions
            c’était interdit, peut-être dû au monde ce jour-là.
          </p>
          <ImageAsPortrait>
            <ArashiyamaTuktukImage />
          </ImageAsPortrait>
          <p>
            Malgré le monde, l’ambiance est apaisante. Lorsque le vent souffle, on peut entendre les bambous se cogner
            les uns les autres, un moment unique.
          </p>
          <p>
            En voyant le monde au début, on se disait que nous allions avoir du mal à profiter, et finalement l’instant
            est si magique et nous n’avions jamais vu ça ailleurs qu’on en oublie presque les gens.
          </p>
          <TwoImagesSameSize>
            <ArashiyamaPathTuktukImage />
            <ArashiyamaGeishaImage />
          </TwoImagesSameSize>
          <p>
            Le chemin se rétrécit de plus en plus. Les bambous, hauts de plusieurs dizaines de mètres, se dressent
            devant vous et laissent passer juste un filet de lumière du soleil. La météo est clairement un véritable
            plus.
          </p>
          <TwoImagesSameSize css={adaptiveImageMarginBottom}>
            <ArashiyamaSkyBamboo1Image />
            <ArashiyamaSkyBamboo2Image />
          </TwoImagesSameSize>
          <ImageAsLandscape>
            <ArashiyamaSkyBamboo3Image />
          </ImageAsLandscape>
          <p>
            A un moment donné le chemin se sépare en deux, avec en son centre le “Nonomiya Shrine”, d’un côté vous allez
            vers le Kameyama Park et de l’autre côté vous continuez vers une autre petite forêt de bambous.
          </p>
          <p>Une promenade assez courte en soit, mais qui vaut le détour.</p>
          <ImageAsPortrait>
            <ArashiyamaBambooImage />
          </ImageAsPortrait>
        </Visit>
      </div>
    </>
  )
}

export default IndexPage

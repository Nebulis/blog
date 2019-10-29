import React from "react"
import SEO from "../../../../components/layout/seo"
import { JapanTitle } from "../../../../components/core/title"
import { MainKinkakujiImage } from "../../../../components/images/asia/japan/kyoto/kinkakuji/mainKinkakujiImage"
import {
  How,
  HowLong,
  HowMuch,
  Visit,
  WhatTimeOfYear,
  When,
  Where,
  WhereToStay,
} from "../../../../components/core/section"
import css from "@emotion/css"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { KinkakujiKanjiImage } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiKanjiImage"
import { KinkakujiTempleWithLake1Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiTempleWithLake1Image"
import { KinkakujiTempleWithLake2Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiTempleWithLake2Image"
import { KinkakujiOtherTemple1Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiOtherTemple1Image"
import { KinkakujiOtherTemple2Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiOtherTemple2Image"
import { KinkakujiTemple1Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiTemple1Image"
import { KinkakujiFenghuangImage } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiFenghuangImage"
import { KinkakujiTemple2Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiTemple2Image"
import { KinkakujiWaterfall2Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiWaterfall2Image"
import { KinkakujiWaterfall1Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiWaterfall1Image"
import { KinkakujiLakeImage } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiLakeImage"
import { KinkakujiStatueImage } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiStatueImage"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanLine, KinkakujiQuote } from "../../../../components/core/japan"
import { JapanExternalLink, JapanLink } from "../../../../components/core/links/link"
import { BlogLayout } from "../../../../components/layout/layout"
import { KinkakujiOtherTemple3Image } from "../../../../components/images/asia/japan/kyoto/kinkakuji/kinkakujiOtherTemple3Image"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="kinkakuji">
        <JapanTitle title="Temple de KINKAKUJI" categories={["asia", "japan", "kyoto"]} />
        <MainKinkakujiImage />
        <KinkakujiQuote />
        <Where>1 Kinkakujicho, Kita Ward, Kyoto</Where>
        <When>
          <p>Tous les jours de 9h à 17h.</p>
        </When>
        <How>
          Depuis la plupart des grandes villes il est possible de se rendre à Kyoto en Shinkansen.
          <ul>
            <li>Depuis Tokyo environ 2h30</li>
            <li>Depuis Himeji environ 1h</li>
            <li>Depuis Nagoya environ 1h</li>
            <small>
              <JapanLink action="hide" to="transports-in-japan">
                Plus d’information sur les transports.
              </JapanLink>
            </small>
          </ul>
          <p>
            Depuis la gare de Kyoto, prendre la{" "}
            <JapanLine
              href="https://www.google.com/maps/dir/?api=1&origin=Kyoto%20Station%2C%20Higashishiokoji%20Kamadonocho%2C%20Shimogyo%20Ward%2C%20Kyoto%2C%20Japan&destination=Kinkaku-ji%2C%201%20Kinkakujicho%2C%20Kita%20Ward%2C%20Kyoto%2C%20603-8361%2C%20Japan&travelmode=transit"
              css={css`
                background-color: #800080;
                color: #ffffff;
              `}
            >
              San-In Line
            </JapanLine>{" "}
            jusqu’à Emmachi (9 mins - 4 arrêts). Prendre ensuite le bus ligne 204 ou 205 depuis Kita Oji Bus Terminal
            vers Waratenjin-mae (9 mins - 6 arrêts). Marcher vers l’Ouest pendant 2 minutes (en descendant du bus
            redescendre vers la dernière intersection puis tourner à droite).
          </p>
        </How>
        <HowLong>Une demi-journée</HowLong>
        <WhatTimeOfYear>
          <p> Pas de période spécifique, à chaque saison vous y découvrirez un nouveau paysage. </p>
          <p>
            Nous y sommes allés au printemps où le soleil était au rendez-vous, nous aimerions beaucoup y retourner à
            l’automne, pour voir les érables rouges et encore plus en hiver, avec le lac gelé et la neige recouvrir le
            toit du temple. Un régal à chaque saison, nous en sommes convaincu.{" "}
          </p>
        </WhatTimeOfYear>
        <HowMuch>400 Yens (~3,50 €)</HowMuch>
        <WhereToStay location="à Kyoto, près de Kinkakuji">
          <p>
            Chercher un hôtel à Kyoto n’est pas une mince affaire, les prix sont quand même sacrément élevé (au Japon en
            général d’ailleurs) , environ 200€ pour dormir près de Kinkakuji. Nous vous conseillons donc de vous trouver
            un hôtel dans Kyoto et de ne pas chercher en fonction des lieux de vos visites.{" "}
          </p>
          <p>
            {" "}
            Les transports en commun à Kyoto sont très efficaces, il n’est pas difficile de trouver son chemin, et puis
            comme partout au Japon, Google Map est clairement votre meilleur ami !
          </p>
          <p>
            <small>
              <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Kyoto%2C+Kyoto%2C+Japon">
                Comparez et réservez votre hôtel à Kyoto.
              </JapanExternalLink>
            </small>
          </p>
        </WhereToStay>
        <Visit>
          <p>
            A l’entrée, on nous donne un billet écrit en Kana ou Kanji, nous ne savons malheureusement pas ce qu’il y a
            écrit dessus mais en tout cas une chose est sûr cela nous plonge directement dans l’atmosphère et la beauté
            du lieu.
          </p>
          <ImageAsPortrait>
            <KinkakujiKanjiImage
              css={css`
                max-width: 450px;
              `}
            />
          </ImageAsPortrait>
          <p>
            On arrive ensuite en face du temple où on a une vue d’ensemble sur celui-ci et sur le lac. Nous avons la
            chance que le beau temps soit au rendez-vous, on peut donc apercevoir les parois recouvertes de feuilles
            d’or qui se reflètent dans l’eau.
          </p>
          <TwoImagesSameSizeOrToGroup>
            <KinkakujiTempleWithLake1Image />
            <KinkakujiTempleWithLake2Image />
          </TwoImagesSameSizeOrToGroup>
          <p>On fait ensuite le tour du lac pour se rapprocher du temple d’or.</p>
          <p>En passant, on y découvre d’autres temples beaucoup moins prestigieux certes mais tout aussi jolis.</p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <KinkakujiOtherTemple1Image />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <KinkakujiOtherTemple2Image />
            </ImageAsLandscapeOnTheRight>
          </GroupOfImages>
          <p>
            On s’approche donc de plus en plus du temple, pour admirer les feuilles d’or d’encore plus près et qui
            paraissent si lisses. On peut enfin apercevoir le phénix chinois Fenghuang qui surplombe le temple à son
            sommet.
          </p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <KinkakujiTemple1Image />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <KinkakujiFenghuangImage />
            </ImageAsLandscapeOnTheRight>
            <ImageAsLandscapeOnTheLeft>
              <KinkakujiOtherTemple3Image />
            </ImageAsLandscapeOnTheLeft>
          </GroupOfImages>
          <p>
            Le chemin continue sur des jardins à perte de vue, vous pouvez continuer à monter ou prendre un raccourci
            pour terminer la visite mais vous louperez la vue d’en haut sur le temple, les différentes petites statues
            et cascades qui font de la visite un endroit spécial.
          </p>
          <GroupOfImages>
            <ImageAsLandscape>
              <KinkakujiTemple2Image />
            </ImageAsLandscape>
            <TwoImagesSameSize>
              <KinkakujiWaterfall1Image />
              <KinkakujiWaterfall2Image />
            </TwoImagesSameSize>
          </GroupOfImages>
          <p>
            Monter nous offre également une vue panoramique sur la montagne de pins derrière le temple, un magnifique
            spectacle.
          </p>
          <p>
            Des édifices sont dispersés un peu partout pour vous permettre de méditer ou de faire des voeux, jetez-y une
            pièce la fortune vous sourira peut-être.
          </p>
          <TwoImagesSameSize
            css={css`
              max-width: 700px;
            `}
          >
            <KinkakujiLakeImage />
            <KinkakujiStatueImage />
          </TwoImagesSameSize>
          <Conclusion>
            Pavillon d’or, temple impérial du jardin des cerfs, que de surnom pour ce splendide temple qui fût
            malheureusement totalement détruit en 1950 par un incendie volontaire, et heureusement reconstruit à
            l’identique 5 ans après.
          </Conclusion>
        </Visit>
      </BlogLayout>
    </>
  )
}

export default IndexPage

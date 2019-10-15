import React from "react"
import { Header } from "../../../../components/layout/header"
import { Maintenance } from "../../../../components/layout/maintenance"
import SEO from "../../../../components/layout/seo"
import { css } from "@emotion/core"
import { JapanTitle } from "../../../../components/core/title"
import { JapanQuote } from "../../../../components/core/quote"
import { MainHimejiCastleImage } from "../../../../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import {
  Bonus,
  How,
  HowLong,
  HowMuch,
  Visit,
  WhatTimeOfYear,
  When,
  Where,
  WhereToHave,
  WhereToStay,
} from "../../../../components/core/section"
import { JapanExternalLink, JapanLink } from "../../../../components/core/link"
import { EntranceHimejiCastleImage } from "../../../../components/images/asia/japan/himeji/castle/entranceHimejiCastleImage"
import { EntranceRiverHimejiCastleImage } from "../../../../components/images/asia/japan/himeji/castle/entranceRiverHimejiCastleImage"
import { HimejiCastle1Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastle1Image"
import { HimejiCastleWithCherryImage } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherryImage"
import { HimejiCastleWithCherry2Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry2Image"
import { HimejiCastleGeishaImage } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleGeishaImage"
import { HimejiCastleWithCherry6Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry6Image"
import { HimejiCastleWithCherry5Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry5Image"
import { Conclusion } from "../../../../components/core/conclusion"
import { HimejiCastleTroup } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleTroup"
import { HimejiCastleMarket } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleMarket"
import { HimejiGyuKaku } from "../../../../components/images/asia/japan/himeji/castle/himejiGyukaku"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesLeftBigger,
  TwoImagesSameSize,
} from "../../../../components/images/layout"
import { HimejiCastleWithTreeImage } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithTreeImage"
import { HimejiCastle3Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastle3Image"
import { HimejiCastleWithCherry4Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry4Image"
import { HimejiCastle2Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastle2Image"
import { HimejiCastle4Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastle4Image"
import { HimejiCastleWithCherry3Image } from "../../../../components/images/asia/japan/himeji/castle/himejiCastleWithCherry3Image"
import { Menu } from "../../../../components/layout/menu"

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
        <JapanTitle title="Château de HIMEJI" categories={["asie", "japon", "himeji"]} />
        <ImageAsLandscape>
          <MainHimejiCastleImage />
        </ImageAsLandscape>
        <JapanQuote>
          Magnifique château, surnommé le château du Héron Blanc, il est considéré comme l’un des plus beaux châteaux du
          Japon.{" "}
        </JapanQuote>
        <Where>68 Honmachi, Himeji</Where>
        <When>Tous les jours de 9h à 17h (16h pour les dernières entrées)</When>
        <How>
          Depuis la plupart des grandes villes il est possible de se rendre à Himeji en Shinkansen.
          <ul>
            <li>Depuis Tokyo environ 3h40</li>
            <li>Depuis Kyoto environ 1h</li>
            <small>
              <JapanLink to="/asia/japan/transports">Plus d’information sur les transports.</JapanLink>
            </small>
          </ul>
          <p>
            En sortant de la gare, prendre la sortie nord, le château se situe tout droit pendant une vingtaine de
            minutes le long d’une grande avenue.{" "}
          </p>
          <p>
            En fonction du temps, vous pouvez l’apercevoir de la gare, la nuit le château est illuminé et offre une
            magnifique vue de loin.
          </p>
        </How>
        <HowLong>Entre une demi-journée et une journée si vous visitez les jardins aux alentours.</HowLong>
        <WhatTimeOfYear>
          On vous conseille d’y aller au printemps, vers début Avril, pour son parc et ses magnifiques cerisiers.
        </WhatTimeOfYear>
        <HowMuch>
          <p>Vous pouvez visiter les jardins aux alentours gratuitement.</p>
          <p>
            Pour la visite de l’intérieur du château et des jardins au plus proche, il faudra payer 1 000 Yens (~ 8,50€)
            pour les adultes et 300 Yens (~ 2,50€) pour les enfants.
          </p>
        </HowMuch>
        <WhereToStay location="à Himeji">
          <p>
            Himeji est particulièrement touristique, vous n’aurez donc pas de mal à trouver un hôtel. Reste à voir les
            prix, car comme partout au Japon, les hôtels ne sont pas donnés.
          </p>
          <p>
            Nous sommes arrivés le soir et avons pris une nuit à l’hôtel{" "}
            <JapanExternalLink href="https://www.booking.com/hotel/jp/apa-himeji-eki-kita.fr.html">
              APA Hotel Himeji-Eki-Kita
            </JapanExternalLink>
            , pas forcément le mieux noté mais juste pour une nuit cela nous suffisait amplement, excellent rapport
            qualité prix, à 5 minutes à pied de la gare dans une rue plutôt calme la nuit. Tout ce qu’il nous fallait
            pour nous reposer après ce long trajet et avant la visite du château le lendemain matin.
          </p>
          <p>
            <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Himeji%2C+Himeji%2C+Japon">
              Comparez et réservez votre hôtel à Himeji.
            </JapanExternalLink>
          </p>
        </WhereToStay>
        <WhereToHave>
          <p>
            Nous n’y sommes resté qu’une matinée et une nuit mais le soir on est sorti pour chercher un petit resto
            sympa. On était un peu perdu à vrai dire et nous avons pris le premier restaurant ouvert que nous avons
            trouvé et mon dieu quel plaisir !
          </p>
          <p>
            <JapanExternalLink href="https://gurunavi.com/en/kcrb202/mp/rst/?__ngt__=TT0fec08682006ac1e4ae465ky9FQHkshfX1q4wKS7sFbw">
              Gyu-Kaku
            </JapanExternalLink>{" "}
            est un restaurant qui fait principalement des barbecues, nous n’y connaissions rien et le serveur qui s’est
            occupé de nous nous a tout expliqué et conseillé. En tout cas pour un premier repas, restaurant trouvé au
            pif on vous le conseille mais 1000 fois, un régal. (N’hésitez pas à demander un menu en anglais).
          </p>
          <ImageAsPortrait>
            <HimejiGyuKaku />
          </ImageAsPortrait>
        </WhereToHave>
        <Visit
          css={css`
            &.content {
              margin-bottom: 0;
            }
          `}
        >
          <p>
            Après avoir parcouru la rue principale, on arrive en face du château, il paraît encore si loin mais si
            proche à la fois. Traversé d’un petit pont en bois qui nous fait passer au dessus d’une sorte de douve
            rempli d’eau.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <EntranceHimejiCastleImage />
            </ImageAsPortrait>
            <ImageAsPortrait>
              <EntranceRiverHimejiCastleImage />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>
            On arrive enfin dans les jardins (gratuit) qui entoure le château, il y a déjà beaucoup de monde alors qu’il
            n’est que 9h, les fleurs des cerisiers sont timides mais quelques-unes sont déjà de sorties et nous font
            rêver et imaginer leurs beautés si c’était la pleine saison.
          </p>
          <GroupOfImages>
            <ImageAsLandscape>
              <HimejiCastle1Image />
            </ImageAsLandscape>
            <TwoImagesSameSize>
              <HimejiCastleWithCherryImage />
              <HimejiCastleWithCherry2Image />
            </TwoImagesSameSize>
            <ImageAsLandscape>
              <HimejiCastleGeishaImage />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>
            Nous hésitons à rentrer, on se demande si on en vera vraiment plus en continuant, le château est déjà
            magnifique d’ici et les cerisiers ne sont pas vraiment en fleurs pour le moment. Et puis le monde, rha ce
            monde, bon allez on est venu pour visiter oui ou non, nous n’allons pas nous arrêter en chemin !
          </p>

          <p>
            A l’entrée, un magnifique cerisier en fleur, et nous n’en sommes qu’au début. Ils se sont peut-être donné le
            mot d’ordre, sublimer en premier lieu les intérieurs du parc tout près du château. En tout cas c’est chose
            faites, les chemins, entre montées et descentes, sont magnifiques, on ne sait pas vraiment quoi prendre en
            photo et où poser les yeux.
          </p>
          <TwoImagesSameSize>
            <HimejiCastle4Image />
            <HimejiCastleWithCherry3Image />
          </TwoImagesSameSize>
          <p>
            Nous avons le choix de visiter l’intérieur ou de continuer vers l’extérieur, les deux se valent. Le château
            est à plusieurs étages où les marchent se rétrécissent au fur et à mesure de la montée pour arriver tout en
            haut offrant une vue sur la ville.
          </p>

          <p>
            A l’extérieur, rien ne se ressemble. On passe du “désert”, aux cerisiers blancs puis roses. Des vues
            sublimes qui ne nous font pas regretter d’être rentré.
          </p>
          <GroupOfImages>
            <TwoImagesLeftBigger>
              <HimejiCastle2Image />
              <HimejiCastleWithTreeImage />
            </TwoImagesLeftBigger>
            <ImageAsPortrait>
              <HimejiCastle3Image />
            </ImageAsPortrait>
            <ImageAsPortrait
              css={css`
                max-width: 800px;
              `}
            >
              <HimejiCastleWithCherry4Image />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>
            Connu pour être un véritable spot pour admirer les cerisiers, Sakura. On vous conseille donc d’y aller
            plutôt au printemps quand les cerisiers sont en fleurs, pour admirer ce magnifique endroit si paisible.{" "}
          </p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <HimejiCastleWithCherry5Image />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <HimejiCastleWithCherry6Image />
            </ImageAsLandscapeOnTheRight>
          </GroupOfImages>
        </Visit>
        <Conclusion>
          Construit au XVIIe siècle, le château de Himeji est l’un des rares châteaux du Japon à ne pas avoir été
          détruit ou endommagé lors de la guerre ou par des catastrophes naturelles.
        </Conclusion>
        <Bonus>
          <p>
            A la sortie du château, nous avons fait le tour du marché qui se trouve à gauche en sortant, il n’y avait
            pas grand chose mais la nourriture donnait envie.
          </p>
          <p>
            Nous avons également eu la chance de voir des enfants danser sur une musique typiquement japonaise, pas le
            temps de trop s’attarder cela dit, la musique finit nous devons filer à la gare !{" "}
          </p>
          <p>
            <JapanLink to="/asia/japan/kyoto">Direction KYOTO. </JapanLink>
          </p>
          <TwoImagesSameSize
            css={css`
              max-width: 700px;
            `}
          >
            <HimejiCastleMarket />
            <HimejiCastleTroup />
          </TwoImagesSameSize>
        </Bonus>
      </div>
    </>
  )
}

export default IndexPage

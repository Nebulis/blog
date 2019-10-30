import React from "react"
import SEO from "../../../../components/layout/seo"
import { JapanTitle } from "../../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesLeftBigger,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { MainNagoyaCastleImage } from "../../../../components/images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
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
import { NagoyaEntrance1Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaEntrance1Image"
import { css } from "@emotion/core"
import { NagoyaEntrance2Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaEntrance2Image"
import { NagoyaEntrance3Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaEntrance3Image"
import { NagoyaHimeji1Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaHimeji1Image"
import { NagoyaHimeji2Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaHimeji2Image"
import { NagoyaCherry1Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaCherry1Image"
import { NagoyaCastle1Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaCastle1Image"
import { NagoyaCherry2Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaCherry2Image"
import { NagoyaLake1Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaLake1Image"
import { NagoyaLake2Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaLake2Image"
import { NagoyaRosebushImage } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaRosebushImage"
import { NagoyaStatueImage } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaStatueImage"
import { NagoyaCastle2Image } from "../../../../components/images/asia/japan/nagoya/castle/nagoyaCastle2Image"
import { Conclusion } from "../../../../components/core/conclusion"
import { JapanLine, NagoyaCastleQuote } from "../../../../components/core/japan"
import { JapanExternalLink, JapanLink } from "../../../../components/core/links/link"
import { BlogLayout } from "../../../../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="nagoya-castle">
        <JapanTitle title="Château de NAGOYA" categories={["asia", "japan", "nagoya"]} />
        <ImageAsLandscape>
          <MainNagoyaCastleImage />
        </ImageAsLandscape>
        <NagoyaCastleQuote />
        <Where>1-1 Honmaru, Naka Ward, Nagoya</Where>
        <When>Tous les jours de 9h à 16h30.</When>
        <How>
          Depuis la plupart des grandes villes il est possible de se rendre à Nagoya en Shinkansen.
          <ul>
            <li>Depuis Tokyo environ 2h.</li>
            <li>Depuis Kyoto environ 40 min.</li>
            <li>Depuis Osaka environ 1h.</li>
            <small>
              <JapanLink action="hide" to="transports-in-japan">
                Plus d’information sur les transports.
              </JapanLink>
            </small>
          </ul>
          <p>
            Depuis la gare de Nagoya, prendre la{" "}
            <JapanLine
              href="https://www.google.com/maps/dir/?api=1&origin=Nagoya%20Station%2C%201%20Chome-1-4%20Meieki%2C%20Nakamura%20Ward%2C%20Nagoya%2C%20Aichi%2C%20Japan&destination=Shiyakusho%20Station%2C%20Japan&travelmode=transit"
              css={css`
                background-color: #f2f200;
                color: #000000;
              `}
            >
              Higashiyama Line
            </JapanLine>{" "}
            jusqu’à Sakae (5 mins – 2 arrêts). Puis prendre la{" "}
            <JapanLine
              href="https://www.google.com/maps/dir/?api=1&origin=Nagoya%20Station%2C%201%20Chome-1-4%20Meieki%2C%20Nakamura%20Ward%2C%20Nagoya%2C%20Aichi%2C%20Japan&destination=Shiyakusho%20Station%2C%20Japan&travelmode=transit"
              css={css`
                background-color: #800080;
                color: #ffffff;
              `}
            >
              Meijo Line
            </JapanLine>{" "}
            jusqu’à Shiyakusho Station (3 mins – 2 arrêts). Prendre la sortie 7 puis continuez tout droit (direction
            Nord) l’entrée du château est à 2 minutes à pied sur votre gauche.{" "}
          </p>
        </How>
        <HowLong>Une demi-journée.</HowLong>
        <WhatTimeOfYear>
          <p>
            Au printemps, les cerisiers sont une véritable attraction. Vous en verrez absolument tout autour de la
            bâtisse.{" "}
          </p>
          <p>
            A l’automne, les érables vous font découvrir un autre endroit, au couleur rouge et orange, tout aussi
            prestigieux.
          </p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>500 Yens (~ 4,20 €). Gratuit pour les enfants.</p>
        </HowMuch>
        <WhereToStay location="à Nagoya">
          <p>
            Nagoya n’avait pas l’air tellement touristique, en tout cas beaucoup moins que Kyoto et Himeji. Nous n’avons
            pas eu de mal à trouver un hôtel et ça même si nous nous y étions pris un peu en retard.
          </p>
          <p>Nous avons cherché au plus proche de nos visites pour que ce soit le plus pratique pour nous.</p>
          <p>
            <JapanExternalLink href="https://www.booking.com/hotel/jp/kuretake-inn-nagoya-hisayaodori.fr.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQHoAQH4AQuIAgGoAgO4At_li-0FwAIB;sid=4bab15bee9c381d39dd9173a3a402ed8;atlas_src=sr_iw_btn;dist=0;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&">
              Kuretake Inn Nagoya Hisayaodori
            </JapanExternalLink>{" "}
            est un très bel hôtel, idéalement bien situé à 10-15 minutes à pied du Château de Nagoya. La chambre et la
            SDB étaient très propres, un peu petit mais très clairement pour une ou deux nuits c’était parfait, très
            cosy.
          </p>
          <p>
            <small>
              <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Himeji%2C+Himeji%2C+Japon">
                Comparez et réservez votre hôtel à Nagoya.
              </JapanExternalLink>
            </small>
          </p>
        </WhereToStay>
        <WhereToHave location="à Nagoya">
          <p>
            Après une bonne journée à marcher, on avait clairement envie de se refaire plaisir, et à deux pas de l’hôtel
            dans une petite rue nous avons trouvé le restaurant que nous cherchions, le même type qu’à Himeji où nous
            nous étions régalé. Un restaurant de barbecue typiquement coréen Yakiniku que vous retrouverez énormément au
            Japon.
          </p>
          <p>
            On vous met quand même{" "}
            <JapanExternalLink href="https://www.shoya.com/shop-info/shop-izumi">le lien du site</JapanExternalLink>{" "}
            même s’il est en Japonais vous y trouverez la map pour y accéder, pas compliqué si vous logez au même
            endroit que nous. Le serveur qui s’est occupé de nous, parlait parfaitement anglais et nous a tout très bien
            conseillé.
          </p>
        </WhereToHave>
        <Visit>
          <p>
            L’entrée est déjà un véritable spectacle dès l’arrivée. Encerclé de douves et entouré de cerisiers, on passe
            par un petit pont qui nous amène peu à peu dans l’immense parc du château.
          </p>
          <GroupOfImages>
            <ImageAsLandscape>
              <NagoyaEntrance1Image />
            </ImageAsLandscape>
            <ImageAsPortrait>
              <NagoyaEntrance2Image />
            </ImageAsPortrait>
            <ImageAsPortrait
              css={css`
                max-width: 800px;
              `}
            >
              <NagoyaEntrance3Image />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>
            En entrant dans le parc, on a l’embarras du choix tellement c’est grand. De loin, on aperçoit le château ce
            qui nous amène par y aller en premier lieu. On peut d’ailleurs apercevoir une petite réplique{" "}
            <JapanLink to="himeji-castle">du château de Himeji</JapanLink>, ce qui nous rappelle déjà nos souvenirs du
            premier jour.
          </p>
          <TwoImagesSameSizeOrToGroup>
            <NagoyaHimeji1Image />
            <NagoyaHimeji2Image />
          </TwoImagesSameSizeOrToGroup>
          <p>
            Arrivé au château, nous découvrons que nous ne pouvons pas visiter l’intérieur car il est en travaux. Un peu
            déçu, nous avons quand même une très belle vue de l’extérieur. Au sommet du château, se trouvent deux
            Kinshashi, une sorte de dauphin en or.
          </p>
          <p>
            Le château en lui même nous paraît moins prestigieux et moins grand que celui de Himeji, ce qui n’en fait
            pas une mauvaise visite malgré tout.
          </p>
          <p>En face du château, vous avez un parfait spot à cerisiers.</p>
          <GroupOfImages>
            <ImageAsLandscape>
              <NagoyaCastle1Image />
            </ImageAsLandscape>
            <ImageAsLandscape>
              <NagoyaCherry1Image />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>Les jardins se prolongent tout autour.</p>
          <p>
            D’un côté vous avez un lac où les cygnes semblent s’y plaire. Un chemin vous permet d’y faire le tour, c’est
            d’ailleurs plutôt agréable, vu que la plupart des personnes restent près du château pour y faire des photos,
            vous vous retrouvez un peu seul au monde.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <NagoyaCherry2Image />
            </ImageAsPortrait>
            <TwoImagesLeftBigger>
              <NagoyaLake1Image />
              <NagoyaLake2Image />
            </TwoImagesLeftBigger>
          </GroupOfImages>
          <p>
            De l’autre côté, un jardin encore plus vaste, d’un calme surprenant là encore, où les cerisiers font placent
            aux rosiers. Quelques statues par ci par là, pour enfin dire au revoir au château, que nous apercevons de
            loin.
          </p>
          <GroupOfImages>
            <TwoImagesSameSize>
              <NagoyaRosebushImage />
              <NagoyaStatueImage />
            </TwoImagesSameSize>
            <ImageAsPortrait>
              <NagoyaCastle2Image />
            </ImageAsPortrait>
          </GroupOfImages>
        </Visit>
        <Conclusion>
          Le château de Nagoya fait malheureusement parti des nombreux châteaux qui ont été détruit ou endommagé au
          cours des années. Il semblerait que les travaux soient pour lui redonner de l’authenticité. Ils auraient
          totalement détruit le donjon pour le reconstruire de manière plus traditionnelle, en l’occurrence ici en bois.
          Un mal pour un bien du coup !
        </Conclusion>
        <Bonus>
          <p>Le Dimanche vous pouvez voir un spectacle de Samouraï et de Ninja dans l’après-midi.</p>
        </Bonus>
      </BlogLayout>
    </>
  )
}

export default IndexPage

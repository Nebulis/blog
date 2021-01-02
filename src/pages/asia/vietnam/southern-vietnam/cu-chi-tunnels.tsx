import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  CuChoTunnelsQuote,
  VietnamBlogLayout,
  VietnamExternalLink,
  VietnamLink,
  VietnamTitle,
} from "../../../../components/core/asia/vietnam/vietnam"
import {
  GroupOfImages,
  ImageAsLandscape,
  TwoImagesLeftBigger,
  TwoImagesRightBigger,
  TwoImagesSameSize,
} from "../../../../components/images/layout"
import { MainCuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/mainCuChiTunnelsImage"
import {
  GoodToKnow,
  How,
  HowLong,
  HowMuch,
  Visit,
  WhatTimeOfYear,
  When,
  WhereToStay,
} from "../../../../components/core/section"
import { Entrance1CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/entrance1CuChiTunnelsImage"
import { Entrance2CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/entrance2CuChiTunnelsImage"
import { Expo2CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/expo2CuChiTunnelsImage"
import { Expo1CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/expo1CuChiTunnelsImage"
import { Expo5CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/expo5CuChiTunnelsImage"
import { Expo3CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/expo3CuChiTunnelsImage"
import { Expo4CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/expo4CuChiTunnelsImage"
import { Tunnel2CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/tunnel2CuChiTunnelsImage"
import { Tunnel3CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/tunnel3CuChiTunnelsImage"
import { TunnelInside1CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/tunnelInside1CuChiTunnelsImage"
import { TunnelInside2CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/tunnelInside2CuChiTunnelsImage"
import { TunnelInside3CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/tunnelInside3CuChiTunnelsImage"
import { TunnelInside4CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/tunnelInside4CuChiTunnelsImage"
import { Rest1CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/rest1CuChiTunnelsImage"
import { Rest2CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/rest2CuChiTunnelsImage"
import { Conclusion } from "../../../../components/core/conclusion"
import { Bonus1CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/bonus1CuChiTunnelsImage"
import { Bonus2CuChiTunnelsImage } from "../../../../components/images/asia/vietnam/south-vietnam/cu-chi-tunnels/bonus2CuChiTunnelsImage"
import { PageProps } from "gatsby"

/*
the image at the end have sizing problem which look caused by the size of the original image and gatsby not handling properly. Some resources:
- https://github.com/gatsbyjs/gatsby/issues/15669
- https://github.com/gatsbyjs/gatsby/issues/10029
- https://github.com/gatsbyjs/gatsby/issues/11851
TLDR the problem is caused by having the 4032w original image size in the src set
Manually setting the srcset dont get rid of the original img size (maybe in the future ??)
the fastest way to fix it is to resize a bit the images to
 */

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="Les tunnels de Cu Chi" location={location} />
      <VietnamBlogLayout page="cu-chi-tunnels">
        <VietnamTitle
          title="Les tunnels de Cu Chi"
          categories={["asia", "vietnam", "southern-vietnam"]}
          linkId="cu-chi-tunnels"
        />
        <ImageAsLandscape>
          <MainCuChiTunnelsImage />
        </ImageAsLandscape>
        <CuChoTunnelsQuote />
        <When>Ouvert de 8h à 17h tous les jours</When>
        <How>
          <p>Plusieurs moyens de transports existent en partant de Hô Chi Minh-Ville.</p>
          <p>En Scooter, en Bus public, en Taxi ou en Tour avec guide, ce qui est la meilleure solution à nos yeux.</p>
          <p>
            <VietnamLink action="hide" to="transports-in-vietnam">
              Plus d&apos;informations sur les transports au Vietnam ici.
            </VietnamLink>
          </p>
        </How>
        <HowLong>
          <p>
            Comptez une bonne demi-journée, en partant de Hô Chi Minh-Ville, il faut environ 2h aller / 2h retour en
            fonction du trafic et de la météo. Ça peut paraître long et on ne va pas mentir c&apos;est effectivement
            long, mais si vous vous faites emmener le matin ça permet de continuer sa nuit et l&apos;après midi de faire
            une petite sieste (Voyons le côté positif à ce temps de trajet !).
          </p>
          <p>
            Pour un tour avec guide nous avions rendez-vous à 7h30 (point de rendez-vous{" "}
            <VietnamExternalLink href="https://www.google.com/maps/place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.7676075,106.6933625,19z/data=!3m1!4b1!4m5!3m4!1s0x31752fac3b562065:0x1a56e1dbb3930b3!8m2!3d10.7676075!4d106.6939097">
              rue De Tham
            </VietnamExternalLink>{" "}
            comme quasiment tous les tours avec guide, nous y étions 15 minutes avant) et le retour était compté vers
            15h.
          </p>
        </HowLong>
        <WhatTimeOfYear>
          <p>
            Les tunnels se trouvant dans le Sud du Vietnam, la meilleure période pour y aller est très clairement la
            saison sèche, de Décembre à Avril.
          </p>
          <p>Nous y sommes allés en Février.</p>
        </WhatTimeOfYear>
        <HowMuch>
          <p>
            Le prix varie en fonction du moyen avec lequel vous y allez et si vous prenez un tour tout dépendra
            également de l&apos;agence que vous prenez.
          </p>
          <p>
            Nous avons réservé notre{" "}
            <VietnamExternalLink href="https://www.tripadvisor.com/AttractionProductReview-g293925-d11455504-Morning_Cu_Chi_Tunnels_Tour_from_Ho_Chi_Minh_City-Ho_Chi_Minh_City.html">
              tour avec guide sur Tripadvisor
            </VietnamExternalLink>{" "}
            et on en a eu pour un peu moins de 13€ par personne tout compris.
          </p>
          <p>
            Pour le prix d&apos;entrée sur le site si vous y allez par vous même, on ne sait pas exactement, on voit de
            tout, ça passe de 90 000 VND à 120 000 VND entre chaque site donc on ne préfère pas dire de bêtise. Prévoyez
            120 000 VND ça équivaut à 4€ environ.
          </p>
        </HowMuch>
        <WhereToStay>
          <p>On vous conseille très clairement de prendre un hôtel sur Hô Chi Minh-Ville.</p>
          <p>
            Nous voulions un hôtel proche du centre-ville et surtout proche de la rue de rassemblement des bus pour nos
            visites.
          </p>
          <p>
            Si nous avions su de base que les rues autour de nous étaient remplies de restaurants nous n&apos;aurions
            pas utilisé ce critère pour chercher notre hôtel mais avec les journées chargées que nous avions, nous
            avions peur de ne pas avoir le courage de chercher des restaurants pour le soir et donc nous avons pris un
            hôtel avec restaurant.
          </p>
          <p>
            Nous avons donc pris{" "}
            <VietnamExternalLink href="https://www.booking.com/hotel/vn/prague.fr.html?aid=359627;sid=8ad0a7713dc5ba93dbc4d5d0d89f2e34;all_sr_blocks=266339401_265530718_0_1_0;checkin=2021-02-19;checkout=2021-02-20;dest_id=-3730078;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=266339401_265530718_0_1_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=266339401_265530718_0_1_0__81143999;srepoch=1599930649;srpvid=258478cc41150166;type=total;ucfs=1&#_">
              l&apos;Hôtel Prague
            </VietnamExternalLink>
            . Hôtel parfait, chambre très confortable, le restaurant très bon, niveau confort rien à redire et à deux
            minutes à pied du point de rassemblement des bus pour les excursions.
          </p>
          <p style={{ color: "red" }}>Comparez et réservez votre hôtel à Hô Chi Minh-Ville.</p>
        </WhereToStay>
        <Visit>
          <p>
            Avant toute chose, il existe deux sites différents pour visiter les tunnels. Ben Dinh et Ben Duoc, l&apos;un
            à priori plus touristique que l&apos;autre. Nous n&apos;avons pas fait du tout attention à cela et nous nous
            sommes laissés guider uniquement par notre choix d&apos;agence. En l&apos;occurrence après recherche nous
            sommes allés au site dit touristique et nous n&apos;avons pas vu un chat à part notre groupe.
          </p>
          <TwoImagesSameSize>
            <Entrance1CuChiTunnelsImage />
            <Entrance2CuChiTunnelsImage />
          </TwoImagesSameSize>
          <p>Le site est composé en différentes parties.</p>
          <p>
            Une partie avec des panneaux explicatifs sur les tunnels et ses fonctions lors de la guerre, des stands
            d&apos;exposition dont entrepôt des armes, mises en scène de la vie des soldats et présentations des pièges
            artisanaux ou bien encore mannequins nous présentant les tenues de guerre.
          </p>
          <GroupOfImages>
            <TwoImagesLeftBigger>
              <Expo2CuChiTunnelsImage />
              <Expo1CuChiTunnelsImage />
            </TwoImagesLeftBigger>
            <TwoImagesRightBigger>
              <Expo3CuChiTunnelsImage />
              <Expo4CuChiTunnelsImage />
            </TwoImagesRightBigger>
            <ImageAsLandscape>
              <Expo5CuChiTunnelsImage />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>
            La partie tunnel où vous pouvez entrer et sortir à différents endroits. Á noter d&apos;ailleurs que toutes
            les sorties créées n&apos;existaient pas forcément à l&apos;époque et ont surtout été rajoutées pour les
            touristes.
          </p>
          <GroupOfImages>
            <TwoImagesSameSize>
              <MainCuChiTunnelsImage />
              <Tunnel2CuChiTunnelsImage />
            </TwoImagesSameSize>
            <ImageAsLandscape>
              <Tunnel3CuChiTunnelsImage />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>
            On se demande comment faisaient les gens pour circuler alors même que tout a été quasiment agrandi, on se
            retrouve malgré tout quand même à quatre pattes ou à genoux pour les tunnels les moins confortables.
          </p>
          <TwoImagesSameSize>
            <TunnelInside1CuChiTunnelsImage />
            <TunnelInside2CuChiTunnelsImage />
          </TwoImagesSameSize>
          <p>Nous sommes rentrés dans deux tunnels totalement différents.</p>
          <p>L&apos;un où nous étions légèrement penchés, tunnel assez court et fait pour la plupart des touristes.</p>
          <p>
            L&apos;autre en revanche était beaucoup plus étroit, accroupi tout le long, nous avons même fini à quatre
            pattes à la fin. Même en n&apos;étant pas claustrophobe nous étions content de sortir.
          </p>
          <TwoImagesSameSize>
            <TunnelInside3CuChiTunnelsImage />
            <TunnelInside4CuChiTunnelsImage />
          </TwoImagesSameSize>
          <p>
            Les guides sont eux aussi habitués et ça se voit, quand nous étions tous en train de galérer vers la fin,
            notre guide était déjà sorti. Nous avons d&apos;ailleurs eu un temps où nous avons eu peur de nous perdre,
            surtout au moment où le tunnel tourne et que le guide disparaît au loin - Total immersion pour se rendre
            vraiment encore plus compte à quel point cela devait être encore moins évident que ce qu&apos;on peut déjà
            l&apos;imaginer.
          </p>
          <p>On s&apos;arrête enfin à un stand de tir où vous pouvez vous exercer à tirer avec des armes de guerre.</p>
          <p>
            Profitez également d&apos;un petit temps d&apos;arrêt pour goûter de l’eau de noix de coco frais, un délice.
          </p>
          <TwoImagesSameSize>
            <Rest1CuChiTunnelsImage />
            <Rest2CuChiTunnelsImage />
          </TwoImagesSameSize>
        </Visit>
        <Conclusion>
          Ces tunnels nous montrent à quel point les Viet Cong étaient ingénieux et déterminés. On aurait limite
          l’impression d’être enterré vivant avant de voir la lumière de sortie, une expérience à faire même si ça reste
          une construction faite dans la douleur et qu’il ne faut pas l’oublier.
        </Conclusion>
        <GoodToKnow>
          <p>
            Principalement connus pour avoir aidé les Vietnamiens à se retrancher pendant la guerre du Vietnam, les
            tunnels ont pourtant d&apos;abord été construits pour la guerre d&apos;Indochine puis agrandis lors de la
            guerre du Vietnam.
          </p>
          <p>Dans les zones les plus à risque des gens ont passé la plus grande partie de leur vie sous terre.</p>
          <p>
            Les tunnels de Cu Chi ont été agrandis pour abriter des villages souterrains entiers, avec des quartiers
            d&apos;habitation, des usines de munitions ou bien encore des hôpitaux et des réserves de nourriture et
            d&apos;armes.
          </p>
          <p>Des pièges artisanaux étaient dissimulés un peu partout pour blesser les ennemis et les ralentir.</p>
          <p>Ces tunnels permettaient également de faire des attaques surprises.</p>
          <p>
            Les forces américaines ont entraîné des soldats à naviguer dans les tunnels afin de détecter les pièges et
            la présence des troupes Vietnamienne. Ils étaient appelés les «rats des tunnels».
          </p>
          <TwoImagesSameSize>
            <Bonus1CuChiTunnelsImage />
            <Bonus2CuChiTunnelsImage />
          </TwoImagesSameSize>
        </GoodToKnow>
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

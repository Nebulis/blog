import React from "react"
import SEO from "../../../../components/layout/seo"
import { MainDaigojiImage } from "../../../../components/images/asia/japan/kyoto/daigoji/mainDaigojiImage"
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
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesLeftBigger,
  TwoImagesSameSize,
} from "../../../../components/images/layout"
import { css } from "@emotion/core"
import { DaigojiTempleImage } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiTempleImage"
import { DaigojiGarden1Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiGarden1Image"
import { DaigojiGarden2Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiGarden2Image"
import { DaigojiGarden3Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiGarden3Image"
import { DaigojiDoorImage } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiDoorImage"
import { DaigojiCherry1Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiCherry1Image"
import { DaigojiCherry2Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiCherry2Image"
import { DaigojiPagodaImage } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiPagodaImage"
import { DaigojiMonk1Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiMonk1Image"
import { DaigojiTempleWithLake1Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiTempleWithLake1Image"
import { DaigojiTempleWithLake2Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiTempleWithLake2Image"
import { Conclusion } from "../../../../components/core/conclusion"
import { DaigojiGarden5Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiGarden5Image"
import { DaigojiGarden4Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiGarden4Image"
import { DaigojiMonk2Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiMonk2Image"
import { BlogLayout } from "../../../../components/layout/layout"
import { DaigojiTempleWithLake3Image } from "../../../../components/images/asia/japan/kyoto/daigoji/daigojiTempleWithLake3Image"
import {
  DaigojiQuote,
  JapanExternalLink,
  JapanLine,
  JapanLink,
  JapanTitle,
} from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  return (
    <>
      <SEO title="main" location={location} />
      <BlogLayout page="daigoji">
        <JapanTitle title="DAIGO-JI" categories={["asia", "japan", "kyoto"]} linkId="daigoji" />
        <MainDaigojiImage />
        <DaigojiQuote />
        <Where>22 Daigohigashiojicho, Fushimi Ward, Kyoto</Where>
        <When>
          <p>Tous les jours 9h - 16h.</p>
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
              href="https://www.google.com/maps/dir/?api=1&origin=Kyoto%20Station%2C%20Higashishiokoji%20Kamadonocho%2C%20Shimogyo%20Ward%2C%20Kyoto%2C%20Japan&destination=Daigoji%2C%2022%20Daigohigashiojicho%2C%20Fushimi%20Ward%2C%20Kyoto%2C%20601-1325%2C%20Japan&travelmode=transit"
              css={css`
                background-color: #1073c0;
                color: #ffffff;
              `}
            >
              Tokaido-Sanyo Line
            </JapanLine>{" "}
            jusqu’à Yamashina Station (5 mins - 1er arrêt). Prendre le bus 22a, de Yamashina Station à Daigojizen (21
            mins - 14 arrêts). Il s’arrête pile en face de Daigo-Ji.
          </p>
        </How>
        <HowLong>Entre 2h et 4h.</HowLong>
        <WhatTimeOfYear>
          <p>
            {" "}
            Au printemps, les cerisiers sont un véritable atout. A l’automne, les feuilles rouges des érables, qui
            entourent ce lieu incontournable, est également un point fort. Nous n’avons vu aucun avis pour l’hiver mais
            qu’est-ce que nous aimerions y aller à cette période également. Le lac gelé et sont paysages enneigés doit
            être totalement féérique.{" "}
          </p>
        </WhatTimeOfYear>
        <HowMuch>1500 Yen pour l’ensemble de la visite.</HowMuch>
        <WhereToStay location="à Kyoto, près de Daigo-Ji">
          <p>
            Daigo-ji est dans un coin reculé de Kyoto, il n’y a pas d’hôtels juste à côté mais de notre point de vue
            pour la visite de Kyoto nous avons justement préféré être dans ce coin reculé, plus calme et quand même
            particulièrement bien desservi par les transports.{" "}
          </p>
          <p>
            <JapanExternalLink href="https://www.booking.com/hotel/jp/kyoto-yamashina-hotel-sanraku.fr.html?label=gen173nr-1DCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQPoAQGIAgGoAgO4AqWi5-wFwAIB;sid=4bab15bee9c381d39dd9173a3a402ed8;all_sr_blocks=340404218_145933648_2_2_0;checkin=2020-04-02;checkout=2020-04-03;dest_id=900054542;dest_type=landmark;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=340404218_145933648_2_2_0;hpos=2;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1570361654;srpvid=3b9c515aa764003b;type=total;ucfs=1&#tab-main">
              Kyoto Yamashina Hotel Sanraku
            </JapanExternalLink>{" "}
            est un hôtel plutôt sympa, moderne, chambre et salle de bain de taille standard pour le japon. Très bien
            situé et au niveau du prix on est dans la moyenne.
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
            Arrivé à Daigo-Ji nous voici déjà impressionné par l’endroit, cela paraît immense et effectivement nous ne
            sommes pas au bout de nos surprises.
          </p>
          <p>
            Sur la droite, vous avez un musée et sur la gauche vous trouvez le Sanbo-in, le pavillon des trois trésors.
            L’intérieur est très sympa, tout est typiquement japonais, le sol est recouvert de tatami, les Shoji (porte
            coulissante typique) sont recouvertes de peinture. Vraiment un intérieur à faire, en tout cas nous avons
            beaucoup aimé malgré le fait que nous n’avions pas le droit de prendre de photos. Les extérieurs sont
            magnifiques également, très zen-attitude.
          </p>
          <GroupOfImages>
            <ImageAsPortrait
              css={css`
                max-width: 800px;
              `}
            >
              <DaigojiTempleImage />
            </ImageAsPortrait>
            <TwoImagesSameSize>
              <DaigojiGarden1Image />
              <DaigojiGarden2Image />
            </TwoImagesSameSize>
            <ImageAsLandscape>
              <DaigojiGarden3Image />
            </ImageAsLandscape>
          </GroupOfImages>
          <p>On continue dans une longue allée pavée remplie de cerisiers.</p>
          <p>On passe devant la magnifique porte du Sanbo-in que nous avions déjà pu apercevoir de l’intérieur.</p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <DaigojiDoorImage />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <DaigojiCherry1Image />
            </ImageAsLandscapeOnTheRight>
          </GroupOfImages>
          <p>Au bout du chemin, une grande porte où on arrive dans un jardin encore plus immense. </p>
          <p>Une pagode en bois de 5 étages, nous apparaît ainsi que quelques autres temples bouddhiste.</p>
          <GroupOfImages>
            <ImageAsPortrait
              css={css`
                max-width: 800px;
              `}
            >
              <DaigojiCherry2Image />
            </ImageAsPortrait>
            <TwoImagesLeftBigger>
              <DaigojiMonk1Image />
              <DaigojiPagodaImage />
            </TwoImagesLeftBigger>
          </GroupOfImages>
          <p>
            Et en continuant nous voici à l’endroit le plus connu de Daigo-Ji, le temple Bentendo et son célèbre pont
            rouge. Vous pouvez vous reposer près du lac, le temps de quelques instants, l’endroit est très calme et
            reposant.
          </p>
          <p>Dans le lac, on y voit refléter le temple ainsi que le pont et les cerisiers.</p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <DaigojiTempleWithLake1Image />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <DaigojiTempleWithLake2Image />
            </ImageAsLandscapeOnTheRight>
            <ImageAsLandscapeOnTheLeft>
              <DaigojiTempleWithLake3Image />
            </ImageAsLandscapeOnTheLeft>
          </GroupOfImages>
          <p>
            Si vous avez encore du temps, profitez-en pour aller derrière le temple et continuez à vous promener, il y a
            des chemins de randonnées avec quelques cascades, pont et petits temples. Autant profiter au maximum de ce
            lieu.
          </p>
          <TwoImagesSameSize>
            <DaigojiGarden4Image />
            <DaigojiGarden5Image />
          </TwoImagesSameSize>
        </Visit>
        <Conclusion>
          Daigo-ji est connu pour ses cerisiers au printemps mais également pour ses arbres de couleurs rouges vifs en
          automne, un plaisir des yeux à chaque saison.
        </Conclusion>
        <ImageAsPortrait
          className="gatsby-image-wrapper-no-top-margin"
          css={css`
            max-width: 800px;
          `}
        >
          <DaigojiMonk2Image />
        </ImageAsPortrait>
      </BlogLayout>
    </>
  )
}

export default IndexPage

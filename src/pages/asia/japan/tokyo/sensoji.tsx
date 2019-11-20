import React from "react"
import SEO from "../../../../components/layout/seo"
import { JapanExternalLink, JapanLink } from "../../../../components/core/links/link"
import { BlogLayout } from "../../../../components/layout/layout"
import { JapanTitle } from "../../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { JapanLine, SensojiQuote } from "../../../../components/core/japan"
import { MainSensojiImage } from "../../../../components/images/asia/japan/tokyo/sensoji/mainSensojiImage"
import { How, HowLong, HowMuch, Visit, When, Where, WhereToStay } from "../../../../components/core/section"
import { SensojiPathPeople1Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiPathPeople1Image"
import { SensojiPathPeople2Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiPathPeople2Image"
import { SensojiCherryPagodaImage } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiCherryPagodaImage"
import { SensojiLantern1Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiLantern1Image"
import { SensojiLantern2Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiLantern2Image"
import { SensojiTemple1Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiTemple1Image"
import { SensojiTemple2Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiTemple2Image"
import { SensojiTemple3Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiTemple3Image"
import { SensojiTemple4Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiTemple4Image"
import { SensojiTemple5Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiTemple5Image"
import { SensojiPagoda1Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiPagoda1Image"
import { SensojiPagoda2Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiPagoda2Image"
import { SensojiGarden1Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiGarden1Image"
import { SensojiGarden2Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiGarden2Image"
import { SensojiGarden3Image } from "../../../../components/images/asia/japan/tokyo/sensoji/sensojiGarden3Image"
import { Conclusion } from "../../../../components/core/conclusion"
import css from "@emotion/css"
import { JapanDivider } from "../../../../components/core/divider"
import { JapanComments } from "../../../../components/core/comments"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="sensoji">
        <JapanTitle title="Le temple de Senso-Ji" categories={["asia", "japan", "tokyo"]} />
        <ImageAsLandscape>
          <MainSensojiImage />
        </ImageAsLandscape>
        <SensojiQuote />
        <Where>2 Chome-3-1 Asakusa, Taito City, Tokyo</Where>
        <When>Tous les jours 24h/24h</When>
        <When>Tous les jours de 9h à 17h (16h pour les dernières entrées)</When>
        <How>
          <p>
            Depuis Tokyo Station, prendre la{" "}
            <JapanLine
              href="https://www.google.com/maps/dir/?api=1&origin=Tokyo%20Station%2C%201%20Chome%20Marunouchi%2C%20Chiyoda%20City%2C%20Tokyo%2C%20Japan&destination=Asakusa%20Station%2C%203%20Chome-1-11%20Nishiasakusa%2C%20Taito%20City%2C%20Tokyo%20111-0035%2C%20Japan &travelmode=transit"
              css={css`
                background-color: #ed9927;
                color: black;
              `}
            >
              Ginza Line
            </JapanLine>{" "}
            jusqu’à Asakusa Station (14 mins, 8 arrêts).
          </p>
          <p>Prendre la sortie 3 et continuer tout droit sur 100m, l’entrée se trouvera sur votre droite.</p>
        </How>
        <HowLong>
          <p>Une demi-journée.</p>
          <p>
            Au premier abord on vous aurait plutôt conseillé d’y aller le matin ou en fin d’après midi, cela dit nous y
            sommes allés vers 18h et il y avait encore énormément de mondes.
          </p>
        </HowLong>
        <HowMuch>
          <p>Gratuit</p>
        </HowMuch>
        <WhereToStay location="à Tokyo">
          <p>
            Tokyo est immense et ce n’est pas simple de conseiller un hôtel pour une si grande ville. Nous avons passé
            deux nuits à Tokyo à deux endroits différents. Tout dépend de ce que vous allez visiter où faire mais nous
            vous conseillons quand même de prendre un hôtel dans un coin reculé des grandes rues,{" "}
            <JapanLink action="hide" to="transports-in-japan">
              les transports
            </JapanLink>{" "}
            sont très efficaces à Tokyo et rien ne vous empêchera de les prendre pour aller à diverses endroits.
          </p>
          <ul>
            <li>
              <b>Quartier UENO :</b> Nous avons dormi à{" "}
              <JapanExternalLink href="https://www.booking.com/hotel/jp/ueno-touganeya.fr.html?label=gen173nr-1DCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQPoAQGIAgGoAgO4AozLzO0FwAIB">
                Ueno Touganeya Hotel,
              </JapanExternalLink>{" "}
              parfaitement bien situé, tout proche du métro dans une rue un peu perdu et donc très calme. Vous n’aurez
              pas de mal à trouver des restaurants juste à côté.
            </li>
            <li>
              <b>Quartier Shinjuku :</b> Quartier très animé, nous avons décidé de nous éloigner un peu, à 15 minutes à
              pied nous avons réservé à{" "}
              <JapanExternalLink href="https://www.booking.com/hotel/jp/listel-shinjuku.fr.html?label=gen173nr-1DCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQPoAQGIAgGoAgO4AozLzO0FwAIB">
                Hotel Listel Shinjuku,
              </JapanExternalLink>{" "}
              la chambre est plutôt grande comparé à la moyenne du Japon, le restaurant n’est pas top mais le but était
              d’aller passer la soirée dans les rues animées et d’être au calme pour dormir donc parfait de ce côté là.
            </li>
          </ul>
        </WhereToStay>
        <Visit>
          <p>
            La nuit tombe, le soleil disparaît, il commence à faire froid et la pluie arrive, des péripéties qui ne nous
            empêche pas de venir visiter ce temple dont tout le monde parle.
          </p>
          <p>
            On arrive devant une première porte immense qui est l’entrée principale de la visite. D’un rouge éclatant
            elle nous invite à entrer pour découvrir cette grande allée remplie de monde.
          </p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <SensojiPathPeople1Image />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <SensojiPathPeople2Image />
            </ImageAsLandscapeOnTheRight>
          </GroupOfImages>
          <p>
            L’allée est une sorte de petit marché, stands de souvenirs et de nourritures, on ne s’y attarde pas trop vu
            le temps mais ça a l’air d’être un véritable fourre-tout de souvenirs et de babioles en tout genre.
          </p>
          <p>
            On aperçoit de loin sur notre gauche la pagode au 5 étages, cachés derrière les quelques cerisiers en
            fleurs.
          </p>
          <ImageAsPortrait>
            <SensojiCherryPagodaImage />
          </ImageAsPortrait>
          <p>On marche le long du chemin, où les lanternes surplombent toute l’allée.</p>
          <p>
            Cela nous emmène à une deuxième porte tout aussi impressionnante, dur d’en profiter avec un monde pareil,
            mais bon nous sommes à Tokyo et on savait à quoi s’en tenir.
          </p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <SensojiLantern1Image />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <SensojiLantern2Image />
            </ImageAsLandscapeOnTheRight>
            <TwoImagesSameSizeOrToGroup>
              <SensojiTemple1Image />
              <SensojiTemple2Image />
            </TwoImagesSameSizeOrToGroup>
          </GroupOfImages>
          <p>
            On arrive enfin au temple, malgré le monde, on est quand même bien content de s’être déplacé, les immenses
            portes sont magnifiques, le temple également, on aurait pu passer des heures à tout observer dans les
            moindres détails.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <SensojiTemple3Image />
            </ImageAsPortrait>
            <TwoImagesSameSize>
              <SensojiTemple4Image />
              <SensojiTemple5Image />
            </TwoImagesSameSize>
          </GroupOfImages>
          <p>
            Une fois le temple visité on en profite pour aller faire un tour au jardin qui est juste à côté, en passant
            par la pagode que nous apercevions de loin.
          </p>
          <TwoImagesSameSize
            css={css`
              @media (min-width: 992px) {
                width: 80%;
              }
            `}
          >
            <SensojiPagoda1Image />
            <SensojiPagoda2Image />
          </TwoImagesSameSize>
          <p>
            Soudain on a l’impression d’être parti à des kilomètres du temple tellement c’est calme. Petit temple,
            mémorial, lac, un jardin petit à côté de l’immensité du temple de Senso-Ji mais qui fait un plus à ce lieu
            si incontournable.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <SensojiGarden1Image />
            </ImageAsPortrait>
            <TwoImagesSameSize
              css={css`
                @media (min-width: 992px) {
                  width: 80%;
                }
              `}
            >
              <SensojiGarden2Image />
              <SensojiGarden3Image />
            </TwoImagesSameSize>
          </GroupOfImages>
        </Visit>
        <Conclusion>
          Le troisième week-end du mois de Mai on y célèbre le Sanja Matsuri qui attire énormément de monde, Japonais
          comme étrangers. Vous pourrez y observer des Yakuzas, faire parti du défilé ou encore danser tout ça dans le
          respect le plus total puisqu’il ne faut pas oublier que c’est une fête religieuse.
        </Conclusion>
        <JapanDivider />
        <JapanComments collectionName="asia/japan/tokyo/sensoji" />
      </BlogLayout>
    </>
  )
}

export default IndexPage

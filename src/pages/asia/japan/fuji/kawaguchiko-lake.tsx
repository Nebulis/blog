import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  ImageAsPortrait,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { Bonus, How, HowLong, Visit, WhereToStay } from "../../../../components/core/section"
import { KawaguchikoTrainImage } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoTrainImage"
import { KawaguchikoViewFujiTrainImage } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoViewFujiTrainImage"
import { KawaguchikoFuji1Image } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoFuji1Image"
import { KawaguchikoFuji2Image } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoFuji2Image"
import { KawaguchikoLakeDuckImage } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoLakeDuckImage"
import { KawaguchikoFuji3Image } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoFuji3Image"
import { KawaguchikoLake1Image } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoLake1Image"
import { KawaguchikoLake2Image } from "../../../../components/images/asia/japan/fuji/kawaguchiko/kawaguchikoLake2Image"
import { Conclusion } from "../../../../components/core/conclusion"
import {
  FujiQuote,
  JapanBlogLayout,
  JapanExternalLink,
  JapanLink,
  JapanTitle,
} from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/fuji/kawaguchiko-lake.json"
import translationEn from "../../../../locales/en/asia/japan/fuji/kawaguchiko-lake.json"
import HomeImgUrl from "../../../../images/asia/japan/fuji/kawaguchiko/fuji-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"

const namespace = "asia/japan/fuji/kawaguchiko-lake"
const id = "kawaguchiko-lake"
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
          <SharedJapanImages image="mainFuji" />
        </ImageAsLandscape>
        <FujiQuote />
        <How>
          Après une multitude de recherches, nous avons trouvé que passer par Tokyo pour redescendre au lac était la
          meilleure solution.
          <ul>
            <li>Depuis Tokyo environ 2h30</li>
          </ul>
          <p>
            Depuis la Shinjuku Station prendre la JR Chuo Line jusqu’à Otsuki Station =&gt; Environ 1h10 =&gt;
            Fonctionne avec le JR pass.
          </p>
          <p>
            Une fois à Otsuki Station aller jusqu’à Fujikyu Railway =&gt; Environ 1h =&gt; ne fonctionne pas avec le JR
            pass (1140 Yens aller).
          </p>
          <small>
            <JapanLink action="hide" to="transport-japan">
              Plus d’information sur les transports.
            </JapanLink>
          </small>
        </How>
        <HowLong>Une à deux journées pas plus.</HowLong>
        <WhereToStay>
          <p>
            Nous nous y sommes pris un peu tard pour réserver notre hôtel et nous n’avons pas eu énormément de choix.
          </p>
          <p>
            Nous avons réservé l’hôtel{" "}
            <JapanExternalLink href="https://www.booking.com/hotel/jp/shiki-no-yado-popura.fr.html?label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQHoAQH4AQuIAgGoAgO4ArL0ke0FwAIB;sid=4bab15bee9c381d39dd9173a3a402ed8;all_sr_blocks=78358205_190367269_2_0_0;checkin=2020-04-02;checkout=2020-04-03;dest_id=235417;dest_type=landmark;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=78358205_190367269_2_0_0;hpos=2;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1571060402;srpvid=12af6019c07100a9;type=total;ucfs=1&#_">
              Shiki-No Yado Fujisan
            </JapanExternalLink>
            , pas trop cher, très bon emplacement. Les chambres font un peu vieillottes par contre, mais la vue sur le
            lac ou le Mont Fuji est appréciable.
          </p>
          <p>
            <small>
              <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Himeji%2C+Himeji%2C+Japon">
                Comparez et réservez votre hôtel.
              </JapanExternalLink>
            </small>
          </p>
        </WhereToStay>
        <Visit>
          <p>
            Le train pour y aller est très lent, on a l’impression de ne plus être au Japon mais dans un monde à part.
            Cela dit nous avons trouvé ça assez sympa, on peut profiter du paysage, découvrir de nouveaux petits
            villages et déjà apercevoir le Mont Fuji pendant le trajet.
          </p>
          <GroupOfImages>
            <ImageAsLandscapeOnTheLeft>
              <KawaguchikoTrainImage />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <KawaguchikoViewFujiTrainImage />
            </ImageAsLandscapeOnTheRight>
          </GroupOfImages>
          <p>Une fois à la gare, direction le lac pour y faire une balade avant que le soleil se couche.</p>
          <p>La vue sur le Mont Fuji est magnifique le jour comme le soir, au moment du coucher du soleil.</p>
          <p>
            Faire le tour du lac est intéressant si vous cherchez le meilleur spot pour vos photos, ou pour un grand bol
            d’air. On trouve des locations de vélo un peu partout, notre hôtel en prêtait d’ailleurs donc nous supposons
            que c’est un peu le cas pour tous.
          </p>
          <GroupOfImages>
            <ImageAsLandscape>
              <KawaguchikoFuji1Image />
            </ImageAsLandscape>
            <TwoImagesSameSizeOrToGroup>
              <KawaguchikoFuji2Image />
              <KawaguchikoLakeDuckImage />
            </TwoImagesSameSizeOrToGroup>
          </GroupOfImages>
          <p>
            Néanmoins, la ville en elle-même n’a que très peu d’intérêt. Une ville un peu fantôme, nous n’avions aucun
            restaurant d’ouvert le soir alors que nous étions là en pleine saison touristique, un peu déçu sur ce
            point-là.
          </p>
          <p>
            Cela dit l’endroit vaut le détour pour une journée malgré tout, le train est déjà une petite attraction, la
            promenade autour du lac après le vacarme des villes fait quand même un bien fou, et la vue sur le Mont est
            exceptionnelle.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <KawaguchikoFuji3Image />
            </ImageAsPortrait>
            <TwoImagesSameSize>
              <KawaguchikoLake1Image />
              <KawaguchikoLake2Image />
            </TwoImagesSameSize>
          </GroupOfImages>
        </Visit>
        <Conclusion>
          L’ascension du Mont Fuji se ferait entre 4h et 8h. Avec ses 3 776 m, le Fuji-san de son nom japonais est le
          point culminant du Japon.
        </Conclusion>
        <Bonus>
          Si vous avez envie d’une autre vue du Mont Fuji vous pouvez vous rendre à la <b>Chureito Pagoda</b>. Il y a
          pas mal de marches pour y accéder (environ 400), mais la vue est paraît-il splendide.
        </Bonus>
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

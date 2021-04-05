import React from "react"
import SEO from "../../../../components/layout/seo"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsPortrait,
  TwoImagesSameSize,
  TwoImagesSameSizeOrToGroup,
} from "../../../../components/images/layout"
import { How, HowLong, HowMuch, Visit, When, Where, WhereToStay } from "../../../../components/core/section"
import { css } from "@emotion/react"
import { ToganjiEntrance1Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiEntrance1Image"
import { ToganjiEntrance2Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiEntrance2Image"
import { ToganjiStatue1Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiStatue1Image"
import { ToganjiStatue2Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiStatue2Image"
import { ToganjiStatue3Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiStatue3Image"
import { ToganjiEntrance3Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiEntrance3Image"
import { ToganjiBuddha1Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiBuddha1Image"
import { ToganjiBuddha3Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiBuddha3Image"
import { ToganjiBuddha2Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiBuddha2Image"
import { Conclusion } from "../../../../components/core/conclusion"
import { ToganjiEntrance4Image } from "../../../../components/images/asia/japan/nagoya/toganji/toganjiEntrance4Image"
import { largeStart } from "../../../../components/core/variables"
import {
  JapanBlogLayout,
  JapanExternalLink,
  JapanLine,
  JapanLink,
  JapanTitle,
  ToganjiQuote,
} from "../../../../components/core/japan/japan"
import { PageProps } from "gatsby"
import { SharedJapanImages } from "../../../../components/images/asia/japan/shared-japan-images"
import i18n from "i18next"
import translationFr from "../../../../locales/fr/asia/japan/nagoya/toganji.json"
import translationEn from "../../../../locales/en/asia/japan/nagoya/toganji.json"
import HomeImgUrl from "../../../../images/asia/japan/nagoya/toganji/toganji-main.jpg"
import { useCustomTranslation } from "../../../../i18n-hook"

const namespace = "asia/japan/nagoya/toganji"
const id = "toganji"
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
          <SharedJapanImages image="mainNagoya" />
        </ImageAsLandscape>
        <ToganjiQuote />
        <Where>2 Chome-16 Yotsuyatori, Chikusa Ward, Nagoya</Where>
        <When>Tous les jours, 24h / 24h</When>
        <How>
          Depuis la plupart des grandes villes il est possible de se rendre à Nagoya en Shinkansen.
          <ul>
            <li>Depuis Tokyo environ 2h.</li>
            <li>Depuis Kyoto environ 40 min.</li>
            <li>Depuis Osaka environ 1h.</li>
            <small>
              <JapanLink action="hide" to="transport-japan">
                Plus d’information sur les transports.
              </JapanLink>
            </small>
          </ul>
          <p>
            Depuis la gare de Nagoya, prendre la{" "}
            <JapanLine
              href="https://www.google.com/maps/dir/?api=1&origin=Nagoya%20Station%2C%201%20Chome-1-4%20Meieki%2C%20Nakamura%20Ward%2C%20Nagoya%2C%20Aichi%2C%20Japan&destination=Motoyama%20Station%2C%201%20Chome-18-1%20Yotsuyatori%2C%20Chikusa%20Ward%2C%20Nagoya%2C%20Aichi%20464-0819%2C%20Japan&travelmode=transit"
              css={css`
                background-color: #f2f200;
                color: #000000;
              `}
            >
              Higashiyama Line
            </JapanLine>
            jusqu’à Motoyama Station (16 mins – 8 arrêts). Prendre la sortie A puis continuez tout droit pendant environ
            5 minutes (direction Sud), l’entrée se trouve sur votre gauche dans une petite allée juste après un grand
            mur en pierre.
          </p>
        </How>
        <HowLong>Une demi-journée.</HowLong>
        <HowMuch>
          <p>Gratuit.</p>
        </HowMuch>
        <WhereToStay>
          <p>
            Nous avions décidé de dormir près du château de Nagoya, notre hôtel le{" "}
            <JapanExternalLink href="https://www.booking.com/hotel/jp/kuretake-inn-nagoya-hisayaodori.fr.html?aid=304142;label=gen173nr-1FCAEoggI46AdIM1gEaE2IAQGYAQ24ARfIAQzYAQHoAQH4AQuIAgGoAgO4At_li-0FwAIB;sid=4bab15bee9c381d39dd9173a3a402ed8;atlas_src=sr_iw_btn;dist=0;room1=A%2CA;sb_price_type=total;type=total;ucfs=1&">
              Kuretake Inn Nagoya Hisayaodori
            </JapanExternalLink>{" "}
            était très bien situé, tout proche du métro et du château, tout ce que nous recherchions.
          </p>
          <p>
            Cela dit pour aller au temple c’était à environ 30-40 minutes. Cela nous convenait mais{" "}
            <JapanExternalLink href="https://www.booking.com/searchresults.fr.html?ss=Himeji%2C+Himeji%2C+Japon">
              vous préférez peut-être un hôtel plus proche.
            </JapanExternalLink>
          </p>
        </WhereToStay>
        <Visit>
          <p>
            Une fois sorti du métro, nous avons un peu douté d’être au bon endroit. Il n’y avait clairement personne.
            Mais nous avons fait confiance à Google Map.
          </p>
          <p>
            Au bout d’une petite dizaine de marche, on aperçoit sur le côté une rue qui contraste un peu avec tout le
            reste. Nous avons d’ailleurs eu d’abord l’impression de rentrer chez des gens.
          </p>
          <TwoImagesSameSize
            css={css`
              @media (min-width: ${largeStart}) {
                width: 80%;
              }
            `}
          >
            <ToganjiEntrance1Image />
            <ToganjiEntrance2Image />
          </TwoImagesSameSize>
          <p>
            Au bout du chemin, on arrive à un endroit où il y a pleins de petits temples, des statues et quelques
            endroits de prière, le tout dans une végétation particulièrement épaisse. Le temple était fermé quand nous y
            sommes allés mais nous venions principalement pour le Bouddha.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <ToganjiStatue3Image
                css={css`
                  max-width: 450px;
                `}
              />
            </ImageAsPortrait>
            <TwoImagesSameSizeOrToGroup>
              <ToganjiStatue1Image />
              <ToganjiStatue2Image />
            </TwoImagesSameSizeOrToGroup>
          </GroupOfImages>
          <p>
            Nous ne comprenons pas tout ce que nous voyons, c’est un peu le fouilli soyons honnête, on a l’impression
            d’être rentré à un endroit un peu interdit. Mais à un moment, il y a des escaliers et sur notre gauche on a
            enfin une vue sur la statue et il y a quelques personnes à côté, cela nous a nettement rassuré.
          </p>
          <GroupOfImages>
            <TwoImagesSameSize>
              <ToganjiEntrance3Image />
              <ToganjiBuddha1Image />
            </TwoImagesSameSize>
            <ImageAsPortrait>
              <ToganjiEntrance4Image />
            </ImageAsPortrait>
          </GroupOfImages>
          <p>
            Vu sa grandeur, cela fait d’autant plus bizarre de l’apercevoir au dernier moment. C’est un peu ce qui en
            fait son charme d’ailleurs.
          </p>
          <p>
            Bon l’endroit peut faire un peu peur c’est sur, il n’y a clairement personne, comme si le lieu était
            totalement abandonné ou oublié du reste du monde.
          </p>
          <p>Mais la statue est tellement impressionnante qu’on en oublie cette petite aventure.</p>
          <GroupOfImages>
            <ImageAsPortrait>
              <ToganjiBuddha3Image />
            </ImageAsPortrait>
            <ImageAsPortrait>
              <ToganjiBuddha2Image />
            </ImageAsPortrait>
          </GroupOfImages>
        </Visit>
        <Conclusion>
          Endroit totalement isolé, presque comme coupé du monde, il ne faut pas hésiter à s’y aventurer pour découvrir
          ce géant vert surnommé le Grand Bouddha de Nagoya.
        </Conclusion>
      </JapanBlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import SEO from "../../../../components/layout/seo"
import { BlogLayout } from "../../../../components/layout/layout"
import { JapanTitle } from "../../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  TwoImagesSameSize,
  ImageAsPortrait,
  ImageAsTwoLandscapeLeftAndOnePortraitRight,
  TwoImagesLeftBigger,
} from "../../../../components/images/layout"
import { MainTokyoImage } from "../../../../components/images/asia/japan/tokyo/adayintokyo/mainTokyoImage"
import { SectionContent, Visit } from "../../../../components/core/section"
import { TokyoShibuyaCrossing1Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoShibuyaCrossing1Image"
import { TokyoShibuyaCrossing2Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoShibuyaCrossing2Image"
import { TokyoTakeshitaStreet1Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet1Image"
import { TokyoTakeshitaStreet2Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet2Image"
import { TokyoTakeshitaStreet3Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet3Image"
import { TokyoTakeshitaStreet4Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet4Image"
import { JapanCity } from "../../../../components/core/highlight"
import { JapanDivider } from "../../../../components/core/divider"
import css from "@emotion/css"
import { TokyoUenoPark1Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoUenoPark1Image"
import { TokyoUenoPark2Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoUenoPark2Image"
import { TokyoUenoPark3Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoUenoPark3Image"
import { TokyoUenoPark4Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoUenoPark4Image"
import { TokyoYasukuni1Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoYasukuni1Image"
import { TokyoYasukuni2Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoYasukuni2Image"
import { TokyoYasukuni3Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoYasukuni3Image"
import { TokyoYasukuni4Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoYasukuni4Image"
import { TokyoYasukuni5Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoYasukuni5Image"
import { SensojiQuote } from "../../../../components/core/japan"
import { JapanCard } from "../../../../components/card"
import { MainSensojiImage } from "../../../../components/images/asia/japan/tokyo/sensoji/mainSensojiImage"
import { JapanLink } from "../../../../components/core/links/link"
import { Conclusion } from "../../../../components/core/conclusion"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="a-day-in-tokyo">
        <JapanTitle title="Une journée à Tokyo" categories={["asia", "japan", "tokyo"]} />
        <ImageAsLandscape>
          <MainTokyoImage />
        </ImageAsLandscape>
        <p>
          N’ayant qu’une journée à Tokyo, nous ne pouvions quand même pas passer à côté d’une petite visite des lieux
          que nous avons jugé incontournable pour nous.
        </p>
        <JapanDivider />
        <JapanCity>Arrondissement de Shibuya</JapanCity>
        <JapanDivider />
        <p>
          En premier lieu, direction le célèbre arrondissement de Shibuya, cet immense quartier qui rassemble les spots
          que nous avons préféré dans Tokyo.
        </p>
        <Visit title="Shibuya Crossing">
          <p>
            Shibuya Crossing, vous en avez déjà forcément tous entendu parlé. La traversée des passages piétons est une
            véritable attraction, se trouver un endroit pour regarder ses milliers de petites fourmis se presser quand
            ils peuvent traverser, l’est encore plus.
          </p>
          <p>
            On nous a souvent parlé du Starbuck comme étant le meilleur spot pour avoir une vue d’ensemble, nous n’avons
            clairement pas été totalement convaincu et nous pensons qu’il y a beaucoup mieux.
          </p>
          <TwoImagesSameSize>
            <TokyoShibuyaCrossing1Image />
            <TokyoShibuyaCrossing2Image />
          </TwoImagesSameSize>
        </Visit>
        <Visit title="Takeshita Street">
          <p>
            Cette rue très animé est LE rdv des jeunes et des cosplay. Endroit totalement déjanté où on peut trouver
            toutes sortes de magasins quelque peu excentrique. Vous pourrez même y acheter une barbe à papa arc en ciel
            pour vous fondre dans la masse.
          </p>
          <p>Allez-y le Dimanche, vous y verrez encore plus de cosplays.</p>
          <GroupOfImages>
            <TwoImagesSameSize
              css={css`
                @media (min-width: 992px) {
                  width: 80%;
                }
              `}
            >
              <TokyoTakeshitaStreet1Image />
              <TokyoTakeshitaStreet2Image />
            </TwoImagesSameSize>
            <TwoImagesSameSize
              css={css`
                @media (min-width: 992px) {
                  width: 80%;
                }
              `}
            >
              <TokyoTakeshitaStreet3Image />
              <TokyoTakeshitaStreet4Image />
            </TwoImagesSameSize>
          </GroupOfImages>
          <p>Le quartier est également connu pour ses multiples boutiques de mode.</p>
        </Visit>
        <JapanDivider />
        <JapanCity>Parc d’Ueno</JapanCity>
        <JapanDivider />
        <SectionContent>
          <p>
            Nous y étions en Avril et qui dit mois d’avril dit saison des cerisiers. Qui dit saison des cerisiers dit
            l’incontournable parc d’Ueno, le plus grand parc de Tokyo.
          </p>
          <p>En plus d’un parc et d’un lac pour se promener, vous pourrez y découvrir de nombreux temples.</p>
          <p>
            Le parc est clairement intéressant si vous venez à la saison des Sakura et que vous n’avez pas prévu de
            sortir de Tokyo. Il est surtout connu pour son immense allée où l’on passe en dessous des cerisiers.
          </p>
          <GroupOfImages>
            <ImageAsPortrait
              css={css`
                max-width: 450px;
              `}
            >
              <TokyoUenoPark1Image />
            </ImageAsPortrait>
            <ImageAsTwoLandscapeLeftAndOnePortraitRight>
              <TokyoUenoPark2Image />
              <TokyoUenoPark3Image />
              <TokyoUenoPark4Image />
            </ImageAsTwoLandscapeLeftAndOnePortraitRight>
          </GroupOfImages>
          <p>
            Tout proche se trouve le populaire <b>marché d’Ameyoko</b>. Vous y trouverez un peu de tout aux prix
            dérisoires, des vêtements, accessoires, souvenirs et quelques stands de nourritures.
          </p>
        </SectionContent>
        <JapanDivider />
        <JapanCity>L’avenue Yasukuni-dori</JapanCity>
        <JapanDivider />
        <SectionContent>
          <p>
            Ce n’est pas forcément un endroit incontournable mais nous dormions pas loin et nous avons beaucoup aimé
            nous promener dans ces rues aux allures de Time Square. Le soir était tout autant intéressant, avenue animé,
            bar bondé et musique d’ambiance.
          </p>
          <GroupOfImages>
            <ImageAsPortrait>
              <TokyoYasukuni1Image />
            </ImageAsPortrait>
            <TwoImagesLeftBigger>
              <TokyoYasukuni2Image />
              <TokyoYasukuni3Image />
            </TwoImagesLeftBigger>
            <TwoImagesSameSize>
              <TokyoYasukuni4Image />
              <TokyoYasukuni5Image />
            </TwoImagesSameSize>
          </GroupOfImages>
        </SectionContent>
        <JapanDivider />
        <JapanCity>Le temple de Senso-Ji</JapanCity>
        <JapanDivider />
        <p>
          Nous y sommes allés en fin d’après-midi et malheureusement le soleil était parti, la nuit commençait à tomber
          et la pluie s’est invité (tout un programme !). Cela dit ça n’a pas empêché le lieu d’être pleins de mondes et
          les temples et jardins autour valent clairement le détour.
        </p>
        <article>
          <JapanCard title="Le temple de Senso-Ji" to="sensoji">
            <MainSensojiImage />
            <SensojiQuote />
          </JapanCard>
        </article>
        <JapanDivider />
        <SectionContent>
          <p>
            Pas le temps de s’attarder, la journée est passé à une allure et nous avons réussi à faire tout ce que nous
            voulions.
          </p>
          <p>
            Pas si simple de faire Tokyo en une journée, il y a tellement de choses à voir, mais nous voulions nous
            concentrer sur les plus petites villes et au final nous ne le regrettons pas, le calme ça fait du bien.
          </p>
          <p>
            On vous propose d’ailleurs{" "}
            <JapanLink action="hide" to="hamarikyu-garden">
              un véritable havre de paix en plein Tokyo
            </JapanLink>{" "}
            pour vous ressourcer après ce brouhaha de la ville.
          </p>
        </SectionContent>
        <Conclusion>
          Tokyo, une ville à cent à l’heure qui mérite qu’on s’y attarde. Entre modernité et authenticité, elle regorge
          d’endroits à visiter et de découvertes à faire.
        </Conclusion>
      </BlogLayout>
    </>
  )
}

export default IndexPage

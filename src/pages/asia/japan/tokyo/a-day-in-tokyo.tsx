import React from "react"
import SEO from "../../../../components/layout/seo"
import { BlogLayout } from "../../../../components/layout/layout"
import { JapanTitle } from "../../../../components/core/title"
import {
  ImageAsLandscape,
  TwoImagesLeftBigger,
  TwoImagesSameSize,
  GroupOfImages,
} from "../../../../components/images/layout"
import { MainTokyoImage } from "../../../../components/images/asia/japan/tokyo/adayintokyo/mainTokyoImage"
import { SectionTitle, SectionContent } from "../../../../components/core/section"
import { TokyoShibuyaCrossing1Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoShibuyaCrossing1Image"
import { TokyoShibuyaCrossing2Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoShibuyaCrossing2Image"
import { TokyoTakeshitaStreet1Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet1Image"
import { TokyoTakeshitaStreet2Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet2Image"
import { TokyoTakeshitaStreet3Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet3Image"
import { TokyoTakeshitaStreet4Image } from "../../../../components/images/asia/japan/tokyo/adayintokyo/tokyoTakeshitaStreet4Image"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="a-day-in-tokyo">
        <JapanTitle title="Une journée à Tokyo" categories={["asia", "japan", "tokyo"]} />
        <ImageAsLandscape>
          <MainTokyoImage />
        </ImageAsLandscape>
        <SectionContent>
          <p>
            N’ayant qu’une journée à Tokyo, nous ne pouvions quand même pas passer à côté d’une petite visite des lieux
            que nous avons jugé incontournable pour nous.
          </p>
        </SectionContent>
        <SectionTitle>Arrondissement de Shibuya</SectionTitle>
        <SectionContent>
          <p>
            En premier lieu, direction le célèbre arrondissement de Shibuya, cet immense quartier qui rassemble les
            spots que nous avons préféré dans Tokyo.
          </p>
        </SectionContent>
        <SectionTitle>Shibuya Crossing</SectionTitle>
        <SectionContent>
          <p>
            Shibuya Crossing, vous en avez déjà forcément tous entendu parlé. La traversée des passages piétons est une
            véritable attraction, se trouver un endroit pour regarder ses milliers de petites fourmis se presser quand
            ils peuvent traverser, l’est encore plus.
          </p>
          <p>
            On nous a souvent parlé du Starbuck comme étant le meilleur spot pour avoir une vue d’ensemble, nous n’avons
            clairement pas été totalement convaincu et nous pensons qu’il y a beaucoup mieux.
          </p>
        </SectionContent>
        <TwoImagesSameSize>
          <TokyoShibuyaCrossing1Image />
          <TokyoShibuyaCrossing2Image />
        </TwoImagesSameSize>
        <SectionTitle>Takeshita Street</SectionTitle>
        <SectionContent>
          <p>
            Cette rue très animé est LE rdv des jeunes et des cosplay. Endroit totalement déjanté où on peut trouver
            toutes sortes de magasins quelque peu excentrique. Vous pourrez même y acheter une barbe à papa arc en ciel
            pour vous fondre dans la masse.
          </p>
          <p>Allez-y le Dimanche, vous y verrez encore plus de cosplays.</p>
        </SectionContent>
        <GroupOfImages>
          <TwoImagesSameSize>
            <TokyoTakeshitaStreet1Image />
            <TokyoTakeshitaStreet2Image />
          </TwoImagesSameSize>
          <TwoImagesSameSize>
            <TokyoTakeshitaStreet3Image />
            <TokyoTakeshitaStreet4Image />
          </TwoImagesSameSize>
        </GroupOfImages>
      </BlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import { css } from "@emotion/core"
import { JapanMap } from "../../../components/country/japanMap"
import {
  ADayInTokyoCard,
  ArashiyamaCard,
  DaigojiCard,
  FushimiInariTaishaCard,
  HamarikyuGardenCard,
  HimejiCastleCard,
  KinkakujiCard,
  NagoyaCastleCard,
  SpringInJapanQuote,
  ToganjiCard,
} from "../../../components/core/japan"
import { SectionContent, WhatTimeOfYear, Where } from "../../../components/core/section"
import { JapanCity } from "../../../components/core/highlight"
import SEO from "../../../components/layout/seo"
import { Conclusion } from "../../../components/core/conclusion"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import { JapanTitle } from "../../../components/core/title"
import { JapanDivider } from "../../../components/core/divider"
import { BlogLayout } from "../../../components/layout/layout"

const IndexPage = () => {
  return (
    <>
      <SEO title="japan" />
      <BlogLayout page="spring-in-japan">
        <JapanTitle title="Le Japon au printemps" categories={["asia", "japan"]} linkId="spring-in-japan" />
        <MainImage />
        <SpringInJapanQuote />
        <WhatTimeOfYear title="Pourquoi au printemps ?">
          <p>
            Contrairement au pays où la farniente et les plages sont de mises, pour le Japon il n’y a pas de meilleure
            période à proprement parlé, tout dépend de ce que vous voulez y faire et de quel type de paysage vous voulez
            voir. L’été, il fait chaud et humide, on vous le déconseille fortement si vous voulez visiter sans être en
            sueur à peine sorti de votre hôtel (surtout en Août).
          </p>
          <p>
            De notre côté nous avons donc décidé d’y aller en Avril là où la floraison des cerisiers est la plus
            abondante dans la plupart des endroits du pays. Mais attention qui dit saison des cerisiers dit saison
            touristique, alors préparez vous quand même aux prix plus élevés et aux hordes de touristes à certains
            endroits.
          </p>
          <p>
            Nous y retournerons certainement à une autre saison, pour voir de nouveaux paysages et découvrir une autre
            façon d’y voyager.
          </p>
        </WhatTimeOfYear>
        <Where title="Notre itinéraire">
          <p>
            Nous n’avions malheureusement pas beaucoup de temps, qu’une petite semaine pour visiter le maximum de choses
            et SURTOUT à diverses endroits.
          </p>
          <p>
            Atterrissage à Tokyo et direction Himeji pour remonter ensuite vers Tokyo, en passant par Kyoto, Nagoya et
            le Mt Fuji.
          </p>
          <p>
            Nous préférions faire le grand trajet le premier jour et ensuite en remontant faire les haltes là où nous
            avions prévu de visiter pour en profiter au maximum et faire des pauses, parce que les transports en commun
            c’est bien beau, c’est bien pratique (surtout au Japon ! Et il faut quand même le dire, les trains sont très
            très confortables) mais au bout d’un moment c’est lassant.
          </p>
          <p>Let’s go …</p>
        </Where>
        <div
          className="overflow-hidden tc"
          css={css`
            @media (max-width: 768px) {
              display: none;
            }
          `}
        >
          <JapanMap />
        </div>
        <JapanDivider />
        <section>
          <JapanCity>Jour 1 - Himeji</JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              Nous avons fait pas mal de recherches avant de se décider sur quel itinéraire prendre pour une petite
              semaine, et il nous a été clair que venir à la période des cerisiers en fleurs sans passer par Himeji et
              plus particulièrement son château aurait été vraiment dommage.
            </p>
            <p>
              Après une journée dans les transports et une nuit bien reposante nous voici donc à la découverte de notre
              premier lieu, ce sublime château et ses quelques cerisiers, qui nous ont d’ailleurs un peu boudé au début.
            </p>
          </SectionContent>
          <article>
            <HimejiCastleCard />
          </article>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>Jour 2 & 3 - Kyoto</JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>Départ pour Kyoto pour deux journées bien chargées, enfin dans notre planning en tout cas. </p>
            <p>
              Premier jour, on tente déjà de se familiariser avec la ville qui est beaucoup plus grande et touristique
              que Himeji, le matin direction Arashiyama, la forêt de bambous géants, nous pensions cela plus grand mais
              nous y avons passé une bonne matinée quand même, nous en avons profité pour visiter un peu les alentours,
              la forêt est entourée de petites rues remplies de maisons que l’on ne voit qu’ici. On avait envie d’en
              découvrir un peu plus et ça même si ce n’était pas dans notre plan de base.
            </p>
          </SectionContent>
          <article>
            <ArashiyamaCard />
          </article>
          <JapanDivider />
          <SectionContent>
            <p>
              L’après midi direction le temple de Kinkakuji, là aussi nous avons pris notre temps, d’autant plus que le
              terrain est immense et puis il faut dire que, avec le monde qu’il y a à chaque fois, il faut s’armer de
              patience pour prendre des photos sans trop de mondes autour.
            </p>
          </SectionContent>
          <article>
            <KinkakujiCard />
          </article>
          <JapanDivider />
          <SectionContent>
            <p>
              Nous devions faire <b>le château de Nijo-jo</b> dans la foulée mais il fermait à 16h et comme nous avions
              décidé de profiter au maximum à chaque endroit, nous n’avions plus le temps d’y aller.
            </p>
            <p>
              Deuxième jour, direction Daigo-ji. Là encore nous ne pensions pas cela aussi grand, nous avions compris
              que c’était uniquement un temple et au final c’était bien plus que ça, nous y sommes restés une bonne
              matinée et ce jour là les cerisiers étaient présents pour notre plus grand bonheur.
            </p>
          </SectionContent>
          <article>
            <DaigojiCard />
          </article>
          <JapanDivider />
          <SectionContent>
            <p>
              Direction Fushimi Inari Taisha, et là malheureusement la météo a fait des siennes, la pluie s’était invité
              pour la première fois de notre séjour et même si le soleil est réapparu pendant la visite ça nous a un peu
              coupé dans notre élan.
            </p>
          </SectionContent>
          <article>
            <FushimiInariTaishaCard />
          </article>
          <SectionContent>
            <p>
              Nous devions visiter <b>le temple Kiyomisu</b> ensuite mais il était en travaux et nous avons donc décidé
              de s’arrêter pour ce jour là.
            </p>
          </SectionContent>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>Jour 4 - Nagoya</JapanCity>
          <JapanDivider />

          <SectionContent>
            <p>
              Petite journée à Nagoya pour visiter un deuxième château, après le magnifique château blanc de Himeji nous
              voulions également voir celui de Nagoya, les jardins sont d’ailleurs beaucoup plus grand et plus fleuries,
              contrairement à Himeji il n’y a pas que des cerisiers.
            </p>
          </SectionContent>
          <article>
            <NagoyaCastleCard />
          </article>
          <JapanDivider />

          <SectionContent>
            <p>
              Direction le temple de Togan-Ji, à priori très peu connu, un peu caché d’ailleurs, on vous le conseille
              vraiment si vous êtes de passage à Nagoya, une petite promenade pour découvrir cette immense statue, ce
              n’est pas un incontournable mais si vous avez du temps profitez-en.
            </p>
          </SectionContent>
          <article>
            <ToganjiCard />
          </article>

          <SectionContent>
            <p>
              Si vous êtes à Nagoya en automne on vous conseille également de faire <b>le Tokugawa-En Garden</b>, un
              parc qui a l’air juste magnifique quand les feuilles rouges des érables apparaissent.
            </p>
          </SectionContent>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>Jour 5 - Tokyo</JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              Nous n’avions pas beaucoup de temps à Tokyo car nous nous étions surtout concentré sur les plus petites
              villes qui nous intéressaient bien plus. Mais comment passer au Japon sans rester au minimum une journée à
              Tokyo.
            </p>
            <p>
              Au programme pour cette journée : Cerisiers au parc Ueno, Cosplay à Takeshita Street, incontournable
              Shibuya Crossing et visite du temple de Senso-Ji.
            </p>
          </SectionContent>
          <article>
            <ADayInTokyoCard />
          </article>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>Jour 6 - Mt. Fuji</JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              N’ayant ni le temps, ni le courage de faire l’ascension du Mont Fuji, nous voulions quand même le voir de
              près. Après plusieurs recherches pour déterminer à quel endroit cela nous plairait le plus, nous avons
              opté pour l’un des 5 lacs qui l’entoure, le lac Kawaguchi.
            </p>
          </SectionContent>
          <article>
            <HamarikyuGardenCard />
          </article>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>Jour 7 - Tokyo</JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              Dernière matinée au Japon, et après tous ces jours intensifs sans vraiment trop de repos, nous avons
              cherché un endroit au calme qui pourrait nous détendre avant de reprendre l’avion. Nous avons mis pas mal
              de temps à chercher, mais nous avons trouvé un véritable endroit paisible en plein Tokyo.
            </p>
          </SectionContent>
          <article>
            <HamarikyuGardenCard />
          </article>
        </section>
        <JapanDivider />
        <Conclusion>
          Le Japon est un pays riche en découverte. Que vous aimiez la nature ou la ville, le côté culturel ou bien
          l’excentricité. Foncez, vous ne le regretterez pas !
        </Conclusion>
      </BlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import { css } from "@emotion/core"
import { JapanMap } from "../../../components/country/japanMap"
import {
  ArashiyamaQuote,
  DaigojiQuote,
  FujiQuote,
  FushimiInariTaishaQuote,
  HamarikyuGardenQuote,
  HimejiCastleQuote,
  KinkakujiQuote,
  NagoyaCastleQuote,
  SpringInJapanQuote,
  ToganjiQuote,
  TokyoQuote,
} from "../../../components/core/japan"
import { HowLong, HowMuch, SectionContent, WhatTimeOfYear, Where } from "../../../components/core/section"
import { JapanCity } from "../../../components/core/highlight"
import { Header } from "../../../components/layout/header"
import { Maintenance } from "../../../components/layout/maintenance"
import SEO from "../../../components/layout/seo"
import { Conclusion } from "../../../components/core/conclusion"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import { MainHimejiCastleImage } from "../../../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { JapanCard } from "../../../components/Card"
import { MainKinkakujiImage } from "../../../components/images/asia/japan/kyoto/kinkakuji/mainKinkakujiImage"
import { MainDaigojiImage } from "../../../components/images/asia/japan/kyoto/daigoji/mainDaigojiImage"
import { MainNagoyaCastleImage } from "../../../components/images/asia/japan/nagoya/castle/mainNagoyaCastleImage"
import { MainFujiImage } from "../../../components/images/asia/japan/mainFujiImage"
import { JapanTitle } from "../../../components/core/title"
import { MainArashiyamaImage } from "../../../components/images/asia/japan/kyoto/arashiyama/mainArashiyamaImage"
import { Menu } from "../../../components/layout/menu"
import { MainFushimiImage } from "../../../components/images/asia/japan/kyoto/fushimi/mainFushimiImage"
import { getLinkUrl } from "../../../utils/links"
import { ImageAsPortrait } from "../../../components/images/layout"
import { MainTokyoImage } from "../../../components/images/asia/japan/mainTokyoImage"
import { MainToganjiImage } from "../../../components/images/asia/japan/mainToganjiImage"
import { MainHamarikyuGardenImage } from "../../../components/images/asia/japan/mainHamarikyuGardenImage"
import { JapanDivider } from "../../../components/core/divider"
import cherryBlossom from "../../../images/asia/japan/cherry-blossom.png"

const IndexPage = () => {
  return (
    <>
      <SEO title="japan" />
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
        <JapanTitle title="Le Japon au printemps" categories={["asia", "japan"]} />
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
        <HowLong title="Combien de temps y aller ?">
          Comme pour tout, tout dépend de ce que vous comptez y faire. Mais si comme nous, vous n’aimez pas spécialement
          rester au même endroit mais plutôt bouger un peu partout comptez vraiment au minimum deux semaines pour
          voyager à votre rythme mais en voir un maximum.
        </HowLong>
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
          <JapanCity>
            <img src={cherryBlossom} alt="Logo" /> Jour 1 - Himeji <img src={cherryBlossom} alt="Logo" />
          </JapanCity>
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
            <JapanCard title="Château de Himeji – Magnifique château du Héron Blanc" to={getLinkUrl("himeji-castle")}>
              <MainHimejiCastleImage />
              <HimejiCastleQuote />
            </JapanCard>
          </article>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>
            <img src={cherryBlossom} alt="Logo" /> Jour 2 et 3 - Kyoto <img src={cherryBlossom} alt="Logo" />
          </JapanCity>
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
            <JapanCard title="Arashiyama – Forêt de Bambous géants" to={getLinkUrl("arashiyama")}>
              <MainArashiyamaImage />
              <ArashiyamaQuote />
            </JapanCard>
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
            <JapanCard title="Temple de Kinkakuji – Le pavillon d’or" to={getLinkUrl("kinkakuji")}>
              <MainKinkakujiImage />
              <KinkakujiQuote />
            </JapanCard>
          </article>
          <JapanDivider />
          <SectionContent>
            <p>
              Nous devions faire le château de Nijo-jo dans la foulée mais il fermait à 16h et comme nous avions décidé
              de profiter au maximum à chaque endroit, nous n’avions plus le temps d’y aller.
            </p>
            <p>
              Deuxième jour, direction Daigo-ji. Là encore nous ne pensions pas cela aussi grand, nous avions compris
              que c’était uniquement un temple et au final c’était bien plus que ça, nous y sommes restés une bonne
              matinée et ce jour là les cerisiers étaient présents pour notre plus grand bonheur.
            </p>
          </SectionContent>
          <article>
            <JapanCard title="Temple Daigo-ji" to={getLinkUrl("daigo-ji")}>
              <MainDaigojiImage />
              <DaigojiQuote />
            </JapanCard>
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
            <JapanCard title="Fushimi Inari Taisha – Santuaire aux Torii" to={getLinkUrl("fushimi-inari-taisha")}>
              <MainFushimiImage />
              <FushimiInariTaishaQuote />
            </JapanCard>
          </article>
          <SectionContent>
            <p>
              Nous devions visiter le temple Kiyomisu ensuite mais il était en travaux et nous avons donc décidé de
              s’arrêter pour ce jour là.
            </p>
          </SectionContent>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>
            <img src={cherryBlossom} alt="Logo" /> Jour 4 - Nagoya <img src={cherryBlossom} alt="Logo" />
          </JapanCity>
          <JapanDivider />

          <SectionContent>
            <p>
              Petite journée à Nagoya pour visiter un deuxième château, après le magnifique château blanc de Himeji nous
              voulions également voir celui de Nagoya, les jardins sont d’ailleurs beaucoup plus grand et plus fleuries,
              contrairement à Himeji il n’y a pas que des cerisiers.
            </p>
          </SectionContent>
          <article>
            <JapanCard title="Château de Nagoya" to={getLinkUrl("nagoya-castle")}>
              <MainNagoyaCastleImage />
              <NagoyaCastleQuote />
            </JapanCard>
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
            <JapanCard title="Le temple de Togan-Ji et son grand bouddha" to={getLinkUrl("togan-ji")}>
              <ImageAsPortrait>
                <MainToganjiImage />
              </ImageAsPortrait>
              <ToganjiQuote />
            </JapanCard>
          </article>

          <SectionContent>
            <p>
              Si vous êtes à Nagoya en automne on vous conseille également de faire le Tokugawa-En Garden, un parc qui a
              l’air juste magnifique quand les feuilles rouges des érables apparaissent.
            </p>
          </SectionContent>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>
            <img src={cherryBlossom} alt="Logo" /> Jour 5 - Tokyo <img src={cherryBlossom} alt="Logo" />
          </JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              Nous n’avions pas beaucoup de temps à Tokyo car nous nous étions surtout concentré sur les plus petites
              villes qui nous intéressaient bien plus. Mais comment passer au Japon sans rester au minimum une voir deux
              journées à Tokyo. On vous propose quelques endroits à faire, parmi quelques lieux incontournables.
            </p>
          </SectionContent>
          <article>
            <JapanCard title="Une journée à Tokyo" to={getLinkUrl("tokyo")}>
              <MainTokyoImage />
              <TokyoQuote />
            </JapanCard>
          </article>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>
            <img src={cherryBlossom} alt="Logo" /> Jour 6 - Kawaguchiko <img src={cherryBlossom} alt="Logo" />
          </JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              N’ayant ni le temps, ni le courage de faire l’ascension du Mont Fuji, nous voulions quand même le voir de
              près. Après plusieurs recherches pour déterminer à quel endroit cela nous plairait le plus, nous avons
              opté pour l’un des 5 lacs qui l’entoure, le lac Kawaguchiko.
            </p>
          </SectionContent>
          <article>
            <JapanCard title="Mont Fuji - Lac Kawaguchiko" to={getLinkUrl("fuji")}>
              <MainFujiImage />
              <FujiQuote />
            </JapanCard>
          </article>
        </section>
        <JapanDivider />
        <section>
          <JapanCity>
            <img src={cherryBlossom} alt="Logo" /> Jour 7 - Tokyo <img src={cherryBlossom} alt="Logo" />
          </JapanCity>
          <JapanDivider />
          <SectionContent>
            <p>
              Dernière matinée au Japon, et après tous ces jours intensifs sans vraiment trop de repos, nous avons
              cherché un endroit au calme qui pourrait nous détendre avant de reprendre l’avion. Nous avons mis pas mal
              de temps à chercher, mais nous avons trouvé un véritable endroit paisible en plein Tokyo.
            </p>
          </SectionContent>
          <article>
            <JapanCard title="Jardin Hama Rikyu – Un havre de paix en pleine ville" to={getLinkUrl("tokyo")}>
              <MainHamarikyuGardenImage />
              <HamarikyuGardenQuote />
            </JapanCard>
          </article>
        </section>
        <JapanDivider />
        <HowMuch title="Et le prix dans tout ça ?">TODO</HowMuch>
        <Conclusion>
          Le Japon est un pays riche en découverte. Que vous aimiez la nature ou la ville, le côté culturel ou bien
          l’excentricité. Foncez, vous ne le regretterez pas !
        </Conclusion>
      </div>
    </>
  )
}

export default IndexPage

import React from "react"
import SEO from "../../../components/layout/seo"
import {
  SouthVietnamQuote,
  VietnamBlogLayout,
  VietnamDivider,
  VietnamPart,
  VietnamTitle,
} from "../../../components/core/asia/vietnam/vietnam"
import { MainSouthVietnamImage } from "../../../components/images/asia/vietnam/south-vietnam/south-vietnam-main"
import { HowLong, HowMuch, SectionContent, SectionTitle, WhatTimeOfYear, Where } from "../../../components/core/section"
import { SouthVietnamMap } from "../../../components/core/asia/vietnam/south-vietnam-map"
import {
  CanThoCard,
  CuChiTunnelsCard,
  MyThoCard,
  WarMuseumCard,
} from "../../../components/core/asia/vietnam/vietnam.cards"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
  TwoImagesSameSize,
} from "../../../components/images/layout"
import { HoChiMinhCalao1Image } from "../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-calao1"
import { HoChiMinhCalao2Image } from "../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-calao2"
import { HoChiMinhMarket1Image } from "../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-market1"
import { HoChiMinhMarket2Image } from "../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-market2"
import { HoChiMinhDragonImage } from "../../../components/images/asia/vietnam/south-vietnam/ho-chi-minh/ho-chi-minh-dragon"
import { Conclusion } from "../../../components/core/conclusion"

const IndexPage = () => {
  return (
    <>
      <SEO title="Découverte du Vietnam du Sud" />
      <VietnamBlogLayout page="discover-south-vietnam">
        <VietnamTitle
          title="Découverte du Vietnam du Sud"
          categories={["asia", "vietnam"]}
          linkId="discover-south-vietnam"
        />
        <MainSouthVietnamImage />
        <SouthVietnamQuote />
        <WhatTimeOfYear title="À quelle période ?">
          <p>La meilleure période pour partir au Vietnam du Sud est la saison sèche de Décembre à Avril.</p>
          <p>
            Évitez de vous rendre dans le Sud pendant la mousson qui se situe entre Mai et Novembre si vous ne voulez
            pas avoir de la pluie pratiquement chaque jour de votre séjour.
          </p>
          <p>
            Nous y sommes allés en Février, il y avait énormément de monde à Ho Chi Minh par contre nous n’avons eu
            aucun problème lors de nos visites aux alentours.
          </p>
        </WhatTimeOfYear>
        <HowLong>
          <p>Une semaine est suffisante pour visiter le Sud du Vietnam.</p>
          <p>
            Bien sûr tout dépend de la vitesse de vos visites ou si vous prévoyez des jours de farniente, mais pour nous
            c’était largement suffisant.
          </p>
        </HowLong>
        <HowMuch title="Combien d’argent prévoir ?">???</HowMuch>
        <Where title="Notre itinéraire">
          <p>Ho Chi Minh ↠ My Tho ↠ Ho Chi Minh ↠ Can Tho ↠ Ho Chi Minh</p>
          <p>
            À regarder comme ça, cela fait beaucoup d’aller / retour vers Ho Chi Minh mais vu que nous avions pris des
            tours avec guide pour la plupart de nos visites il était plus simple pour nous de nous retrouver toujours au
            même point. Cela dit même avec des tours avec guide vous pouvez demander de vous prendre un peu n’importe où
            sur le chemin, cela se fait sans problème si vous prévenez avant.
          </p>
        </Where>
        <div className="overflow-hidden tc">
          <SouthVietnamMap />
        </div>
        <SectionTitle>Les visites</SectionTitle>
        <SectionContent>
          <p>
            Nous avions tellement hâte de commencer nos visites au Vietnam, ce pays nous tentait depuis déjà un bon bout
            de temps sans même savoir réellement pourquoi, un feeling sûrement mais nous n’attendions qu’une chose, le
            Jour J.
          </p>
          <p>Let’s Go ...</p>
        </SectionContent>
        <VietnamDivider />
        <section>
          <VietnamPart>Connaître un peu mieux l’histoire du pays</VietnamPart>
          <VietnamDivider />
          <SectionContent>
            <p>Comment venir au Vietnam sans passer par les incontournables sites de guerre.</p>
            <p>
              On aime particulièrement se renseigner sur l’histoire du pays que l’on visite, d’autant plus qu’ici cela
              concerne malheureusement également notre pays, et que la fin de la guerre n’est d’ailleurs pas si vieille
              que ça.
            </p>
            <p>
              On commence d’abord par le musée des Vestiges de la Guerre, une sorte de film d’horreur à chaque pas, à
              chaque photographie, à chaque description. Un lieu incontournable certes mais qui vous prend au tripes
              très clairement. On vous le déconseille avec des enfants en bas âge ou si vous êtes trop sensible.
            </p>
          </SectionContent>
          <article>
            <WarMuseumCard />
          </article>
          <VietnamDivider />
          <SectionContent>
            <p>
              Puis visite des Tunnels de Cu Chi. En immersion totale dans ces tunnels très étroits où on a du mal à
              s’imaginer comment pouvaient survivre les Viêt Cong à l’intérieur et en même temps on se demande comment
              auraient-ils pu survivre sans …{" "}
            </p>
            <article>
              <CuChiTunnelsCard />
            </article>
          </SectionContent>
        </section>
        <VietnamDivider />
        <section>
          <VietnamPart>Visite de la plus grande ville du pays</VietnamPart>
          <VietnamDivider />
          <SectionContent>
            <p>
              Vous serez impressionnés par le défilé de deux roues qui passent chaque seconde devant vous, pas facile de
              se frayer un chemin mais n’ayez pas peur de forcer le passage. C’est un peu comme ça ici, on ne dit pas
              que Ho Chi Minh est dynamique pour rien.{" "}
            </p>
            <p>
              Si vous avez le temps de visiter la ville profitez-en pour visiter le District 1, vous pourrez y admirer
              de nombreuses constructions françaises qui font le charme de ce district: la cathédrale par exemple est
              basée sur la construction de Notre Dame de Paris, la Poste Centrale ou bien encore l’Hôtel de Ville.
            </p>
            <p>
              De jour comme de nuit, promenez-vous, profitez, vous découvrirez de toute façon toujours quelque chose.
            </p>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft>
                <HoChiMinhCalao1Image />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight>
                <HoChiMinhCalao2Image />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
            <p>
              Entre les petits marchés authentiques au coin des rues, l’immense marché Ben Thanh très prisé, lui aussi
              construit par des Français et situé au cœur de la ville ou bien encore le marché Binh Tay dans le quartier
              de Chinatown, vous n’avez que l’embarras du choix.
            </p>
            <TwoImagesSameSize>
              <HoChiMinhMarket1Image />
              <HoChiMinhMarket2Image />
            </TwoImagesSameSize>
            <p>
              Tiens en parlant de Chinatown, nous avions une statue de dragon qui nous avait clairement fait de
              l&apos;œil quand nous avions vu des photos sur internet, énorme déception lors de notre visite. Alors soit
              on s’est fait avoir par un montage photo surréaliste soit il y a clairement un problème parce que nous
              n’avons pas vu la même chose de nos propres yeux.
            </p>
            <ImageAsLandscape>
              <HoChiMinhDragonImage />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <VietnamDivider />
        <section>
          <VietnamPart>Le Delta du Mékong</VietnamPart>
          <VietnamDivider />
          <SectionContent>
            <p>
              Après le brouhaha de la ville, nous voici parti pour d’autres aventures, bien plus au Sud maintenant, on
              se retrouve près du Delta du Mékong pour une première visite.
            </p>
            <p>
              A la découverte de My Tho et de Ben Tre, balade en bateau sur le Delta du Mékong à l’abri des cocotiers et
              des palmiers d’eau. Le dépaysement est total et le calme fait du bien.
            </p>
          </SectionContent>
          <article>
            <MyThoCard />
          </article>
          <VietnamDivider />
          <SectionContent>
            <p>
              Puis découverte de Can Tho, son marché flottant et son marché terrestre qui font vivre la ville et notre
              gros coup de cœur pour un Homestay au bord du lac.{" "}
            </p>
          </SectionContent>
          <article>
            <CanThoCard />
          </article>
        </section>
        <VietnamDivider />
        <section>
          <VietnamPart>Une histoire sans fin</VietnamPart>
          <VietnamDivider />
          <SectionContent>
            <p>
              C’est la fin pour nous de notre visite du Vietnam du Sud, mais ce n’est clairement pas la fin de notre
              séjour. Le Nord et le Centre n’attendent que nous et nous avons hâte de nous y rendre et de poursuivre
              notre parcours dans ce pays que nous commençons à peine à découvrir.
            </p>
          </SectionContent>
        </section>
        <VietnamDivider />
        <Conclusion>Le -</Conclusion>
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

import React from "react"
import { css } from "@emotion/core"
import { Japan } from "../../../components/country/japan"
import { JapanQuote } from "../../../components/core/quote"
import { SectionContent, SectionTitle } from "../../../components/core/section"
import { Highlight, JapanCity } from "../../../components/core/highlight"
import { Header } from "../../../components/layout/header"
import { Maintenance } from "../../../components/layout/maintenance"
import SEO from "../../../components/layout/seo"
import { Conclusion } from "../../../components/core/conclusion"
import { MainImage } from "../../../components/images/asia/japan/mainImage"
import { MainHimejiCastleImage } from "../../../components/images/asia/japan/himeji/castle/mainHimejiCastleImage"
import { MainArashiyamaImage } from "../../../components/images/asia/japan/mainArashiyamaImage"
import { Link } from "gatsby"
import { Card } from "../../../components/Card"
import { MainKinkakujiImage } from "../../../components/images/asia/japan/mainKinkakujiImage"
import { MainFushimiInariTaishaImage } from "../../../components/images/asia/japan/mainFushimiInariTaishaImage"
import { MainDaigojiImage } from "../../../components/images/asia/japan/mainDaigojiImage"
import { MainNagoyaCastleImage } from "../../../components/images/asia/japan/mainNagoyaCastleImage"
import { MainToganjiImage } from "../../../components/images/asia/japan/mainToganjiImage"
import { MainFujiImage } from "../../../components/images/asia/japan/mainFujiImage"
import { MainUenoParkImage } from "../../../components/images/asia/japan/mainUenoParkImage"
import { MainSensojiImage } from "../../../components/images/asia/japan/mainSensojiImage"
import { MainHamarikyuGardenImage } from "../../../components/images/asia/japan/mainHamarikyuGardenImage"
import { JapanTitle } from "../../../components/core/title"

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
      <div
        css={css`
          height: 60px;
          background-color: #ffe1e7;
        `}
      />
      <div className="center blog-container">
        <JapanTitle title="Le Japon au printemps" categories={["asie", "japon"]} />
        <MainImage />
        <JapanQuote>
          Le Japon, ce pays incontournable à visiter en Asie. Un décor de rêve à chaque saison. Un mélange entre
          zenitude dans les endroits reculés et animation et dynamisme dans les villes, autant dire que en fonction de
          ce que vous recherchez, que vous aimiez la ville ou la campagne, à n’importe quel endroit vous trouverez votre
          bonheur.
        </JapanQuote>
        <SectionTitle>Pourquoi au printemps ?</SectionTitle>
        <SectionContent>
          Contrairement au pays où la farniente et les plages sont de mises, pour le Japon il n’y a pas de meilleure
          période à proprement parlé, tout dépend clairement de ce que vous voulez y faire et de quel type de paysage
          vous voulez voir. De notre côté nous avons donc décidé d’y aller en Avril là où la floraison des cerisiers est
          la plus abondante dans la plupart des endroits du pays. Mais attention qui dit saison des cerisiers dit saison
          touristique, alors préparez vous quand meme au prix plus élevé et aux hordes de touristes à certains endroits.
          Nous y retournerons certainement à une autre saison, pour découvrir de nouveaux paysages et voir une autre
          façon d’y voyager.
        </SectionContent>
        <SectionTitle>Combien de temps y aller ? </SectionTitle>
        <SectionContent>
          Comme pour tout, tout dépend de ce que vous comptez y faire. Mais si comme nous, vous n’aimez pas spécialement
          rester au meme endroit mais plutôt bouger un peu partout comptez vraiment au minimum deux semaines pour
          voyager à votre rythme mais en voir un maximum.
        </SectionContent>
        <div
          className="overflow-hidden tc"
          css={css`
            @media (max-width: 767px) {
              display: none;
            }
          `}
        >
          <SectionTitle className="tl">Notre itinéraire</SectionTitle>
          <Japan />
        </div>
        <section>
          <JapanCity>Himeji</JapanCity>
          <article>
            <Link to="/asia/japan/himeji-castle">
              <Card title="Château de Himeji – Magnifique château du Heron Blanc">
                <MainHimejiCastleImage />
                <div className="flex items-center">
                  Construit au XVIIe siècle, le château de Himeji est l’un des rares châteaux du Japon à ne pas avoir
                  été détruit ou endommagé lors de la guerre ou par des catastrophes naturelles.
                </div>
              </Card>
            </Link>
          </article>
        </section>
        <section>
          <JapanCity>Kyoto</JapanCity>

          <article>
            <Link to="/asia/japan/arashiyama">
              <Card title="Arashiyama – Foret de Bambous géants">
                <MainArashiyamaImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>

          <article>
            <Link to="/asia/japan/kinkakuji">
              <Card title="Temple de Kinkakuji – Le pavillon d’or">
                <MainKinkakujiImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>

          <article>
            <Link to="/asia/japan/fushimi-inari-taisha">
              <Card title="Fushimi Inari Taisha – Santuaire aux Torii">
                <MainFushimiInariTaishaImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>

          <article>
            <Link to="/asia/japan/daigoji">
              <Card title="Temple Daigo-ji">
                <MainDaigojiImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
        </section>
        <section>
          <JapanCity>Nagoya</JapanCity>

          <article>
            <Link to="/asia/japan/nagoya-castle">
              <Card title="Château de Nagoya">
                <MainNagoyaCastleImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
          <article>
            <Link to="/asia/japan/toganji">
              <Card title="Togan-ji Temple">
                <MainToganjiImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
        </section>

        <section>
          <JapanCity>Kawaguchiko</JapanCity>
          <article>
            <Link to="/asia/japan/fuji">
              <Card title="Mont Fuji - Lac Kawaguchiko">
                <MainFujiImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
        </section>

        <section>
          <JapanCity>Tokyo</JapanCity>
          <article>
            <Link to="/asia/japan/ueno-park">
              <Card title="Parc d’Ueno – Rendez-vous autour des “SAKURA”">
                <MainUenoParkImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
          <Highlight>ameya yokocho (rue, Ameyoko) ???</Highlight>
          <article>
            <Link to="/asia/japan/sensoji">
              <Card title="Temple de Senso-Ji">
                <MainSensojiImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
          <article>
            <Link to="/asia/japan/hamarikyu-garden">
              <Card title="Jardin Hama Rikyu – Un havre de paix au milieu de la ville">
                <MainHamarikyuGardenImage />
                <div>
                  Lorem Ipsum Lorem Ipsusdm Lore sadsadsam dsad asIpsum Lorem Ipsum Lorem Ipsa assum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loredsadsadm Ipsum Lorem Ipsum Lsdsadsadrem Ipsum Lorem
                  Ipsum Loresadsadsam Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Loremsdsad sad Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Loresadsadsa dm Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum L
                  sdasdorem Ipsum{" "}
                </div>
              </Card>
            </Link>
          </article>
          <Highlight>Quartier Shibuya, Rue Harajuku</Highlight>
        </section>
        <Conclusion>
          Le Japon est un pays riche en découverte. Que vous soyez ou que vous vouliez vous impregnez de la culture
          japonaise. Foncez, vous ne le regretterez pas !
        </Conclusion>
      </div>
    </>
  )
}

export default IndexPage

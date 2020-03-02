import React from "react"
import SEO from "../../components/layout/seo"
import { BlogLayout } from "../../components/layout/layout"
import { SectionContent } from "../../components/core/section"
import { Divider } from "../../components/core/divider"
import { PrimaryDarkButtonLink } from "../../components/core/links/link"
import { FaChevronRight } from "react-icons/fa"
import who from "../../images/about/who.png"
import { css } from "@emotion/core"
import { mediumEnd, primaryColor } from "../../components/core/variables"

const IndexPage = () => {
  return (
    <>
      <SEO title="main" />
      <BlogLayout page="who">
        <div className="tc mb3 mt3">
          <img
            src={who}
            alt="Some words..."
            css={css`
              max-height: 500px;
            `}
          />
        </div>
        <SectionContent>
          Après 8 ans d’amour, une routine boulot dodo et un manque de dépaysement nous avons décidé en 2016 de changer
          de vie pour venir nous installer à Singapour avec nos 2 chats sans jamais y avoir mis les pieds.
        </SectionContent>
        <SectionContent>Une sacrée aventure qui nous a permis de faire de nombreux voyages.</SectionContent>
        <SectionContent>
          Une sorte de journal intime que nous partageons avec vous, quelques astuces par ci par là mais surtout un
          carnet de souvenirs inoubliable que nous lirons nous-même dans le futur.
        </SectionContent>
        <h3
          className="tc"
          css={css`
            color: ${primaryColor};
          `}
        >
          ¡ Bonne aventure !
        </h3>
        <Divider />
        <SectionContent>
          ❤️ ️Mme Magic est particulièrement rêveuse, dévoreuse de romans et de séries, elle aime également faire des
          photos de tout et n&apos;importe quoi. Sensible à la protection animale, adepte du shopping, elle cache
          derrière son sourire un très fort caractère. ❤️
        </SectionContent>
        <SectionContent>
          ❤️ Mr Magic est un passioné de manga et un fan de sport - dans la réalité comme dans un canapé -. Mi manchot,
          mi aventurier, il reste de tout temps d’un calme olympien. Très à l&apos;aise avec un ordinateur, il
          s&apos;occupe de la partie technique du blog. ❤️
        </SectionContent>
        <SectionContent
          className="tr"
          css={css`
            @media (max-width: ${mediumEnd}) {
              text-align: center;
            }
          `}
        >
          <PrimaryDarkButtonLink to="contact" className="pr3 pl3">
            Nous Contacter <FaChevronRight />
          </PrimaryDarkButtonLink>
        </SectionContent>
      </BlogLayout>
    </>
  )
}

export default IndexPage

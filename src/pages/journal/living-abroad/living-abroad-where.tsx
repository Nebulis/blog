import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import { Comments } from "../../../components/core/comments"
import translationFr from "../../../locales/fr/journal/living-abroad/living-abroad-where.json"
import translationEn from "../../../locales/en/journal/living-abroad/living-abroad-where.json"
import { Introduction, SectionContent } from "../../../components/core/section"
import { PrimaryDivider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/journal/living-abroad/living-abroad-where/living-abroad-where-main.jpg"
import LivingAbroadTable from "../../../images/journal/living-abroad/living-abroad-where/living-abroad-where-table.png"
import LivingAbroadTableEn from "../../../images/journal/living-abroad/living-abroad-where/living-abroad-where-table-en.png"
import { PrimaryHeadline } from "../../../components/core/highlight"
import { Title } from "../../../components/core/title"
import { PrimaryBlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { ImageAsLandscape } from "../../../components/images/layout"
import { SharedJournalImages } from "../../../components/images/journal/shared-journal-images"
import styled from "@emotion/styled"
import { LivingAbroadWhereImages } from "../../../components/images/journal/living-abroad/living-abroad-where"
import { Conclusion } from "../../../components/core/conclusion"
import { MapContainer } from "../../../components/layout/layout"
import { css } from "@emotion/react"

const namespace = "journal/living-abroad/living-abroad-where"
const id = "living-abroad-where"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const SubTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem; // f4
  margin-bottom: 0.5rem; // mb2
`
const SubSubTitle = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem; // mb3
`

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t(`common:journal.living-abroad.card.${id}`)

  return (
    <>
      <SEO
        title={title}
        fullTitle={t("full-title")}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        image={HomeImgUrl}
        location={location}
      />
      <PrimaryBlogLayoutWithDrawer page={id} location={location}>
        <Title title={title} linkId={id} />
        <ImageAsLandscape>
          <SharedJournalImages image="livingAbroadWhere" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <PrimaryDivider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          <p>{t("introduction.part3")}</p>
          <p>{t("introduction.part4")}</p>
          <p>{t("introduction.part5")}</p>
          <p>{t("introduction.part6")}</p>
          <p>{t("introduction.part7")}</p>
          <p>{t("introduction.part8")}</p>
          <p>{t("introduction.part9")}</p>
          <p>{t("introduction.part10")}</p>
          <p>{t("introduction.part11")}</p>
          <p>{t("introduction.part12")}</p>
        </SectionContent>
        <PrimaryDivider />
        <section>
          <PrimaryHeadline>{t("section1.title")}</PrimaryHeadline>
          <PrimaryDivider />
          <SubTitle>{t("section1.part1.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part1.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part1.part1")}</p>
            <p>{t("section1.part1.part2")}</p>
            <p>{t("section1.part1.part3")}</p>
            <p>{t("section1.part1.part4")}</p>
            <p>{t("section1.part1.part5")}</p>
            <p>{t("section1.part1.part6")}</p>
            <p>{t("section1.part1.part7")}</p>
            <p>{t("section1.part1.part8")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part2.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part2.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part2.part1")}</p>
            <p>{t("section1.part2.part2")}</p>
            <p>{t("section1.part2.part3")}</p>
            <p>{t("section1.part2.part4")}</p>
            <p>{t("section1.part2.part5")}</p>
            <p>{t("section1.part2.part6")}</p>
            <p>{t("section1.part2.part7")}</p>
            <p>{t("section1.part2.part8")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part3.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part3.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part3.part1")}</p>
            <p>{t("section1.part3.part2")}</p>
            <p>{t("section1.part3.part3")}</p>
            <p>{t("section1.part3.part4")}</p>
            <p>{t("section1.part3.part5")}</p>
            <p>{t("section1.part3.part6")}</p>
            <p>{t("section1.part3.part7")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part4.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part4.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part4.part1")}</p>
            <p>{t("section1.part4.part2")}</p>
            <p>{t("section1.part4.part3")}</p>
            <p>{t("section1.part4.part4")}</p>
            <p>{t("section1.part4.part5")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere2" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part5.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part5.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part5.part1")}</p>
            <p>{t("section1.part5.part2")}</p>
            <p>{t("section1.part5.part3")}</p>
            <p>{t("section1.part5.part4")}</p>
            <p>{t("section1.part5.part5")}</p>
            <p>{t("section1.part5.part6")}</p>
            <p>{t("section1.part5.part7")}</p>
            <p>{t("section1.part5.part8")}</p>
            <p>{t("section1.part5.part9")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part6.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part6.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part6.part1")}</p>
            <p>{t("section1.part6.part2")}</p>
            <p>{t("section1.part6.part3")}</p>
            <p>{t("section1.part6.part4")}</p>
            <ul>
              <li>{t("section1.part6.part5")}</li>
              <li>{t("section1.part6.part6")}</li>
              <li>{t("section1.part6.part7")}</li>
              <li>{t("section1.part6.part8")}</li>
            </ul>
            <p>{t("section1.part6.part9")}</p>
            <p>{t("section1.part6.part10")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere3" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part7.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part7.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part7.part1")}</p>
            <p>{t("section1.part7.part2")}</p>
            <p>{t("section1.part7.part3")}</p>
            <p>{t("section1.part7.part4")}</p>
            <p>{t("section1.part7.part5")}</p>
            <p>{t("section1.part7.part6")}</p>
            <p>{t("section1.part7.part7")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part8.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part8.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part8.part1")}</p>
            <p>{t("section1.part8.part2")}</p>
            <p>{t("section1.part8.part3")}</p>
            <p>{t("section1.part8.part4")}</p>
            <p>{t("section1.part8.part5")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere4" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part9.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part9.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part9.part1")}</p>
            <p>{t("section1.part9.part2")}</p>
            <p>{t("section1.part9.part3")}</p>
            <p>{t("section1.part9.part4")}</p>
            <p>{t("section1.part9.part5")}</p>
            <p>{t("section1.part9.part6")}</p>
            <p>{t("section1.part9.part7")}</p>
            <p>{t("section1.part9.part8")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part10.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part10.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part10.part1")}</p>
            <p>{t("section1.part10.part2")}</p>
            <p>{t("section1.part10.part3")}</p>
            <p>{t("section1.part10.part4")}</p>
            <p>{t("section1.part10.part5")}</p>
            <p>{t("section1.part10.part6")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere5" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part11.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part11.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part11.part1")}</p>
            <p>{t("section1.part11.part2")}</p>
            <p>{t("section1.part11.part3")}</p>
            <p>{t("section1.part11.part4")}</p>
            <p>{t("section1.part11.part5")}</p>
            <p>{t("section1.part11.part6")}</p>
            <p>{t("section1.part11.part7")}</p>
            <p>{t("section1.part11.part8")}</p>
            <p>{t("section1.part11.part9")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part12.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part12.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part12.part1")}</p>
            <p>{t("section1.part12.part2")}</p>
            <p>{t("section1.part12.part3")}</p>
            <p>{t("section1.part12.part4")}</p>
            <p>{t("section1.part12.part5")}</p>
            <p>{t("section1.part12.part6")}</p>
            <p>{t("section1.part12.part7")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere6" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part13.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part13.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part13.part1")}</p>
            <p>{t("section1.part13.part2")}</p>
            <p>{t("section1.part13.part3")}</p>
            <p>{t("section1.part13.part4")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part14.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part14.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part14.part1")}</p>
            <p>{t("section1.part14.part2")}</p>
            <p>{t("section1.part14.part3")}</p>
            <p>{t("section1.part14.part4")}</p>
            <p>{t("section1.part14.part5")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere7" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <SubTitle>{t("section1.part15.title1")}</SubTitle>
          <SubSubTitle>{t("section1.part15.title2")}</SubSubTitle>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section1.part15.part1")}</p>
            <p>{t("section1.part15.part2")}</p>
            <p>{t("section1.part15.part3")}</p>
          </SectionContent>
        </section>
        <PrimaryDivider />
        <section>
          <PrimaryHeadline>{t("section2.title")}</PrimaryHeadline>
          <PrimaryDivider />
          <SectionContent>
            <p>{t("section2.part1")}</p>
            <p>{t("section2.part2")}</p>
            <p>{t("section2.part3")}</p>
            <p>{t("section2.part4")}</p>
            <ImageAsLandscape>
              <LivingAbroadWhereImages image="livingAbroadWhere8" />
            </ImageAsLandscape>
            <MapContainer>
              <img
                css={css`
                  max-width: 800px !important;
                `}
                src={i18n.languageCode === "fr" ? LivingAbroadTable : LivingAbroadTableEn}
                alt="Living Abroad Table"
              />
            </MapContainer>
            <p>{t("section2.part5")}</p>
            <p>{t("section2.part6")}</p>
            <p>{t("section2.part7")}</p>
          </SectionContent>
        </section>
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <PrimaryDivider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes: i18n.languageCode === "fr" ? [] : [],
          }}
        />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

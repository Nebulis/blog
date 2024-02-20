import React from "react"
import { PageProps } from "gatsby"
import i18n from "i18next"
import SEO from "../../../components/layout/seo"
import { useCustomTranslation } from "../../../i18n-hook"
import { Comments } from "../../../components/core/comments"
import translationFr from "../../../locales/fr/journal/living-abroad/moving-abroad-why.json"
import translationEn from "../../../locales/en/journal/living-abroad/moving-abroad-why.json"
import { ImageDescription, Introduction, SectionContent } from "../../../components/core/section"
import { Conclusion } from "../../../components/core/conclusion"
import { Divider } from "../../../components/core/divider"
import { Quote } from "../../../components/core/quote"
import HomeImgUrl from "../../../images/journal/living-abroad/moving-abroad-why/moving-abroad-why-main.jpg"
import { PrimaryBlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { Title } from "../../../components/core/title"
import { PrimaryHeadline } from "../../../components/core/highlight"
import { ImageAsLandscape, ImageAsPortrait } from "../../../components/images/layout"
import { SharedJournalImages } from "../../../components/images/journal/shared-journal-images"
import styled from "@emotion/styled"
import { primaryDarkColor } from "../../../components/core/variables"
import { MovingAbroadWhyImages } from "../../../components/images/journal/living-abroad/moving-abroad-why"

const namespace = "journal/living-abroad/moving-abroad-why"
const id = "moving-abroad-why"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const AuthorQuoteContainer = styled.div`
  color: ${primaryDarkColor};

  .quote-container {
    padding: 0;
  }
  blockquote {
    margin-bottom: 0.5rem;
    font-family: "Courgette";
    font-size: 1.2rem;
  }
`

const AuthorQuote: React.FunctionComponent<{ quote: string; author?: string }> = ({ quote, author }) => {
  return (
    <AuthorQuoteContainer className="tc mt4">
      <div className="dib">
        <Quote position="none">{quote}</Quote>
        {author && <p className="tr mb0 b">{author}</p>}
      </div>
    </AuthorQuoteContainer>
  )
}

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
          <SharedJournalImages image="movingAbroadWhy" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction.part1")}</Introduction>
        <SectionContent>
          <p>{t("introduction.part2")}</p>
          <p>{t("introduction.part3")}</p>
          <ul>
            <li>{t("introduction.part4")}</li>
            <li>{t("introduction.part5")}</li>
            <li>{t("introduction.part6")}</li>
            <li>{t("introduction.part7")}</li>
            <li>{t("introduction.part8")}</li>
            <li>{t("introduction.part9")}</li>
            <li>{t("introduction.part10")}</li>
          </ul>
          <p>{t("introduction.part11")}</p>
          <p>{t("introduction.part12")}</p>
          <p>{t("introduction.part13")}</p>
          <p>{t("introduction.part14")}</p>
        </SectionContent>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section1.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section1.part1")}</p>
            <p>{t("section1.part2")}</p>
            <p>{t("section1.part3")}</p>
            <p>{t("section1.part4")}</p>
            <p>{t("section1.part5")}</p>
            <p>{t("section1.part6")}</p>
            <AuthorQuote quote={t("section1.part7")} author={t("section1.part8")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section2.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section2.part1")}</p>
            <p>{t("section2.part2")}</p>
            <p>{t("section2.part3")}</p>
            <p>{t("section2.part4")}</p>
            <p>{t("section2.part5")}</p>
            <AuthorQuote quote={t("section2.part6")} author={t("section2.part7")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section3.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section3.part1")}</p>
            <p>{t("section3.part2")}</p>
            <p>{t("section3.part3")}</p>
            <p>{t("section3.part4")}</p>
            <ImageAsLandscape>
              <MovingAbroadWhyImages image="movingAbroad" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section4.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section4.part1")}</p>
            <p>{t("section4.part2")}</p>
            <p>{t("section4.part3")}</p>
            <p>{t("section4.part4")}</p>
            <p>{t("section4.part5")}</p>
            <p>{t("section4.part6")}</p>
            <AuthorQuote quote={t("section4.part7")} author={t("section4.part8")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section5.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section5.part1")}</p>
            <p>{t("section5.part2")}</p>
            <p>{t("section5.part3")}</p>
            <p>{t("section5.part4")}</p>
            <p>{t("section5.part5")}</p>
            <p>{t("section5.part6")}</p>
            <AuthorQuote quote={t("section5.part7")} author={t("section5.part8")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section6.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section6.part1")}</p>
            <p>{t("section6.part2")}</p>
            <p>{t("section6.part3")}</p>
            <p>{t("section6.part4")}</p>
            <p>{t("section6.part5")}</p>
            <p>{t("section6.part6")}</p>
            <ImageAsLandscape>
              <MovingAbroadWhyImages image="movingAbroad2" />
            </ImageAsLandscape>
            <ImageDescription>{t("section6.part7")}</ImageDescription>
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section7.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section7.part1")}</p>
            <p>{t("section7.part2")}</p>
            <p>{t("section7.part3")}</p>
            <p>{t("section7.part4")}</p>
            <p>{t("section7.part5")}</p>
            <p>{t("section7.part6")}</p>
            <AuthorQuote quote={t("section7.part7")} author={t("section7.part8")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section8.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section8.part1")}</p>
            <p>{t("section8.part2")}</p>
            <p>{t("section8.part3")}</p>
            <p>{t("section8.part4")}</p>
            <AuthorQuote quote={t("section8.part5")} author={t("section8.part6")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section9.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section9.part1")}</p>
            <p>{t("section9.part2")}</p>
            <p>{t("section9.part3")}</p>
            <p>{t("section9.part4")}</p>
            <p>{t("section9.part5")}</p>
            <p>{t("section9.part6")}</p>
            <p>{t("section9.part7")}</p>
            <p>{t("section9.part8")}</p>
            <ImageAsLandscape>
              <MovingAbroadWhyImages image="movingAbroad3" />
            </ImageAsLandscape>
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section10.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section10.part1")}</p>
            <p>{t("section10.part2")}</p>
            <p>{t("section10.part3")}</p>
            <p>{t("section10.part4")}</p>
            <p>{t("section10.part5")}</p>
            <p>{t("section10.part6")}</p>
            <AuthorQuote quote={t("section10.part7")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section11.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section11.part1")}</p>
            <p>{t("section11.part2")}</p>
            <p>{t("section11.part3")}</p>
            <p>{t("section11.part4")}</p>
            <p>{t("section11.part5")}</p>
            <AuthorQuote quote={t("section11.part6")} author={t("section11.part7")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section12.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section12.part1")}</p>
            <p>{t("section12.part2")}</p>
            <p>{t("section12.part3")}</p>
            <p>{t("section12.part4")}</p>
            <p>{t("section12.part5")}</p>
            <p>{t("section12.part6")}</p>
            <p>{t("section12.part7")}</p>
            <AuthorQuote quote={t("section12.part8")} />
          </SectionContent>
        </section>
        <Divider />
        <section>
          <PrimaryHeadline>{t("section13.title")}</PrimaryHeadline>
          <Divider />
          <SectionContent>
            <p>{t("section13.part1")}</p>
            <p>{t("section13.part2")}</p>
            <p>{t("section13.part3")}</p>
            <p>{t("section13.part4")}</p>
            <p>{t("section13.part5")}</p>
            <p>{t("section13.part6")}</p>
            <p>{t("section13.part7")}</p>
            <p>{t("section13.part8")}</p>
            <p>{t("section13.part9")}</p>
            <ImageAsPortrait>
              <MovingAbroadWhyImages image="movingAbroad4" />
            </ImageAsPortrait>
            <Divider />
          </SectionContent>
        </section>
        <section>
          <SectionContent>
            <p>{t("section13.part10")}</p>
            <p>{t("section13.part11")}</p>
            <p>{t("section13.part12")}</p>
            <p>{t("section13.part13")}</p>
            <p>{t("section13.part14")}</p>
            <p>{t("section13.part15")}</p>
            <p>{t("section13.part16")}</p>
          </SectionContent>
        </section>
        <Divider />
        <Conclusion>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <Divider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [<MovingAbroadWhyImages image="cardFr1" key="cardFr1" />]
                : [<MovingAbroadWhyImages image="cardEn1" key="cardEn1" />],
          }}
        />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

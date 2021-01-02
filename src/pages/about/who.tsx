import React from "react"
import SEO from "../../components/layout/seo"
import { BlogLayout } from "../../components/layout/layout"
import { SectionContent } from "../../components/core/section"
import { Divider } from "../../components/core/divider"
import { PrimaryDarkButtonLink } from "../../components/core/links/link"
import { FaChevronRight } from "react-icons/fa"
import whoImageFr from "../../images/about/who-fr.png"
import whoImageEn from "../../images/about/who-en.png"
import { css } from "@emotion/core"
import { mediumEnd, primaryColor } from "../../components/core/variables"
import { useCustomTranslation } from "../../i18n"
import i18n from "i18next"
import whoFr from "../../locales/fr/about/who.json"
import whoEn from "../../locales/en/about/who.json"
import { PageProps } from "gatsby"

const namespace = "about/who"
i18n.addResourceBundle("fr", namespace, whoFr)
i18n.addResourceBundle("en", namespace, whoEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO title={t("common:link.who")} location={location} />
      <BlogLayout page="who">
        <div className="tc mb3 mt3">
          <img
            src={i18n.languageCode === "fr" ? whoImageFr : whoImageEn}
            alt="Some words..."
            css={css`
              max-height: 500px;
            `}
          />
        </div>
        <SectionContent>{t("section1")}</SectionContent>
        <SectionContent>{t("section2")}</SectionContent>
        <SectionContent>{t("section3")}</SectionContent>
        <h3
          className="tc"
          css={css`
            color: ${primaryColor};
          `}
        >
          {t("section4")}
        </h3>
        <Divider />
        <SectionContent>{t("section5")}</SectionContent>
        <SectionContent>{t("section6")}</SectionContent>
        <SectionContent
          className="tr"
          css={css`
            @media (max-width: ${mediumEnd}) {
              text-align: center;
            }
          `}
        >
          <PrimaryDarkButtonLink to="contact">
            {t("contact")} <FaChevronRight />
          </PrimaryDarkButtonLink>
        </SectionContent>
      </BlogLayout>
    </>
  )
}

export default IndexPage

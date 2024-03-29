import React from "react"
import SEO from "../../components/layout/seo"
import { SectionContent } from "../../components/core/section"
import { Divider } from "../../components/core/divider"
import { PrimaryDarkButtonLink } from "../../components/core/links/link"
import { FaChevronRight } from "react-icons/fa"
import whoImageFr from "../../images/about/who-fr.png"
import whoImageEn from "../../images/about/who-en.png"
import { css } from "@emotion/react"
import { mediumEnd, primaryColor } from "../../components/core/variables"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import whoFr from "../../locales/fr/about/who.json"
import whoEn from "../../locales/en/about/who.json"
import { PageProps } from "gatsby"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { Comments } from "../../components/core/comments"

const namespace = "about/who"
i18n.addResourceBundle("fr", namespace, whoFr)
i18n.addResourceBundle("en", namespace, whoEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const description = t("description")
  const googleDescription = t("section4")
  return (
    <>
      <SEO
        title={t("common:link.who")}
        location={location}
        socialNetworkDescription={description}
        googleDescription={googleDescription}
      />
      <PrimaryBlogLayoutWithDrawer page="who" location={location}>
        <div className="tc mb3 mt3">
          <img
            src={i18n.languageCode === "fr" ? whoImageFr : whoImageEn}
            alt="Some words..."
            css={css`
              max-height: 500px;
            `}
          />
        </div>
        <h3
          className="tc"
          css={css`
            color: ${primaryColor};
          `}
        >
          {t("title")}
        </h3>
        <SectionContent>{t("section1")}</SectionContent>
        <SectionContent>{t("section2")}</SectionContent>
        <SectionContent>{t("section3")}</SectionContent>
        <SectionContent>{t("section4")}</SectionContent>
        <SectionContent>{t("section5")}</SectionContent>
        <h3
          className="tc"
          css={css`
            color: ${primaryColor};
          `}
        >
          {t("section6")}
        </h3>
        <Divider />
        <SectionContent>{t("section7")}</SectionContent>
        <SectionContent>{t("section8")}</SectionContent>
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
        <Comments collectionName={namespace} location={location} showLikes={false} showShare={false} />
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

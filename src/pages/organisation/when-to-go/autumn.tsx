import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/autumn.json"
import translationEn from "../../../locales/en/organisation/when-to-go/autumn.json"
import { PrimaryDivider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../../components/layout/organisation-layout"
import { BlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { OrganisationCard } from "../../../types/shared"
import { isLinkPublished, sortByField } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import { SharedAsiaImages } from "../../../components/images/asia/shared-asia-images"

const namespace = "organisation/when-to-go/autumn"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const elements: OrganisationCard[] = [
  {
    label: "common:country.japan.title",
    image: SharedAsiaImages,
    imageProps: {
      image: "homeJapan",
    },
    to: "japan",
  },
]

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t } = useCustomTranslation([namespace, "common"])
  const cards = development ? elements : elements.filter(({ to }) => isLinkPublished(to))
  const socialNetworkDescription = `${t("part2")} ${t("part3")}`
  const googleDescription = t("part1")
  return (
    <>
      <SEO
        title={t("title")}
        location={location}
        socialNetworkDescription={socialNetworkDescription}
        googleDescription={googleDescription}
      />
      <BlogLayoutWithDrawer page="winter" location={location}>
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
        </SectionContent>
        <PrimaryDivider />
        <CountriesContainer>
          {cards.sort(sortByField("label")).map(({ label, image, to, imageProps }, index) => (
            <CountryContainer title={t(label)} image={image} to={to} key={index} imageProps={imageProps} />
          ))}
        </CountriesContainer>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage
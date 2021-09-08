import React, { useContext, useState } from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/spring.json"
import translationEn from "../../../locales/en/organisation/when-to-go/spring.json"
import { Divider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../../components/layout/organisation-layout"
import { PrimaryBlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { getArticles, getContinentsFromCountries, sortByLabel } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import { SelectByContinent } from "../../../components/core/select"
import { getImageProps, getSharedImages } from "../../../components/core/discovery"

const namespace = "organisation/when-to-go/spring"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const [selectedContinent, setSelectedContinent] = useState<string>()
  const countries = getArticles({
    kind: "country",
    card: false,
    development,
    seasons: ["spring"],
  })
  const continents = getContinentsFromCountries(countries)
  return (
    <>
      <SEO
        title={t("title")}
        fullTitle={t("full-title")}
        location={location}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
      />
      <PrimaryBlogLayoutWithDrawer page="autumn" location={location}>
        <MainTitleSection>{t("title")}</MainTitleSection>
        <Divider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
          <PageQuote position="none">{t("part4")}</PageQuote>
        </SectionContent>
        <Divider />
        <SelectByContinent continents={continents} onChange={(value) => setSelectedContinent(value)} />
        <CountriesContainer>
          {countries
            .filter((country) => (selectedContinent ? country.tags.includes(selectedContinent) : true))
            .sort(sortByLabel(i18n.languageCode))
            .map(({ label, imageProps, id, tags }, index) => (
              <CountryContainer
                title={label[i18n.languageCode]}
                image={getSharedImages(tags)}
                to={id}
                key={index}
                imageProps={{ image: imageProps?.image, ...getImageProps(id) }}
              />
            ))}
        </CountriesContainer>
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

import React, { useContext, useState } from "react"
import SEO from "../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../components/core/section"
import { useCustomTranslation } from "../../i18n-hook"
import i18n from "i18next"
import translationFr from "../../locales/fr/discovery/cities.json"
import translationEn from "../../locales/en/discovery/cities.json"
import { PrimaryDivider } from "../../components/core/divider"
import { PageQuote } from "../../components/core/quote"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../components/layout/organisation-layout"
import { PrimaryBlogLayoutWithDrawer } from "../../components/layout/main-layout"
import { getArticles, getContinentsFromCountries, sortByLabel } from "../../components/core/links/links.utils"
import { ApplicationContext } from "../../components/application"
import { PrimaryPointOfInterestSection } from "../../components/core/point-of-interest"
import { SelectByContinent } from "../../components/core/select"
import { getSharedImages } from "../../components/core/discovery"

const namespace = "discovery/cities"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const currentPageId = "cities"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const [selectedContinent, setSelectedContinent] = useState<string>()
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const countries = getArticles({
    kind: "country",
    card: false,
    development,
    pointOfInterests: ["city"],
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
      <PrimaryBlogLayoutWithDrawer page={currentPageId} location={location}>
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
        </SectionContent>
        <PrimaryPointOfInterestSection page={currentPageId} />
        <PrimaryDivider />
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
                imageProps={{ image: imageProps?.image }}
              />
            ))}
        </CountriesContainer>
      </PrimaryBlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

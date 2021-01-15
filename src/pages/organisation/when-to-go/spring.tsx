import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/spring.json"
import translationEn from "../../../locales/en/organisation/when-to-go/spring.json"
import { PrimaryDivider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { HomeVietnamImage } from "../../../components/images/asia/vietnam/home-vietnam"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../../components/layout/organisation-layout"
import { BlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { CarouselAndOrganisationPhilippines2 } from "../../../components/images/asia/philippines/carousel-and-organisation-philippines2"
import styled from "@emotion/styled"
import { OrganisationCard } from "../../../types/shared"
import { isLinkPublished, sortByField } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"

const namespace = "organisation/when-to-go/spring"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const elements: OrganisationCard[] = [
  {
    label: "common:country.vietnam.southern-vietnam",
    image: HomeVietnamImage,
    to: "southern-vietnam",
  },
  {
    label: "common:country.philippines.title",
    image: styled(CarouselAndOrganisationPhilippines2)`
      img {
        object-position: -50px 30px !important;
        transform: scale(1.6);
      }
    `,
    to: "philippines",
  },
]

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t } = useCustomTranslation([namespace, "common"])
  const cards = development ? elements : elements.filter(({ to }) => isLinkPublished(to))

  return (
    <>
      <SEO title={t("title")} location={location} />
      <BlogLayoutWithDrawer page="spring" location={location}>
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
        </SectionContent>
        <CountriesContainer>
          {cards.sort(sortByField("label")).map(({ label, image, to }, index) => (
            <CountryContainer title={t(label)} image={image} to={to} key={index} />
          ))}
        </CountriesContainer>
      </BlogLayoutWithDrawer>
    </>
  )
}

export default IndexPage

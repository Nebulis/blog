import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { useCustomTranslation } from "../../../i18n"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/spring.json"
import translationEn from "../../../locales/en/organisation/when-to-go/spring.json"
import { PrimaryDivider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { PageProps } from "gatsby"
import { CountriesContainer, CountryContainer } from "../../../components/layout/organisation-layout"
import { BlogLayoutWithDrawer } from "../../../components/layout/main-layout"
import { OrganisationCard } from "../../../types/shared"
import { isLinkPublished, sortByField } from "../../../components/core/links/links.utils"
import { ApplicationContext } from "../../../components/application"
import { SharedCardVietnamImages } from "../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { SharedAsiaImages } from "../../../components/images/asia/shared-asia-images"
import { css } from "@emotion/react"

const namespace = "organisation/when-to-go/spring"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const elements: OrganisationCard[] = [
  {
    label: "common:country.vietnam.southern-vietnam",
    image: SharedCardVietnamImages,
    imageProps: {
      image: "discoverSouthernVietnam",
    },
    to: "southern-vietnam",
  },
  {
    label: "common:country.philippines.title",
    image: SharedAsiaImages,
    imageProps: {
      image: "homePhilippines",
      css: css`
        img {
          object-position: -50px 30px !important;
          transform: scale(1.6);
        }
      `,
    },
    to: "philippines",
  },
]

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t } = useCustomTranslation([namespace, "common"])
  const cards = development ? elements : elements.filter(({ to }) => isLinkPublished(to))
  const description = `${t("part1")} ${t("part2")} ${t("part3")} ${t("part4")}`
  const googleDescription = `${t("part1")} ${t("part2")}`

  return (
    <>
      <SEO
        title={t("title")}
        location={location}
        socialNetworkDescription={description}
        googleDescription={googleDescription}
      />
      <BlogLayoutWithDrawer page="spring" location={location}>
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
          <PageQuote position="none">{t("part4")}</PageQuote>
        </SectionContent>
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

import React, { ComponentType } from "react"
import SEO from "../../../components/layout/seo"
import { MainTitleSection, SectionContent } from "../../../components/core/section"
import { BlogLayout } from "../../../components/layout/layout"
import { useCustomTranslation } from "../../../i18n"
import i18n from "i18next"
import translationFr from "../../../locales/fr/organisation/when-to-go/winter.json"
import translationEn from "../../../locales/en/organisation/when-to-go/winter.json"
import { PrimaryDivider } from "../../../components/core/divider"
import { PageQuote } from "../../../components/core/quote"
import { HomeVietnamImage } from "../../../components/images/asia/vietnam/home"
import { css } from "@emotion/core"
import { ExtraImageProps } from "../../../types/shared"
import { useWindowSize } from "../../../components/hooks/useWindowSize"
import { ApplicationLink } from "../../../components/core/links/link"
import {
  extraLargeStart,
  extraLargeStartSize,
  largeEnd,
  largeStart,
  largeStartSize,
  maxWidthExtraLargeContainer,
  maxWidthLargeContainer,
  maxWidthMediumContainer,
  mediumEnd,
  mediumStart,
  mediumStartSize,
} from "../../../components/core/variables"

const namespace = "organisation/when-to-go/winter"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)

const margin = 20
const style = css`
  @media (min-width: ${mediumStart}) and (max-width: ${mediumEnd}) {
    &:nth-of-type(odd) {
      margin-right: ${margin}px;
    }
  }
  @media (min-width: ${largeStart}) and (max-width: ${largeEnd}) {
    margin-right: ${margin}px;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  @media (min-width: ${extraLargeStart}) {
    margin-right: ${margin}px;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
  }
  &:last-of-type {
    margin-right: 0;
  }
  position: relative;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.3rem;
    transition: all 0.2s linear;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    z-index: 5;
    pointer-events: none;
    transition: all 0.2s linear;
  }
  &:hover .overlay {
    opacity: 0.4;
  }
  &:hover .title {
    font-size: 1.4rem;
  }
  .gatsby-image-wrapper {
    margin: 0;
  }
`
const CountryContainer: React.FunctionComponent<{
  title: string
  image: ComponentType<ExtraImageProps>
  to: string
}> = ({ title, image: Image, to }) => {
  const { windowWidth } = useWindowSize()
  const maxAllowedWidth = 300
  // margin * 3 (and others) is not completely correct, we should multiply vy the number of images displayed, but it's ok
  const computedWidth =
    windowWidth > extraLargeStartSize
      ? (maxWidthExtraLargeContainer - margin * 3) / 4
      : windowWidth > largeStartSize
      ? (maxWidthLargeContainer - margin * 2) / 3
      : windowWidth > mediumStartSize
      ? (maxWidthMediumContainer - margin) / 2
      : windowWidth
  const width = computedWidth > maxAllowedWidth ? `${maxAllowedWidth}px` : `${computedWidth}px`
  return (
    <ApplicationLink to={to} css={style} className="custom-link mb3">
      <div className="title">{title}</div>
      <div className="overlay" />
      <Image
        fluidObject={{ aspectRatio: 4 / 3 }}
        css={css`
          width: ${width};
        `}
      />
    </ApplicationLink>
  )
}

const IndexPage = () => {
  const { t } = useCustomTranslation([namespace, "common"])
  return (
    <>
      <SEO title={t("title")} />
      <BlogLayout page="winter">
        <MainTitleSection>{t("title")}</MainTitleSection>
        <PrimaryDivider />
        <SectionContent>
          <PageQuote>{t("part1")}</PageQuote>
          <PageQuote position="none">{t("part2")}</PageQuote>
          <PageQuote position="none">{t("part3")}</PageQuote>
          <PageQuote position="none">{t("part4")}</PageQuote>
          <PageQuote position="none">{t("part5")}</PageQuote>
          <PageQuote position="none">{t("part6")}</PageQuote>
        </SectionContent>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          <CountryContainer title={t("common:country.vietnam")} image={HomeVietnamImage} to="southern-vietnam" />
        </div>
      </BlogLayout>
    </>
  )
}

export default IndexPage

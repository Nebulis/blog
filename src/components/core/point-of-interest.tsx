import React, { FunctionComponent } from "react"
import { Hiking } from "../icon/hiking"
import { Farniente, Monument, Scuba, Ski } from "../icon/monument"
import { CityIcon } from "../icon/city"
import { css } from "@emotion/react"
import { useCustomTranslation } from "../../i18n-hook"
import { getLink } from "./links/links.utils"
import { Photo } from "../icon/photo"
import styled from "@emotion/styled"
import { primaryColor, primaryDarkColor } from "./variables"
import { ApplicationLink } from "./links/link"

const pointOfInterestSectionStyle = css`
  margin-bottom: 0.45rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .title-element {
    margin-right: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s linear;
    border-bottom: 2px solid transparent;
  }
  svg {
    width: 50px;
    height: 50px;
  }
  .title {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`
export const PointOfInterestSection: FunctionComponent<{ className?: string; page: string; fullTitle?: boolean }> = ({
  className = "",
  page,
  fullTitle = false,
}) => {
  const { t, i18n } = useCustomTranslation("common")
  const link = getLink(page)
  return (
    <section className={`${className} point-of-interest-section`} css={pointOfInterestSectionStyle}>
      {link.pointOfInterest.includes("nature") && (
        <ApplicationLink to="nature" className="title-element">
          <Hiking />
          <div className="title mt2">Nature</div>
        </ApplicationLink>
      )}
      {link.pointOfInterest.includes("monument") && (
        <ApplicationLink to="monuments" className="title-element">
          <Monument />
          <div className="title mt2">Monuments</div>
        </ApplicationLink>
      )}
      {link.pointOfInterest.includes("city") && (
        <ApplicationLink to="cities" className="title-element">
          <CityIcon />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Ville" : "City"}</div>
        </ApplicationLink>
      )}
      {link.pointOfInterest.includes("animals") && (
        <ApplicationLink to="animals" className="title-element">
          <Photo />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Animaux" : "Animals"}</div>
        </ApplicationLink>
      )}
      {link.pointOfInterest.includes("lazy") && (
        <ApplicationLink to="beach-holidays" className="title-element">
          <Farniente />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Farniente" : "Lazy"}</div>
        </ApplicationLink>
      )}
      {link.pointOfInterest.includes("water-activities") && (
        <ApplicationLink to="water-activities" className="title-element">
          <Scuba />
          <div className="title mt2">
            {fullTitle ? t("common:link.discovery.water-activities") : i18n.languageCode === "fr" ? "Océan" : "Ocean"}
          </div>
        </ApplicationLink>
      )}
      {link.pointOfInterest.includes("winter-activities") && (
        <ApplicationLink to="winter-activities" className="title-element">
          <Ski />
          <div className="title mt2">
            {fullTitle ? t("common:link.discovery.winter-activities") : i18n.languageCode === "fr" ? "Neige" : "Snow"}
          </div>
        </ApplicationLink>
      )}
    </section>
  )
}

export const PrimaryPointOfInterestSection = styled(PointOfInterestSection)`
  svg {
    fill: ${primaryColor};
  }
  .title {
    color: ${primaryDarkColor};
  }
`

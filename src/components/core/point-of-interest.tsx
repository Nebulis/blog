import React, { FunctionComponent } from "react"
import { Hiking } from "../icon/hiking"
import { Farniente, Monument, Scuba, Ski } from "../icon/monument"
import { CityIcon } from "../icon/city"
import { css } from "@emotion/react"
import { useCustomTranslation } from "../../i18n-hook"
import { getLink } from "./links/links.utils"
import { Photo } from "../icon/photo"

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
export const PointOfInterestSection: FunctionComponent<{ className?: string; page: string }> = ({
  className = "",
  page,
}) => {
  const { i18n } = useCustomTranslation()
  const link = getLink(page)
  return (
    <section className={`${className} point-of-interest-section`} css={pointOfInterestSectionStyle}>
      {link.pointOfInterest.includes("nature") && (
        <div className="title-element">
          <Hiking />
          <div className="title mt2">Nature</div>
        </div>
      )}
      {link.pointOfInterest.includes("monument") && (
        <div className="title-element">
          <Monument />
          <div className="title mt2">Monuments</div>
        </div>
      )}
      {link.pointOfInterest.includes("city") && (
        <div className="title-element">
          <CityIcon />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Ville" : "City"}</div>
        </div>
      )}
      {link.pointOfInterest.includes("animals") && (
        <div className="title-element">
          <Photo />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Animaux" : "Animals"}</div>
        </div>
      )}
      {link.pointOfInterest.includes("lazy") && (
        <div className="title-element">
          <Farniente />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Farniente" : "Lazy"}</div>
        </div>
      )}
      {link.pointOfInterest.includes("water-activities") && (
        <div className="title-element">
          <Scuba />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Océan" : "Ocean"}</div>
        </div>
      )}
      {link.pointOfInterest.includes("winter-activities") && (
        <div className="title-element">
          <Ski />
          <div className="title mt2">{i18n.languageCode === "fr" ? "Neige" : "Snow"}</div>
        </div>
      )}
    </section>
  )
}

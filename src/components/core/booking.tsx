import { ExternalLink } from "./links/link"
import { useCustomTranslation } from "../../i18n-hook"
import { css } from "@emotion/react"
import React from "react"
import { Lang } from "./links/links.types"
import { FaUser, FaStar } from "react-icons/all"
import { philippinesPrimaryColorDarker } from "./asia/philippines/philippines.colors"

const buildBookingHotelUrl = ({ lang, hotel = "" }: { lang: Lang; hotel: string }) =>
  `https://www.booking.com/hotel/${hotel}.${lang}.html`

type Kind = "low-cost" | "standard" | "deluxe"

const getKind = (lang: Lang, kind: Kind) => {
  if (lang === "fr" && kind === "low-cost") return "Auberge"
  else if (lang === "en" && kind === "low-cost") return "Inn"
  else if (kind === "standard") return "Standard"
  else if (lang === "fr" && kind === "deluxe") return "De luxe"
  else if (lang === "en" && kind === "deluxe") return "Deluxe"
  return ":)"
}

const bookingCardStyle = css`
  width: 320px;
  line-height: 1.15;
  .photo-container {
    // no idea why it's needed but otherwise there is an extra space which prevents the activities to be correctly centered
    height: 200px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
  &:hover .photo-container,
  &:focus .photo-container {
    box-shadow: 0 17px 25px rgba(0, 0, 0, 0.5);
  }
  .photo-container img {
    height: 200px;
    object-fit: cover;
  }
  .information {
    background-color: whitesmoke;
    border: 2px solid ${philippinesPrimaryColorDarker};
    border-bottom: none;
  }
  .title {
    height: 2.3em; // 1.15 is the size for one line. we want it to be 2 lines high
  }
  .activity-container > *:not(:last-of-type) {
    margin-right: 0.5rem;
  }
  .activity {
    background-color: ${philippinesPrimaryColorDarker};
    padding: 3px 6px;
    border-radius: 4px;
    font-size: 0.7rem;
    display: inline-flex;
    align-items: center;
  }
  .activity svg {
    font-size: 0.7rem;
    position: relative;
    top: -0.03rem;
  }
  .activity span {
    line-height: 0.7rem;
    height: 0.7rem;
    max-height: 0.7rem;
  }

  // iphone 5
  @media (max-width: 350px) {
    width: 290px;
    .photo-container {
      height: 180px;
    }
    .photo-container img {
      height: 180px;
    }
  }
`
export const BookingCard: React.FunctionComponent<{
  hotel: string
  title: string
  image: string
  note: string
  price: number
  people: number
  kind: Kind
}> = ({ hotel, title, image, note, price, people, kind }) => {
  const { i18n } = useCustomTranslation()
  const computedPrice = i18n.language === "fr" ? `${price}€` : `$${Math.trunc(price * 1.2)}`
  return (
    <ExternalLink
      css={bookingCardStyle}
      underline={false}
      href={buildBookingHotelUrl({
        lang: i18n.languageCode,
        hotel,
      })}
      className="get-your-guide-card inline-flex flex-column"
    >
      <div className="information">
        <div className="title b tc mt2 mb1">{title}</div>
        <div className="ml-auto mr-auto flex justify-center ttu b activity-container white mb2">
          <span className="activity">{getKind(i18n.languageCode, kind)}</span>
          <span className="activity">
            <FaUser />
            <span>&nbsp;{people}</span>
          </span>
          <span className="activity">{computedPrice}</span>
          <span className="activity">
            <FaStar />
            <span>&nbsp;{note}</span>
          </span>
        </div>
      </div>
      <div className="photo-container relative">
        <img alt={title} src={image} className="w-100" />
      </div>
    </ExternalLink>
  )
}

const bookingWarningStyle = css`
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 1rem;
`
export const BookingWarning = () => {
  const { i18n } = useCustomTranslation()
  return (
    <p css={bookingWarningStyle}>
      {i18n.languageCode === "fr"
        ? "Les prix varient en fonction de la saison a laquelle vous réservez."
        : "Prices vary depending on the season you book."}
    </p>
  )
}

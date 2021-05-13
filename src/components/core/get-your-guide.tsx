import { ExternalLink } from "./links/link"
import { useCustomTranslation } from "../../i18n-hook"
import { css } from "@emotion/react"
import React from "react"
import { Lang } from "./links/links.types"
import { FaClock, FaUser } from "react-icons/all"
import { primaryDarkColor } from "./variables"
import { DurationUnit, transformDurationUnit } from "../../utils"

const buildGetYourGuideUrl = ({ lang, slug = "" }: { lang: Lang; slug: string }) =>
  `https://www.getyourguide.${lang === "fr" ? "fr" : "com"}/${slug}`
const buildTripadvisorUrl = ({ lang, slug = "" }: { lang: Lang; slug: string }) =>
  `https://www.tripadvisor.${lang === "fr" ? "fr" : "com"}/${slug}`

const Star: React.FunctionComponent<{ value: number; id: string }> = ({ value, id }) => {
  return (
    <svg height="25" width="23">
      <defs>
        <linearGradient id={`${id}`}>
          <stop offset={`${value * 100}%`} stopColor="#ffd055" />
          <stop offset={`${(1 - value) * 100}%`} stopColor="#d8d8d8" />
        </linearGradient>
      </defs>
      <polygon
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        fill={value === 0 ? "#d8d8d8" : `url('#${id}')`}
      />
    </svg>
  )
}
const Rating: React.FunctionComponent<{ value: number; to: string }> = ({ value, to }) => {
  let innerValue = value
  return (
    <>
      {Array.from(Array(5)).map((_, index) => {
        const Element = <Star value={Math.max(0, Math.min(innerValue, 1))} key={index} id={`${to}-${index}`} />
        innerValue--
        return Element
      })}
    </>
  )
}

interface BaseProps {
  to: string
  title: string
  image: string
  rating?: number
  certified?: boolean
  price: number
  duration: { value: number; unit: DurationUnit }
  bestseller?: boolean
  groupSize?: "none" | "small"
  groupType?: "public" | "private"
}

const internalCardStyle = css`
  width: 320px;
  line-height: 1.15;

  .internal-travel-card-container {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
  &:hover .internal-travel-card-container,
  &:hover .internal-travel-card-container {
    box-shadow: 0 17px 25px rgba(0, 0, 0, 0.5);
  }
  .photo-container {
    // no idea why it's needed but otherwise there is an extra space which prevents the activities to be correctly centered
    height: 200px;
    border: 4px solid ${primaryDarkColor};
    border-top: none;
  }
  .photo-container img {
    height: 196px; // 200 px - 4px because of the border
    object-fit: cover;
  }
  .certified {
    position: absolute;
    top: -14px;
    right: -14px;
  }
  .certified svg {
    height: 36px;
    width: 36px;
  }
  .information {
    background-color: whitesmoke;
    border: 4px solid ${primaryDarkColor};
    border-bottom: none;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .title {
    height: 2.3em; // 1.15 is the size for one line. we want it to be 2 lines high
  }
  .activity-container {
    transform: translateY(calc(-50% - 2px)); // -2px for half of the border
    z-index: 2;
  }
  .activity-container > *:not(:last-of-type) {
    margin-right: 0.5rem;
  }
  .activity {
    background-color: ${primaryDarkColor};
    padding: 4px 6px 3px; // more padding at the top because of uppercase
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
  .bestseller {
    background: #7ec440;
    height: 22px;
    position: absolute;
    top: 10px;
    left: -9px;
    padding: 0 8px;
  }
  .bestseller:before {
    border-color: #40651f transparent transparent;
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    border-style: solid;
    left: 0;
    border-width: 10px 0 0 9px;
    z-index: -1;
  }
  .bestseller:after {
    border-color: #7ec440;
    border-right-color: transparent;
    content: "";
    display: block;
    height: 0;
    width: 0;
    border-style: solid;
    border-width: 11px;
    position: absolute;
    right: -11px;
    top: 0;
    z-index: 1;
  }

  .bestseller-text {
    border-radius: 2px;
    padding: 3px 5px;
    font-size: 0.8rem;
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
export const InternalCard: React.FunctionComponent<
  BaseProps & {
    linkBuilder: (data: { lang: Lang; slug: string }) => string
    Image: React.ReactElement
  }
> = ({
  to,
  title,
  rating,
  certified,
  price,
  duration,
  bestseller,
  Image,
  linkBuilder,
  groupSize = "none",
  groupType,
}) => {
  const { i18n } = useCustomTranslation()
  const computedPrice = i18n.language === "fr" ? `${price}€` : `$${Math.trunc(price * 1.2)}`
  return (
    <ExternalLink
      css={internalCardStyle}
      underline={false}
      href={linkBuilder({
        lang: i18n.languageCode,
        slug: to,
      })}
      className="get-your-guide-card inline-flex flex-column"
    >
      <div className="internal-travel-card-container">
        <div className="information">
          <div className="title b tc mt2 mb1">{title}</div>
          <div className="stars tc pb1">{rating && <Rating value={rating} to={to} />}</div>
        </div>
        <div className="photo-container relative">
          {Image}
          {certified && (
            <div className="certified">
              <div className="certified-container">
                <svg width="48" height="48" viewBox="0 0 65 65">
                  <path fill="#FFCD00" d="M65 32.5A32.5 32.5 0 1 1 32.5 0 32.6 32.6 0 0 1 65 32.5" />
                  <path
                    fill="#1A2B49"
                    d="M56.2 32.5a23.7 23.7 0 1 0-23.7 23.7 23.7 23.7 0 0 0 23.7-23.7zm1.7 0A25.4 25.4 0 1 1 32.5 7.1a25.4 25.4 0 0 1 25.4 25.4z"
                  />
                  <path
                    fill="#1A2B49"
                    d="M59.7 32.5a1.2 1.2 0 0 1 1.2-1.2 1.1 1.1 0 0 1 1.1 1.2 1.2 1.2 0 0 1-1.1 1.2 1.2 1.2 0 0 1-1.2-1.2zm-.4 4.6a1.2 1.2 0 0 1 1.3-1 1.2 1.2 0 0 1 1 1.4 1.2 1.2 0 1 1-2.3-.4zm-1.2 4.5a1.2 1.2 0 1 1 2.2.8 1.2 1.2 0 0 1-2.2-.8zm-1.9 4.2a1.2 1.2 0 0 1 1.6-.5 1.3 1.3 0 0 1 .5 1.7h-.1a1.2 1.2 0 0 1-1.6.4 1.2 1.2 0 0 1-.5-1.6zm-2.6 3.8a1.1 1.1 0 0 1 1.7-.1 1.1 1.1 0 0 1 .1 1.6 1.2 1.2 0 1 1-1.9-1.5zM50.4 53a1 1 0 0 1 1.6.1 1.2 1.2 0 0 1-.1 1.7h-.1a1 1 0 0 1-1.6-.1 1.2 1.2 0 0 1 .1-1.7zm-3.8 2.7a1.3 1.3 0 0 1 1.7.4 1.2 1.2 0 0 1-.4 1.6h-.1a1.1 1.1 0 0 1-1.6-.4 1.1 1.1 0 0 1 .3-1.6zm-4.1 2.1a1.1 1.1 0 0 1 1.5.6 1.2 1.2 0 0 1-.6 1.6h-.1a1.2 1.2 0 0 1-1.6-.6 1.3 1.3 0 0 1 .7-1.6zm-4.4 1.3a1.3 1.3 0 0 1 1.4.9 1.2 1.2 0 0 1-1 1.4h-.1a1.3 1.3 0 0 1-1.4-1 1.3 1.3 0 0 1 .9-1.4zm-4.7.6a1.2 1.2 0 0 1 1.3 1.1 1.2 1.2 0 0 1-1.2 1.2h-.1a1.1 1.1 0 0 1-1.2-1.1 1.1 1.1 0 0 1 1.1-1.2zm-4.6-.3a1.2 1.2 0 0 1 1 1.4 1.2 1.2 0 0 1-1.3 1h-.1a1.2 1.2 0 0 1-1-1.4 1.2 1.2 0 0 1 1.3-1zm-4.5-1a1.2 1.2 0 1 1-.7 2.3h-.1a1.2 1.2 0 0 1 .7-2.3zM20 56.7a1.2 1.2 0 0 1 .5 1.6 1.3 1.3 0 0 1-1.6.5h-.1a1.2 1.2 0 0 1 1.1-2.1zm-3.9-2.5a1.2 1.2 0 0 1 .2 1.7 1.1 1.1 0 0 1-1.6.2h-.1a1.1 1.1 0 0 1-.3-1.6 1.2 1.2 0 0 1 1.7-.3zm-3.5-3.1a1.2 1.2 0 0 1 0 1.7 1.2 1.2 0 0 1-1.7-.1h-.1a1.1 1.1 0 0 1 .1-1.6 1.2 1.2 0 0 1 1.7 0zm-2.8-3.6a1.2 1.2 0 0 1-.4 1.6 1.1 1.1 0 0 1-1.6-.3h-.1a1.3 1.3 0 0 1 .4-1.8 1.2 1.2 0 0 1 1.6.4zm-2.3-4.1a1.2 1.2 0 0 1-.6 1.6 1.1 1.1 0 0 1-1.5-.6h-.1a1.3 1.3 0 0 1 .6-1.6 1.2 1.2 0 0 1 1.6.6zM6.1 39a1.2 1.2 0 0 1-.9 1.4 1.1 1.1 0 0 1-1.4-.8h-.1a1.3 1.3 0 0 1 .9-1.6 1.2 1.2 0 0 1 1.4.9zm-.8-4.6a1.1 1.1 0 0 1-1.1 1.3A1.1 1.1 0 0 1 3 34.6a1.2 1.2 0 0 1 1.1-1.3 1.2 1.2 0 0 1 1.2 1.1zm.1-4.6a1.3 1.3 0 0 1-1.3 1.1A1.4 1.4 0 0 1 3 29.6a1.2 1.2 0 0 1 1.3-1.1 1.2 1.2 0 0 1 1.1 1.3zm.8-4.6a1.2 1.2 0 0 1-1.4.9 1.2 1.2 0 0 1-.8-1.5 1.1 1.1 0 0 1 1.4-.8 1.2 1.2 0 0 1 .9 1.4zm1.6-4.3a1.1 1.1 0 0 1-1.5.6 1.2 1.2 0 0 1-.6-1.6h.1a1.1 1.1 0 0 1 1.5-.6 1.2 1.2 0 0 1 .6 1.6zm2.4-4a1.3 1.3 0 0 1-1.7.3 1.4 1.4 0 0 1-.3-1.7h.1a1.1 1.1 0 0 1 1.6-.2 1.1 1.1 0 0 1 .3 1.6zm2.9-3.6a1 1 0 0 1-1.6 0 1 1 0 0 1 0-1.6 1.2 1.2 0 1 1 1.7 1.7zm3.6-3A1.2 1.2 0 0 1 15 10a1.1 1.1 0 0 1 .3-1.6h.1a1.2 1.2 0 0 1 1.6.3 1.2 1.2 0 0 1-.2 1.7zm4-2.3a1.3 1.3 0 0 1-1.6-.6 1.2 1.2 0 0 1 .5-1.6h.1a1.2 1.2 0 0 1 1.6.5 1.3 1.3 0 0 1-.5 1.6zM25 6.3a1.2 1.2 0 0 1-1.5-.8 1.2 1.2 0 0 1 .8-1.5h.1a1.2 1.2 0 1 1 .7 2.3zm4.5-.9a1.2 1.2 0 0 1-1.3-1 1.2 1.2 0 0 1 1.1-1.3h.1a1.2 1.2 0 0 1 1.3 1 1.2 1.2 0 0 1-1.1 1.3zm4.7-.1a1.1 1.1 0 0 1-1.1-1.2A1.1 1.1 0 0 1 34.3 3h.1a1.1 1.1 0 0 1 1.1 1.2 1.1 1.1 0 0 1-1.2 1.1zm4.6.7a1.1 1.1 0 0 1-.9-1.4 1.2 1.2 0 0 1 1.4-.9h.1a1.3 1.3 0 0 1 .9 1.5 1.1 1.1 0 0 1-1.4.8zm4.4 1.5a1.4 1.4 0 0 1-.7-1.6 1.2 1.2 0 0 1 1.6-.6h.1a1.2 1.2 0 0 1 .6 1.6 1.1 1.1 0 0 1-1.5.6zm4 2.1a1.1 1.1 0 0 1-.3-1.6 1.2 1.2 0 0 1 1.6-.4h.1a1.2 1.2 0 0 1 .4 1.7 1.3 1.3 0 0 1-1.7.4zm3.7 2.9a1.2 1.2 0 0 1 1.6-1.8h.1a1.2 1.2 0 0 1-1.6 1.9zm3.1 3.4a1.2 1.2 0 0 1 .3-1.7 1.1 1.1 0 0 1 1.6.3h.1a1.2 1.2 0 1 1-1.9 1.5zm2.5 3.9a1.3 1.3 0 0 1 .5-1.6 1.2 1.2 0 0 1 1.6.5h.1a1.2 1.2 0 0 1-2.1 1.1zm1.8 4.3a1.2 1.2 0 0 1 2.3-.8 1.2 1.2 0 1 1-2.2.8zm1.1 4.5a1.2 1.2 0 0 1 1-1.4 1.2 1.2 0 0 1 1.3 1h.1a1.3 1.3 0 0 1-1.1 1.4 1.2 1.2 0 0 1-1.3-1zM32.5 17.2c-5.9 0-10.5 3.9-10.5 9.7h4.8c0-3 2.5-5.1 5.7-5.1s5.7 2.1 5.7 5.1H43c0-5.8-4.6-9.7-10.5-9.7zm-8.1 16.4A2.6 2.6 0 0 0 27 31a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 2.6 2.6zM22 35.1v3a9.4 9.4 0 0 0 9.2 9.7 9.3 9.3 0 0 0 7.7-4.1v3.7h4.3V35.1H31.7v4.2h4.7a4.9 4.9 0 0 1-9.6-1.2v-3z"
                  />
                </svg>
              </div>
            </div>
          )}
          {bestseller && (
            <div className="bestseller">
              <span className="bestseller-text white">Bestseller</span>
            </div>
          )}
        </div>
      </div>
      <div className="ml-auto mr-auto flex justify-center ttu b activity-container white">
        <span className="activity">
          <FaClock />
          <span>
            &nbsp;{duration.value} {transformDurationUnit(duration.value, duration.unit, i18n.languageCode)}
          </span>
        </span>
        <span className="activity">
          <FaUser />
          <span>&nbsp;{computedPrice}</span>
        </span>
        {groupSize === "small" && (
          <span className="activity">{i18n.languageCode === "fr" ? "petit groupe" : "small group"}</span>
        )}
        {groupType === "public" && <span className="activity">Public</span>}
        {groupType === "private" && (
          <span className="activity">{i18n.languageCode === "fr" ? "privé" : "private"}</span>
        )}
      </div>
    </ExternalLink>
  )
}

export const GetYourGuideCard: React.FunctionComponent<BaseProps> = (props) => {
  return (
    <InternalCard
      {...props}
      linkBuilder={buildGetYourGuideUrl}
      Image={
        <picture>
          <source srcSet={`${props.image}.webp`} type="image/webp" />
          <img alt={props.title} src={`${props.image}.webp`} className="w-100" />
        </picture>
      }
    />
  )
}

export const TripadvisorCard: React.FunctionComponent<BaseProps> = (props) => {
  return (
    <InternalCard
      {...props}
      linkBuilder={buildTripadvisorUrl}
      Image={<img alt={props.title} src={`${props.image}`} className="w-100" />}
    />
  )
}

const basicLinkBuilder = ({ slug }: { slug: string }) => slug
export const BasicTourCard: React.FunctionComponent<BaseProps> = (props) => {
  return (
    <InternalCard
      {...props}
      linkBuilder={basicLinkBuilder}
      Image={<img alt={props.title} src={`${props.image}`} className="w-100" />}
    />
  )
}

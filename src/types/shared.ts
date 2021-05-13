/// <reference types="@emotion/react/types/css-prop" />

import { ComponentType } from "react"
import { FluidObject, GatsbyImageOptionalProps } from "gatsby-image"
import { SerializedStyles } from "@emotion/react"

export type Status = "INITIAL" | "LOADING" | "SUCCESS" | "ERROR"

export interface ExtraCardProps {
  fluidObject?: Partial<FluidObject>
  card?: {
    showTags?: boolean
    showPublished?: boolean
    showMore?: boolean
    imageOnly?: boolean
  }
}

export type ExtraImageProps = {
  className?: string
  fluidObject?: Partial<FluidObject>
  imgStyle?: GatsbyImageOptionalProps["imgStyle"]
  css?: SerializedStyles
  onLoad?: (path: string) => void
}

export type ExtraImageLinkProps = ExtraImageProps & {
  image: any
}

export type OrganisationCard = {
  label: string
  to: string
  image: ComponentType<ExtraImageLinkProps>
  imageProps?: ExtraImageLinkProps
}

export type WeatherType = "good" | "fair" | "poor"
export type WeatherIconType = "light-rain" | "heavy-rain" | "sun-rain" | "sun-cloud" | "sunny" | "snow"
export type WeatherAltIconType =
  | "hot"
  | "droplet"
  | "cold"
  | "snow-man"
  | "sakura"
  | "autumn"
  | "arctic"
  | "scuba"
  | "jelly-fish"
  | "climb"
  | "swim"
  | "shower"
  | "surf"
  | "whale"
  | "floating-market"
  | "typhoon"

type WeatherAltIconPosition = "alt-bottom-right" | "alt-top-right" | "alt-top-left" | "alt-bottom-left"

export type WeatherAltType = WeatherAltIconType | { type: WeatherAltIconType; position: WeatherAltIconPosition }
export const getWeatherAltIconType = (alt: WeatherAltType): WeatherAltIconType =>
  typeof alt === "object" ? alt.type : alt
export const getWeatherAltIconPosition = (alt: WeatherAltType): WeatherAltIconPosition | undefined =>
  typeof alt === "object" ? alt.position : undefined
export interface WeatherData {
  type: WeatherType
  icon: WeatherIconType
  temp: number
  alt?: WeatherAltType | WeatherAltType[]
}
export interface WeatherEntry {
  id?: string
  label: string
  tooltipLabel?: string
  data: [
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData,
    WeatherData
  ]
}

export type PointOfInterest =
  | "monument"
  | "nature"
  | "city"
  | "animals"
  | "lazy"
  | "water-activities"
  | "winter-activities"

export type Season = "autumn" | "winter" | "spring" | "summer"

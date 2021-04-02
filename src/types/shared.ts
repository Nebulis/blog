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
interface WeatherData {
  type: WeatherType
  icon: WeatherIconType
  temp: number
  alt?: WeatherAltIconType | WeatherAltIconType[]
}
export interface WeatherEntry {
  label: string
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

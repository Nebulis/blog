import { ComponentType } from "react"
import { FluidObject } from "gatsby-image"
import { InterpolationWithTheme } from "@emotion/core"

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
  imgStyle?: object
  css?: InterpolationWithTheme<any>
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
type WeatherIconType = "light-rain" | "heavy-rain" | "sun-rain" | "sun-cloud" | "sunny"
type WeatherAltIconType = "hot" | "droplet"
interface WeatherData {
  type: WeatherType
  icon: WeatherIconType
  alt?: WeatherAltIconType
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

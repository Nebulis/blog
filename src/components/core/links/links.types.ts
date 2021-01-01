import { ComponentType } from "react"
import { ExtraCardProps } from "../../../types/shared"
export type Label = {
  fr: string
  en: string
}
export type Lang = keyof Label

export interface ContinentLink {
  id: string
  label: Label
  url?: string
  countries: CountryLink[]
}
export interface CountryLink {
  id: string
  label: Label
  url?: string
  image?: ComponentType<ExtraCardProps>
  cities: CityLink[]
  others: OtherLink[]
}
export interface CityLink {
  id: string
  label: Label
  url?: string
  image?: ComponentType<ExtraCardProps>
  highlights: HighlightLink[]
}

export interface OtherLink {
  id: string
  label: Label
  url?: string
  published: boolean | Date
  card?: ComponentType<ExtraCardProps>
}

export interface HighlightLink {
  id: string
  label: Label
  url?: string
  published: boolean | Date
  card?: ComponentType<ExtraCardProps>
}
export interface NavigationLink {
  id: string
  label: Label
  url?: string
  published?: boolean | Date
  sections: NavigationLink[]
}

export type HighlightWithCard = HighlightLink & { card: ComponentType<ExtraCardProps> }

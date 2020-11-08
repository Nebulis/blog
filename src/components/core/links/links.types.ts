import { ComponentType } from "react"
import { ExtraCardProps } from "../../../types/shared"

export interface ContinentLink {
  id: string
  label: string
  url?: string
  countries: CountryLink[]
}
export interface CountryLink {
  id: string
  label: string
  url?: string
  image?: ComponentType<ExtraCardProps>
  cities: CityLink[]
  others: OtherLink[]
}
export interface CityLink {
  id: string
  label: string
  url?: string
  image?: ComponentType<ExtraCardProps>
  highlights: HighlightLink[]
}

export interface OtherLink {
  id: string
  label: string
  url?: string
  published: boolean | Date
  card?: ComponentType<ExtraCardProps>
}

export interface HighlightLink {
  id: string
  label: string
  url?: string
  published: boolean | Date
  card?: ComponentType<ExtraCardProps>
}
export interface NavigationLink {
  id: string
  label: string
  url?: string
  published?: boolean | Date
  sections: NavigationLink[]
}

import { ComponentType } from "react"

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
  cities: CityLink[]
  others: OtherLink[]
}
export interface CityLink {
  id: string
  label: string
  url?: string
  image?: ComponentType
  highlights: HighlightLink[]
}

export interface OtherLink {
  id: string
  label: string
  url?: string
  published: boolean | Date
  card?: ComponentType
}

export interface HighlightLink {
  id: string
  label: string
  url?: string
  published: boolean | Date
  card?: ComponentType
}
export interface NavigationLink {
  id: string
  label: string
  url?: string
}

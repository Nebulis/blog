import React, { ComponentType } from "react"
import { ExtraCardProps, ExtraImageLinkProps, PointOfInterest } from "../../../types/shared"

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
  imageProps?: ExtraImageLinkProps
  cities: CityLink[]
  others: OtherLink[]
  pointOfInterest?: PointOfInterest[]
}
export interface CityLink {
  id: string
  label: Label
  url?: string
  imageProps?: ExtraImageLinkProps
  highlights: HighlightLink[]
  pointOfInterest?: PointOfInterest[]
}

export interface OtherLink {
  id: string
  label: Label
  url?: string
  published: boolean | Date
  card?: ComponentType<ExtraCardProps>
  additionalTags?: string[]
  kind?: Kind
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

const KIND_KEYS = ["continent", "country", "city", "highlight", "other", "menu", "noIdea", "fruit"] as const
export type Kind = typeof KIND_KEYS[number]
export const isKind = (value: any): value is Kind => KIND_KEYS.includes(value)
export interface CachedLinksMap {
  id: string
  country?: string
  label: Label
  url: string
  published: boolean
  publishedDate?: Date
  tags: string[]
  pointOfInterest: PointOfInterest[]
  card?: React.ComponentType<ExtraCardProps>
  kind: Kind
}

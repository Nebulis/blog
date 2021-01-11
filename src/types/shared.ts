import { ComponentType } from "react"
import { FluidObject } from "gatsby-image"

export type Status = "INITIAL" | "LOADING" | "SUCCESS" | "ERROR"

export interface ExtraCardProps {
  fluidObject?: Partial<FluidObject>
  card?: {
    showTags?: boolean
    showPublished?: boolean
    showMore?: boolean
  }
}

export type ExtraImageProps = { className?: string; fluidObject?: Partial<FluidObject>; imgStyle?: object }

export type OrganisationCard = {
  label: string
  to: string
  image: ComponentType
}

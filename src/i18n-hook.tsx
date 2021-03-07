import { Lang } from "./components/core/links/links.types"
import { i18n as I18n, TFunction } from "i18next"
import { Namespace, useTranslation, UseTranslationOptions } from "react-i18next"

export const useCustomTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions
): {
  t: TFunction
  i18n: I18n & { languageCode: Lang }
  ready: boolean
} => {
  const { i18n, ...rest } = useTranslation(ns, options)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  i18n.languageCode = (i18n.language.startsWith("fr") ? "fr" : "en") as Lang
  return {
    ...rest,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    i18n,
  }
}

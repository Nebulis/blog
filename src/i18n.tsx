import React from "react"
import i18n, { TFunction, i18n as I18n } from "i18next"
import { initReactI18next, Namespace, useTranslation, UseTranslationOptions } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { Lang } from "./components/core/links/links.types"
import commonEn from "./locales/en/common.json"
import commonFr from "./locales/fr/common.json"

export const configureI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: commonEn },
        fr: { common: commonFr },
      },
      fallbackLng: "fr",
      load: "languageOnly",
      debug: process?.env?.CONTEXT !== "production",
      saveMissing: true,
      // eslint-disable-next-line react/display-name
      parseMissingKeyHandler: (key: string) => {
        // doesnt really work but whatever
        return <span className="b--red bw2 ba bg-purple white">{key}</span>
      },
      react: {
        wait: true,
        useSuspense: false,
      },
    })
}

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

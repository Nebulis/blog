import React from "react"
import i18n, { TFunction, i18n as I18n } from "i18next"
import { initReactI18next, Namespace, useTranslation, UseTranslationOptions } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { Lang } from "./components/core/links/links.types"
import commonEn from "./locales/en/common.json"
import commonFr from "./locales/fr/common.json"

export const configureI18n = () => {
  i18n
    .use({
      type: "postProcessor",
      name: "nameOfProcessor",
      process: function (value: string) {
        let mode: "normal" | "bold" | "italic" = "normal"
        const elements: React.ReactNode[] = []
        let currentString = ""
        if (value.includes("#") || value.includes("_")) {
          ;[...value].forEach((v) => {
            if (v === "#" && mode === "normal") {
              elements.push(currentString)
              currentString = ""
              mode = "bold"
            } else if (v === "_" && mode === "normal") {
              elements.push(currentString)
              currentString = ""
              mode = "italic"
            } else if (v === "#" && mode === "bold") {
              elements.push(<span className="b">{currentString}</span>)
              currentString = ""
              mode = "normal"
            } else if (v === "_" && mode === "italic") {
              elements.push(<span className="i">{currentString}</span>)
              currentString = ""
              mode = "normal"
            } else {
              currentString += v
            }
          })
          elements.push(currentString)
          return (
            <>
              {elements.map((element, index) => (
                <React.Fragment key={index}>{element}</React.Fragment>
              ))}
            </>
          )
        }
        return value
      },
    })
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: commonEn },
        fr: { common: commonFr },
      },
      postProcess: ["nameOfProcessor"],
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

import React from "react"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import commonEn from "./locales/en/common.json"
import commonFr from "./locales/fr/common.json"
import { mdxPseudoProcessor } from "./mdx-pseudo-processor"

export const configureI18n = () => {
  i18n
    .use({
      type: "postProcessor",
      name: "mdx-pseudo-processor",
      process: mdxPseudoProcessor,
    })
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { common: commonEn },
        fr: { common: commonFr },
      },
      postProcess: ["mdx-pseudo-processor"],
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
        useSuspense: false,
      },
    })
}

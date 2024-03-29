import React, { useContext } from "react"
import SEO from "../../../components/layout/seo"
import { VietnamBlogLayout, vietnamWeatherEntries } from "../../../components/core/asia/vietnam/vietnam"
import { PageProps } from "gatsby"
import translationFr from "../../../locales/fr/asia/vietnam/prepare.json"
import translationEn from "../../../locales/en/asia/vietnam/prepare.json"
import i18n from "i18next"
import { useCustomTranslation } from "../../../i18n-hook"
import { ImageAsLandscape, ImageAsPortrait } from "../../../components/images/layout"
import { FaBriefcaseMedical, FaLaptop, FaShoppingBag, FaTshirt } from "react-icons/fa"
import {
  Baggage,
  FewWords,
  Health,
  How,
  HowLong,
  HowMuch,
  ImageDescription,
  Introduction,
  LocalCurrency,
  MenuArticle,
  NaturalDisaster,
  Opinion,
  Phone,
  Scams,
  Visa,
  Visit,
  WhatTimeOfYear,
  WhereToStay,
} from "../../../components/core/section"
import { ApplicationContext } from "../../../components/application"
import { css } from "@emotion/react"
import { PrepareVietnamImages } from "../../../components/images/asia/vietnam/prepare-vietnam-images"
import { Comments } from "../../../components/core/comments"
import { Conclusion } from "../../../components/core/conclusion"
import { Divider } from "../../../components/core/divider"
import { SharedCardVietnamImages } from "../../../components/images/asia/vietnam/shared-card-vietnam-images"
import {
  BelarusWithFlag,
  BruneiWithFlag,
  CambodiaWithFlag,
  ChileWithFlag,
  DenmarkWithFlag,
  FinlandWithFlag,
  FranceWithFlag,
  GermanyWithFlag,
  IndonesiaWithFlag,
  ItalyWithFlag,
  JapanWithFlag,
  KyrgyzstanWithFlag,
  LaosWithFlag,
  MalaysiaWithFlag,
  MyanmarWithFlag,
  NorwayWithFlag,
  PhilippinesWithFlag,
  RussiaWithFlag,
  SingaporeWithFlag,
  SouthKoreaWithFlag,
  SpainWithFlag,
  SwedenWithFlag,
  ThailandWithFlag,
  UKWithFlag,
} from "../../../components/icon/flags"
import { smallEnd } from "../../../components/core/variables"
import { getLink } from "../../../components/core/links/links.utils"
import HomeImgUrl from "../../../images/asia/vietnam/prepare/prepare-vietnam-main.jpg"
import SouthernVietnamMapTransport from "../../../images/asia/vietnam/southern-vietnam-map-transport.png"
import { FakeList, PrepareSubTitle, Title } from "../../../components/core/title"
import { Quote } from "../../../components/core/quote"
import { MapContainer, PetitCarreColore, Table } from "../../../components/layout/layout"
import { Weather } from "../../../components/core/weather"
import { Tornado } from "../../../components/icon/tornado"
import { Hurricane } from "../../../components/icon/hurricane"

const Flood: React.FunctionComponent = () => (
  <svg className="mr2" height="64" viewBox="0 0 512 512" width="64">
    <g id="flat">
      <path d="m24 360h464v128h-464z" fill="#0bafea" />
      <path d="m120 264h288v96h-288z" fill="#fbb540" />
      <path d="m120 264h112v96h-112z" fill="#ea9d2d" />
      <path d="m320 312a24 24 0 0 1 24 24v24a0 0 0 0 1 0 0h-48a0 0 0 0 1 0 0v-24a24 24 0 0 1 24-24z" fill="#e82f3e" />
      <path d="m408 264h-288l48-80h192z" fill="#e82f3e" />
      <path d="m168 184 64 80h-112z" fill="#d32b39" />
      <path d="m288 232h48v-48l-24-32-24 32z" fill="#fbb540" />
      <path d="m288 184 24-32h-48l-24 32z" fill="#e82f3e" />
      <path d="m288 232-48-48h48z" fill="#ea9d2d" />
      <path d="m160 296h32v32h-32z" fill="#eaeae8" />
      <g fill="#43dcfe">
        <path d="m88 400h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16z" />
        <path d="m136 400h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
        <path d="m224 400h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16z" />
        <path d="m120 432h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" />
        <path d="m168 432h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
        <path d="m256 432h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16z" />
        <path d="m312 400h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16z" />
        <path d="m352 400h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
        <path d="m456 400h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16z" />
        <path d="m88 464h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16z" />
        <path d="m136 464h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
        <path d="m224 464h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16z" />
        <path d="m312 464h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16z" />
        <path d="m352 464h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
        <path d="m456 464h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16z" />
        <path d="m344 432h-56a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16z" />
        <path d="m384 432h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16z" />
        <path d="m456 432h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16z" />
      </g>
      <path d="m464 296a24 24 0 0 1 24 24v40a0 0 0 0 1 0 0h-48a0 0 0 0 1 0 0v-40a24 24 0 0 1 24-24z" fill="#027226" />
      <path d="m64 280-24 80h48z" fill="#027226" />
      <path
        d="m120 72a24 24 0 0 0 -42.672-15.072 15.964 15.964 0 0 0 -21.328 15.072 24 24 0 0 0 -24 24 24 24 0 0 0 24 24h64a24 24 0 0 0 24-24 24 24 0 0 0 -24-24z"
        fill="#cbcbcb"
      />
      <path
        d="m464 72a24 24 0 0 0 -42.672-15.072 15.964 15.964 0 0 0 -21.328 15.072 24 24 0 0 0 -24 24 24 24 0 0 0 24 24h64a24 24 0 0 0 24-24 24 24 0 0 0 -24-24z"
        fill="#eaeae8"
      />
      <path
        d="m192 48h-4.292a31.992 31.992 0 0 0 -55.416 0h-4.292a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h64a24 24 0 0 0 24-24 24 24 0 0 0 -24-24z"
        fill="#eaeae8"
      />
      <path
        d="m32 168a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m72 168a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m112 168a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m48 208a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m88 208a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m392 168a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m432 168a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m472 168a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m408 208a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
      <path
        d="m448 208a8 8 0 0 1 -5.657-13.657l8-8a8 8 0 0 1 11.314 11.314l-8 8a7.976 7.976 0 0 1 -5.657 2.343z"
        fill="#75c2d4"
      />
    </g>
  </svg>
)
const Lotus: React.FunctionComponent = () => (
  <svg viewBox="0 0 64 64">
    <path
      d="m32 26s-1-9 9-14c0 0 6-2 6-7v17.54s1 21.46-16 23.46c0 0-14 1-15-24.41v-16.59c0 5 6 7 6 7 10 5 10 14 10 14z"
      fill="#ef6781"
    />
    <path
      d="m22.33 35s-3.72-10.83-1.33-19c0 0 10.53 5.17 10 10 0 0 3.67-6.67 9.83-7.83 0 0 8 8.33-.83 17.83z"
      fill="#d85272"
    />
    <path
      d="m21 31-3 9-7.2-5.4a12 12 0 0 1 -4.8-9.6v-13c0 2.88 2 4.76 3.67 5.84a11.67 11.67 0 0 0 2.33 1.16c7.22 3.61 8.7 8.82 9 12z"
      fill="#f2334f"
    />
    <path
      d="m21 31-3 9c-7.92-6-8.65-16.3-8.33-22.16a11.67 11.67 0 0 0 2.33 1.16c7.22 3.61 8.7 8.82 9 12z"
      fill="#d82749"
    />
    <path
      d="m58 12v13a12 12 0 0 1 -4.8 9.6l-7.2 5.4a10.09 10.09 0 0 1 -.92-1.2 13.87 13.87 0 0 1 -2.08-7.8c.27-3.18 1.76-8.39 9-12a12 12 0 0 0 2.21-1.08c1.79-1.07 3.79-2.92 3.79-5.92z"
      fill="#f2334f"
    />
    <path
      d="m54.24 17.92c0 .71 0 1.49-.08 2.32-.28 4.51-1.49 10.53-5.39 15.21a18.16 18.16 0 0 1 -3.66 3.35 13.87 13.87 0 0 1 -2.11-7.8c.27-3.18 1.76-8.39 9-12a12 12 0 0 0 2.24-1.08z"
      fill="#d82749"
    />
    <path
      d="m2.08 33s6.25 7 13.25 5c0 0 7.92-4.62 15.25-1 0 0-4.67 11.14-15.08 10.23l-9.42-2.23c-5-3-4-12-4-12z"
      fill="#ef6781"
    />
    <path
      d="m61.92 33s-6.25 7-13.25 5c0 0-7.92-4.62-15.25-1 0 0 4.67 11.14 15.08 10.23l9.42-2.23c5-3 4-12 4-12z"
      fill="#ef6781"
    />
    <g fill="#f2334f">
      <path d="m62 54s-16 9-26-8c0 0-2.75-5.5-2.5-9a22.64 22.64 0 0 0 5.75 6.08 10.65 10.65 0 0 0 4.75 1.92s5-2 10 4a19 19 0 0 0 4 3.76c2.55 1.72 4 1.24 4 1.24z" />
      <path d="m37.76 45c-.11-.23-.25-.53-.4-.87a14.82 14.82 0 0 0 3.76 2.15 10.27 10.27 0 0 0 2.66.66 2 2 0 0 0 1-.13s3.7-1.41 7.72 3.42a26.46 26.46 0 0 0 2.5 2.77c.41.36.81.69 1.19 1-4.91 1-12.71.72-18.43-9z" />
      <path d="m32 40-4 6c-10 17-26 8-26 8s1.84.61 5-2a22.18 22.18 0 0 0 3-3c5-6 10-4 10-4s1.49-.35 3.45-.94c2.98-.9 7.03-2.37 8.55-4.06z" />
      <path d="m7.77 54a21.86 21.86 0 0 0 2.67-2.45c.36-.38.73-.79 1.1-1.24 3.93-4.72 7.59-3.47 7.72-3.42a2 2 0 0 0 1.19.09l.39-.1c1-.24 3-.77 5.23-1.52-5.71 9.37-13.4 9.64-18.3 8.64z" />
    </g>
    <path
      d="m23.45 44.06a15.8 15.8 0 0 1 -2.61 2.79 22.84 22.84 0 0 1 -10.4 4.67 32.17 32.17 0 0 1 -3.44.48 22.18 22.18 0 0 0 3-3c5-6 10-4 10-4s1.49-.35 3.45-.94z"
      fill="#d82749"
    />
    <path
      d="m40 51.24v.76c0 7.18-8 10-8 10s-8-2.82-8-10v-.76s.42-11.24 8.67-15.24c0 0 6.75 3 7.33 15.24z"
      fill="#ef6781"
    />
    <path
      d="m32.61 38.31c-6.16 3.8-6.61 12.91-6.62 13v.69c0 4.61 4.32 7.06 6 7.83 1.7-.78 6-3.2 6-7.83v-.72c-.4-8.36-3.81-11.81-5.38-12.97z"
      fill="#ef6781"
    />
    <path d="m32 36s-10.25 4.88 0 18.38c0 0 11-12.13 0-18.38z" fill="#d85272" />
    <path
      d="m58 52.76a24.12 24.12 0 0 1 -3 .24c-7.33.12-11.57-3.4-13.92-6.66a17.9 17.9 0 0 1 -1.87-3.25 10.65 10.65 0 0 0 4.79 1.91s5-2 10 4a19 19 0 0 0 4 3.76z"
      fill="#d82749"
    />
    <ellipse cx="32" cy="36" fill="#f995ad" rx="8" ry="4" />
    <path d="m10 7h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#fdca2f" />
    <path d="m33 9h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#fdca2f" />
    <path d="m55 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#fdca2f" />
    <path d="m36 37h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#d85272" />
    <path d="m30 37h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#d85272" />
  </svg>
)
const Cyclo: React.FunctionComponent = () => (
  <svg width="64" height="64" viewBox="0 0 64 64">
    <path d="m39.41 10.09a1 1 0 0 0 -1.32.5l-6.22 13.83 2.13.15 5.91-13.16a1 1 0 0 0 -.5-1.32z" fill="#5e3011" />
    <path d="m32.18 27-.36-2 10.69-1.94 6.78-6.78 1.41 1.41-7 7a1 1 0 0 1 -.53.28z" fill="#f7941e" />
    <path d="m10.92 40.38-1.84-.76 12.92-31 1.85.76z" fill="#c86a25" />
    <path
      d="m44 49a1 1 0 0 1 -1-.74l-4-15a1 1 0 0 1 .19-.89 1 1 0 0 1 .83-.37l16.98.94v-8.94a1 1 0 0 1 2 0v10a1 1 0 0 1 -1.06 1l-16.62-.92 3.68 13.66a1 1 0 0 1 -.74 1.26 1 1 0 0 1 -.26 0z"
      fill="#f7941e"
    />
    <circle cx="12" cy="55" fill="#fdca2f" r="7" />
    <circle cx="55" cy="55" fill="#fdca2f" r="7" />
    <path d="m58 7.4v-1.34h-6v3.94a3 3 0 0 0 3 3h2v7a1 1 0 0 0 2 0v-11.6a1 1 0 0 0 -1-1z" fill="#edba70" />
    <path d="m47 4 15 6-4-8z" fill="#e72b3f" />
    <path d="m32 50h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" fill="#844215" />
    <path d="m39 50h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" fill="#844215" />
    <g fill="#5e3011">
      <path d="m12 63a8 8 0 1 1 8-8 8 8 0 0 1 -8 8zm0-14a6 6 0 1 0 6 6 6 6 0 0 0 -6-6z" />
      <path d="m55 63a8 8 0 1 1 8-8 8 8 0 0 1 -8 8zm0-14a6 6 0 1 0 6 6 6 6 0 0 0 -6-6z" />
      <path d="m40 56h-6a1 1 0 0 1 0-2h5.45l9.71-15.53a1 1 0 0 1 .84-.47h7a1 1 0 0 1 0 2h-6.45l-9.7 15.53a1 1 0 0 1 -.85.47z" />
      <path d="m30 56h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2z" />
    </g>
    <path
      d="m2 40a1 1 0 0 1 -.83-1.55l4-6a1 1 0 0 1 1.1-.45l13.18 3.8 5.64-12.22a1 1 0 0 1 .91-.58h7c.55 0 1.21.45 1.21 1a1 1 0 0 1 -1 1h-6.57l-5.73 12.42a1 1 0 0 1 -1.18.54l-13.3-3.8-3.6 5.39a1 1 0 0 1 -.83.45z"
      fill="#e72b3f"
    />
    <path d="m59 14.75-9.71 1.54.75 18.27 8.96.77z" fill="#fdca2f" />
    <path d="m8.46 40.12-7.17 7.17a1 1 0 1 0 1.41 1.41l7.72-7.7z" fill="#aa1329" />
    <path d="m6 33.13 2.56 7.25 15.61 6.62 9.83-22.43-8.12-.57-5.88 13z" fill="#e72b3f" />
    <path d="m6 6h35v5h-35z" fill="#e72b3f" />
    <circle cx="31" cy="17" fill="#edba70" r="5" />
  </svg>
)
const BoatRide: React.FunctionComponent = () => (
  <svg viewBox="0 0 64 64">
    <path d="m24.12 33-.25-2 7.86-1 7.71-3.29.79 1.84-7.83 3.35a1 1 0 0 1 -.27.07z" fill="#c86a25" />
    <path d="m64 53c-4 0-4 2-8 2s-4-2-8-2-4 2-8 2-4-2-8-2-4 2-8 2-4-2-8-2-4 2-8 2-4-2-8-2v11h64z" fill="#84d7f4" />
    <path d="m46 26 .93-6.49-7.09-2.09 2.16 7.58z" fill="#edba70" />
    <path d="m43.61 23.34.73.18.37-2.58-1.95-.57z" fill="#edba70" />
    <g fill="#e72b3f">
      <path d="m52 21-12.8-3.77-4.2-1.23 11-3 1.8 2.4z" />
      <path d="m42.77 16.2-.44-.13 2.88-.78.28.37 1.3 1.72z" />
      <path d="m48 31v11.43l-5 .25-5 .24v-11.92c0-3.31 1.69-6 5-6a4.51 4.51 0 0 1 3.74 1.76 6.88 6.88 0 0 1 1.26 4.24z" />
    </g>
    <path d="m48 31v11.43l-5 .25v-17.68a4.51 4.51 0 0 1 3.74 1.76 6.88 6.88 0 0 1 1.26 4.24z" fill="#aa1329" />
    <path d="m10 49-8-8a225.79 225.79 0 0 0 31 2 225.78 225.78 0 0 0 29-2l-9 8z" fill="#e29344" />
    <path
      d="m47.8 15.4c-.77.05-1.55.14-2.31.26-.92.14-1.83.32-2.72.54-1.25.3-2.45.66-3.57 1l-4.2-1.2 11-3z"
      fill="#aa1329"
    />
    <path d="m32 11h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#84d7f4" />
    <path d="m3 17h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#84d7f4" />
    <path d="m13 61h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" fill="#2d99b2" />
    <path
      d="m26 11h-6.67a1 1 0 0 1 -1-1c0-2.76-1.79-5-4-5s-4 2.24-4 5a1 1 0 0 1 -1 1h-4.33a1 1 0 0 1 0-2h3.39c.42-3.39 2.92-6 5.94-6s5.52 2.61 5.94 6h5.73a1 1 0 0 1 0 2z"
      fill="#2d99b2"
    />
    <path d="m42 55a1 1 0 0 1 -.77-.37l-23-28a1 1 0 1 1 1.54-1.27l23 28a1 1 0 0 1 -.77 1.64z" fill="#fdb25a" />
    <path
      d="m28 39a1 1 0 0 1 -.27-2l6.82-1.95 7.85-5.85a1 1 0 1 1 1.2 1.6l-8 6a1 1 0 0 1 -.33.16l-7 2a1 1 0 0 1 -.27.04z"
      fill="#fdb25a"
    />
    <path d="m34 63h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" fill="#2d99b2" />
    <path d="m38 63h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" fill="#2d99b2" />
  </svg>
)
const Pagoda: React.FunctionComponent = () => (
  <svg viewBox="0 0 64 64">
    <path d="m16 30h32v8h-32z" fill="#f7941e" />
    <path d="m11 48h42v15h-42z" fill="#f7941e" />
    <g opacity=".5">
      <path d="m11 48h42v4h-42z" fill="#aa6111" />
    </g>
    <path d="m38 59v4h-12v-4a6 6 0 0 1 12 0z" fill="#844215" />
    <path d="m20 16h24v4h-24z" fill="#f7941e" />
    <path d="m24 8 8-7 9 7z" fill="#f7941e" />
    <g fill="#aa1329">
      <path d="m53 15h-21v-7h9z" />
      <path d="m5 31a1 1 0 0 1 -1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1 -1 1z" />
      <path d="m11 16a1 1 0 0 1 -1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1 -1 1z" />
      <path d="m53 16a1 1 0 0 1 -1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1 -1 1z" />
      <path d="m59 31a1 1 0 0 1 -1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1 -1 1z" />
      <path d="m62 49a1 1 0 0 1 -1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1 -1 1z" />
      <path d="m2 49a1 1 0 0 1 -1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1 -1 1z" />
    </g>
    <path d="m23 36a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1z" fill="#ce730f" />
    <path d="m16 57a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1 -1 1z" fill="#844215" />
    <path d="m21 57a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1 -1 1z" fill="#844215" />
    <path d="m43 57a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1 -1 1z" fill="#844215" />
    <path d="m48 57a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1 -1 1z" fill="#844215" />
    <path d="m29 36a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1z" fill="#ce730f" />
    <path d="m35 36a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1z" fill="#ce730f" />
    <path d="m41 36a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1z" fill="#ce730f" />
    <path
      d="m63 48.31a1 1 0 0 1 -1 .69h-60a1 1 0 0 1 -.34-1.94c2.1-.75 12.43-8.27 13.56-9.68a1 1 0 0 1 .78-.38h32a.94.94 0 0 1 .58.19l14 10a1 1 0 0 1 .42 1.12z"
      fill="#e72b3f"
    />
    <path
      d="m60 30.19a1 1 0 0 1 -1 .81h-54a1 1 0 0 1 -1-.81 1 1 0 0 1 .61-1.12c2-.8 11.22-7.35 12.16-8.65a1 1 0 0 1 .83-.42h28.8a1 1 0 0 1 .81.42c.94 1.3 10.14 7.85 12.16 8.65a1 1 0 0 1 .63 1.12z"
      fill="#e72b3f"
    />
    <path
      d="m54 15.26a1 1 0 0 1 -1 .74h-42a1 1 0 0 1 -.47-1.88l13-7a.94.94 0 0 1 .47-.12h17a1 1 0 0 1 .5.14l12 7a1 1 0 0 1 .5 1.12z"
      fill="#e72b3f"
    />
    <path d="m53 16h-21v-9h9a1 1 0 0 1 .5.14l12 7a1 1 0 0 1 -.5 1.86z" fill="#aa1329" />
    <path
      d="m59 31h-27v-11h14.4a1 1 0 0 1 .81.42c.94 1.3 10.14 7.85 12.16 8.65a1 1 0 0 1 .63 1.12 1 1 0 0 1 -1 .81z"
      fill="#aa1329"
    />
    <path d="m63 48.31a1 1 0 0 1 -1 .69h-30v-12h16a.94.94 0 0 1 .58.19l14 10a1 1 0 0 1 .42 1.12z" fill="#aa1329" />
    <path d="m22 26h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" fill="#aa1329" />
    <path d="m26 26h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" fill="#aa1329" />
  </svg>
)
const Calendar: React.FunctionComponent = () => (
  <svg viewBox="0 0 504.5 504.5">
    <g>
      <path
        d="m445.124 504.5h-385.748c-16.569 0-30-13.431-30-30v-41.733l445.748-81v122.733c0 16.569-13.432 30-30 30z"
        fill="#cdbfba"
      />
      <path
        d="m363.51 474.5h-304.084c-16.596 0-30.05-13.454-30.05-30.05v-372.626c0-16.596 13.454-30.05 30.05-30.05h385.647c16.596 0 30.05 13.454 30.05 30.05v291.062c0 7.97-18.166 15.613-23.802 21.249l-66.563 66.563c-5.634 5.636-13.278 23.802-21.248 23.802z"
        fill="#f9f3f1"
      />
      <path
        d="m363.37 474.5c7.97 0 15.613-3.166 21.249-8.802l81.703-81.703c5.636-5.636 8.802-13.279 8.802-21.249v-12.174c0 13.598-11.023 24.621-24.621 24.621h-50.064c-13.598 0-24.621 11.023-24.621 24.621v50.064c0 13.598-11.023 24.621-24.621 24.621h12.173z"
        fill="#efe2dd"
      />
      <path
        d="m475.12 71.77v77.18h-445.74v-77.18c0-16.56 13.43-30 30-30h385.74c16.57 0 30 13.44 30 30z"
        fill="#fece85"
      />
      <g>
        <g>
          <path
            d="m114.3 94.133c-5.722 0-10.58-.003-14.72-.003-12.58 0-22.81-10.23-22.81-22.8v-29.56h15v29.56c0 4.3 3.5 7.8 7.81 7.8 4.14 0 18.86 15.003 14.72 15.003z"
            fill="#fdb441"
          />
        </g>
        <g>
          <path
            d="m386.757 94.133s-10.577-.003-14.727-.003c-12.57 0-22.8-10.23-22.8-22.8v-29.56h15v29.56c0 4.3 3.5 7.8 7.8 7.8 4.15 0 14.727 10.863 14.727 15.003z"
            fill="#fdb441"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="m125.55 41.774v-18.967c0-4.305-3.502-7.807-7.807-7.807h-3.443c-4.305 0-7.807 3.502-7.807 7.807v48.52c0 4.305 3.502 7.807 7.807 7.807 4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5c-12.576 0-22.807-10.231-22.807-22.807v-48.52c0-12.576 10.231-22.807 22.807-22.807h3.443c12.576 0 22.807 10.231 22.807 22.807v18.967z"
            fill="#554e56"
          />
        </g>
        <g>
          <path
            d="m398.007 41.774v-18.967c0-4.305-3.502-7.807-7.807-7.807h-3.443c-4.305 0-7.807 3.502-7.807 7.807v48.52c0 4.305 3.502 7.807 7.807 7.807 4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5c-12.576 0-22.807-10.231-22.807-22.807v-48.52c0-12.576 10.231-22.807 22.807-22.807h3.443c12.576 0 22.807 10.231 22.807 22.807v18.967z"
            fill="#554e56"
          />
        </g>
      </g>
      <g fill="#fedba6">
        <g>
          <path d="m117.233 243.939h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m219.149 243.939h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m321.065 243.939h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m422.981 243.939h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
        </g>
        <g>
          <path d="m117.233 336.712h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m219.149 336.712h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m321.065 336.712h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
        </g>
        <path d="m422.981 338.939h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
        <g>
          <path d="m117.233 429.485h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m219.149 429.485h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
          <path d="m321.065 429.485h-35.714c-3.945 0-7.143-3.198-7.143-7.143v-35.714c0-3.945 3.198-7.143 7.143-7.143h35.714c3.945 0 7.143 3.198 7.143 7.143v35.714c0 3.945-3.198 7.143-7.143 7.143z" />
        </g>
      </g>
    </g>
  </svg>
)

const Dragon: React.FunctionComponent = () => (
  <svg viewBox="0 0 64 64">
    <path
      d="m10.62 20a1 1 0 0 1 -.92-.62c-.06-.15-1.55-3.8.11-6.29.93-1.39 2.58-2.1 4.9-2.1a13.93 13.93 0 0 0 10.22-4.61 1 1 0 1 1 1.56 1.25 15.81 15.81 0 0 1 -11.78 5.37c-1.61 0-2.7.41-3.24 1.21-1.05 1.58.06 4.38.08 4.41a1 1 0 0 1 -.93 1.38z"
      fill="#c18c16"
    />
    <path d="m19 44a1 1 0 0 1 -1-.78l-1.85-8.17a1 1 0 1 1 2-.44l1.85 8.17a1 1 0 0 1 -.75 1.2z" fill="#c18c16" />
    <path
      d="m50.88 1.53a1 1 0 0 0 -1.35-.42l-11.15 5.89 1.57-4.7a1 1 0 0 0 -1.9-.63l-2.23 6.71-4.15 2.2a1 1 0 1 0 .94 1.77l17.86-9.47a1 1 0 0 0 .41-1.35z"
      fill="#c18c16"
    />
    <path d="m24.25 57.5-3.25 6.5h-6.83l-5.17-7 4-4 4.15 1.66z" fill="#c18c16" />
    <path
      d="m54.81 31a20.26 20.26 0 0 0 -7.73-10l-5 11a18.74 18.74 0 0 1 -1.35 7.71 20.34 20.34 0 0 1 -1.53 3.12 21.68 21.68 0 0 1 -7.12 7.17c-11 7-11 12-11 12v2h30.42l-1.42-2s-2-3 4-18a18.5 18.5 0 0 0 .73-13z"
      fill="#c18c16"
    />
    <path
      d="m37.52 48.3a.57.57 0 0 1 -.11.11c-2.8 2.81-4.1 10.59-4.41 13.59v2h-12v-2s0-5 11-12a21.68 21.68 0 0 0 7.12-7.17 6.61 6.61 0 0 1 -1.6 5.47z"
      fill="#f2b41c"
    />
    <g opacity=".5">
      <path
        d="m54.73 31c-.53.54-1.08 1.06-1.64 1.55a38.67 38.67 0 0 1 -10 6.2c-.85.36-1.67.69-2.46 1a18.74 18.74 0 0 0 1.37-7.75l5-11a20.26 20.26 0 0 1 7.73 10z"
        fill="#a57411"
      />
    </g>
    <g opacity=".5">
      <path d="m15.17 59.54 1.74 1.27-2.91 2.19-5-6 4-4 4.15 1.66a8.17 8.17 0 0 1 -1.98 4.88z" fill="#a57411" />
    </g>
    <path d="m57 13h-21a1 1 0 0 1 0-2h21a1 1 0 0 1 0 2z" fill="#e2a317" />
    <path d="m61 18.84h-17.5a1 1 0 0 1 0-2h17.5a1 1 0 0 1 0 2z" fill="#e2a317" />
    <path d="m63 24h-17a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#e2a317" />
    <path
      d="m35 41a1 1 0 0 1 -1-.73l-1.88-6.57a1 1 0 1 1 1.92-.55l1.96 6.58a1 1 0 0 1 -.73 1.27 1 1 0 0 1 -.27 0z"
      fill="#e2a317"
    />
    <path d="m41 39a1 1 0 0 1 -.78-.37l-4.1-5.13a1 1 0 1 1 1.56-1.25l4.1 5.13a1 1 0 0 1 -.78 1.62z" fill="#e2a317" />
    <path d="m47 37a1 1 0 0 1 -.71-.29l-4.82-4.82a1 1 0 0 1 1.41-1.41l4.82 4.82a1 1 0 0 1 -.7 1.7z" fill="#e2a317" />
    <path d="m52 33a1 1 0 0 1 -.55-.17l-6.31-4.21a1 1 0 1 1 1.1-1.62l6.31 4.21a1 1 0 0 1 -.55 1.79z" fill="#e2a317" />
    <path
      d="m9 51.5a1 1 0 0 1 -.78-.37l-3.3-4.13-2.21 2.21a1 1 0 0 1 -1.41-1.41l3-3a1 1 0 0 1 .76-.29 1 1 0 0 1 .73.37l4 5a1 1 0 0 1 -.79 1.62z"
      fill="#c18c16"
    />
    <path
      d="m12 51a1 1 0 0 1 -.8-1.6l2.48-3.31-2.39-2.39a1 1 0 0 1 1.41-1.41l3 3a1 1 0 0 1 .09 1.31l-3 4a1 1 0 0 1 -.79.4z"
      fill="#c18c16"
    />
    <path
      d="m1 59a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v2.72l6.76-1.72a1 1 0 1 1 .48 2l-8 2a1 1 0 0 1 -.24 0z"
      fill="#c18c16"
    />
    <g fill="#a06c04">
      <path d="m46 41h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m52 41h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m50.92 48h-1.92a1 1 0 0 1 0-2h1.92a1 1 0 0 1 0 2z" />
      <path d="m46 48h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m40 48h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m49 55h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m42 55h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m35 55h-2.49a1 1 0 0 1 0-2h2.49a1 1 0 0 1 0 2z" />
      <path d="m47 63h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" />
      <path d="m41 63h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
      <path d="m34 63h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
    </g>
    <circle cx="9" cy="53" fill="#f2b41c" r="4" />
    <path
      d="m47 22c0 6.08-3 10-11 11l-20 3-2-4 12-3v-4h-16l-.4-2.82-.6-4.18h15c1.31-4.62 7-7 12-7a11 11 0 0 1 11 11z"
      fill="#f2b41c"
    />
    <path
      d="m42.44 13.08a25 25 0 0 0 -4.24.19c-9.86 1.33-13.2 8.4-13.2 8.4l-13.39.44-2 .07-.61-4.18h15c1.31-4.62 7-7 12-7a10.93 10.93 0 0 1 6.44 2.08z"
      fill="#fdca2f"
    />
    <path d="m34 20h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" fill="#5e3011" />
  </svg>
)

const namespace = "asia/vietnam/prepare"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { development } = useContext(ApplicationContext)
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t("common:country.vietnam.card.prepare")
  const foodLinkPublished = development || getLink("food-vietnam").published
  const devicesPublished = development || getLink("devices").published

  return (
    <>
      <SEO
        title={title}
        fullTitle={t("full-title")}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        location={location}
        image={HomeImgUrl}
      />
      <VietnamBlogLayout
        page="prepare-vietnam"
        location={location}
        css={css`
          .section-title {
            font-size: 1.38316rem; // h3
            margin-bottom: 1rem; // mb3
          }
        `}
      >
        <Title title={title} linkId="prepare-vietnam" />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="prepareMain" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <MenuArticle title={t("index")}>
          <div>
            <a href="#visa">{t("section1.title")}</a>
          </div>
          <div>
            <a href="#health">{t("section2.title")}</a>
          </div>
          <div>
            <a href="#weather">{t("section3.title")}</a>
          </div>
          <div>
            <a href="#how-long">{t("section4.title")}</a>
          </div>
          <div>
            <a href="#activities">{t("section5.title")}</a>
          </div>
          <div>
            <a href="#transports">{t("section6.title")}</a>
          </div>
          <div>
            <a href="#accommodations">{t("section7.title")}</a>
          </div>
          <div>
            <a href="#money">{t("section8.title")}</a>
          </div>
          <div>
            <a href="#phone">{t("section9.title")}</a>
          </div>
          <div>
            <a href="#scams">{t("section10.title")}</a>
          </div>
          <div>
            <a href="#natural-disasters">{t("section11.title")}</a>
          </div>
          <div>
            <a href="#baggage">{t("section12.title")}</a>
          </div>
          <div>
            <a href="#opinion">{t("section13.title")}</a>
          </div>
          <div>
            <a href="#currency">{t("section14.title")}</a>
          </div>
          <div>
            <a href="#few-words">{t("section15.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <Visa id="visa">
          <ImageAsLandscape>
            <PrepareVietnamImages image="visa" />
          </ImageAsLandscape>
          <p>{t("section1.part2")}</p>
          <FakeList>{t("section1.part3")}</FakeList>
          <p>{t("section1.part4")}</p>
          <p>{t("section1.part5")}</p>
          <FakeList>{t("section1.part6")}</FakeList>
          <p>{t("section1.part7")}</p>
          <p>{t("section1.part8")}</p>
          <p>{t("section1.part9")}</p>
          <p>{t("section1.part10")}</p>
          <p>{t("section1.part11")}</p>
          <p>{t("section1.part12")}</p>
          <FakeList>{t("section1.part13")}</FakeList>
          <p>{t("section1.part14")}</p>
          <p>{t("section1.part15")}</p>
          <p>{t("section1.part16")}</p>
          <p>{t("section1.part17")}</p>
          <p>{t("section1.part18")}</p>
          <div
            className="flex"
            css={css`
              @media (max-width: ${smallEnd}) {
                flex-direction: column-reverse;
                table {
                  margin-bottom: 0;
                }
              }
            `}
          >
            <div className="flex flex-grow-1 justify-center items-center">
              <svg height="150" width="100" viewBox="0 0 64 64">
                <path d="m1 10h62v38h-62z" fill="#e72b3f" />
                <g opacity=".2">
                  <path
                    d="m63 10v15.55c-7.78 3.34-19.63 5.33-30.33 5.33-12.3 0-23.47-2.62-31.67-6.88v-14z"
                    fill="#fcfcfc"
                  />
                </g>
                <path
                  d="m44.95 24.85a1 1 0 0 0 -.8-.67l-7.76-1.18-3.48-7.42a1 1 0 0 0 -1.81 0l-3.49 7.42-7.76 1.19a1 1 0 0 0 -.56 1.69l5.65 5.79-1.34 8.17a1 1 0 0 0 1.47 1l6.93-3.84 6.93 3.83a1 1 0 0 0 1.47-1l-1.33-8.19 5.65-5.79a1 1 0 0 0 .23-1z"
                  fill="#fdca2f"
                />
                <path d="m1 64a1 1 0 0 1 -1-1v-56a1 1 0 0 1 2 0v56a1 1 0 0 1 -1 1z" fill="#844215" />
                <path d="m1 4a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1z" fill="#844215" />
                <g fill="#e72b3f">
                  <path d="m49 17h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" />
                  <path d="m53 17h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" />
                </g>
              </svg>
            </div>
            <Table className="mb3">
              <thead>
                <tr>
                  <th />
                  <th>{t("single")}</th>
                  <th>{t("multiple")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E-visa (30 {t("days")})</td>
                  <td>25$</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Visa Tourism (30 {t("days")})</td>
                  <td>60€</td>
                  <td>80€</td>
                </tr>
                <tr>
                  <td>Visa Tourism (90 {t("days")})</td>
                  <td>80€</td>
                  <td>130€</td>
                </tr>
                <tr>
                  <td>Visa On Arrival (30 {t("days")})</td>
                  <td>25$</td>
                  <td>25$</td>
                </tr>
                <tr>
                  <td>Visa On Arrival (90 {t("days")})</td>
                  <td>50$</td>
                  <td>50$</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <p>{t("section1.part19")}</p>
          <div
            className="flex flex-row-reverse"
            css={css`
              @media (max-width: ${smallEnd}) {
                > div {
                  display: none;
                }
              }
            `}
          >
            <Table
              css={css`
                tr > *:first-of-type {
                  width: 120px;
                  min-width: 120px;
                }
              `}
            >
              <thead>
                <tr>
                  <th>{t("section1.duration")}</th>
                  <th>{t("section1.country")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>90 {t("days")}</td>
                  <td>
                    <ChileWithFlag />
                  </td>
                </tr>
                <tr>
                  <td>30 {t("days")}</td>
                  <td>
                    <MyanmarWithFlag />
                    <CambodiaWithFlag />
                    <IndonesiaWithFlag />
                    <KyrgyzstanWithFlag />
                    <LaosWithFlag />
                    <MalaysiaWithFlag />
                    <SingaporeWithFlag />
                    <ThailandWithFlag />
                  </td>
                </tr>
                <tr>
                  <td>21 {t("days")}</td>
                  <td>
                    <PhilippinesWithFlag />
                  </td>
                </tr>
                <tr>
                  <td>14 {t("days")}</td>
                  <td>
                    <BruneiWithFlag />
                  </td>
                </tr>
                <tr>
                  <td>15 {t("days")}</td>
                  <td>
                    <GermanyWithFlag />
                    <BelarusWithFlag />
                    <SouthKoreaWithFlag />
                    <DenmarkWithFlag />
                    <SpainWithFlag />
                    <FinlandWithFlag />
                    <FranceWithFlag />
                    <ItalyWithFlag />
                    <JapanWithFlag />
                    <NorwayWithFlag />
                    <UKWithFlag />
                    <RussiaWithFlag />
                    <SwedenWithFlag />
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="flex flex-grow-1 justify-center items-center">
              <svg viewBox="0 0 64 64" height="30%" width="30%">
                <path
                  d="m24 64a1 1 0 0 1 -1-1v-3c0-4.5 1.88-13 9-13s9 7.85 9 12v2a1 1 0 0 1 -2 0v-2c0-.41-.1-10-7-10s-7 10.89-7 11v3a1 1 0 0 1 -1 1z"
                  fill="#44220c"
                />
                <path d="m32 5a1 1 0 0 1 -1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1 -1 1z" fill="#5e3011" />
                <path
                  d="m32.06 49c-15.63 0-21.4-19.4-21.46-19.6l1.92-.55c.06.15 5.42 18.15 19.48 18.15.5 0 13.85-1.09 19.55-18.19l1.9.63c-3.2 9.6-8.81 14.4-13 16.74a21.38 21.38 0 0 1 -8.39 2.82z"
                  fill="#5e3011"
                />
                <path d="m32 51a1 1 0 0 1 -1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1 -1 1z" fill="#5e3011" />
                <path d="m32 3-12.67 22.18-3.26 5.7a114 114 0 0 1 -14.07-2.88l.67-.56z" fill="#f7941e" />
                <path
                  d="m16.07 30.88a114.35 114.35 0 0 0 15.93 1.12 114.35 114.35 0 0 0 15.93-1.12l-15.93-27.88z"
                  fill="#fdca2f"
                />
                <path d="m62 28a114 114 0 0 1 -14.07 2.88l-9.93-17.33-6-10.55 10.58 8.81z" fill="#f2b41c" />
                <g opacity=".5">
                  <path
                    d="m42.58 11.81a31.57 31.57 0 0 0 -4.58 1.74c-.6.27-1.19.57-1.79.9a31.63 31.63 0 0 0 -6.21 4.47 29.39 29.39 0 0 1 -7.7 5.08c-1 .45-2 .85-3 1.19a45.94 45.94 0 0 1 -16.63 2.25l29.33-24.44z"
                    fill="#f7941e"
                  />
                </g>
                <g fill="#d39c11">
                  <path d="m32 28.71a1 1 0 0 1 -1-1v-5.71a1 1 0 0 1 2 0v5.71a1 1 0 0 1 -1 1z" />
                  <path d="m32 19a1 1 0 0 1 -1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1 -1 1z" />
                  <path d="m24 28h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" />
                  <path d="m28 28h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" />
                </g>
              </svg>
            </div>
          </div>

          <p>{t("section1.part20")}</p>
          <PetitCarreColore>
            <p
              css={css`
                @media (max-width: ${smallEnd}) {
                  // override the default style applied on petitcarrecolore paragraph
                  margin-bottom: 1rem !important;
                }
              `}
            >
              {t("section1.part21")}
            </p>
            <p>{t("section1.part22")}</p>
          </PetitCarreColore>
          <p>{t("section1.part23")}</p>
        </Visa>
        <Divider />
        <Health id="health">
          <ImageAsLandscape>
            <PrepareVietnamImages image="health" />
          </ImageAsLandscape>
          <p>{t("section2.part1")}</p>
          <PetitCarreColore>
            <p className="ttu">{t("section2.part2")}</p>
            <p>{t("section2.part3")}</p>
            <p>{t("section2.part4")}</p>
            <p>
              <Dragon />
            </p>
          </PetitCarreColore>
          <p>{t("section2.part5")}</p>
          <p>{t("section2.part6")}</p>
          <p>{t("section2.part7")}</p>
          <p>{t("section2.part8")}</p>
          <p>{t("section2.part9")}</p>
        </Health>
        <Divider />
        <WhatTimeOfYear title={t("section3.title")} id="weather">
          <PrepareSubTitle>{t("section3.part1")}</PrepareSubTitle>
          <Weather entries={vietnamWeatherEntries(t)} />
          <p>{t("section3.part2")}</p>
          <p>{t("section3.part3")}</p>
          <ul>
            <li>{t("section3.part4")}</li>
            <li>{t("section3.part5")}</li>
            <li>{t("section3.part6")}</li>
          </ul>
        </WhatTimeOfYear>
        <Divider />
        <HowLong title={t("section4.title")} id="how-long">
          <PrepareSubTitle>{t("section4.part1")}</PrepareSubTitle>
          <ImageAsLandscape>
            <PrepareVietnamImages image="duration" />
          </ImageAsLandscape>
          <p>{t("section4.part2")}</p>
          <p>{t("section4.part3")}</p>
          <PetitCarreColore>
            <p>
              <Calendar />
            </p>
            <p>{t("section4.part4")}</p>
            <p>{t("section4.part5")}</p>
            <p>{t("section4.part6")}</p>
            <p>{t("section4.part7")}</p>
          </PetitCarreColore>
        </HowLong>
        <Divider />
        <Visit title={t("section5.title")} id="activities">
          <ImageAsLandscape>
            <PrepareVietnamImages image="activities" imgStyle={{ objectFit: "contain" }} />
          </ImageAsLandscape>
          <p>{t("section5.part1")}</p>
          <p>{t("section5.part2")}</p>
          <p>{t("section5.part3")}</p>
          <p>{t("section5.part4")}</p>
          <PetitCarreColore>
            <p>
              <Pagoda />
              <BoatRide />
            </p>
            <p>{t("section5.part5")}</p>
            <p>{t("section5.part6")}</p>
            <p>{t("section5.part7")}</p>
          </PetitCarreColore>
          <p>{t("section5.part8")}</p>
          <p>{t("section5.part9")}</p>
          <p>{t("section5.part10")}</p>
          <MapContainer>
            <img src={SouthernVietnamMapTransport} alt="Southern Vietnam Map Transport" />
          </MapContainer>
        </Visit>
        <Divider />
        <How title={t("section6.title")} id="transports">
          <ImageAsLandscape>
            <SharedCardVietnamImages image="transportMain" />
          </ImageAsLandscape>
          <p>{t("section6.part1")}</p>
          <p>{t("section6.part2")}</p>
          <p>{t("section6.part3")}</p>
          <p>{t("section6.part4")}</p>
          <p>{t("section6.part5")}</p>
          <p className="tc">
            <Cyclo />
          </p>
        </How>
        <Divider />
        <WhereToStay title={t("section7.title")} id="accommodations">
          <PrepareSubTitle>{t("section7.part1")}</PrepareSubTitle>
          <p>{t("section7.part2")}</p>
          <p>{t("section7.part3")}</p>
          <PetitCarreColore>
            <p>{t("section7.part4")}</p>
            <p>{t("section7.part5")}</p>
            <p>{t("section7.part6")}</p>
          </PetitCarreColore>
          <p>{t("section7.part7")}</p>
          <ImageAsLandscape>
            <PrepareVietnamImages image="hammock" />
          </ImageAsLandscape>
          <ImageDescription>{t("section7.part8")}</ImageDescription>
        </WhereToStay>
        <Divider />
        <HowMuch title={t("section8.title")} id="money">
          <ImageAsLandscape>
            <PrepareVietnamImages image="currency" />
          </ImageAsLandscape>
          <p>{t("section8.part1")}</p>
          <p>{t("section8.part2")}</p>
          <FakeList>{t("section8.part3")}</FakeList>
          <p>{t("section8.part4")}</p>
          <FakeList>{t("section8.part5")}</FakeList>
          <p>{t("section8.part6")}</p>
          <p>{t("section8.part7")}</p>
          <p>{t("section8.part8")}</p>
          <FakeList>{t("section8.part9")}</FakeList>
          <p>{t("section8.part10")}</p>
          <FakeList>{t("section8.part11")}</FakeList>
          <p>{t("section8.part12")}</p>
          <p>{t("section8.part13")}</p>
          <p>{t("section8.part14")}</p>
          <PetitCarreColore>
            <p>{t("section8.part15")}</p>
            <p>
              <Lotus />
            </p>
          </PetitCarreColore>
        </HowMuch>
        <Divider />
        <Phone id="phone">
          <p>{t("section9.part1")}</p>
          <p>{t("section9.part2")}</p>
          <p>{t("section9.part3")}</p>
          <p>{t("section9.part4")}</p>
          <p>{t("section9.part5")}</p>
          <p>{t("section9.part6")}</p>
        </Phone>
        <Divider />
        <Scams id="scams">
          <p>{t("section10.part1")}</p>
          <p>{t("section10.part2")}</p>
          <p>{t("section10.part3")}</p>
          <ImageAsPortrait>
            <PrepareVietnamImages image="currencyApplication" />
          </ImageAsPortrait>
          <p>{t("section10.part4")}</p>
          <p>{t("section10.part5")}</p>
          <p>{t("section10.part6")}</p>
        </Scams>
        <Divider />
        <NaturalDisaster id="natural-disasters">
          <p>{t("section11.part1")}</p>
          <p className="tc">
            <Tornado />
            <Hurricane />
          </p>
          <p>{t("section11.part2")}</p>
          <p>{t("section11.part3")}</p>
          {t("section11.part4") && <p>{t("section11.part4")}</p>}
          <p className="tc">
            <Flood />
            <svg height="64" viewBox="0 0 512 512" width="64">
              <g id="flat">
                <path
                  d="m383.607 112.759a48.045 48.045 0 0 0 -55.1-31.8 72 72 0 0 0 -140.618-.914c-.6-.026-1.194-.045-1.8-.045a40 40 0 0 0 -39.389 33.094 60.01 60.01 0 0 0 -48.607 58.906 60 60 0 0 0 60 60h216a60 60 0 0 0 60-60 60.009 60.009 0 0 0 -50.486-59.241z"
                  fill="#eaeae8"
                />
                <path
                  d="m258.093 324.874-27.206 11.843a17.8 17.8 0 0 0 -9.538 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z"
                  fill="#75c2d4"
                />
                <path
                  d="m365.907 362.03-27.207 11.843a17.8 17.8 0 0 0 -9.537 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z"
                  fill="#2fbbdf"
                />
                <g fill="#75c2d4">
                  <path d="m96 360-27.206 11.843a17.8 17.8 0 0 0 -9.537 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z" />
                  <path d="m440 266.03-27.206 11.843a17.8 17.8 0 0 0 -9.537 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z" />
                  <path d="m274.093 418.03-27.206 11.843a17.8 17.8 0 0 0 -9.538 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z" />
                </g>
                <path
                  d="m336 272-27.206 11.843a17.8 17.8 0 0 0 -9.537 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z"
                  fill="#2fbbdf"
                />
                <path
                  d="m176 392-27.206 11.843a17.8 17.8 0 0 0 -9.537 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z"
                  fill="#2fbbdf"
                />
                <path
                  d="m184 266.03-27.206 11.843a17.8 17.8 0 0 0 -9.537 22.645 17.8 17.8 0 0 0 16.077 11.473 17.8 17.8 0 0 0 18.313-16.382z"
                  fill="#2fbbdf"
                />
                <path d="m170.093 192h-24a8 8 0 1 1 0-16h24a8 8 0 0 1 0 16z" fill="#cbcbcb" />
                <path d="m258.093 192h-56a8 8 0 1 1 0-16h56a8 8 0 0 1 0 16z" fill="#cbcbcb" />
              </g>
            </svg>
          </p>
          <p>{t("section11.part5")}</p>
          <ul>
            <li>{t("section11.part6")}</li>
            <li>{t("section11.part7")}</li>
          </ul>
          <p>{t("section11.part8")}</p>
          <PetitCarreColore>
            <p className="ttu">{t("section11.part9")}</p>
            {t("section11.part10") && <p className="mt3">{t("section11.part10")}</p>}
          </PetitCarreColore>
        </NaturalDisaster>
        <Divider />
        <Baggage id="baggage">
          <ImageAsPortrait className="mb1">
            <PrepareVietnamImages image="baggage" />
          </ImageAsPortrait>
          <p className="tc i mt2">{t("section12.part1")}</p>
          <p className="tc b">{t("section12.part2")}</p>
          <p className="flex items-center ">
            <FaTshirt />
            &nbsp;{t("section12.part3")}
          </p>
          <ul>
            <li>{t("section12.part4")}</li>
            <li>{t("section12.part5")}</li>
            <li>{t("section12.part6")}</li>
            <li>{t("section12.part7")}</li>
            <li>{t("section12.part8")}</li>
            <li>{t("section12.part9")}</li>
            <li>{t("section12.part10")}</li>
          </ul>
          <p className="flex items-center ">
            <FaBriefcaseMedical />
            &nbsp;{t("section12.part11")}
          </p>
          <ul>
            <li>{t("section12.part12")}</li>
            <li>{t("section12.part13")}</li>
            <li>{t("section12.part14")}</li>
            <li>{t("section12.part15")}</li>
            <li>{t("section12.part16")}</li>
          </ul>
          <PetitCarreColore>
            <p>{t("section12.part17")}</p>
          </PetitCarreColore>
          <p className="flex items-center ">
            <FaLaptop />
            &nbsp;{t("section12.part18")}
          </p>
          <ul>
            <li>{t("section12.part19")}</li>
            <li>{t("section12.part20")}</li>
            <li>{t("section12.part21")}</li>
          </ul>
          <p className="flex items-center ">
            <FaShoppingBag />
            &nbsp;{t("section12.part22")}
          </p>
          <ul>
            <li>{t("section12.part23")}</li>
            <li>{t("section12.part24")}</li>
            <li>{t("section12.part25")}</li>
            <li>{t("section12.part26")}</li>
            <li>{t("section12.part27")}</li>
            <li>{t("section12.part28")}</li>
            <li>{t("section12.part29")}</li>
            <li>{t("section12.part30")}</li>
            <li>{t("section12.part31")}</li>
          </ul>
          {devicesPublished ? <p>{t("section12.part32")}</p> : null}
        </Baggage>
        <Divider />
        <Opinion title={t("section13.title")} id="opinion">
          <p className="list-item ml3">{t("section13.part1")}</p>
          <p>
            ➵ <span className="underline">{t("section13.part2")}</span>
          </p>
          <p>{t("section13.part3")}</p>
          <ImageAsLandscape>
            <PrepareVietnamImages image="landscape" />
          </ImageAsLandscape>
          <p>
            ➵ <span className="underline">{t("section13.part4")}</span>
          </p>
          <p>{t("section13.part5")}</p>
          <p>
            ➵ <span className="underline">{t("section13.part6")}</span>
          </p>
          <p>{t("section13.part7")}</p>
          {foodLinkPublished && <p>{t("section13.part8")}</p>}
          <p>
            ➵ <span className="underline">{t("section13.part9")}</span>
          </p>
          <p>{t("section13.part10")}</p>
          <ImageAsLandscape>
            <PrepareVietnamImages image="people" />
          </ImageAsLandscape>
          <p className="list-item ml3">{t("section13.part11")}</p>
          <p>
            ➵ <span className="underline">{t("section13.part12")}</span>
          </p>
          <p>{t("section13.part13")}</p>
          <p>
            ➵ <span className="underline">{t("section13.part14")}</span>
          </p>
          <p>{t("section13.part15")}</p>
          <ImageAsLandscape>
            <PrepareVietnamImages image="scooter" />
          </ImageAsLandscape>
        </Opinion>
        <Divider />
        <LocalCurrency title={t("section14.title")} id="currency">
          <p>{t("section14.part1")}</p>
          <ul>
            <li>{t("section14.part2")}</li>
            <li>{t("section14.part3")}</li>
            <li>{t("section14.part4")}</li>
            <li>{t("section14.part5")}</li>
          </ul>
          <p>{t("section14.part6")}</p>
          <p>{t("section14.part7")}</p>
          <p>{t("section14.part8")}</p>
          <p>{t("section14.part9")}</p>
          <ImageAsPortrait>
            <PrepareVietnamImages image="currency2" />
          </ImageAsPortrait>
        </LocalCurrency>
        <Divider />
        <FewWords title={t("section15.title")} id="few-words">
          <ul>
            <li>{t("section15.part1")}</li>
            <li>{t("section15.part2")}</li>
            <li>{t("section15.part4")}</li>
            <li>{t("section15.part5")}</li>
            <li>{t("section15.part6")}</li>
            <li>{t("section15.part7")}</li>
          </ul>
        </FewWords>
        <Divider />
        <Conclusion>
          <p>{t("conclusion.part1")}</p>
          <p>{t("conclusion.part2")}</p>
        </Conclusion>
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}\n${t("facebook.part3")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <PrepareVietnamImages image="cardFr1" key="cardFr1" />,
                    <PrepareVietnamImages image="cardFr2" key="cardFr1" />,
                  ]
                : [
                    <PrepareVietnamImages image="cardEn1" key="cardEn1" />,
                    <PrepareVietnamImages image="cardEn2" key="cardEn1" />,
                  ],
          }}
        />
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

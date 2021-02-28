import React, { useState } from "react"
import SEO from "../../../components/layout/seo"
import { PageProps } from "gatsby"
import i18n from "i18next"
import translationFr from "../../../locales/fr/asia/vietnam/transport.json"
import translationEn from "../../../locales/en/asia/vietnam/transport.json"
import { useCustomTranslation } from "../../../i18n"
import HomeImgUrl from "../../../images/asia/vietnam/transport/transport-vietnam-main.jpg"
import {
  VietnamBlogLayout,
  vietnamCities,
  VietnamCity,
  VietnamExternalLink,
  VietnamHeadline,
  VietnamLink,
} from "../../../components/core/asia/vietnam/vietnam"
import { Title } from "../../../components/core/title"
import {
  GroupOfImages,
  ImageAsLandscape,
  ImageAsLandscapeOnTheLeft,
  ImageAsLandscapeOnTheRight,
} from "../../../components/images/layout"
import { SharedCardVietnamImages } from "../../../components/images/asia/vietnam/shared-card-vietnam-images"
import { Quote } from "../../../components/core/quote"
import { Divider } from "../../../components/core/divider"
import {
  Booking,
  Company,
  HighLight,
  HowMuch,
  Information,
  Introduction,
  MenuArticle,
  Opinion,
  SectionContent,
  SectionTitle,
} from "../../../components/core/section"
import { TransportVietnamImages } from "../../../components/images/asia/vietnam/transport-vietnam-images"
import { ExternalLinkNotUnderlined } from "../../../components/core/links/link"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {
  build12GoAsiaUrl,
  buildBaolauUrl,
  buildCo2LogicUrl,
  buildExpediaUrl,
  buildGetYourGuideLink,
  buildGoogleMapsUrl,
  buildPixabayUrl,
  buildSkyScannerUrl,
  buildTripAdvisorLink,
  priceFactorEur,
  priceFactorUsd,
} from "../../../utils"
import VietnamRailwayIcon from "../../../images/asia/vietnam/transport/vietnam-railways.png"
import VioletteIcon from "../../../images/asia/vietnam/transport/violette.png"
import NewLivitransIcon from "../../../images/asia/vietnam/transport/new-livitrans-express.png"
import LotusIcon from "../../../images/asia/vietnam/transport/lotus-train.png"
import MapBus from "../../../images/asia/vietnam/transport/map-bus.png"
import MapOpenBus from "../../../images/asia/vietnam/transport/map-open-bus.png"
import {
  vietnamPrimaryColor,
  vietnamPrimaryColorDarker,
  vietnamPrimaryColorWithOpacity,
} from "../../../components/core/asia/vietnam/vietnam.colors"
import { Conclusion } from "../../../components/core/conclusion"
import { Comments } from "../../../components/core/comments"
import { VietnamAirportMap, VietnamTrainMap } from "../../../components/core/asia/vietnam/vietnam-map"
import { MouseToolTip } from "../../../components/core/tooltipPortal"
import { PetitCarreJaune } from "../../../components/layout/layout"
import { Tree } from "../../../components/layout/menu"
import { BsArrowLeftRight } from "react-icons/bs"
import { mediumEnd } from "../../../components/core/variables"
import { FaBus } from "react-icons/fa"

const Sitting: React.FunctionComponent = () => (
  <svg viewBox="0 0 512 512" width="20px" height="20px">
    <title>Sitting</title>
    <path
      d="M443.383,225.513c-1.87-1.861-4.441-2.93-7.07-2.93c-2.64,0-5.21,1.069-7.07,2.93c-1.87,1.86-2.939,4.44-2.939,7.07
c0,2.63,1.069,5.21,2.939,7.069c1.851,1.86,4.431,2.931,7.07,2.931c2.63,0,5.21-1.07,7.07-2.931
c1.859-1.859,2.93-4.439,2.93-7.069C446.313,229.953,445.243,227.373,443.383,225.513z"
    />
    <path
      d="M476.747,20.661c-6.711-10.22-17-17.215-28.972-19.695c-11.967-2.479-24.192-0.152-34.411,6.56
c-10.22,6.711-17.215,17-19.695,28.972l-1.064,5.137c-7.764-22.803-29.375-39.258-54.771-39.258
c-31.902,0-57.855,25.954-57.855,57.855v8.701c0,16.646,7.076,31.663,18.366,42.227c-4.154,1.615-8.174,3.666-11.988,6.171
c-14.214,9.334-23.942,23.644-27.406,40.354l-8.159,40.65l-18.75,18.857h-78.055c-17.842,0-32.357,14.516-32.357,32.357
c0,4.375,0.877,8.547,2.458,12.357h-8.106c-18.792,0-35.227,12.701-39.965,30.888l-11.803,45.298
c-1.393,5.345,1.811,10.806,7.155,12.198c0.846,0.221,1.693,0.326,2.528,0.326c4.441-0.001,8.498-2.982,9.67-7.481l11.803-45.298
c2.444-9.38,10.921-15.931,20.612-15.931h146.491c2.67,0,5.229-1.067,7.106-2.965l50.624-51.142
c3.886-3.925,3.854-10.257-0.071-14.142c-3.926-3.887-10.257-3.854-14.142,0.071l-47.689,48.177H153.987
c-6.813,0-12.357-5.544-12.357-12.357c0-6.813,5.544-12.357,12.357-12.357h82.214c2.662,0,5.214-1.062,7.091-2.949l57.241-57.57
c3.895-3.916,3.876-10.248-0.04-14.143c-3.917-3.893-10.248-3.877-14.142,0.041l-10.003,10.061l2.198-10.949
c2.366-11.419,9.039-21.233,18.788-27.635c9.748-6.401,21.406-8.624,32.82-6.256c11.419,2.366,21.233,9.038,27.634,18.785
c6.401,9.748,8.623,21.404,6.257,32.823c-0.016,0.075-0.021,0.149-0.035,0.224L338.94,300.595
c-2.872,13.855-15.227,23.912-29.376,23.912H167.402c-23.447,0-43.087,18.059-45.509,40.99c-0.194,0.455-0.368,0.922-0.496,1.415
l-30.63,117.561c-1.154,4.431-5.159,7.525-9.738,7.525H57.804c-3.141,0-6.043-1.425-7.963-3.91
c-1.921-2.484-2.567-5.652-1.776-8.69l16.701-64.101c1.393-5.345-1.812-10.806-7.155-12.198
c-5.346-1.396-10.806,1.811-12.198,7.155l-16.701,64.101c-2.365,9.078-0.432,18.542,5.305,25.964
c5.736,7.423,14.407,11.68,23.788,11.68h23.224c13.681,0,25.644-9.246,29.092-22.483l23.196-89.03
c0.459,0.51,0.926,1.015,1.41,1.509c8.764,8.933,20.932,14.056,33.383,14.056h48.678l-34.199,82.104
c-1.285,3.086-0.943,6.61,0.911,9.393c1.854,2.781,4.977,4.452,8.32,4.452h154.263c3.344,0,6.466-1.671,8.32-4.452
c1.854-2.782,2.196-6.307,0.911-9.393l-34.199-82.104h50.129c21.59,0,40.438-15.344,44.818-36.483l21.891-105.633
c1.121-5.408-2.354-10.7-7.763-11.821c-5.404-1.115-10.7,2.354-11.821,7.763l-21.891,105.634
c-2.466,11.902-13.079,20.541-25.235,20.541H168.109c-7.115,0-14.079-2.938-19.106-8.063c-4.881-4.975-7.497-11.443-7.368-18.215
c0.267-13.932,11.826-25.267,25.768-25.267h142.163c23.583,0,44.173-16.761,48.959-39.853l54.729-264.099
c1.396-6.741,5.335-12.534,11.089-16.313c5.755-3.777,12.637-5.088,19.376-3.692c6.741,1.396,12.534,5.335,16.313,11.089
c3.778,5.754,5.09,12.636,3.692,19.376l-29.713,143.38c-1.121,5.408,2.354,10.7,7.763,11.821
c5.406,1.121,10.701-2.354,11.821-7.763l29.713-143.38C485.788,43.101,483.459,30.881,476.747,20.661z M299.448,416.05
l31.636,75.949H206.817l31.636-75.949H299.448z M337.833,106.787c-20.874,0-37.855-16.982-37.855-37.855v-8.701
c0-20.874,16.982-37.856,37.855-37.856c20.874,0,37.855,16.982,37.855,37.856v8.701
C375.689,89.805,358.707,106.787,337.833,106.787z M373.449,134.074c-3.309-4.739-7.174-8.958-11.515-12.565
c6.146-2.829,11.717-6.696,16.479-11.388L373.449,134.074z"
    />
    <path
      d="M71.947,368.141c-1.859-1.859-4.439-2.93-7.07-2.93c-2.63,0-5.21,1.07-7.069,2.93c-1.86,1.87-2.931,4.44-2.931,7.07
c0,2.64,1.07,5.21,2.931,7.07c1.859,1.869,4.439,2.93,7.069,2.93c2.631,0,5.2-1.061,7.07-2.93c1.86-1.851,2.93-4.431,2.93-7.07
C74.877,372.581,73.808,370.001,71.947,368.141z"
    />
  </svg>
)
const Sleeping: React.FunctionComponent = () => (
  <svg viewBox="0 0 512 512" width="20px" height="20px">
    <title>Sleeping</title>
    <path
      d="M490.667,261.334v-42.667c0-32.427-20.907-53.333-53.333-53.333H192c-32.427,0-53.333,20.907-53.333,53.333V261
			L34.88,261.227H21.333V80.32c0-5.333-3.84-10.133-9.067-10.88C5.653,68.48,0,73.6,0,80v351.68c0,5.333,3.84,10.133,9.067,10.88
			c6.613,0.96,12.267-4.16,12.267-10.56v-64h469.333v63.68c0,5.333,3.84,10.133,9.067,10.88C506.347,443.52,512,438.4,512,432
			V282.667C512,268.16,505.173,261.44,490.667,261.334z M160,218.667c0-27.84,20.053-32,32-32h245.333c11.947,0,32,4.16,32,32
			v42.667H160V218.667z M490.666,346.667H21.333v-64h469.333V346.667z"
    />
    <path
      d="M80.5,142.5c-32.723,0-59.25,26.527-59.25,59.25c0,32.723,26.527,59.25,59.25,59.25s59.25-26.527,59.25-59.25
			C139.75,169.027,113.223,142.5,80.5,142.5z M80.5,242c-22.229,0-40.25-18.021-40.25-40.25S58.271,161.5,80.5,161.5
			s40.25,18.021,40.25,40.25S102.73,242,80.5,242z"
    />
  </svg>
)

const TooltipContent = styled.div`
  background: hsla(0, 0%, 0%, 0.75);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  text-align: center;
`
const BusTitle = styled(SectionTitle)`
  font-size: 1.38316rem; // h3
  margin-bottom: 1rem; // mb3
`

const MapAndTableTableContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  .menu-entry-opened .menu-label {
    background-color: #e5e7eb;
  }
  .menu-label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    height: 30px;
    background-color: #f7fafc;
    border-left: 3px solid ${vietnamPrimaryColorDarker};
    border-bottom: 1px solid #e5e7eb;
    .menu-label-chevron {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
    }
  }
  .menu-content-container {
    margin-left: 0;
    padding-left: 0;
  }
  .schedules {
    border-left: 3px solid ${vietnamPrimaryColor};
    font-size: 0.8rem;
  }

  .schedule-entry:nth-of-type(even) {
    background-color: ${vietnamPrimaryColorWithOpacity(0.2)};
  }
  .schedule-entry:hover {
    background-color: ${vietnamPrimaryColorWithOpacity(0.3)};
  }
  .schedule-entry {
    height: 25px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const MapAndTableContainer = styled.div`
  display: flex;
  align-items: center;
  & > * {
    width: 50%;
  }
  margin-bottom: calc(1.45rem / 2);

  @media (max-width: ${mediumEnd}) {
    flex-direction: column;
    & > svg,
    & > img {
      margin-bottom: calc(1.45rem / 2);
    }
    & > * {
      width: 100%;
    }
  }
`
type BusType = "sitting" | "sleeping"
interface BusSchedule {
  destination: VietnamCity
  duration: string
  distance: string
  type: BusType[]
}
type BusSchedules = {
  [key in VietnamCity]?: { id: VietnamCity; schedules: BusSchedule[] }
}
const tmpBusSchedules: BusSchedules = {
  "ho-chi-minh": {
    id: "ho-chi-minh",
    schedules: [
      {
        destination: "mui-ne",
        duration: "5h",
        distance: "250km",
        type: ["sleeping", "sitting"],
      },
      {
        destination: "nha-trang",
        duration: "11h",
        distance: "447km",
        type: ["sleeping"],
      },
      {
        destination: "da-lat",
        duration: "7h",
        distance: "310km",
        type: ["sleeping"],
      },
      {
        destination: "can-tho",
        duration: "3h30",
        distance: "175km",
        type: ["sleeping"],
      },
      {
        destination: "rach-gia",
        duration: "6h",
        distance: "280km",
        type: ["sleeping"],
      },
      {
        destination: "tran-de",
        duration: "6h",
        distance: "220km",
        type: ["sleeping"],
      },
      {
        destination: "ha-tien",
        duration: "8h",
        distance: "315km",
        type: ["sleeping"],
      },
    ],
  },
  "mui-ne": {
    id: "mui-ne",
    schedules: [
      {
        destination: "nha-trang",
        duration: "5h",
        distance: "250km",
        type: ["sleeping"],
      },
      {
        destination: "da-lat",
        duration: "4h",
        distance: "160km",
        type: ["sitting"],
      },
    ],
  },
  "da-lat": {
    id: "da-lat",
    schedules: [
      {
        destination: "nha-trang",
        duration: "4h",
        distance: "140km",
        type: ["sitting"],
      },
      {
        destination: "buon-ma-thuot",
        duration: "5h",
        distance: "210km",
        type: ["sitting"],
      },
    ],
  },
  "nha-trang": {
    id: "nha-trang",
    schedules: [
      {
        destination: "hoi-an",
        duration: "11h",
        distance: "530km",
        type: ["sleeping"],
      },
    ],
  },
  "hoi-an": {
    id: "hoi-an",
    schedules: [
      {
        destination: "da-nang",
        duration: "45min",
        distance: "30km",
        type: ["sleeping"],
      },
      {
        destination: "hue",
        duration: "4h",
        distance: "130km",
        type: ["sleeping"],
      },
    ],
  },
  "da-nang": {
    id: "da-nang",
    schedules: [
      {
        destination: "hue",
        duration: "3h",
        distance: "100km",
        type: ["sleeping"],
      },
    ],
  },
  hue: {
    id: "hue",
    schedules: [
      {
        destination: "phong-nha",
        duration: "5h",
        distance: "210km",
        type: ["sleeping", "sitting"],
      },
      {
        destination: "hanoi",
        duration: "14h",
        distance: "685km",
        type: ["sleeping"],
      },
    ],
  },
  hanoi: {
    id: "hanoi",
    schedules: [
      {
        destination: "sapa",
        duration: "5h30",
        distance: "290km",
        type: ["sleeping"],
      },
      {
        destination: "mai-chau",
        duration: "4h",
        distance: "140km",
        type: ["sitting"],
      },
      {
        destination: "ninh-binh",
        duration: "2h30",
        distance: "100km",
        type: ["sitting"],
      },
      {
        destination: "ha-long",
        duration: "4h",
        distance: "150km",
        type: ["sitting"],
      },
      {
        destination: "cat-ba-island",
        duration: "4h",
        distance: "150km",
        type: ["sitting"],
      },
    ],
  },
}

interface PlaneSchedule {
  destination: VietnamCity
  duration: string
  price: number
}
type PlaneSchedules = {
  [key in VietnamCity]?: { id: VietnamCity; schedules: PlaneSchedule[] }
}
const tmpPlaneSchedules: PlaneSchedules = {
  "ho-chi-minh": {
    id: "ho-chi-minh",
    schedules: [
      {
        destination: "da-lat",
        duration: "55min",
        price: 60,
      },
      {
        destination: "da-nang",
        duration: "1h15",
        price: 60,
      },
      {
        destination: "haiphong",
        duration: "2h",
        price: 70,
      },
      {
        destination: "hanoi",
        duration: "2h",
        price: 70,
      },
      {
        destination: "hue",
        duration: "1h25",
        price: 60,
      },
      {
        destination: "nha-trang",
        duration: "1h10",
        price: 60,
      },
      {
        destination: "phu-quoc",
        duration: "1h",
        price: 55,
      },
      {
        destination: "vinh",
        duration: "1h50",
        price: 70,
      },
      {
        destination: "buon-ma-thuot",
        duration: "1h",
        price: 60,
      },
      {
        destination: "con-dao",
        duration: "1h",
        price: 160,
      },
      {
        destination: "chu-lai",
        duration: "1h20",
        price: 60,
      },
      {
        destination: "dong-hoi",
        duration: "1h35",
        price: 70,
      },
      {
        destination: "pleiku",
        duration: "1h10",
        price: 60,
      },
      {
        destination: "qui-nhon",
        duration: "1h10",
        price: 60,
      },
      {
        destination: "rach-gia",
        duration: "50min",
        price: 70,
      },
      {
        destination: "thanh-hoa",
        duration: "2h",
        price: 70,
      },
    ],
  },
  hanoi: {
    id: "hanoi",
    schedules: [
      {
        destination: "can-tho",
        duration: "2h10",
        price: 80,
      },
      {
        destination: "da-lat",
        duration: "1h45",
        price: 70,
      },
      {
        destination: "da-nang",
        duration: "1h20",
        price: 60,
      },
      {
        destination: "hue",
        duration: "1h15",
        price: 65,
      },
      {
        destination: "nha-trang",
        duration: "1h45",
        price: 70,
      },
      {
        destination: "phu-quoc",
        duration: "2h05",
        price: 75,
      },
      {
        destination: "vinh",
        duration: "1h",
        price: 70,
      },
      {
        destination: "buon-ma-thuot",
        duration: "1h45",
        price: 70,
      },
      {
        destination: "chu-lai",
        duration: "1h30",
        price: 60,
      },
      {
        destination: "dien-bien-phu",
        duration: "1h20",
        price: 70,
      },
      {
        destination: "dong-hoi",
        duration: "1h30",
        price: 75,
      },
      {
        destination: "pleiku",
        duration: "1h30",
        price: 75,
      },
      {
        destination: "qui-nhon",
        duration: "1h35",
        price: 70,
      },
    ],
  },
  "can-tho": {
    id: "can-tho",
    schedules: [
      {
        destination: "da-lat",
        duration: "45min",
        price: 60,
      },
      {
        destination: "da-nang",
        duration: "1h30",
        price: 70,
      },
      {
        destination: "haiphong",
        duration: "2h05",
        price: 95,
      },
      {
        destination: "vinh",
        duration: "1h50",
        price: 75,
      },
      {
        destination: "con-dao",
        duration: "50min",
        price: 150,
      },
      {
        destination: "thanh-hoa",
        duration: "1h55",
        price: 80,
      },
    ],
  },
  haiphong: {
    id: "haiphong",
    schedules: [
      {
        destination: "da-lat",
        duration: "1h45",
        price: 75,
      },
      {
        destination: "da-nang",
        duration: "1h20",
        price: 65,
      },
      {
        destination: "nha-trang",
        duration: "1h45",
        price: 75,
      },
      {
        destination: "phu-quoc",
        duration: "1h50",
        price: 80,
      },
      {
        destination: "buon-ma-thuot",
        duration: "1h40",
        price: 70,
      },
      {
        destination: "pleiku",
        duration: "1h35",
        price: 70,
      },
    ],
  },
  "da-lat": {
    id: "da-lat",
    schedules: [
      {
        destination: "da-nang",
        duration: "1h05",
        price: 65,
      },
      {
        destination: "hue",
        duration: "1h15",
        price: 90,
      },
      {
        destination: "vinh",
        duration: "1h35",
        price: 65,
      },
    ],
  },
  "da-nang": {
    id: "da-nang",
    schedules: [
      {
        destination: "nha-trang",
        duration: "1h05",
        price: 60,
      },
    ],
  },
  "nha-trang": {
    id: "nha-trang",
    schedules: [
      {
        destination: "vinh",
        duration: "1h35",
        price: 70,
      },
      {
        destination: "thanh-hoa",
        duration: "1h45",
        price: 75,
      },
    ],
  },
  "phu-quoc": {
    id: "phu-quoc",
    schedules: [
      {
        destination: "vinh",
        duration: "1h40",
        price: 80,
      },
    ],
  },
  vinh: {
    id: "vinh",
    schedules: [
      {
        destination: "buon-ma-thuot",
        duration: "1h25",
        price: 65,
      },
    ],
  },
}

// bad bad not pure
const reversePlaneSchedule = (planeSchedules: PlaneSchedules) => {
  const unorderedPlaneSchedules: PlaneSchedules = {}
  for (const [city, entries] of Object.entries(planeSchedules)) {
    if (!entries) continue
    const cityTyped = city as VietnamCity
    unorderedPlaneSchedules[cityTyped] = {
      id: entries.id,
      schedules: [...entries.schedules, ...(unorderedPlaneSchedules[cityTyped]?.schedules ?? [])],
    }
    for (const schedule of entries?.schedules) {
      const newEntry = {
        destination: cityTyped,
        duration: schedule.duration,
        price: schedule.price,
      }
      if (unorderedPlaneSchedules[schedule.destination]?.schedules) {
        unorderedPlaneSchedules[schedule.destination]?.schedules.push(newEntry)
      } else {
        unorderedPlaneSchedules[schedule.destination] = { id: schedule.destination, schedules: [newEntry] }
      }
    }
  }
  return Object.keys(unorderedPlaneSchedules)
    .sort()
    .reduce((obj, key) => {
      obj[key as VietnamCity] = unorderedPlaneSchedules[key as VietnamCity]
      obj[key as VietnamCity]?.schedules.sort((a, b) => a.destination.localeCompare(b.destination))
      return obj
    }, {} as PlaneSchedules)
}
const planeSchedules = reversePlaneSchedule(tmpPlaneSchedules)
// bad bad not pure
const reverseBusSchedule = (busSchedules: BusSchedules) => {
  const unorderedBusSchedules: BusSchedules = {}
  for (const [city, entries] of Object.entries(busSchedules)) {
    if (!entries) continue
    const cityTyped = city as VietnamCity
    unorderedBusSchedules[cityTyped] = {
      id: entries.id,
      schedules: [...entries.schedules, ...(unorderedBusSchedules[cityTyped]?.schedules ?? [])],
    }
    for (const schedule of entries?.schedules) {
      const newEntry = {
        destination: cityTyped,
        duration: schedule.duration,
        distance: schedule.distance,
        type: schedule.type,
      }
      if (unorderedBusSchedules[schedule.destination]?.schedules) {
        unorderedBusSchedules[schedule.destination]?.schedules.push(newEntry)
      } else {
        unorderedBusSchedules[schedule.destination] = { id: schedule.destination, schedules: [newEntry] }
      }
    }
  }
  return Object.keys(unorderedBusSchedules)
    .sort()
    .reduce((obj, key) => {
      obj[key as VietnamCity] = unorderedBusSchedules[key as VietnamCity]
      obj[key as VietnamCity]?.schedules.sort((a, b) => a.destination.localeCompare(b.destination))
      return obj
    }, {} as BusSchedules)
}
const busSchedules = reverseBusSchedule(tmpBusSchedules)

const namespace = "asia/vietnam/transport"
i18n.addResourceBundle("fr", namespace, translationFr)
i18n.addResourceBundle("en", namespace, translationEn)
const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const { t, i18n } = useCustomTranslation([namespace, "common"])
  const title = t("common:country.vietnam.card.transport")
  const [tooltipContent, setTooltipContent] = useState<string>()
  const [selectedAirport, setSelectedAirport] = useState<VietnamCity>()
  const [selectedBus, setSelectedBus] = useState<VietnamCity>()
  const buildTitle = (title: string) => {
    return i18n.languageCode === "fr" ? `${t("transport-in")} ${title}` : `${title} ${t("transport-in")}`
  }
  return (
    <>
      <SEO
        title={title}
        socialNetworkDescription={t("social-network-description")}
        googleDescription={t("google-description")}
        location={location}
        image={HomeImgUrl}
      />
      <VietnamBlogLayout page="transport-vietnam" location={location}>
        <Title title={title} linkId="transport-vietnam" />
        <ImageAsLandscape>
          <SharedCardVietnamImages image="transportMain" />
        </ImageAsLandscape>
        <Quote>{t("quote")}</Quote>
        <Divider />
        <Introduction>{t("introduction")}</Introduction>
        <Divider />
        <MenuArticle>
          <div>
            <a href="#plane">{t("section1.title")}</a>
          </div>
          <div>
            <a href="#boat">{t("section2.title")}</a>
          </div>
          <div>
            <a href="#bus-menu">{t("section3.title")}</a>
          </div>
          <div>
            <a href="#rickshaw">{t("section4.title")}</a>
          </div>
          <div>
            <a href="#moto">{t("section5.title")}</a>
          </div>
          <div>
            <a href="#taxi">{t("section6.title")}</a>
          </div>
          <div>
            <a href="#train">{t("section7.title")}</a>
          </div>
          <div>
            <a href="#bike">{t("section8.title")}</a>
          </div>
          <div>
            <a href="#car">{t("section9.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <section id="plane">
          <VietnamHeadline>{buildTitle(t("common:section:plane"))}</VietnamHeadline>
          <Divider />
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/biohacker76-9101824")}>
                biohacker76
              </ExternalLinkNotUnderlined>
            }
          >
            <TransportVietnamImages image="plane" />
          </ImageAsLandscape>
          <Information title={t("information")}>
            <p>{t("section1.information.part1")}</p>
            <p>
              {t("section1.information.part2")} <HighLight>{t("section1.information.part3")}</HighLight>{" "}
              {t("section1.information.part4")}
            </p>
            <p>
              {t("section1.information.part5")}{" "}
              <VietnamExternalLink href={buildCo2LogicUrl(i18n.languageCode)}>
                {t("section1.information.part6")}
              </VietnamExternalLink>
              {t("section1.information.part7")}
            </p>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section1.booking.part1")}{" "}
              <VietnamExternalLink href={buildExpediaUrl(i18n.languageCode)}>
                {t("section1.booking.part2")}
              </VietnamExternalLink>
              {t("section1.booking.part3")}
            </p>
            <p>
              {t("section1.booking.part4")}{" "}
              <VietnamExternalLink href={buildSkyScannerUrl(i18n.languageCode)}>
                {t("section1.booking.part5")}
              </VietnamExternalLink>
              {t("section1.booking.part6")}{" "}
              <VietnamExternalLink href="https://ec.europa.eu/transport/sites/transport/files/air-safety-list_fr.pdf">
                {t("section1.booking.part7")}
              </VietnamExternalLink>
              .
            </p>
            <p>{t("section1.booking.part8")}</p>
            <p>{t("section1.booking.part9")}</p>
          </Booking>
          <Company title={t("company")}>
            <p>
              {t("section1.company.part1")}{" "}
              <VietnamExternalLink href={`https://www.vietnamairlines.com/${i18n.languageCode}`}>
                {t("section1.company.part2")}
              </VietnamExternalLink>
              {t("section1.company.part3")}{" "}
              <VietnamExternalLink href="https://www.vietjetair.com">{t("section1.company.part4")}</VietnamExternalLink>{" "}
              {t("section1.company.part5")}{" "}
              <VietnamExternalLink href="https://www.bambooairways.com">
                {t("section1.company.part6")}
              </VietnamExternalLink>
              {t("section1.company.part7")}
            </p>
          </Company>
          <HowMuch title={t("price")}>
            <p>
              {t("section1.price.part1")} <HighLight>{t("section1.price.part2")}</HighLight>
            </p>
            <p>{t("section1.price.part3")}</p>
            <p>
              {t("section1.price.part4")} <HighLight>{t("section1.price.part5")}</HighLight>
            </p>
            <p>{t("section1.price.part6")}</p>
            <MapAndTableContainer>
              <VietnamAirportMap
                onMouseEnter={setTooltipContent}
                onMouseLeave={setTooltipContent}
                selected={selectedAirport}
                destination={
                  selectedAirport
                    ? planeSchedules[selectedAirport]?.schedules.map((schedule) => schedule.destination) ?? []
                    : []
                }
                onSelect={(city: VietnamCity) => setSelectedAirport(selectedAirport === city ? undefined : city)}
              />
              <MapAndTableTableContainer>
                {Object.entries(planeSchedules).map(([key, entry]) => {
                  return (
                    <Tree
                      key={key}
                      name={vietnamCities[entry?.id ?? "hanoi"]}
                      onClick={() => {
                        setSelectedAirport(selectedAirport === entry?.id ? undefined : entry?.id)
                      }}
                      controlled
                      open={entry?.id === selectedAirport}
                    >
                      <div className="schedules">
                        {entry?.schedules.map((schedule) => (
                          <div
                            key={schedule.destination}
                            className="schedule-entry"
                            css={css`
                              .schedule-entry-destination {
                                flex-basis: 50%;
                                min-width: 50%;
                              }
                              .schedule-entry-price,
                              .schedule-entry-duration {
                                flex-basis: 25%;
                                min-width: 25%;
                              }
                            `}
                          >
                            <span className="schedule-entry-destination inline-flex items-center justify-center">
                              <BsArrowLeftRight />
                              &nbsp;
                              {vietnamCities[schedule.destination]}
                            </span>
                            <span className="schedule-entry-price dib tc">
                              {(
                                schedule.price * (i18n.languageCode === "fr" ? priceFactorEur : priceFactorUsd)
                              ).toLocaleString(undefined, {
                                style: "currency",
                                currency: i18n.languageCode === "fr" ? "EUR" : "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </span>
                            <span className="schedule-entry-duration dib tc">{schedule.duration}</span>
                          </div>
                        ))}
                      </div>
                    </Tree>
                  )
                })}
              </MapAndTableTableContainer>
            </MapAndTableContainer>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section1.opinion.part1")}</p>
            <p>{t("section1.opinion.part2")}</p>
            <p>{t("section1.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="boat">
          <VietnamHeadline>{buildTitle(t("common:section:boat"))}</VietnamHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportVietnamImages image="boat" />
          </ImageAsLandscape>
          <Information title={t("information")}>
            <p>{t("section2.information.part1")}</p>
            <p>{t("section2.information.part2")}</p>
            <p>{t("section2.information.part3")}</p>
            <p>
              {t("section2.information.part4")}{" "}
              <VietnamLink to="halong-bay">{t("section2.information.part5")}</VietnamLink>{" "}
              {t("section2.information.part6")} <VietnamLink to="my-tho">{t("section2.information.part7")}</VietnamLink>
              {t("section2.information.part8")}
            </p>
            <p>
              {t("section2.information.part9")} <HighLight>{t("section2.information.part10")}</HighLight>{" "}
              {t("section2.information.part11")} <HighLight>{t("section2.information.part12")}</HighLight>
              {t("section2.information.part13")} <HighLight>{t("section2.information.part14")}</HighLight>{" "}
              {t("section2.information.part15")} <HighLight>{t("section2.information.part16")}</HighLight>{" "}
              {t("section2.information.part17")}
            </p>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section2.booking.part1")}{" "}
              <VietnamExternalLink href={buildGetYourGuideLink(i18n.languageCode)()}>
                {t("section2.booking.part2")}
              </VietnamExternalLink>{" "}
              {t("section2.booking.part3")}{" "}
              <VietnamExternalLink href={buildTripAdvisorLink(i18n.languageCode)()}>
                {t("section2.booking.part4")}
              </VietnamExternalLink>
              .
            </p>
          </Booking>
          <Opinion title={t("opinion")}>
            <p>{t("section2.opinion")}</p>
          </Opinion>
          <GroupOfImages>
            <ImageAsLandscapeOnTheRight>
              <TransportVietnamImages image="boat2" />
            </ImageAsLandscapeOnTheRight>
            <ImageAsLandscapeOnTheLeft>
              <TransportVietnamImages image="boat4" />
            </ImageAsLandscapeOnTheLeft>
            <ImageAsLandscapeOnTheRight>
              <TransportVietnamImages image="boat3" />
            </ImageAsLandscapeOnTheRight>
          </GroupOfImages>
        </section>
        <Divider />
        <section id="bus-menu">
          <VietnamHeadline>{buildTitle(t("section3.title"))}</VietnamHeadline>
          <Divider />
          <p>
            {t("section3.part1")} <HighLight>{t("section3.part2")}</HighLight> {t("section3.part3")}{" "}
            <HighLight>{t("section3.part4")}</HighLight> {t("section3.part5")}
          </p>
          <p>{t("section3.part6")}</p>
        </section>
        <MenuArticle>
          <div>
            <a href="#bus">{t("section3.bus.title")}</a>
          </div>
          <div>
            <a href="#bus-car">{t("section3.car.title")}</a>
          </div>
          <div>
            <a href="#open-tour">{t("section3.open-tour.title")}</a>
          </div>
          <div>
            <a href="#guided-tour">{t("section3.guided-tour.title")}</a>
          </div>
        </MenuArticle>
        <Divider />
        <section id="bus">
          <BusTitle>
            <FaBus />
            &nbsp;{t("section3.bus.title")}
          </BusTitle>
          <Information title={t("information")}>
            <p>
              {t("section3.bus.information.part1")} <HighLight>{t("section3.bus.information.part2")}</HighLight>{" "}
              {t("section3.bus.information.part3")}
            </p>
            <p>{t("section3.bus.information.part4")}</p>
            <p>{t("section3.bus.information.part5")}</p>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section3.bus.booking.part1")} <HighLight>{t("section3.bus.booking.part2")}</HighLight>
              {t("section3.bus.booking.part3")}
            </p>
          </Booking>
          <Opinion title={t("opinion")}>
            <p>{t("section3.bus.opinion")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="bus-car">
          <BusTitle>
            <FaBus />
            &nbsp;{t("section3.car.title")}
          </BusTitle>
          <Information title={t("information")}>
            <p>
              {t("section3.car.information.part1")} <HighLight>{t("section3.car.information.part2")}</HighLight>
            </p>
            <p>{t("section3.car.information.part3")}</p>
            <ul>
              <li>
                <HighLight>{t("section3.car.information.part4")}</HighLight> {t("section3.car.information.part5")}
              </li>
              <li>
                <HighLight>{t("section3.car.information.part6")}</HighLight> {t("section3.car.information.part7")}
              </li>
              <li>
                <HighLight>{t("section3.car.information.part8")}</HighLight> {t("section3.car.information.part9")}
              </li>
              <li>
                <HighLight>{t("section3.car.information.part10")}</HighLight> {t("section3.car.information.part11")}
              </li>
            </ul>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft
                title="Seater Bus"
                credit={
                  <ExternalLinkNotUnderlined href="https://thesinhtourist.vn/carhire/vctx/car-hire">
                    thesinhtourist
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="seaterBus" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight
                title="Seater Sleeper Bus"
                credit={
                  <ExternalLinkNotUnderlined href="https://thesinhtourist.vn/carhire/vctx/car-hire">
                    thesinhtourist
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="seaterSleeperBus" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft
                title="Berths Seater Bus"
                credit={
                  <ExternalLinkNotUnderlined href="https://thesinhtourist.vn/carhire/vctx/car-hire">
                    thesinhtourist
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="berthsSleeperBus" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight
                title="Night Sleeper Bus"
                credit={
                  <ExternalLinkNotUnderlined href="https://www.klook.com/en-SG/activity/19894-sleeper-bus-ho-chi-minh-nha-trang/">
                    klook
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="nightSleeperBus" />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
            <p>{t("section3.car.information.part12")}</p>
            <p>{t("section3.car.information.part13")}</p>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section3.car.booking.part1")} <HighLight>{t("section3.car.booking.part2")}</HighLight>{" "}
              {t("section3.car.booking.part3")}
            </p>
            <p>{t("section3.car.booking.part4")}</p>
            <p>
              {t("section3.car.booking.part5")}{" "}
              <VietnamExternalLink href={build12GoAsiaUrl(i18n.languageCode)}>
                {t("section3.car.booking.part6")}
              </VietnamExternalLink>{" "}
              {t("section3.car.booking.part7")}{" "}
              <VietnamExternalLink href={buildBaolauUrl(i18n.languageCode)}>
                {t("section3.car.booking.part8")}
              </VietnamExternalLink>
            </p>
          </Booking>
          <Company title={t("company")}>
            <p>
              {t("section3.car.company.part1")}{" "}
              <VietnamExternalLink href={`https://www.thesinhtourist.vn/`}>
                {t("section3.car.company.part2")}
              </VietnamExternalLink>
              ,{" "}
              <VietnamExternalLink href={`https://futabus.vn/en-US?lang=en-US`}>
                {t("section3.car.company.part3")}
              </VietnamExternalLink>{" "}
              {t("section3.car.company.part4")}{" "}
              <VietnamExternalLink href={`http://mailinhexpress.vn/`}>
                {t("section3.car.company.part5")}
              </VietnamExternalLink>
            </p>
          </Company>
          <HowMuch title={t("price")}>
            <p>
              {t("section3.car.price.part1")} <HighLight>{t("section3.car.price.part2")}</HighLight>{" "}
              {t("section3.car.price.part3")}
            </p>
            <p>{t("section3.car.price.part4")}</p>
            <MapAndTableContainer>
              <img
                src={MapBus}
                alt="Map Bus Vietnam"
                className="mr-auto ml-auto db"
                css={css`
                  max-height: 80vh;
                  max-width: 500px;
                  object-fit: contain;
                `}
              />
              <MapAndTableTableContainer>
                {Object.entries(busSchedules).map(([key, entry]) => {
                  return (
                    <Tree
                      key={key}
                      name={vietnamCities[entry?.id ?? "hanoi"]}
                      onClick={() => {
                        setSelectedBus(selectedBus === entry?.id ? undefined : entry?.id)
                      }}
                      controlled
                      open={entry?.id === selectedBus}
                    >
                      <div className="schedules">
                        {entry?.schedules.map((schedule) => (
                          <div
                            key={schedule.destination}
                            className="schedule-entry"
                            css={css`
                              .schedule-entry-icon {
                                flex-basis: 70px;
                                min-width: 70px;
                              }
                              .schedule-entry-destination {
                                flex-basis: calc(60% - 70px);
                                min-width: calc(60% - 70px);
                              }
                              .schedule-entry-distance,
                              .schedule-entry-duration {
                                flex-basis: 20%;
                                min-width: 20%;
                              }
                            `}
                          >
                            <span className="schedule-entry-icon inline-flex items-center justify-start pl3">
                              {schedule.type.includes("sleeping") && (
                                <>
                                  <Sleeping />
                                  &nbsp;
                                </>
                              )}
                              {schedule.type.includes("sitting") && <Sitting />}
                            </span>
                            <span className="schedule-entry-destination inline-flex items-center justify-center">
                              {vietnamCities[schedule.destination]}
                            </span>
                            <span className="schedule-entry-distance dib tc">{schedule.distance}</span>
                            <span className="schedule-entry-duration dib tc">{schedule.duration}</span>
                          </div>
                        ))}
                      </div>
                    </Tree>
                  )
                })}
              </MapAndTableTableContainer>
            </MapAndTableContainer>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section3.car.opinion.part1")}</p>
            <p>{t("section3.car.opinion.part2")}</p>
            <p>{t("section3.car.opinion.part3")}</p>
            <p>
              {t("section3.car.opinion.part4")}{" "}
              <VietnamLink to="cambodia">{t("section3.car.opinion.part5")}</VietnamLink>{" "}
              {t("section3.car.opinion.part6")}
            </p>
          </Opinion>
        </section>
        <Divider />
        <section id="open-tour">
          <BusTitle>
            <FaBus />
            &nbsp;{t("section3.open-tour.title")}
          </BusTitle>
          <Information title={t("information")}>
            <p>
              {t("section3.open-tour.information.part1")}{" "}
              <HighLight>{t("section3.open-tour.information.part2")}</HighLight>{" "}
              {t("section3.open-tour.information.part3")}
            </p>
            <p>{t("section3.open-tour.information.part4")}</p>
            <ul>
              <li>{t("section3.open-tour.information.part5")}</li>
              <li>{t("section3.open-tour.information.part6")}</li>
              <li>{t("section3.open-tour.information.part7")}</li>
              <li>{t("section3.open-tour.information.part8")}</li>
            </ul>
            <p>{t("section3.open-tour.information.part9")}</p>
            <p>
              {t("section3.open-tour.information.part10")}{" "}
              <HighLight>{t("section3.open-tour.information.part11")}</HighLight>{" "}
              {t("section3.open-tour.information.part12")}
            </p>
            <p>{t("section3.open-tour.information.part13")}</p>
            <p>
              {t("section3.open-tour.information.part14")}{" "}
              <VietnamExternalLink href={buildGetYourGuideLink(i18n.languageCode)()}>
                {t("section3.open-tour.information.part15")}
              </VietnamExternalLink>{" "}
              {t("section3.open-tour.information.part16")}
            </p>
            <p>
              {t("section3.open-tour.information.part17")}{" "}
              <VietnamLink to="halong-bay">{t("section3.open-tour.information.part18")}</VietnamLink>{" "}
              {t("section3.open-tour.information.part19")}
            </p>
            <ImageAsLandscape>
              <img
                css={css`
                  max-height: 80vh;
                  object-fit: contain;
                `}
                src={MapOpenBus}
                alt="Open Bus Route"
              />
            </ImageAsLandscape>
            <p>{t("section3.open-tour.information.part20")}</p>
            <p>
              {t("section3.open-tour.information.part21")}{" "}
              <HighLight>{t("section3.open-tour.information.part22")}</HighLight>{" "}
              {t("section3.open-tour.information.part23")}{" "}
              <HighLight>{t("section3.open-tour.information.part24")}</HighLight>
              {t("section3.open-tour.information.part25")}
            </p>
            <p>{t("section3.open-tour.information.part26")}</p>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section3.open-tour.booking.part1")} <HighLight>{t("section3.open-tour.booking.part2")}</HighLight>{" "}
              {t("section3.open-tour.booking.part3")} <HighLight>{t("section3.open-tour.booking.part4")}</HighLight>
            </p>
            <p>{t("section3.open-tour.booking.part5")}</p>
            <ul>
              <li>{t("section3.open-tour.booking.part6")}</li>
              <li>{t("section3.open-tour.booking.part7")}</li>
              <li>{t("section3.open-tour.booking.part8")}</li>
            </ul>
            <p>
              {t("section3.open-tour.booking.part9")} <HighLight>{t("section3.open-tour.booking.part10")}</HighLight>{" "}
              {t("section3.open-tour.booking.part11")}
            </p>
            <p>{t("section3.open-tour.booking.part12")}</p>
            <p>
              {t("section3.open-tour.booking.part13")} <HighLight>{t("section3.open-tour.booking.part14")}</HighLight>{" "}
              {t("section3.open-tour.booking.part15")}
            </p>
          </Booking>
          <Company title={t("company")}>
            <p>
              <HighLight>{t("section3.open-tour.company.part1")}</HighLight> {t("section3.open-tour.company.part2")}{" "}
              <VietnamExternalLink href="https://thesinhtourist.vn/openbus/vcvx/open-bus/all">
                {t("section3.open-tour.company.part3")}
              </VietnamExternalLink>
              .
            </p>
            <p>{t("section3.open-tour.company.part4")}</p>
          </Company>
          <HowMuch title={t("price")}>
            <p>{t("section3.open-tour.price.part1")}</p>
            <ul>
              <li>
                {t("section3.open-tour.price.part2")}{" "}
                <VietnamExternalLink href="https://www.thesinhtourist.vn/download/OpenBus-SG.pdf">
                  {t("section3.open-tour.price.part3")}
                </VietnamExternalLink>
              </li>
              <li>
                {t("section3.open-tour.price.part4")}{" "}
                <VietnamExternalLink href="https://www.thesinhtourist.vn/download/OpenBus-HN.pdf">
                  {t("section3.open-tour.price.part5")}
                </VietnamExternalLink>
              </li>
              <li>
                {t("section3.open-tour.price.part6")}{" "}
                <VietnamExternalLink href="https://www.thesinhtourist.vn/download/OpenBus-Hue.pdf">
                  {t("section3.open-tour.price.part7")}
                </VietnamExternalLink>
              </li>
            </ul>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section3.open-tour.opinion.part1")}</p>
            <p>{t("section3.open-tour.opinion.part2")}</p>
            <p>{t("section3.open-tour.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="guided-tour">
          <BusTitle>
            <FaBus />
            &nbsp;{t("section3.guided-tour.title")}
          </BusTitle>
          <Information title={t("information")}>
            <p>
              {t("section3.guided-tour.information.part1")}{" "}
              <HighLight>{t("section3.guided-tour.information.part2")}</HighLight>
            </p>
            <p>{t("section3.guided-tour.information.part3")}</p>
          </Information>
          <Booking title={t("booking")}>
            <p>{t("section3.guided-tour.booking.part1")}</p>
            <p>
              {t("section3.guided-tour.booking.part2")}{" "}
              <VietnamExternalLink
                href={buildTripAdvisorLink(i18n.languageCode)(
                  "Attraction_Review-g293925-d7171779-Reviews-Vietnam_Adventure_Tours-Ho_Chi_Minh_City.html"
                )}
              >
                {t("section3.guided-tour.booking.part3")}
              </VietnamExternalLink>{" "}
              {t("section3.guided-tour.booking.part4")}{" "}
              <VietnamExternalLink href={buildGetYourGuideLink(i18n.languageCode)("discovery/s?q=Vietnam")}>
                {t("section3.guided-tour.booking.part5")}
              </VietnamExternalLink>
              {t("section3.guided-tour.booking.part6")}
            </p>
            <p>
              {t("section3.guided-tour.booking.part7")}{" "}
              <VietnamExternalLink
                href={buildGoogleMapsUrl(i18n.languageCode)(
                  "place/220+%C4%90%E1%BB%81+Th%C3%A1m,+Ph%C6%B0%E1%BB%9Dng+Ph%E1%BA%A1m+Ng%C5%A9+L%C3%A3o,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam"
                )}
              >
                {t("section3.guided-tour.booking.part8")}
              </VietnamExternalLink>{" "}
              {t("section3.guided-tour.booking.part9")}
            </p>
          </Booking>
          <HowMuch title={t("price")}>
            <p>
              {t("section3.guided-tour.price.part1")} <HighLight>{t("section3.guided-tour.price.part2")}</HighLight>
            </p>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section3.guided-tour.opinion.part1")}</p>
            <p>{t("section3.guided-tour.opinion.part2")}</p>
            <p>{t("section3.guided-tour.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="rickshaw">
          <VietnamHeadline>{buildTitle(t("section4.title"))}</VietnamHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportVietnamImages image="rickshaw" />
          </ImageAsLandscape>
          <Information title={t("information")}>
            <p>
              {t("section4.information.part1")} <HighLight>{t("section4.information.part2")}</HighLight>{" "}
              {t("section4.information.part3")}
            </p>
            <p>
              {t("section4.information.part4")} <VietnamLink to="hoi-an">{t("section4.information.part5")}</VietnamLink>{" "}
              {t("section4.information.part6")}
            </p>
            <p>{t("section4.information.part7")}</p>
            <p>{t("section4.information.part8")}</p>
            <p>
              {t("section4.information.part9")} <HighLight>{t("section4.information.part10")}</HighLight>{" "}
              {t("section4.information.part11")}{" "}
              <VietnamLink to="arashiyama">{t("section4.information.part12")}</VietnamLink>{" "}
              {t("section4.information.part13")}
            </p>
          </Information>
          <HowMuch title={t("price")}>
            <p>
              {t("section4.price.part1")} <HighLight>{t("section4.price.part2")}</HighLight> {t("section4.price.part3")}
            </p>
            <p>{t("section4.price.part4")}</p>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section4.opinion.part1")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="moto">
          <VietnamHeadline>{buildTitle(t("section5.title"))}</VietnamHeadline>
          <Divider />
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/viarami-13458823/")}>
                viarami
              </ExternalLinkNotUnderlined>
            }
          >
            <TransportVietnamImages image="moto" />
          </ImageAsLandscape>
          <Information title={t("information")}>
            <p>{t("section5.information.part1")}</p>
            <p>{t("section5.information.part2")}</p>
            <p>{t("section5.information.part3")}</p>
            <p>
              {t("section5.information.part4")} <HighLight>{t("section5.information.part5")}</HighLight>{" "}
              {t("section5.information.part6")}
            </p>
            <p>
              {t("section5.information.part7")} <HighLight>{t("section5.information.part8")}</HighLight>{" "}
              {t("section5.information.part9")}
            </p>
            <p>{t("section5.information.part10")}</p>
            <ul>
              <li>{t("section5.information.part11")}</li>
              <li>
                {t("section5.information.part12")}
                <VietnamExternalLink href="https://commons.wikimedia.org/wiki/File:Vienna_Convention_on_Road_Traffic.svg">
                  {t("section5.information.part13")}
                </VietnamExternalLink>
                {t("section5.information.part14")}
              </li>
            </ul>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section5.booking.part1")} <HighLight>{t("section5.booking.part2")}</HighLight>
            </p>
            <p>
              {t("section5.booking.part3")}{" "}
              <VietnamExternalLink href="http://www.flamingotravel.com.vn/rentals/">
                {t("section5.booking.part4")}
              </VietnamExternalLink>
              {t("section5.booking.part5")}
            </p>
            <p>
              {t("section5.booking.part6")} <HighLight>{t("section5.booking.part7")}</HighLight>{" "}
              {t("section5.booking.part8")}{" "}
              <VietnamExternalLink href="https://www.facebook.com/groups/ForSaleVietnam/">
                {t("section5.booking.part9")}
              </VietnamExternalLink>{" "}
              {t("section5.booking.part10")}
            </p>
          </Booking>
          <HowMuch title={t("price")}>
            <p>{t("section5.price.part1")}</p>
            <ul>
              <li>
                <HighLight>{t("section5.price.part2")}</HighLight> {t("section5.price.part3")}
              </li>
              <li>
                <HighLight>{t("section5.price.part4")}</HighLight> {t("section5.price.part5")}
              </li>
              <li>
                <HighLight>{t("section5.price.part6")}</HighLight> {t("section5.price.part7")}{" "}
                <VietnamExternalLink href="https://www.grab.com/vn/en/transport/bike/#section-fare-table-fare-table-grabbike">
                  {t("section5.price.part8")}
                </VietnamExternalLink>
                {t("section5.price.part9")}
              </li>
            </ul>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p
              className="mb0 tc b"
              css={css`
                margin-bottom: 0 !important;
                color: ${vietnamPrimaryColorDarker};
              `}
            >
              {t("section5.opinion.part1")}
            </p>
            <p className="tc i">{t("section5.opinion.part2")}</p>
            <p>{t("section5.opinion.part3")}</p>
            <p>{t("section5.opinion.part4")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="taxi">
          <VietnamHeadline>{buildTitle(t("common:section.taxi"))}</VietnamHeadline>
          <Divider />
          <Information title={t("information")}>
            <p>{t("section6.information.part1")}</p>
            <p>
              {t("section6.information.part2")} <HighLight>{t("section6.information.part3")}</HighLight>
            </p>
            <p>{t("section6.information.part4")}</p>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section6.booking.part1")} <HighLight>{t("section6.booking.part2")}</HighLight>{" "}
              {t("section6.booking.part3")}
            </p>
          </Booking>
          <Company title={t("company")}>
            <p>
              <HighLight>{t("section6.company.part1")}</HighLight> {t("section6.company.part2")}
            </p>
          </Company>
          <HowMuch title={t("price")}>
            <p>
              {t("section6.price.part1")} <HighLight>{t("section6.price.part2")}</HighLight> {t("section6.price.part3")}
            </p>
            <p>
              {t("section6.price.part4")}{" "}
              <VietnamExternalLink href="https://www.grab.com/vn/en/transport/justgrab/#section-fare-table-fare-table-for-justgrab">
                {t("section6.price.part5")}
              </VietnamExternalLink>{" "}
              {t("section6.price.part6")}
            </p>
            <p>{t("section6.price.part7")}</p>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section6.opinion")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="train">
          <VietnamHeadline>{buildTitle(t("common:section.train"))}</VietnamHeadline>
          <Divider />
          <ImageAsLandscape
            credit={
              <ExternalLinkNotUnderlined href={buildPixabayUrl(i18n.languageCode)("users/bomhehe100-8743342")}>
                bomhehe100
              </ExternalLinkNotUnderlined>
            }
          >
            <TransportVietnamImages image="train" />
          </ImageAsLandscape>
          <Information title={t("information")}>
            <p>{t("section7.information.part1")}</p>
            <p>{t("section7.information.part2")}</p>
            <p>{t("section7.information.part3")}</p>
            <ul>
              <li>
                <HighLight>{t("section7.information.part4")}</HighLight> {t("section7.information.part5")}
              </li>
              <li>
                <HighLight>{t("section7.information.part6")}</HighLight> {t("section7.information.part7")}
              </li>
              <li>
                <HighLight>{t("section7.information.part8")}</HighLight> {t("section7.information.part9")}
              </li>
              <li>
                <HighLight>{t("section7.information.part10")}</HighLight> {t("section7.information.part11")}
              </li>
            </ul>
            <GroupOfImages>
              <ImageAsLandscapeOnTheLeft
                title="Hard Seat"
                credit={
                  <ExternalLinkNotUnderlined href="https://en.wikipedia.org/wiki/Vietnam_Railways#/media/File:CowtownExpressInterior1.jpg">
                    wikipedia
                  </ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="hardSeatTrain" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight
                title="Soft Seat"
                credit={
                  <ExternalLinkNotUnderlined href={buildBaolauUrl(i18n.languageCode)}>baolau</ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="softSeatTrain" />
              </ImageAsLandscapeOnTheRight>
              <ImageAsLandscapeOnTheLeft
                title="Hard Sleeper"
                credit={
                  <ExternalLinkNotUnderlined href={buildBaolauUrl(i18n.languageCode)}>baolau</ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="hardSleeperTrain" />
              </ImageAsLandscapeOnTheLeft>
              <ImageAsLandscapeOnTheRight
                title="Soft Sleeper"
                credit={
                  <ExternalLinkNotUnderlined href={buildBaolauUrl(i18n.languageCode)}>baolau</ExternalLinkNotUnderlined>
                }
              >
                <TransportVietnamImages image="softSleeperTrain" />
              </ImageAsLandscapeOnTheRight>
            </GroupOfImages>
          </Information>
          <Booking title={t("booking")}>
            <p>
              {t("section7.booking.part1")}{" "}
              <VietnamExternalLink href={buildBaolauUrl(i18n.languageCode)}>
                {t("section7.booking.part2")}
              </VietnamExternalLink>{" "}
              {t("section7.booking.part3")}{" "}
              <VietnamExternalLink href={build12GoAsiaUrl(i18n.languageCode)}>
                {t("section7.booking.part4")}
              </VietnamExternalLink>
              {t("section7.booking.part5")}
            </p>
            <p>{t("section7.booking.part6")}</p>
            <p>{t("section7.booking.part7")}</p>
          </Booking>
          <Company title={t("company")}>
            <p>
              {t("section7.company.part1")} <HighLight>{t("section7.company.part2")}</HighLight>{" "}
              {t("section7.company.part3")}
              <img src={VietnamRailwayIcon} alt="Vietnam Railway" />
            </p>
            <p>{t("section7.company.part4")}</p>
            <ul>
              <li>
                <HighLight>{t("section7.company.part5")}</HighLight> {t("section7.company.part6")}
                <img src={VioletteIcon} alt="Violette" className="v-top" />
              </li>
              <li>
                <HighLight>{t("section7.company.part7")}</HighLight> {t("section7.company.part8")}{" "}
                <img src={NewLivitransIcon} alt="New Livitrans Express" className="v-top" />
              </li>
              <li>
                <HighLight>{t("section7.company.part9")}</HighLight> {t("section7.company.part10")}
                <img src={LotusIcon} alt="Lotus Train" className="v-top" />
              </li>
            </ul>
          </Company>
          <HowMuch title={t("price")}>
            <VietnamTrainMap onMouseEnter={setTooltipContent} onMouseLeave={setTooltipContent} />
            <p>{t("section7.price")}</p>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section7.opinion.part1")}</p>
            <p>{t("section7.opinion.part2")}</p>
            <p>{t("section7.opinion.part3")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="bike">
          <VietnamHeadline>{buildTitle(t("common:section.bike"))}</VietnamHeadline>
          <Divider />
          <ImageAsLandscape>
            <TransportVietnamImages image="bicycle" />
          </ImageAsLandscape>
          <Information title={t("information")}>
            <p>{t("section8.information.part1")}</p>
            <p>{t("section8.information.part2")}</p>
          </Information>
          <Booking title={t("booking")}>
            <p>{t("section8.booking")}</p>
          </Booking>
          <HowMuch title={t("price")}>
            <p>
              {t("section8.price.part1")} <HighLight>{t("section8.price.part2")}</HighLight> {t("section8.price.part3")}
            </p>
          </HowMuch>
          <Opinion title={t("opinion")}>
            <p>{t("section8.opinion")}</p>
          </Opinion>
        </section>
        <Divider />
        <section id="car">
          <VietnamHeadline>{buildTitle(t("common:section.car"))}</VietnamHeadline>
          <Divider />
          <Information title={t("information")}>
            <p>{t("section9.information")}</p>
          </Information>
          <Opinion title={t("opinion")}>
            <p>{t("section9.opinion")}</p>
          </Opinion>
        </section>
        <Divider />
        <section>
          <SectionContent>
            <PetitCarreJaune>
              <p>{t("section10.part1")}</p>
              <p>{t("section10.part2")}</p>
              <p>{t("section10.part3")}</p>
              <p>{t("section10.part4")}</p>
              <p>{t("section10.part5")}</p>
            </PetitCarreJaune>
          </SectionContent>
        </section>
        <Conclusion>
          <p>{t("conclusion")}</p>
          <ul>
            <li>{t("question1")}</li>
            <li>{t("question2")}</li>
          </ul>
        </Conclusion>
        <Divider />
        <Comments
          collectionName={namespace}
          location={location}
          facebookQuote={`${t("facebook.part1")}\n${t("facebook.part2")}`}
          pinterest={{
            description: t("pinterest"),
            nodes:
              i18n.languageCode === "fr"
                ? [
                    <TransportVietnamImages image="cardFr1" key="cardFr1" />,
                    <TransportVietnamImages image="cardFr2" key="cardFr2" />,
                  ]
                : [
                    <TransportVietnamImages image="cardEn1" key="cardEn1" />,
                    <TransportVietnamImages image="cardEn2" key="cardEn2" />,
                  ],
          }}
        />
        <MouseToolTip>
          {tooltipContent ? (
            <TooltipContent>
              {tooltipContent.split("\n").map((item, index) => {
                return (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </TooltipContent>
          ) : null}
        </MouseToolTip>
      </VietnamBlogLayout>
    </>
  )
}

export default IndexPage

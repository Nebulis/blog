import React, { useState } from "react"
import { VietnamAirportMap } from "./vietnam-map"
import { MapAndTableContainer, MapAndTableTableContainer, vietnamCities, VietnamCity } from "./vietnam"
import { Tree } from "../../../layout/menu"
import { convertTime, price } from "../../../../utils"
import { css } from "@emotion/react"
import { BsArrowLeftRight } from "react-icons/bs"
import { useCustomTranslation } from "../../../../i18n-hook"
import { reverseSchedules, Schedules, SearchItinerary } from "../../search-itinerary"

const tmpPlaneSchedules: Schedules<VietnamCity> = {
  "ho-chi-minh": {
    id: "ho-chi-minh",
    schedules: [
      {
        destination: "da-lat",
        duration: 55,
        price: 60,
      },
      {
        destination: "da-nang",
        duration: 75,
        price: 60,
      },
      {
        destination: "haiphong",
        duration: 120,
        price: 70,
      },
      {
        destination: "hanoi",
        duration: 120,
        price: 70,
      },
      {
        destination: "hue",
        duration: 85,
        price: 60,
      },
      {
        destination: "nha-trang",
        duration: 70,
        price: 60,
      },
      {
        destination: "phu-quoc",
        duration: 60,
        price: 55,
      },
      {
        destination: "vinh",
        duration: 110,
        price: 70,
      },
      {
        destination: "buon-ma-thuot",
        duration: 60,
        price: 60,
      },
      {
        destination: "con-dao",
        duration: 60,
        price: 160,
      },
      {
        destination: "chu-lai",
        duration: 80,
        price: 60,
      },
      {
        destination: "dong-hoi",
        duration: 95,
        price: 70,
      },
      {
        destination: "pleiku",
        duration: 70,
        price: 60,
      },
      {
        destination: "qui-nhon",
        duration: 70,
        price: 60,
      },
      {
        destination: "rach-gia",
        duration: 50,
        price: 70,
      },
      {
        destination: "thanh-hoa",
        duration: 120,
        price: 70,
      },
    ],
  },
  hanoi: {
    id: "hanoi",
    schedules: [
      {
        destination: "can-tho",
        duration: 130,
        price: 80,
      },
      {
        destination: "da-lat",
        duration: 105,
        price: 70,
      },
      {
        destination: "da-nang",
        duration: 80,
        price: 60,
      },
      {
        destination: "hue",
        duration: 75,
        price: 65,
      },
      {
        destination: "nha-trang",
        duration: 105,
        price: 70,
      },
      {
        destination: "phu-quoc",
        duration: 125,
        price: 75,
      },
      {
        destination: "vinh",
        duration: 60,
        price: 70,
      },
      {
        destination: "buon-ma-thuot",
        duration: 105,
        price: 70,
      },
      {
        destination: "chu-lai",
        duration: 90,
        price: 60,
      },
      {
        destination: "dien-bien-phu",
        duration: 80,
        price: 70,
      },
      {
        destination: "dong-hoi",
        duration: 90,
        price: 75,
      },
      {
        destination: "pleiku",
        duration: 90,
        price: 75,
      },
      {
        destination: "qui-nhon",
        duration: 95,
        price: 70,
      },
    ],
  },
  "can-tho": {
    id: "can-tho",
    schedules: [
      {
        destination: "da-lat",
        duration: 45,
        price: 60,
      },
      {
        destination: "da-nang",
        duration: 90,
        price: 70,
      },
      {
        destination: "haiphong",
        duration: 125,
        price: 95,
      },
      {
        destination: "vinh",
        duration: 110,
        price: 75,
      },
      {
        destination: "con-dao",
        duration: 50,
        price: 150,
      },
      {
        destination: "thanh-hoa",
        duration: 115,
        price: 80,
      },
    ],
  },
  haiphong: {
    id: "haiphong",
    schedules: [
      {
        destination: "da-lat",
        duration: 105,
        price: 75,
      },
      {
        destination: "da-nang",
        duration: 80,
        price: 65,
      },
      {
        destination: "nha-trang",
        duration: 105,
        price: 75,
      },
      {
        destination: "phu-quoc",
        duration: 110,
        price: 80,
      },
      {
        destination: "buon-ma-thuot",
        duration: 100,
        price: 70,
      },
      {
        destination: "pleiku",
        duration: 95,
        price: 70,
      },
    ],
  },
  "da-lat": {
    id: "da-lat",
    schedules: [
      {
        destination: "da-nang",
        duration: 65,
        price: 65,
      },
      {
        destination: "hue",
        duration: 75,
        price: 90,
      },
      {
        destination: "vinh",
        duration: 95,
        price: 65,
      },
    ],
  },
  "da-nang": {
    id: "da-nang",
    schedules: [
      {
        destination: "nha-trang",
        duration: 65,
        price: 60,
      },
    ],
  },
  "nha-trang": {
    id: "nha-trang",
    schedules: [
      {
        destination: "vinh",
        duration: 95,
        price: 70,
      },
      {
        destination: "thanh-hoa",
        duration: 105,
        price: 75,
      },
    ],
  },
  "phu-quoc": {
    id: "phu-quoc",
    schedules: [
      {
        destination: "vinh",
        duration: 100,
        price: 80,
      },
    ],
  },
  vinh: {
    id: "vinh",
    schedules: [
      {
        destination: "buon-ma-thuot",
        duration: 85,
        price: 65,
      },
    ],
  },
}

const planeSchedules = reverseSchedules(tmpPlaneSchedules)

const placeScheduleStyle = css`
  .schedule-entry-destination {
    flex-basis: 50%;
    min-width: 50%;
  }
  .schedule-entry-price,
  .schedule-entry-duration {
    flex-basis: 25%;
    min-width: 25%;
  }
`
export const PlaneSchedule: React.FunctionComponent<{ setTooltipContent: (value: string | undefined) => void }> = ({
  setTooltipContent,
}) => {
  const { i18n } = useCustomTranslation(["common"])
  const [selectedAirport, setSelectedAirport] = useState<VietnamCity>()

  return (
    <>
      <MapAndTableContainer css={placeScheduleStyle}>
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
                    <div key={schedule.destination} className="schedule-entry">
                      <span className="schedule-entry-destination inline-flex items-center justify-center">
                        <BsArrowLeftRight />
                        &nbsp;
                        {vietnamCities[schedule.destination]}
                      </span>
                      <span className="schedule-entry-price dib tc">
                        {price(schedule.price ?? 0, i18n.languageCode)}
                      </span>
                      <span className="schedule-entry-duration dib tc">{convertTime(schedule.duration)}</span>
                    </div>
                  ))}
                </div>
              </Tree>
            )
          })}
        </MapAndTableTableContainer>
      </MapAndTableContainer>
      <SearchItinerary
        schedules={planeSchedules}
        cities={vietnamCities}
        stepsLimit={3}
        displayItinerary={(length) =>
          length === 1
            ? i18n.languageCode === "fr"
              ? "Vol direct"
              : "Direct Flight"
            : i18n.languageCode === "fr"
            ? "Vol avec correspondance"
            : "Connection Flight"
        }
      />
    </>
  )
}

import React, { useState } from "react"
import { reverseSchedules, Schedules, SearchItinerary } from "../search-itinerary"
import { japanCities, JapanCity } from "./japan.cities"
import { useCustomTranslation } from "../../../i18n-hook"
import { BsArrowLeftRight } from "react-icons/bs"
import { Tree } from "../../layout/menu"
import { convertTime, price } from "../../../utils"
import { css } from "@emotion/react"
import { JapanAirportMap } from "./japan.map"
import { largeStart, mediumEnd } from "../variables"
import { MapAndTableContainer } from "../../layout/transports-layout"
import { JapanMapAndTableTableContainer } from "./japan"

const tmpPlaneSchedules: Schedules<JapanCity> = {
  "tokyo-haneda": {
    id: "tokyo-haneda",
    schedules: [
      {
        destination: "osaka-kensai",
        duration: 80,
        price: 130,
      },
      {
        destination: "fukuoka",
        duration: 110,
        price: 200,
      },
      {
        destination: "sapporo",
        duration: 90,
        price: 190,
      },
      {
        destination: "naha",
        duration: 160,
        price: 220,
      },
      {
        destination: "osaka-itami",
        duration: 65,
        price: 125,
      },
      {
        destination: "nagoya-chubu",
        duration: 60,
        price: 110,
      },
      {
        destination: "kagoshima",
        duration: 110,
        price: 220,
      },
      {
        destination: "kumamoto",
        duration: 110,
        price: 200,
      },
      {
        destination: "nagasaki",
        duration: 115,
        price: 220,
      },
      {
        destination: "miyazaki",
        duration: 105,
        price: 210,
      },
      {
        destination: "matsuyama",
        duration: 90,
        price: 190,
      },
      {
        destination: "hiroshima",
        duration: 80,
        price: 160,
      },
      {
        destination: "kobe",
        duration: 75,
        price: 130,
      },
      {
        destination: "ishigaki",
        duration: 190,
        price: 350,
      },
      {
        destination: "oita",
        duration: 100,
        price: 200,
      },
      {
        destination: "komatsu",
        duration: 60,
        price: 110,
      },
      {
        destination: "takamatsu",
        duration: 75,
        price: 170,
      },
      {
        destination: "hakodate",
        duration: 80,
        price: 180,
      },
      {
        destination: "okayama",
        duration: 75,
        price: 140,
      },
      {
        destination: "kochi",
        duration: 80,
        price: 190,
      },
      {
        destination: "miyako",
        duration: 185,
        price: 350,
      },
      {
        destination: "kitakyushu",
        duration: 100,
        price: 200,
      },
      {
        destination: "akita",
        duration: 65,
        price: 135,
      },
      {
        destination: "asahikawa",
        duration: 95,
        price: 215,
      },
      {
        destination: "tokushima",
        duration: 75,
        price: 180,
      },
      {
        destination: "aomori",
        duration: 75,
        price: 150,
      },
      {
        destination: "ube",
        duration: 95,
        price: 170,
      },
      {
        destination: "izumo",
        duration: 85,
        price: 190,
      },
      {
        destination: "ozora",
        duration: 105,
        price: 225,
      },
      {
        destination: "toyama",
        duration: 60,
        price: 120,
      },
      {
        destination: "kushiro",
        duration: 100,
        price: 200,
      },
      {
        destination: "amami",
        duration: 135,
        price: 320,
      },
      {
        destination: "yonago",
        duration: 80,
        price: 160,
      },
      {
        destination: "saga",
        duration: 115,
        price: 200,
      },
      {
        destination: "obihiro",
        duration: 95,
        price: 200,
      },
      {
        destination: "iwakuni",
        duration: 95,
        price: 165,
      },
      {
        destination: "tottori",
        duration: 75,
        price: 150,
      },
      {
        destination: "shonai",
        duration: 60,
        price: 115,
      },
      {
        destination: "misawa",
        duration: 75,
        price: 140,
      },
    ],
  },
  "tokyo-narita": {
    id: "tokyo-narita",
    schedules: [
      {
        destination: "osaka-kensai",
        duration: 90,
        price: 70,
      },
      {
        destination: "fukuoka",
        duration: 125,
        price: 80,
      },
      {
        destination: "sapporo",
        duration: 110,
        price: 75,
      },
      {
        destination: "naha",
        duration: 175,
        price: 90,
      },
      {
        destination: "osaka-itami",
        duration: 85,
        price: 120,
      },
      {
        destination: "nagoya-chubu",
        duration: 80,
        price: 120,
      },
      {
        destination: "kagoshima",
        duration: 130,
        price: 80,
      },
      {
        destination: "kumamoto",
        duration: 125,
        price: 80,
      },
      {
        destination: "nagasaki",
        duration: 135,
        price: 80,
      },
      {
        destination: "miyazaki",
        duration: 125,
        price: 70,
      },
      {
        destination: "matsuyama",
        duration: 100,
        price: 86,
      },
      {
        destination: "oita",
        duration: 115,
        price: 75,
      },
      {
        destination: "takamatsu",
        duration: 90,
        price: 75,
      },
      {
        destination: "kochi",
        duration: 100,
        price: 65,
      },
    ],
  },
  "osaka-kensai": {
    id: "osaka-kensai",
    schedules: [
      {
        destination: "sapporo",
        duration: 115,
        price: 75,
      },
      {
        destination: "naha",
        duration: 130,
        price: 75,
      },
      {
        destination: "ishigaki",
        duration: 155,
        price: 110,
      },
      {
        destination: "miyako",
        duration: 145,
        price: 100,
      },
    ],
  },
  fukuoka: {
    id: "fukuoka",
    schedules: [
      {
        destination: "sapporo",
        duration: 135,
        price: 110,
      },
      {
        destination: "naha",
        duration: 95,
        price: 100,
      },
      {
        destination: "osaka-itami",
        duration: 65,
        price: 95,
      },
      {
        destination: "nagoya-chubu",
        duration: 80,
        price: 75,
      },
      {
        destination: "kagoshima",
        duration: 50,
        price: 85,
      },
      {
        destination: "sendai",
        duration: 110,
        price: 110,
      },
      {
        destination: "miyazaki",
        duration: 40,
        price: 80,
      },
      {
        destination: "matsuyama",
        duration: 45,
        price: 110,
      },
      {
        destination: "komatsu",
        duration: 85,
        price: 95,
      },
      {
        destination: "kochi",
        duration: 55,
        price: 160,
      },
      {
        destination: "tokushima",
        duration: 60,
        price: 120,
      },
      {
        destination: "niigata",
        duration: 95,
        price: 100,
      },
      {
        destination: "izumo",
        duration: 70,
        price: 160,
      },
      {
        destination: "amami",
        duration: 70,
        price: 200,
      },
      {
        destination: "hanamaki",
        duration: 115,
        price: 220,
      },
      {
        destination: "tsushima",
        duration: 35,
        price: 75,
      },
    ],
  },
  sapporo: {
    id: "sapporo",
    schedules: [
      {
        destination: "osaka-itami",
        duration: 115,
        price: 120,
      },
      {
        destination: "nagoya-chubu",
        duration: 105,
        price: 120,
      },
      {
        destination: "sendai",
        duration: 70,
        price: 110,
      },
      {
        destination: "hiroshima",
        duration: 125,
        price: 170,
      },
      {
        destination: "kobe",
        duration: 120,
        price: 80,
      },
      {
        destination: "hakodate",
        duration: 35,
        price: 80,
      },
      {
        destination: "akita",
        duration: 60,
        price: 100,
      },
      {
        destination: "aomori",
        duration: 50,
        price: 95,
      },
      {
        destination: "niigata",
        duration: 70,
        price: 100,
      },
      {
        destination: "ozora",
        duration: 45,
        price: 100,
      },
      {
        destination: "kushiro",
        duration: 40,
        price: 95,
      },
      {
        destination: "hanamaki",
        duration: 55,
        price: 165,
      },
    ],
  },
  naha: {
    id: "naha",
    schedules: [
      {
        destination: "osaka-itami",
        duration: 115,
        price: 110,
      },
      {
        destination: "nagoya-chubu",
        duration: 130,
        price: 75,
      },
      {
        destination: "kagoshima",
        duration: 80,
        price: 95,
      },
      {
        destination: "sendai",
        duration: 165,
        price: 95,
      },
      {
        destination: "miyazaki",
        duration: 85,
        price: 95,
      },
      {
        destination: "matsuyama",
        duration: 105,
        price: 95,
      },
      {
        destination: "hiroshima",
        duration: 105,
        price: 95,
      },
      {
        destination: "kobe",
        duration: 120,
        price: 95,
      },
      {
        destination: "ishigaki",
        duration: 55,
        price: 75,
      },
      {
        destination: "komatsu",
        duration: 130,
        price: 190,
      },
      {
        destination: "takamatsu",
        duration: 115,
        price: 100,
      },
      {
        destination: "okayama",
        duration: 110,
        price: 200,
      },
      {
        destination: "miyako",
        duration: 45,
        price: 70,
      },
      {
        destination: "kume",
        duration: 40,
        price: 65,
      },
    ],
  },
  "osaka-itami": {
    id: "osaka-itami",
    schedules: [
      {
        destination: "kagoshima",
        duration: 70,
        price: 100,
      },
      {
        destination: "kumamoto",
        duration: 65,
        price: 100,
      },
      {
        destination: "sendai",
        duration: 70,
        price: 110,
      },
      {
        destination: "nagasaki",
        duration: 85,
        price: 110,
      },
      {
        destination: "miyazaki",
        duration: 70,
        price: 100,
      },
      {
        destination: "matsuyama",
        duration: 50,
        price: 85,
      },
      {
        destination: "oita",
        duration: 60,
        price: 100,
      },
      {
        destination: "hakodate",
        duration: 95,
        price: 110,
      },
      {
        destination: "kochi",
        duration: 45,
        price: 80,
      },
      {
        destination: "akita",
        duration: 90,
        price: 100,
      },
      {
        destination: "aomori",
        duration: 100,
        price: 100,
      },
      {
        destination: "niigata",
        duration: 65,
        price: 100,
      },
      {
        destination: "izumo",
        duration: 45,
        price: 110,
      },
      {
        destination: "amami",
        duration: 105,
        price: 210,
      },
      {
        destination: "hanamaki",
        duration: 80,
        price: 220,
      },
      {
        destination: "misawa",
        duration: 95,
        price: 180,
      },
      {
        destination: "fukushima",
        duration: 65,
        price: 100,
      },
    ],
  },
  "nagoya-chubu": {
    id: "nagoya-chubu",
    schedules: [
      {
        destination: "kagoshima",
        duration: 80,
        price: 100,
      },
      {
        destination: "kumamoto",
        duration: 90,
        price: 100,
      },
      {
        destination: "sendai",
        duration: 65,
        price: 100,
      },
      {
        destination: "nagasaki",
        duration: 100,
        price: 100,
      },
      {
        destination: "miyazaki",
        duration: 80,
        price: 100,
      },
      {
        destination: "matsuyama",
        duration: 65,
        price: 100,
      },
      {
        destination: "ishigaki",
        duration: 165,
        price: 100,
      },
      {
        destination: "oita",
        duration: 70,
        price: 100,
      },
      {
        destination: "hakodate",
        duration: 90,
        price: 100,
      },
      {
        destination: "miyako",
        duration: 155,
        price: 100,
      },
      {
        destination: "akita",
        duration: 80,
        price: 100,
      },
      {
        destination: "niigata",
        duration: 60,
        price: 100,
      },
    ],
  },
  kagoshima: {
    id: "kagoshima",
    schedules: [
      {
        destination: "amami",
        duration: 55,
        price: 120,
      },
    ],
  },
  sendai: {
    id: "sendai",
    schedules: [
      {
        destination: "hiroshima",
        duration: 95,
        price: 95,
      },
    ],
  },
  nagasaki: {
    id: "nagasaki",
    schedules: [
      {
        destination: "tsushima",
        duration: 35,
        price: 75,
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

  @media (max-width: ${mediumEnd}) {
    .schedules-container {
      display: none;
    }
  }

  @media (min-width: ${largeStart}) {
    & > svg {
      width: 60%;
    }
  }
`
export const JapanPlaneSchedule: React.FunctionComponent<{
  setTooltipContent: (value: string | undefined) => void
}> = ({ setTooltipContent }) => {
  const { i18n } = useCustomTranslation(["common"])
  const [selectedAirport, setSelectedAirport] = useState<JapanCity>()

  const selectedEntries = Object.entries(planeSchedules).filter((entry) => entry[0] === selectedAirport)
  return (
    <>
      <SearchItinerary
        schedules={planeSchedules}
        cities={japanCities}
        stepsLimit={3}
        onSelectDeparture={(city) => {
          setSelectedAirport(city)
        }}
        selectedDeparture={selectedAirport}
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
      <MapAndTableContainer css={placeScheduleStyle}>
        <JapanAirportMap
          onMouseEnter={setTooltipContent}
          onMouseLeave={setTooltipContent}
          selected={selectedAirport}
          destination={
            selectedAirport
              ? planeSchedules[selectedAirport]?.schedules.map((schedule) => schedule.destination) ?? []
              : []
          }
          onSelect={(city) => {
            setSelectedAirport(city)
          }}
        />
        <JapanMapAndTableTableContainer className="schedules-container">
          {selectedEntries.length !== 1 && (
            <Tree
              name={i18n.languageCode === "en" ? "Select a city" : "Sélectionnez une ville"}
              open={true}
              controlled
            />
          )}
          {selectedEntries.length === 1 &&
            selectedEntries.map(([key, entry]) => {
              return (
                <Tree key={key} name={japanCities[entry?.id ?? "tokyo-narita"]} open={true} controlled>
                  <div className="schedules">
                    {entry?.schedules.map((schedule) => (
                      <div key={schedule.destination} className="schedule-entry">
                        <span className="schedule-entry-destination inline-flex items-center justify-center">
                          <BsArrowLeftRight />
                          &nbsp;
                          {japanCities[schedule.destination]}
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
        </JapanMapAndTableTableContainer>
      </MapAndTableContainer>
    </>
  )
}

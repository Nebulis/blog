import React, { useState, useEffect } from "react"
import { Note, SectionTitle } from "./section"
import { mobileEnd } from "./variables"
import { Select } from "./select"
import { Tree } from "../layout/menu"
import { convertTime, price } from "../../utils"
import { css } from "@emotion/react"
import { useCustomTranslation } from "../../i18n-hook"

export interface Schedule<T> {
  destination: T
  duration: number
  price?: number
}

export type SchedulesEntry<T extends string, S = Schedule<T>> = {
  id: T
  schedules: S[]
}
export type Schedules<T extends string, S = Schedule<T>> = {
  [key in T]?: SchedulesEntry<T, S>
}

type Graph<T extends string> = {
  [key in T]?: { [key in T]?: T[][] }
}

interface InnerStep<T extends string> {
  from: T
  duration: number
  price: number
  to: T
}

export interface Step<T extends string> extends InnerStep<T> {
  steps: InnerStep<T>[]
}

export const reverseSchedules = <T extends Schedules<S, U>, S extends string, U extends Schedule<S>>(
  schedules: T
): T => {
  const unorderedSchedules: Schedules<S, U> = {}
  for (const [city, _entries] of Object.entries(schedules)) {
    const entries = _entries as SchedulesEntry<S, U>
    if (!entries) continue
    const cityTyped = city as S
    unorderedSchedules[cityTyped] = {
      id: entries.id,
      schedules: [...entries.schedules, ...(unorderedSchedules[cityTyped]?.schedules ?? [])],
    }
    for (const schedule of entries?.schedules) {
      const newEntry: U = {
        ...schedule,
        destination: cityTyped,
      } as U
      if (unorderedSchedules[schedule.destination]?.schedules) {
        unorderedSchedules[schedule.destination]?.schedules.push(newEntry)
      } else {
        unorderedSchedules[schedule.destination] = { id: schedule.destination, schedules: [newEntry] }
      }
    }
  }
  return Object.keys(unorderedSchedules)
    .sort()
    .reduce((obj, _key) => {
      const key = _key as S
      const element = unorderedSchedules[key]
      if (!element || !key) return obj
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      obj[key] = element
      obj[key]?.schedules.sort((a, b) => a.destination.localeCompare(b.destination))
      return obj
    }, {} as T)
}

const getSteps = <T extends string>({
  schedules,
  from,
  to,
  stepsLimit,
  allowDifferentSteps,
}: {
  stepsLimit: number
  schedules: Schedules<T>
  from: T
  to: T
  allowDifferentSteps: boolean
}) => {
  const graph: Graph<T> = {}

  const addToGraph = (from: T, to: T, steps: T[]) => {
    if (!graph[from]) {
      graph[from] = {}
    }
    if (graph[from] && !graph[from]?.[to]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      graph[from][to] = []
    }
    graph?.[from]?.[to]?.push(steps)
  }
  const buildGraph = (initial: T, from: T, steps: T[]): void => {
    // this is to avoid infinite loop
    if (steps.length > stepsLimit) return

    const fromAirport = schedules[from]

    // if airport does not exist
    if (!fromAirport) return
    if (steps.includes(from)) return
    for (const schedule of fromAirport.schedules) {
      const newSteps = [...steps, from]
      addToGraph(initial, schedule.destination, [...newSteps, schedule.destination])
      buildGraph(initial, schedule.destination, newSteps)
    }
  }

  buildGraph(from, from, [])
  const steps = (graph[from]?.[to] ?? [])
    .map((steps: T[]) => {
      let [step1, step2] = steps
      const from = step1
      let index = 1
      let duration = 0
      let price = 0
      const innerSteps: InnerStep<T>[] = []
      while (step1 && step2) {
        const step = schedules[step1]?.schedules?.find((schedule: Schedule<T>) => schedule.destination === step2)
        duration += step?.duration || 0
        price += step?.price || 0
        innerSteps.push({
          from: step1,
          to: step2,
          duration: step?.duration || 0,
          price: step?.price || 0,
        })
        step1 = steps[index]
        step2 = steps[index + 1]
        index++
      }
      return {
        from,
        duration,
        price,
        to: step1,
        steps: innerSteps,
      }
    })
    .sort((a, b) => {
      if (a.steps.length === b.steps.length) {
        if (a.duration === b.duration) return a.price - b.price
        return a.duration - b.duration
      }
      return a.steps.length - b.steps.length
    })
  // let's keep only the element with the same length
  const length = steps[0]?.steps?.length ?? 0
  return steps
    .reduce((accumulator, currentValue) => {
      if (allowDifferentSteps) {
        accumulator.push(currentValue)
      } else if (length === currentValue.steps.length) {
        accumulator.push(currentValue)
      }
      return accumulator
    }, [] as Step<T>[])
    .slice(0, 5) // keep only 5 steps
}

interface Props<T extends string> {
  schedules: Schedules<T>
  cities: { [key in T]: string }
  allowDifferentSteps?: boolean
  showPrice?: boolean
  stepsLimit: number
  showNote?: boolean
  displayItinerary: (length: number) => string
  onSelectSteps?: (steps: Step<T>[]) => void
  onSelectDeparture?: (city: T | undefined) => void
  selectedDeparture?: T
}

const searchItineraryStyle = css`
  .search-itinerary-container {
    @media (max-width: ${mobileEnd}) {
      flex-direction: column;
    }
    .react-select-container {
      display: inline-block;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  table {
    max-width: 800px;
    margin: auto;
    .airport-steps-detail {
      font-size: 0.8rem;
      text-align: center;
    }
    th {
      text-align: center;
    }
    tbody tr {
      cursor: pointer;
    }
    .menu-label {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-label-chevron {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: -10px;
      @media (max-width: ${mobileEnd}) {
        left: -0.96667rem; // td padding
      }
    }
    .airport-steps-column-duration,
    .airport-steps-column-price {
      text-align: center;
      .menu-content-container {
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
`
const noop = () => void 0
export function SearchItinerary<T extends string>({
  schedules,
  cities,
  allowDifferentSteps = false,
  showPrice = true,
  showNote = false,
  stepsLimit,
  displayItinerary,
  onSelectSteps = noop,
  onSelectDeparture = noop,
  selectedDeparture,
}: Props<T>): React.ReactElement {
  const { i18n } = useCustomTranslation()
  const [innerSelectedDeparture, setInnerSelectedDeparture] = useState<T | undefined>(selectedDeparture)
  const [selectedArrival, setSelectedArrival] = useState<T>()
  const [steps, setSteps] = useState<Step<T>[]>([])
  const [selectedSchedule, setSelectedSchedule] = useState<number>()
  useEffect(() => {
    setSelectedSchedule(undefined)
    if (innerSelectedDeparture && selectedArrival) {
      const steps = getSteps({
        schedules,
        from: innerSelectedDeparture,
        to: selectedArrival,
        stepsLimit,
        allowDifferentSteps,
      })
      setSteps(steps)
      onSelectSteps(steps)
    } else {
      setSteps([])
      onSelectSteps([])
    }
  }, [onSelectSteps, innerSelectedDeparture, selectedArrival, schedules, stepsLimit, allowDifferentSteps])

  useEffect(() => {
    setInnerSelectedDeparture(selectedDeparture)
  }, [selectedDeparture])

  const entries = Object.entries(schedules).map(([, element]) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    value: element?.id ?? "",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    label: cities[element?.id ?? ""],
  }))
  return (
    <div css={searchItineraryStyle} className="mt3 mb2">
      {showNote && (
        <Note>
          {i18n.languageCode === "fr"
            ? "La recherche d'itinéraires qui suit n'indique que les trajets les plus courts. Vous trouverez plus d'informations ci-dessus pour découvrir tous les itinéraires."
            : "The route search that follows only shows the shortest routes. You can find more information above."}
        </Note>
      )}
      <SectionTitle className="justify-center mb2">
        {i18n.languageCode === "fr" ? "Recherche d'itinéraire" : "Search itinerary"}
      </SectionTitle>
      <div className="flex justify-center items-center content-center search-itinerary-container">
        <Select
          options={entries
            .filter((element) => element.value !== selectedArrival)
            .sort((a, b) => a.label.localeCompare(b.label))}
          placeholder={i18n.languageCode === "fr" ? "Ville de départ" : "Departure City"}
          onChange={(value) => {
            setInnerSelectedDeparture(value as T | undefined)
            onSelectDeparture(value as T | undefined)
          }}
          value={entries.find((entry) => entry.value === selectedDeparture)}
        />
        <Select
          options={entries
            .filter((element) => element.value !== innerSelectedDeparture)
            .sort((a, b) => a.label.localeCompare(b.label))}
          placeholder={i18n.languageCode === "fr" ? "Ville d'arrivée" : "Arrival City"}
          onChange={(value) => {
            setSelectedArrival(value as T | undefined)
          }}
        />
      </div>
      {steps.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>{i18n.languageCode === "fr" ? "Trajet" : "Details"}</th>
              <th>{i18n.languageCode === "fr" ? "Durée" : "Duration"}</th>
              {showPrice && <th>{i18n.languageCode === "fr" ? "Prix" : "Price"}</th>}
            </tr>
          </thead>
          <tbody>
            {steps.map((step, index) => (
              <tr
                key={index}
                onClick={() => {
                  setSelectedSchedule(selectedSchedule === index ? undefined : index)
                }}
              >
                <td>
                  <Tree
                    name={displayItinerary(step.steps.length)}
                    controlled
                    open={selectedSchedule === index}
                    hideArrow={step.steps.length === 1}
                  >
                    {step.steps.length > 1 &&
                      step.steps.map((s, index) => {
                        return (
                          <div key={index} className="airport-steps-detail">
                            {cities[s.from]} - {cities[s.to]}
                          </div>
                        )
                      })}
                  </Tree>
                </td>
                <td className="airport-steps-column-duration">
                  <Tree name={`${convertTime(step.duration)}`} controlled open={selectedSchedule === index} hideArrow>
                    {step.steps.length > 1 &&
                      step.steps.map((s, index) => {
                        return (
                          <div key={index} className="airport-steps-detail">
                            {convertTime(s.duration)}
                          </div>
                        )
                      })}
                  </Tree>
                </td>
                {showPrice && (
                  <td className="airport-steps-column-price">
                    <Tree
                      name={`${price(step.price, i18n.languageCode)}`}
                      controlled
                      open={selectedSchedule === index}
                      hideArrow
                    >
                      {step.steps.length > 1 &&
                        step.steps.map((s, index) => {
                          return (
                            <div key={index} className="airport-steps-detail">
                              {price(s.price, i18n.languageCode)}
                            </div>
                          )
                        })}
                    </Tree>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

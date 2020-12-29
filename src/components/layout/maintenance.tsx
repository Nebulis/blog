import SEO from "./seo"
import { Scooter } from "./scooter"
import { continents, Country, CountryPath, World } from "./world"
import React, { FunctionComponent, ReactElement, useContext, useEffect, useState } from "react"
import { ApplicationContext } from "../application"
import styled from "@emotion/styled"

// eslint-disable-next-line react/display-name
const transformSelectedCountriesByContinent = (continent: string) => (country: Country): ReactElement => {
  if (country.continent === continent) {
    return <CountryPath country={country} className="selectedContinent" />
  }
  return <CountryPath country={country} />
}

const StyledWorld = styled(World)`
  stroke-line-join: round;
  stroke: #d9d9d9;
  fill-rule: evenodd;
  fill: #f2f2f2;

  .selectedContinent {
    animation: color-in 4s ease-in-out;
  }

  @keyframes color-in {
    0% {
      fill: #f2f2f2;
    }
    50% {
      fill: lightblue;
    }
    100% {
      fill: #f2f2f2;
    }
  }

  @media (max-width: 550px) {
    .title-temp-page {
      font-size: 1rem;
    }
  }
`
const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const Maintenance: FunctionComponent = ({ children }) => {
  const [continent, setContinent] = useState(continents[getRandomInt(continents.length)])
  useEffect(() => {
    const interval = setInterval(() => {
      let newContinent = continents[getRandomInt(continents.length)]
      while (newContinent === continent) {
        newContinent = continents[getRandomInt(continents.length)]
      }
      setContinent(newContinent)
    }, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [continent])
  const context = useContext(ApplicationContext)
  const mapSize = 80
  if (context.initialDevelopmentValue) {
    return <>{children}</>
  }
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "100%",
        paddingTop: 0,
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontFamily: "'Ami R Regular'",
          marginTop: "1.45rem",
        }}
        className="title-temp-page"
      >
        En voyage actuellement, les articles arrivent prochainement
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          position: "relative",
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            zIndex: 10,
            width: `${(100 - mapSize) / 2}%`,
          }}
        />
        <div
          style={{
            width: `${mapSize}%`,
          }}
        >
          <Scooter />
          <StyledWorld transform={transformSelectedCountriesByContinent(continent)} />
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: `${(100 - mapSize) / 2}%`,
            zIndex: 10,
          }}
        />
      </div>
    </div>
  )
}

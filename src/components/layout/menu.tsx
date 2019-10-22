import css from "@emotion/css"
import React, { FunctionComponent, HTMLAttributes, useContext } from "react"
import { Link } from "gatsby"
import { continentLinks, getLinkLabel, isLinkPublished } from "../core/links/links"
import { ApplicationLink } from "../core/links/link"
import { CityLink, ContinentLink, CountryLink } from "../core/links/links.types"
import { ApplicationContext } from "../applications"

const sort = (obj1: { label: string }, obj2: { label: string }) => obj1.label.localeCompare(obj2.label)

const renderCity = (continent: ContinentLink, country: CountryLink, city: CityLink, inDevelopment: boolean) => {
  const highlights = inDevelopment ? city.highlights : city.highlights.filter(isLinkPublished)
  return (
    <li key={`${continent.id}_${country.id}_${city.id}`}>
      <ApplicationLink to={city.id}>
        <span>{getLinkLabel(city.id)}</span>
        <span>{highlights.length > 0 ? ">" : null}</span>
      </ApplicationLink>
      {highlights.length > 0 ? (
        <ul className="dropdown-highlight" aria-label="submenu">
          {highlights.sort(sort).map(highlight => (
            <li key={`${continent.id}_${country.id}_${city.id}_${highlight.id}`}>
              <ApplicationLink to={highlight.id}>{getLinkLabel(highlight.id)}</ApplicationLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}
const renderCountry = (continent: ContinentLink, country: CountryLink, inDevelopment: boolean) => {
  const cities = inDevelopment ? country.cities : country.cities.filter(isLinkPublished)

  return (
    <li key={`${continent.id}_${country.id}`}>
      <ApplicationLink to={country.id}>
        <span>{getLinkLabel(country.id)}</span>
        <span>{inDevelopment && cities.length > 0 ? ">" : null}</span>
      </ApplicationLink>
      {inDevelopment && cities.length > 0 ? (
        <ul className="dropdown-city" aria-label="submenu">
          {cities.sort(sort).map(city => renderCity(continent, country, city, inDevelopment))}
        </ul>
      ) : null}
    </li>
  )
}

export const Menu: FunctionComponent<HTMLAttributes<any>> = ({ className }) => {
  const context = useContext(ApplicationContext)
  const inDevelopment = context.development

  return (
    <div
      className={`flex justify-start items-center ${className}`}
      css={css`
        height: 45px;
        background-color: black;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.8rem;
        .nav-container {
          max-width: 870px;
          width: 100%;
          height: 100%;
        }
        .nav-container > ul {
          display: flex;
        }
        .nav-container > ul > li {
          display: flex;
        }
        .nav-container > ul > li > a {
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .nav-container:first-of-type {
          margin-left: 0;
        }
        .nav-container:last-child {
          margin-right: 0;
        }
        ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
        }
        .nav-container > ul > li:hover {
          background-color: white;
          color: black;
        }
        li {
          background: black;
          color: white;
          display: block;
          position: relative;
          transition-duration: 0.5s;
        }

        .nav-container ul .where-to-go {
          box-sizing: border-box;
          height: 55px;
          padding-bottom: 10px;
        }

        .where-to-go > ul,
        .dropdown-continent > li > ul,
        .dropdown-country > li > ul,
        .dropdown-city > li > ul {
          visibility: hidden;
          opacity: 0;
          display: none;
          // visibility: visible;
          // opacity: 1;
          // display: block;
          width: 100%;
          position: absolute;
          transition: all 0.5s ease;
        }
        .where-to-go > ul {
          top: 100%;
          left: 0;
          z-index: 100;
          font-size: 0.7rem;
        }
        .where-to-go > ul > * {
          font-size: 0.7rem;
        }

        .dropdown-continent > li > ul,
        .dropdown-country > li > ul,
        .dropdown-city > li > ul {
          top: -1px;
          left: 100%;
        }

        ul li:hover > ul,
        ul li ul:hover,
        ul li ul:focus {
          visibility: visible;
          opacity: 1;
          display: block;
        }

        // sub-menu
        .nav-container .where-to-go {
          background-color: transparent;
          padding: 0;
          cursor: pointer;
        }

        .nav-container .where-to-go:hover > a {
          background-color: white;
          border-bottom: 1px solid black;
        }

        .nav-container .where-to-go > a {
          background-color: black;
        }

        .where-to-go .dropdown-continent li {
          width: 100%;
        }
        .where-to-go .dropdown-continent li a {
          padding: 0.7rem 0.5rem 0.7rem 0.7rem;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .where-to-go .dropdown-continent li:hover {
          background-color: #565656;
        }
        .where-to-go .dropdown-country li,
        .where-to-go .dropdown-continent ul {
          width: 160px;
        }
        .where-to-go ul {
          border: 1px solid #c0c0c0;
        }
        .where-to-go .dropdown-continent {
          border-right: none;
        }
        .where-to-go .dropdown-continent li:not(:first-of-type) a {
          border-top: 1px solid white;
        }

        // arrow below .where to go
        .white-arrow,
        .black-arrow {
          position: absolute;
          border: 10px solid transparent;
          left: calc(50% - 10px);
          transition: all 100ms linear;
        }
        .white-arrow {
          bottom: -5px;
          z-index: 2;
        }
        .black-arrow {
          bottom: -6px;
          z-index: 1;
        }
        .where-to-go:hover .white-arrow {
          bottom: -8.5px; // dunno why
          border-top-color: white;
        }
        .where-to-go:hover .black-arrow {
          bottom: -10px;
          border-top-color: black;
        }
      `}
    >
      <nav className="nav-container flex justify-center" role="navigation">
        <ul>
          <li>
            <Link to="/" className="home">
              Accueil
            </Link>
          </li>
          <li className="where-to-go">
            <a href="#" aria-haspopup="true">
              Ou Partir
            </a>
            <span className="white-arrow"> </span>
            <span className="black-arrow"> </span>
            <ul className="dropdown-continent" aria-label="submenu">
              {continentLinks.map(continent => {
                const publishedCountries = inDevelopment
                  ? continent.countries
                  : continent.countries.filter(isLinkPublished)
                return (
                  <li key={continent.id}>
                    <ApplicationLink to={continent.id}>
                      <span>{getLinkLabel(continent.id)}</span>
                      <span>{publishedCountries.length > 0 ? ">" : null}</span>
                    </ApplicationLink>
                    {publishedCountries.length > 0 ? (
                      <ul className="dropdown-country" aria-label="submenu">
                        {publishedCountries.sort(sort).map(country => renderCountry(continent, country, inDevelopment))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </li>
          <li className="about">
            <a href="#">A Propos</a>
          </li>
          <li className="contact">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

import css from "@emotion/css"
import React, { FunctionComponent, HTMLAttributes, useContext, useState } from "react"
import { Link } from "gatsby"
import { continentLinks, getLinkLabel, getLinkUrl, isLinkPublished } from "../core/links/links"
import { ApplicationLink } from "../core/links/link"
import { CityLink, ContinentLink, CountryLink } from "../core/links/links.types"
import { ApplicationContext } from "../application"
import { FaChevronRight } from "react-icons/all"

const sort = (obj1: { label: string }, obj2: { label: string }) => obj1.label.localeCompare(obj2.label)

const renderCity = (continent: ContinentLink, country: CountryLink, city: CityLink, inDevelopment: boolean) => {
  const highlights = inDevelopment ? city.highlights : city.highlights.filter(isLinkPublished)
  return (
    <li key={`${continent.id}_${country.id}_${city.id}`}>
      <ApplicationLink to={city.id}>
        <span>{getLinkLabel(city.id)}</span>
        <span>{inDevelopment && highlights.length > 0 ? ">" : null}</span>
      </ApplicationLink>
      {inDevelopment && highlights.length > 0 ? (
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
        <span>{cities.length > 0 ? ">" : null}</span>
      </ApplicationLink>
      {cities.length > 0 ? (
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
      className={`flex justify-center items-center ${className}`}
      css={css`
        height: 45px;
        background-color: #1b1811;
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
          background-color: #1b1811;
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
          border-bottom: 1px solid #1b1811;
        }

        .nav-container .where-to-go > a {
          background-color: #1b1811;
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
          background-color: rgba(27, 24, 17, 0.8);
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
          border-top-color: #1b1811;
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

const burgerStyle = css`
  width: 24px;
  height: 24px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #1b1811;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  span:nth-of-type(1) {
    top: 4px;
  }
  span:nth-of-type(2),
  span:nth-of-type(3) {
    top: 12px;
  }
  span:nth-of-type(4) {
    top: 20px;
  }

  &.open span:nth-of-type(1) {
    top: 12px;
    width: 0%;
    left: 50%;
  }
  &.open span:nth-of-type(2) {
    transform: rotate(45deg);
  }

  &.open span:nth-of-type(3) {
    transform: rotate(-45deg);
  }

  &.open span:nth-of-type(4) {
    top: 12px;
    width: 0%;
    left: 50%;
  }
`
const Burger: FunctionComponent<{ open: boolean; onClick?: () => void }> = ({ open, onClick }) => {
  return (
    <div css={burgerStyle} className={`${open ? "open" : "closed"}`} onClick={onClick}>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

const animationTiming = "0.2s"
export const MobileMenu: FunctionComponent<HTMLAttributes<any>> = ({}) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div
      css={css`
        height: 65px;
        background-color: whitesmoke;
        .nav-container > div {
          cursor: pointer;
        }

        .nav-container {
          position: relative;
          height: 45px;
          background-color: #dedede;
          margin-bottom: 20px;
          margin-left: 20px;
          margin-right: 20px;
        }
        @media (max-width: 576px) {
          .nav-container {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
        .nav-container > div {
          display: flex;
          width: 100%;
          align-items: center;
          padding-left: 1rem;
          padding-right: 1rem;
          justify-content: space-between;
        }
        .nav-container > ul {
          z-index: 100;
          position: absolute;
          top: 100%;
          left: 0;
        }
        ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
          width: 100%;
          text-transform: uppercase;
          background-color: #1b1811;
          max-height: 600px;
        }
        li > a,
        .link-container {
          cursor: pointer;
          min-height: 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #565656;
        }
        .link-container > a {
          min-height: 45px;
          display: flex;
          align-items: center;
        }
        li > .active {
          border-bottom: 2px solid whitesmoke;
        }
        li > a > .chevron {
          display: flex;
          align-items: center;
        }
        li > a > .chevron.open,
        .link-container > .chevron.open {
          transform: rotate(90deg);
          transition: transform ${animationTiming} ease;
        }
        li > a > .chevron.closed,
        .link-container > .chevron.closed {
          transform: rotate(0);
          transition: transform ${animationTiming} ease;
        }
        li {
          color: white;
          display: flex;
          flex-direction: column;
          margin-left: 1rem;
        }
        ul.main-menu > li {
          margin-right: 1rem;
        }
        ul.closed {
          transform: scaleY(0);
          transition: transform ${animationTiming} ease;
          transform-origin: top;
        }
        ul.open {
          transform: scaleY(1);
          transform-origin: top;
          transition: transform ${animationTiming} ease;
        }
        ul.closed.sub-menu {
          height: 0 !important;
          transition: all ${animationTiming} ease;
        }
        ul.open.sub-menu {
          transition: all ${animationTiming} ease;
        }
      `}
    >
      <nav className="nav-container flex justify-center" role="navigation">
        <div onClick={() => setOpenMenu(!openMenu)}>
          <span>Selectionner une page</span>
          <Burger open={openMenu} />
        </div>
        <ul className={`${openMenu ? "open" : "closed"} main-menu`}>
          <li>
            <Link to="/" className="home">
              Accueil
            </Link>
          </li>
          <li className="where-to-go">
            <a href="#" aria-haspopup="true">
              <span>Ou Partir</span>
            </a>
            {
              <ul className={`open`} aria-label="submenu">
                {continentLinks.map(continent => (
                  <MobileContinent key={continent.id} continent={continent} />
                ))}
              </ul>
            }
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

const isCurrentPage = (id: string) => location.pathname === getLinkUrl(id) || location.pathname === `${getLinkUrl(id)}/`
const disableEventOnCurrentPage = (id: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  if (isCurrentPage(id)) {
    event.stopPropagation()
  }
}

const MobileContinent: FunctionComponent<{ continent: ContinentLink }> = ({ continent }) => {
  const [open, setOpen] = useState(false)
  const context = useContext(ApplicationContext)
  const countries = context.development ? continent.countries : continent.countries.filter(isLinkPublished)
  const [numberOfElement, setNumberOfElements] = useState(countries.length)
  return (
    <li
      onClick={event => {
        event.stopPropagation()
        setOpen(!open)
      }}
    >
      <span className={`link-container ${isCurrentPage(continent.id) ? "active" : ""}`}>
        <ApplicationLink to={continent.id}>
          <span>{getLinkLabel(continent.id)}</span>
        </ApplicationLink>
        <span className={`chevron ${open ? "open" : "closed"}`}>{<FaChevronRight />}</span>
      </span>
      {countries.length > 0 ? (
        <ul
          aria-label="submenu"
          className={`sub-menu ${open ? "open" : "closed"}`}
          style={{ height: numberOfElement * 45 + "px" }}
        >
          {countries.sort(sort).map(country => (
            <MobileCountry
              key={`${continent.id}_${country.id}`}
              continent={continent}
              country={country}
              onOpen={(open, numberOfCities) => {
                setNumberOfElements(open ? numberOfElement - numberOfCities : numberOfElement + numberOfCities)
              }}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

const MobileCountry: FunctionComponent<{
  continent: ContinentLink
  country: CountryLink
  onOpen: (open: boolean, numberOfCities: number) => void
}> = ({ continent, country, onOpen }) => {
  const [open, setOpen] = useState(false)
  const context = useContext(ApplicationContext)
  const cities = context.development ? country.cities : country.cities.filter(isLinkPublished)

  return (
    <li
      onClick={event => {
        event.stopPropagation()
        setOpen(!open)
        onOpen(open, cities.length)
      }}
    >
      <span className={`link-container ${isCurrentPage(country.id) ? "active" : ""}`}>
        <ApplicationLink to={country.id}>
          <span>{getLinkLabel(country.id)}</span>
        </ApplicationLink>
        <span className={`chevron ${open ? "open" : "closed"}`}>{<FaChevronRight />}</span>
      </span>
      {cities.length > 0 ? (
        <ul
          className={`sub-menu ${open ? "open" : "closed"}`}
          style={{ height: cities.length * 45 + "px" }}
          aria-label="submenu"
        >
          {cities.sort(sort).map(city => (
            <MobileCity city={city} key={`${continent.id}_${country.id}_${city.id}`} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

const MobileCity: FunctionComponent<{ city: CityLink }> = ({ city }) => {
  return (
    <li>
      <ApplicationLink to={city.id} activeClassName="active" onClick={disableEventOnCurrentPage(city.id)}>
        <span>{getLinkLabel(city.id)}</span>
      </ApplicationLink>
    </li>
  )
}

import css from "@emotion/css"
import React, { FunctionComponent, HTMLAttributes, useContext, useState } from "react"
import { Link } from "gatsby"
import { continentLinks, getLinkLabel, getLinkUrl, isLinkPublished, menuLinks } from "../core/links/links"
import { ApplicationLink } from "../core/links/link"
import { CityLink, ContinentLink, CountryLink } from "../core/links/links.types"
import { ApplicationContext } from "../application"
import { FaChevronRight } from "react-icons/all"
import { backgroundPrimaryColor, menuHeight } from "../core/variables"

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
        <ul className="submenu" aria-label="submenu">
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
      className={`flex justify-center items-center ${className} menu`}
      css={css`
        height: ${menuHeight};
        background-color: #1b1811;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.7rem;
        .nav-container {
          max-width: 992px;
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
        .nav-container > ul > li:hover:not(.menu-down) {
          background-color: white;
          color: black;
        }
        .nav-container > ul > li.menu-down:hover {
          color: black;
        }
        li {
          background-color: #1b1811;
          color: white;
          display: block;
          position: relative;
          transition-duration: 0.5s;
        }

        .nav-container ul .menu-down {
          box-sizing: border-box;
          height: calc(${menuHeight} + 10px);
          padding-bottom: 10px;
          z-index: 500;
        }

        .menu-down > ul,
        .submenu > li > ul {
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
        .menu-down > ul {
          top: 100%;
          left: 0;
          z-index: 500;
          font-size: 0.7rem;
        }
        .menu-down > ul > * {
          font-size: 0.7rem;
        }

        .submenu > li > ul {
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
        .nav-container .menu-down {
          background-color: transparent;
          padding: 0;
          cursor: pointer;
        }

        .nav-container .menu-down:hover > a {
          background-color: white;
          border-bottom: 1px solid #1b1811;
        }

        .nav-container .menu-down > a {
          background-color: #1b1811;
        }

        .menu-down .submenu li {
          width: 100%;
        }
        .menu-down .submenu li a {
          padding: 0.7rem 0.5rem 0.7rem 0.7rem;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .menu-down .submenu li:hover {
          background-color: rgba(27, 24, 17, 0.8);
        }
        .menu-down .submenu ul {
          width: 160px;
        }
        .menu-down ul {
          border: 1px solid #c0c0c0;
        }
        .menu-down .submenu {
          border-right: none;
        }
        .menu-down .submenu li:not(:first-of-type) a {
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
          z-index: 490;
        }
        .black-arrow {
          bottom: -6px;
          z-index: 480;
        }
        .menu-down:hover .white-arrow {
          bottom: -8.5px; // dunno why
          border-top-color: white;
        }
        .menu-down:hover .black-arrow {
          bottom: -10px;
          border-top-color: #1b1811;
        }
      `}
    >
      <nav className="nav-container flex justify-center" role="navigation">
        <ul>
          <li>
            <ApplicationLink to="home" className="home">
              Accueil
            </ApplicationLink>
          </li>
          <li className="menu-down">
            <a href="#" aria-haspopup="true">
              Destination
            </a>
            <span className="white-arrow"> </span>
            <span className="black-arrow"> </span>
            <ul className="submenu" aria-label="submenu">
              {(inDevelopment ? continentLinks : continentLinks.filter(isLinkPublished)).map(continent => {
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
                      <ul className="submenu" aria-label="submenu">
                        {publishedCountries.sort(sort).map(country => renderCountry(continent, country, inDevelopment))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </li>
          {menuLinks.map(menuLink => {
            const subLinks = inDevelopment ? menuLink.sections : menuLink.sections.filter(isLinkPublished)
            return (
              <li key={menuLink.id} className="menu-down">
                <a href="#">{menuLink.label}</a>
                {subLinks.length > 0 && (
                  <>
                    <span className="white-arrow"> </span>
                    <span className="black-arrow"> </span>
                    <ul className="submenu" aria-label="submenu">
                      {subLinks.map(subLink => {
                        const subSubLinks = inDevelopment ? subLink.sections : subLink.sections.filter(isLinkPublished)
                        return (
                          <li key={subLink.id}>
                            {subSubLinks.length > 0 ? (
                              <>
                                <a href="#">
                                  <span>{subLink.label}</span>
                                  <span>&gt;</span>
                                </a>
                                <ul className="submenu" aria-label="submenu">
                                  {subSubLinks.map(subSubLink => (
                                    <li key={subSubLink.id}>
                                      <ApplicationLink to={subSubLink.id}>{subSubLink.label}</ApplicationLink>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <ApplicationLink to={subLink.id}>{subLink.label}</ApplicationLink>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
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
        background-color: ${backgroundPrimaryColor};
        .nav-container > div {
          cursor: pointer;
        }

        .nav-container {
          position: relative;
          height: 45px;
          background-color: #dedede;
          margin-top: 20px;
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
          z-index: 500;
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
          border-bottom: 2px solid ${backgroundPrimaryColor};
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
        </div>
        <ul className={`${openMenu ? "open" : "closed"} main-menu`}>
          <li>
            <Link to="/" className="home">
              Accueil
            </Link>
          </li>
          <li className="menu-down">
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

import css from "@emotion/css"
import React, {
  FunctionComponent,
  HTMLAttributes,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { continentLinks, getLinkLabel, isLinkPublished, menuLinks } from "../core/links/links"
import { ApplicationLink } from "../core/links/link"
import { CityLink, ContinentLink, CountryLink } from "../core/links/links.types"
import { ApplicationContext } from "../application"
import { FaChevronDown, FaChevronRight } from "react-icons/all"
import { backgroundPrimaryColor, bannerHeight, menuHeight, primaryColor, mobileEnd } from "../core/variables"
import styled from "@emotion/styled"
import { animated, useSpring } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"
import { MenuContext } from "./menu.context"

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

const burgerStyle = css`
  width: 24px;
  height: 24px;
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
  z-index: 10001;
`
export const Burger: FunctionComponent<{ open: boolean; onClick?: () => void; className?: string }> = ({
  open,
  onClick,
  className = "",
}) => {
  return (
    <div css={burgerStyle} className={`${className} ${open ? "open" : "closed"} dib`} onClick={onClick}>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

// this is for mobile
export const BurgerAbsolute = styled(Burger)`
  position: fixed;
  left: 0.5rem;
  top: calc(${bannerHeight} / 2 - 12px);
  &.closed {
    visibility: hidden;
  }
`

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  overflow: hidden;
`

export const usePrevious = (value: boolean) => {
  const ref = useRef<boolean>()
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

type Boundary = { left: number; top: number; width: number; height: number }
const useMeasure = (): [{ ref: MutableRefObject<HTMLDivElement | null> }, Boundary] => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [bounds, set] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })
  const [ro] = React.useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  React.useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ro])
  return [{ ref }, bounds]
}

const Tree: React.FunctionComponent<{ name: string; open?: boolean; to?: string; onNavigate?: () => void }> = ({
  children,
  name,
  to,
  open = false,
  onNavigate = () => void 0,
}) => {
  const [isOpen, setOpen] = useState(open)
  const prev = usePrevious(isOpen)
  const [bind, bounds] = useMeasure()
  // @ts-ignore
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(0,0,0)" },
    to: {
      height: isOpen ? bounds.height : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 200}px,0,0)`,
    },
  })
  const hasChildren = (!Array.isArray(children) && children) || (Array.isArray(children) && children.length > 0)
  return (
    <div className="menu-entry">
      <div
        onClick={() => {
          hasChildren && setOpen(!isOpen)
          !hasChildren && onNavigate()
        }}
        className="menu-label"
      >
        <span>{to ? <ApplicationLink to={to}>{name}</ApplicationLink> : name}</span>
        <span>{hasChildren && isOpen ? <FaChevronDown /> : hasChildren ? <FaChevronRight /> : ""}</span>
      </div>
      <Content
        style={{ opacity, height: height.interpolate((height: any) => (isOpen && prev === isOpen ? "auto" : height)) }}
      >
        <animated.div style={{ transform }} {...bind}>
          {children ? children : null}
        </animated.div>
      </Content>
    </div>
  )
}

const MobileMenuContainer = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  height: 100vh;
  box-shadow: 0 0 10px #85888c;
  background-color: ${backgroundPrimaryColor};
  -webkit-font-smoothing: antialiased;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 10000;
  width: 500px;
  max-width: 80vw;
  &.inactive {
    transform: translateX(-500px);
  }
`

const ScrollContainer = styled.div`
  margin-top: ${bannerHeight};
  height: calc(100vh - ${bannerHeight});
  padding: 0 50px 20px 50px;
  @media (max-width: ${mobileEnd}) {
    padding: 0 20px 10px 40px;
  }
  overflow-y: auto;
  .menu-entry {
    border-top: 1px solid ${primaryColor};
    text-transform: uppercase;
  }
  .menu-label {
    padding: 10px 0px;
    cursor: pointer;
    display: flex;
  }
  .menu-label > span:first-of-type {
    flex-grow: 1;
  }
  .menu-label .menu-label:first-of-type {
    margin-top: 10px;
  }
  .menu-label .menu-label:last-of-type {
    padding-bottom: 0px;
  }
  .menu-label:hover {
    background-color: #e8e8e8;
  }
  a {
    display: inline-block;
    width: 100%;
  }
`
const Overlay = styled.div`
  z-index: 9999;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
export const MobileMenu: React.FunctionComponent = () => {
  const { open, setOpen } = useContext(MenuContext)
  const { development } = useContext(ApplicationContext)
  const closeMenu = () => setOpen(false)
  return (
    <>
      {open && <Overlay onClick={closeMenu} />}
      <MobileMenuContainer className={`${open ? "active" : "inactive"}`}>
        <ScrollContainer>
          <Tree name="Accueil" to="home" onNavigate={closeMenu} />
          <Tree name="Destination">
            {(development ? continentLinks : continentLinks.filter(isLinkPublished)).map(continent => {
              const publishedCountries = development ? continent.countries : continent.countries.filter(isLinkPublished)
              return (
                <Tree key={continent.id} name={continent.label} onNavigate={closeMenu}>
                  {publishedCountries.map(country => (
                    <Tree key={country.id} name={country.label} to={country.id} onNavigate={closeMenu} />
                  ))}
                </Tree>
              )
            })}
          </Tree>
          {menuLinks.map(menuLink => {
            const subMenuLinks = development ? menuLink.sections : menuLink.sections.filter(isLinkPublished)
            const to = subMenuLinks.length > 0 ? undefined : menuLink.id
            return (
              <Tree key={menuLink.id} to={to} name={menuLink.label}>
                {subMenuLinks.map(subMenuLink => {
                  const subSubMenuLinks = development
                    ? subMenuLink.sections
                    : subMenuLink.sections.filter(isLinkPublished)
                  const to = subSubMenuLinks.length > 0 ? undefined : subMenuLink.id
                  return (
                    <Tree key={subMenuLink.id} to={to} name={subMenuLink.label} onNavigate={closeMenu}>
                      {subSubMenuLinks.map(subSubMenuLink => (
                        <Tree key={subSubMenuLink.id} to={to} name={subSubMenuLink.label} onNavigate={closeMenu} />
                      ))}
                    </Tree>
                  )
                })}
              </Tree>
            )
          })}
        </ScrollContainer>
      </MobileMenuContainer>
    </>
  )
}

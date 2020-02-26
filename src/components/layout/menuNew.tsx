import React, { FunctionComponent, MutableRefObject, useContext, useEffect, useRef, useState } from "react"
import css from "@emotion/css"
import styled from "@emotion/styled"
import { ApplicationLink } from "../core/links/link"
import { continentLinks, isLinkPublished, menuLinks } from "../core/links/links"
import { backgroundPrimaryColor, bannerHeight, primaryColor } from "../core/variables"
import { animated, useSpring } from "react-spring"
import ResizeObserver from "resize-observer-polyfill"
import { FaChevronDown, FaChevronRight } from "react-icons/all"
import { ApplicationContext } from "../application"
import { MenuContext } from "./menu.context"

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

const Tree: React.FunctionComponent<{ name: string; open?: boolean; to?: string }> = ({
  children,
  name,
  to,
  open = false,
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
      <div onClick={() => hasChildren && setOpen(!isOpen)} className="menu-label">
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
  @media (max-width: 576px) {
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
  return (
    <>
      {open && <Overlay onClick={() => setOpen(false)} />}
      <MobileMenuContainer className={`${open ? "active" : "inactive"}`}>
        <ScrollContainer>
          <Tree name="Accueil" to="asia" />
          <Tree name="Destination" open>
            {(development ? continentLinks : continentLinks.filter(isLinkPublished)).map(continent => {
              const publishedCountries = development ? continent.countries : continent.countries.filter(isLinkPublished)
              return (
                <Tree key={continent.id} name={continent.label}>
                  {publishedCountries.map(country => (
                    <Tree key={country.id} name={country.label} to={country.id} />
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
                    <Tree key={subMenuLink.id} to={to} name={subMenuLink.label}>
                      {subSubMenuLinks.map(subSubMenuLink => (
                        <Tree key={subSubMenuLink.id} to={to} name={subSubMenuLink.label} />
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

import { render } from "@testing-library/react"
import { ApplicationLink } from "./link"
import * as React from "react"
import { ApplicationContext } from "../../application"

describe("link", () => {
  it("should throw error when the link doesnt exist", () => {
    expect(() => render(<ApplicationLink to="foo" />)).toThrow("No link for foo")
  })
  it("should render a link when the article is published and mode is production", () => {
    const { getByText, container } = render(
      <ApplicationContext.Provider value={{ development: false, displayAllArticles: false, displayComments: false }}>
        <ApplicationLink to="contact">Abc</ApplicationLink>
      </ApplicationContext.Provider>
    )
    expect(container.querySelector("a")?.href).toMatch("/contact")
    expect(container.querySelector("span")).toBeNull()
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(getByText("Abc")).toBeTruthy()
  })
  it("should render a link when the article is not published and mode is development", () => {
    const { container, getByText } = render(
      <ApplicationContext.Provider value={{ development: true, displayAllArticles: false, displayComments: false }}>
        <ApplicationLink to="tokyo">Abc</ApplicationLink>
      </ApplicationContext.Provider>
    )
    expect(container.querySelector("a")?.href).toMatch("/asia/japan/tokyo")
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(container.querySelector("span")).toBeTruthy()
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(getByText("Abc")).toBeTruthy()
  })
  it("should render a text when the article is not published and mode is production", () => {
    const { container, getByText } = render(
      <ApplicationContext.Provider value={{ development: false, displayAllArticles: false, displayComments: false }}>
        <ApplicationLink to="tokyo">Abc</ApplicationLink>
      </ApplicationContext.Provider>
    )
    expect(container.querySelector("a")).toBeNull()
    expect(container.querySelector("span")).toBeNull()
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(getByText("Abc")).toBeTruthy()
  })
  it("should render nothing when the article is not published, mode is production and action is hide", () => {
    const { container, queryByText } = render(
      <ApplicationContext.Provider value={{ development: false, displayAllArticles: false, displayComments: false }}>
        <ApplicationLink to="tokyo" action="hide" />
      </ApplicationContext.Provider>
    )
    expect(container.querySelector("a")).toBeNull()
    expect(container.querySelector("span")).toBeNull()
    expect(queryByText("Abc")).toBeNull()
  })
})

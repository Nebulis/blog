import React from "react"
import renderer from "react-test-renderer"
import { SectionContent } from "./section"

describe("sectionContent", () => {
  it("should not add mb2 className when children is only a text string", () => {
    const tree = renderer.create(<SectionContent>aaaa</SectionContent>).toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="f5 css-rrrnrh-SectionContent"
      >
        aaaa
      </div>
    `)
  })
  it("should not add mb2 className on p when it is the last element", () => {
    const tree = renderer
      .create(
        <SectionContent>
          aaaa
          <p>Test</p>
        </SectionContent>
      )
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="f5 css-rrrnrh-SectionContent"
      >
        aaaa
        <p>
          Test
        </p>
      </div>
    `)
  })
  it("should add mb2 className on first p", () => {
    const tree = renderer
      .create(
        <SectionContent>
          <p>Abc</p>
          <p>Test</p>
        </SectionContent>
      )
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="f5 css-rrrnrh-SectionContent"
      >
        <p
          className="mb2 "
        >
          Abc
        </p>
        <p>
          Test
        </p>
      </div>
    `)
  })
  it("should add mb2 className and keep other provided className on first p", () => {
    const tree = renderer
      .create(
        <SectionContent>
          <p className="foo">Abc</p>
          <p>Test</p>
        </SectionContent>
      )
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="f5 css-rrrnrh-SectionContent"
      >
        <p
          className="mb2 foo"
        >
          Abc
        </p>
        <p>
          Test
        </p>
      </div>
    `)
  })
  it("should add mb2 className on all p but last one", () => {
    const tree = renderer
      .create(
        <SectionContent>
          <p>Abc</p>
          <p>345</p>
          <p>678</p>
          <p>Test</p>
        </SectionContent>
      )
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="f5 css-rrrnrh-SectionContent"
      >
        <p
          className="mb2 "
        >
          Abc
        </p>
        <p
          className="mb2 "
        >
          345
        </p>
        <p
          className="mb2 "
        >
          678
        </p>
        <p>
          Test
        </p>
      </div>
    `)
  })
  it("should add mb2 className on first ul", () => {
    const tree = renderer
      .create(
        <SectionContent>
          <ul>Abc</ul>
          <p>Test</p>
        </SectionContent>
      )
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="f5 css-rrrnrh-SectionContent"
      >
        <ul
          className="mb2 "
        >
          Abc
        </ul>
        <p>
          Test
        </p>
      </div>
    `)
  })
})

import { getPathForEnglish, getPathForFrench } from "./utils"

describe("getPathForFrench", () => {
  it("should work when url start with /en", () => {
    expect(getPathForFrench({ pathname: "/en/bla" })).toBe("/bla")
  })
  it("should work when url start is /en", () => {
    expect(getPathForFrench({ pathname: "/en" })).toBe("")
  })
  it("should work when url start is /", () => {
    expect(getPathForFrench({ pathname: "/" })).toBe("/")
  })
  it("should work when url does not start by /en", () => {
    expect(getPathForFrench({ pathname: "/bar" })).toBe("/bar")
  })
})
describe("getPathForEnglish(", () => {
  it("should work when url start with /en", () => {
    expect(getPathForEnglish({ pathname: "/en/bla" })).toBe("/en/bla")
  })
  it("should work when url start is /en", () => {
    expect(getPathForEnglish({ pathname: "/en" })).toBe("/en")
  })
  it("should work when url start is /", () => {
    expect(getPathForEnglish({ pathname: "/" })).toBe("/en/")
  })
  it("should work when url does not start by /en", () => {
    expect(getPathForEnglish({ pathname: "/bar" })).toBe("/en/bar")
  })
})

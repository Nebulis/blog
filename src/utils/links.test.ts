import { continentLinks } from "./links"

describe("links", () => {
  it("it should throw error when 2 elements have the same id", () => {
    const set = new Set<string>()
    let numberOfElements = 0
    continentLinks.forEach(continent => {
      set.add(continent.id)
      numberOfElements++
      continent.countries.forEach(country => {
        set.add(country.id)
        numberOfElements++
        country.cities.forEach(city => {
          set.add(city.id)
          numberOfElements++
          city.highlights.forEach(highlight => {
            set.add(highlight.id)
            numberOfElements++
          })
        })
      })
    })
    expect(set.size).toStrictEqual(numberOfElements)
  })
})

import { getLink } from "./links"

describe("links", () => {
  it("should populate cache", () => {
    // continents assertions
    expect(getLink("asia")).toMatchObject({ label: "Asie", published: true })

    // countries assertions
    expect(getLink("japan")).toMatchObject({ label: "Japon", published: false })

    // japan assertions
    expect(getLink("spring-in-japan")).toMatchObject({ label: "Le Japon au printemps", published: false })
    expect(getLink("transports-in-japan")).toMatchObject({ label: "Transports in Japan", published: false })

    expect(getLink("tokyo")).toMatchObject({ label: "Tokyo", published: false })
    expect(getLink("a-day-in-tokyo")).toMatchObject({ label: "Un jour à Tokyo", published: false })
    expect(getLink("sensoji")).toMatchObject({ label: "Senso-ji", published: false })
    expect(getLink("hamarikyu-garden")).toMatchObject({ label: "Hamarikyu Garden", published: false })

    expect(getLink("kyoto")).toMatchObject({ label: "Kyoto", published: false })
    expect(getLink("arashiyama")).toMatchObject({ label: "Arashiyama", published: false })
    expect(getLink("daigoji")).toMatchObject({ label: "Daigo-ji", published: false })
    expect(getLink("kinkakuji")).toMatchObject({ label: "Kinkakuji", published: false })
    expect(getLink("fushimi-inari-taisha")).toMatchObject({ label: "Fushimi Inari Taisha", published: false })

    expect(getLink("himeji")).toMatchObject({ label: "Himeji", published: false })
    expect(getLink("himeji-castle")).toMatchObject({ label: "Himeji Castle", published: false })

    expect(getLink("fuji")).toMatchObject({ label: "Mt. Fuji", published: false })

    expect(getLink("nagoya")).toMatchObject({ label: "Nagoya", published: false })
    expect(getLink("nagoya-castle")).toMatchObject({ label: "Nagoya Castle", published: false })
    expect(getLink("toganji")).toMatchObject({ label: "Togan-ji", published: false })

    expect.assertions(19)
  })
})

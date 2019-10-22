import { cachedLinks } from "./links"

describe("links", () => {
  it("it should populate cache", () => {
    expect(cachedLinks.size).toStrictEqual(19)
    // continents assertions
    expect(cachedLinks.get("asia")).toMatchObject({ label: "Asie", published: true })

    // countries assertions
    expect(cachedLinks.get("japan")).toMatchObject({ label: "Japon", published: true })

    // japan assertions
    expect(cachedLinks.get("spring-in-japan")).toMatchObject({ label: "Le Japon au printemps", published: false })
    expect(cachedLinks.get("transports-in-japan")).toMatchObject({ label: "Transports in Japan", published: false })

    expect(cachedLinks.get("tokyo")).toMatchObject({ label: "Tokyo", published: false })
    expect(cachedLinks.get("ueno-park")).toMatchObject({ label: "Parc Ueno", published: false })
    expect(cachedLinks.get("senso-ji")).toMatchObject({ label: "Senso-ji", published: false })
    expect(cachedLinks.get("hamarikyu-garden")).toMatchObject({ label: "Hamarikyu Garden", published: false })

    expect(cachedLinks.get("kyoto")).toMatchObject({ label: "Kyoto", published: true })
    expect(cachedLinks.get("arashiyama")).toMatchObject({ label: "Arashiyama", published: true })
    expect(cachedLinks.get("daigo-ji")).toMatchObject({ label: "Daigo-ji", published: false })
    expect(cachedLinks.get("kinkakuji")).toMatchObject({ label: "Kinkakuji", published: false })
    expect(cachedLinks.get("fushimi-inari-taisha")).toMatchObject({ label: "Fushimi Inari Taisha", published: false })

    expect(cachedLinks.get("himeji")).toMatchObject({ label: "Himeji", published: false })
    expect(cachedLinks.get("himeji-castle")).toMatchObject({ label: "Himeji Castle", published: false })

    expect(cachedLinks.get("fuji")).toMatchObject({ label: "Mt. Fuji", published: false })

    expect(cachedLinks.get("nagoya")).toMatchObject({ label: "Nagoya", published: false })
    expect(cachedLinks.get("nagoya-castle")).toMatchObject({ label: "Nagoya Castle", published: false })
    expect(cachedLinks.get("togan-ji")).toMatchObject({ label: "Togan-ji", published: false })

    expect.assertions(20)
  })
})

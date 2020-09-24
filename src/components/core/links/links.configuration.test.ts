import { getCacheSize, getLink } from "./links.configuration"

describe("links", () => {
  it("should populate cache", () => {
    // continents assertions
    expect(getLink("asia")).toMatchObject({ label: "Asie", published: false })
    expect(getLink("oceania")).toMatchObject({ label: "Océanie", published: false })
    expect(getLink("middle-east")).toMatchObject({ label: "Moyen-Orient", published: false })
    expect(getLink("europe")).toMatchObject({ label: "Europe", published: false })
    expect(getLink("africa")).toMatchObject({ label: "Afrique", published: false })
    expect(getLink("north-america")).toMatchObject({ label: "Amérique du Nord", published: false })
    expect(getLink("south-america")).toMatchObject({ label: "Amérique du Sud", published: false })

    // categories assertions
    expect(getLink("spring")).toMatchObject({ label: "Printemps", published: false })
    expect(getLink("summer")).toMatchObject({ label: "Été", published: false })
    expect(getLink("winter")).toMatchObject({ label: "Hiver", published: false })
    expect(getLink("autumn")).toMatchObject({ label: "Automne", published: false })
    expect(getLink("when-to-go")).toMatchObject({ label: "Quand Partir", published: false })
    expect(getLink("organisation")).toMatchObject({ label: "Organisation", published: false })
    expect(getLink("monuments")).toMatchObject({ label: "Monuments", published: false })
    expect(getLink("nature")).toMatchObject({ label: "Nature", published: false })
    expect(getLink("city")).toMatchObject({ label: "Ville", published: false })
    expect(getLink("temples")).toMatchObject({ label: "Temples", published: false })
    expect(getLink("discovery")).toMatchObject({ label: "Découverte", published: false })
    expect(getLink("travelling")).toMatchObject({ label: "Voyage", published: false })
    expect(getLink("living-foreign-country")).toMatchObject({ label: "Vivre à l'étranger", published: false })
    expect(getLink("living-singapore")).toMatchObject({ label: "Vivre à Singapour", published: false })
    expect(getLink("journal")).toMatchObject({ label: "Journal", published: false })
    expect(getLink("who")).toMatchObject({ label: "Qui sommes nous ?", published: true })
    expect(getLink("contact")).toMatchObject({ label: "Contact", published: true })
    expect(getLink("devices")).toMatchObject({ label: "Notre matériel", published: false })
    expect(getLink("about")).toMatchObject({ label: "À propos", published: true })
    expect(getLink("home")).toMatchObject({ label: "home", published: true })
    expect(getLink("articles")).toMatchObject({ label: "articles", published: true })

    // asia countries assertions
    expect(getLink("japan")).toMatchObject({ label: "Japon", published: false })
    expect(getLink("vietnam")).toMatchObject({ label: "Vietnam", published: false })

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
    expect(getLink("lake-kawaguchiko")).toMatchObject({ label: "Lac Kawaguchiko", published: false })

    expect(getLink("nagoya")).toMatchObject({ label: "Nagoya", published: false })
    expect(getLink("nagoya-castle")).toMatchObject({ label: "Nagoya Castle", published: false })
    expect(getLink("toganji")).toMatchObject({ label: "Togan-ji", published: false })

    // vietnam assertions
    expect(getLink("transports-in-vietnam")).toMatchObject({ label: "Transports in Vietnam", published: false })

    expect(getLink("south-vietnam")).toMatchObject({ label: "Sud", published: false })
    expect(getLink("cu-chi-tunnels")).toMatchObject({ label: "Tunnels de Cu-Chi", published: false })

    expect(getLink("north-vietnam")).toMatchObject({ label: "Nord", published: false })

    expect(getLink("central-vietnam")).toMatchObject({ label: "Centre", published: false })

    expect.assertions(getCacheSize())
  })
})

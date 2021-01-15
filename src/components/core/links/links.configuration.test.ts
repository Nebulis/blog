import { getCacheSize, getLink } from "./links.utils"

describe("links", () => {
  it("should populate cache", () => {
    // continents assertions
    expect(getLink("asia")).toMatchObject({ label: { en: "Asia", fr: "Asie" }, published: true })
    expect(getLink("oceania")).toMatchObject({ label: { fr: "Océanie", en: "Oceania" }, published: false })
    expect(getLink("middle-east")).toMatchObject({ label: { fr: "Moyen-Orient", en: "Middle-East" }, published: false })
    expect(getLink("europe")).toMatchObject({ label: { fr: "Europe", en: "Europe" }, published: false })
    expect(getLink("africa")).toMatchObject({ label: { fr: "Afrique", en: "Africa" }, published: false })
    expect(getLink("north-america")).toMatchObject({
      label: { fr: "Amérique du Nord", en: "North America" },
      published: false,
    })
    expect(getLink("south-america")).toMatchObject({
      label: { fr: "Amérique du Sud", en: "South America" },
      published: false,
    })

    // categories assertions
    expect(getLink("spring")).toMatchObject({ label: { en: "Spring", fr: "Printemps" }, published: true })
    expect(getLink("summer")).toMatchObject({ label: { fr: "Été", en: "Summer" }, published: false })
    expect(getLink("winter")).toMatchObject({ label: { fr: "Hiver", en: "Winter" }, published: true })
    expect(getLink("autumn")).toMatchObject({ label: { fr: "Automne", en: "Autumn" }, published: false })
    expect(getLink("when-to-go")).toMatchObject({ label: { fr: "Quand Partir", en: "When to go" }, published: true })
    expect(getLink("organisation")).toMatchObject({
      label: { fr: "Organisation", en: "Organisation" },
      published: true,
    })
    expect(getLink("monuments")).toMatchObject({ label: { fr: "Monuments", en: "Monuments" }, published: false })
    expect(getLink("nature")).toMatchObject({ label: { fr: "Nature", en: "Nature" }, published: false })
    expect(getLink("city")).toMatchObject({ label: { fr: "Ville", en: "City" }, published: false })
    expect(getLink("temples")).toMatchObject({ label: { fr: "Temples", en: "Temples" }, published: false })
    expect(getLink("discovery")).toMatchObject({ label: { fr: "Découverte", en: "Discovery" }, published: false })
    expect(getLink("travelling")).toMatchObject({ label: { fr: "Voyage", en: "Travelling" }, published: false })
    expect(getLink("living-foreign-country")).toMatchObject({
      label: { fr: "Vivre à l'étranger", en: "Living abroad" },
      published: false,
    })
    expect(getLink("living-singapore")).toMatchObject({
      label: { fr: "Vivre à Singapour", en: "Living in Singapore" },
      published: false,
    })
    expect(getLink("journal")).toMatchObject({ label: { fr: "Journal", en: "Journal" }, published: false })
    expect(getLink("who")).toMatchObject({ label: { fr: "Qui sommes nous ?", en: "Who are we ?" }, published: true })
    expect(getLink("contact")).toMatchObject({ label: { fr: "Contact", en: "Contact" }, published: true })
    expect(getLink("devices")).toMatchObject({ label: { fr: "Notre matériel", en: "Our devices" }, published: false })
    expect(getLink("about")).toMatchObject({ label: { fr: "À propos", en: "About" }, published: true })
    expect(getLink("home")).toMatchObject({ label: { en: "Home", fr: "Accueil" }, published: true })
    expect(getLink("articles")).toMatchObject({ label: { fr: "Articles", en: "Articles" }, published: true })
    expect(getLink("404")).toMatchObject({ label: { fr: "404", en: "404" }, published: true })

    // asia countries assertions
    expect(getLink("cambodia")).toMatchObject({ label: { fr: "Cambodge", en: "Cambodia" }, published: false })
    expect(getLink("japan")).toMatchObject({ label: { fr: "Japon", en: "Japan" }, published: false })
    expect(getLink("vietnam")).toMatchObject({ label: { fr: "Vietnam", en: "Vietnam" }, published: true })
    expect(getLink("philippines")).toMatchObject({ label: { fr: "Philippines", en: "Philippines" }, published: true })

    // japan assertions
    expect(getLink("spring-in-japan")).toMatchObject({
      label: { fr: "Le Japon au printemps", en: "Spring in Japan" },
      published: false,
    })
    expect(getLink("transports-in-japan")).toMatchObject({
      label: { en: "Transports", fr: "Transports" },
      published: false,
    })

    expect(getLink("tokyo")).toMatchObject({ label: { fr: "Tokyo", en: "Tokyo" }, published: false })
    expect(getLink("a-day-in-tokyo")).toMatchObject({
      label: { fr: "Un jour à Tokyo", en: "A day in Tokyo" },
      published: false,
    })
    expect(getLink("sensoji")).toMatchObject({ label: { fr: "Senso-ji", en: "Senso-ji" }, published: false })
    expect(getLink("hamarikyu-garden")).toMatchObject({
      label: { en: "Hamarikyu Garden", fr: "Jardins de Hamarikyu" },
      published: false,
    })

    expect(getLink("kyoto")).toMatchObject({ label: { fr: "Kyoto", en: "Kyoto" }, published: false })
    expect(getLink("arashiyama")).toMatchObject({ label: { fr: "Arashiyama", en: "Arashiyama" }, published: false })
    expect(getLink("daigoji")).toMatchObject({ label: { fr: "Daigo-ji", en: "Daigo-ji" }, published: false })
    expect(getLink("kinkakuji")).toMatchObject({ label: { fr: "Kinkaku-ji", en: "Kinkaku-ji" }, published: false })
    expect(getLink("fushimi-inari-taisha")).toMatchObject({
      label: { fr: "Fushimi Inari-taisha", en: "Fushimi Inari-taisha" },
      published: false,
    })

    expect(getLink("himeji")).toMatchObject({ label: { fr: "Himeji", en: "Himeji" }, published: false })
    expect(getLink("himeji-castle")).toMatchObject({
      label: { en: "Himeji Castle", fr: "Château de Himeji" },
      published: false,
    })

    expect(getLink("fuji")).toMatchObject({ label: { en: "Mt. Fuji", fr: "Mt. Fuji" }, published: false })
    expect(getLink("lake-kawaguchiko")).toMatchObject({
      label: { fr: "Lac Kawaguchiko", en: "Kawaguchiko Lake" },
      published: false,
    })

    expect(getLink("nagoya")).toMatchObject({ label: { fr: "Nagoya", en: "Nagoya" }, published: false })
    expect(getLink("nagoya-castle")).toMatchObject({
      label: { en: "Nagoya Castle", fr: "Château de Nagoya" },
      published: false,
    })
    expect(getLink("toganji")).toMatchObject({ label: { fr: "Togan-ji", en: "Togan-ji" }, published: false })

    // vietnam assertions
    expect(getLink("transports-in-vietnam")).toMatchObject({
      label: { fr: "Transports", en: "Transports" },
      published: false,
    })

    // southern vietnam
    expect(getLink("southern-vietnam")).toMatchObject({ label: { fr: "Sud", en: "Southern" }, published: true })
    expect(getLink("cu-chi-tunnels")).toMatchObject({
      label: { fr: "Tunnels de Củ Chi", en: "Củ Chi tunnels" },
      published: false,
    })
    expect(getLink("my-tho")).toMatchObject({
      label: { fr: "Mỹ Tho", en: "Mỹ Tho" },
      published: false,
    })
    expect(getLink("can-tho")).toMatchObject({
      label: { fr: "Cân Thơ", en: "Cân Thơ" },
      published: false,
    })
    expect(getLink("ho-chi-minh-war-museum")).toMatchObject({
      label: {
        en: "War Remnants Museum in Ho Chi Minh City",
        fr: "Musée des Vestiges de Guerre à Hô Chi Minh-Ville",
      },
      published: false,
    })
    expect(getLink("discover-southern-vietnam")).toMatchObject({
      label: { fr: "Découverte du Vietnam du Sud", en: "Discover Southern Vietnam" },
      published: true,
    })

    expect(getLink("northern-vietnam")).toMatchObject({ label: { fr: "Nord", en: "Northern" }, published: false })

    expect(getLink("central-vietnam")).toMatchObject({ label: { fr: "Centre", en: "Central" }, published: false })

    // philippines assertions
    expect(getLink("el-nido")).toMatchObject({ label: { fr: "El Nido", en: "El Nido" }, published: true })
    expect(getLink("el-nido-paradise")).toMatchObject({
      label: { fr: "El Nido : Un petit coin de Paradis", en: "El Nido: A little paradise" },
      published: true,
    })
    expect(getLink("el-nido-which-tour")).toMatchObject({
      label: { en: "Bacuit Archipelago: Which tour to choose?", fr: "Archipel de Bacuit : Quel tour choisir ?" },
      published: false,
    })

    // cambodia assertions
    expect(getLink("s-21-prison")).toMatchObject({
      label: { en: "Tuol Sleng Genocide Museum", fr: "Musée du génocide Tuol Sleng" },
      published: false,
    })

    expect.assertions(getCacheSize())
  })
})

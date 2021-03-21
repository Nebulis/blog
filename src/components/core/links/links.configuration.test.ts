import { getCacheSize, getLink } from "./links.utils"

const continentsLinks = () => {
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
}

const categoriesLinks = () => {
  // categories assertions
  expect(getLink("spring")).toMatchObject({ label: { en: "Spring", fr: "Printemps" }, published: true })
  expect(getLink("summer")).toMatchObject({ label: { fr: "Été", en: "Summer" }, published: false })
  expect(getLink("winter")).toMatchObject({ label: { fr: "Hiver", en: "Winter" }, published: true })
  expect(getLink("autumn")).toMatchObject({ label: { fr: "Automne", en: "Autumn" }, published: true })
  expect(getLink("when-to-go")).toMatchObject({ label: { fr: "Quand Partir", en: "When to go" }, published: true })
  expect(getLink("prepare")).toMatchObject({ label: { fr: "Prepare", en: "Prepare" }, published: false })
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
  expect(getLink("who")).toMatchObject({ label: { fr: "Qui sommes nous ?", en: "About us?" }, published: true })
  expect(getLink("contact")).toMatchObject({ label: { fr: "Contact", en: "Contact" }, published: true })
  expect(getLink("devices")).toMatchObject({ label: { fr: "Notre matériel", en: "Our devices" }, published: false })
  expect(getLink("about")).toMatchObject({ label: { fr: "À propos", en: "About" }, published: true })
  expect(getLink("home")).toMatchObject({ label: { en: "Home", fr: "Accueil" }, published: true })
  expect(getLink("articles")).toMatchObject({ label: { fr: "Articles", en: "Articles" }, published: true })
  expect(getLink("404")).toMatchObject({ label: { fr: "404", en: "404" }, published: true })
}

const southAmericaLinks = () => {
  // south-america countries assertions
  expect(getLink("caribbean")).toMatchObject({ label: { fr: "Caraibes", en: "Caraibes" }, published: false })
}

const europeLinks = () => {
  // europe countries assertions
  expect(getLink("azores")).toMatchObject({ label: { fr: "Acores", en: "Azores" }, published: false })
}

const asiaLinks = () => {
  // asia countries assertions
  expect(getLink("china")).toMatchObject({ label: { fr: "Chine", en: "China" }, published: false })
  expect(getLink("laos")).toMatchObject({ label: { fr: "Laos", en: "Laos" }, published: false })
  expect(getLink("thailand")).toMatchObject({ label: { fr: "Thaïlande", en: "Thailand" }, published: false })
  expect(getLink("myanmar")).toMatchObject({ label: { fr: "Birmanie", en: "Myanmar" }, published: false })
  expect(getLink("cambodia")).toMatchObject({ label: { fr: "Cambodge", en: "Cambodia" }, published: false })
  expect(getLink("indonesia")).toMatchObject({ label: { fr: "Indonésie", en: "Indonesia" }, published: false })
  expect(getLink("japan")).toMatchObject({ label: { fr: "Japon", en: "Japan" }, published: true })
  expect(getLink("vietnam")).toMatchObject({ label: { fr: "Vietnam", en: "Vietnam" }, published: true })
  expect(getLink("philippines")).toMatchObject({ label: { fr: "Philippines", en: "Philippines" }, published: true })
}

const japanLinks = () => {
  // japan assertions
  expect(getLink("spring-in-japan")).toMatchObject({
    label: { fr: "Le Japon au printemps : Au milieu des Sakuras", en: "Spring In Japan: Under the Sakuras" },
    published: true,
  })
  expect(getLink("transport-japan")).toMatchObject({
    label: { en: "Transports", fr: "Transports" },
    published: false,
  })

  expect(getLink("tokyo")).toMatchObject({ label: { fr: "Tokyo", en: "Tokyo" }, published: false })
  expect(getLink("two-days-in-tokyo")).toMatchObject({
    label: { en: "Two Days In Tokyo", fr: "Deux journées à Tokyo" },
    published: false,
  })
  expect(getLink("shibuya-district")).toMatchObject({
    label: { en: "Tokyo : The crazy Shibuya district", fr: "Tokyo : Le quartier déjanté de Shibuya" },
    published: false,
  })
  expect(getLink("ueno-park")).toMatchObject({
    label: {
      en: "Ueno Park in Tokyo: The meeting place of Sakuras",
      fr: "Parc Ueno à Tokyo : Le rendez-vous des Sakuras",
    },
    published: false,
  })
  expect(getLink("yasukuni-dori")).toMatchObject({
    label: {
      en: "Yasukuni-Dori: The street of a thousand lights in Shinjuku",
      fr: "Yasukuni-Dori : La rue aux milles lumières de Shinjuku",
    },
    published: false,
  })
  expect(getLink("sensoji")).toMatchObject({
    label: { fr: "Sensō-ji, le plus vieux temple de Tokyo", en: "Sensō-ji,the oldest Temple in Tokyo" },
    published: false,
  })
  expect(getLink("hamarikyu-garden")).toMatchObject({
    label: {
      en: "Hamarikyu Gardens : A Haven of Peace in the Middle of Tokyo",
      fr: "Jardin Hama-Rikyu : Un havre de paix en plein Tokyo",
    },
    published: false,
  })

  expect(getLink("kyoto")).toMatchObject({ label: { fr: "Kyoto", en: "Kyoto" }, published: false })
  expect(getLink("arashiyama")).toMatchObject({
    label: { en: "Arashiyama Bamboo Forest", fr: "Forêt de Bambous d'Arashiyama" },
    published: false,
  })
  expect(getLink("daigoji")).toMatchObject({
    label: { en: "Daigo-ji Temple", fr: "Temple Daigo-ji" },
    published: false,
  })
  expect(getLink("kinkakuji")).toMatchObject({
    label: { en: "Kinkaku-ji Temple", fr: "Temple de Kinkaku-ji" },
    published: false,
  })
  expect(getLink("fushimi-inari-taisha")).toMatchObject({
    label: { fr: "Fushimi Inari-Taisha", en: "Fushimi Inari-Taisha" },
    published: false,
  })

  expect(getLink("himeji")).toMatchObject({ label: { fr: "Himeji", en: "Himeji" }, published: false })
  expect(getLink("himeji-castle")).toMatchObject({
    label: { en: "Himeji Castle", fr: "Château de Himeji" },
    published: false,
  })

  expect(getLink("fuji")).toMatchObject({ label: { en: "Mt. Fuji", fr: "Mt. Fuji" }, published: false })
  expect(getLink("kawaguchiko-lake")).toMatchObject({
    label: { fr: "Lac Kawaguchi : La vue sur le Mont Fuji", en: "Kawaguchi Lake: View of Mount Fuji" },
    published: false,
  })

  expect(getLink("nagoya")).toMatchObject({ label: { fr: "Nagoya", en: "Nagoya" }, published: false })
  expect(getLink("nagoya-castle")).toMatchObject({
    label: { en: "Nagoya Castle", fr: "Château de Nagoya" },
    published: false,
  })
  expect(getLink("toganji")).toMatchObject({
    label: { en: "Togan-Ji Temple", fr: "Temple Togan-Ji" },
    published: false,
  })
  expect(getLink("nijo-castle")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("kiyomizu-dera")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("tokugawaen-garden")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
}

const vietnamLinks = () => {
  // vietnam assertions
  expect(getLink("transport-vietnam")).toMatchObject({
    label: { fr: "Les Transports au Vietnam", en: "Transports in Vietnam" },
    published: true,
  })
  expect(getLink("food-vietnam")).toMatchObject({
    label: { fr: "Nos coups de cœur culinaires du Vietnam", en: "Our Vietnamese Food Favorites" },
    published: false,
  })
  expect(getLink("prepare-vietnam")).toMatchObject({
    label: { en: "Prepare your travel to Vietnam", fr: "Préparer son voyage au Vietnam" },
    published: true,
  })

  // southern vietnam
  expect(getLink("southern-vietnam")).toMatchObject({ label: { fr: "Sud", en: "Southern" }, published: true })
  expect(getLink("phu-quoc-island")).toMatchObject({ label: { fr: "", en: "" }, published: false })
  expect(getLink("ho-chi-minh-city")).toMatchObject({
    label: { en: "Ho Chi Minh City", fr: "Hô Chi Minh-Ville" },
    published: false,
  })
  expect(getLink("cu-chi-tunnels")).toMatchObject({
    label: { fr: "Tunnels de Củ Chi", en: "Củ Chi tunnels" },
    published: true,
  })
  expect(getLink("my-tho")).toMatchObject({
    label: { fr: "Mỹ Tho", en: "Mỹ Tho" },
    published: true,
  })
  expect(getLink("can-tho")).toMatchObject({
    label: { fr: "Cân Thơ", en: "Cân Thơ" },
    published: true,
  })
  expect(getLink("ho-chi-minh-war-museum")).toMatchObject({
    label: {
      en: "War Remnants Museum in Ho Chi Minh City",
      fr: "Musée des Vestiges de Guerre à Hô Chi Minh-Ville",
    },
    published: true,
  })
  expect(getLink("discover-southern-vietnam")).toMatchObject({
    label: { fr: "Découverte du Vietnam du Sud", en: "Discover Southern Vietnam" },
    published: true,
  })

  expect(getLink("northern-vietnam")).toMatchObject({ label: { fr: "Nord", en: "Northern" }, published: false })
  expect(getLink("halong-bay")).toMatchObject({
    label: { en: "Halong Bay", fr: "Baie de Halong" },
    published: false,
  })

  expect(getLink("central-vietnam")).toMatchObject({ label: { fr: "Centre", en: "Central" }, published: false })
  expect(getLink("hoi-an")).toMatchObject({
    label: { fr: "Hoi An", en: "Hoi An" },
    published: false,
  })
}

const philippinesLinks = () => {
  // philippines assertions
  expect(getLink("boracay")).toMatchObject({ label: { fr: "Boracay", en: "Boracay" }, published: false })
  expect(getLink("coron-island")).toMatchObject({
    label: { fr: "Coron Island", en: "Coron Island" },
    published: false,
  })
  expect(getLink("manilla")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })

  expect(getLink("el-nido")).toMatchObject({ label: { fr: "El Nido", en: "El Nido" }, published: true })
  expect(getLink("el-nido-paradise")).toMatchObject({
    label: { fr: "El Nido : Un petit coin de Paradis", en: "El Nido: A little paradise" },
    published: true,
  })
  expect(getLink("el-nido-which-tour")).toMatchObject({
    label: { en: "Bacuit Archipelago: Which tour to choose?", fr: "Archipel de Bacuit : Quel tour choisir ?" },
    published: true,
  })
  expect(getLink("el-nido-tour-a")).toMatchObject({
    label: { en: "El Nido - Tour A: Travelogue and Photos", fr: "El Nido - Tour A : Récit et Photos" },
    published: true,
  })
  expect(getLink("el-nido-tour-b")).toMatchObject({
    label: { en: "El Nido - Tour B: Travelogue and Photos", fr: "El Nido - Tour B : Récit et Photos" },
    published: true,
  })
  expect(getLink("el-nido-tour-c")).toMatchObject({
    label: { en: "Tour C", fr: "Tour C" },
    published: false,
  })
  expect(getLink("el-nido-tour-d")).toMatchObject({
    label: { en: "Tour D", fr: "Tour D" },
    published: false,
  })
}

describe("links", () => {
  it("should populate cache", () => {
    continentsLinks()
    categoriesLinks()
    southAmericaLinks()
    europeLinks()
    asiaLinks()
    japanLinks()
    vietnamLinks()
    philippinesLinks()

    // cambodia assertions
    expect(getLink("s-21-prison")).toMatchObject({
      label: { en: "Tuol Sleng Genocide Museum", fr: "Musée du génocide Tuol Sleng" },
      published: false,
    })
    expect(getLink("kampong-phluk")).toMatchObject({
      label: { en: "Kampong Phluk Floating Village", fr: "Village flottant de Kampong Phluk" },
      published: false,
    })

    // indonesia assertions
    expect(getLink("bali")).toMatchObject({
      label: { en: "Bali", fr: "Bali" },
      published: false,
    })

    // other
    expect(getLink("green-pomelo")).toMatchObject({
      label: { en: "Green pomelo", fr: "Green pomelo" },
      published: false,
    })

    expect.assertions(getCacheSize())
  })
})

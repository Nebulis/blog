import { getCacheSize, getLink as outerGetLink } from "./links.utils"

const set = new Set<string>()
const getLink = (id: string) => {
  if (set.has(id)) throw new Error(`Can only expect ${id} once`)
  set.add(id)
  return outerGetLink(id)
}

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
  expect(getLink("monuments")).toMatchObject({ label: { fr: "Monuments", en: "Monuments" }, published: true })
  expect(getLink("nature")).toMatchObject({ label: { fr: "Nature", en: "Nature" }, published: true })
  expect(getLink("cities")).toMatchObject({ label: { fr: "Ville", en: "City" }, published: true })
  expect(getLink("animals")).toMatchObject({ label: { fr: "Animaux", en: "Animals" }, published: false })
  expect(getLink("winter-activities")).toMatchObject({
    label: { en: "Winter activities", fr: "Activités hivernales" },
    published: true,
  })
  expect(getLink("water-activities")).toMatchObject({
    label: { en: "Water activities", fr: "Activités nautiques" },
    published: true,
  })
  expect(getLink("beach-holidays")).toMatchObject({
    label: { fr: "Vacances farniente", en: "Beach Holidays" },
    published: true,
  })
  expect(getLink("discovery")).toMatchObject({ label: { fr: "Découverte", en: "Discovery" }, published: true })
  expect(getLink("travelling")).toMatchObject({ label: { fr: "Voyage", en: "Travelling" }, published: false })
  expect(getLink("living-abroad")).toMatchObject({
    label: { fr: "Vivre à l'étranger", en: "Living abroad" },
    published: true,
  })
  expect(getLink("living-singapore")).toMatchObject({
    label: { fr: "Vivre à Singapour", en: "Living in Singapore" },
    published: false,
  })
  expect(getLink("journal")).toMatchObject({ label: { fr: "Journal", en: "Journal" }, published: true })
  journalLinks()
  expect(getLink("who")).toMatchObject({ label: { fr: "Qui sommes nous ?", en: "About us?" }, published: true })
  expect(getLink("contact")).toMatchObject({ label: { fr: "Contact", en: "Contact" }, published: true })
  expect(getLink("devices")).toMatchObject({ label: { fr: "Notre matériel", en: "Our devices" }, published: false })
  expect(getLink("about")).toMatchObject({ label: { fr: "À propos", en: "About" }, published: true })
  expect(getLink("home")).toMatchObject({ label: { en: "Home", fr: "Accueil" }, published: true })
  expect(getLink("articles")).toMatchObject({ label: { fr: "Articles", en: "Articles" }, published: true })
  expect(getLink("404")).toMatchObject({ label: { fr: "404", en: "404" }, published: true })
}

const journalLinks = () => {
  expect(getLink("moving-abroad-why")).toMatchObject({
    label: { fr: "Vivre à l’étranger : Pourquoi ?", en: "Moving abroad: Why?" },
    published: true,
  })
  expect(getLink("living-abroad-where")).toMatchObject({
    label: { fr: "Vivre à l’étranger : Oui mais où ?", en: "Living abroad: Where?" },
    published: true,
  })
}

const northAmericaLinks = () => {
  // north-america countries assertions
  expect(getLink("united-states")).toMatchObject({ label: { fr: "États-Unis", en: "United States" }, published: false })
  expect(getLink("canada")).toMatchObject({ label: { fr: "", en: "" }, published: false })
  expect(getLink("times-square")).toMatchObject({ label: { fr: "Times Square", en: "Times Square" }, published: false })
}
const southAmericaLinks = () => {
  // south-america countries assertions
  expect(getLink("caribbean")).toMatchObject({ label: { fr: "Caraibes", en: "Caraibes" }, published: false })
}

const europeLinks = () => {
  // europe countries assertions
  expect(getLink("azores")).toMatchObject({ label: { fr: "Acores", en: "Azores" }, published: false })
  expect(getLink("iceland")).toMatchObject({ label: { fr: "", en: "" }, published: false })
  expect(getLink("russia")).toMatchObject({ label: { fr: "", en: "" }, published: false })
  expect(getLink("france")).toMatchObject({ label: { fr: "", en: "" }, published: false })
  expect(getLink("paris")).toMatchObject({ label: { fr: "", en: "" }, published: false })
}

const asiaLinks = () => {
  // asia countries assertions
  expect(getLink("china")).toMatchObject({ label: { fr: "Chine", en: "China" }, published: false })
  expect(getLink("laos")).toMatchObject({ label: { fr: "Laos", en: "Laos" }, published: false })
  expect(getLink("thailand")).toMatchObject({ label: { fr: "Thaïlande", en: "Thailand" }, published: false })
  expect(getLink("myanmar")).toMatchObject({ label: { fr: "Birmanie", en: "Myanmar" }, published: false })
  expect(getLink("cambodia")).toMatchObject({ label: { fr: "Cambodge", en: "Cambodia" }, published: false })
  expect(getLink("india")).toMatchObject({ label: { fr: "Inde", en: "India" }, published: false })
  expect(getLink("indonesia")).toMatchObject({ label: { fr: "Indonésie", en: "Indonesia" }, published: false })
  expect(getLink("japan")).toMatchObject({ label: { fr: "Japon", en: "Japan" }, published: true })
  expect(getLink("vietnam")).toMatchObject({ label: { fr: "Vietnam", en: "Vietnam" }, published: true })
  expect(getLink("philippines")).toMatchObject({ label: { fr: "Philippines", en: "Philippines" }, published: true })
  expect(getLink("malaysia")).toMatchObject({ label: { fr: "Malaisie", en: "Malaysia" }, published: false })
  expect(getLink("taiwan")).toMatchObject({ label: { fr: "Taiwan", en: "Taiwan" }, published: false })
  expect(getLink("singapore")).toMatchObject({ label: { fr: "Singapour", en: "Singapore" }, published: false })
}
const oceaniaLinks = () => {
  expect(getLink("australia")).toMatchObject({ label: { fr: "Australie", en: "Australia" }, published: false })
}
const australiaLinks = () => {
  expect(getLink("queensland")).toMatchObject({ label: { fr: "Queensland", en: "Queensland" }, published: false })
  expect(getLink("northern-territory")).toMatchObject({
    label: { fr: "Territoire du Nord", en: "Northern Territory" },
    published: false,
  })
  expect(getLink("outback")).toMatchObject({ label: { fr: "Outback", en: "Outback" }, published: false })
  expect(getLink("kuranda")).toMatchObject({ label: { fr: "", en: "" }, published: false })
}

const japanLinks = () => {
  // japan assertions
  expect(getLink("spring-in-japan")).toMatchObject({
    label: { fr: "Le Japon au printemps : Au milieu des Sakuras", en: "Spring In Japan: Under the Sakuras" },
    published: true,
  })
  expect(getLink("transports-in-japan")).toMatchObject({
    label: { en: "All you need to know about transportation in Japan", fr: "Tout savoir sur les transports au Japon" },
    published: true,
  })
  expect(getLink("customs-in-japan")).toMatchObject({
    label: { en: "Customs to know before visiting Japan", fr: "Coutumes à connaître avant de vous rendre au Japon" },
    published: true,
  })
  expect(getLink("prepare-japan")).toMatchObject({
    label: { en: "Prepare your travel to Japan", fr: "Bien préparer son voyage au Japon" },
    published: true,
  })

  expect(getLink("tokyo")).toMatchObject({ label: { fr: "Tokyo", en: "Tokyo" }, published: true })
  expect(getLink("two-days-in-tokyo")).toMatchObject({
    label: { en: "Two Days In Tokyo", fr: "Deux journées à Tokyo" },
    published: true,
  })
  expect(getLink("shibuya-district")).toMatchObject({
    label: { en: "Tokyo: The crazy Shibuya district", fr: "Tokyo : Le quartier déjanté de Shibuya" },
    published: true,
  })
  expect(getLink("ueno-park")).toMatchObject({
    label: {
      en: "Ueno Park in Tokyo: The meeting place of Sakuras",
      fr: "Parc Ueno à Tokyo : Le rendez-vous des Sakuras",
    },
    published: true,
  })
  expect(getLink("yasukuni-dori")).toMatchObject({
    label: {
      en: "Yasukuni-Dori: The street of a thousand lights in Shinjuku",
      fr: "Yasukuni-Dori : La rue aux milles lumières de Shinjuku",
    },
    published: true,
  })
  expect(getLink("shinjuku-gyoen-national-garden")).toMatchObject({
    label: {
      en: "",
      fr: "",
    },
    published: false,
  })
  expect(getLink("sensoji")).toMatchObject({
    label: { fr: "Sensō-ji, le plus vieux temple de Tokyo", en: "Sensō-ji, the oldest Temple in Tokyo" },
    published: true,
  })
  expect(getLink("hamarikyu-garden")).toMatchObject({
    label: {
      en: "Hamarikyu Gardens : A Haven of Peace in the Middle of Tokyo",
      fr: "Jardin Hama-Rikyu : Un havre de paix en plein Tokyo",
    },
    published: true,
  })

  expect(getLink("kyoto")).toMatchObject({ label: { fr: "Kyoto", en: "Kyoto" }, published: true })
  expect(getLink("arashiyama")).toMatchObject({
    label: { en: "Kyoto: Arashiyama Bamboo Forest", fr: "Kyoto : La forêt de Bambous d'Arashiyama" },
    published: true,
  })
  expect(getLink("daigoji")).toMatchObject({
    label: {
      en: "Daigo-ji : Cherry Blossom Spot in Kyoto",
      fr: "Daigo-ji : La carte postale des cerisiers en fleurs de Kyoto",
    },
    published: true,
  })
  expect(getLink("kinkakuji")).toMatchObject({
    label: { en: "Kinkaku-Ji: The Golden Temple of Kyoto", fr: "Kinkaku-ji : Le temple doré de Kyoto" },
    published: true,
  })
  expect(getLink("fushimi-inari-taisha")).toMatchObject({
    label: {
      fr: "Fushimi Inari-Taisha : Le chemin des milles Torii à Kyoto",
      en: "Fushimi Inari-Taisha: The Thousand Torii Trail in Kyoto",
    },
    published: true,
  })

  expect(getLink("himeji")).toMatchObject({ label: { fr: "Himeji", en: "Himeji" }, published: true })
  expect(getLink("himeji-castle")).toMatchObject({
    label: { en: "The magnificent white Himeji Castle", fr: "Le magnifique château blanc de Himeji" },
    published: true,
  })

  expect(getLink("fuji")).toMatchObject({ label: { en: "Mt. Fuji", fr: "Mt. Fuji" }, published: true })
  expect(getLink("kawaguchiko-lake")).toMatchObject({
    label: { fr: "Lac Kawaguchi : La vue sur le Mont Fuji", en: "Kawaguchi Lake: View of Mount Fuji" },
    published: true,
  })

  expect(getLink("nagoya")).toMatchObject({ label: { fr: "Nagoya", en: "Nagoya" }, published: true })
  expect(getLink("nagoya-castle")).toMatchObject({
    label: { en: "The second life of Nagoya Castle", fr: "La seconde vie du château de Nagoya" },
    published: true,
  })
  expect(getLink("toganji")).toMatchObject({
    label: {
      en: "Nagoya : Togan-Ji Temple and its Huge Buddha",
      fr: "Nagoya : Le temple Togan-Ji et son grand Bouddha",
    },
    published: true,
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
  expect(getLink("koko-en-garden")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("food-in-japan")).toMatchObject({
    label: {
      en: "What to eat in Japan? Discover 10 famous Japanese food",
      fr: "Que mange-t-on au Japon ? 10 spécialités culinaires à découvrir",
    },
    published: true,
  })
  expect(getLink("osaka-castle")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("winter-in-japan")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("autumn-in-japan")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("tenryuji")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("hogonin")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("arashiyama-monkey-park")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("arashiyama-kimono-forest")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("arashiyama-katsura-river")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("togetsukyo-bridge")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("kameyama-park")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("jojakkoji")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("ginkakuji")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("mount-fuji-ascent")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("aokigahara-forest")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("chureito-pagoda")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("osaka")).toMatchObject({
    label: { en: "Osaka", fr: "Osaka" },
    published: false,
  })
  expect(getLink("nara")).toMatchObject({
    label: { en: "Nara", fr: "Nara" },
    published: false,
  })
  expect(getLink("okinawa")).toMatchObject({
    label: { en: "Okinawa", fr: "Okinawa" },
    published: false,
  })
  expect(getLink("biwa-lake")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("towada-lake")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("ashinoko-lake")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("ogasawara")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("hokkaido")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("kyushu")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
}

const vietnamLinks = () => {
  // vietnam assertions
  expect(getLink("transport-vietnam")).toMatchObject({
    label: {
      fr: "Tout savoir sur les transports au Vietnam",
      en: "All you need to know about transportation in Vietnam",
    },
    published: true,
  })
  expect(getLink("food-vietnam")).toMatchObject({
    label: { fr: "Nos coups de cœur culinaires du Vietnam", en: "Our Vietnamese Food Favorites" },
    published: false,
  })
  expect(getLink("prepare-vietnam")).toMatchObject({
    label: { en: "Prepare your travel to Vietnam", fr: "Bien préparer son voyage au Vietnam" },
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
    label: { fr: "Histoire du Vietnam : Visite des tunnels de Cu Chi", en: "History of Vietnam: Củ Chi tunnels visit" },
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
      en: "History of Vietnam: War Remnants Museum",
      fr: "Histoire du Vietnam : Le Musée des Vestiges de Guerre",
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

const indonesiaLinks = () => {
  expect(getLink("sumatra")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("tapanuli")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
}
const malaysiaLinks = () => {
  expect(getLink("west-malaysia")).toMatchObject({
    label: { en: "West", fr: "Occidentale" },
    published: false,
  })
  expect(getLink("east-malaysia")).toMatchObject({
    label: { en: "East", fr: "Orientale" },
    published: false,
  })
  expect(getLink("semenggoh-nature-reserve")).toMatchObject({
    label: {
      en: "Semenggoh Nature Reserve: Meeting Orangutans",
      fr: "Réserve naturelle de Semenggoh : À la rencontre des Orangs-Outans de Bornéo",
    },
    published: false,
  })
  expect(getLink("bako-national-park")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("kuching")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("sepilok")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
  expect(getLink("labuk-kay")).toMatchObject({
    label: { en: "", fr: "" },
    published: false,
  })
}

describe("links", () => {
  // eslint-disable-next-line jest/no-hooks
  beforeAll(() => {
    set.clear()
  })
  it("should populate cache", () => {
    continentsLinks()
    categoriesLinks()
    southAmericaLinks()
    northAmericaLinks()
    europeLinks()
    asiaLinks()
    oceaniaLinks()
    japanLinks()
    vietnamLinks()
    philippinesLinks()
    malaysiaLinks()
    indonesiaLinks()
    australiaLinks()

    // cambodia assertions
    expect(getLink("s-21-prison")).toMatchObject({
      label: { en: "Tuol Sleng Genocide Museum", fr: "Musée du génocide Tuol Sleng" },
      published: false,
    })
    expect(getLink("kampong-phluk")).toMatchObject({
      label: { en: "Kampong Phluk Floating Village", fr: "Village flottant de Kampong Phluk" },
      published: false,
    })
    expect(getLink("angkor-wat")).toMatchObject({
      label: { en: "", fr: "" },
      published: false,
    })
    expect(getLink("phnom-penh")).toMatchObject({
      label: { en: "Phnom Penh", fr: "Phnom Penh" },
      published: false,
    })
    expect(getLink("siem-reap")).toMatchObject({
      label: { en: "Siem Reap", fr: "Siem Reap" },
      published: false,
    })

    // indonesia assertions
    expect(getLink("bali")).toMatchObject({
      label: { en: "Bali", fr: "Bali" },
      published: false,
    })
    expect(getLink("ubud-monkey-park")).toMatchObject({
      label: { en: "", fr: "" },
      published: false,
    })
    expect(getLink("komodo-island")).toMatchObject({
      label: { en: "Komodo", fr: "Komodo" },
      published: false,
    })

    // other
    expect(getLink("green-pomelo")).toMatchObject({
      label: { en: "Green pomelo", fr: "Green pomelo" },
      published: false,
    })
    expect(getLink("orangutan")).toMatchObject({
      label: { en: "", fr: "" },
      published: false,
    })

    expect.assertions(getCacheSize())
  })
})

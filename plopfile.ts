import { NodePlopAPI } from "plop"

const uppercase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)

export default function (plop: NodePlopAPI) {
  // controller generator
  plop.setGenerator("page", {
    description: "create new page",
    prompts: [
      {
        type: "input",
        name: "pagePath",
        message: "page path",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pagePath}}.tsx",
        templateFile: "templates/page.hbs",
      },
      {
        type: "add",
        path: "src/locales/fr/{{pagePath}}.json",
        templateFile: "templates/translation.hbs",
      },
      {
        type: "add",
        path: "src/locales/en/{{pagePath}}.json",
        templateFile: "templates/translation.hbs",
      },
      {
        type: "add",
        path: "src/components/images/{{pagePath}}.tsx",
        templateFile: "templates/image.hbs",
      },
    ],
  })
  plop.setHelper("upPath", function (text: string) {
    return "../".repeat(text.split("/").length)
  })
  plop.setHelper("upPathImage", function (text: string) {
    return "../".repeat(text.split("/").length + 1)
  })
  plop.setHelper("getContinent", function (text: string) {
    return text.split("/")[0]
  })
  plop.setHelper("getCountry", function (text: string) {
    return text.split("/")[1]
  })
  plop.setHelper("getComponentImageName", function (text: string) {
    const parts = text.split("/")
    const unformattedName = parts[parts.length - 1]
    const nameParts = unformattedName.split("-")
    return nameParts.map(uppercase).join("")
  })
  // plop.setHelper("getId", function (text: string) {
  // problem to load cachedLinks
  //   const test = "asia/vietnam/southern-vietnam/discover"
  //   for (const [id, link] of cachedLinks.entries()) {
  //     if (link.url === test) {
  //       return id
  //     }
  //   }
  //   return "TODO"
  // })
  plop.setHelper("uppercase", uppercase)
}

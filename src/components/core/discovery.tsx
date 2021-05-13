import { SharedAsiaImages } from "../images/asia/shared-asia-images"
import { SharedOceaniaImages } from "../images/oceania/shared-oceania-images"

export const getSharedImages = (tags: string[]) => (tags.includes("asia") ? SharedAsiaImages : SharedOceaniaImages)

export const getImageProps = (country: string) => {
  switch (country) {
    case "philippines":
      return {
        // we don't want this style to apply on asia page
        imgStyle: {
          objectPosition: "-50px 30px",
          transform: "scale(1.6)",
        },
      }
    default:
      return {}
  }
}

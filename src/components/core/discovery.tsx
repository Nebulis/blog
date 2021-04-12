import { SharedAsiaImages } from "../images/asia/shared-asia-images"
import { SharedOceaniaImages } from "../images/oceania/shared-oceania-images"

export const getSharedImages = (tags: string[]) => (tags.includes("asia") ? SharedAsiaImages : SharedOceaniaImages)

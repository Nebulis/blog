import { useWindowSize } from "./useWindowSize"

export const useBannerHeight = () => {
  const { windowHeight } = useWindowSize()
  const bannerHeight = windowHeight / 9.425
  return [bannerHeight]
}

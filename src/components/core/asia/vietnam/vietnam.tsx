import { Divider } from "../../divider"
import styled from "@emotion/styled"
import { vietnamPrimaryColor } from "./vietnam.colors"
import { BlogLayout, withDraw } from "../../../layout/layout"
import { ImageAsMedallion } from "../../../images/layout"
import { draqHat } from "./console-draw-hat"

const drawer = withDraw(draqHat)

const vietnamLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover {
    fill: ${vietnamPrimaryColor};
  }

  footer a {
    color: ${vietnamPrimaryColor};
  }
  footer button.btn,
  footer button.btn:disabled {
    background-color: ${vietnamPrimaryColor};
    border-color: ${vietnamPrimaryColor};
    color: black;
  }
  footer button.btn:hover {
    background-color: ${vietnamPrimaryColor};
    border-color: ${vietnamPrimaryColor};
  }

  .menu-entry {
    border-top: 1px solid ${vietnamPrimaryColor}!important;
  }
`
export const VietnamBlogLayout = drawer(styled(BlogLayout)`
  ${vietnamLayout}
`)

export const VietnamDivider = styled(Divider)`
  background-color: ${vietnamPrimaryColor};
`
// the color has been picked from the hat images and is not derived from the primary color or other
export const VietnamImageAsMedallion = styled(ImageAsMedallion)`
  &:hover {
    border: 6px solid #f8c471;
  }
`

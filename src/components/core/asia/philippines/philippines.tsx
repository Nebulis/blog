import { Divider } from "../../divider"
import styled from "@emotion/styled"
import { philippinesPrimaryColor, philippinesPrimaryColorDarker } from "./philippines.colors"
import { ImageAsMedallion } from "../../../images/layout"
import { BlogLayout, IndexBlogLayout, withDraw } from "../../../layout/layout"
import { drawSth } from "./console-draw-sth"

export const PhilippinesDivider = styled(Divider)`
  background-color: ${philippinesPrimaryColor};
`
export const PhilippinesImageAsMedallion = styled(ImageAsMedallion)`
  &.mobile,
  &:hover {
    border: 6px solid ${philippinesPrimaryColor};
  }
`

const drawer = withDraw(drawSth)

const philippinesLayout = `
  svg.facebook:hover,
  svg.instagram:hover,
  svg.twitter:hover,
  svg.pinterest:hover,
  svg.search:hover,
  svg.likes {
    fill: ${philippinesPrimaryColor};
  }

  footer a {
    color: ${philippinesPrimaryColor};
  }
  button.btn,
  button.btn:disabled,
  button.btn:hover {
    background-color: ${philippinesPrimaryColorDarker};
    border-color: ${philippinesPrimaryColorDarker};
    color: white;
  }

  .menu-entry {
    border-top: 1px solid ${philippinesPrimaryColor}!important;
  }
`
export const IndexPhilippinesBlogLayout = drawer(styled(IndexBlogLayout)`
  ${philippinesLayout}
`)
export const PhilippinesBlogLayout = drawer(styled(BlogLayout)`
  ${philippinesLayout}
`)

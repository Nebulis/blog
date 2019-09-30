import React from "react"
import { Maintenance } from "../components/maintenance"
import { css } from "@emotion/core"

const IndexPage = () => {
  return (
    <Maintenance>
      <div
        css={css`
          color: red;
        `}
      >
        Hello world
      </div>
    </Maintenance>
  )
}

export default IndexPage

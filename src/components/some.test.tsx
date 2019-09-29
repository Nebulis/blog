import { render } from "@testing-library/react"
import React from "react"

describe("aa", () => {
  it("bla", () => {
    const { getByTestId } = render(
      <button data-testid="ok-button" type="submit" disabled>
        ok
      </button>
    )
    expect(getByTestId("ok-button")).toHaveAttribute("disabled", false)
  })
})

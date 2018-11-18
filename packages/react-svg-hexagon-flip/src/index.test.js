import {mount} from "enzyme"
import React from "react"
import HexagonFlip from "./index"

describe("HexagonFlip", () => {
  it("renders", () => {
    mount(<HexagonFlip />)
  })

  it("renders children", () => {
    mount(
      <HexagonFlip>
        <div />
      </HexagonFlip>
    )
  })

  it("renders transition", () => {
    mount(<HexagonFlip transitionDuration={0.5} />)
  })
})

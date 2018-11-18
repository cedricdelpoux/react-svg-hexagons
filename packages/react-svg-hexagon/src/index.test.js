import {mount} from "enzyme"
import React from "react"
import Hexagon from "./index"

describe("Hexagon", () => {
  it("renders", () => {
    mount(<Hexagon />)
  })

  it("renders with radius", () => {
    mount(<Hexagon radius="1" />)
  })

  it("renders with height", () => {
    mount(<Hexagon height="200" />)
  })

  it("renders with render prop", () => {
    mount(
      <Hexagon
        render={({ClipPath, Polygon, Content, Svg}) => {
          return (
            <Svg>
              <ClipPath />
              <Polygon />
              <Content />
            </Svg>
          )
        }}
      />
    )
  })
})

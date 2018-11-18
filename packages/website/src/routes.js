import React from "react"
import Hexagon from "react-svg-hexagon"
import HexagonFlip from "react-svg-hexagon-flip"
import HexagonGrid from "react-svg-hexagon-grid"
import camelCase from "lodash/camelCase"
import upperFirst from "lodash/upperFirst"

import Grid from "./grid"

const routes = [
  {
    path: "/",
    exact: true,
    component: <Grid />,

    label: "Hexagon-grid",
  },
  {
    path: "/hexagon",
    demo: {
      component: <Hexagon fill="#44B39D" />,
      displayName: "Hexagon",
    },
    label: "Hexagon",
  },
  {
    path: "/hexagon-flip",
    demo: {
      component: (
        <HexagonFlip>
          <Hexagon fill="#44B39D">Recto</Hexagon>
          <Hexagon fill="#44B39D">Verso</Hexagon>
        </HexagonFlip>
      ),
      displayName: "HexagonFlip",
    },
    label: "Hexagon-flip",
  },
]

export default routes

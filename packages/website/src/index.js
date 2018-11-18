import React from "react"
import ReactDOM from "react-dom"
import Hexagon from "react-svg-hexagon"

import ReactDemoPage from "react-demo-page"
import routes from "./routes"
import pkg from "../../react-svg-hexagon/package.json"

const Demo = () => (
  <ReactDemoPage
    basename="react-svg-hexagons"
    header={{
      title: pkg.name,
      buttons: [{label: "Github", url: pkg.homepage}],
    }}
    footer={{
      author: pkg.author,
    }}
    pages={routes}
    color="#44B39D"
  />
)

ReactDOM.render(<Demo />, document.querySelector("#app"))

import React from "react"
import Hexagon from "react-svg-hexagon"
import HexagonFlip from "react-svg-hexagon-flip"
import HexagonGrid from "react-svg-hexagon-grid"
import styled from "styled-components"

import md from "./grid.md"

const primary = "#44B39D"

const Shadow = styled.div`
  filter: drop-shadow(0px 5px 4px rgba(0, 0, 0, 0.2));
`

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  caption {
    background: ${primary};
    color: #fff;
  }

  td {
    border: 1px solid ${primary};
    text-align: center;
    padding: 3px;
  }
`

const Grid = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <div dangerouslySetInnerHTML={{__html: md}} />
    <br />
    <HexagonGrid>
      <Hexagon fill={primary}>
        <div style={{color: "#fff"}}>Fill</div>
      </Hexagon>
      <Shadow>
        <Hexagon style={{}}>Drop shadow</Hexagon>
      </Shadow>
      <Hexagon stroke={primary}>Border</Hexagon>
      <Hexagon stroke={primary} strokeWidth={5}>
        Radius 5px
      </Hexagon>
      <Hexagon radius={10} stroke={primary}>
        Border + Radius
      </Hexagon>
      <Hexagon>
        <img src="https://source.unsplash.com/random/173x200" />
      </Hexagon>
      <HexagonFlip>
        <Hexagon fill={primary} color="#fff">
          <div style={{color: "#fff"}}>Flippable</div>
        </Hexagon>
        <Hexagon fill={primary}>
          <div style={{color: "#fff"}}>Verso</div>
        </Hexagon>
      </HexagonFlip>
      <Hexagon stroke={primary}>
        <Table>
          <caption>Table</caption>
          <thead>
            <tr>
              <th>col 1</th>
              <th>col 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>d1</td>
              <td>d2</td>
            </tr>
            <tr>
              <td>d1</td>
              <td>d2</td>
            </tr>
          </tbody>
        </Table>
      </Hexagon>
      <Hexagon stroke={primary}>
        <form style={{textAlign: "center"}}>
          <p>Form</p>
          <input type="text" />
          <button>Button</button>
        </form>
      </Hexagon>
      <Hexagon
        stroke={primary}
        render={({ClipPath, Polygon, Content, Svg}) => {
          return (
            <Svg>
              <a xlinkHref="https://github.com/xuopled/react-svg-hexagon">
                <ClipPath />
                <Polygon />
                <Content>External link</Content>
              </a>
            </Svg>
          )
        }}
      />
    </HexagonGrid>
  </div>
)

export default Grid

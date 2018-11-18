import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  &:not(:root) {
    overflow: visible;
  }

  position: relative;
  display: block;
`

const ForeignObject = styled.foreignObject`
  height: 100%;
  width: 100%;
`

const Children = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ClipPath = ({path, radius, side}) => (
  <clipPath id={`clipPath_${side}_${radius}`}>
    <path d={path} />
  </clipPath>
)

const Polygon = ({path, ...props}) => <path d={path} {...props} />

const Content = ({children, path, radius, side}) => (
  <ForeignObject clipPath={`url(#clipPath_${side}_${radius})`}>
    <Children clipPath={`path('${path}')`}>{children}</Children>
  </ForeignObject>
)

class Hexagon extends React.Component {
  getHeight() {
    const {height, side} = this.props

    if (height) {
      return height
    }

    return side * 2
  }

  getWidth() {
    const height = this.getHeight()
    return (height * Math.sqrt(3)) / 2
  }

  getPath() {
    const {radius} = this.props
    const height = this.getHeight()
    const width = this.getWidth()
    const a = {x: width / 2, y: 0}
    const b = {x: width, y: height / 4}
    const c = {x: width, y: (height * 3) / 4}
    const d = {x: width / 2, y: height}
    const e = {x: 0, y: (height * 3) / 4}
    const f = {x: 0, y: height / 4}

    if (radius < 1) {
      return `
          M${a.x},${a.y}
          L${b.x},${b.y}
          L${c.x},${c.y}
          L${d.x},${d.y}
          L${e.x},${e.y}
          L${f.x},${f.y}
          Z
        `
    }

    const rightAngle = Math.atan2(b.y - a.y, b.x - a.x)
    const right = {
      x: radius * Math.cos(rightAngle),
      y: radius * Math.sin(rightAngle),
    }
    const leftAngle = Math.atan2(f.y - a.y, f.x - a.x)
    const left = {
      x: radius * Math.cos(leftAngle),
      y: radius * Math.sin(leftAngle),
    }
    const level = {x: 0, y: radius}

    return `
      M${a.x + left.x},${a.y + left.y}
      Q${a.x},${a.y},${a.x + right.x},${a.y + right.y}
      L${b.x - right.x},${b.y - right.y}
      Q${b.x},${b.y},${b.x + level.x},${b.y + level.y}
      L${c.x - level.x},${c.y - level.y}
      Q${c.x},${c.y},${c.x + left.x},${c.y + left.y}
      L${d.x - left.x},${d.y - left.y}
      Q${d.x},${d.y},${d.x - right.x},${d.y - right.y}
      L${e.x + right.x},${e.y + right.y}
      Q${e.x},${e.y},${e.x - level.x},${e.y - level.y}
      L${f.x + level.x},${f.y + level.y}
      Q${f.x},${f.y},${f.x - left.x},${f.y - left.y}
      Z
    `
  }

  renderDefault() {
    const {children, radius, side, ...props} = this.props
    const height = this.getHeight()
    const width = this.getWidth()
    const path = this.getPath()
    return (
      <Svg viewBox={`0 0 ${width},${height}`} width={width} height={height}>
        <ClipPath path={path} radius={radius} side={side} />
        <Polygon path={path} {...props} />
        <Content path={path} radius={radius} side={side}>
          {children}
        </Content>
      </Svg>
    )
  }

  renderObject() {
    const {radius, render, side, ...props} = this.props
    const height = this.getHeight()
    const width = this.getWidth()
    const path = this.getPath()

    return render({
      Svg: svgProps => (
        <Svg
          viewBox={`0 0 ${width},${height}`}
          width={width}
          height={height}
          {...svgProps}
        />
      ),
      Content: ({children}) => (
        <Content path={path} radius={radius} side={side}>
          {children}
        </Content>
      ),
      ClipPath: () => <ClipPath path={path} radius={radius} side={side} />,
      Polygon: polygonProps => (
        <Polygon path={path} {...props} {...polygonProps} />
      ),
    })
  }

  render() {
    const {render} = this.props
    return render ? this.renderObject() : this.renderDefault()
  }
}

Hexagon.defaultProps = {
  side: 100,
  radius: 0,
  fill: "#fff",
}

export default Hexagon

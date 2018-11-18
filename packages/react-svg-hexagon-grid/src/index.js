import React from "react"
import styled, {css} from "styled-components"

const media = ({width, gap, count}) => css`
  @media (min-width: ${width * (count + 1) +
      gap * count}px) and (max-width: ${width * (count + 2) +
      gap * (count + 1) -
      1}px) {
    transform: translateX(-${width / 4 + gap / 4}px);
    grid-template-columns: ${Array.from(
      {length: count},
      () => `${width}px`
    ).join(" ")};

    ${Array.from(
      {length: count},
      (v, i) => `& > *:nth-child(${2 * count}n + ${2 * count - i})`
    ).join(",")} {
      margin-left: ${width / 2 + gap / 2}px;
    }
  }
`

const Hidden = styled.div`
  visibility: hidden;
`

const GridItem = styled.div``

const Grid = styled.div`
  padding-bottom: ${props => props.hexagonHeight / 4}px;
  display: grid;
  grid-gap: ${props => props.gap}px;

  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 1})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 2})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 3})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 4})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 5})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 6})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 7})};
  ${props => media({width: props.hexagonWidth, gap: props.gap, count: 8})};

  & > ${GridItem} {
    height: ${props => props.hexagonHeight - props.hexagonHeight / 4}px;
    width: ${props => props.hexagonWidth}px;
  }
`

class HexagonGrid extends React.Component {
  constructor() {
    super()

    this.state = {
      hexagonDimensions: null,
    }

    this.refCallback = this.refCallback.bind(this)
  }

  refCallback(element) {
    if (element) {
      const boundingBox = element.getBoundingClientRect()

      this.setState({
        hexagonDimensions: boundingBox,
      })
    }
  }

  renderHiddenChild() {
    const {children} = this.props

    if (React.Children.count(children) > 0 && children[0]) {
      return React.cloneElement(<Hidden />, {
        ref: this.refCallback,
        children: children[0],
      })
    }

    return null
  }

  render() {
    const {hexagonDimensions} = this.state
    const {children, gap} = this.props

    if (!hexagonDimensions) {
      return this.renderHiddenChild()
    }

    return React.cloneElement(<Grid />, {
      children: React.Children.map(children, (child, i) =>
        React.cloneElement(<GridItem />, {
          key: i,
          children: child,
        })
      ),
      gap,
      hexagonHeight: hexagonDimensions.height,
      hexagonWidth: hexagonDimensions.width,
    })
  }
}

HexagonGrid.defaultProps = {
  gap: 30,
}

export default HexagonGrid

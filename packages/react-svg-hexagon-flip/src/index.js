import React from "react"
import styled, {css} from "styled-components"

const Hidden = styled.div`
  visibility: hidden;
`

const Face = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: transform ${props => props.transitionDuration};
`

const hoverableCss = css``

const ClipPath = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  clip-path: ${props => props.clipPath};
  z-index: 1;

  & + ${Face} {
    transform: rotateY(0deg);
  }

  & + ${Face} + ${Face} {
    transform: rotateY(-180deg);
  }

  &:hover {
    & + ${Face} {
      transform: rotateY(180deg);
    }

    & + ${Face} + ${Face} {
      transform: rotateY(0);
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  ${props =>
    props.flippable &&
    css`
      & > ${Face}:first-child {
        transform: rotateY(0deg);
      }

      & > ${Face}:last-child {
        transform: rotateY(-180deg);
      }

      &:hover {
        & > ${Face}:first-child {
          transform: rotateY(180deg);
        }

        & > ${Face}:last-child {
          transform: rotateY(0);
        }
      }
    `};
`

class HexagonFlip extends React.Component {
  constructor() {
    super()

    this.state = {dimensions: null}
    this.refCallback = this.refCallback.bind(this)
  }

  refCallback(element) {
    if (element) {
      const boundingBox = element.getBoundingClientRect()
      this.setState({
        dimensions: boundingBox,
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
    const {dimensions, flipped} = this.state
    const {children, clipPath, transitionDuration} = this.props

    if (!dimensions) {
      return this.renderHiddenChild()
    }

    return React.cloneElement(<Wrapper />, {
      width: dimensions.width,
      height: dimensions.height,
      flippable: !!!clipPath,
      children: [
        clipPath &&
          React.cloneElement(<ClipPath />, {
            key: React.Children.count(children),
            width: dimensions.width,
            height: dimensions.height,
            clipPath,
          }),
        ...React.Children.map(children, (child, i) =>
          React.cloneElement(<Face transitionDuration={transitionDuration} />, {
            key: i,
            children: child,
          })
        ),
      ],
    })
  }
}

HexagonFlip.defaultProps = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  transitionDuration: "0.5s",
}

export default HexagonFlip

# react-svg-hexagon

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

`react-svg-hexagon` is a React SVG valid hexagon component that can contain html and React components.

It uses `<foreignObject>` SVG tag allowing inclusion of non SVG elements.
Children will not overflow the hexagon because of the `clipPath` SVG tag.

Hexagon can be [flippable](../react-svg-hexagon-flip) and be part of a responsive [grid](../react-svg-hexagon-grid).

## Example

[![Sample image](../../sample.png)](https://xuopled.github.io/react-svg-hexagons/)

## Getting started

You can download `react-svg-hexagon` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-svg-hexagon
# or
npm install react-svg-hexagon --save
```

If you don't use package manager and you want to include `react-svg-hexagon` directly in your html, you could get it from the UNPKG CDN or from the local UMD build.

```html
<script src="https://unpkg.com/react-svg-hexagon/dist/react-svg-hexagon.min.js"></script>
<!-- or -->
<script src="node_modules/react-svg-hexagon/dist/react-svg-hexagon.min.js"></script>
```

## Usage

### Easy usage

```javascript
import React from "react"
import Hexagon from "react-svg-hexagon"

const App = () => (
  <>
    {/* without content */}
    <Hexagon fill="green" stroke="black" strokeWidth={3} radius={10} />
    {/* with content */}
    <Hexagon>{/* Content */}</Hexagon>
  </>
)
```

### Advanced usage

You can use the `render` prop to make `Hexagon` more custom.

For example, if you need to add a valid svg link around hexagon:

```javascript
import React from "react"
import Hexagon from "react-svg-hexagon"

const App = () => (
  <Hexagon
    render={({ClipPath, Polygon, Content, Svg}) => {
      return (
        <Svg>
          <a xlinkHref="https://github.com/xuopled/react-svg-hexagon">
            <ClipPath />
            <Polygon />
            <Content>{/* Your content */}</Content>
          </a>
        </Svg>
      )
    }}
  />
)
```

## Props

| Name        | PropType         | Description              | Default |
| ----------- | ---------------- | ------------------------ | ------- |
| fill        | PropTypes.string | Hexagon background color | -       |
| height      | PropTypes.number | Hexagon height           | null    |
| radius      | PropTypes.number | Hexagon corners radius   | 0       |
| side        | PropTypes.number | Hexagon side length      | 100     |
| stroke      | PropTypes.string | Hexagon stroke color     | -       |
| strokeWidth | PropTypes.string | Hexagon stroke width     | -       |

> If you set height, side prop will have no effect anymore because side will be automatically calculated.

## Contributing

- ⇄ Pull/Merge requests and ★ Stars are always welcome.
- For bugs and feature requests, please [create an issue][github-issue].
- Pull requests must be accompanied by passing automated tests (`yarn test`).

See [CONTRIBUTING.md](../../CONTRIBUTING.md) guidelines

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](../../LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-svg-hexagon.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-svg-hexagon
[build-badge]: https://img.shields.io/travis/xuopled/react-svg-hexagon/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-svg-hexagon
[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-svg-hexagon.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-svg-hexagon
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-issue]: https://github.com/xuopled/react-svg-hexagon/issues/new

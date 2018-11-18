# react-svg-hexagon

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

A React SVG valid hexagon component that can contain svg, html and React components.

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

const App = () => <Hexagon>{/* Your content */}</Hexagon>
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

## Demo

See [Demo page][github-page]

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
[github-page]: https://xuopled.github.io/react-svg-hexagon
[github-issue]: https://github.com/xuopled/react-svg-hexagon/issues/new

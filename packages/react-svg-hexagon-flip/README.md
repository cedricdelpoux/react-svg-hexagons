# react-svg-hexagon-flip

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

A React component to render a flippable hexagon with two faces.

HexagonFlip must contain two [Hexagons](../react-svg-hexagon) components.

## Getting started

You can download `react-svg-hexagon-flip` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-svg-hexagon-flip
# or
npm install react-svg-hexagon-flip --save
```

If you don't use package manager and you want to include `react-svg-hexagon-flip` directly in your html, you could get it from the UNPKG CDN or from the local UMD build.

```html
<script src="https://unpkg.com/react-svg-hexagon-flip/dist/react-svg-hexagon-flip.min.js"></script>
<!-- or -->
<script src="node_modules/react-svg-hexagon-flip/dist/react-svg-hexagon-flip.min.js"></script>
```

## Usage

```javascript
import React from "react"
import Hexagon from "react-svg-hexagon"
import HexagonFlip from "react-svg-hexagon-flip"

const App = () => (
  <HexagonFlip>
    <Hexagon>{/* Recto content */}</Hexagon>
    <Hexagon>{/* Verso content */}</Hexagon>
  </HexagonFlip>
)
```

## Props

| Name     | PropType         | Description                                      | Default        |
| -------- | ---------------- | ------------------------------------------------ | -------------- |
| clipPath | PropTypes.string | ClipPath for flippable effect. `null` to disable | "polygon(...)" |
| duration | PropTypes.string | Flip transition duration                         | "0.5s"         |

> You may need to disable the clipPath if you have links in your hexagons

## Contributing

- ⇄ Pull/Merge requests and ★ Stars are always welcome.
- For bugs and feature requests, please [create an issue][github-issue].
- Pull requests must be accompanied by passing automated tests (`yarn test`).

See [CONTRIBUTING.md](../../CONTRIBUTING.md) guidelines

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](../../LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-svg-hexagon-flip.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-svg-hexagon-flip
[build-badge]: https://img.shields.io/travis/xuopled/react-svg-hexagon-flip/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-svg-hexagon-flip
[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-svg-hexagon-flip.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-svg-hexagon-flip
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-issue]: https://github.com/xuopled/react-svg-hexagon-flip/issues/new

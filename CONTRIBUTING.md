# Contributing

## Prerequisites

[Node.js](http://nodejs.org/) >= v4 must be installed.

## Installation

- `yarn` will install everything you need for development.
- `yarn bootstrap` will install the dependencies of sub repositories packages and links any cross-dependencies

## Website

- `yarn website` will run a development server with the component's demo app at [http://localhost:1190](http://localhost:1190) with hot module reloading.

## Linting

- `yarn lint` will lint the `src` folders of every package.

## Tests

- `yarn test` will run the tests for every package and produce a coverage report in `coverage/`.

## Building

- `yarn build` will build every package for publishing to npm.
- `yarn clean` will delete built resources.

> **Builds:**
>
> - CommonJS build => `/lib`,
> - ES6 modules build => `/es`
> - UMD build => `/dist`

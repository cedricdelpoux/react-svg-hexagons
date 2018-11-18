import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import camelCase from "lodash/camelCase"
import upperFirst from "lodash/upperFirst"

const NODE_ENV = process.env.NODE_ENV || "development"

const createConfig = ({pkg}) => ({
  input: "./src/index.js",
  output: [
    {
      exports: "named",
      file: pkg.unpkg,
      format: "umd",
      globals: {react: "React", "styled-components": "styled"},
      name: upperFirst(camelCase(pkg.name)),
    },
    {
      file: pkg.module,
      format: "es",
    },
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs({
      sourceMap: NODE_ENV === "production" ? false : true,
    }),
  ],
  external: ["react", "styled-components"],
})

export default createConfig

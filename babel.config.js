const modules = process.env["NODE_ENV"] === "test" ? "auto" : false

module.exports = {
  presets: [["@babel/env", {modules}], "@babel/react"],
  plugins: ["babel-plugin-styled-components"],
}

import esbuild from "esbuild"
import fs from "fs"

const pkg = JSON.parse(fs.readFileSync("package.json"))
const version = pkg.version

const common = {
  entryPoints: ["src/nestedul.js"],
  bundle: true,
  sourcemap: true,
  minify: true,
  define: {
    "__VERSION__": `"${version}"`
  },
  banner: {
  js: `/*!
 * NestedUl v${version}
 * https://github.com/Zlatov/nestedul
 * ISC License
 */`
  }
}

// ESM
await esbuild.build({
  ...common,
  format: "esm",
  outfile: "dist/nestedul.esm.js"
})

// CommonJS
await esbuild.build({
  ...common,
  format: "cjs",
  outfile: "dist/nestedul.cjs.js"
})

// IIFE для script tag
await esbuild.build({
  ...common,
  format: "iife",
  globalName: "NestedUl",
  outfile: "dist/nestedul.iife.js"
})

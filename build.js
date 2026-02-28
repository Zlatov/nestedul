import esbuild from "esbuild"

const common = {
  entryPoints: ["src/nestedul.js"],
  bundle: true,
  sourcemap: true,
  minify: true
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

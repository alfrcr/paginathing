import terser from "@rollup/plugin-terser";

const devMode = process.env.NODE_ENV !== "production";

export default {
  input: "src/paginathing.js",
  output: {
    file: "dist/paginathing.min.js",
    format: "iife",
    sourcemap: devMode ? "inline" : true,
  },
  plugins: [terser()],
};

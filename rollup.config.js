import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import globals from "rollup-plugin-node-globals";

export default {
  input: "src/index.ts",
  plugins: [
    nodeResolve({
      browser: true,
      extensions: [".js", ".ts"],
      preferBuiltins: false,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      moduleResolution: "node"
    }),
    globals({ buffer: true })
  ],
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },
};

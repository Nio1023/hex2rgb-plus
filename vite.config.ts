import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/index.ts"),
      name: "hex2rgb",
      fileName: format => `hex2rgb.${format}.js`,
    },
    outDir: resolve(__dirname, "lib"),
  },
})

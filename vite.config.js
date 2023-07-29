import { resolve } from "path";

const root = resolve(__dirname, "src");
const publicDir = resolve(__dirname, "public");
const outDir = resolve(__dirname, "dist");

export default {
  root,
  publicDir,
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        nested: resolve(root, 'nested/index.html'),
      },
    },
  },
  server: {
    port: 3000
  }
};

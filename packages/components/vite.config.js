import { defineConfig } from 'vite';
import * as path from 'path';
import * as fs from 'fs';
import dts from 'vite-plugin-dts';

function copySync (src, dest) {
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copySync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js'
    },
    emptyOutDir: false
  },
  plugins: [
    {
      name: 'copy',
      generateBundle () {
        copySync(path.resolve(__dirname, './src/global.css'), path.resolve(__dirname, './dist/global.css'));
        copySync(path.resolve(__dirname, './src/variables.css'), path.resolve(__dirname, './dist/variables.css'));
      }
    },
    dts()
  ]
});

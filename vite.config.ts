/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./unocss.config";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: `assets/[name].css`,
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss(), vueSetupExtend()],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "Terse",
      fileName: "terse",
      formats: ["es", "umd", "iife"],
    },
    cssCodeSplit: true,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});

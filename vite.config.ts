import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mobile-pad-challenge/",
  plugins: [vue(), Icons()],
});

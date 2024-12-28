/*
 * @Description:
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-12-28 07:50:23
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-28 09:31:06
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src/",
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },
})

